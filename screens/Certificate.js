import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SuccessCompletionForm from "../components/SuccessCompletionForm";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Certificate = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.certificate}>
      <View style={[styles.header, styles.headerLayout]}>
        <View style={[styles.headerChild, styles.childPosition]} />
        <Text style={[styles.quiz, styles.quizClr]}>
          Claim Your Certificate!
        </Text>
        <TouchableOpacity
          style={styles.icons8Cross501}
          onPress={() => navigation.navigate("MyCourses")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icons8cross50-1.png")}
          />
        </TouchableOpacity>
      </View>
      <SuccessCompletionForm />
      <View style={[styles.next, styles.nextLayout]}>
        <View style={[styles.nextChild, styles.nextLayout]} />
        <Text style={[styles.downloadCerificate, styles.quizClr]}>
          Download Cerificate
        </Text>
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
  quizClr: {
    color: Color.colorWhite,
    position: "absolute",
  },
  nextLayout: {
    height: 28,
    width: 223,
    position: "absolute",
  },
  headerChild: {
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    height: 81,
    width: 360,
    position: "absolute",
  },
  quiz: {
    top: 28,
    left: 31,
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    textAlign: "center",
    width: 292,
    height: 114,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  icons8Cross501: {
    left: 18,
    top: 29,
    width: 26,
    height: 26,
    position: "absolute",
  },
  header: {
    height: 142,
    left: 0,
    top: 0,
    width: 360,
  },
  nextChild: {
    backgroundColor: Color.colorSlateblue,
    left: 0,
    top: 0,
  },
  downloadCerificate: {
    top: 3,
    left: 33,
    fontSize: FontSize.bodyBold_size,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "left",
  },
  next: {
    top: 560,
    left: 68,
  },
  certificate: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 651,
    overflow: "hidden",
    width: "100%",
  },
});

export default Certificate;
