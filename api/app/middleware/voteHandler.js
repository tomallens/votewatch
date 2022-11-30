import { loadLastPublishedDate, loadLastPublishedTitle } from './commonsVotesAPI'
import { Expo } from 'expo-server-sdk'
import sendPushNotification from './pushNotifications';

let lastPublished = new Date("2022-11-29T12:42:06")
const timeInterval = 60000;

async function checkNewVotes () {
  if (loadLastPublishedDate() > lastPublished && Expo.isExpoPushToken(expoPushToken)){
    await sendPushNotification(expoPushToken, loadLastPublishedTitle());
    lastPublished = loadLastPublishedDate
    console.log('notif response triggered')
  }
}

setInterval(() => {
  loadLastPublishedDate();
  loadLastPublishedTitle();
}, timeInterval);

export default checkNewVotes;
  