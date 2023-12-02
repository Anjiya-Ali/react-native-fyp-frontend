import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SectionFilter from "../components/SectionFilter";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const EditEducation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.editEducation}>
      <View style={styles.groupChildPosition}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
      </View>
      <Pressable
        style={[styles.icons8Cross501, styles.educationPosition]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icons8cross50-1.png")}
        />
      </Pressable>
      <Text style={[styles.education, styles.educationPosition]}>
        Education
      </Text>
      <SectionFilter />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 40,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  educationPosition: {
    left: 8,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorSlateblue,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  icons8Cross501: {
    top: 7,
    width: 26,
    height: 26,
  },
  education: {
    top: 55,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.calibri,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
  },
  editEducation: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default EditEducation;
