import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const SecondFrontPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.secondFrontPage}>
      <View style={[styles.secondFrontPageChild, styles.image1IconPosition]} />
      <Image
        style={[styles.secondFrontPageItem, styles.secondLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <Image
        style={[styles.secondFrontPageInner, styles.secondLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <View style={[styles.rectangleView, styles.image1IconPosition]} />
      <Text style={[styles.courseHub, styles.courseHubFlexBox]}>
        COURSE HUB{" "}
      </Text>
      <Text style={[styles.streamlinedPlatformFor, styles.courseHubFlexBox]}>
        Streamlined platform for teachers to upload courses and students to
        enroll, fostering accessible education.
      </Text>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("PrivacyPolicy")}
      />
      <Text style={[styles.getStarted, styles.getStartedTypo]}>
        Get Started
      </Text>
      <Text style={[styles.alreadyHaveAnContainer, styles.getStartedTypo]}>
        <Text style={styles.alreadyHaveAn}>{`Already have an account? `}</Text>
        <Text style={styles.logIn}>Log in</Text>
      </Text>
      <Image
        style={[styles.ellipseIcon, styles.secondLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.image1Icon, styles.image1IconPosition]}
        resizeMode="cover"
        source={require("../assets/image-18.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image1IconPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  secondLayout: {
    height: 13,
    width: 11,
    top: 464,
    position: "absolute",
  },
  courseHubFlexBox: {
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  getStartedTypo: {
    fontFamily: FontFamily.jaldiRegular,
    textAlign: "center",
    position: "absolute",
  },
  secondFrontPageChild: {
    height: 551,
    backgroundColor: Color.colorGainsboro_100,
    top: 0,
    left: 0,
  },
  secondFrontPageItem: {
    left: 180,
  },
  secondFrontPageInner: {
    left: 197,
  },
  rectangleView: {
    top: 510,
    borderTopLeftRadius: Border.br_31xl,
    borderTopRightRadius: Border.br_31xl,
    backgroundColor: Color.colorSlateblue,
    height: 130,
  },
  courseHub: {
    top: 320,
    left: 38,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.javaneseText,
    width: 284,
    height: 34,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  streamlinedPlatformFor: {
    top: 373,
    left: 23,
    fontFamily: FontFamily.jacquesFrancoisRegular,
    width: 313,
    height: 83,
    fontSize: FontSize.size_base,
  },
  rectanglePressable: {
    top: 531,
    left: 32,
    borderRadius: Border.br_31xl,
    width: 297,
    height: 44,
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  getStarted: {
    top: 534,
    left: 122,
    fontSize: FontSize.size_5xl,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.jaldiRegular,
  },
  alreadyHaveAn: {
    color: Color.colorWhite,
  },
  logIn: {
    color: "#f8ee08",
  },
  alreadyHaveAnContainer: {
    top: 587,
    left: 81,
    fontSize: FontSize.size_base,
  },
  ellipseIcon: {
    left: 163,
  },
  image1Icon: {
    height: 299,
    top: 0,
    left: 0,
  },
  secondFrontPage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default SecondFrontPage;
