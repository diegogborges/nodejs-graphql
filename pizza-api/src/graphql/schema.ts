import { makeExecutableSchema } from 'graphql-tools'

const pizzas: any[] = [
    {
        id: 1,
        name: '06 - Calabresa',
        description: 'Molho, mussarela, calabresa,  azeitona,  tomate e oregano.',
        price: ''
    }
]

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
`

const resolvers = {
    Query: {
        allPizzas: () => pizzas
    }
}

export default makeExecutableSchema({typeDefs, resolvers})