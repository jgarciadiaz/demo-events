import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import 'isomorphic-unfetch'

import Layout from '../components/layout'
import Event from '../components/event'

import FontIcon from 'material-ui/FontIcon'
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation'

import ActionHome from 'material-ui/svg-icons/action/home'
import ActionGrade from 'material-ui/svg-icons/action/grade'

const getItemColor = (index, selectedIndex) => index === selectedIndex ? '#c10808' : null


export default class extends React.Component {

  static async getInitialProps({ req }) {
    const res = await fetch('http://0.0.0.0:49160/events?query={event(uuid:%22%22){title,description,url,image,uuid,score}}')
    const events = await res.json()
    return { events }
  }

  state = {
    selectedIndex: 0
  }

  select = index => this.setState({ selectedIndex: index })

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
      <BottomNavigation selectedIndex={selectedIndex}>
        <BottomNavigationItem
          icon={<FontIcon color={getItemColor(0, selectedIndex)}>All</FontIcon>}
          onClick={() => this.select(0)}
        />
        <BottomNavigationItem
          icon={<ActionHome color={getItemColor(1, selectedIndex)} />}
          onClick={() => this.select(1)}
        />
        <BottomNavigationItem
          icon={<ActionGrade color={getItemColor(2, selectedIndex)} />}
          onClick={() => this.select(2)}
        />
      </BottomNavigation>

      {this.renderEvents(selectedIndex)}
    </Layout>)
  }
}
