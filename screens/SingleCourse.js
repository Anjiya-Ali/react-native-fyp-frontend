import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SingleCourse = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.singleCourse}>
      <View style={[styles.courseDetails, styles.courseLayout]}>
        <View style={[styles.courseDetailsChild, styles.courseLayout]} />
        <Text style={styles.duration12hInstructor}>
          Duration: 12h Instructor: Dr. Noman Released: 2/01/2023
        </Text>
        <Text style={[styles.courseDetails1, styles.excelInAgileFlexBox]}>
          COURSE DETAILS
        </Text>
      </View>
      <Image
        style={styles.thumbnailIcon}
        resizeMode="cover"
        source={require("../assets/thumbnail.png")}
      />
      <View style={styles.steps}>
        <Pressable
          style={styles.stepsChild}
          onPress={() => navigation.navigate("MyCourses")}
        />
        <View style={[styles.stepsItem, styles.stepsLayout]} />
        <View style={[styles.stepsInner, styles.stepsLayout]} />
        <View style={[styles.lineView, styles.stepsLayout]} />
        <View style={[styles.stepsChild1, styles.stepsLayout]} />
        <Image
          style={[styles.icons8PlayButton481, styles.icons8Position]}
          resizeMode="cover"
          source={require("../assets/icons8playbutton48-1.png")}
        />
        <Image
          style={[styles.icons8PlayButton482, styles.icons8Position]}
          resizeMode="cover"
          source={require("../assets/icons8playbutton48-1.png")}
        />
        <Image
          style={[styles.icons8PlayButton483, styles.icons8Position]}
          resizeMode="cover"
          source={require("../assets/icons8playbutton48-1.png")}
        />
        <Image
          style={[styles.icons8Download5011, styles.icons8Position]}
          resizeMode="cover"
          source={require("../assets/icons8download50-1-1.png")}
        />
        <View style={styles.rectangleView} />
        <Image
          style={[styles.icons8PlayButton484, styles.icons8Position]}
          resizeMode="cover"
          source={require("../assets/icons8playbutton48-1.png")}
        />
        <View style={[styles.header, styles.headerLayout]}>
          <View style={[styles.headerChild, styles.headerLayout]} />
          <Text style={[styles.excelInAgile, styles.excelInAgileFlexBox]}>
            Excel In Agile Methodology
          </Text>
        </View>
        <Text
          style={[styles.lesson1Welcome, styles.quizTypo]}
        >{`Lesson 1. Welcome & Introduction                                             1hr 20m`}</Text>
        <Text
          style={[styles.lectureNotes, styles.quizTypo]}
        >{`Lecture Notes                               `}</Text>
        <Pressable
          style={[styles.quiz20m, styles.quiz20mPosition]}
          onPress={() => navigation.navigate("Quiz")}
        >
          <Text style={[styles.quiz, styles.quizTypo]}>Quiz 20m</Text>
        </Pressable>
        <Text
          style={[styles.lesson2Fundamentals, styles.quizTypo]}
        >{`Lesson 2. Fundamentals of Agile Methodology                   10h 20m `}</Text>
        <Text
          style={[styles.welcomeIntroduction, styles.agileInSmallFlexBox]}
        >{`Welcome & Introduction`}</Text>
        <View style={[styles.stepsChild2, styles.stepsChildLayout]} />
        <View style={[styles.stepsChild3, styles.stepsChildLayout]} />
        <Text style={[styles.agileInSmall, styles.agileTypo]}>
          Agile in Small Scale Projects
        </Text>
        <Text style={[styles.agileInLarge, styles.agileTypo]}>
          Agile in Large Scale Projects
        </Text>
        <View style={[styles.welcome, styles.welcomeLayout]}>
          <Text style={[styles.scrumAndSprint, styles.welcomeLayout]}>
            Scrum and Sprint Meetings
          </Text>
        </View>
        <Image
          style={[styles.icons8Done321, styles.icons8Layout]}
          resizeMode="cover"
          source={require("../assets/icons8done32-1.png")}
        />
        <Image
          style={[styles.icons8Done323, styles.icons8Layout]}
          resizeMode="cover"
          source={require("../assets/icons8done32-1.png")}
        />
        <Image
          style={[styles.icons8Done322, styles.icons8Layout]}
          resizeMode="cover"
          source={require("../assets/icons8done32-1.png")}
        />
        <Image
          style={[styles.icons8Done324, styles.icons8Layout]}
          resizeMode="cover"
          source={require("../assets/icons8done32-1.png")}
        />
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
    </View>
  );
};

const styles = StyleSheet.create({
  courseLayout: {
    height: 38,
    width: 363,
    position: "absolute",
  },
  excelInAgileFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  stepsLayout: {
    height: 2,
    width: 371,
    borderTopWidth: 1.5,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    position: "absolute",
  },
  icons8Position: {
    height: 22,
    left: 339,
    position: "absolute",
  },
  headerLayout: {
    height: 81,
    width: 360,
    top: 0,
    position: "absolute",
  },
  quizTypo: {
    height: 64,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_2xs,
    textAlign: "left",
  },
  quiz20mPosition: {
    left: 17,
    position: "absolute",
  },
  agileInSmallFlexBox: {
    alignItems: "center",
    display: "flex",
  },
  stepsChildLayout: {
    height: 1,
    width: 343,
    borderTopWidth: 1,
    left: 27,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    position: "absolute",
  },
  agileTypo: {
    height: 17,
    width: 213,
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.size_smi,
    left: 24,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  welcomeLayout: {
    width: 200,
    height: 17,
    position: "absolute",
  },
  icons8Layout: {
    height: 8,
    width: 11,
    left: 11,
    position: "absolute",
  },
  courseDetailsChild: {
    backgroundColor: Color.colorSlateblue,
    left: 0,
    top: 0,
  },
  duration12hInstructor: {
    top: 19,
    left: 37,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    width: 290,
    color: Color.colorWhite,
    position: "absolute",
  },
  courseDetails1: {
    top: 3,
    left: 135,
    fontSize: FontSize.size_3xs,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 97,
  },
  courseDetails: {
    top: 265,
    left: -3,
  },
  thumbnailIcon: {
    top: 91,
    left: 22,
    width: 321,
    height: 164,
    position: "absolute",
  },
  stepsChild: {
    top: 22,
    width: 51,
    height: 27,
    left: 9,
    backgroundColor: Color.colorSlateblue,
    position: "absolute",
  },
  stepsItem: {
    top: 373,
    left: 5,
    width: 371,
    borderTopWidth: 1.5,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
  },
  stepsInner: {
    top: 518,
    left: -1,
  },
  lineView: {
    top: 601,
    left: 8,
  },
  stepsChild1: {
    top: 564,
    left: 5,
    width: 371,
    borderTopWidth: 1.5,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
  },
  icons8PlayButton481: {
    top: 343,
    width: 25,
    height: 22,
    left: 339,
  },
  icons8PlayButton482: {
    top: 410,
    width: 25,
    height: 22,
    left: 339,
  },
  icons8PlayButton483: {
    top: 450,
    width: 25,
    height: 22,
    left: 339,
  },
  icons8Download5011: {
    top: 527,
    width: 22,
    height: 22,
    left: 339,
  },
  rectangleView: {
    top: 478,
    backgroundColor: "#e2dede",
    height: 41,
    width: 360,
    left: 9,
    position: "absolute",
  },
  icons8PlayButton484: {
    top: 489,
    width: 25,
    height: 22,
    left: 339,
  },
  headerChild: {
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    backgroundColor: Color.colorSlateblue,
    left: 0,
  },
  excelInAgile: {
    top: 27,
    left: 63,
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    width: 292,
    height: 19,
  },
  header: {
    left: 9,
  },
  lesson1Welcome: {
    top: 322,
    width: 352,
    height: 64,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_2xs,
    left: 17,
    position: "absolute",
  },
  lectureNotes: {
    top: 535,
    width: 309,
    height: 64,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_2xs,
    left: 17,
    position: "absolute",
  },
  quiz: {
    width: 352,
    height: 64,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_2xs,
  },
  quiz20m: {
    top: 575,
  },
  lesson2Fundamentals: {
    top: 389,
    width: 358,
    height: 64,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_2xs,
    left: 17,
    position: "absolute",
  },
  welcomeIntroduction: {
    top: 346,
    width: 168,
    height: 16,
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    left: 24,
    position: "absolute",
  },
  stepsChild2: {
    top: 446,
  },
  stepsChild3: {
    top: 480,
  },
  agileInSmall: {
    top: 416,
    alignItems: "center",
    display: "flex",
  },
  agileInLarge: {
    top: 455,
  },
  scrumAndSprint: {
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    left: 0,
    top: 0,
  },
  welcome: {
    top: 492,
    left: 24,
  },
  icons8Done321: {
    top: 351,
  },
  icons8Done323: {
    top: 460,
  },
  icons8Done322: {
    top: 421,
  },
  icons8Done324: {
    top: 496,
  },
  steps: {
    left: -9,
    width: 378,
    height: 639,
    top: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  icons8Arrow241: {
    left: 18,
    top: 28,
    width: 26,
    height: 24,
    position: "absolute",
  },
  singleCourse: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 651,
    overflow: "hidden",
    width: "100%",
  },
});

export default SingleCourse;
