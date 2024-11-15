import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';

export default function ChatScreen({ route }) {
  const [messages, setMessages] = useState([]);
  const { userId, userName } = route.params; // Dados do usuário (ex.: ID e nome)

  useEffect(() => {
    // Configuração inicial do chat com mensagens mockadas ou busca no Firestore
    const unsubscribe = firestore()
      .collection('chats')
      .orderBy('createdAt', 'desc') // Ordenar por mais recente
      .onSnapshot(snapshot => {
        const fetchedMessages = snapshot.docs.map(doc => {
          const firebaseData = doc.data();
          return {
            _id: doc.id,
            text: firebaseData.text,
            createdAt: firebaseData.createdAt.toDate(),
            user: firebaseData.user,
          };
        });
        setMessages(fetchedMessages);
      });

    return () => unsubscribe();
  }, []);

  const onSend = useCallback((newMessages = []) => {
    const [message] = newMessages;

    // Salvar mensagem no Firestore
    firestore().collection('chats').add({
      text: message.text,
      createdAt: new Date(),
      user: {
        _id: userId,
        name: userName,
      },
    });
  }, []);

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: userId,
          name: userName,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
