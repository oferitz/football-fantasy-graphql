import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat
} from 'graphql';


export const playerType = new GraphQLObjectType({
  name: 'Player',
  description: 'A player in Fantasy Football',
  fields: {
    playerId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: GraphQLString,
      description: 'The name of the player.',
    },
    position: {
      type: GraphQLString,
      description: 'The natural position of a player.',
    },
    club: {
      type: GraphQLString,
      description: 'The name of the club the player plays for.',
    },
    price: {
      type: GraphQLFloat,
      description: 'The price of a player in MM.',
    },
    image: {
      type: GraphQLString,
      description: 'A URL to an image of a player.',
    },
    minutesPlayed: {
      type: GraphQLInt,
      description: 'Number of matches played by a player.',
    },
    goals: {
      type: GraphQLInt,
      description: 'Number of goals scored by a player.',
    },
    assists: {
      type: GraphQLInt,
      description: 'Number of assists made by a player.',
    },
    yellowCards: {
      type: GraphQLInt,
      description: 'Number of yellow cards received by a player.',
    },
    redCards: {
      type: GraphQLInt,
      description: 'Number of red cards received by a player.',
    },
    goalsConceded: {
      type: GraphQLInt,
      description: 'Number of goals conceded by a player.',
    }
  }
});