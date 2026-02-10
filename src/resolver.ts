import db from "./_db.js";

const { games, reviews, authors } = db;

export const resolvers = {
  Query: {
    games() {
      return games;
    },
    reviews() {
      return reviews;
    },
    authors() {
      return authors;
    },
  },
};
