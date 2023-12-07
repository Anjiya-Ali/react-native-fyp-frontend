import * as React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Schedule3 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.schedule3, styles.schedule3ChildShadowBox]}>
      <View style={styles.schedule3Child} />
      <View style={styles.teacher0041} />
      <Image
        style={styles.schedule3Item}
        resizeMode="cover"
        source={require("../assets/line-123.png")}
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
      <View style={[styles.schedule3Inner, styles.schedule3ChildLayout]} />
      <View style={[styles.rectangleView, styles.schedule3ChildLayout]} />
      <View style={[styles.schedule3Child1, styles.schedule3ChildLayout]} />
      <View style={[styles.schedule3Child2, styles.schedule3ChildLayout]} />
      <View style={[styles.schedule3Child3, styles.schedule3ChildLayout]} />
      <Text style={[styles.text, styles.textClr]}>10</Text>
      <Text style={[styles.text1, styles.textClr]}>11</Text>
      <Text style={[styles.text2, styles.textClr]}>12</Text>
      <Text style={[styles.text3, styles.textClr]}>09</Text>
      <Text style={[styles.text4, styles.textClr]}>08</Text>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-15.png")}
      />
      <Text style={[styles.mon, styles.monTypo]}>MON</Text>
      <Text style={[styles.monday, styles.textClr]}>Monday</Text>
      <Text style={[styles.sun, styles.monTypo]}>SUN</Text>
      <Text style={[styles.sat, styles.textClr]}>SAT</Text>
      <Text style={[styles.tues, styles.monTypo]}>TUES</Text>
      <Text style={[styles.wed, styles.monTypo]}>WED</Text>
      <View style={styles.schedule3Child4} />
      <Text style={[styles.jan, styles.amPosition]}>10-Jan</Text>
      <Text style={[styles.howToBe, styles.howToBeTypo]}>
        How to be an Effective Coder!!
      </Text>
      <Text style={[styles.drMuhummadRafi, styles.howToBeTypo]}>
        Dr. Muhummad Rafi
      </Text>
      <Text style={[styles.am, styles.amPosition]}>10:00 am</Text>
      <Image
        style={[styles.delete1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/delete-1.png")}
      />
      <Image
        style={[styles.asd1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/asd-1.png")}
      />
      <Image
        style={styles.qwd1Icon}
        resizeMode="cover"
        source={require("../assets/qwd-1.png")}
      />
      <TouchableOpacity
        style={styles.icons8Arrow241}
        onPress={() => navigation.navigate("HomePage2")}
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
  schedule3ChildShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  iconPosition: {
    height: 25,
    top: 74,
    position: "absolute",
  },
  schedule3ChildLayout: {
    height: 72,
    width: 66,
    borderRadius: Border.br_3xs,
    top: 125,
    backgroundColor: Color.colorGainsboro_200,
    position: "absolute",
  },
  textClr: {
    color: Color.colorSlateblue,
    textAlign: "left",
    position: "absolute",
  },
  monTypo: {
    top: 171,
    fontFamily: FontFamily.interRegular,
    color: Color.colorSlateblue,
    textAlign: "left",
    fontSize: FontSize.bodyBold_size,
    position: "absolute",
  },
  amPosition: {
    left: 19,
    color: Color.colorSlateblue,
    textAlign: "left",
    position: "absolute",
  },
  howToBeTypo: {
    fontSize: FontSize.size_sm,
    left: 20,
    color: Color.colorSlateblue,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  schedule3Child: {
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
  schedule3Item: {
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
    top: 74,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.bodyBold_size,
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
  schedule3Inner: {
    left: 138,
  },
  rectangleView: {
    left: 224,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  schedule3Child1: {
    left: 308,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  schedule3Child2: {
    left: 50,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  schedule3Child3: {
    left: -35,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  text: {
    left: 152,
    top: 127,
    color: Color.colorSlateblue,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  text1: {
    left: 242,
    top: 127,
    color: Color.colorSlateblue,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  text2: {
    left: 324,
    top: 127,
    color: Color.colorSlateblue,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  text3: {
    left: 63,
    top: 127,
    color: Color.colorSlateblue,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  text4: {
    left: -20,
    top: 127,
    color: Color.colorSlateblue,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
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
    fontFamily: FontFamily.interRegular,
  },
  monday: {
    top: 279,
    left: 21,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.bodyBold_size,
    color: Color.colorSlateblue,
  },
  sun: {
    left: 65,
    fontFamily: FontFamily.interRegular,
  },
  sat: {
    top: 172,
    left: -12,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.bodyBold_size,
    color: Color.colorSlateblue,
  },
  tues: {
    left: 236,
    fontFamily: FontFamily.interRegular,
  },
  wed: {
    left: 325,
    fontFamily: FontFamily.interRegular,
  },
  schedule3Child4: {
    top: 312,
    left: 0,
    borderRadius: Border.br_8xs,
    width: 360,
    height: 62,
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
  jan: {
    top: 253,
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    left: 19,
  },
  howToBe: {
    top: 318,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  drMuhummadRafi: {
    top: 335,
    fontFamily: FontFamily.interRegular,
  },
  am: {
    top: 352,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interRegular,
  },
  delete1Icon: {
    top: 325,
    left: 281,
  },
  asd1Icon: {
    top: 326,
    left: 325,
  },
  qwd1Icon: {
    top: 257,
    left: 302,
    width: 40,
    height: 40,
    position: "absolute",
  },
  icon2: {
    height: "100%",
    width: "100%",
  },
  icons8Arrow241: {
    left: 11,
    top: 18,
    width: 31,
    height: 29,
    position: "absolute",
  },
  schedule3: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default Schedule3;
