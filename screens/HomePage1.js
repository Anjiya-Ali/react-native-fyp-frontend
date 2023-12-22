import * as React from "react";
import { Text, StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProjectManagementContainer from "../components/ProjectManagementContainer";
import SearchForm from "../components/SearchForm";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const HomePage1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homePage1}>   
      <ProjectManagementContainer />
      <View style={[styles.liveHeading1, styles.livePosition]}>
        <Text style={styles.liveSessionsTypo}>LIVE SESSIONS</Text>
      </View>
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <TouchableOpacity
          style={styles.hamburger}
          onPress={() => navigation.navigate("HomePage2")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/hamburger1.png")}
          />
        </TouchableOpacity>
        <SearchForm />
      </View>
      <Image
        style={styles.image11Icon}
        resizeMode="cover"
        source={require("../assets/image-111.png")}
      />
      <Image
        style={styles.mine22Icon}
        resizeMode="cover"
        source={require("../assets/mine2-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  livePosition: {
    height: 24,
    left: 14,
    position: "absolute",
  },
  headerPosition: {
    height: 81,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  liveSessionsTypo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_xl,
    left: 0,
    top: 0,
    position: "absolute",
  },
  viewAll1: {
    fontSize: FontSize.size_mini,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorSlateblue,
    textAlign: "left",
  },
  viewAll: {
    left: 287,
    top: 3,
    position: "absolute",
  },
  liveHeading: {
    top: 612,
    width: 345,
  },
  liveHeading1: {
    top: 119,
    width: 151,
  },
  viewAll2: {
    left: 282,
    top: 1,
    position: "absolute",
  },
  liveHeading2: {
    top: 360,
    width: 340,
  },
  headerChild: {
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    backgroundColor: Color.colorSlateblue,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  hamburger: {
    left: 320,
    top: 33,
    width: 25,
    height: 16,
    position: "absolute",
  },
  image11Icon: {
    top: 160,
    left: 15,
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    width: 102,
    height: 116,
    position: "absolute",
  },
  mine22Icon: {
    top: 19,
    borderRadius: Border.br_31xl,
    width: 43,
    height: 46,
    left: 14,
    position: "absolute",
  },
  homePage1: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 818,
    width: "100%",
  },
});

export default HomePage1;
