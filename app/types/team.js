import {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';
import { userType } from './user';
import { playerType } from './player';
import { getPlayer } from '../data/players';
import { getUser } from '../data/users';


export const teamType = new GraphQLObjectType({
  name: 'Team',
  description: 'A team of players made by a user at Fantasy Football.',
  fields: () => ({
    teamId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: GraphQLString,
      description: 'The name of a team.',
    },
    crest: {
      type: GraphQLString,
      description: 'A URL to a crest image of a team.',
    },
    formation: {
      type: GraphQLString,
      description: 'The formation used by a team.',
    },
    value: {
      type: GraphQLInt,
      description: 'The total value of a team.',
    },
    budget: {
      type: GraphQLInt,
      description: 'The remaining budget of a team.',
    },
    players: {
      type: new GraphQLList(playerType),
      description: 'All the players in a team.',
      resolve: ({players}) => players.map(getPlayer)
    },
    user: {
      type: userType,
      description: 'The user who created the team.',
      resolve: ({user}) => getUser(user)
    }
  }),
});