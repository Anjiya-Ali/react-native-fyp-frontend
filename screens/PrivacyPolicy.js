import * as React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const PrivacyPolicy = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.privacyPolicy}>
      <Image
        style={styles.imageIzlyy1zfiTransformed1Icon}
        resizeMode="cover"
        source={require("../assets/imageizlyy1zfitransformed-1.png")}
      />
      <View style={[styles.privacyPolicyChild, styles.privacyBg]} />
      <Image
        style={styles.privacyPolicyItem}
        resizeMode="cover"
        source={require("../assets/rectangle-11.png")}
      />
      <Text style={[styles.termsOfServices, styles.acceptFlexBox]}>
        Terms of Services
      </Text>
      <Text style={[styles.updatedOn, styles.decline1Typo]}>
        Updated on : 13 Oct, 2023
      </Text>
      <Text style={[styles.acceptanceOfTermsContainer, styles.decline1Clr]}>
        <Text style={styles.termsTypo}>{`Acceptance of Terms:
`}</Text>
        <Text
          style={styles.clearlyStateThat}
        >{`Clearly state that by using the platform, users agree to abide by the terms and conditions outlined. Include a mechanism for users to explicitly accept the terms, such as a checkbox during the registration process.

`}</Text>
        <Text style={styles.termsTypo}>{`Code of Conduct:
`}</Text>
        <Text
          style={styles.clearlyStateThat}
        >{`Define acceptable and unacceptable behavior on the platform. Specify any content restrictions, guidelines for user interactions, and consequences for violating the terms. Emphasize the importance of maintaining a positive and respectful community.

`}</Text>
        <Text style={styles.termsTypo}>{`Intellectual Property Rights:
`}</Text>
        <Text style={styles.clearlyStateThat}>
          Clarify the ownership of intellectual property, including
          user-generated content. Specify the rights users grant
        </Text>
      </Text>
      <TouchableOpacity
        style={[styles.privacyPolicyInner, styles.privacyBg]}
        onPress={() => navigation.navigate("AreYouAStudentOrTeacher")}
      />
      <Text style={[styles.accept, styles.acceptPosition]}>Accept</Text>
      <TouchableOpacity
        style={[styles.decline, styles.acceptPosition]}
        onPress={() => navigation.navigate("SecondFrontPage")}
      >
        <Text style={[styles.decline1, styles.decline1Clr]}>Decline</Text>
      </TouchableOpacity>
      <Image
        style={styles.lineIcon}
        resizeMode="cover"
        source={require("../assets/line-13.png")}
      />
      <Text style={[styles.viewMore, styles.decline1Clr]}>View More</Text>
      <Image
        style={styles.wer11Icon}
        resizeMode="cover"
        source={require("../assets/wer-10.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  privacyBg: {
    backgroundColor: Color.colorSlateblue,
    borderRadius: Border.br_21xl,
    position: "absolute",
  },
  acceptFlexBox: {
    textAlign: "left",
    color: Color.colorGainsboro_100,
  },
  decline1Typo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
  },
  decline1Clr: {
    color: Color.colorSlateblue,
    textAlign: "left",
  },
  acceptPosition: {
    top: 583,
    position: "absolute",
  },
  imageIzlyy1zfiTransformed1Icon: {
    top: 0,
    width: 553,
    height: 413,
    left: 0,
    position: "absolute",
  },
  privacyPolicyChild: {
    top: 240,
    borderStyle: "solid",
    borderColor: Color.labelColorLightPrimary,
    borderWidth: 1,
    width: 360,
    height: 400,
    left: 0,
  },
  privacyPolicyItem: {
    top: 293,
    borderRadius: Border.br_11xl,
    width: 384,
    height: 365,
    left: 0,
    position: "absolute",
  },
  termsOfServices: {
    top: 248,
    left: 111,
    fontSize: FontSize.bodyBold_size,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  updatedOn: {
    top: 270,
    left: 100,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorGainsboro_100,
    position: "absolute",
  },
  termsTypo: {
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  clearlyStateThat: {
    fontFamily: FontFamily.interRegular,
  },
  acceptanceOfTermsContainer: {
    top: 313,
    left: 26,
    fontSize: FontSize.size_3xs,
    width: 325,
    position: "absolute",
  },
  privacyPolicyInner: {
    top: 570,
    left: 172,
    width: 175,
    height: 51,
  },
  accept: {
    left: 225,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  decline1: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
  },
  decline: {
    left: 28,
  },
  lineIcon: {
    top: 551,
    left: 14,
    width: 323,
    height: 2,
    position: "absolute",
  },
  viewMore: {
    top: 516,
    left: 135,
    fontSize: FontSize.size_xs,
    width: 67,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  wer11Icon: {
    top: 513,
    left: 201,
    width: 20,
    height: 20,
    position: "absolute",
  },
  privacyPolicy: {
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

export default PrivacyPolicy;
