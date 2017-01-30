import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} from 'graphql';
import { teamType } from './team';
import { getAllTeams } from '../data/teams';

export const userType = new GraphQLObjectType({
  name: 'User',
  description: 'A registered user to Fantasy Football Game.',
  fields: () => ({
    userId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: GraphQLString,
      description: 'The real name of a user.',
    },
    email: {
      type: GraphQLString,
      description: 'The email address of a user.',
    },
    username: {
      type: GraphQLString,
      description: 'The username in the application.',
    },
    points: {
      type: GraphQLInt,
      description: 'The current points in the game for a user.',
    },
    avatar: {
      type: GraphQLString,
      description: 'A URL to an avatar image of a user.',
    },
    teams: {
      type: new GraphQLList(teamType),
      description: 'All the teams that a user has created.',
      resolve: ({userId}) => {
        return getAllTeams()
          .then((teams) => {
            return teams.filter(t => t.user == userId)
          })
      }
    }
  }),
});