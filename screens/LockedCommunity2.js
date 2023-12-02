import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DataScienceSection from "../components/DataScienceSection";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const LockedCommunity2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.lockedCommunity2}>
      <DataScienceSection
        enthusiastsTitle="MOBILE APP DEVELOPMENT ENTHUSIASTS"
        icons8Arrow241TextAlign="left"
        onIcons8Arrow241Press={() => navigation.navigate("MyCommunities")}
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
        <Text style={[styles.kMembers, styles.kMembersTypo]}>5.2K Members</Text>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.requested, styles.kMembersTypo]}>Requested</Text>
        </View>
      </View>
      <View style={[styles.lockedParent, styles.lockedParentLayout]}>
        <Text style={styles.locked}>LOCKED</Text>
        <Image
          style={[styles.icons8Lock501, styles.lockedParentLayout]}
          resizeMode="cover"
          source={require("../assets/icons8lock50-1.png")}
        />
      </View>
      <Image
        style={styles.icons8Pending301}
        resizeMode="cover"
        source={require("../assets/icons8pending30-1.png")}
      />
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
  kMembersTypo: {
    fontWeight: "700",
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.calibri,
    position: "absolute",
  },
  groupLayout: {
    width: 90,
    height: 23,
    top: 0,
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
    color: Color.labelColorLightPrimary,
    left: 0,
  },
  groupItem: {
    borderRadius: Border.br_123xl,
    backgroundColor: Color.colorSlateblue,
    left: 0,
  },
  requested: {
    top: 5,
    left: 24,
    color: Color.colorGainsboro_100,
    width: 66,
    height: 12,
  },
  rectangleGroup: {
    left: 237,
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
    left: 28,
    fontSize: FontSize.size_smi,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    fontFamily: FontFamily.calibri,
    position: "absolute",
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
  icons8Pending301: {
    top: 191,
    left: 263,
    width: 13,
    height: 13,
    position: "absolute",
  },
  lockedCommunity2: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default LockedCommunity2;
