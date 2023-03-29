import db from '../mock-data/db.json' assert { type: "json" };

export const resolvers = {
  Query: {
    airports: () => db,
  },
};
