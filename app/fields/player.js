import { GraphQLID, GraphQLNonNull, GraphQLList } from 'graphql'

import { playerType } from '../types/player'
import { getPlayer, getAllPlayers } from '../data/players'

export const playerFields = {
  allPlayers: {
    type: new GraphQLList(playerType),
    description: 'Get all players',
    resolve: () => getAllPlayers()
  },
  player: {
    type: playerType,
    description: 'Get a specific player on Fantasy Football.',
    args: {
      playerId: {
        type: new GraphQLNonNull(GraphQLID),
        description: 'The id of the player',
      },
    },
    resolve: (root, {playerId}) => getPlayer(playerId)
  },
};