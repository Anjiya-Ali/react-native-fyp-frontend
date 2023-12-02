import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const MyCommunities = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.myCommunities}>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={styles.communities}>COMMUNITIES</Text>
        <Pressable
          style={styles.icons8Arrow241}
          onPress={() => navigation.navigate("HomePage2")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icons8arrow24-1.png")}
          />
        </Pressable>
        <Image
          style={styles.hamburgerIcon}
          resizeMode="cover"
          source={require("../assets/hamburger.png")}
        />
      </View>
      <Pressable
        style={[styles.rmytdftzkkSlwefqlbefw2Parent, styles.rmytdftzkkLayout]}
        onPress={() => navigation.navigate("UnlockedCommunity")}
      >
        <Image
          style={[styles.rmytdftzkkSlwefqlbefw2Icon, styles.rmytdftzkkLayout]}
          resizeMode="cover"
          source={require("../assets/1-rmytdftzkkslwefqlbefw-2.png")}
        />
        <View style={[styles.rectangleGroup, styles.groupLayout2]}>
          <View style={[styles.groupItem, styles.groupPosition]} />
          <Text style={styles.dataScienceEnthusiasts}>
            Data Science Enthusiasts
          </Text>
        </View>
      </Pressable>
      <View style={[styles.machineLearning21Parent, styles.coverPage31Layout]}>
        <View
          style={[styles.machineLearning21, styles.machineLearning21Layout]}
        />
        <Pressable
          style={[styles.coverPage31, styles.coverPage31Layout]}
          onPress={() => navigation.navigate("LockedCommunity")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/cover-page3-1.png")}
          />
        </Pressable>
        <View style={[styles.groupWrapper, styles.groupLayout1]}>
          <View style={[styles.rectangleContainer, styles.groupLayout1]}>
            <View style={[styles.groupInner, styles.groupLayout1]} />
            <Text
              style={[styles.mobileAppDevelopme, styles.projectManagersTypo]}
            >
              Mobile App Developme...
            </Text>
          </View>
        </View>
      </View>
      <View
        style={[styles.productManagementConceptImaParent, styles.productLayout]}
      >
        <Image
          style={[styles.productManagementConceptImaIcon, styles.productLayout]}
          resizeMode="cover"
          source={require("../assets/productmanagementconceptimagetext260nw1764052046-1.png")}
        />
        <View style={[styles.groupWrapper, styles.groupLayout1]}>
          <View style={[styles.rectangleContainer, styles.groupLayout1]}>
            <View style={[styles.rectangleContainer, styles.groupLayout1]}>
              <View style={[styles.groupInner, styles.groupLayout1]} />
              <Text
                style={[styles.projectManagers, styles.projectManagersTypo]}
              >
                Project Managers
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.jqq1mwfqdk2pllyrit89File2Parent,
          styles.machineLearning21Layout,
        ]}
      >
        <Image
          style={[styles.machineLearning21, styles.machineLearning21Layout]}
          resizeMode="cover"
          source={require("../assets/jqq1mwfqdk2pllyrit89-file-2.png")}
        />
        <View style={[styles.groupWrapper, styles.groupLayout1]}>
          <View style={[styles.rectangleContainer, styles.groupLayout1]}>
            <View style={[styles.groupInner, styles.groupLayout1]} />
            <Text style={[styles.projectManagers, styles.projectManagersTypo]}>
              Programming Fundame...
            </Text>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.groupPressable, styles.groupLayout]}
        onPress={() => navigation.navigate("CreateCommunity")}
      >
        <View style={[styles.groupChild2, styles.groupLayout]} />
        <Text style={styles.createCommunity}>Create Community</Text>
        <Image
          style={[styles.icons8Community502, styles.groupLayout2]}
          resizeMode="cover"
          source={require("../assets/icons8community50-2.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 59,
    width: 360,
    position: "absolute",
  },
  groupChildPosition: {
    backgroundColor: Color.colorSlateblue,
    left: 0,
    top: 0,
  },
  rmytdftzkkLayout: {
    height: 127,
    width: 360,
    left: 0,
    position: "absolute",
  },
  groupLayout2: {
    height: 20,
    position: "absolute",
  },
  groupPosition: {
    borderBottomLeftRadius: Border.br_xs,
    borderBottomRightRadius: Border.br_xs,
    backgroundColor: Color.colorSlateblue,
    left: 0,
  },
  coverPage31Layout: {
    height: 128,
    width: 360,
    left: 0,
    position: "absolute",
  },
  machineLearning21Layout: {
    height: 126,
    width: 360,
    left: 0,
    position: "absolute",
  },
  groupLayout1: {
    height: 22,
    width: 126,
    top: 0,
    position: "absolute",
  },
  projectManagersTypo: {
    height: 10,
    width: 119,
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.calibri,
    fontWeight: "700",
    fontSize: FontSize.size_2xs,
    left: 7,
    top: 3,
    position: "absolute",
  },
  productLayout: {
    height: 112,
    width: 360,
    left: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 32,
    width: 141,
    position: "absolute",
  },
  groupChild: {
    borderBottomRightRadius: Border.br_25xl,
    borderBottomLeftRadius: Border.br_25xl,
    height: 59,
    width: 360,
    position: "absolute",
  },
  communities: {
    top: 17,
    left: 131,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.javaneseText,
    color: Color.colorWhite,
    width: 117,
    height: 25,
    textAlign: "left",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  icons8Arrow241: {
    left: 37,
    top: 18,
    width: 26,
    height: 24,
    position: "absolute",
  },
  hamburgerIcon: {
    top: 24,
    left: 297,
    width: 25,
    height: 16,
    position: "absolute",
  },
  rectangleParent: {
    left: 0,
    top: 0,
  },
  rmytdftzkkSlwefqlbefw2Icon: {
    top: 0,
  },
  groupItem: {
    height: 20,
    position: "absolute",
    width: 126,
    top: 0,
  },
  dataScienceEnthusiasts: {
    height: 9,
    width: 119,
    fontSize: FontSize.size_2xs,
    left: 7,
    top: 3,
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.calibri,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  rectangleGroup: {
    width: 126,
    height: 20,
    top: 0,
    left: 234,
  },
  rmytdftzkkSlwefqlbefw2Parent: {
    top: 74,
  },
  machineLearning21: {
    top: 0,
  },
  coverPage31: {
    top: 0,
  },
  groupInner: {
    borderBottomLeftRadius: Border.br_xs,
    borderBottomRightRadius: Border.br_xs,
    backgroundColor: Color.colorSlateblue,
    left: 0,
  },
  mobileAppDevelopme: {
    textAlign: "left",
  },
  rectangleContainer: {
    left: 0,
  },
  groupWrapper: {
    left: 234,
  },
  machineLearning21Parent: {
    top: 216,
  },
  productManagementConceptImaIcon: {
    top: 0,
  },
  projectManagers: {
    textAlign: "center",
  },
  productManagementConceptImaParent: {
    top: 357,
  },
  jqq1mwfqdk2pllyrit89File2Parent: {
    top: 484,
  },
  groupChild2: {
    borderRadius: Border.br_123xl,
    backgroundColor: Color.colorSlateblue,
    left: 0,
    top: 0,
  },
  createCommunity: {
    top: 10,
    left: 31,
    fontSize: FontSize.size_smi,
    width: 104,
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.calibri,
    fontWeight: "700",
    height: 16,
    textAlign: "left",
    position: "absolute",
  },
  icons8Community502: {
    top: 6,
    left: 11,
    width: 20,
  },
  groupPressable: {
    top: 625,
    left: 109,
  },
  myCommunities: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    height: 673,
    overflow: "hidden",
    width: "100%",
  },
});

export default MyCommunities;
