import * as React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.login, styles.loginShadowBox]}>
      <Image
        style={[
          styles.imageIzlyy1zfiTransformed1Icon,
          styles.loginItemPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/imageizlyy1zfitransformed-1.png")}
      />
      <View style={[styles.loginChild, styles.loginBorder]} />
      <Image
        style={[styles.loginItem, styles.loginItemPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-11.png")}
      />
      <View style={[styles.loginInner, styles.loginInnerLayout]} />
      <Image
        style={[styles.rectangleIcon, styles.loginInnerLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-3.png")}
      />
      <Text style={[styles.personexamplecom, styles.textFlexBox]}>
        person@example.com
      </Text>
      <Text style={[styles.text, styles.loginTypo]}>...................</Text>
      <Text style={[styles.forgotPassword, styles.passwordClr]}>
        Forgot Password?
      </Text>
      <Text style={[styles.email, styles.passwordClr]}>Email</Text>
      <Text style={[styles.password, styles.passwordClr]}>Password</Text>
      <View style={styles.rectangleView} />
      <Text style={[styles.login1, styles.loginTypo]}>Login</Text>
      <Text style={[styles.loginToYour, styles.passwordClr]}>
        Login to your Account
      </Text>
      <TouchableOpacity
        style={styles.createANewContainer}
        onPress={() => navigation.navigate("AreYouAStudentOrTeacher")}
      >
        <Text style={[styles.createANewAccount, styles.loginTypo]}>
          Create a New Account
        </Text>
      </TouchableOpacity>
      <Image
        style={[styles.picture101Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/picture10-1.png")}
      />
      <Image
        style={[styles.picture91Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/picture9-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  loginItemPosition: {
    left: 0,
    position: "absolute",
  },
  loginBorder: {
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    backgroundColor: Color.colorSlateblue,
  },
  loginInnerLayout: {
    height: 37,
    width: 211,
    borderRadius: Border.br_8xs,
    left: 75,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.colorGainsboro_100,
  },
  loginTypo: {
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  passwordClr: {
    color: Color.colorSlateblue,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  imageIzlyy1zfiTransformed1Icon: {
    top: 0,
    width: 553,
    height: 413,
  },
  loginChild: {
    top: 240,
    width: 360,
    height: 400,
    borderRadius: Border.br_21xl,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  loginItem: {
    top: 293,
    borderRadius: Border.br_11xl,
    width: 384,
    height: 365,
  },
  loginInner: {
    top: 372,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
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
  rectangleIcon: {
    top: 455,
  },
  personexamplecom: {
    top: 381,
    left: 123,
    fontSize: FontSize.size_xs,
    textDecoration: "underline",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  text: {
    top: 460,
    left: 116,
    height: 33,
    width: 163,
    fontSize: FontSize.bodyBold_size,
    fontWeight: "800",
    textAlign: "left",
    color: Color.colorGainsboro_100,
    position: "absolute",
  },
  forgotPassword: {
    top: 506,
    left: 130,
    fontSize: FontSize.size_2xs,
    height: 18,
    width: 163,
    fontFamily: FontFamily.interRegular,
  },
  email: {
    top: 351,
    left: 84,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.bodyBold_size,
  },
  password: {
    top: 434,
    left: 82,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.bodyBold_size,
  },
  rectangleView: {
    top: 555,
    left: 60,
    width: 230,
    height: 51,
    backgroundColor: Color.colorSlateblue,
    borderRadius: Border.br_21xl,
    position: "absolute",
  },
  login1: {
    top: 568,
    left: 146,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorGainsboro_100,
    position: "absolute",
  },
  loginToYour: {
    top: 310,
    left: 87,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.bodyBold_size,
  },
  createANewAccount: {
    fontSize: FontSize.bodyBold_size,
    fontWeight: "800",
    textAlign: "left",
    color: Color.colorGainsboro_100,
  },
  createANewContainer: {
    top: 255,
    left: 84,
    position: "absolute",
  },
  picture101Icon: {
    top: 376,
    left: 84,
  },
  picture91Icon: {
    top: 458,
    left: 80,
  },
  login: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default Login;
