## Example extracted from
https://github.com/erelsgl/limdu

## Mongo query to drop score field from all entries
db.events.update({}, {$unset: { score: 1}}, {multi: true})
