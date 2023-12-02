import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ContainerSection from "../components/ContainerSection";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Quiz = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.quiz}>
      <View style={[styles.header, styles.headerLayout]}>
        <View style={[styles.headerChild, styles.childPosition]} />
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
        <Text style={[styles.quiz1, styles.textTypo]}>
          Last Step to Certificate!
        </Text>
        <Text style={[styles.text, styles.textTypo]}>01:14</Text>
      </View>
      <View style={[styles.number, styles.numberLayout]}>
        <Image
          style={[styles.icons8Tick501, styles.icons8Layout]}
          resizeMode="cover"
          source={require("../assets/icons8tick50-1.png")}
        />
        <Image
          style={[styles.icons8Tick502, styles.icons8Layout]}
          resizeMode="cover"
          source={require("../assets/icons8tick50-1.png")}
        />
        <Image
          style={[styles.icons8Tick503, styles.icons8Layout]}
          resizeMode="cover"
          source={require("../assets/icons8tick50-1.png")}
        />
        <View style={[styles.icons8Circled3501, styles.numberLayout]} />
        <Image
          style={styles.icons8Circled4501}
          resizeMode="cover"
          source={require("../assets/icons8circled450-1.png")}
        />
      </View>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.text1, styles.text1Typo]}>4.</Text>
        <Text style={[styles.whatIsThe, styles.text1Typo]}>
          What is the primary Agile framework that emphasizes iterative and
          incremental development?
        </Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.aScrum, styles.text1Typo]}>A. Scrum</Text>
      </View>
      <ContainerSection />
      <Pressable
        style={[styles.next, styles.nextLayout]}
        onPress={() => navigation.navigate("Feedback")}
      >
        <View style={[styles.nextChild, styles.nextLayout]} />
        <Text style={[styles.finish, styles.backTypo]}>Finish</Text>
      </Pressable>
      <View style={[styles.next1, styles.nextLayout]}>
        <View style={[styles.nextChild, styles.nextLayout]} />
        <Text style={[styles.back, styles.backTypo]}>Back</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerLayout: {
    width: 360,
    position: "absolute",
  },
  childPosition: {
    backgroundColor: Color.colorSlateblue,
    left: 0,
    top: 0,
  },
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  numberLayout: {
    height: 29,
    position: "absolute",
  },
  icons8Layout: {
    height: 28,
    top: 1,
    width: 29,
    position: "absolute",
  },
  groupChildLayout: {
    height: 425,
    width: 315,
    position: "absolute",
  },
  groupPosition: {
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  text1Typo: {
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupLayout: {
    height: 40,
    width: 257,
    position: "absolute",
  },
  nextLayout: {
    width: 73,
    height: 28,
    position: "absolute",
  },
  backTypo: {
    top: 3,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.bodyBold_size,
    color: Color.colorWhite,
    position: "absolute",
  },
  headerChild: {
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    height: 81,
    width: 360,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  icons8Arrow241: {
    left: 18,
    width: 26,
    height: 24,
    top: 28,
    position: "absolute",
  },
  quiz1: {
    left: 31,
    fontSize: FontSize.size_lg,
    width: 292,
    height: 114,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 28,
  },
  text: {
    top: 57,
    left: 151,
    color: "#00ff0a",
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  header: {
    height: 142,
    left: 0,
    top: 0,
  },
  icons8Tick501: {
    left: 0,
  },
  icons8Tick502: {
    left: 34,
  },
  icons8Tick503: {
    left: 69,
  },
  icons8Circled3501: {
    left: 68,
    width: 30,
    top: 0,
  },
  icons8Circled4501: {
    left: 102,
    width: 29,
    height: 29,
    top: 0,
    position: "absolute",
  },
  number: {
    top: 124,
    left: 111,
    width: 131,
  },
  groupChild: {
    height: 425,
    width: 315,
    position: "absolute",
  },
  text1: {
    top: 13,
    fontSize: FontSize.bodyBold_size,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 21,
  },
  whatIsThe: {
    top: 46,
    width: 281,
    left: 21,
    fontSize: FontSize.size_sm,
  },
  rectangleParent: {
    top: 181,
    left: 21,
  },
  groupItem: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.labelColorLightPrimary,
    borderWidth: 0.2,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  aScrum: {
    top: 10,
    left: 17,
    fontSize: FontSize.size_sm,
  },
  rectangleGroup: {
    top: 298,
    left: 38,
  },
  nextChild: {
    backgroundColor: Color.colorSlateblue,
    left: 0,
    top: 0,
  },
  finish: {
    left: 12,
  },
  next: {
    left: 222,
    top: 561,
    width: 73,
  },
  back: {
    left: 17,
  },
  next1: {
    left: 50,
    top: 561,
    width: 73,
  },
  quiz: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 651,
    overflow: "hidden",
    width: "100%",
  },
});

export default Quiz;
