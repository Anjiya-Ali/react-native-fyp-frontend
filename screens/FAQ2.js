import * as React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const FAQ2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.faq2}>
      <View style={[styles.faq2Child, styles.faq2ChildShadowBox]} />
      <View style={styles.faq2Item} />
      <TouchableOpacity
        style={styles.icons8Arrow241}
        onPress={() => navigation.navigate("HomePage2")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icons8arrow24-11.png")}
        />
      </TouchableOpacity>
      <Image
        style={styles.faq2Inner}
        resizeMode="cover"
        source={require("../assets/line-12.png")}
      />
      <Text style={[styles.frequentlyAskedQuestions, styles.faqTypo]}>
        Frequently Asked Questions
      </Text>
      <Text style={[styles.faq, styles.faqTypo]}>F.A.Q.</Text>
      <Image
        style={[styles.wer4Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/wer-4.png")}
      />
      <View style={styles.rectangleView} />
      <Image
        style={[styles.wer9Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/wer-9.png")}
      />
      <View style={[styles.faq2Child1, styles.faq2ChildShadowBox]} />
      <Image
        style={[styles.wer5Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/wer-4.png")}
      />
      <Text style={[styles.willIGet, styles.howTypo]}>
        Will I get certificate after completing free course?
      </Text>
      <Text
        style={[styles.ofcourseYouCan, styles.ofcourseYouCanTypo]}
      >{`Ofcourse, You can will get a free certificate on `}</Text>
      <Text
        style={[styles.completingAFree, styles.ofcourseYouCanTypo]}
      >{`completing a free course.
That’s why LearnLance exists dude:)`}</Text>
      <Text style={[styles.howICan, styles.howTypo]}>
        How I can invite another teacher to join course?
      </Text>
      <Text style={[styles.howICan1, styles.howTypo]}>How I can bid?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  faq2ChildShadowBox: {
    height: 49,
    width: 360,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_8xs,
    left: 0,
    position: "absolute",
  },
  faqTypo: {
    textAlign: "left",
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    left: 63,
    position: "absolute",
  },
  iconLayout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  howTypo: {
    color: Color.colorSlateblue,
    left: 8,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  ofcourseYouCanTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    color: Color.colorSlateblue,
    left: 8,
    textAlign: "left",
    position: "absolute",
  },
  faq2Child: {
    top: 248,
  },
  faq2Item: {
    top: -594,
    left: -4,
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorSlateblue,
    width: 370,
    height: 700,
    position: "absolute",
  },
  icon: {
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
  faq2Inner: {
    top: 441,
    left: 16,
    width: 311,
    height: 0,
    position: "absolute",
  },
  frequentlyAskedQuestions: {
    top: 58,
    fontSize: FontSize.size_sm,
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    left: 63,
  },
  faq: {
    top: 16,
    fontSize: FontSize.size_11xl,
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    left: 63,
  },
  wer4Icon: {
    top: 267,
    left: 329,
    height: 30,
    width: 30,
  },
  rectangleView: {
    top: 137,
    height: 98,
    width: 360,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_8xs,
    left: 0,
    position: "absolute",
  },
  wer9Icon: {
    top: 172,
    left: 328,
  },
  faq2Child1: {
    top: 311,
  },
  wer5Icon: {
    top: 331,
    left: 329,
    height: 30,
    width: 30,
  },
  willIGet: {
    top: 143,
  },
  ofcourseYouCan: {
    top: 179,
  },
  completingAFree: {
    top: 197,
  },
  howICan: {
    top: 315,
  },
  howICan1: {
    top: 253,
  },
  faq2: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default FAQ2;
