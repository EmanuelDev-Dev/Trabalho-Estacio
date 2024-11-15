import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import firebase from '../firebaseConfig';

export default function ExerciseScreen({ route, navigation }) {
  const { id } = route.params;
  const [exercise, setExercise] = useState(null);

  useEffect(() => {
    const fetchExercise = async () => {
      const snapshot = await firebase.database().ref(`exercises/${id}`).once('value');
      setExercise(snapshot.val());
    };

    fetchExercise();
  }, [id]);

  if (!exercise) {
    return <Text>Carregando...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{exercise.title}</Text>
      <Text>{exercise.description}</Text>
      {exercise.audioUrl && <Button title="Tocar Áudio" onPress={() => {/* Reproduzir áudio */}} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
});
