import { GraphQLID, GraphQLNonNull, GraphQLList } from 'graphql';

import { teamType } from '../types/team';
import { getTeam, getAllTeams } from '../data/teams';

export const teamFields = {
  allTeams: {
    type: new GraphQLList(teamType),
    description: 'Get all teams',
    resolve: () => getAllTeams()
  },
  team: {
    type: teamType,
    description: 'Get a specific team.',
    args: {
      teamId: {
        type: new GraphQLNonNull(GraphQLID),
        description: 'The id of the team.',
      },
    },
    resolve: (root, {teamId}) => getTeam(teamId),
  },
};