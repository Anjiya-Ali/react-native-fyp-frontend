import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import FormContainer1 from "../components/FormContainer1";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const GroupVideoCall = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.groupVideoCall}>
      <View style={[styles.vectorParent, styles.groupChildLayout]}>
        <Image
          style={[styles.groupChild, styles.iconGroupPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-5.png")}
        />
        <Text style={styles.text}>{`02 : 12 `}</Text>
      </View>
      <View style={[styles.groupVideoCallInner, styles.groupLayout1]}>
        <View style={[styles.rectangleParent, styles.groupLayout1]}>
          <View style={[styles.groupItem, styles.groupItemPosition]} />
          <Image
            style={[styles.icon, styles.groupLayout1]}
            resizeMode="cover"
            source={require("../assets/1516807823802-23.png")}
          />
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupInner, styles.groupLayout]} />
            <Text style={styles.muhammadRafi}>Muhammad Rafi</Text>
          </View>
        </View>
      </View>
      <FormContainer1 />
      <View style={[styles.groupParent, styles.groupPosition1]}>
        <View style={styles.groupItemPosition}>
          <View style={[styles.groupItem, styles.groupItemPosition]} />
        </View>
        <Image
          style={[styles.inshasamnani3Icon, styles.groupItemPosition]}
          resizeMode="cover"
          source={require("../assets/inshasamnani-31.png")}
        />
        <View style={[styles.groupWrapper, styles.groupLayout]}>
          <View style={[styles.vectorGroup, styles.groupLayout]}>
            <Image
              style={[styles.rectangleIcon, styles.groupLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-17.png")}
            />
            <Text style={[styles.you, styles.youLayout]}>You</Text>
          </View>
        </View>
      </View>
      <View style={[styles.groupContainer, styles.groupPosition1]}>
        <View style={styles.groupItemPosition}>
          <View style={[styles.groupChild1, styles.groupLayout1]} />
          <Image
            style={[styles.inshasamnani3Icon, styles.groupItemPosition]}
            resizeMode="cover"
            source={require("../assets/image-23.png")}
          />
        </View>
        <View style={styles.groupView}>
          <Image
            style={[styles.vectorGroup, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/group-10.png")}
          />
          <Text style={[styles.anjiyaMuhammadAli, styles.youTypo]}>
            Anjiya Muhammad Ali
          </Text>
        </View>
      </View>
      <View style={[styles.groupVideoCallChild, styles.groupPosition]} />
      <Image
        style={[styles.icons8Back501, styles.youLayout]}
        resizeMode="cover"
        source={require("../assets/icons8back50-1.png")}
      />
      <View style={[styles.groupVideoCallItem, styles.groupPosition]} />
      <Image
        style={[styles.icons8Speaker301, styles.icons8Layout]}
        resizeMode="cover"
        source={require("../assets/icons8speaker30-1.png")}
      />
      <Pressable
        style={styles.icons8EndCall601}
        onPress={() => navigation.navigate("Chat4")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/icons8endcall60-1.png")}
        />
      </Pressable>
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
  iconGroupPosition: {
    left: 0,
    top: 0,
  },
  groupLayout1: {
    height: 224,
    position: "absolute",
  },
  groupItemPosition: {
    width: 155,
    height: 224,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 23,
    width: 124,
    position: "absolute",
  },
  groupPosition1: {
    left: 190,
    width: 155,
    height: 224,
    position: "absolute",
  },
  youLayout: {
    height: 16,
    position: "absolute",
  },
  youTypo: {
    color: Color.colorWhite,
    top: 4,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    fontFamily: FontFamily.calibri,
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
    borderRadius: Border.br_7xl,
  },
  icon: {
    borderRadius: Border.br_7xl,
    width: 156,
    height: 224,
    left: 0,
    top: 0,
  },
  groupInner: {
    backgroundColor: Color.colorSlateblue,
    borderRadius: Border.br_7xl,
    left: 0,
    top: 0,
  },
  muhammadRafi: {
    color: Color.colorWhitesmoke_200,
    height: 8,
    fontSize: FontSize.size_smi,
    left: 17,
    textAlign: "center",
    fontFamily: FontFamily.calibri,
    top: 5,
    width: 91,
    position: "absolute",
  },
  rectangleGroup: {
    left: 9,
    top: 201,
    width: 124,
  },
  rectangleParent: {
    width: 156,
    height: 224,
    left: 0,
    top: 0,
  },
  groupVideoCallInner: {
    left: 18,
    width: 156,
    height: 224,
    top: 82,
  },
  inshasamnani3Icon: {
    borderRadius: Border.br_7xl,
  },
  rectangleIcon: {
    borderRadius: Border.br_7xl,
    left: 0,
    top: 0,
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
  },
  groupWrapper: {
    top: 202,
    left: 16,
  },
  groupParent: {
    top: 82,
  },
  groupChild1: {
    width: 144,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_7xl,
    left: 0,
    top: 0,
  },
  anjiyaMuhammadAli: {
    left: 3,
    width: 118,
    position: "absolute",
    color: Color.colorWhite,
    top: 4,
  },
  groupView: {
    left: 17,
    height: 23,
    width: 124,
    top: 201,
    position: "absolute",
  },
  groupContainer: {
    top: 326,
  },
  groupVideoCallChild: {
    top: 617,
    height: 22,
    backgroundColor: Color.colorWhite,
  },
  icons8Back501: {
    top: 620,
    left: 4,
    width: 19,
  },
  groupVideoCallItem: {
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
  groupVideoCall: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default GroupVideoCall;
