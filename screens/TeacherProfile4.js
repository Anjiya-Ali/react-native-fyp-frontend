import * as React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const TeacherProfile4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.teacherProfile4}>
      <View
        style={[styles.teacherProfile4Child, styles.rectangleTouchableOpacityBg]}
      />
      <Image
        style={styles.teacherProfile4Item}
        resizeMode="cover"
        source={require("../assets/rectangle-16.png")}
      />
      <Image
        style={styles.teacherProfile4Inner}
        resizeMode="cover"
        source={require("../assets/rectangle-111.png")}
      />
      <Text
        style={[styles.rateTeacherOverall, styles.whatDoYouTypo]}
      >{`Rate Teacher Overall `}</Text>
      <Text style={[styles.worst, styles.badClr]}>Worst</Text>
      <Text style={[styles.bad, styles.badClr]}>Bad</Text>
      <Text style={[styles.average, styles.badClr]}>Average</Text>
      <Text style={[styles.good, styles.badClr]}>Good</Text>
      <Text style={[styles.excellent, styles.badClr]}>Excellent</Text>
      <Text style={[styles.whatDoYou, styles.whatDoYouTypo]}>
        What do you wanna say about Teacher ?
      </Text>
      <TouchableOpacity
        style={[styles.rectangleTouchableOpacity, styles.rectangleTouchableOpacityBg]}
        onPress={() => navigation.navigate("Proposal11")}
      />
      <Text style={[styles.giveFeedback, styles.giveFeedbackTypo]}>
        Give Feedback
      </Text>
      <Text style={[styles.enterYourExperience, styles.giveFeedbackTypo]}>
        Enter Your Experience with Teacher
      </Text>
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/1516807823802-2.png")}
      />
      <Text style={[styles.muhummadRafi, styles.whatDoYouTypo]}>
        Muhummad Rafi
      </Text>
      <Text style={[styles.muhummadrafinuedupk, styles.badClr]}>
        muhummad.rafi@nu.edu.pk
      </Text>
      <Image
        style={[styles.starIcon, styles.teacherChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-17.png")}
      />
      <Image
        style={[styles.teacherProfile4Child1, styles.teacherChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-17.png")}
      />
      <Image
        style={[styles.teacherProfile4Child2, styles.teacherChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-17.png")}
      />
      <Image
        style={[styles.teacherProfile4Child3, styles.teacherChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-17.png")}
      />
      <Image
        style={[styles.teacherProfile4Child4, styles.teacherChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-17.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleTouchableOpacityBg: {
    backgroundColor: Color.colorSlateblue,
    borderRadius: Border.br_21xl,
    position: "absolute",
  },
  whatDoYouTypo: {
    textAlign: "left",
    color: Color.colorSlateblue,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  badClr: {
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    position: "absolute",
  },
  giveFeedbackTypo: {
    color: Color.colorGainsboro_100,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  teacherChildLayout: {
    height: 50,
    width: 50,
    top: 314,
    position: "absolute",
  },
  teacherProfile4Child: {
    top: 219,
    width: 360,
    height: 491,
    left: 0,
  },
  teacherProfile4Item: {
    top: 265,
    borderRadius: Border.br_11xl,
    width: 384,
    height: 541,
    left: 0,
    position: "absolute",
  },
  teacherProfile4Inner: {
    top: 412,
    left: 26,
    borderRadius: Border.br_8xs,
    width: 310,
    height: 141,
    position: "absolute",
  },
  rateTeacherOverall: {
    top: 284,
    fontSize: FontSize.size_sm,
    left: 29,
    color: Color.colorSlateblue,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  worst: {
    left: 46,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_4xs,
    top: 364,
    color: Color.labelColorLightPrimary,
  },
  bad: {
    left: 116,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_4xs,
    top: 364,
    color: Color.labelColorLightPrimary,
  },
  average: {
    left: 168,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_4xs,
    top: 364,
    color: Color.labelColorLightPrimary,
  },
  good: {
    left: 238,
    width: 39,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_4xs,
    top: 364,
    color: Color.labelColorLightPrimary,
  },
  excellent: {
    left: 291,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_4xs,
    top: 364,
    color: Color.labelColorLightPrimary,
  },
  whatDoYou: {
    top: 389,
    fontSize: FontSize.size_sm,
    left: 29,
    color: Color.colorSlateblue,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  rectangleTouchableOpacity: {
    top: 573,
    left: 64,
    width: 230,
    height: 51,
  },
  giveFeedback: {
    top: 587,
    left: 108,
    fontSize: FontSize.size_xl,
  },
  enterYourExperience: {
    top: 230,
    left: 35,
    fontSize: FontSize.bodyBold_size,
  },
  icon: {
    top: 81,
    left: 117,
    borderRadius: Border.br_41xl,
    width: 128,
    height: 128,
    position: "absolute",
  },
  muhummadRafi: {
    top: 20,
    left: 60,
    fontSize: FontSize.size_11xl,
  },
  muhummadrafinuedupk: {
    top: 58,
    left: 100,
    fontSize: FontSize.size_xs,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  starIcon: {
    left: 36,
  },
  teacherProfile4Child1: {
    left: 287,
  },
  teacherProfile4Child2: {
    left: 163,
  },
  teacherProfile4Child3: {
    left: 101,
  },
  teacherProfile4Child4: {
    left: 226,
  },
  teacherProfile4: {
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default TeacherProfile4;
