import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import firebase from '../firebaseConfig';

export default function Dashboard({ navigation }) {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      const snapshot = await firebase.database().ref('exercises').once('value');
      const data = snapshot.val();
      const exerciseList = data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];
      setExercises(exerciseList);
    };

    fetchExercises();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
      <Button title="Ver Detalhes" onPress={() => navigation.navigate('Exercise', { id: item.id })} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao seu Dashboard</Text>
      <FlatList
        data={exercises}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  item: { padding: 15, borderWidth: 1, marginVertical: 5, borderRadius: 5 },
});
