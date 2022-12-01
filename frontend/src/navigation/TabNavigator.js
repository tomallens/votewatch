import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Notifications from 'expo-notifications';
import { useEffect } from "react";
import * as Device from 'expo-device';

import Feed from "../screens/feed/Feed";
import Profile from "../screens/profile/Profile";

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
  handleRegistration(token);
  return token;
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true
  }),
});

async function handleRegistration(token) {
  await fetch('http://localhost:8080/register', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
      pushtoken: token
    })
  }).then((response) => {
    if (response.status === 201) {
      console.log('OK');
    } else {
      console.log('OH NO');
    }
  });
}

function TabNavigator() {
  
  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
