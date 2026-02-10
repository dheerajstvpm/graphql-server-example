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
};
