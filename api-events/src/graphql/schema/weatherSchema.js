import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
} from 'graphql/type';

import eventMongo from '../../model/weatherModel';

const eventType = new GraphQLObjectType({
  name: 'event',
  description: 'event event',
  fields: () => ({
    celsius: {
      type: GraphQLString,
      description: 'celsius',
    },
    fahrenheit: {
      type: GraphQLString,
      description: 'fahrenheit',
    },
    pressure: {
      type: GraphQLString,
      description: 'pressure',
    },
    relativeHumidity: {
      type: GraphQLString,
      description: 'relativeHumidity',
    },
    lightLevel: {
      type: GraphQLString,
      description: 'lightLevel',
    }
  }),
});

const eventSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      weather: {
        type: new GraphQLList(eventType),
        args: {
          celsius: {
            name: 'celsius',
            type: GraphQLString,
          },
        },
        resolve: (root, { celsius }) => {
          const foundEvents = new Promise((resolve, reject) => {
            const query = celsius ? { celsius } : {};
            eventMongo.find(query, (error, events) => (error ? reject(error) : resolve(events)));
          });
          return foundEvents;
        },
      },
    },
  }),
});

export default eventSchema;
