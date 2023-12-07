import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const CreateTopicRequest = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.createTopicRequest}>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={styles.createTopicRequest1}>CREATE TOPIC REQUEST</Text>
      </View>
      <TouchableOpacity
        style={styles.icons8Arrow241}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icons8arrow24-1.png")}
        />
      </TouchableOpacity>
      <Text style={styles.inshaSamnani}>Insha Samnani</Text>
      <Image
        style={[styles.createTopicRequestChild, styles.rectangleIconLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-47801.png")}
      />
      <Image
        style={[styles.createTopicRequestItem, styles.createLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-47801.png")}
      />
      <Image
        style={[styles.createTopicRequestInner, styles.createLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-47801.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-47801.png")}
      />
      <TouchableOpacity
        style={styles.icons8DropDown301}
        onPress={() => navigation.navigate("CreateTopicRequest2")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icons8dropdown30-11.png")}
        />
      </TouchableOpacity>
      <Image
        style={styles.createTopicRequestChild1}
        resizeMode="cover"
        source={require("../assets/rectangle-4781.png")}
      />
      <Text style={[styles.title, styles.titleTypo]}>Title</Text>
      <Text style={[styles.description, styles.titleTypo]}>Description</Text>
      <Text style={[styles.estimatedHours, styles.titleTypo]}>
        Estimated Hours
      </Text>
      <Text style={[styles.ratePerHour, styles.titleTypo]}>Rate Per Hour</Text>
      <Text style={[styles.skillsRequired, styles.titleTypo]}>
        Skills Required
      </Text>
      <Image
        style={styles.inshasamnani6Icon}
        resizeMode="cover"
        source={require("../assets/inshasamnani-6.png")}
      />
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={styles.post}>POST</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 40,
    width: 360,
    position: "absolute",
  },
  groupPosition: {
    backgroundColor: Color.colorSlateblue,
    left: 0,
    top: 0,
  },
  rectangleIconLayout: {
    height: 30,
    borderRadius: Border.br_sm,
    width: 341,
    left: 8,
    position: "absolute",
  },
  createLayout: {
    left: 9,
    height: 30,
    width: 341,
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  titleTypo: {
    width: 125,
    fontWeight: "300",
    left: 15,
    fontSize: FontSize.size_smi,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.calibri,
    textAlign: "left",
    position: "absolute",
  },
  groupLayout: {
    height: 23,
    width: 341,
    position: "absolute",
  },
  groupChild: {
    height: 40,
    width: 360,
    position: "absolute",
  },
  createTopicRequest1: {
    top: 5,
    left: 75,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.javaneseText,
    color: Color.colorWhite,
    width: 208,
    height: 31,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent: {
    left: 0,
    top: 0,
    width: 360,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  icons8Arrow241: {
    top: 8,
    width: 26,
    height: 24,
    left: 8,
    position: "absolute",
  },
  inshaSamnani: {
    top: 57,
    left: 51,
    fontSize: FontSize.size_mini,
    width: 108,
    height: 17,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.calibri,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  createTopicRequestChild: {
    top: 93,
  },
  createTopicRequestItem: {
    top: 266,
  },
  createTopicRequestInner: {
    top: 305,
  },
  rectangleIcon: {
    top: 344,
  },
  icons8DropDown301: {
    left: 322,
    top: 354,
    width: 12,
    height: 13,
    position: "absolute",
  },
  createTopicRequestChild1: {
    top: 132,
    borderRadius: Border.br_3xs,
    height: 125,
    width: 341,
    left: 8,
    position: "absolute",
  },
  title: {
    top: 101,
  },
  description: {
    top: 142,
  },
  estimatedHours: {
    top: 274,
  },
  ratePerHour: {
    top: 313,
  },
  skillsRequired: {
    top: 352,
  },
  inshasamnani6Icon: {
    top: 47,
    borderRadius: Border.br_127xl,
    width: 37,
    height: 37,
    left: 8,
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorSlateblue,
    left: 0,
    top: 0,
  },
  post: {
    top: 6,
    left: 154,
    color: Color.colorGainsboro_100,
    width: 35,
    fontSize: FontSize.size_smi,
    height: 17,
    fontFamily: FontFamily.calibri,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  rectangleGroup: {
    top: 389,
    left: 8,
  },
  createTopicRequest: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default CreateTopicRequest;
