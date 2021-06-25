import React, { useContext } from "react";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Text, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { RestaurantsNavigator } from "./restaurants.navigator";
//import { SettingsNavigator } from "./settings.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";

import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";

//import { CheckoutNavigator } from "./checkout.navigator";
//import { CartContextProvider } from "../../services/cart/cart.context";
//import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
//import { LocationContextProvider } from "../../services/location/location.context";
//import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { colors } from "../../infrastructure/theme/colors";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Checkout: "md-cart",
  Settings: "md-settings",
};

const Settings = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Text>Settings</Text>
      <Button title="logout" onPress={() => onLogout()} />
    </SafeArea>
  );
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <Tab.Navigator
          screenOptions={createScreenOptions}
          tabBarOptions={{
            activeTintColor: colors.brand.primary,
            inactiveTintColor: colors.brand.muted,
          }}
        >
          <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
          {/* <Tab.Screen name="Checkout" component={CheckoutNavigator} /> */}
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);
