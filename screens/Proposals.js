import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SectionCard2 from "../components/SectionCard2";
import SectionCard1 from "../components/SectionCard1";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Proposals = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.proposals}>
      <View style={[styles.rectangleParent, styles.groupChildLayout1]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.proposals1, styles.hrFlexBox]}>PROPOSALS</Text>
      </View>
      <Pressable
        style={styles.icons8Arrow241}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icons8arrow24-1.png")}
        />
      </Pressable>
      <SectionCard2 />
      <View style={[styles.rectangleGroup, styles.groupPosition1]}>
        <View style={[styles.groupItem, styles.groupPosition1]} />
        <View style={[styles.rectangleContainer, styles.groupInnerLayout]}>
          <View style={[styles.groupInner, styles.groupInnerLayout]} />
          <Text style={styles.message}>Message</Text>
        </View>
        <Text style={[styles.hr, styles.hrFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>$10</Text>
          <Text style={styles.hr1}>/hr</Text>
        </Text>
        <Text style={[styles.bsInCs, styles.bsInCsPosition]}>
          BS in CS - React Native Developer
        </Text>
        <Text style={[styles.msAnjiyaMuhammad, styles.bsInCsPosition]}>
          Ms. Anjiya Muhammad Ali
        </Text>
        <Image
          style={[styles.starIcon, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/star-2.png")}
        />
        <Image
          style={[styles.groupChild1, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/star-2.png")}
        />
        <Image
          style={[styles.groupChild2, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/star-4.png")}
        />
        <Image
          style={[styles.groupChild3, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/star-2.png")}
        />
        <Image
          style={[styles.groupChild4, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/star-2.png")}
        />
        <View style={[styles.groupView, styles.viewLayout]}>
          <View style={[styles.rectangleView, styles.viewLayout]} />
          <Text style={styles.unleashThePowerContainer}>
            <Text
              style={styles.unleashThePower}
            >{`Unleash the power of React combined with GraphQL in this cutting-edge course! Explore the seamless integration of React with GraphQL to build efficient and scalable applications. From setting up Apollo Client to handling queries and mutations, `}</Text>
            <Text style={styles.readMore}>Read More ...</Text>
          </Text>
        </View>
        <SectionCard1
          price="$20"
          courseDescription="MS in CS - React Native Developer"
          personName="Ms. Saira Samnani"
          componentDimensions={require("../assets/star-2.png")}
          courseTitle="Elevate your UI/UX game with React! In this specialized course, we'll focus on creating stunning user interfaces with React while adhering to design principles. Learn to integrate React seamlessly with design tools, implement responsive design patterns, "
        />
      </View>
      <SectionCard1
        price="$13"
        courseDescription="MS in CS - React Developer"
        personName="Ms. Romasha Khurshid"
        componentDimensions={require("../assets/star-4.png")}
        courseTitle="Elevate your React skills to the pro level! Join my class for an in-depth exploration of React hooks, context API, and advanced component patterns. Dive into the world of stateful logic, routing with React Router, and the latest features in React. By the end, "
        propTop={254}
        propWidth={133}
        propWidth1={138}
      />
      <Image
        style={[styles.sanDiegoProfessionalHeadshoIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/san-diego-professional-headshots0110-1.png")}
      />
      <Image
        style={styles.vyw5swcg400x4001Icon}
        resizeMode="cover"
        source={require("../assets/vyw5swcg-400x400-1.png")}
      />
      <Image
        style={[styles.mai1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/mai-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout1: {
    height: 40,
    width: 360,
    position: "absolute",
  },
  groupPosition: {
    backgroundColor: Color.colorSlateblue,
    left: 0,
    top: 0,
  },
  hrFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  groupPosition1: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  groupInnerLayout: {
    height: 23,
    width: 72,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_smi,
    fontWeight: "700",
  },
  bsInCsPosition: {
    left: 45,
    fontFamily: FontFamily.calibri,
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    height: 18,
    width: 19,
    top: 48,
    position: "absolute",
  },
  viewLayout: {
    height: 72,
    width: 336,
    position: "absolute",
  },
  iconLayout: {
    height: 38,
    width: 37,
    left: 4,
    position: "absolute",
  },
  groupChild: {
    height: 40,
    width: 360,
    position: "absolute",
  },
  proposals1: {
    top: 5,
    left: 130,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.javaneseText,
    color: Color.colorWhite,
    width: 99,
    height: 31,
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
    left: 8,
    top: 8,
    width: 26,
    height: 24,
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.colorWhite,
    height: 177,
    top: 0,
    width: 360,
  },
  groupInner: {
    borderRadius: Border.br_123xl,
    backgroundColor: Color.colorSlateblue,
    left: 0,
    top: 0,
  },
  message: {
    top: 6,
    left: 16,
    color: Color.colorGainsboro_100,
    width: 46,
    height: 17,
    fontFamily: FontFamily.calibri,
    fontWeight: "700",
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    position: "absolute",
  },
  rectangleContainer: {
    top: 148,
    left: 273,
  },
  text: {
    fontFamily: FontFamily.calibri,
  },
  hr1: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.calibri,
  },
  hr: {
    top: 50,
    width: 47,
    color: Color.labelColorLightPrimary,
    left: 9,
  },
  bsInCs: {
    top: 26,
    width: 143,
    fontSize: FontSize.size_3xs,
    color: Color.labelColorLightPrimary,
  },
  msAnjiyaMuhammad: {
    top: 13,
    width: 145,
    color: Color.colorSlateblue,
    fontSize: FontSize.size_smi,
    fontWeight: "700",
  },
  starIcon: {
    left: 255,
  },
  groupChild1: {
    left: 236,
  },
  groupChild2: {
    left: 313,
  },
  groupChild3: {
    left: 294,
  },
  groupChild4: {
    left: 274,
  },
  rectangleView: {
    borderRadius: Border.br_base,
    left: 0,
    top: 0,
    backgroundColor: Color.colorGainsboro_100,
  },
  unleashThePower: {
    color: Color.labelColorLightPrimary,
  },
  readMore: {
    color: Color.colorSlateblue,
  },
  unleashThePowerContainer: {
    top: 9,
    left: 12,
    width: 317,
    height: 55,
    fontFamily: FontFamily.calibri,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    position: "absolute",
  },
  groupView: {
    top: 71,
    left: 9,
  },
  rectangleGroup: {
    top: 450,
    height: 373,
  },
  sanDiegoProfessionalHeadshoIcon: {
    top: 259,
    borderRadius: 246,
  },
  vyw5swcg400x4001Icon: {
    top: 455,
    borderRadius: Border.br_200xl,
    height: 39,
    width: 37,
    left: 4,
    position: "absolute",
  },
  mai1Icon: {
    top: 653,
    borderRadius: Border.br_195xl,
  },
  proposals: {
    flex: 1,
    height: 843,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorGainsboro_100,
  },
});

export default Proposals;
