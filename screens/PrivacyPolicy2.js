import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const PrivacyPolicy2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.privacyPolicy2}>
      <Image
        style={[styles.imageIzlyy1zfiTransformed1Icon, styles.privacyPosition]}
        resizeMode="cover"
        source={require("../assets/imageizlyy1zfitransformed-1.png")}
      />
      <View style={[styles.privacyPolicy2Child, styles.privacyPosition]} />
      <Image
        style={[styles.privacyPolicy2Item, styles.privacyPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-14.png")}
      />
      <Text style={[styles.termsOfServices, styles.acceptClr]}>
        Terms of Services
      </Text>
      <Text style={[styles.updatedOn, styles.acceptClr]}>
        Updated on : 13 Oct, 2023
      </Text>
      <Text style={[styles.acceptanceOfTermsContainer, styles.viewMoreClr]}>
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
      <Text style={[styles.accept, styles.acceptClr]}>Accept</Text>
      <Image
        style={styles.privacyPolicy2Inner}
        resizeMode="cover"
        source={require("../assets/line-13.png")}
      />
      <Text style={[styles.viewMore, styles.viewMoreClr]}>View More</Text>
      <Image
        style={styles.wer11Icon}
        resizeMode="cover"
        source={require("../assets/wer-10.png")}
      />
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("HomePage2")}
      >
        <Text style={styles.text}>􀅾</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  privacyPosition: {
    left: 0,
    position: "absolute",
  },
  acceptClr: {
    color: Color.colorGainsboro_100,
    textAlign: "left",
    position: "absolute",
  },
  viewMoreClr: {
    color: Color.colorSlateblue,
    textAlign: "left",
    position: "absolute",
  },
  imageIzlyy1zfiTransformed1Icon: {
    top: 0,
    width: 553,
    height: 413,
  },
  privacyPolicy2Child: {
    top: 240,
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorSlateblue,
    borderStyle: "solid",
    borderColor: Color.labelColorLightPrimary,
    borderWidth: 1,
    width: 360,
    height: 400,
  },
  privacyPolicy2Item: {
    top: 293,
    borderRadius: Border.br_11xl,
    width: 384,
    height: 365,
  },
  termsOfServices: {
    top: 248,
    left: 111,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.bodyBold_size,
  },
  updatedOn: {
    top: 270,
    left: 100,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
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
  },
  accept: {
    top: 583,
    left: 225,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  privacyPolicy2Inner: {
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
  },
  wer11Icon: {
    top: 513,
    left: 201,
    width: 20,
    height: 20,
    position: "absolute",
  },
  text: {
    lineHeight: 22,
    fontFamily: FontFamily.sFProDisplay,
    color: Color.blue500,
    textAlign: "left",
    fontSize: FontSize.bodyBold_size,
  },
  pressable: {
    left: 16,
    top: 10,
    position: "absolute",
  },
  privacyPolicy2: {
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

export default PrivacyPolicy2;
