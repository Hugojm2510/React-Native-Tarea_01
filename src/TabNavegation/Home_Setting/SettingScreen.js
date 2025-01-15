import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export function SettingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SettingScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23272a',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },

  text: {
    color: '#ffff'
  },
});