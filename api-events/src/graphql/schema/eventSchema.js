import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
} from 'graphql/type'

import eventMongo from '../../model/eventModel'

const eventType = new GraphQLObjectType({
  name: 'event',
  description: 'Event',
  fields: () => ({
    uuid: {
      type: GraphQLString,
      description: 'Event ID',
    },
    title: {
      type: GraphQLString,
      description: 'Event Title',
    },
    description: {
      type: GraphQLString,
      description: 'Event Description',
    },
    url: {
      type: GraphQLString,
      description: 'Event URL',
    },
    image: {
      type: GraphQLString,
      description: 'Event Image',
    },
    score: {
      type: GraphQLString,
      description: 'Event Score for Clasification',
    }
  }),
})

const eventSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      event: {
        type: new GraphQLList(eventType),
        args: {
          uuid: {
            name: 'uuid',
            type: GraphQLString,
          },
        },
        resolve: (root, { uuid }) => {
          const query = uuid ? { uuid } : {}
          return eventMongo.find(query)
        },
      },
    },
  }),
})

export default eventSchema
