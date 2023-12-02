import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const AreYouAStudentOrTeacher = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.areYouAStudentOrTeacher}>
      <Image
        style={[styles.imageIzlyy1zfiTransformed2Icon, styles.arePosition]}
        resizeMode="cover"
        source={require("../assets/imageizlyy1zfitransformed-1.png")}
      />
      <View style={[styles.areYouAStudentOrTeacherChild, styles.arePosition]} />
      <Image
        style={[styles.areYouAStudentOrTeacherItem, styles.arePosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-11.png")}
      />
      <Pressable
        style={styles.loginToYourContainer}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.loginToYourAccount}>Login to your Account</Text>
      </Pressable>
      <Text style={styles.whichProfessionDefines}>
        Which Profession Defines You?
      </Text>
      <Text style={[styles.student, styles.studentTypo]}>Student</Text>
      <Text style={[styles.teacher, styles.studentTypo]}>Teacher</Text>
      <Image
        style={styles.areYouAStudentOrTeacherInner}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <Pressable
        style={styles.imageIzlyy1zfiTransformed1}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/imageizlyy1zfitransformed-12.png")}
        />
      </Pressable>
      <View style={styles.teacher0041} />
      <Image
        style={styles.pngtreeLecturerSuitGirlIllIcon}
        resizeMode="cover"
        source={require("../assets/pngtreelecturersuitgirlillustrationpngimage-4608040transformedremovebgpreview-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  arePosition: {
    left: 0,
    position: "absolute",
  },
  studentTypo: {
    fontSize: FontSize.size_6xl,
    color: Color.colorSlateblue,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  imageIzlyy1zfiTransformed2Icon: {
    top: 0,
    width: 553,
    height: 413,
  },
  areYouAStudentOrTeacherChild: {
    top: 240,
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorSlateblue,
    width: 360,
    height: 400,
  },
  areYouAStudentOrTeacherItem: {
    top: 293,
    borderRadius: Border.br_11xl,
    width: 384,
    height: 365,
  },
  loginToYourAccount: {
    color: Color.colorGainsboro_100,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.bodyBold_size,
  },
  loginToYourContainer: {
    left: 84,
    top: 255,
    position: "absolute",
  },
  whichProfessionDefines: {
    top: 303,
    left: 54,
    color: Color.colorSlateblue,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.bodyBold_size,
    position: "absolute",
  },
  student: {
    top: 401,
    left: 141,
  },
  teacher: {
    top: 556,
    left: 135,
  },
  areYouAStudentOrTeacherInner: {
    top: 365,
    left: 25,
    width: 310,
    height: 249,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  imageIzlyy1zfiTransformed1: {
    left: 26,
    top: 366,
    width: 103,
    height: 177,
    position: "absolute",
  },
  teacher0041: {
    top: 455,
    left: 183,
    width: 147,
    height: 153,
    position: "absolute",
  },
  pngtreeLecturerSuitGirlIllIcon: {
    top: 428,
    left: 116,
    width: 244,
    height: 186,
    position: "absolute",
  },
  areYouAStudentOrTeacher: {
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
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default AreYouAStudentOrTeacher;
