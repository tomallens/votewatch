import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Notifications from 'expo-notifications';
import { useEffect, useRef } from "react";
import * as Device from 'expo-device';

import Feed from "../screens/feed/Feed";
import Profile from "../screens/profile/Profile";
const register = require('../expoPushTokens')

const Tab = createBottomTabNavigator();


async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
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
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true
  }),
});

function TabNavigator() {

  const responseListener = useRef();
  
  useEffect(() => {
    registerForPushNotificationsAsync().then(token => expoPushTokensApi.register(token));

      responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
        console.log('--- notification tapped ---');
        console.log(response);
        console.log('------');
    });
    
    return () => {
        Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
