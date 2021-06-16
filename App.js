import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";

import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

//const isAndroid = Platform.OS === "android";

export default function App() {
  return (
    <>
      {/*
    SafeAreaView is only working for iOS,
    StatusBar is only working for Android, for iOS is null
    */}
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
