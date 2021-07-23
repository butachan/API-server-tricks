const env = process.env;

const config = {
  db: {
  host: "localhost",
  user: "root",
  password: "mdp",
    database: "tricking_progression",
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};


module.exports = config;