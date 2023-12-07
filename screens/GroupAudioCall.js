import * as React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const GroupAudioCall = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.groupAudioCall}>
      <View style={[styles.vectorParent, styles.groupChildLayout]}>
        <Image
          style={[styles.groupChild, styles.groupPosition2]}
          resizeMode="cover"
          source={require("../assets/rectangle-5.png")}
        />
        <Text style={styles.text}>{`02 : 12 `}</Text>
      </View>
      <View style={[styles.groupAudioCallInner, styles.groupLayout3]}>
        <View style={[styles.rectangleParent, styles.groupLayout3]}>
          <View style={[styles.groupItem, styles.groupChildPosition]} />
          <Image
            style={[styles.icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/1516807823802-22.png")}
          />
          <View style={[styles.rectangleGroup, styles.groupLayout2]}>
            <View style={[styles.groupInner, styles.groupLayout2]} />
            <Text style={styles.muhammadRafi}>Muhammad Rafi</Text>
          </View>
        </View>
      </View>
      <View style={[styles.groupParent, styles.groupViewLayout]}>
        <View style={[styles.rectangleWrapper, styles.groupViewLayout]}>
          <View style={[styles.rectangleView, styles.groupViewLayout]} />
        </View>
        <Image
          style={[styles.image1Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/image-13.png")}
        />
        <View style={[styles.rectangleContainer, styles.groupLayout1]}>
          <View style={[styles.groupChild1, styles.groupLayout1]} />
          <Text style={[styles.ismailAhmedAnsari, styles.youTypo]}>
            Ismail Ahmed Ansari
          </Text>
        </View>
      </View>
      <View style={[styles.groupContainer, styles.groupLayout]}>
        <View style={[styles.rectangleFrame, styles.groupLayout]}>
          <View style={[styles.groupChild2, styles.groupLayout]} />
        </View>
        <Image
          style={[styles.inshasamnani3Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/inshasamnani-3.png")}
        />
        <View style={[styles.groupWrapper, styles.groupLayout1]}>
          <View style={[styles.vectorGroup, styles.groupLayout1]}>
            <Image
              style={[styles.rectangleIcon, styles.groupLayout1]}
              resizeMode="cover"
              source={require("../assets/rectangle-17.png")}
            />
            <Text style={[styles.you, styles.youLayout]}>You</Text>
          </View>
        </View>
      </View>
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View style={[styles.rectangleWrapper, styles.groupViewLayout]}>
          <View style={[styles.rectangleView, styles.groupViewLayout]} />
          <Image
            style={[styles.image2Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/image-22.png")}
          />
        </View>
        <View style={[styles.groupParent1, styles.groupParent1Position]}>
          <Image
            style={[styles.vectorGroup, styles.groupLayout1]}
            resizeMode="cover"
            source={require("../assets/group-10.png")}
          />
          <Text style={[styles.anjiyaMuhammadAli, styles.youTypo]}>
            Anjiya Muhammad Ali
          </Text>
        </View>
      </View>
      <View style={[styles.groupAudioCallChild, styles.groupPosition]} />
      <Image
        style={[styles.icons8Back501, styles.youLayout]}
        resizeMode="cover"
        source={require("../assets/icons8back50-1.png")}
      />
      <View style={[styles.groupAudioCallItem, styles.groupPosition]} />
      <Image
        style={[styles.icons8Speaker301, styles.icons8Layout]}
        resizeMode="cover"
        source={require("../assets/icons8speaker30-1.png")}
      />
      <TouchableOpacity
        style={styles.icons8EndCall601}
        onPress={() => navigation.navigate("Chat4")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/icons8endcall60-1.png")}
        />
      </TouchableOpacity>
      <Image
        style={[styles.icons8MuteUnmute502, styles.icons8Layout]}
        resizeMode="cover"
        source={require("../assets/icons8muteunmute50-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    width: 91,
    position: "absolute",
  },
  groupPosition2: {
    left: 0,
    top: 0,
  },
  groupLayout3: {
    height: 224,
    width: 154,
    position: "absolute",
  },
  groupChildPosition: {
    borderRadius: Border.br_7xl,
    left: 0,
    top: 0,
  },
  iconLayout1: {
    height: 84,
    width: 85,
    borderRadius: Border.br_29xl,
    position: "absolute",
  },
  groupLayout2: {
    height: 23,
    width: 123,
    position: "absolute",
  },
  groupViewLayout: {
    width: 144,
    height: 224,
    position: "absolute",
  },
  groupLayout1: {
    width: 124,
    height: 23,
  },
  youTypo: {
    color: Color.colorWhite,
    top: 4,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    fontFamily: FontFamily.calibri,
  },
  groupLayout: {
    width: 155,
    height: 224,
    position: "absolute",
  },
  iconLayout: {
    width: 84,
    left: 30,
    height: 84,
    borderRadius: Border.br_29xl,
    position: "absolute",
  },
  youLayout: {
    height: 16,
    position: "absolute",
  },
  groupParent1Position: {
    left: 10,
    position: "absolute",
  },
  groupPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  icons8Layout: {
    width: 30,
    top: 582,
    height: 30,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_18xl,
    height: 31,
    width: 91,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_3xl,
    color: Color.colorGainsboro_100,
    height: 30,
    textAlign: "center",
    fontFamily: FontFamily.calibri,
    top: 5,
    left: 0,
    width: 91,
    position: "absolute",
  },
  vectorParent: {
    top: 26,
    left: 138,
    height: 35,
  },
  groupItem: {
    backgroundColor: Color.colorWhite,
    height: 224,
    width: 154,
    position: "absolute",
  },
  icon: {
    left: 34,
    top: 48,
  },
  groupInner: {
    backgroundColor: Color.colorSlateblue,
    borderRadius: Border.br_7xl,
    left: 0,
    top: 0,
  },
  muhammadRafi: {
    color: Color.colorWhitesmoke_200,
    width: 90,
    height: 8,
    fontSize: FontSize.size_smi,
    left: 16,
    textAlign: "center",
    fontFamily: FontFamily.calibri,
    top: 5,
    position: "absolute",
  },
  rectangleGroup: {
    left: 16,
    top: 140,
  },
  rectangleParent: {
    left: 0,
    top: 0,
  },
  groupAudioCallInner: {
    left: 18,
    top: 82,
  },
  rectangleView: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_7xl,
    left: 0,
    top: 0,
  },
  rectangleWrapper: {
    left: 0,
    top: 0,
  },
  image1Icon: {
    left: 35,
    top: 53,
  },
  groupChild1: {
    backgroundColor: Color.colorSlateblue,
    borderRadius: Border.br_7xl,
    left: 0,
    top: 0,
    position: "absolute",
  },
  ismailAhmedAnsari: {
    width: 110,
    left: 10,
    position: "absolute",
  },
  rectangleContainer: {
    top: 144,
    width: 124,
    left: 16,
    position: "absolute",
  },
  groupParent: {
    left: 17,
    top: 326,
    width: 144,
  },
  groupChild2: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_7xl,
    left: 0,
    top: 0,
  },
  rectangleFrame: {
    left: 0,
    top: 0,
  },
  inshasamnani3Icon: {
    top: 48,
  },
  rectangleIcon: {
    borderRadius: Border.br_7xl,
    left: 0,
    top: 0,
    position: "absolute",
  },
  you: {
    left: 15,
    width: 94,
    color: Color.colorWhite,
    top: 4,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    fontFamily: FontFamily.calibri,
  },
  vectorGroup: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupWrapper: {
    left: 13,
    top: 140,
    position: "absolute",
  },
  groupContainer: {
    left: 190,
    top: 82,
  },
  image2Icon: {
    top: 53,
  },
  anjiyaMuhammadAli: {
    left: 3,
    width: 118,
    position: "absolute",
  },
  groupParent1: {
    width: 124,
    height: 23,
    top: 144,
  },
  groupView: {
    left: 190,
    top: 326,
    width: 144,
  },
  groupAudioCallChild: {
    top: 617,
    height: 22,
    backgroundColor: Color.colorWhite,
  },
  icons8Back501: {
    top: 620,
    left: 4,
    width: 19,
  },
  groupAudioCallItem: {
    top: 577,
    height: 40,
    backgroundColor: Color.colorSlateblue,
  },
  icons8Speaker301: {
    left: 48,
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  icons8EndCall601: {
    left: 274,
    width: 33,
    top: 582,
    height: 30,
    position: "absolute",
  },
  icons8MuteUnmute502: {
    left: 165,
  },
  groupAudioCall: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default GroupAudioCall;
