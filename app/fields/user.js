import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLList
} from 'graphql'

import { userType } from '../types/user'
import { getUser, getAllUsers } from '../data/users'

export const userFields = {
  allUsers: {
    type: new GraphQLList(userType),
    description: 'Get all users',
    resolve: () => getAllUsers()
  },
  user: {
    type: userType,
    description: 'Get a specific user.',
    args: {
      userId: {
        type: new GraphQLNonNull(GraphQLID),
        description: 'The id of the user.'
      }
    },
    //   obj - The previous object, which for a field on the root Query type is often not used.
    //   args - The arguments provided to the field in the GraphQL query.
    //   context - A value which is provided to every resolver and holds important contextual information like the currently logged in user, or access to a database.
    resolve: (obj, {userId}, context) => getUser(userId)
  }
}