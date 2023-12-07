import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const UpcomingSesions = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.upcomingSesions}>
      <TouchableOpacity
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("NothingSelected")}
      >
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.byDate, styles.byDateTypo]}>By Date</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.rectangleGroup, styles.rectanglePosition]}
        onPress={() => navigation.navigate("TimeFilter")}
      >
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.byTime, styles.byDateTypo]}>By Time</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.rectangleContainer, styles.rectanglePosition]}
        onPress={() => navigation.navigate("TopicFilter")}
      >
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.byTopic, styles.byDateTypo]}>By Topic</Text>
      </TouchableOpacity>
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <Image
          style={styles.hamburgerIcon}
          resizeMode="cover"
          source={require("../assets/hamburger1.png")}
        />
        <TouchableOpacity
          style={styles.icons8Arrow242}
          onPress={() => navigation.navigate("HomePage1")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icons8arrow24-12.png")}
          />
        </TouchableOpacity>
        <Text style={styles.upcomingSessions}>UPCOMING SESSIONS</Text>
      </View>
      <View style={[styles.robotics, styles.machineLayout]}>
        <View style={[styles.roboticsChild, styles.image1Layout]} />
        <View style={[styles.roboticsItem, styles.roboticsBg]} />
        <View style={[styles.groupView, styles.groupViewLayout]}>
          <View style={[styles.rectangleView, styles.groupViewLayout]} />
          <Text style={[styles.interested, styles.interestedFlexBox]}>
            Interested
          </Text>
        </View>
        <View style={[styles.image1, styles.image1Layout]} />
        <Text style={styles.aiAndRobotics}>
          AI and Robotics Demonstrations By Dr. Rafi
        </Text>
        <Text style={[styles.thOct2023800Container, styles.interestedFlexBox]}>
          28th Oct 20238:00 am
        </Text>
        <Image
          style={[styles.image2Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/image-2.png")}
        />
      </View>
      <View style={[styles.machine, styles.machineLayout]}>
        <View style={[styles.roboticsChild, styles.image1Layout]} />
        <View style={[styles.roboticsItem, styles.roboticsBg]} />
        <View style={[styles.groupView, styles.groupViewLayout]}>
          <View style={[styles.groupChild1, styles.groupViewLayout]} />
          <Text style={[styles.interested, styles.interestedFlexBox]}>
            Interested
          </Text>
        </View>
        <View style={[styles.image1, styles.image1Layout]} />
        <Text style={styles.aiAndRobotics}>
          Machine Learning Workshop By Dr. Atif Tahir
        </Text>
        <Text style={[styles.thOct2023800Container, styles.interestedFlexBox]}>
          30th Oct 202310:00 am
        </Text>
        <Image
          style={[styles.image3Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/image-3.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 24,
    width: 76,
    position: "absolute",
  },
  groupChildPosition: {
    left: 0,
    top: 0,
  },
  byDateTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    lineHeight: 22,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  rectanglePosition: {
    top: 111,
    height: 24,
    width: 76,
    position: "absolute",
  },
  headerPosition: {
    height: 81,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  machineLayout: {
    height: 206,
    width: 301,
    position: "absolute",
  },
  image1Layout: {
    height: 125,
    top: 0,
  },
  roboticsBg: {
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  groupViewLayout: {
    width: 67,
    height: 19,
    position: "absolute",
  },
  interestedFlexBox: {
    textAlign: "right",
    position: "absolute",
  },
  iconPosition: {
    borderTopRightRadius: Border.br_xs,
    borderTopLeftRadius: Border.br_xs,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorSlateblue,
    height: 24,
    width: 76,
    position: "absolute",
  },
  byDate: {
    left: 15,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    lineHeight: 22,
    fontSize: FontSize.size_xs,
    top: 1,
  },
  rectangleParent: {
    top: 112,
    left: 31,
  },
  byTime: {
    left: 14,
    top: 1,
  },
  rectangleGroup: {
    left: 134,
  },
  byTopic: {
    left: 15,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    lineHeight: 22,
    fontSize: FontSize.size_xs,
    top: 0,
  },
  rectangleContainer: {
    left: 240,
  },
  headerChild: {
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    backgroundColor: Color.colorSlateblue,
  },
  hamburgerIcon: {
    top: 33,
    left: 320,
    width: 25,
    height: 16,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  icons8Arrow242: {
    left: 16,
    top: 27,
    width: 31,
    height: 29,
    position: "absolute",
  },
  upcomingSessions: {
    top: 30,
    left: 73,
    fontSize: FontSize.size_xl,
    width: 216,
    height: 19,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorWhite,
    position: "absolute",
  },
  roboticsChild: {
    width: 300,
    left: 1,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  roboticsItem: {
    top: 75,
    height: 131,
    width: 301,
    left: 0,
  },
  rectangleView: {
    backgroundColor: Color.colorSlateblue,
    left: 0,
    top: 0,
  },
  interested: {
    left: 5,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "right",
    color: Color.colorWhite,
    fontSize: FontSize.size_xs,
    top: 0,
  },
  groupView: {
    top: 172,
    left: 218,
  },
  image1: {
    width: 300,
    left: 1,
    borderRadius: Border.br_xs,
    height: 125,
    position: "absolute",
  },
  aiAndRobotics: {
    top: 132,
    left: 6,
    fontSize: FontSize.size_base,
    lineHeight: 21,
    fontFamily: FontFamily.mako,
    color: Color.labelColorLightPrimary,
    width: 145,
    textAlign: "left",
    position: "absolute",
  },
  thOct2023800Container: {
    top: 135,
    left: 195,
    fontSize: FontSize.size_smi,
    fontStyle: "italic",
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorDimgray_100,
  },
  image2Icon: {
    height: 124,
    width: 300,
    left: 1,
    top: 1,
  },
  robotics: {
    top: 166,
    left: 26,
  },
  groupChild1: {
    backgroundColor: "#228a27",
    left: 0,
    top: 0,
  },
  image3Icon: {
    height: 125,
    top: 0,
    width: 301,
    left: 0,
  },
  machine: {
    top: 393,
    left: 25,
  },
  upcomingSesions: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default UpcomingSesions;
