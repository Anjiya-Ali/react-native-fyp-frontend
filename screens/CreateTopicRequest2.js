import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const CreateTopicRequest2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.createTopicRequest2}>
      <View style={styles.groupChildPosition}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={styles.createTopicRequest}>CREATE TOPIC REQUEST</Text>
      </View>
      <Pressable
        style={styles.icons8Arrow241}
        onPress={() => navigation.navigate("MyPostPage")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icons8arrow24-1.png")}
        />
      </Pressable>
      <Text style={styles.inshaSamnani}>Insha Samnani</Text>
      <Image
        style={[styles.createTopicRequest2Child, styles.createLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-47801.png")}
      />
      <Image
        style={[styles.createTopicRequest2Item, styles.createLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-47801.png")}
      />
      <Image
        style={[styles.createTopicRequest2Inner, styles.createLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-47801.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.createLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-47801.png")}
      />
      <Pressable
        style={styles.icons8DropDown301}
        onPress={() => navigation.navigate("CreateTopicRequest")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icons8dropdown30-1.png")}
        />
      </Pressable>
      <Image
        style={[styles.createTopicRequest2Child1, styles.createChildLayout]}
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
      <View style={[styles.rectangleGroup, styles.groupLayout1]}>
        <View style={[styles.groupItem, styles.groupPosition]} />
        <Text style={styles.post}>POST</Text>
      </View>
      <View style={[styles.rectangleView, styles.createChildLayout]} />
      <View style={[styles.vectorParent, styles.groupLayout]}>
        <Image
          style={[styles.groupInner, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-4787.png")}
        />
        <View style={[styles.vectorGroup, styles.groupLayout]}>
          <Image
            style={[styles.groupInner, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-4787.png")}
          />
          <Text style={[styles.projectManager, styles.dataScientistPosition]}>
            Project Manager
          </Text>
        </View>
        <Text style={[styles.dataScientist, styles.dataScientistPosition]}>
          Data Scientist
        </Text>
      </View>
      <View style={[styles.vectorContainer, styles.groupViewPosition]}>
        <Image
          style={[styles.groupInner, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-4787.png")}
        />
        <Text style={[styles.dataScientist, styles.dataScientistPosition]}>
          Web Developer
        </Text>
      </View>
      <View style={[styles.groupView, styles.groupViewPosition]}>
        <Image
          style={[styles.groupInner, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-4787.png")}
        />
        <Text style={[styles.dataScientist, styles.dataScientistPosition]}>
          Problem Solver
        </Text>
      </View>
      <View
        style={[styles.createTopicRequest2Child2, styles.createChildLayout]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 40,
    width: 360,
    top: 0,
    left: 0,
    position: "absolute",
  },
  createLayout: {
    height: 30,
    borderRadius: Border.br_sm,
    width: 341,
    position: "absolute",
  },
  createChildLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  titleTypo: {
    width: 125,
    fontWeight: "300",
    fontSize: FontSize.size_smi,
    left: 15,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.calibri,
    textAlign: "left",
    position: "absolute",
  },
  groupLayout1: {
    height: 23,
    width: 341,
    position: "absolute",
  },
  groupPosition: {
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
  },
  groupLayout: {
    width: 257,
    position: "absolute",
  },
  dataScientistPosition: {
    height: 12,
    left: 6,
    top: 6,
    fontSize: FontSize.size_smi,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.calibri,
    textAlign: "left",
    position: "absolute",
  },
  groupViewPosition: {
    left: 44,
    width: 257,
    height: 24,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorSlateblue,
  },
  createTopicRequest: {
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
  createTopicRequest2Child: {
    top: 93,
    left: 8,
  },
  createTopicRequest2Item: {
    top: 266,
    left: 9,
  },
  createTopicRequest2Inner: {
    top: 305,
    left: 9,
  },
  rectangleIcon: {
    top: 344,
    left: 8,
  },
  icons8DropDown301: {
    left: 322,
    top: 354,
    width: 13,
    height: 13,
    position: "absolute",
  },
  createTopicRequest2Child1: {
    top: 132,
    height: 125,
    width: 341,
    borderRadius: Border.br_3xs,
    left: 8,
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
    height: 23,
    width: 341,
    position: "absolute",
    backgroundColor: Color.colorSlateblue,
  },
  post: {
    left: 154,
    color: Color.colorGainsboro_100,
    width: 35,
    top: 6,
    fontSize: FontSize.size_smi,
    height: 17,
    fontFamily: FontFamily.calibri,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  rectangleGroup: {
    top: 532,
    left: 9,
  },
  rectangleView: {
    top: 367,
    left: 30,
    backgroundColor: Color.colorGainsboro_100,
    width: 300,
    height: 151,
  },
  groupInner: {
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
    height: 24,
  },
  projectManager: {
    width: 112,
  },
  vectorGroup: {
    top: 33,
    height: 24,
    left: 0,
    width: 257,
  },
  dataScientist: {
    width: 82,
  },
  vectorParent: {
    top: 455,
    left: 45,
    height: 57,
  },
  vectorContainer: {
    top: 388,
  },
  groupView: {
    top: 422,
  },
  createTopicRequest2Child2: {
    top: 374,
    left: 326,
    backgroundColor: Color.labelColorLightPrimary,
    width: 4,
    height: 144,
  },
  createTopicRequest2: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default CreateTopicRequest2;
