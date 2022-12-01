const { loadLastPublishedDate } = require('./commonsVotesAPI')
const { loadLastPublishedTitle } = require('./commonsVotesAPI')
const sendPushNotification = require("../../utilities/pushNotifications")

const targetExpoPushToken = 'ExponentPushToken[DpsvtbIE_mri5Uwbg913HU]'

let lastPublished = new Date("2022-11-29T12:42:06")

async function checkNewVotes () {
  console.log('THINKING ABOUT IT')
  const fetchedDate = await loadLastPublishedDate()
  const fetchedTitle = await loadLastPublishedTitle()
  if (fetchedDate > lastPublished
    ){
      await sendPushNotification(targetExpoPushToken, fetchedTitle);
      lastPublished = loadLastPublishedDate;
      console.log(`notif response triggered, new lastPublished = ${lastPublished}`)
  }
}

module.exports = checkNewVotes
  