import request from 'request-promise-native';

const load = (props, events) => {
  const options = {
    method: 'POST',
    uri: `${props.apiUrl}events`,
    body: {
      events
    },
    json: true // Automatically stringifies the body to JSON
  };
  return request(options)
};

export default load;

