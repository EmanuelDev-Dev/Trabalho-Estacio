import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function ProgressBar({ progress, color = '#6200ee' }) {
  return (
    <View style={styles.container}>
      <View style={[styles.bar, { width: `${progress}%`, backgroundColor: color }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
  },
});
