import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SchoolSection from "../components/SchoolSection";
import StartDateSection from "../components/StartDateSection";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AddEducation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.addEducation}>
      <View style={[styles.addEducationInner, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
      </View>
      <Pressable
        style={styles.icons8Cross501}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icons8cross50-1.png")}
        />
      </Pressable>
      <Text style={[styles.addEducation1, styles.saveTypo]}>Add Education</Text>
      <SchoolSection
        institutionName="Ex: Aga Khan University"
        schoolName="School"
      />
      <SchoolSection
        institutionName="Ex: 30 June 2024"
        schoolName="End Date"
        propTop={322}
      />
      <SchoolSection
        institutionName="Ex: A+"
        schoolName="Grade"
        propTop={400}
      />
      <StartDateSection
        dateLabel="Ex: 30 Sept 2020"
        startDateLabel="Start Date"
      />
      <StartDateSection
        dateLabel="Ex: BS, Computer Science"
        startDateLabel="Degree"
        propTop={166}
      />
      <View style={[styles.rectangleParent, styles.groupItemLayout]}>
        <View style={[styles.groupItem, styles.groupItemLayout]} />
        <Text style={[styles.save, styles.saveTypo]}>Save</Text>
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
  saveTypo: {
    fontFamily: FontFamily.calibri,
    fontWeight: "700",
    position: "absolute",
  },
  groupItemLayout: {
    height: 24,
    width: 319,
    position: "absolute",
  },
  groupChild: {
    height: 40,
    width: 360,
    position: "absolute",
  },
  addEducationInner: {
    left: 0,
    top: 0,
    width: 360,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  icons8Cross501: {
    top: 7,
    width: 26,
    height: 26,
    left: 8,
    position: "absolute",
  },
  addEducation1: {
    top: 55,
    fontSize: FontSize.size_xl,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    left: 8,
  },
  groupItem: {
    borderRadius: Border.br_123xl,
    backgroundColor: Color.colorSlateblue,
    left: 0,
    top: 0,
  },
  save: {
    top: 3,
    left: 61,
    fontSize: FontSize.size_mini,
    color: Color.colorGainsboro_100,
    textAlign: "center",
    width: 204,
    height: 18,
  },
  rectangleParent: {
    top: 484,
    left: 17,
  },
  addEducation: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default AddEducation;
