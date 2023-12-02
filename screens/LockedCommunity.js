import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DataScienceSection from "../components/DataScienceSection";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const LockedCommunity = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.lockedCommunity}>
      <DataScienceSection
        enthusiastsTitle="MOBILE APP DEVELOPMENT ENTHUSIASTS"
        icons8Arrow241TextAlign="left"
        onIcons8Arrow241Press={() => navigation.goBack()}
      />
      <Image
        style={styles.coverPage31Icon}
        resizeMode="cover"
        source={require("../assets/cover-page3-1.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={styles.dynamicMobileAppContainer}>
          <Text
            style={styles.dynamicMobileApp}
          >{`Dynamic mobile app developer driven by a passion for creating seamless digital experiences. Proficient in crafting innovative solutions for both Android and iOS platforms, with a keen eye for user-centric design. Actively engaged in the mobile app `}</Text>
          <Text style={styles.readMore}>Read More ...</Text>
        </Text>
      </View>
      <View style={styles.kMembersParent}>
        <Text style={styles.kMembers}>5.2K Members</Text>
        <Pressable
          style={[styles.rectangleGroup, styles.groupLayout]}
          onPress={() => navigation.navigate("LockedCommunity2")}
        >
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.join, styles.joinTypo]}>Join</Text>
          <Image
            style={styles.icons8Join642}
            resizeMode="cover"
            source={require("../assets/icons8join64-2.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.lockedParent, styles.lockedParentLayout]}>
        <Text style={[styles.locked, styles.joinTypo]}>LOCKED</Text>
        <Image
          style={[styles.icons8Lock501, styles.lockedParentLayout]}
          resizeMode="cover"
          source={require("../assets/icons8lock50-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 95,
    width: 360,
    position: "absolute",
  },
  groupChildPosition: {
    top: 0,
    left: 0,
  },
  groupLayout: {
    width: 55,
    height: 23,
    top: 0,
    position: "absolute",
  },
  joinTypo: {
    left: 28,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.calibri,
    position: "absolute",
  },
  lockedParentLayout: {
    height: 28,
    position: "absolute",
  },
  coverPage31Icon: {
    top: 40,
    height: 128,
    width: 360,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorWhite,
    height: 95,
    width: 360,
    position: "absolute",
  },
  dynamicMobileApp: {
    color: Color.labelColorLightPrimary,
  },
  readMore: {
    color: Color.colorSlateblue,
  },
  dynamicMobileAppContainer: {
    top: 35,
    left: 17,
    fontSize: FontSize.size_2xs,
    fontWeight: "300",
    width: 331,
    height: 60,
    textAlign: "left",
    fontFamily: FontFamily.calibri,
    position: "absolute",
  },
  rectangleParent: {
    top: 180,
    left: 0,
  },
  kMembers: {
    top: 4,
    width: 134,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    fontFamily: FontFamily.calibri,
    left: 0,
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_123xl,
    backgroundColor: Color.colorSlateblue,
    left: 0,
  },
  join: {
    color: Color.colorGainsboro_100,
    width: 27,
    height: 12,
    top: 5,
    fontWeight: "700",
  },
  icons8Join642: {
    left: 10,
    width: 14,
    height: 14,
    top: 5,
    position: "absolute",
  },
  rectangleGroup: {
    left: 272,
  },
  kMembersParent: {
    top: 185,
    left: 16,
    width: 327,
    height: 23,
    position: "absolute",
  },
  locked: {
    top: 12,
    color: Color.labelColorLightPrimary,
  },
  icons8Lock501: {
    width: 28,
    top: 0,
    left: 0,
  },
  lockedParent: {
    top: 306,
    left: 145,
    width: 70,
  },
  lockedCommunity: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default LockedCommunity;
