import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';

class NotificationManager {
  static async requestPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Permissão para notificações concedida!');
    } else {
      console.log('Permissão para notificações negada.');
    }
  }

  static async getToken() {
    try {
      const token = await messaging().getToken();
      console.log('Token FCM:', token);
      return token;
    } catch (error) {
      console.error('Erro ao obter o token FCM:', error);
      return null;
    }
  }

  static configureLocalNotifications() {
    PushNotification.configure({
      onNotification: function (notification) {
        console.log('Notificação recebida:', notification);
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
  }

  static showLocalNotification(title, message) {
    PushNotification.localNotification({
      title,
      message,
    });
  }
}

export default NotificationManager;
