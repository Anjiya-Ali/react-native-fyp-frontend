import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SectionPosts from "../components/SectionPosts";
import DateCard from "../components/DateCard";
import Container from "../components/Container";
import WebDevelopmentContainer from "../components/WebDevelopmentContainer";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const MyPostPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.myPostPage}>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.myPosts, styles.myPostsFlexBox]}>MY POSTS</Text>
        <Image
          style={styles.hamburgerIcon}
          resizeMode="cover"
          source={require("../assets/hamburger.png")}
        />
      </View>
      <TouchableOpacity
        style={[styles.icons8Arrow241, styles.icons8Arrow241Position]}
        onPress={() => navigation.navigate("HomePage2")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icons8arrow24-1.png")}
        />
      </TouchableOpacity>
      <Image
        style={[styles.inshasamnani2Icon, styles.icons8Arrow241Position]}
        resizeMode="cover"
        source={require("../assets/inshasamnani-2.png")}
      />
      <Text
        style={[
          styles.inshaSamnaniXinternsystemslContainer,
          styles.myPostsFlexBox,
        ]}
      >
        <Text style={styles.inshaSamnani}>{`Insha Samnani
`}</Text>
        <Text
          style={styles.xinternsystemsltdSeniorfa}
        >{`xIntern@SystemsLtd | Senior@FAST-NUCES |SLA&TA@FAST-NUCES`}</Text>
      </Text>
      <SectionPosts />
      <View style={[styles.myPostPageChild, styles.postPosition]} />
      <Image
        style={[styles.myPostPageItem, styles.postPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-47802.png")}
      />
      <Image
        style={[styles.myPostPageInner, styles.postPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-47811.png")}
      />
      <TouchableOpacity
        style={[styles.rectangleGroup, styles.groupLayout]}
        onPress={() => navigation.navigate("Proposals")}
      >
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.viewProposals, styles.textTypo]}>
          View Proposals
        </Text>
      </TouchableOpacity>
      <Text style={[styles.sept2022, styles.octTypo]}>8 Sept 2022</Text>
      <Text style={[styles.inshaSamnani1, styles.inshaTypo]}>
        Insha Samnani
      </Text>
      <Text style={[styles.inshaSamnani2, styles.inshaSamnani2Position]}>
        Insha Samnani
      </Text>
      <Image
        style={[styles.inshasamnani4Icon, styles.inshaSamnani1Position]}
        resizeMode="cover"
        source={require("../assets/inshasamnani-21.png")}
      />
      <Image
        style={[styles.inshasamnani5Icon, styles.inshaSamnani2Position]}
        resizeMode="cover"
        source={require("../assets/inshasamnani-21.png")}
      />
      <DateCard />
      <Container />
      <Text style={[styles.oct2022, styles.octTypo]}>18 oct 2022</Text>
      <Text style={[styles.oct20221, styles.octTypo]}>1 Oct 2022</Text>
      <Image
        style={[styles.inshasamnani3Icon, styles.inshaSamnani3Position]}
        resizeMode="cover"
        source={require("../assets/inshasamnani-21.png")}
      />
      <Text style={[styles.inshaSamnani3, styles.inshaSamnani3Position]}>
        Insha Samnani
      </Text>
      <View style={[styles.rectangleContainer, styles.groupInnerLayout]}>
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
        <Image
          style={styles.icons8Like301}
          resizeMode="cover"
          source={require("../assets/icons8like30-1.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>21</Text>
      </View>
      <WebDevelopmentContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 40,
    width: 360,
    position: "absolute",
  },
  groupPosition: {
    backgroundColor: Color.colorSlateblue,
    left: 0,
    top: 0,
  },
  myPostsFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  icons8Arrow241Position: {
    left: 8,
    position: "absolute",
  },
  postPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 23,
    width: 102,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.calibri,
    textAlign: "left",
    position: "absolute",
  },
  octTypo: {
    height: 19,
    width: 220,
    fontSize: FontSize.size_3xs,
    left: 44,
    fontWeight: "300",
    fontFamily: FontFamily.calibri,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    position: "absolute",
  },
  inshaTypo: {
    width: 86,
    fontSize: FontSize.size_smi,
    left: 44,
    fontFamily: FontFamily.calibri,
    fontWeight: "700",
    color: Color.labelColorLightPrimary,
    textAlign: "left",
  },
  inshaSamnani2Position: {
    top: 771,
    height: 26,
    position: "absolute",
  },
  inshaSamnani1Position: {
    top: 601,
    height: 26,
    position: "absolute",
  },
  inshaSamnani3Position: {
    top: 206,
    position: "absolute",
  },
  groupInnerLayout: {
    width: 50,
    height: 19,
    position: "absolute",
  },
  groupChild: {
    height: 40,
    width: 360,
    position: "absolute",
  },
  myPosts: {
    left: 138,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.javaneseText,
    color: Color.colorWhite,
    width: 99,
    height: 31,
    top: 5,
  },
  hamburgerIcon: {
    top: 11,
    left: 318,
    width: 25,
    height: 16,
    position: "absolute",
  },
  rectangleParent: {
    left: 0,
    top: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  icons8Arrow241: {
    top: 8,
    height: 24,
    width: 26,
  },
  inshasamnani2Icon: {
    top: 45,
    width: 62,
    height: 64,
    borderRadius: Border.br_127xl,
  },
  inshaSamnani: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.calibri,
    fontWeight: "700",
  },
  xinternsystemsltdSeniorfa: {
    fontWeight: "300",
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.calibri,
  },
  inshaSamnaniXinternsystemslContainer: {
    top: 54,
    left: 81,
    width: 279,
    height: 47,
    color: Color.labelColorLightPrimary,
  },
  myPostPageChild: {
    top: 196,
    backgroundColor: Color.colorWhite,
    height: 381,
  },
  myPostPageItem: {
    top: 593,
    height: 154,
  },
  myPostPageInner: {
    top: 763,
    height: 324,
  },
  groupItem: {
    borderRadius: Border.br_123xl,
    backgroundColor: Color.colorSlateblue,
    left: 0,
    top: 0,
  },
  viewProposals: {
    top: 6,
    left: 16,
    color: Color.colorGainsboro_100,
    width: 75,
    height: 17,
    fontWeight: "700",
    fontSize: FontSize.size_2xs,
  },
  rectangleGroup: {
    top: 1038,
    left: 228,
  },
  sept2022: {
    top: 784,
  },
  inshaSamnani1: {
    height: 26,
    top: 601,
    position: "absolute",
  },
  inshaSamnani2: {
    width: 86,
    fontSize: FontSize.size_smi,
    left: 44,
    fontFamily: FontFamily.calibri,
    fontWeight: "700",
    color: Color.labelColorLightPrimary,
    textAlign: "left",
  },
  inshasamnani4Icon: {
    left: 11,
    height: 26,
    borderRadius: Border.br_127xl,
    width: 26,
  },
  inshasamnani5Icon: {
    left: 11,
    borderRadius: Border.br_127xl,
    width: 26,
  },
  oct2022: {
    top: 219,
  },
  oct20221: {
    top: 614,
  },
  inshasamnani3Icon: {
    left: 11,
    height: 26,
    borderRadius: Border.br_127xl,
    width: 26,
  },
  inshaSamnani3: {
    width: 86,
    fontSize: FontSize.size_smi,
    left: 44,
    fontFamily: FontFamily.calibri,
    fontWeight: "700",
    color: Color.labelColorLightPrimary,
    textAlign: "left",
  },
  groupInner: {
    borderRadius: Border.br_base,
    backgroundColor: Color.colorGainsboro_200,
    left: 0,
    top: 0,
  },
  icons8Like301: {
    top: 3,
    width: 14,
    height: 12,
    left: 11,
    position: "absolute",
  },
  text: {
    left: 25,
    width: 23,
    height: 9,
    color: Color.labelColorLightPrimary,
    top: 5,
  },
  rectangleContainer: {
    top: 1059,
    left: 44,
    width: 50,
  },
  myPostPage: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    height: 1106,
    overflow: "hidden",
    width: "100%",
  },
});

export default MyPostPage;
