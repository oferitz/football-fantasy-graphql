import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
} from 'graphql'

import { newTeam } from '../data/teams'
import { teamType } from '../types/team'

const createTeamInput = new GraphQLInputObjectType({
  name: 'createTeamInput',
  description: 'Input for creating a team',
  fields: {
    name: {
      type: GraphQLString,
      description: 'The name of a team',
    },
    user: {
      type: GraphQLInt,
      description: 'The user who created the team.'
    }

  },
});

export const createTeam = {
  name: 'createTeam',
  type: teamType,
  description: 'Add a team to the Football Fantasy database.',
  args: {
    team: {
      type: new GraphQLNonNull(createTeamInput),
      description: 'The team data to add.',
    }
  },
  resolve: (_, { team }) => {
    return newTeam(team)
  },
};