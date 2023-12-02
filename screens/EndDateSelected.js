import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MonthContainer from "../components/MonthContainer";
import MonthContainer1 from "../components/MonthContainer1";
import ContainerFrame from "../components/ContainerFrame";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const EndDateSelected = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.endDateSelected}>
      <View style={styles.frameParent}>
        <View style={styles.monthWrapper}>
          <MonthContainer />
        </View>
        <MonthContainer1 />
        <View style={styles.month}>
          <Text style={styles.monthYyyy}>November 2022</Text>
          <View style={[styles.week, styles.weekSpaceBlock]}>
            <View style={[styles.day, styles.dayFlexBox]}>
              <Text style={[styles.day1, styles.dayTypo]}>1</Text>
            </View>
            <View style={[styles.day, styles.dayFlexBox]}>
              <Text style={[styles.day1, styles.dayTypo]}>2</Text>
            </View>
            <View style={[styles.day, styles.dayFlexBox]}>
              <Text style={[styles.day1, styles.dayTypo]}>3</Text>
            </View>
            <View style={[styles.day, styles.dayFlexBox]}>
              <Text style={[styles.day1, styles.dayTypo]}>4</Text>
            </View>
            <View style={[styles.day, styles.dayFlexBox]}>
              <Text style={[styles.day9, styles.dayTypo]}>5</Text>
            </View>
          </View>
          <View style={styles.weekSpaceBlock}>
            <View style={[styles.day, styles.dayFlexBox]}>
              <Text style={[styles.day9, styles.dayTypo]}>6</Text>
            </View>
            <View style={[styles.day, styles.dayFlexBox]}>
              <Text style={[styles.day1, styles.dayTypo]}>7</Text>
            </View>
            <View style={[styles.day, styles.dayFlexBox]}>
              <Text style={[styles.day1, styles.dayTypo]}>8</Text>
            </View>
            <View style={[styles.day, styles.dayFlexBox]}>
              <Text style={[styles.day1, styles.dayTypo]}>9</Text>
            </View>
            <View style={[styles.day, styles.dayFlexBox]}>
              <Text style={[styles.day1, styles.dayTypo]}>10</Text>
            </View>
            <View style={[styles.day, styles.dayFlexBox]}>
              <Text style={[styles.day1, styles.dayTypo]}>11</Text>
            </View>
            <View style={[styles.day, styles.dayFlexBox]}>
              <Text style={[styles.day9, styles.dayTypo]}>12</Text>
            </View>
          </View>
          <View style={styles.weekSpaceBlock}>
            <View style={[styles.day, styles.dayFlexBox]}>
              <Text style={[styles.day9, styles.dayTypo]}>13</Text>
            </View>
            <View style={[styles.day, styles.dayFlexBox]}>
              <Text style={[styles.day1, styles.dayTypo]}>14</Text>
            </View>
            <View style={[styles.day, styles.dayFlexBox]}>
              <Text style={[styles.day1, styles.dayTypo]}>15</Text>
            </View>
            <View style={[styles.day, styles.dayFlexBox]}>
              <Text style={[styles.day31, styles.dayTypo]}>16</Text>
            </View>
            <View style={[styles.day, styles.dayFlexBox]}>
              <Text style={[styles.day31, styles.dayTypo]}>17</Text>
            </View>
            <View style={[styles.day, styles.dayFlexBox]}>
              <Text style={[styles.day31, styles.dayTypo]}>18</Text>
            </View>
            <View style={[styles.day, styles.dayFlexBox]}>
              <Text style={[styles.day37, styles.dayTypo]}>19</Text>
            </View>
          </View>
          <View style={styles.weekSpaceBlock}>
            <View style={[styles.day, styles.dayFlexBox]}>
              <Text style={[styles.day37, styles.dayTypo]}>20</Text>
            </View>
            <View style={[styles.day, styles.dayFlexBox]}>
              <Text style={[styles.day31, styles.dayTypo]}>21</Text>
            </View>
            <View style={[styles.day, styles.dayFlexBox]}>
              <Text style={[styles.day31, styles.dayTypo]}>22</Text>
            </View>
            <View style={[styles.day, styles.dayFlexBox]}>
              <Text style={[styles.day31, styles.dayTypo]}>23</Text>
            </View>
            <View style={[styles.day, styles.dayFlexBox]}>
              <Text style={[styles.day31, styles.dayTypo]}>24</Text>
            </View>
            <View style={[styles.day, styles.dayFlexBox]}>
              <Text style={[styles.day31, styles.dayTypo]}>25</Text>
            </View>
            <View style={[styles.day, styles.dayFlexBox]}>
              <Text style={[styles.day37, styles.dayTypo]}>26</Text>
            </View>
          </View>
          <View style={styles.weekSpaceBlock}>
            <View style={[styles.day, styles.dayFlexBox]}>
              <Text style={[styles.day37, styles.dayTypo]}>27</Text>
            </View>
            <View style={[styles.day, styles.dayFlexBox]}>
              <Text style={[styles.day31, styles.dayTypo]}>28</Text>
            </View>
            <View style={[styles.day, styles.dayFlexBox]}>
              <Text style={[styles.day31, styles.dayTypo]}>29</Text>
            </View>
            <View style={[styles.day, styles.dayFlexBox]}>
              <Text style={[styles.day31, styles.dayTypo]}>30</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.statusbar, styles.dimmerPosition]}>
        <Image
          style={[styles.notchIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.leftSide, styles.leftSideLayout]}>
          <View style={[styles.statusbarTime, styles.leftSideLayout]}>
            <Text style={styles.time}>9:41</Text>
          </View>
        </View>
        <Image
          style={[styles.rightSideIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/right-side.png")}
        />
      </View>
      <View style={[styles.dimmer, styles.dimmerPosition]}>
        <View style={styles.dimmer1} />
      </View>
      <ContainerFrame
        onFramePress={() => navigation.navigate("UpcomingSesions")}
      />
      <Pressable
        style={[styles.button, styles.iconPosition]}
        onPress={() => navigation.navigate("UpcomingSesions")}
      >
        <Text style={[styles.day60, styles.dayTypo]}>Save</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  weekSpaceBlock: {
    marginTop: 8,
    flexDirection: "row",
  },
  dayFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  dayTypo: {
    textAlign: "center",
    fontFamily: FontFamily.sFProDisplay,
    lineHeight: 22,
  },
  dimmerPosition: {
    width: 390,
    top: 0,
    left: 0,
    position: "absolute",
  },
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  leftSideLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  monthWrapper: {
    alignItems: "center",
    width: 390,
  },
  monthYyyy: {
    textAlign: "left",
    color: Color.gray900,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "600",
    lineHeight: 22,
    fontSize: FontSize.bodyBold_size,
  },
  day1: {
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.gray900,
  },
  day: {
    width: 52,
    height: 40,
    backgroundColor: Color.colorWhite,
  },
  day9: {
    color: Color.red500,
    fontSize: FontSize.size_mini,
    textAlign: "center",
  },
  week: {
    alignSelf: "stretch",
    justifyContent: "flex-end",
  },
  day31: {
    color: Color.gray500,
    fontSize: FontSize.size_mini,
    textAlign: "center",
  },
  day37: {
    color: Color.red200,
    fontSize: FontSize.size_mini,
    textAlign: "center",
  },
  month: {
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_base,
    backgroundColor: Color.colorWhite,
  },
  frameParent: {
    top: 167,
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_77xl,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  notchIcon: {
    marginLeft: -86,
    width: 172,
    height: 32,
    top: 0,
  },
  time: {
    top: 1,
    letterSpacing: 0,
    fontFamily: FontFamily.bodyBold,
    color: Color.labelColorLightPrimary,
    height: 20,
    width: 54,
    textAlign: "center",
    fontWeight: "600",
    lineHeight: 22,
    fontSize: FontSize.bodyBold_size,
    left: 0,
    position: "absolute",
  },
  statusbarTime: {
    marginLeft: -27,
    borderRadius: Border.br_5xl,
    top: 0,
  },
  leftSide: {
    marginLeft: -168,
    top: 14,
  },
  rightSideIcon: {
    marginLeft: 91,
    top: 19,
    width: 77,
    height: 13,
  },
  statusbar: {
    height: 63,
    overflow: "hidden",
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  dimmer1: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorGray_100,
    position: "absolute",
    width: "100%",
  },
  dimmer: {
    height: 121,
    top: 0,
  },
  day60: {
    color: Color.colorWhite,
    textAlign: "center",
    fontSize: FontSize.bodyBold_size,
  },
  button: {
    marginLeft: -176.5,
    bottom: 31,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorSlateblue,
    width: 360,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
  },
  endDateSelected: {
    flex: 1,
    height: 640,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default EndDateSelected;
