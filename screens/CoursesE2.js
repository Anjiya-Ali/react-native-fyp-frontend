import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const CoursesE2 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.coursesE2, styles.coursesChildShadowBox2]}>
      <View style={[styles.coursesE2Child, styles.coursesChildShadowBox1]} />
      <View style={styles.coursesE2Item} />
      <Text style={styles.courses}>Courses</Text>
      <View style={[styles.coursesE2Inner, styles.coursesBorder]} />
      <Image
        style={[styles.picture226Icon, styles.download101Position]}
        resizeMode="cover"
        source={require("../assets/picture22-7.png")}
      />
      <Text style={[styles.howToBe, styles.howToBeTypo]}>
        How to be an Effective Coder!!
      </Text>
      <View style={[styles.rectangleView, styles.coursesChildLayout6]} />
      <View style={[styles.coursesE2Child1, styles.coursesChildLayout5]} />
      <Text style={[styles.pythonProgramming, styles.howToBeTypo]}>
        Python Programming
      </Text>
      <View style={[styles.coursesE2Child2, styles.coursesChildShadowBox]} />
      <View style={[styles.coursesE2Child3, styles.coursesChildBorder1]} />
      <Text style={[styles.ninjaTechniquesOn, styles.machineLearningTypo]}>
        Ninja Techniques on Design Pat..
      </Text>
      <View style={[styles.coursesE2Child4, styles.coursesChildShadowBox]} />
      <View style={[styles.coursesE2Child5, styles.coursesChildBorder1]} />
      <Text style={[styles.machineLearning, styles.machineLearningTypo]}>
        Machine Learning
      </Text>
      <View style={[styles.coursesE2Child6, styles.coursesChildShadowBox1]} />
      <View style={[styles.coursesE2Child7, styles.coursesChildBorder]} />
      <Text style={[styles.dataScienceFor, styles.dataTypo]}>
        Data Science for Beginners
      </Text>
      <View style={[styles.coursesE2Child8, styles.coursesChildLayout6]} />
      <View style={[styles.coursesE2Child9, styles.coursesChildBorder]} />
      <Text style={[styles.bigDataAnd, styles.dataTypo]}>
        Big Data and Parallelism
      </Text>
      <View style={styles.coursesE2Child10} />
      <Text style={styles.search}>Search</Text>
      <Image
        style={styles.ask1Icon}
        resizeMode="cover"
        source={require("../assets/ask-1.png")}
      />
      <Image
        style={[styles.vectorSignSpartanHelmet260Icon, styles.iconPosition1]}
        resizeMode="cover"
        source={require("../assets/vectorsignspartanhelmet260nw382914535-3.png")}
      />
      <Image
        style={styles.pythonLogoNotext3Icon}
        resizeMode="cover"
        source={require("../assets/pythonlogonotext-3.png")}
      />
      <Image
        style={[styles.jpegaiHome2Icon, styles.iconPosition1]}
        resizeMode="cover"
        source={require("../assets/jpegaihome-2.png")}
      />
      <Image
        style={[styles.download101, styles.download101Position]}
        resizeMode="cover"
        source={require("../assets/download-10-1.png")}
      />
      <Image
        style={styles.thinks8dd35e85fill1366x700Icon}
        resizeMode="cover"
        source={require("../assets/thinks8dd35e85fill1366x700formatjpeg-2.png")}
      />
      <View style={[styles.coursesE2Child11, styles.coursesChildLayout4]} />
      <Text style={[styles.topic, styles.feesTypo]}>Topic</Text>
      <View style={[styles.coursesE2Child12, styles.coursesChildLayout4]} />
      <Text style={[styles.fees, styles.feesTypo]}>Fees</Text>
      <View style={[styles.coursesE2Child13, styles.coursesChildPosition]} />
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle-97.png")}
      />
      <Image
        style={[styles.lineIcon, styles.lineIconLayout]}
        resizeMode="cover"
        source={require("../assets/line-13.png")}
      />
      <View style={[styles.coursesE2Child14, styles.coursesChildPosition]} />
      <Text style={[styles.courses1, styles.applyTypo]}>Courses</Text>
      <Text style={[styles.teachers, styles.applyTypo]}>Teachers</Text>
      <Text style={[styles.communities, styles.communitiesPosition]}>
        Communities
      </Text>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-15.png")}
      />
      <Text style={[styles.filter, styles.applyTypo]}>Filter -</Text>
      <Text style={[styles.topic1, styles.topic1Typo]}>Topic</Text>
      <Image
        style={[styles.black17Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/black-17.png")}
      />
      <View style={[styles.coursesE2Child15, styles.coursesChildLayout3]} />
      <Text style={[styles.toa, styles.irTypo]}>TOA</Text>
      <TouchableOpacity
        style={[styles.black18, styles.iconLayout1]}
        onPress={() => navigation.navigate("CoursesE3")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/black-17.png")}
        />
      </TouchableOpacity>
      <View style={[styles.coursesE2Child16, styles.coursesChildLayout3]} />
      <Text style={[styles.nlp, styles.irTypo]}>NLP</Text>
      <Image
        style={[styles.black19Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/black-17.png")}
      />
      <View style={[styles.coursesE2Child17, styles.coursesChildLayout3]} />
      <Text style={[styles.sda, styles.irTypo]}>SDA</Text>
      <Image
        style={[styles.black20Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/black-17.png")}
      />
      <View style={[styles.coursesE2Child18, styles.coursesChildLayout3]} />
      <Text style={[styles.oop, styles.irTypo]}>OOP</Text>
      <Image
        style={[styles.black21Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/black-17.png")}
      />
      <View style={[styles.coursesE2Child19, styles.coursesChildLayout3]} />
      <Text style={[styles.pdc, styles.irTypo]}>PDC</Text>
      <Image
        style={[styles.black22Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/black-17.png")}
      />
      <View style={[styles.coursesE2Child20, styles.coursesChildLayout2]} />
      <Text style={[styles.dlp, styles.dlpTypo]}>DLP</Text>
      <Image
        style={[styles.black23Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/black-17.png")}
      />
      <View style={[styles.coursesE2Child21, styles.coursesChildLayout2]} />
      <Text style={[styles.res, styles.dlpTypo]}>RES</Text>
      <Image
        style={[styles.black24Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/black-17.png")}
      />
      <View style={[styles.coursesE2Child22, styles.coursesChildLayout2]} />
      <Text style={[styles.kkr, styles.dlpTypo]}>KKR</Text>
      <Image
        style={[styles.black25Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/black-17.png")}
      />
      <View style={[styles.coursesE2Child23, styles.coursesChildLayout2]} />
      <Text style={[styles.sde, styles.dlpTypo]}>SDE</Text>
      <Image
        style={[styles.black26Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/black-17.png")}
      />
      <View style={[styles.coursesE2Child24, styles.coursesChildLayout2]} />
      <Text style={[styles.tbw, styles.dlpTypo]}>TBW</Text>
      <Image
        style={[styles.black27Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/black-17.png")}
      />
      <View style={[styles.coursesE2Child25, styles.coursesChildLayout1]} />
      <Text style={[styles.ir, styles.irTypo]}>IR</Text>
      <Image
        style={[styles.black28Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/black-17.png")}
      />
      <View style={[styles.coursesE2Child26, styles.coursesChildLayout1]} />
      <Text style={styles.rs}>RS</Text>
      <Image
        style={[styles.black29Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/black-29.png")}
      />
      <View style={[styles.coursesE2Child27, styles.coursesChildLayout]} />
      <Text style={[styles.pf, styles.pfTypo]}>PF</Text>
      <Image
        style={[styles.black30Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/black-29.png")}
      />
      <View style={[styles.coursesE2Child28, styles.coursesChildLayout]} />
      <Text style={[styles.ds, styles.pfTypo]}>DS</Text>
      <Image
        style={[styles.black31Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/black-29.png")}
      />
      <View style={[styles.coursesE2Child29, styles.coursesChildLayout]} />
      <Text style={[styles.nc, styles.pfTypo]}>NC</Text>
      <Image
        style={[styles.coursesE2Child30, styles.lineIconLayout]}
        resizeMode="cover"
        source={require("../assets/line-13.png")}
      />
      <Text style={[styles.removeFilter, styles.topic1Typo]}>
        Remove filter
      </Text>
      <View style={[styles.coursesE2Child31, styles.communitiesPosition]} />
      <Text style={[styles.apply, styles.applyTypo]}>Apply</Text>
      <TouchableOpacity
        style={styles.icons8Arrow241}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icons8arrow24-11.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.icons8Arrow241}
        onPress={() => navigation.navigate("ELearningPage")}
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
  coursesChildShadowBox2: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  coursesChildShadowBox1: {
    height: 117,
    borderRadius: Border.br_8xs,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
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
  coursesBorder: {
    height: 85,
    top: 169,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  download101Position: {
    left: 28,
    position: "absolute",
  },
  howToBeTypo: {
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xs,
    top: 260,
    textAlign: "left",
    position: "absolute",
  },
  coursesChildLayout6: {
    width: 171,
    left: 185,
  },
  coursesChildLayout5: {
    width: 161,
    left: 190,
  },
  coursesChildShadowBox: {
    top: 292,
    height: 117,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro_200,
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
  coursesChildBorder1: {
    top: 299,
    height: 85,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  machineLearningTypo: {
    top: 390,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  coursesChildBorder: {
    top: 428,
    height: 85,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  dataTypo: {
    top: 519,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  iconPosition1: {
    height: 57,
    top: 313,
    position: "absolute",
  },
  coursesChildLayout4: {
    height: 19,
    width: 68,
    borderRadius: Border.br_3xs,
    top: 117,
    backgroundColor: Color.colorGainsboro_200,
    position: "absolute",
  },
  feesTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 120,
    color: Color.colorSlateblue,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  coursesChildPosition: {
    width: 360,
    left: 0,
    backgroundColor: Color.colorSlateblue,
    position: "absolute",
  },
  lineIconLayout: {
    width: 323,
    position: "absolute",
  },
  applyTypo: {
    fontSize: FontSize.bodyBold_size,
    textAlign: "left",
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  communitiesPosition: {
    left: 228,
    position: "absolute",
  },
  topic1Typo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout1: {
    width: 15,
    height: 15,
    position: "absolute",
  },
  coursesChildLayout3: {
    height: 20,
    width: 65,
    left: 50,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorSlateblue,
    position: "absolute",
  },
  irTypo: {
    color: Color.colorGainsboro_200,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  coursesChildLayout2: {
    left: 145,
    height: 20,
    width: 65,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorSlateblue,
    position: "absolute",
  },
  dlpTypo: {
    left: 167,
    color: Color.colorGainsboro_200,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  iconPosition: {
    left: 221,
    width: 15,
    height: 15,
    position: "absolute",
  },
  coursesChildLayout1: {
    left: 239,
    height: 20,
    width: 65,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorSlateblue,
    position: "absolute",
  },
  iconLayout: {
    height: 16,
    left: 221,
    width: 15,
    position: "absolute",
  },
  coursesChildLayout: {
    height: 21,
    left: 239,
    width: 65,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorSlateblue,
    position: "absolute",
  },
  pfTypo: {
    height: 14,
    width: 22,
    left: 266,
    color: Color.colorGainsboro_200,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  coursesE2Child: {
    width: 170,
    left: 5,
    top: 162,
    borderRadius: Border.br_8xs,
  },
  coursesE2Item: {
    top: -594,
    left: -4,
    width: 370,
    height: 735,
    backgroundColor: Color.colorSlateblue,
    borderRadius: Border.br_21xl,
    position: "absolute",
  },
  courses: {
    top: 16,
    left: 63,
    fontSize: FontSize.size_11xl,
    textAlign: "left",
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  coursesE2Inner: {
    width: 160,
    left: 10,
  },
  picture226Icon: {
    top: 177,
    width: 121,
    height: 69,
  },
  howToBe: {
    left: 17,
  },
  rectangleView: {
    height: 117,
    borderRadius: Border.br_8xs,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
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
    top: 162,
  },
  coursesE2Child1: {
    height: 85,
    top: 169,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  pythonProgramming: {
    left: 220,
    width: 150,
  },
  coursesE2Child2: {
    width: 170,
    left: 5,
  },
  coursesE2Child3: {
    width: 160,
    left: 10,
  },
  ninjaTechniquesOn: {
    left: 13,
  },
  coursesE2Child4: {
    width: 171,
    left: 185,
  },
  coursesE2Child5: {
    width: 161,
    left: 190,
  },
  machineLearning: {
    left: 231,
    width: 150,
  },
  coursesE2Child6: {
    top: 421,
    width: 170,
    left: 5,
  },
  coursesE2Child7: {
    width: 160,
    left: 10,
  },
  dataScienceFor: {
    left: 23,
  },
  coursesE2Child8: {
    top: 421,
    height: 117,
    borderRadius: Border.br_8xs,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
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
  coursesE2Child9: {
    width: 161,
    left: 190,
  },
  bigDataAnd: {
    left: 213,
    width: 150,
  },
  coursesE2Child10: {
    top: 67,
    left: 36,
    width: 290,
    height: 43,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGainsboro_200,
    position: "absolute",
  },
  search: {
    top: 77,
    left: 54,
    fontSize: FontSize.size_xl,
    color: Color.colorSlateblue,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
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
    top: 186,
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
    top: 447,
    width: 125,
    height: 51,
  },
  thinks8dd35e85fill1366x700Icon: {
    top: 439,
    left: 206,
    height: 65,
    width: 126,
    position: "absolute",
  },
  coursesE2Child11: {
    left: 107,
  },
  topic: {
    left: 126,
  },
  coursesE2Child12: {
    left: 186,
  },
  fees: {
    left: 205,
  },
  coursesE2Child13: {
    top: 330,
    height: 409,
    borderRadius: Border.br_21xl,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    width: 360,
  },
  rectangleIcon: {
    top: 370,
    borderRadius: Border.br_11xl,
    width: 384,
    height: 427,
    left: 0,
    position: "absolute",
  },
  lineIcon: {
    top: 681,
    left: 12,
    height: 0,
  },
  coursesE2Child14: {
    top: 593,
    borderTopLeftRadius: Border.br_21xl,
    borderTopRightRadius: Border.br_21xl,
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
  courses1: {
    left: 32,
    top: 601,
    fontSize: FontSize.bodyBold_size,
    position: "absolute",
  },
  teachers: {
    left: 128,
    top: 601,
    fontSize: FontSize.bodyBold_size,
    position: "absolute",
  },
  communities: {
    top: 602,
    fontSize: FontSize.bodyBold_size,
    textAlign: "left",
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
  filter: {
    top: 339,
    left: 127,
    position: "absolute",
  },
  topic1: {
    top: 342,
    left: 185,
    fontSize: FontSize.size_sm,
    color: Color.colorGainsboro_100,
  },
  black17Icon: {
    top: 395,
    left: 32,
  },
  coursesE2Child15: {
    top: 393,
  },
  toa: {
    left: 72,
    fontSize: FontSize.size_2xs,
    top: 396,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  black18: {
    top: 420,
    left: 32,
  },
  coursesE2Child16: {
    top: 418,
  },
  nlp: {
    left: 72,
    fontSize: FontSize.size_2xs,
    top: 421,
  },
  black19Icon: {
    top: 445,
    left: 32,
  },
  coursesE2Child17: {
    top: 443,
  },
  sda: {
    top: 446,
    left: 72,
    fontSize: FontSize.size_2xs,
  },
  black20Icon: {
    top: 470,
    left: 32,
  },
  coursesE2Child18: {
    top: 468,
  },
  oop: {
    top: 471,
    left: 72,
    fontSize: FontSize.size_2xs,
  },
  black21Icon: {
    top: 497,
    left: 32,
  },
  coursesE2Child19: {
    top: 495,
  },
  pdc: {
    top: 498,
    left: 72,
    fontSize: FontSize.size_2xs,
  },
  black22Icon: {
    top: 497,
    left: 127,
  },
  coursesE2Child20: {
    top: 495,
  },
  dlp: {
    top: 498,
  },
  black23Icon: {
    top: 443,
    left: 127,
  },
  coursesE2Child21: {
    top: 441,
  },
  res: {
    top: 444,
  },
  black24Icon: {
    top: 469,
    left: 127,
  },
  coursesE2Child22: {
    top: 467,
  },
  kkr: {
    top: 470,
  },
  black25Icon: {
    top: 419,
    left: 127,
  },
  coursesE2Child23: {
    top: 417,
  },
  sde: {
    top: 420,
  },
  black26Icon: {
    top: 395,
    left: 127,
  },
  coursesE2Child24: {
    top: 393,
  },
  tbw: {
    top: 396,
  },
  black27Icon: {
    top: 395,
  },
  coursesE2Child25: {
    top: 393,
  },
  ir: {
    left: 268,
    top: 396,
  },
  black28Icon: {
    top: 420,
  },
  coursesE2Child26: {
    top: 418,
  },
  rs: {
    left: 266,
    color: Color.colorGainsboro_200,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interRegular,
    top: 421,
    textAlign: "left",
    position: "absolute",
  },
  black29Icon: {
    top: 443,
  },
  coursesE2Child27: {
    top: 441,
  },
  pf: {
    top: 444,
  },
  black30Icon: {
    top: 469,
  },
  coursesE2Child28: {
    top: 467,
  },
  ds: {
    top: 470,
  },
  black31Icon: {
    top: 496,
  },
  coursesE2Child29: {
    top: 494,
  },
  nc: {
    top: 497,
  },
  coursesE2Child30: {
    top: 527,
    height: 2,
    left: 17,
  },
  removeFilter: {
    top: 552,
    left: 19,
    color: Color.colorSlateblue,
  },
  coursesE2Child31: {
    top: 538,
    width: 123,
    height: 41,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorSlateblue,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  apply: {
    top: 547,
    left: 262,
    position: "absolute",
  },
  icons8Arrow241: {
    left: 11,
    top: 18,
    width: 31,
    height: 29,
    position: "absolute",
  },
  coursesE2: {
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

export default CoursesE2;
