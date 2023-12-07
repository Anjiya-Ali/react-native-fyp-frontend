import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const CoursesE5 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.coursesE5, styles.coursesShadowBox]}>
      <View style={[styles.coursesE5Child, styles.coursesBg]} />
      <View style={[styles.coursesE5Item, styles.coursesBg]} />
      <Text style={[styles.courses, styles.coursesTypo]}>Courses</Text>
      <Text style={[styles.teachers, styles.coursesTypo]}>Teachers</Text>
      <Text style={[styles.communities, styles.coursesTypo]}>Communities</Text>
      <Image
        style={styles.coursesE5Inner}
        resizeMode="cover"
        source={require("../assets/ellipse-15.png")}
      />
      <Text style={[styles.courses1, styles.coursesTypo]}>Courses</Text>
      <Text style={[styles.nlp, styles.irClr]}>NLP</Text>
      <View style={styles.rectangleView} />
      <Text style={[styles.search, styles.irClr]}>Search</Text>
      <Image
        style={styles.ask1Icon}
        resizeMode="cover"
        source={require("../assets/ask-1.png")}
      />
      <Image
        style={styles.lineIcon}
        resizeMode="cover"
        source={require("../assets/line-13.png")}
      />
      <Text style={[styles.ir, styles.irClr]}>IR</Text>
      <Image
        style={styles.coursesE5Child1}
        resizeMode="cover"
        source={require("../assets/line-12.png")}
      />
      <View style={[styles.coursesE5Child2, styles.coursesChildShadowBox]} />
      <View style={[styles.coursesE5Child3, styles.coursesChildBorder]} />
      <Image
        style={[styles.picture227Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/picture22-7.png")}
      />
      <Text style={[styles.howToBe, styles.howToBeTypo]}>
        How to be an Effective Coder!!
      </Text>
      <View style={[styles.coursesE5Child4, styles.coursesChildShadowBox]} />
      <View style={[styles.coursesE5Child5, styles.coursesChildBorder]} />
      <Text style={[styles.pythonProgramming, styles.howToBeTypo]}>
        Python Programming
      </Text>
      <Image
        style={styles.pythonLogoNotext4Icon}
        resizeMode="cover"
        source={require("../assets/pythonlogonotext-3.png")}
      />
      <View style={[styles.coursesE5Child6, styles.coursesChildShadowBox]} />
      <View style={[styles.coursesE5Child7, styles.icons8Arrow242Position]} />
      <Text style={[styles.ninjaTechniquesOn, styles.howToBeTypo]}>
        Ninja Techniques on Design Pat..
      </Text>
      <Image
        style={[styles.vectorSignSpartanHelmet260Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/vectorsignspartanhelmet260nw382914535-3.png")}
      />
      <TouchableOpacity
        style={[styles.icons8Arrow242, styles.icons8Arrow242Position]}
        onPress={() => navigation.navigate("CoursesE1")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icons8arrow24-11.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  coursesShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  coursesBg: {
    backgroundColor: Color.colorSlateblue,
    position: "absolute",
  },
  coursesTypo: {
    textAlign: "left",
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  irClr: {
    color: Color.colorSlateblue,
    textAlign: "left",
    position: "absolute",
  },
  coursesChildShadowBox: {
    height: 117,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGainsboro_200,
    position: "absolute",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  coursesChildBorder: {
    height: 85,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhite,
  },
  iconPosition: {
    left: 28,
    position: "absolute",
  },
  howToBeTypo: {
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  icons8Arrow242Position: {
    left: 11,
    position: "absolute",
  },
  coursesE5Child: {
    top: -594,
    left: -4,
    borderRadius: Border.br_21xl,
    width: 370,
    height: 725,
  },
  coursesE5Item: {
    top: 591,
    left: 0,
    borderTopLeftRadius: Border.br_21xl,
    borderTopRightRadius: Border.br_21xl,
    width: 360,
    height: 50,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  courses: {
    left: 32,
    fontSize: FontSize.bodyBold_size,
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    top: 602,
  },
  teachers: {
    left: 128,
    fontSize: FontSize.bodyBold_size,
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    top: 602,
  },
  communities: {
    top: 603,
    left: 228,
    fontSize: FontSize.bodyBold_size,
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  coursesE5Inner: {
    top: 626,
    left: 61,
    width: 20,
    height: 14,
    position: "absolute",
  },
  courses1: {
    top: 16,
    left: 63,
    fontSize: FontSize.size_11xl,
  },
  nlp: {
    top: 144,
    fontSize: FontSize.size_6xl,
    color: Color.colorSlateblue,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    left: 17,
  },
  rectangleView: {
    top: 67,
    left: 36,
    borderRadius: Border.br_xl,
    width: 290,
    height: 43,
    backgroundColor: Color.colorGainsboro_200,
    position: "absolute",
  },
  search: {
    top: 77,
    left: 54,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
  },
  ask1Icon: {
    top: 74,
    left: 278,
    width: 30,
    height: 30,
    position: "absolute",
  },
  lineIcon: {
    top: 321,
    left: 24,
    width: 323,
    height: 2,
    position: "absolute",
  },
  ir: {
    top: 337,
    left: 22,
    fontSize: FontSize.size_6xl,
    color: Color.colorSlateblue,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  coursesE5Child1: {
    top: 640,
    left: 27,
    width: 311,
    height: 0,
    position: "absolute",
  },
  coursesE5Child2: {
    left: 5,
    width: 170,
    height: 117,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    top: 180,
  },
  coursesE5Child3: {
    left: 10,
    width: 160,
    height: 85,
    top: 187,
    position: "absolute",
  },
  picture227Icon: {
    top: 195,
    width: 121,
    height: 69,
  },
  howToBe: {
    top: 278,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xs,
    left: 17,
  },
  coursesE5Child4: {
    left: 185,
    width: 171,
    height: 117,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    top: 180,
  },
  coursesE5Child5: {
    left: 190,
    width: 161,
    top: 187,
    position: "absolute",
  },
  pythonProgramming: {
    left: 220,
    width: 150,
    top: 278,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xs,
  },
  pythonLogoNotext4Icon: {
    top: 204,
    left: 246,
    width: 50,
    height: 55,
    position: "absolute",
  },
  coursesE5Child6: {
    top: 373,
    left: 6,
    width: 170,
    height: 117,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
  },
  coursesE5Child7: {
    top: 380,
    height: 85,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhite,
    width: 160,
  },
  ninjaTechniquesOn: {
    top: 471,
    left: 14,
  },
  vectorSignSpartanHelmet260Icon: {
    top: 394,
    width: 126,
    height: 57,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  icons8Arrow242: {
    top: 18,
    width: 31,
    height: 29,
  },
  coursesE5: {
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
});

export default CoursesE5;
