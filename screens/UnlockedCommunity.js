import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DataScienceSection from "../components/DataScienceSection";
import SectionForm from "../components/SectionForm";
import SectionCard5 from "../components/SectionCard5";
import SectionCard4 from "../components/SectionCard4";
import SectionCard6 from "../components/SectionCard6";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const UnlockedCommunity = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.unlockedCommunity}>
      <DataScienceSection
        enthusiastsTitle="DATA SCIENCE ENTHUSIASTS"
        onIcons8Arrow241Press={() => navigation.navigate("MyCommunities")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text
          style={[styles.passionateDataScienceContainer, styles.kMembersTypo]}
        >
          <Text
            style={styles.passionateDataScience}
          >{`Passionate data science enthusiast dedicated to unraveling insights from complex datasets. Committed to continuous learning and innovation in the ever-evolving realm of data analytics. Eager to collaborate and share `}</Text>
          <Text style={styles.readMore}>Read More ...</Text>
        </Text>
      </View>
      <View style={styles.kMembersParent}>
        <Text style={[styles.kMembers, styles.inviteTypo]}>4.7K Members</Text>
        <TouchableOpacity
          style={[styles.rectangleGroup, styles.groupLayout1]}
          onPress={() => navigation.navigate("InviteMembers")}
        >
          <View style={[styles.groupItem, styles.groupLayout1]} />
          <Text style={[styles.invite, styles.textPosition]}>Invite</Text>
        </TouchableOpacity>
      </View>
      <Image
        style={[styles.icons8Plus501, styles.icons8Layout]}
        resizeMode="cover"
        source={require("../assets/icons8plus50-1.png")}
      />
      <Image
        style={styles.rmytdftzkkSlwefqlbefw1Icon}
        resizeMode="cover"
        source={require("../assets/1-rmytdftzkkslwefqlbefw-1.png")}
      />
      <SectionForm />
      <SectionCard5 />
      <SectionCard4 />
      <SectionCard6 />
      <View style={[styles.rectangleContainer, styles.groupLayout]}>
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
        <Image
          style={[styles.icons8Like301, styles.icons8Layout]}
          resizeMode="cover"
          source={require("../assets/icons8like30-1.png")}
        />
        <Text style={[styles.text, styles.textPosition]}>441</Text>
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
        <Text style={[styles.text, styles.textPosition]}>20</Text>
        <Image
          style={[styles.icons8Topic501, styles.groupInnerLayout]}
          resizeMode="cover"
          source={require("../assets/icons8topic50-11.png")}
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
  groupPosition: {
    top: 0,
    left: 0,
  },
  kMembersTypo: {
    textAlign: "left",
    fontFamily: FontFamily.calibri,
    position: "absolute",
  },
  inviteTypo: {
    fontWeight: "700",
    fontSize: FontSize.size_smi,
  },
  groupLayout1: {
    width: 61,
    height: 23,
    top: 0,
    position: "absolute",
  },
  textPosition: {
    left: 25,
    top: 5,
    textAlign: "left",
    fontFamily: FontFamily.calibri,
    position: "absolute",
  },
  icons8Layout: {
    width: 14,
    position: "absolute",
  },
  groupLayout: {
    height: 19,
    width: 50,
  },
  groupInnerLayout: {
    borderRadius: Border.br_base,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorWhite,
    height: 95,
    width: 360,
    position: "absolute",
  },
  passionateDataScience: {
    color: Color.labelColorLightPrimary,
  },
  readMore: {
    color: Color.colorSlateblue,
  },
  passionateDataScienceContainer: {
    top: 35,
    left: 17,
    fontWeight: "300",
    width: 331,
    height: 60,
    fontSize: FontSize.size_2xs,
  },
  rectangleParent: {
    top: 180,
    left: 0,
  },
  kMembers: {
    top: 4,
    width: 134,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    fontFamily: FontFamily.calibri,
    position: "absolute",
    left: 0,
  },
  groupItem: {
    borderRadius: Border.br_123xl,
    backgroundColor: Color.colorSlateblue,
    left: 0,
  },
  invite: {
    color: Color.colorGainsboro_100,
    width: 36,
    height: 12,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
  },
  rectangleGroup: {
    left: 266,
  },
  kMembersParent: {
    top: 185,
    left: 16,
    width: 327,
    height: 23,
    position: "absolute",
  },
  icons8Plus501: {
    top: 190,
    left: 290,
    height: 14,
  },
  rmytdftzkkSlwefqlbefw1Icon: {
    top: 40,
    height: 127,
    width: 360,
    position: "absolute",
    left: 0,
  },
  groupInner: {
    backgroundColor: Color.colorGainsboro_200,
    height: 19,
    width: 50,
    top: 0,
    left: 0,
  },
  icons8Like301: {
    top: 3,
    left: 11,
    height: 12,
  },
  text: {
    width: 23,
    height: 9,
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.size_2xs,
  },
  rectangleContainer: {
    left: 44,
    top: 891,
    width: 50,
    position: "absolute",
  },
  icons8Topic501: {
    left: 12,
    width: 13,
    height: 12,
    top: 5,
    borderRadius: Border.br_base,
  },
  groupView: {
    left: 153,
    top: 891,
    width: 50,
    position: "absolute",
  },
  unlockedCommunity: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    width: "100%",
    height: 1091,
    overflow: "hidden",
  },
});

export default UnlockedCommunity;
