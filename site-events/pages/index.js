import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import 'isomorphic-unfetch'

import Layout from '../components/layout'
import Filters from '../components/filters'
import Event from '../components/event'

export default class extends React.Component {

  static async getInitialProps({ req }) {
    const res = await Promise.all([
      fetch('http://0.0.0.0:49160/events?query={event(uuid:%22%22){title,description,url,image,uuid,score}}'),
      fetch('http://0.0.0.0:49160/weather?query={report{celsius,fahrenheit}}'),
    ])
    const eventsResults = await res[0].json()
    const weatherResults = await res[1].json()

    return {
      events: eventsResults && eventsResults.data && eventsResults.data.event ? eventsResults.data.event : [],
      weather: weatherResults && weatherResults.data && weatherResults.data.report ? weatherResults.data.report[0] : null
    }
  }

  state = {
    selectedIndex: 0
  }

  setFilterIndex = index => this.setState({ selectedIndex: index })

  renderEvents(selectedIndex) {
    const { events, weather } = this.props
    if (events.length) {
      if (!selectedIndex) {
        return events.map(event => <Event event={event} key={event.uuid} />)
      }
      return events
        .filter(event => event.score === selectedIndex - 1)
        .map(event => <Event event={event} key={event.uuid} />)
    }
    return null
  }

  render() {
    const { selectedIndex } = this.state
    const { weather } = this.props
    return (<Layout>
      <Filters clickHandler={this.setFilterIndex} selectedIndex={selectedIndex} weather={weather} />
      {this.renderEvents(selectedIndex)}
    </Layout>)
  }
}
