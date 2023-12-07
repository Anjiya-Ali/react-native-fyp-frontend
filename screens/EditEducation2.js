import * as React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SchoolSection from "../components/SchoolSection";
import StartDateSection from "../components/StartDateSection";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const EditEducation2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.editEducation2}>
      <View style={[styles.editEducation2Inner, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
      </View>
      <TouchableOpacity
        style={styles.icons8Cross501}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icons8cross50-1.png")}
        />
      </TouchableOpacity>
      <Text style={[styles.editEducation, styles.saveTypo]}>
        Edit Education
      </Text>
      <SchoolSection
        institutionName="National University of Computer and Emerging Sciences"
        schoolName="School"
        propTop={88}
      />
      <SchoolSection
        institutionName="2024"
        schoolName="End Date"
        propTop={322}
      />
      <SchoolSection
        institutionName="CGPA: 3.9"
        schoolName="Grade"
        propTop={400}
      />
      <StartDateSection
        dateLabel="2020"
        startDateLabel="Start Date"
        propTop={244}
      />
      <StartDateSection
        dateLabel="Bachelor’s Degree, Computer Science"
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
  editEducation2Inner: {
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
  editEducation: {
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
  editEducation2: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default EditEducation2;
