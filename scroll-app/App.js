import React from 'react'
import { Text, ScrollView } from 'react-native'

export default class App extends React.Component {
  render() {
    var toScroll = new Array(100)
    toScroll.fill(1)
    return <ScrollView>
      {toScroll.map((e, i) =>
        <Text key={'text-' + i}>Scroll {i}</Text>)
      }
    </ScrollView>
  }
}
