import EventModel from '../model/eventModel';

const isNewEvent = event => EventModel.findOne({ uuid: event.uuid });

const saveEvent = (result, event) => (!result ? new EventModel(event).save() : null);

const saveEvents = (events) => {
  const promises = events.map(event =>
    isNewEvent(event)
      .then(result => saveEvent(result, event)));
  return Promise.all(promises);
};

export default saveEvents;
