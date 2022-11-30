//start of an attempt to break functionality out of main App, currently unused.

// import * as Notifications from 'expo-notifications';


// async function registerForPushNotificationsAsync() {
//   let token;

//   const { status: existingStatus } = await Notifications.getPermissionsAsync();
//   let finalStatus = existingStatus;

//   if (existingStatus !== 'granted') {
//       const { status } = await Notifications.requestPermissionsAsync();
//       finalStatus = status;
//   }
//   if (finalStatus !== 'granted') {
//       alert('Failed to get push token for push notification!');
//       return;
//   }
//   token = (await Notifications.getExpoPushTokenAsync()).data;
//   console.log(token);

//   return token;
// }