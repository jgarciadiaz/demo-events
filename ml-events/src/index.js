import EventML from './services/eventML'

function main() {
	const event = "Up to 80% Off Salsa or Ballroom Dance Classes"
	const eventML = new EventML()
	eventML.run()

	const prediction = eventML.getPrediction(event)
	console.log('prediction', prediction)
}

main()
