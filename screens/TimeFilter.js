import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SectionCard from "../components/SectionCard";
import PMContainer from "../components/PMContainer";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const TimeFilter = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.timeFilter, styles.statusbarBg]}>
      <View style={[styles.statusbar, styles.dimmerPosition]}>
        <Image
          style={[styles.notchIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.leftSide, styles.leftSideLayout]}>
          <View style={[styles.statusbarTime, styles.leftSideLayout]}>
            <Text style={[styles.time, styles.dayTypo]}>9:41</Text>
          </View>
        </View>
        <Image
          style={[styles.rightSideIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/right-side.png")}
        />
      </View>
      <View style={[styles.dimmer, styles.dimmerPosition]}>
        <View style={styles.dimmer1} />
      </View>
      <View style={styles.vectorParent}>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/rectangle-296.png")}
        />
        <SectionCard
          eventTime="Time"
          onFramePress={() => navigation.navigate("UpcomingSesions")}
        />
        <PMContainer />
      </View>
      <Pressable
        style={[styles.button, styles.iconPosition]}
        onPress={() => navigation.navigate("UpcomingSesions")}
      >
        <Text style={[styles.day, styles.dayTypo]}>Save</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  statusbarBg: {
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  dimmerPosition: {
    width: 390,
    left: -19,
    top: -9,
    position: "absolute",
  },
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  leftSideLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  dayTypo: {
    textAlign: "center",
    lineHeight: 22,
    fontSize: FontSize.bodyBold_size,
  },
  notchIcon: {
    marginLeft: -86,
    top: 9,
    width: 172,
    height: 32,
  },
  time: {
    top: 1,
    left: 0,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.bodyBold,
    color: Color.labelColorLightPrimary,
    height: 20,
    width: 54,
    lineHeight: 22,
    fontSize: FontSize.bodyBold_size,
    position: "absolute",
  },
  statusbarTime: {
    marginLeft: -27,
    top: 0,
    borderRadius: Border.br_5xl,
  },
  leftSide: {
    marginLeft: -168,
    top: 14,
  },
  rightSideIcon: {
    marginLeft: 91,
    top: 19,
    width: 77,
    height: 13,
  },
  statusbar: {
    height: 63,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  dimmer1: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorGray_100,
    position: "absolute",
    width: "100%",
  },
  dimmer: {
    height: 121,
  },
  groupChild: {
    top: 8,
    left: 15,
    borderRadius: Border.br_xs,
    width: 361,
    height: 580,
    position: "absolute",
  },
  vectorParent: {
    top: 43,
    left: -15,
    width: 375,
    height: 588,
    position: "absolute",
  },
  day: {
    fontFamily: FontFamily.sFProDisplay,
    color: Color.colorWhite,
  },
  button: {
    marginLeft: -177,
    bottom: 50,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorSlateblue,
    width: 356,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_xs,
  },
  timeFilter: {
    flex: 1,
    height: 640,
    width: "100%",
  },
});

export default TimeFilter;
