import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import 'isomorphic-unfetch'

import Layout from '../components/layout'
import Filters from '../components/filters'
import Event from '../components/event'

export default class extends React.Component {

  static async getInitialProps({ req }) {
    const res = await fetch('http://0.0.0.0:49160/events?query={event(uuid:%22%22){title,description,url,image,uuid,score}}')
    const events = await res.json()
    return { events }
  }

  state = {
    selectedIndex: 0
  }

  setFilterIndex = index => this.setState({ selectedIndex: index })

  renderEvents(selectedIndex) {
    const { events } = this.props
    if (events && events.data && events.data.event && events.data.event.length) {
      if (!selectedIndex) {
        return events.data.event.map(event => <Event event={event} key={event.uuid} />)
      }
      return events.data.event
        .filter(event => event.score === selectedIndex - 1)
        .map(event => <Event event={event} key={event.uuid} />)
    }
    return null
  }

  render() {
    const { selectedIndex } = this.state
    return (<Layout>
      <Filters clickHandler={this.setFilterIndex} selectedIndex={selectedIndex} />
      {this.renderEvents(selectedIndex)}
    </Layout>)
  }
}
