import { GraphQLObjectType } from 'graphql';

import { createTeam } from './teams';

export const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createTeam,
  },
});