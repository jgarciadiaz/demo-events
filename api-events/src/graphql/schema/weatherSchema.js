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
      description: 'Celsius',
    },
    fahrenheit: {
      type: GraphQLString,
      description: 'Fahrenheit',
    },
    pressure: {
      type: GraphQLString,
      description: 'Pressure',
    },
    relativeHumidity: {
      type: GraphQLString,
      description: 'RelativeHumidity',
    },
    lightLevel: {
      type: GraphQLString,
      description: 'Light Level',
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
          const query = celsius ? { celsius } : {};
          return eventMongo.find(query)
        },
      },
    },
  }),
});

export default eventSchema;
