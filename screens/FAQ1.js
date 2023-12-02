import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const FAQ1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.faq1}>
      <View style={[styles.faq1Child, styles.faq1ChildShadowBox]} />
      <View style={styles.faq1Item} />
      <Pressable
        style={styles.icons8Arrow241}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icons8arrow24-11.png")}
        />
      </Pressable>
      <Image
        style={styles.faq1Inner}
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
      <View style={[styles.rectangleView, styles.faq1ChildShadowBox]} />
      <Pressable
        style={[styles.wer9, styles.iconLayout]}
        onPress={() => navigation.navigate("FAQ2")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/wer-4.png")}
        />
      </Pressable>
      <View style={[styles.faq1Child1, styles.faq1ChildShadowBox]} />
      <Image
        style={[styles.wer5Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/wer-4.png")}
      />
      <Text style={[styles.willIGet, styles.howTypo]}>
        Will I get certificate after completing free course?
      </Text>
      <Text style={[styles.howICan, styles.howTypo]}>
        How I can invite another teacher to join course?
      </Text>
      <Text style={[styles.howICan1, styles.howTypo]}>How I can bid?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  faq1ChildShadowBox: {
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
    left: 329,
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
  faq1Child: {
    top: 196,
  },
  faq1Item: {
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
  faq1Inner: {
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
    top: 215,
  },
  rectangleView: {
    top: 137,
  },
  wer9: {
    top: 159,
  },
  faq1Child1: {
    top: 256,
  },
  wer5Icon: {
    top: 275,
  },
  willIGet: {
    top: 143,
    width: 336,
  },
  howICan: {
    top: 260,
    width: 319,
  },
  howICan1: {
    top: 201,
  },
  faq1: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default FAQ1;
