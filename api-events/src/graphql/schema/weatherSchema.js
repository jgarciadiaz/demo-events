import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt
} from 'graphql/type';

import weatherModel from '../../model/weatherModel';

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
    },
    created: {
      type: GraphQLString,
      description: 'Created Date',
    }
  }),
});

const eventSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      report: {
        type: new GraphQLList(eventType),
        args: {
          limit: {
            name: 'Limits the number of results',
            type: GraphQLInt,
          },
        },
        resolve: (root, { limit = 1 }) => weatherModel.find().sort({ 'created': -1 }).limit(limit)
      },
    },
  }),
});

export default eventSchema;
