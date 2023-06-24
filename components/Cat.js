import { View, Text } from "react-native";
import React from "react";

const getFullName = (Fn, Sn, Tn) => {
  return Fn + " " + Sn + " " + Tn;
};

const Cat = () => {
  return (
    <View>
      <Text> hElLO, i aM {getFullName("Pra", "Sob" , "Pai")} </Text>
    </View>
  );
};

export default Cat;
