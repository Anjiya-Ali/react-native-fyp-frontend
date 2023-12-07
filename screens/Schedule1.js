import * as React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Schedule1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.schedule1}>
      <View style={styles.schedule1Child} />
      <View style={styles.teacher0041} />
      <Image
        style={styles.schedule1Item}
        resizeMode="cover"
        source={require("../assets/line-121.png")}
      />
      <Text style={styles.january}>January</Text>
      <Text style={styles.scheduleMeetings}>Schedule Meetings</Text>
      <Image
        style={[styles.icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/44-4.png")}
      />
      <Image
        style={[styles.icon1, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/44-5.png")}
      />
      <View style={styles.schedule1Inner} />
      <View style={[styles.rectangleView, styles.schedule1ChildShadowBox]} />
      <View style={[styles.schedule1Child1, styles.schedule1ChildShadowBox]} />
      <View style={[styles.schedule1Child2, styles.schedule1ChildShadowBox]} />
      <View style={[styles.schedule1Child3, styles.schedule1ChildShadowBox]} />
      <Text style={[styles.text, styles.textTypo]}>10</Text>
      <Text style={[styles.text1, styles.textTypo]}>11</Text>
      <Text style={[styles.text2, styles.textTypo]}>12</Text>
      <Text style={[styles.text3, styles.textTypo]}>09</Text>
      <Text style={[styles.text4, styles.textTypo]}>08</Text>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-15.png")}
      />
      <Text style={[styles.mon, styles.monTypo]}>MON</Text>
      <Text style={[styles.monday, styles.monTypo]}>Monday</Text>
      <Text style={[styles.sun, styles.monTypo]}>SUN</Text>
      <Text style={[styles.sat, styles.monTypo]}>SAT</Text>
      <Text style={[styles.tues, styles.monTypo]}>TUES</Text>
      <Text style={[styles.wed, styles.monTypo]}>WED</Text>
      <Text style={[styles.jan, styles.textTypo]}>10-Jan</Text>
      <TouchableOpacity
        style={styles.qwd1}
        onPress={() => navigation.navigate("Schedule2")}
      >
        <Image
          style={styles.icon2}
          resizeMode="cover"
          source={require("../assets/qwd-1.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.icons8Arrow241}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon2}
          resizeMode="cover"
          source={require("../assets/icons8arrow24-11.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    height: 25,
    top: 74,
    position: "absolute",
  },
  schedule1ChildShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 72,
    width: 66,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_3xs,
    top: 125,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorSlateblue,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  monTypo: {
    fontFamily: FontFamily.interRegular,
    color: Color.colorSlateblue,
    textAlign: "left",
    fontSize: FontSize.bodyBold_size,
    position: "absolute",
  },
  schedule1Child: {
    top: -472,
    left: -4,
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorSlateblue,
    width: 370,
    height: 700,
    position: "absolute",
  },
  teacher0041: {
    top: 455,
    left: 183,
    width: 147,
    height: 153,
    position: "absolute",
  },
  schedule1Item: {
    top: 441,
    left: 16,
    width: 311,
    height: 0,
    position: "absolute",
  },
  january: {
    left: 135,
    textAlign: "left",
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.bodyBold_size,
    top: 74,
    position: "absolute",
  },
  scheduleMeetings: {
    top: 16,
    left: 49,
    fontSize: FontSize.size_11xl,
    textAlign: "left",
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  icon: {
    left: 91,
    width: 25,
  },
  icon1: {
    left: 222,
    width: 27,
  },
  schedule1Inner: {
    left: 138,
    height: 72,
    width: 66,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_3xs,
    top: 125,
    position: "absolute",
  },
  rectangleView: {
    left: 224,
  },
  schedule1Child1: {
    left: 308,
  },
  schedule1Child2: {
    left: 50,
  },
  schedule1Child3: {
    left: -35,
  },
  text: {
    left: 152,
    top: 127,
    color: Color.colorSlateblue,
    fontSize: FontSize.size_11xl,
  },
  text1: {
    left: 242,
    top: 127,
    color: Color.colorSlateblue,
    fontSize: FontSize.size_11xl,
  },
  text2: {
    left: 324,
    top: 127,
    color: Color.colorSlateblue,
    fontSize: FontSize.size_11xl,
  },
  text3: {
    left: 63,
    top: 127,
    color: Color.colorSlateblue,
    fontSize: FontSize.size_11xl,
  },
  text4: {
    left: -20,
    top: 127,
    color: Color.colorSlateblue,
    fontSize: FontSize.size_11xl,
  },
  ellipseIcon: {
    top: 206,
    left: 164,
    width: 20,
    height: 20,
    position: "absolute",
  },
  mon: {
    left: 151,
    top: 171,
    fontFamily: FontFamily.interRegular,
  },
  monday: {
    top: 279,
    left: 21,
  },
  sun: {
    left: 65,
    top: 171,
    fontFamily: FontFamily.interRegular,
  },
  sat: {
    top: 172,
    left: -12,
  },
  tues: {
    left: 236,
    top: 171,
    fontFamily: FontFamily.interRegular,
  },
  wed: {
    left: 325,
    top: 171,
    fontFamily: FontFamily.interRegular,
  },
  jan: {
    top: 253,
    left: 19,
    fontSize: FontSize.size_6xl,
  },
  icon2: {
    height: "100%",
    width: "100%",
  },
  qwd1: {
    left: 302,
    top: 257,
    width: 40,
    height: 40,
    position: "absolute",
  },
  icons8Arrow241: {
    left: 11,
    top: 18,
    width: 31,
    height: 29,
    position: "absolute",
  },
  schedule1: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default Schedule1;
