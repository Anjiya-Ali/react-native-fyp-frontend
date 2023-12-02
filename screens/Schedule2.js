import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Schedule2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.schedule2}>
      <View style={[styles.schedule2Child, styles.schedule2ChildBg]} />
      <View style={styles.teacher0041} />
      <Image
        style={styles.schedule2Item}
        resizeMode="cover"
        source={require("../assets/line-124.png")}
      />
      <Text style={[styles.january, styles.addTypo]}>January</Text>
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
      <View style={[styles.schedule2Inner, styles.schedule2ChildLayout1]} />
      <View style={[styles.rectangleView, styles.schedule2ChildShadowBox]} />
      <View style={[styles.schedule2Child1, styles.schedule2ChildShadowBox]} />
      <View style={[styles.schedule2Child2, styles.schedule2ChildShadowBox]} />
      <View style={[styles.schedule2Child3, styles.schedule2ChildShadowBox]} />
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
      <Image
        style={styles.qwd1Icon}
        resizeMode="cover"
        source={require("../assets/qwd-1.png")}
      />
      <View style={[styles.schedule2Child4, styles.schedule2ChildShadowBox]} />
      <Image
        style={[styles.rectangleIcon, styles.schedule2ChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-12.png")}
      />
      <Image
        style={[styles.schedule2Child5, styles.schedule2ChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-46.png")}
      />
      <Text style={[styles.title, styles.timeTypo]}>Title</Text>
      <Image
        style={[styles.schedule2Child6, styles.schedule2ChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-12.png")}
      />
      <Text style={[styles.organizer, styles.timeTypo]}>Organizer</Text>
      <Text style={[styles.time, styles.timeTypo]}>Time</Text>
      <Pressable
        style={[styles.rectanglePressable, styles.schedule2ChildBg]}
        onPress={() => navigation.navigate("Schedule3")}
      />
      <Text style={[styles.add, styles.addTypo]}>Add</Text>
      <Text style={[styles.howToBe, styles.amTypo]}>
        How to be an Effective Coder!!
      </Text>
      <Text style={[styles.inshaSamnani, styles.amTypo]}>Insha Samnani</Text>
      <Text style={[styles.am, styles.amTypo]}>10:00 am</Text>
      <Pressable
        style={styles.icons8Arrow241}
        onPress={() => navigation.navigate("HomePage2")}
      >
        <Image
          style={styles.icon2}
          resizeMode="cover"
          source={require("../assets/icons8arrow24-11.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  schedule2ChildBg: {
    backgroundColor: Color.colorSlateblue,
    borderRadius: Border.br_21xl,
    position: "absolute",
  },
  addTypo: {
    textAlign: "left",
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  iconPosition: {
    height: 25,
    top: 74,
    position: "absolute",
  },
  schedule2ChildLayout1: {
    height: 72,
    width: 66,
    borderRadius: Border.br_3xs,
    top: 125,
  },
  schedule2ChildShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorGainsboro_200,
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
  schedule2ChildLayout: {
    height: 37,
    borderRadius: Border.br_8xs,
    left: 28,
    position: "absolute",
  },
  timeTypo: {
    fontSize: FontSize.size_sm,
    left: 33,
    color: Color.colorSlateblue,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  amTypo: {
    fontSize: FontSize.size_xs,
    left: 39,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorGainsboro_100,
    position: "absolute",
  },
  schedule2Child: {
    top: -472,
    left: -4,
    width: 370,
    height: 700,
  },
  teacher0041: {
    top: 455,
    left: 183,
    width: 147,
    height: 153,
    position: "absolute",
  },
  schedule2Item: {
    left: 16,
    width: 311,
    height: 0,
    top: 441,
    position: "absolute",
  },
  january: {
    left: 135,
    fontSize: FontSize.bodyBold_size,
    top: 74,
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
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
  schedule2Inner: {
    left: 138,
    backgroundColor: Color.colorGainsboro_200,
    width: 66,
    borderRadius: Border.br_3xs,
    top: 125,
    position: "absolute",
  },
  rectangleView: {
    left: 224,
    height: 72,
    width: 66,
    borderRadius: Border.br_3xs,
    top: 125,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  schedule2Child1: {
    left: 308,
    height: 72,
    width: 66,
    borderRadius: Border.br_3xs,
    top: 125,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  schedule2Child2: {
    left: 50,
    height: 72,
    width: 66,
    borderRadius: Border.br_3xs,
    top: 125,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  schedule2Child3: {
    left: -35,
    height: 72,
    width: 66,
    borderRadius: Border.br_3xs,
    top: 125,
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
  qwd1Icon: {
    top: 257,
    left: 302,
    width: 40,
    height: 40,
    position: "absolute",
  },
  schedule2Child4: {
    top: 331,
    left: 0,
    borderTopLeftRadius: Border.br_21xl,
    borderTopRightRadius: Border.br_21xl,
    width: 359,
    height: 309,
  },
  rectangleIcon: {
    top: 391,
    width: 310,
    height: 37,
    borderRadius: Border.br_8xs,
    left: 28,
  },
  schedule2Child5: {
    top: 531,
    width: 100,
    height: 37,
    borderRadius: Border.br_8xs,
    left: 28,
  },
  title: {
    top: 371,
  },
  schedule2Child6: {
    top: 461,
    width: 310,
    height: 37,
    borderRadius: Border.br_8xs,
    left: 28,
  },
  organizer: {
    top: 441,
  },
  time: {
    top: 511,
  },
  rectanglePressable: {
    top: 582,
    left: 101,
    width: 148,
    height: 51,
  },
  add: {
    top: 596,
    left: 153,
    fontSize: FontSize.size_xl,
  },
  howToBe: {
    top: 402,
  },
  inshaSamnani: {
    top: 472,
  },
  am: {
    top: 542,
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
  schedule2: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default Schedule2;
