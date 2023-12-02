import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AudioCall = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.audioCall}>
      <View style={[styles.audioCallChild, styles.audioLayout]} />
      <Image
        style={styles.icons8Back501}
        resizeMode="cover"
        source={require("../assets/icons8back50-1.png")}
      />
      <View style={[styles.audioCallItem, styles.groupChildBg]} />
      <Image
        style={[styles.icons8Speaker301, styles.icons8Position]}
        resizeMode="cover"
        source={require("../assets/icons8speaker30-1.png")}
      />
      <Pressable
        style={[styles.icons8EndCall601, styles.icons8Position]}
        onPress={() => navigation.navigate("Chat3")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icons8endcall60-1.png")}
        />
      </Pressable>
      <Image
        style={[styles.icons8MuteUnmute502, styles.icons8Position]}
        resizeMode="cover"
        source={require("../assets/icons8muteunmute50-2.png")}
      />
      <Image
        style={styles.icon1}
        resizeMode="cover"
        source={require("../assets/1516807823802-22.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.muhammadRafi, styles.textTypo]}>
          Muhammad Rafi
        </Text>
      </View>
      <Text style={[styles.text, styles.textTypo]}>02 : 12</Text>
      <Image
        style={[styles.icons8VideoCall241, styles.icons8Position]}
        resizeMode="cover"
        source={require("../assets/icons8videocall24-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  audioLayout: {
    width: 360,
    position: "absolute",
  },
  groupChildBg: {
    backgroundColor: Color.colorSlateblue,
    left: 0,
  },
  icons8Position: {
    height: 30,
    top: 582,
    position: "absolute",
  },
  groupChildLayout: {
    height: 23,
    width: 123,
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.calibri,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  audioCallChild: {
    top: 617,
    backgroundColor: Color.colorWhite,
    height: 22,
    left: 0,
    width: 360,
  },
  icons8Back501: {
    top: 620,
    left: 4,
    width: 19,
    height: 16,
    position: "absolute",
  },
  audioCallItem: {
    top: 577,
    height: 40,
    width: 360,
    position: "absolute",
  },
  icons8Speaker301: {
    left: 23,
    width: 30,
    height: 30,
    top: 582,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  icons8EndCall601: {
    left: 307,
    width: 33,
    height: 30,
    top: 582,
  },
  icons8MuteUnmute502: {
    left: 207,
    width: 30,
    height: 30,
    top: 582,
  },
  icon1: {
    top: 52,
    left: 137,
    borderRadius: Border.br_29xl,
    width: 85,
    height: 84,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    borderRadius: Border.br_7xl,
    backgroundColor: Color.colorSlateblue,
    left: 0,
  },
  muhammadRafi: {
    top: 5,
    left: 16,
    color: Color.colorWhitesmoke_200,
    width: 90,
    height: 8,
  },
  rectangleParent: {
    top: 147,
    left: 119,
  },
  text: {
    top: 181,
    left: 165,
    color: Color.labelColorLightPrimary,
  },
  icons8VideoCall241: {
    left: 111,
    width: 30,
    height: 30,
    top: 582,
  },
  audioCall: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default AudioCall;
