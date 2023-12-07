import * as React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const VideoCall = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.videoCall}>
      <View style={[styles.videoCallChild, styles.videoPosition]} />
      <Image
        style={styles.icons8Back501}
        resizeMode="cover"
        source={require("../assets/icons8back50-1.png")}
      />
      <View style={[styles.videoCallItem, styles.videoPosition]} />
      <Image
        style={[styles.icons8Speaker301, styles.icons8Position]}
        resizeMode="cover"
        source={require("../assets/icons8speaker30-1.png")}
      />
      <TouchableOpacity
        style={[styles.icons8EndCall601, styles.icons8Position]}
        onPress={() => navigation.navigate("Chat3")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icons8endcall60-1.png")}
        />
      </TouchableOpacity>
      <Image
        style={[styles.icons8MuteUnmute502, styles.icons8Position]}
        resizeMode="cover"
        source={require("../assets/icons8muteunmute50-2.png")}
      />
      <Image
        style={[styles.icons8Call501, styles.icons8Position]}
        resizeMode="cover"
        source={require("../assets/icons8call50-1.png")}
      />
      <Text style={styles.text}>02 : 12</Text>
      <Image
        style={styles.icon1}
        resizeMode="cover"
        source={require("../assets/1516807823802-25.png")}
      />
      <Image
        style={styles.inshasamnani3Icon}
        resizeMode="cover"
        source={require("../assets/inshasamnani-32.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  videoPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  icons8Position: {
    height: 30,
    top: 582,
    position: "absolute",
  },
  videoCallChild: {
    top: 617,
    backgroundColor: Color.colorWhite,
    height: 22,
  },
  icons8Back501: {
    top: 620,
    left: 4,
    width: 19,
    height: 16,
    position: "absolute",
  },
  videoCallItem: {
    top: 577,
    backgroundColor: Color.colorSlateblue,
    height: 40,
  },
  icons8Speaker301: {
    left: 25,
    width: 30,
    height: 30,
    top: 582,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  icons8EndCall601: {
    left: 297,
    width: 33,
    height: 30,
    top: 582,
  },
  icons8MuteUnmute502: {
    left: 206,
    width: 30,
    height: 30,
    top: 582,
  },
  icons8Call501: {
    left: 116,
    width: 30,
    height: 30,
    top: 582,
  },
  text: {
    top: 618,
    left: 156,
    fontSize: FontSize.bodyBold_size,
    fontFamily: FontFamily.calibri,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    position: "absolute",
  },
  icon1: {
    top: 0,
    width: 353,
    height: 577,
    left: 0,
    position: "absolute",
  },
  inshasamnani3Icon: {
    top: 447,
    left: 236,
    borderRadius: 19,
    width: 112,
    height: 112,
    position: "absolute",
  },
  videoCall: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default VideoCall;
