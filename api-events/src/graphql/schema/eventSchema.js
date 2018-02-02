import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
} from 'graphql/type';

import eventMongo from '../../model/eventModel';

const eventType = new GraphQLObjectType({
  name: 'event',
  description: 'event event',
  fields: () => ({
    uuid: {
      type: GraphQLString,
      description: 'The id of the event.',
    },
    title: {
      type: GraphQLString,
      description: 'Events title',
    },
    description: {
      type: GraphQLString,
      description: 'Events description',
    },
    url: {
      type: GraphQLString,
      description: 'Events url',
    },
    image: {
      type: GraphQLString,
      description: 'Events image',
    },
  }),
});

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
          const foundEvents = new Promise((resolve, reject) => {
            const query = uuid ? { uuid } : {};
            eventMongo.find(query, (error, events) => (error ? reject(error) : resolve(events)));
          });
          return foundEvents;
        },
      },
    },
  }),
});

export default eventSchema;
