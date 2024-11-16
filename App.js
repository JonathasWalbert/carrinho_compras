import React from "react";
import Routes from "./src/routes/routes";
import CartProvider from "./src/Contexts/CartContext";

import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

export default function App(){
  return(
    <NavigationContainer>
      <CartProvider>
        <StatusBar backgroundColor="#FAFAFA" barStyle='dark-content' />
        <Routes />
      </CartProvider>
    </NavigationContainer>
  )
}