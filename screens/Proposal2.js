import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const Proposal2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.proposal2}>
      <View style={[styles.proposal2Child, styles.proposal2ShadowBox]} />
      <View style={[styles.proposal2Item, styles.proposal2ShadowBox]} />
      <View style={[styles.proposal2Inner, styles.proposal2ShadowBox]} />
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
      <View style={[styles.proposal2Child1, styles.proposal2ChildLayout1]} />
      <Text style={[styles.requested, styles.requestedTypo]}>Requested</Text>
      <View style={[styles.proposal2Child2, styles.proposal2ChildLayout1]} />
      <Text style={[styles.requested1, styles.requestedTypo]}>Requested</Text>
      <View style={[styles.proposal2Child3, styles.proposal2ChildLayout1]} />
      <Text style={[styles.closed, styles.requestedTypo]}>Closed</Text>
      <View style={[styles.proposal2Child4, styles.proposal2ChildLayout]} />
      <TouchableOpacity
        style={[styles.viewProposal, styles.viewPosition]}
        onPress={() => navigation.navigate("Proposal3")}
      >
        <Text style={styles.viewTypo}>View Proposal</Text>
      </TouchableOpacity>
      <View style={[styles.proposal2Child5, styles.proposal2ChildLayout]} />
      <Text style={[styles.viewProposal2, styles.viewPosition]}>
        View Proposal
      </Text>
      <View style={[styles.proposal2Child6, styles.proposal2ChildLayout]} />
      <Text style={[styles.viewProposal3, styles.viewPosition]}>
        View Proposal
      </Text>
      <View style={[styles.proposal2Child7, styles.rectangleViewBg]} />
      <Text style={[styles.active, styles.allTypo]}>Active</Text>
      <Text style={[styles.all, styles.allTypo]}>All</Text>
      <Text style={[styles.requested2, styles.allTypo]}>Requested</Text>
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
        onPress={() => navigation.goBack()}
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
  proposal2ShadowBox: {
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
  proposal2ChildLayout1: {
    height: 19,
    borderRadius: Border.br_10xs,
    position: "absolute",
  },
  requestedTypo: {
    height: 13,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  proposal2ChildLayout: {
    height: 25,
    width: 93,
    borderRadius: Border.br_3xs,
    left: 24,
    backgroundColor: Color.colorSlateblue,
    position: "absolute",
  },
  viewPosition: {
    left: 34,
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
  proposal2Child: {
    top: 295,
    backgroundColor: Color.colorGainsboro_200,
    height: 62,
    borderRadius: Border.br_8xs,
  },
  proposal2Item: {
    top: 220,
    backgroundColor: Color.colorGainsboro_200,
    height: 62,
    borderRadius: Border.br_8xs,
  },
  proposal2Inner: {
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
    top: 24,
    left: 105,
    fontSize: FontSize.size_11xl,
    color: Color.colorGainsboro_100,
  },
  proposal2Child1: {
    top: 215,
    width: 68,
    backgroundColor: Color.colorGold,
    left: 289,
    height: 19,
    borderRadius: Border.br_10xs,
  },
  requested: {
    top: 217,
    width: 62,
    left: 298,
    height: 13,
    color: Color.colorWhite,
  },
  proposal2Child2: {
    top: 136,
    width: 68,
    backgroundColor: Color.colorGold,
    left: 289,
    height: 19,
    borderRadius: Border.br_10xs,
  },
  requested1: {
    top: 138,
    width: 62,
    left: 298,
    height: 13,
    color: Color.colorWhite,
  },
  proposal2Child3: {
    top: 290,
    left: 313,
    backgroundColor: Color.colorBrown,
    width: 44,
    height: 19,
    borderRadius: Border.br_10xs,
  },
  closed: {
    top: 293,
    left: 318,
    width: 38,
    color: Color.colorGainsboro_100,
  },
  proposal2Child4: {
    top: 179,
  },
  viewTypo: {
    color: Color.colorWhite,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  viewProposal: {
    top: 185,
  },
  proposal2Child5: {
    top: 252,
  },
  viewProposal2: {
    top: 258,
    color: Color.colorWhite,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  proposal2Child6: {
    top: 327,
  },
  viewProposal3: {
    top: 333,
    color: Color.colorWhite,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  proposal2Child7: {
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
  active: {
    left: 85,
    top: 601,
    fontSize: FontSize.bodyBold_size,
  },
  all: {
    left: 40,
    top: 601,
    fontSize: FontSize.bodyBold_size,
  },
  requested2: {
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
    top: 27,
    width: 31,
    height: 29,
    position: "absolute",
  },
  proposal2: {
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

export default Proposal2;
