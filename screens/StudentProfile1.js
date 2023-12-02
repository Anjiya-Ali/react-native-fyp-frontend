import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const StudentProfile1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.studentProfile1}>
      <Image
        style={[styles.studentProfile1Child, styles.user11Layout]}
        resizeMode="cover"
        source={require("../assets/ellipse-17.png")}
      />
      <View style={[styles.studentProfile1Item, styles.rectanglePressableBg]} />
      <Image
        style={styles.studentProfile1Inner}
        resizeMode="cover"
        source={require("../assets/rectangle-19.png")}
      />
      <Text style={[styles.languages, styles.bioTypo]}>Languages</Text>
      <Text style={[styles.education, styles.educationTypo]}>Education</Text>
      <Text style={[styles.interests, styles.educationTypo]}>Interests</Text>
      <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressableBg]}
        onPress={() => navigation.navigate("HomePage1")}
      />
      <Text style={[styles.saveProfile, styles.saveProfileTypo]}>
        Save Profile
      </Text>
      <Text style={[styles.enterYourInformation, styles.saveProfileTypo]}>
        Enter your Information
      </Text>
      <Text style={[styles.inshaSamnani, styles.bioTypo]}>Insha Samnani</Text>
      <Text style={styles.inshasamnani2002gmailcom}>
        insha.samnani2002@gmail.com
      </Text>
      <Text style={[styles.addEducation, styles.addTypo]}>Add Education</Text>
      <Image
        style={[styles.lineIcon, styles.studentChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-20.png")}
      />
      <Image
        style={[styles.qwd3Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/qwd-3.png")}
      />
      <Text style={[styles.addInterests, styles.addTypo]}>Add Interests</Text>
      <Image
        style={[styles.studentProfile1Child1, styles.studentChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-20.png")}
      />
      <Image
        style={[styles.qwd4Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/qwd-3.png")}
      />
      <Text style={[styles.addLanguages, styles.addTypo]}>Add Languages</Text>
      <Image
        style={[styles.studentProfile1Child2, styles.studentChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-20.png")}
      />
      <Image
        style={[styles.qwd6Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/qwd-3.png")}
      />
      <Image
        style={[styles.user11, styles.user11Layout]}
        resizeMode="cover"
        source={require("../assets/user-1-1.png")}
      />
      <Image
        style={[styles.pen1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/pen-1.png")}
      />
      <Image
        style={[styles.bin1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/bin-1.png")}
      />
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle-12.png")}
      />
      <Text style={[styles.bio, styles.bioTypo]}>Bio</Text>
      <Text style={styles.nlpLearner}>NLP Learner</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  user11Layout: {
    height: 120,
    width: 120,
    left: 120,
    position: "absolute",
  },
  rectanglePressableBg: {
    backgroundColor: Color.colorSlateblue,
    borderRadius: Border.br_21xl,
    position: "absolute",
  },
  bioTypo: {
    textAlign: "left",
    color: Color.colorSlateblue,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  educationTypo: {
    left: 28,
    textAlign: "left",
    color: Color.colorSlateblue,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  saveProfileTypo: {
    color: Color.colorGainsboro_100,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  addTypo: {
    height: 12,
    width: 67,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_4xs,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    position: "absolute",
  },
  studentChildLayout: {
    height: 2,
    width: 270,
    left: 32,
    position: "absolute",
  },
  iconLayout1: {
    height: 21,
    width: 20,
    left: 303,
    position: "absolute",
  },
  iconLayout: {
    height: 20,
    top: 174,
    width: 20,
    position: "absolute",
  },
  studentProfile1Child: {
    top: 76,
  },
  studentProfile1Item: {
    top: 219,
    width: 360,
    height: 491,
    left: 0,
  },
  studentProfile1Inner: {
    top: 265,
    borderRadius: Border.br_11xl,
    width: 384,
    height: 468,
    left: 0,
    position: "absolute",
  },
  languages: {
    top: 475,
    left: 29,
    fontSize: FontSize.size_sm,
    color: Color.colorSlateblue,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  education: {
    top: 356,
    width: 140,
  },
  interests: {
    top: 417,
  },
  rectanglePressable: {
    top: 572,
    left: 64,
    width: 230,
    height: 51,
  },
  saveProfile: {
    top: 586,
    left: 124,
    fontSize: FontSize.size_xl,
  },
  enterYourInformation: {
    top: 227,
    left: 86,
    fontSize: FontSize.bodyBold_size,
  },
  inshaSamnani: {
    top: 20,
    left: 69,
    fontSize: FontSize.size_11xl,
  },
  inshasamnani2002gmailcom: {
    top: 58,
    left: 82,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  addEducation: {
    top: 388,
    left: 239,
  },
  lineIcon: {
    top: 400,
  },
  qwd3Icon: {
    top: 390,
  },
  addInterests: {
    top: 447,
    left: 243,
  },
  studentProfile1Child1: {
    top: 459,
  },
  qwd4Icon: {
    top: 449,
  },
  addLanguages: {
    top: 506,
    left: 233,
  },
  studentProfile1Child2: {
    top: 518,
  },
  qwd6Icon: {
    top: 508,
  },
  user11: {
    top: 77,
  },
  pen1Icon: {
    left: 215,
  },
  bin1Icon: {
    left: 126,
  },
  rectangleIcon: {
    top: 302,
    left: 22,
    borderRadius: Border.br_8xs,
    width: 310,
    height: 37,
    position: "absolute",
  },
  bio: {
    top: 281,
    left: 25,
    fontSize: FontSize.size_sm,
    color: Color.colorSlateblue,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  nlpLearner: {
    top: 313,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    color: Color.colorGainsboro_100,
    left: 28,
    textAlign: "left",
    position: "absolute",
  },
  studentProfile1: {
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

export default StudentProfile1;
