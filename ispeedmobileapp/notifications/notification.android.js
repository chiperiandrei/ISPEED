import PushNotification from 'react-native-push-notification';

const showNotification = (channelId, message) => {
  switch (channelId) {
    case 12:
      PushNotification.localNotification({
        channelId: '12',
        title: 'New user',
        message,
        invokeApp: false,
        actions: ['Yes', 'No'],
      });
      break;
    default:
      break;
  }
};

const handleScheduleNotification = (channelId, message) => {
  switch (channelId) {
    case 12:
      PushNotification.localNotification({
        channelId: '12',
        title: 'New user',
        message,
        invokeApp: false,
        actions: ['Yes', 'No'],
      });
      break;
    default:
      break;
  }
};

const handleCancel = () => {
  PushNotification.cancelAllLocalNotifications();
};

export { showNotification, handleScheduleNotification, handleCancel };

