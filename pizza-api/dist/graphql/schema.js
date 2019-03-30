"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const pizzas = [
    {
        id: 1,
        name: '06 - Calabresa',
        description: 'Molho, mussarela, calabresa,  azeitona,  tomate e oregano.',
        price: ''
    }
];
const typeDefs = `
    type Pizza {
        id: ID!
        name: String!
        description: String!
        price: String
    }

    type Query {
        allPizzas: [Pizza!]!
    }
`;
const resolvers = {
    Query: {
        allPizzas: () => pizzas
    }
};
exports.default = graphql_tools_1.makeExecutableSchema({ typeDefs, resolvers });
