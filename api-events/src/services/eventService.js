import EventModel from '../model/eventModel'

export function saveEvent(event) {
  return new EventModel(event).save()
}
