import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CreateCommunity = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.createCommunity}>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupShadowBox]} />
        <Text style={[styles.communityTitle, styles.communityTypo]}>
          Community Title
        </Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.communityDescription, styles.communityTypo]}>
          Community Description
        </Text>
      </View>
      <View style={[styles.rectangleContainer, styles.groupInnerPosition]}>
        <View style={[styles.groupInner, styles.groupInnerPosition]} />
        <Text style={styles.uploadCoverPicture}>
          Upload cover picture for your community
        </Text>
        <Image
          style={[styles.icons8UploadToCloud501, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/icons8uploadtocloud50-1.png")}
        />
        <Pressable
          style={styles.rectanglePressable}
          onPress={() => navigation.navigate("MyCommunities")}
        />
        <Text style={[styles.createCommunity1, styles.createTypo]}>
          Create Community
        </Text>
      </View>
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <Pressable
          style={styles.icons8Arrow242}
          onPress={() => navigation.navigate("MyCommunities")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icons8arrow24-1.png")}
          />
        </Pressable>
        <Text style={[styles.createCommunity2, styles.createTypo]}>
          CREATE COMMUNITY
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 62,
    position: "absolute",
  },
  groupShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhitesmoke_100,
    left: 0,
    top: 0,
  },
  communityTypo: {
    color: Color.colorDimgray_400,
    left: 17,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  groupLayout: {
    height: 160,
    width: 300,
    position: "absolute",
  },
  groupInnerPosition: {
    width: 365,
    left: 0,
    position: "absolute",
  },
  createTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  headerPosition: {
    height: 81,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    height: 62,
    position: "absolute",
    width: 300,
  },
  communityTitle: {
    top: 22,
    textAlign: "center",
  },
  rectangleParent: {
    top: 253,
    width: 300,
    left: 30,
  },
  groupItem: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhitesmoke_100,
    left: 0,
    top: 0,
  },
  communityDescription: {
    top: 18,
    textAlign: "center",
  },
  rectangleGroup: {
    top: 347,
    left: 30,
  },
  groupInner: {
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    backgroundColor: Color.colorGainsboro_200,
    height: 163,
    top: 0,
    width: 365,
  },
  uploadCoverPicture: {
    top: 121,
    left: 90,
    fontSize: FontSize.size_3xs,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  icons8UploadToCloud501: {
    top: 41,
    left: 156,
    width: 60,
  },
  rectanglePressable: {
    top: 508,
    height: 48,
    backgroundColor: Color.colorSlateblue,
    width: 300,
    left: 30,
    position: "absolute",
  },
  createCommunity1: {
    top: 523,
    left: 116,
    textAlign: "center",
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
  },
  rectangleContainer: {
    top: 58,
    height: 556,
  },
  headerChild: {
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    backgroundColor: Color.colorSlateblue,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  icons8Arrow242: {
    left: 21,
    top: 31,
    width: 26,
    height: 24,
    position: "absolute",
  },
  createCommunity2: {
    top: 30,
    left: 73,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    width: 216,
    height: 19,
  },
  createCommunity: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default CreateCommunity;
