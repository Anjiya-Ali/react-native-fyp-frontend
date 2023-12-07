import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const Proposal7 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.proposal7}>
      <View style={[styles.proposal7Child, styles.proposal7ShadowBox]} />
      <View style={[styles.proposal7Item, styles.proposal7ShadowBox]} />
      <View style={[styles.proposal7Inner, styles.proposal7ShadowBox]} />
      <Text style={[styles.javaTutoringProposal, styles.all3Typo]}>
        Java Tutoring Proposal
      </Text>
      <Text style={[styles.probabilisticModelIn, styles.conceptOfCcPosition]}>
        Probabilistic Model in Advance
      </Text>
      <Text style={[styles.conceptOfCc, styles.conceptOfCcPosition]}>
        Concept of C/C++ pointers
      </Text>
      <Text style={[styles.all3, styles.all3Typo]}>All (3)</Text>
      <View style={[styles.rectangleView, styles.rectangleViewBg]} />
      <Text style={[styles.proposals, styles.all3Typo]}>Proposals</Text>
      <View style={[styles.proposal7Child1, styles.proposal7ChildLayout3]} />
      <Text style={[styles.active, styles.activeTypo]}>Active</Text>
      <View style={[styles.proposal7Child2, styles.proposal7ChildLayout2]} />
      <Text style={[styles.requested, styles.closedTypo]}>Requested</Text>
      <View style={[styles.proposal7Child3, styles.proposal7ChildLayout2]} />
      <Text style={[styles.closed, styles.closedTypo]}>Closed</Text>
      <View style={[styles.proposal7Child4, styles.proposal7ChildLayout]} />
      <Text style={[styles.viewProposal, styles.viewTypo]}>View Proposal</Text>
      <TouchableOpacity
        style={[styles.rectangleTouchableOpacity, styles.proposal7ChildLayout]}
        onPress={() => navigation.navigate("TeacherProfile4")}
      />
      <Text style={[styles.endContract, styles.activeTypo]}>End Contract</Text>
      <View style={[styles.proposal7Child5, styles.proposal7ChildLayout]} />
      <Text style={[styles.viewProposal1, styles.viewTypo]}>View Proposal</Text>
      <View style={[styles.proposal7Child6, styles.proposal7ChildLayout]} />
      <Text style={[styles.viewProposal2, styles.viewTypo]}>View Proposal</Text>
      <Text style={[styles.rafiHasBidContainer, styles.all3Typo]}>
        <Text style={styles.rafiHasBid}>{`Rafi has bid `}</Text>
        <Text style={styles.text}>3</Text>
        <Text style={styles.rafiHasBid}> proposals</Text>
      </Text>
      <View style={[styles.proposal7Child7, styles.rectangleViewBg]} />
      <Text style={[styles.active1, styles.allTypo]}>Active</Text>
      <Text style={[styles.all, styles.allTypo]}>All</Text>
      <Text style={[styles.requested1, styles.allTypo]}>Requested</Text>
      <Text style={[styles.closed1, styles.allTypo]}>Closed</Text>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-15.png")}
      />
      <Image
        style={styles.lineIcon}
        resizeMode="cover"
        source={require("../assets/line-12.png")}
      />
      <TouchableOpacity
        style={styles.icons8Arrow241}
        onPress={() => navigation.navigate("HomePage1")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icons8arrow24-12.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  proposal7ShadowBox: {
    height: 62,
    borderRadius: Border.br_8xs,
    width: 360,
    left: 0,
    position: "absolute",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  all3Typo: {
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  conceptOfCcPosition: {
    left: 21,
    textAlign: "left",
    color: Color.colorSlateblue,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  rectangleViewBg: {
    backgroundColor: Color.colorSlateblue,
    position: "absolute",
  },
  proposal7ChildLayout3: {
    width: 44,
    left: 313,
  },
  activeTypo: {
    fontSize: FontSize.size_3xs,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  proposal7ChildLayout2: {
    height: 19,
    borderRadius: Border.br_10xs,
    position: "absolute",
  },
  closedTypo: {
    height: 13,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  proposal7ChildLayout: {
    height: 25,
    width: 93,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorSlateblue,
    position: "absolute",
  },
  viewTypo: {
    left: 34,
    color: Color.colorWhite,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  allTypo: {
    fontSize: FontSize.bodyBold_size,
    color: Color.colorGainsboro_100,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  proposal7Child: {
    top: 295,
    backgroundColor: Color.colorGainsboro_200,
    height: 62,
    borderRadius: Border.br_8xs,
  },
  proposal7Item: {
    top: 220,
    backgroundColor: Color.colorGainsboro_200,
    height: 62,
    borderRadius: Border.br_8xs,
  },
  proposal7Inner: {
    top: 145,
    backgroundColor: Color.colorGainsboro_100,
    height: 62,
    borderRadius: Border.br_8xs,
  },
  javaTutoringProposal: {
    top: 158,
    left: 23,
    color: Color.colorSlateblue,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  probabilisticModelIn: {
    top: 231,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    left: 21,
  },
  conceptOfCc: {
    top: 305,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  all3: {
    top: 97,
    left: 18,
    fontSize: FontSize.size_6xl,
    color: Color.colorSlateblue,
    textAlign: "left",
  },
  rectangleView: {
    top: -598,
    left: -2,
    borderRadius: Border.br_21xl,
    width: 370,
    height: 674,
  },
  proposals: {
    top: 12,
    left: 60,
    fontSize: FontSize.size_11xl,
    color: Color.colorGainsboro_100,
  },
  proposal7Child1: {
    top: 140,
    backgroundColor: "#32fa00",
    height: 18,
    borderRadius: Border.br_10xs,
    width: 44,
    left: 313,
    position: "absolute",
  },
  active: {
    top: 142,
    left: 321,
    color: Color.colorWhite,
  },
  proposal7Child2: {
    top: 215,
    left: 289,
    backgroundColor: Color.colorGold,
    width: 68,
  },
  requested: {
    top: 217,
    left: 298,
    width: 62,
    color: Color.colorWhite,
  },
  proposal7Child3: {
    top: 290,
    backgroundColor: Color.colorBrown,
    width: 44,
    left: 313,
    height: 19,
  },
  closed: {
    top: 293,
    left: 318,
    width: 38,
    color: Color.colorGainsboro_100,
  },
  proposal7Child4: {
    left: 24,
    width: 93,
    borderRadius: Border.br_3xs,
    top: 179,
  },
  viewProposal: {
    top: 185,
  },
  rectangleTouchableOpacity: {
    left: 249,
    top: 179,
  },
  endContract: {
    left: 264,
    top: 185,
    color: Color.colorWhite,
  },
  proposal7Child5: {
    top: 252,
    left: 24,
    width: 93,
    borderRadius: Border.br_3xs,
  },
  viewProposal1: {
    top: 258,
  },
  proposal7Child6: {
    top: 327,
    left: 24,
    width: 93,
    borderRadius: Border.br_3xs,
  },
  viewProposal2: {
    top: 333,
  },
  rafiHasBid: {
    fontSize: FontSize.size_sm,
  },
  text: {
    fontSize: FontSize.size_xl,
  },
  rafiHasBidContainer: {
    top: 45,
    left: 61,
    color: Color.colorGainsboro_100,
  },
  proposal7Child7: {
    top: 590,
    borderTopLeftRadius: Border.br_21xl,
    borderTopRightRadius: Border.br_21xl,
    height: 50,
    width: 360,
    left: 0,
    backgroundColor: Color.colorSlateblue,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  active1: {
    left: 85,
    top: 601,
    fontSize: FontSize.bodyBold_size,
  },
  all: {
    left: 40,
    top: 601,
    fontSize: FontSize.bodyBold_size,
  },
  requested1: {
    left: 159,
    top: 601,
    fontSize: FontSize.bodyBold_size,
  },
  closed1: {
    top: 602,
    left: 267,
  },
  ellipseIcon: {
    top: 625,
    left: 43,
    width: 20,
    height: 15,
    position: "absolute",
  },
  lineIcon: {
    top: 639,
    left: 27,
    width: 311,
    height: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  icons8Arrow241: {
    left: 16,
    top: 20,
    width: 31,
    height: 29,
    position: "absolute",
  },
  proposal7: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
});

export default Proposal7;
