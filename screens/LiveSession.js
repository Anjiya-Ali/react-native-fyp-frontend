import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const LiveSession = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.liveSession}>
      <View style={[styles.header, styles.headerLayout]}>
        <View style={[styles.headerChild, styles.childPosition]} />
        <Text style={[styles.uiuxInteractiveSession, styles.drRafiTypo]}>
          UI/UX INTERACTIVE SESSION
        </Text>
        <Image
          style={styles.image1Icon}
          resizeMode="cover"
          source={require("../assets/image-16.png")}
        />
        <Text style={[styles.drRafi, styles.drRafiTypo]}>Dr Rafi</Text>
      </View>
      <Image
        style={[styles.speakingIcon, styles.speakingIconLayout]}
        resizeMode="cover"
        source={require("../assets/speaking.png")}
      />
      <View style={[styles.members, styles.headerPosition]}>
        <View style={[styles.membersChild, styles.iconLayout1]} />
        <View style={[styles.membersItem, styles.iconPosition1]} />
        <View style={[styles.membersInner, styles.iconLayout1]} />
        <View style={[styles.rectangleView, styles.iconPosition1]} />
        <View style={[styles.membersChild1, styles.childPosition]} />
        <Image
          style={[styles.image2Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/image-25.png")}
        />
        <Image
          style={[styles.image3Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/image-31.png")}
        />
        <Image
          style={[styles.image4Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/image-4.png")}
        />
        <Image
          style={[styles.image5Icon, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/image-5.png")}
        />
        <Image
          style={[styles.icons8MuteUnmute501, styles.icons8Layout2]}
          resizeMode="cover"
          source={require("../assets/icons8muteunmute50-1.png")}
        />
        <Image
          style={[styles.icons8MuteUnmute502, styles.icons8Layout2]}
          resizeMode="cover"
          source={require("../assets/icons8muteunmute50-21.png")}
        />
        <Image
          style={[styles.icons8MuteUnmute503, styles.icons8Position]}
          resizeMode="cover"
          source={require("../assets/icons8muteunmute50-21.png")}
        />
        <Image
          style={[styles.icons8MuteUnmute504, styles.icons8Position]}
          resizeMode="cover"
          source={require("../assets/icons8muteunmute50-1.png")}
        />
        <Text style={[styles.you, styles.youTypo]}>You</Text>
      </View>
      <View style={[styles.footer, styles.footerLayout]}>
        <Image
          style={[styles.icons8Mic241, styles.icons8Layout1]}
          resizeMode="cover"
          source={require("../assets/icons8mic24-1.png")}
        />
        <Image
          style={[styles.icons8Camera241, styles.icons8Layout1]}
          resizeMode="cover"
          source={require("../assets/icons8camera24-1.png")}
        />
        <Image
          style={styles.icons8Hand501}
          resizeMode="cover"
          source={require("../assets/icons8hand50-1.png")}
        />
        <Image
          style={[styles.icons8MenuVertical501, styles.icons8Layout]}
          resizeMode="cover"
          source={require("../assets/icons8menuvertical50-1.png")}
        />
        <TouchableOpacity
          style={[styles.icons8EndCall241, styles.speakingIconLayout]}
          onPress={() => navigation.navigate("HomePage1")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icons8endcall24-1.png")}
          />
        </TouchableOpacity>
        <Image
          style={[styles.icons8ConferenceForegroundS, styles.icons8Layout]}
          resizeMode="cover"
          source={require("../assets/icons8conferenceforegroundselected50-1.png")}
        />
        <Text style={[styles.text, styles.youTypo]}>4</Text>
        <Image
          style={[styles.icons8Messages801, styles.footerLayout]}
          resizeMode="cover"
          source={require("../assets/icons8messages80-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerLayout: {
    height: 184,
    top: 0,
  },
  childPosition: {
    backgroundColor: Color.colorSlateblue,
    width: 360,
    left: 0,
    position: "absolute",
  },
  drRafiTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  speakingIconLayout: {
    height: 23,
    position: "absolute",
  },
  headerPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  iconLayout1: {
    height: 165,
    position: "absolute",
  },
  iconPosition1: {
    left: 193,
    width: 139,
  },
  iconPosition: {
    height: 164,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    width: 141,
    left: 19,
  },
  icons8Layout2: {
    width: 15,
    top: 8,
    height: 18,
    position: "absolute",
  },
  icons8Position: {
    top: 195,
    height: 18,
    width: 15,
    position: "absolute",
  },
  youTypo: {
    fontFamily: FontFamily.jejuGothic,
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  footerLayout: {
    height: 36,
    position: "absolute",
  },
  icons8Layout1: {
    height: 24,
    width: 24,
    top: 7,
    position: "absolute",
  },
  icons8Layout: {
    width: 23,
    position: "absolute",
  },
  headerChild: {
    height: 184,
    top: 0,
  },
  uiuxInteractiveSession: {
    top: 56,
    left: 10,
    fontSize: FontSize.size_xl,
    width: 170,
  },
  image1Icon: {
    top: 33,
    left: 209,
    width: 127,
    height: 126,
    position: "absolute",
  },
  drRafi: {
    top: 154,
    fontSize: 19,
    left: 245,
  },
  header: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  speakingIcon: {
    top: 39,
    left: 302,
    width: 25,
  },
  membersChild: {
    width: 139,
    left: 19,
    height: 165,
    backgroundColor: Color.colorGainsboro_200,
    top: 182,
  },
  membersItem: {
    height: 165,
    position: "absolute",
    backgroundColor: Color.colorGainsboro_200,
    left: 193,
    top: 0,
  },
  membersInner: {
    width: 139,
    left: 19,
    height: 165,
    backgroundColor: Color.colorGainsboro_200,
    top: 0,
  },
  rectangleView: {
    height: 165,
    position: "absolute",
    backgroundColor: Color.colorGainsboro_200,
    left: 193,
    top: 182,
  },
  membersChild1: {
    top: 400,
    height: 39,
  },
  image2Icon: {
    width: 141,
    left: 19,
  },
  image3Icon: {
    left: 193,
    width: 139,
  },
  image4Icon: {
    height: 165,
    position: "absolute",
    top: 182,
  },
  image5Icon: {
    height: 165,
    position: "absolute",
    top: 182,
  },
  icons8MuteUnmute501: {
    height: 18,
    left: 137,
  },
  icons8MuteUnmute502: {
    left: 312,
    height: 18,
  },
  icons8MuteUnmute503: {
    left: 312,
  },
  icons8MuteUnmute504: {
    left: 137,
  },
  you: {
    top: 324,
    left: 245,
  },
  members: {
    top: 201,
    height: 439,
  },
  icons8Mic241: {
    left: 97,
  },
  icons8Camera241: {
    left: 129,
  },
  icons8Hand501: {
    top: 5,
    left: 158,
    width: 26,
    height: 25,
    position: "absolute",
  },
  icons8MenuVertical501: {
    left: 184,
    top: 7,
    width: 23,
    height: 23,
  },
  icon: {
    borderRadius: Border.br_8xs,
    height: "100%",
    width: "100%",
  },
  icons8EndCall241: {
    left: 212,
    top: 9,
    width: 28,
  },
  icons8ConferenceForegroundS: {
    top: 6,
    height: 30,
    width: 23,
    left: 0,
  },
  text: {
    top: 2,
    left: 23,
    width: 12,
    height: 18,
  },
  icons8Messages801: {
    left: 307,
    width: 40,
    top: 0,
  },
  footer: {
    top: 601,
    left: 12,
    width: 347,
  },
  liveSession: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default LiveSession;
