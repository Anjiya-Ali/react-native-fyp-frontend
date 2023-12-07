import * as React from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const FrontPage = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.frontPage}
      onPress={() => navigation.navigate("SecondFrontPage")}
    >
      <Image
        style={styles.imageIzlyy1zfiTransformed1Icon}
        resizeMode="cover"
        source={require("../assets/imageizlyy1zfitransformed-13.png")}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageIzlyy1zfiTransformed1Icon: {
    position: "absolute",
    top: 67,
    left: 0,
    width: 360,
    height: 438,
  },
  frontPage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default FrontPage;
