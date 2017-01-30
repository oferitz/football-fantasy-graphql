
import {
  GraphQLSchema, GraphQLObjectType } from 'graphql';

import { userFields } from '../fields/user';
import { playerFields } from '../fields/player';
import { teamFields } from '../fields/team';

import { RootMutationType } from '../mutations';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      ...userFields,
      ...playerFields,
      ...teamFields,
    },
  }),
  mutation: RootMutationType,
});

export default schema;