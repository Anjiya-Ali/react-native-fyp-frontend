import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const CoursesE4 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.coursesE4, styles.coursesShadowBox]}>
      <View style={[styles.coursesE4Child, styles.coursesChildShadowBox1]} />
      <View style={styles.coursesE4Item} />
      <Text style={styles.courses}>Courses</Text>
      <View style={[styles.coursesE4Inner, styles.coursesBorder]} />
      <Image
        style={[styles.picture226Icon, styles.download101Position]}
        resizeMode="cover"
        source={require("../assets/picture22-7.png")}
      />
      <Text style={[styles.howToBe, styles.howToBeTypo]}>
        How to be an Effective Coder!!
      </Text>
      <View style={[styles.rectangleView, styles.coursesChildLayout7]} />
      <View style={[styles.coursesE4Child1, styles.coursesChildLayout6]} />
      <Text style={[styles.pythonProgramming, styles.howToBeTypo]}>
        Python Programming
      </Text>
      <View style={[styles.coursesE4Child2, styles.coursesChildShadowBox]} />
      <View style={[styles.coursesE4Child3, styles.coursesChildBorder1]} />
      <Text style={[styles.ninjaTechniquesOn, styles.machineLearningTypo]}>
        Ninja Techniques on Design Pat..
      </Text>
      <View style={[styles.coursesE4Child4, styles.coursesChildShadowBox]} />
      <View style={[styles.coursesE4Child5, styles.coursesChildBorder1]} />
      <Text style={[styles.machineLearning, styles.machineLearningTypo]}>
        Machine Learning
      </Text>
      <View style={[styles.coursesE4Child6, styles.coursesChildShadowBox1]} />
      <View style={[styles.coursesE4Child7, styles.coursesChildBorder]} />
      <Text style={[styles.dataScienceFor, styles.dataTypo]}>
        Data Science for Beginners
      </Text>
      <View style={[styles.coursesE4Child8, styles.coursesChildLayout7]} />
      <View style={[styles.coursesE4Child9, styles.coursesChildBorder]} />
      <Text style={[styles.bigDataAnd, styles.dataTypo]}>
        Big Data and Parallelism
      </Text>
      <View style={styles.coursesE4Child10} />
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
      <View style={[styles.coursesE4Child11, styles.coursesChildLayout5]} />
      <Text style={[styles.topic, styles.feesTypo]}>Topic</Text>
      <View style={[styles.coursesE4Child12, styles.coursesChildLayout5]} />
      <Text style={[styles.fees, styles.feesTypo]}>Fees</Text>
      <View style={[styles.coursesE4Child13, styles.coursesChildPosition]} />
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
      <View style={[styles.coursesE4Child14, styles.coursesChildPosition]} />
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
        style={[styles.black17Icon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/black-17.png")}
      />
      <View style={[styles.coursesE4Child15, styles.coursesChildLayout4]} />
      <Text style={[styles.toa, styles.irTypo]}>TOA</Text>
      <View style={[styles.coursesE4Child16, styles.coursesChildLayout4]} />
      <Text style={[styles.nlp, styles.irTypo]}>NLP</Text>
      <Image
        style={[styles.black19Icon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/black-17.png")}
      />
      <View style={[styles.coursesE4Child17, styles.coursesChildLayout4]} />
      <Text style={[styles.sda, styles.irTypo]}>SDA</Text>
      <Image
        style={[styles.black20Icon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/black-17.png")}
      />
      <View style={[styles.coursesE4Child18, styles.coursesChildLayout4]} />
      <Text style={[styles.oop, styles.irTypo]}>OOP</Text>
      <Image
        style={[styles.black21Icon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/black-17.png")}
      />
      <View style={[styles.coursesE4Child19, styles.coursesChildLayout4]} />
      <Text style={[styles.pdc, styles.irTypo]}>PDC</Text>
      <Image
        style={[styles.black22Icon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/black-17.png")}
      />
      <View style={[styles.coursesE4Child20, styles.coursesChildLayout3]} />
      <Text style={[styles.dlp, styles.dlpTypo]}>DLP</Text>
      <Image
        style={[styles.black23Icon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/black-17.png")}
      />
      <View style={[styles.coursesE4Child21, styles.coursesChildLayout3]} />
      <Text style={[styles.res, styles.dlpTypo]}>RES</Text>
      <Image
        style={[styles.black24Icon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/black-17.png")}
      />
      <View style={[styles.coursesE4Child22, styles.coursesChildLayout3]} />
      <Text style={[styles.kkr, styles.dlpTypo]}>KKR</Text>
      <Image
        style={[styles.black25Icon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/black-17.png")}
      />
      <View style={[styles.coursesE4Child23, styles.coursesChildLayout3]} />
      <Text style={[styles.sde, styles.dlpTypo]}>SDE</Text>
      <Image
        style={[styles.black26Icon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/black-17.png")}
      />
      <View style={[styles.coursesE4Child24, styles.coursesChildLayout3]} />
      <Text style={[styles.tbw, styles.dlpTypo]}>TBW</Text>
      <View style={[styles.coursesE4Child25, styles.coursesChildLayout2]} />
      <Text style={[styles.ir, styles.irTypo]}>IR</Text>
      <Image
        style={[styles.black28Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/black-17.png")}
      />
      <View style={[styles.coursesE4Child26, styles.coursesChildLayout2]} />
      <Text style={styles.rs}>RS</Text>
      <Image
        style={[styles.black29Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/black-29.png")}
      />
      <View style={[styles.coursesE4Child27, styles.coursesChildLayout1]} />
      <Text style={[styles.pf, styles.pfTypo]}>PF</Text>
      <Image
        style={[styles.black30Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/black-29.png")}
      />
      <View style={[styles.coursesE4Child28, styles.coursesChildLayout1]} />
      <Text style={[styles.ds, styles.pfTypo]}>DS</Text>
      <Image
        style={[styles.black31Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/black-29.png")}
      />
      <View style={[styles.coursesE4Child29, styles.coursesChildLayout1]} />
      <Text style={[styles.nc, styles.pfTypo]}>NC</Text>
      <Image
        style={[styles.coursesE4Child30, styles.lineIconLayout]}
        resizeMode="cover"
        source={require("../assets/line-13.png")}
      />
      <Text style={[styles.removeFilter, styles.topic1Typo]}>
        Remove filter
      </Text>
      <Pressable
        style={[styles.rectanglePressable, styles.communitiesPosition]}
        onPress={() => navigation.navigate("CoursesE5")}
      />
      <Text style={[styles.apply, styles.applyTypo]}>Apply</Text>
      <Image
        style={[styles.w1Icon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/w-1.png")}
      />
      <Image
        style={[styles.w2Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/w-1.png")}
      />
      <Image
        style={[styles.coursesE4Child31, styles.coursesChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-96.png")}
      />
      <Image
        style={[styles.picture338Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/picture33-8.png")}
      />
      <Text style={[styles.nlp1, styles.ir1Typo]}>NLP</Text>
      <Image
        style={[styles.coursesE4Child32, styles.coursesChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-96.png")}
      />
      <Image
        style={[styles.picture339Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/picture33-8.png")}
      />
      <Text style={[styles.ir1, styles.ir1Typo]}>IR</Text>
      <Pressable
        style={styles.icons8Arrow242}
        onPress={() => navigation.navigate("ELearningPage")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icons8arrow24-11.png")}
        />
      </Pressable>
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
  coursesChildLayout7: {
    width: 171,
    left: 185,
  },
  coursesChildLayout6: {
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
  coursesChildLayout5: {
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
  iconLayout2: {
    width: 15,
    height: 15,
    position: "absolute",
  },
  coursesChildLayout4: {
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
  coursesChildLayout3: {
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
  coursesChildLayout2: {
    left: 239,
    height: 20,
    width: 65,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorSlateblue,
    position: "absolute",
  },
  iconPosition: {
    left: 221,
    width: 15,
    height: 15,
    position: "absolute",
  },
  iconLayout1: {
    height: 16,
    left: 221,
    width: 15,
    position: "absolute",
  },
  coursesChildLayout1: {
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
  coursesChildLayout: {
    top: 349,
    height: 16,
    width: 68,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  iconLayout: {
    height: 9,
    top: 353,
    width: 15,
    position: "absolute",
  },
  ir1Typo: {
    height: 11,
    width: 27,
    top: 351,
    fontSize: FontSize.size_2xs,
    color: Color.colorSlateblue,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  coursesE4Child: {
    width: 170,
    left: 5,
    top: 162,
    borderRadius: Border.br_8xs,
  },
  coursesE4Item: {
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
  coursesE4Inner: {
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
  coursesE4Child1: {
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
  coursesE4Child2: {
    width: 170,
    left: 5,
  },
  coursesE4Child3: {
    width: 160,
    left: 10,
  },
  ninjaTechniquesOn: {
    left: 13,
  },
  coursesE4Child4: {
    width: 171,
    left: 185,
  },
  coursesE4Child5: {
    width: 161,
    left: 190,
  },
  machineLearning: {
    left: 231,
    width: 150,
  },
  coursesE4Child6: {
    top: 421,
    width: 170,
    left: 5,
  },
  coursesE4Child7: {
    width: 160,
    left: 10,
  },
  dataScienceFor: {
    left: 23,
  },
  coursesE4Child8: {
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
  coursesE4Child9: {
    width: 161,
    left: 190,
  },
  bigDataAnd: {
    left: 213,
    width: 150,
  },
  coursesE4Child10: {
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
    width: 122,
    left: 210,
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
  coursesE4Child11: {
    left: 107,
  },
  topic: {
    left: 126,
  },
  coursesE4Child12: {
    left: 186,
  },
  fees: {
    left: 205,
  },
  coursesE4Child13: {
    top: 318,
    height: 415,
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
  coursesE4Child14: {
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
    top: 324,
    left: 127,
    position: "absolute",
  },
  topic1: {
    top: 327,
    left: 185,
    fontSize: FontSize.size_sm,
    color: Color.colorGainsboro_100,
  },
  black17Icon: {
    top: 395,
    left: 32,
  },
  coursesE4Child15: {
    top: 393,
  },
  toa: {
    left: 72,
    fontSize: FontSize.size_2xs,
    top: 396,
  },
  coursesE4Child16: {
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
  coursesE4Child17: {
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
  coursesE4Child18: {
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
  coursesE4Child19: {
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
  coursesE4Child20: {
    top: 495,
  },
  dlp: {
    top: 498,
  },
  black23Icon: {
    top: 443,
    left: 127,
  },
  coursesE4Child21: {
    top: 441,
  },
  res: {
    top: 444,
  },
  black24Icon: {
    top: 469,
    left: 127,
  },
  coursesE4Child22: {
    top: 467,
  },
  kkr: {
    top: 470,
  },
  black25Icon: {
    top: 419,
    left: 127,
  },
  coursesE4Child23: {
    top: 417,
  },
  sde: {
    top: 420,
  },
  black26Icon: {
    top: 395,
    left: 127,
  },
  coursesE4Child24: {
    top: 393,
  },
  tbw: {
    top: 396,
  },
  coursesE4Child25: {
    top: 393,
  },
  ir: {
    left: 268,
    top: 396,
  },
  black28Icon: {
    top: 420,
  },
  coursesE4Child26: {
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
  coursesE4Child27: {
    top: 441,
  },
  pf: {
    top: 444,
  },
  black30Icon: {
    top: 469,
  },
  coursesE4Child28: {
    top: 467,
  },
  ds: {
    top: 470,
  },
  black31Icon: {
    top: 496,
  },
  coursesE4Child29: {
    top: 494,
  },
  nc: {
    top: 497,
  },
  coursesE4Child30: {
    top: 527,
    height: 2,
    left: 17,
  },
  removeFilter: {
    top: 552,
    left: 19,
    color: Color.colorSlateblue,
  },
  rectanglePressable: {
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
  w1Icon: {
    top: 420,
    left: 32,
  },
  w2Icon: {
    top: 395,
  },
  coursesE4Child31: {
    left: 96,
  },
  picture338Icon: {
    left: 142,
  },
  nlp1: {
    left: 113,
  },
  coursesE4Child32: {
    left: 187,
  },
  picture339Icon: {
    left: 233,
  },
  ir1: {
    left: 210,
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
  coursesE4: {
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

export default CoursesE4;
