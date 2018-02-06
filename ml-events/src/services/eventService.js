import EventModel from '../model/eventModel'

export function saveEvent(event) {
  return new EventModel(event).save()
}

export function listEvents(query = {}) {
  return EventModel.find(query)
}
