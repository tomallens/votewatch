import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Notifications from 'expo-notifications';
import { useEffect } from "react";

import Feed from "../screens/feed/Feed";
import Profile from "../screens/profile/Profile";

const Tab = createBottomTabNavigator();

async function registerForPushNotificationsAsync() {
  let token;

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
  }
  if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
  }
  token = (await Notifications.getExpoPushTokenAsync()).data;
  console.log(token);

  return token;
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true
  }),
});

function TabNavigator() {
  
  useEffect(() => {
    registerForPushNotificationsAsync().then(token => expoPushTokensApi.register(token));
  }, []);
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
