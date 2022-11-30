const { loadLastPublishedDate } = require('./commonsVotesAPI')
const { loadLastPublishedTitle } = require('./commonsVotesAPI')
const sendPushNotification = require("../../utilities/pushNotifications")
const Expo = require("expo-server-sdk")

let lastPublished = new Date("2022-11-29T12:42:06")

async function checkNewVotes () {
  console.log('THINKING ABOUT IT')
  const fetchedDate = await loadLastPublishedDate()
  const fetchedTitle = await loadLastPublishedTitle()
  console.log(`${fetchedDate}`)
  if (fetchedDate > lastPublished
    // && Expo.isExpoPushToken(expoPushToken)
    ){
      // await sendPushNotification(expoPushToken, loadLastPublishedTitle);
      lastPublished = loadLastPublishedDate;
      console.log(`notif response triggered, new lastPublished = ${lastPublished}`)
  }
}


module.exports = checkNewVotes
  