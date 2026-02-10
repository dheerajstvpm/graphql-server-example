import db from "./_db.js";

const { games, reviews, authors } = db;

export const resolvers = {
  Query: {
    games() {
      return games;
    },
    game(_: any, args: { id: string }) {
      return games.find((game) => game.id === args.id);
    },
    reviews() {
      return reviews;
    },
    review(_: any, args: { id: string }) {
      return reviews.find((review) => review.id === args.id);
    },
    authors() {
      return authors;
    },
    author(_: any, args: { id: string }) {
      return authors.find((author) => author.id === args.id);
    },
  },
  Game: {
    reviews(parent: { id: string }) {
      return reviews.filter((review) => review.game_id === parent.id);
    },
  },
  Author: {
    reviews(parent: { id: string }) {
      return reviews.filter((review) => review.author_id === parent.id);
    },
  },
  Review: {
    game(parent) {
      return games.find((game) => game.id === parent.game_id);
    },
    author(parent) {
      return authors.find((author) => author.id === parent.author_id);
    },
  },
  Mutation: {
    addGame(_, args) {
      return [...games, { id: games[games.length - 1].id + 1, ...args.game }];
    },
    updateGame(_, args) {
      return games.map((game) =>
        game.id === args.id ? { ...game, ...args.game } : game,
      );
    },
    deleteGame(_, args) {
      return games.filter((game) => game.id !== args.id);
    },
  },
};
