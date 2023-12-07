import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const CoursesE6 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.coursesE6, styles.coursesShadowBox]}>
      <View style={[styles.coursesE6Child, styles.rectangleViewShadowBox]} />
      <View style={[styles.coursesE6Item, styles.coursesBg]} />
      <View style={[styles.coursesE6Inner, styles.coursesBg]} />
      <Text style={[styles.courses, styles.coursesTypo]}>Courses</Text>
      <Text style={[styles.teachers, styles.coursesTypo]}>Teachers</Text>
      <Text style={[styles.communities, styles.coursesTypo]}>Communities</Text>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-15.png")}
      />
      <Text style={[styles.courses1, styles.coursesTypo]}>Courses</Text>
      <Text style={styles.howToBe}>How to be an Effective Coder!!</Text>
      <Text style={[styles.drMuhummadRafi, styles.drMuhummadRafiTypo]}>
        Dr. Muhummad Rafi
      </Text>
      <View style={[styles.rectangleView, styles.coursesChildLayout5]} />
      <View style={styles.coursesE6Child1} />
      <Text style={[styles.pythonProgramming, styles.drMuhummadRafiTypo]}>
        Python Programming
      </Text>
      <View style={[styles.coursesE6Child2, styles.coursesChildShadowBox1]} />
      <View style={[styles.coursesE6Child3, styles.coursesChildLayout2]} />
      <Text style={[styles.ninjaTechniquesOn, styles.machineLearningTypo]}>
        Ninja Techniques on Design Pat..
      </Text>
      <View style={[styles.coursesE6Child4, styles.coursesChildShadowBox1]} />
      <View style={[styles.coursesE6Child5, styles.coursesChildBorder1]} />
      <Text style={[styles.machineLearning, styles.machineLearningTypo]}>
        Machine Learning
      </Text>
      <View style={[styles.coursesE6Child6, styles.coursesChildShadowBox]} />
      <View style={[styles.coursesE6Child7, styles.coursesChildBorder]} />
      <Text style={[styles.dataScienceFor, styles.dataTypo]}>
        Data Science for Beginners
      </Text>
      <View style={[styles.coursesE6Child8, styles.coursesChildShadowBox]} />
      <View style={[styles.coursesE6Child9, styles.coursesChildBorder]} />
      <Text style={[styles.bigDataAnd, styles.dataTypo]}>
        Big Data and Parallelism
      </Text>
      <View style={[styles.coursesE6Child10, styles.rectangleViewBg]} />
      <View style={[styles.coursesE6Child11, styles.coursesChildLayout1]} />
      <View style={[styles.coursesE6Child12, styles.coursesChildLayout1]} />
      <Text style={[styles.topic, styles.buy1Typo]}>Topic</Text>
      <TouchableOpacity
        style={styles.buy}
        onPress={() => navigation.navigate("BuyCourse")}
      >
        <Text style={[styles.buy1, styles.buy1Typo]}>Buy</Text>
      </TouchableOpacity>
      <Text style={[styles.search, styles.textTypo]}>Search</Text>
      <Image
        style={styles.ask1Icon}
        resizeMode="cover"
        source={require("../assets/ask-1.png")}
      />
      <Image
        style={[styles.vectorSignSpartanHelmet260Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/vectorsignspartanhelmet260nw382914535-3.png")}
      />
      <Image
        style={styles.pythonLogoNotext3Icon}
        resizeMode="cover"
        source={require("../assets/pythonlogonotext-3.png")}
      />
      <Image
        style={[styles.jpegaiHome2Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/jpegaihome-2.png")}
      />
      <Image
        style={styles.download101}
        resizeMode="cover"
        source={require("../assets/download-10-1.png")}
      />
      <Image
        style={styles.thinks8dd35e85fill1366x700Icon}
        resizeMode="cover"
        source={require("../assets/thinks8dd35e85fill1366x700formatjpeg-2.png")}
      />
      <Image
        style={[styles.starIcon, styles.coursesChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-12.png")}
      />
      <Image
        style={[styles.coursesE6Child13, styles.coursesChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-12.png")}
      />
      <Image
        style={[styles.coursesE6Child14, styles.coursesChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-12.png")}
      />
      <Image
        style={[styles.coursesE6Child15, styles.coursesChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-12.png")}
      />
      <Image
        style={[styles.coursesE6Child16, styles.coursesChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-16.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>300$</Text>
      <TouchableOpacity
        style={styles.icons8Arrow242}
        onPress={() => navigation.goBack()}
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
  rectangleViewShadowBox: {
    height: 117,
    borderRadius: Border.br_8xs,
    top: 176,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
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
  drMuhummadRafiTypo: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  coursesChildLayout5: {
    width: 171,
    left: 185,
  },
  coursesChildShadowBox1: {
    top: 306,
    backgroundColor: Color.colorGainsboro_200,
    height: 117,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
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
  coursesChildLayout2: {
    width: 160,
    left: 10,
  },
  machineLearningTypo: {
    top: 404,
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  coursesChildBorder1: {
    top: 313,
    height: 85,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  coursesChildShadowBox: {
    top: 435,
    backgroundColor: Color.colorGainsboro_200,
    height: 117,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
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
    top: 442,
    height: 85,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  dataTypo: {
    top: 533,
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  rectangleViewBg: {
    backgroundColor: Color.colorGainsboro_200,
    position: "absolute",
  },
  coursesChildLayout1: {
    height: 19,
    width: 68,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro_200,
    position: "absolute",
  },
  buy1Typo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  textTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  iconPosition: {
    height: 57,
    top: 327,
    position: "absolute",
  },
  coursesChildLayout: {
    height: 23,
    width: 23,
    top: 239,
    position: "absolute",
  },
  coursesE6Child: {
    width: 170,
    left: 5,
    backgroundColor: Color.colorSlateblue,
    position: "absolute",
  },
  coursesE6Item: {
    top: -594,
    left: -4,
    borderRadius: Border.br_21xl,
    width: 370,
    height: 746,
  },
  coursesE6Inner: {
    top: 593,
    left: 0,
    borderTopLeftRadius: Border.br_21xl,
    borderTopRightRadius: Border.br_21xl,
    width: 360,
    height: 47,
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
    top: 601,
  },
  teachers: {
    left: 128,
    fontSize: FontSize.bodyBold_size,
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    top: 601,
  },
  communities: {
    top: 602,
    left: 228,
    fontSize: FontSize.bodyBold_size,
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  ellipseIcon: {
    top: 625,
    left: 61,
    width: 20,
    height: 15,
    position: "absolute",
  },
  courses1: {
    top: 16,
    left: 63,
    fontSize: FontSize.size_11xl,
  },
  howToBe: {
    top: 182,
    left: 17,
    fontSize: FontSize.size_mini,
    width: 153,
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  drMuhummadRafi: {
    top: 222,
    left: 18,
    color: Color.colorWhite,
  },
  rectangleView: {
    backgroundColor: Color.colorGainsboro_200,
    position: "absolute",
    height: 117,
    borderRadius: Border.br_8xs,
    top: 176,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  coursesE6Child1: {
    top: 183,
    height: 85,
    width: 161,
    left: 190,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  pythonProgramming: {
    top: 274,
    left: 220,
    width: 150,
    color: Color.labelColorLightPrimary,
  },
  coursesE6Child2: {
    width: 170,
    left: 5,
  },
  coursesE6Child3: {
    top: 313,
    height: 85,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  ninjaTechniquesOn: {
    left: 13,
  },
  coursesE6Child4: {
    width: 171,
    left: 185,
  },
  coursesE6Child5: {
    width: 161,
    left: 190,
  },
  machineLearning: {
    left: 231,
    width: 150,
  },
  coursesE6Child6: {
    width: 170,
    left: 5,
  },
  coursesE6Child7: {
    width: 160,
    left: 10,
  },
  dataScienceFor: {
    left: 23,
  },
  coursesE6Child8: {
    width: 171,
    left: 185,
  },
  coursesE6Child9: {
    width: 161,
    left: 190,
  },
  bigDataAnd: {
    left: 213,
    width: 150,
  },
  coursesE6Child10: {
    top: 67,
    left: 36,
    borderRadius: Border.br_xl,
    width: 290,
    height: 43,
  },
  coursesE6Child11: {
    top: 121,
    left: 142,
  },
  coursesE6Child12: {
    top: 265,
    left: 103,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    height: 19,
    width: 68,
    borderRadius: Border.br_3xs,
  },
  topic: {
    top: 124,
    left: 161,
    color: Color.colorSlateblue,
    position: "absolute",
  },
  buy1: {
    color: Color.labelColorLightPrimary,
  },
  buy: {
    left: 126,
    top: 268,
    position: "absolute",
  },
  search: {
    top: 77,
    left: 54,
    color: Color.colorSlateblue,
  },
  ask1Icon: {
    top: 74,
    left: 278,
    width: 30,
    height: 30,
    position: "absolute",
  },
  vectorSignSpartanHelmet260Icon: {
    left: 27,
    width: 126,
  },
  pythonLogoNotext3Icon: {
    top: 200,
    left: 246,
    width: 50,
    height: 55,
    position: "absolute",
  },
  jpegaiHome2Icon: {
    left: 210,
    width: 122,
  },
  download101: {
    top: 461,
    left: 28,
    width: 125,
    height: 51,
    position: "absolute",
  },
  thinks8dd35e85fill1366x700Icon: {
    top: 453,
    left: 206,
    height: 65,
    width: 126,
    position: "absolute",
  },
  starIcon: {
    left: 13,
  },
  coursesE6Child13: {
    left: 30,
  },
  coursesE6Child14: {
    left: 48,
  },
  coursesE6Child15: {
    left: 65,
  },
  coursesE6Child16: {
    left: 82,
  },
  text: {
    top: 262,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    left: 18,
    color: Color.colorWhite,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  icons8Arrow242: {
    left: 11,
    top: 18,
    width: 31,
    height: 29,
    position: "absolute",
  },
  coursesE6: {
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

export default CoursesE6;
