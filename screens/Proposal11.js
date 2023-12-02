import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Proposal11 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.proposal11}>
      <View style={[styles.proposal11Child, styles.proposal11ShadowBox]} />
      <View style={[styles.proposal11Item, styles.proposal11ShadowBox]} />
      <View style={[styles.proposal11Inner, styles.proposal11ShadowBox]} />
      <Text style={[styles.javaTutoringProposal, styles.conceptOfCcTypo]}>
        Java Tutoring Proposal
      </Text>
      <Text style={[styles.probabilisticModelIn, styles.all3Typo]}>
        Probabilistic Model in Advance
      </Text>
      <Text style={[styles.conceptOfCc, styles.conceptOfCcTypo]}>
        Concept of C/C++ pointers
      </Text>
      <Text style={[styles.all3, styles.all3Typo]}>All (3)</Text>
      <View style={[styles.rectangleView, styles.rectangleViewBg]} />
      <Text style={[styles.proposals, styles.proposalsTypo]}>Proposals</Text>
      <View style={styles.proposal11Child1} />
      <Text style={styles.requested}>Requested</Text>
      <View style={[styles.proposal11Child2, styles.proposal11ChildLayout1]} />
      <Text style={[styles.closed, styles.closedTypo]}>Closed</Text>
      <View style={[styles.proposal11Child3, styles.proposal11ChildLayout1]} />
      <Text style={[styles.closed1, styles.closedTypo]}>Closed</Text>
      <View style={styles.proposal11Child4} />
      <Text style={styles.viewProposal}>View Proposal</Text>
      <View style={[styles.proposal11Child5, styles.proposal11ChildLayout]} />
      <Text style={[styles.viewProposal1, styles.viewTypo]}>View Proposal</Text>
      <View style={[styles.proposal11Child6, styles.proposal11ChildLayout]} />
      <Text style={[styles.viewProposal2, styles.viewTypo]}>View Proposal</Text>
      <Text style={[styles.rafiHasBidContainer, styles.proposalsTypo]}>
        <Text style={styles.rafiHasBid}>{`Rafi has bid `}</Text>
        <Text style={styles.text}>3</Text>
        <Text style={styles.rafiHasBid}> proposals</Text>
      </Text>
      <View style={[styles.proposal11Child7, styles.rectangleViewBg]} />
      <Text style={[styles.active, styles.allTypo]}>Active</Text>
      <Text style={[styles.all, styles.allTypo]}>All</Text>
      <Text style={[styles.requested1, styles.allTypo]}>Requested</Text>
      <Text style={[styles.closed2, styles.allTypo]}>Closed</Text>
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
      <Pressable
        style={styles.icons8Arrow241}
        onPress={() => navigation.navigate("Proposal1")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icons8arrow24-12.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  proposal11ShadowBox: {
    height: 62,
    borderRadius: Border.br_8xs,
    width: 360,
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
  conceptOfCcTypo: {
    textAlign: "left",
    color: Color.colorSlateblue,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    left: 21,
    position: "absolute",
  },
  all3Typo: {
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    textAlign: "left",
    color: Color.colorSlateblue,
    position: "absolute",
  },
  rectangleViewBg: {
    backgroundColor: Color.colorSlateblue,
    position: "absolute",
  },
  proposalsTypo: {
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    textAlign: "left",
    position: "absolute",
  },
  proposal11ChildLayout1: {
    width: 44,
    backgroundColor: Color.colorBrown,
    height: 19,
    borderRadius: Border.br_10xs,
    position: "absolute",
  },
  closedTypo: {
    width: 38,
    height: 13,
    fontSize: FontSize.size_3xs,
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    textAlign: "left",
    position: "absolute",
  },
  proposal11ChildLayout: {
    left: 24,
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
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    textAlign: "left",
    position: "absolute",
  },
  allTypo: {
    fontSize: FontSize.bodyBold_size,
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    textAlign: "left",
    position: "absolute",
  },
  proposal11Child: {
    top: 218,
    backgroundColor: Color.colorGainsboro_200,
    left: 0,
    height: 62,
    borderRadius: Border.br_8xs,
  },
  proposal11Item: {
    top: 143,
    backgroundColor: Color.colorGainsboro_200,
    left: 0,
    height: 62,
    borderRadius: Border.br_8xs,
  },
  proposal11Inner: {
    top: 295,
    backgroundColor: Color.colorGainsboro_100,
    left: -2,
    height: 62,
    borderRadius: Border.br_8xs,
  },
  javaTutoringProposal: {
    top: 308,
  },
  probabilisticModelIn: {
    top: 154,
    fontSize: FontSize.size_sm,
    left: 21,
    fontWeight: "800",
  },
  conceptOfCc: {
    top: 228,
  },
  all3: {
    top: 97,
    left: 18,
    fontSize: FontSize.size_6xl,
  },
  rectangleView: {
    top: -598,
    borderRadius: Border.br_21xl,
    width: 370,
    height: 674,
    left: -2,
  },
  proposals: {
    top: 12,
    left: 60,
    fontSize: FontSize.size_11xl,
  },
  proposal11Child1: {
    top: 138,
    left: 289,
    backgroundColor: Color.colorGold,
    width: 68,
    height: 19,
    borderRadius: Border.br_10xs,
    position: "absolute",
  },
  requested: {
    top: 140,
    left: 298,
    width: 62,
    height: 13,
    color: Color.colorWhite,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    textAlign: "left",
    position: "absolute",
  },
  proposal11Child2: {
    top: 213,
    left: 313,
  },
  closed: {
    top: 216,
    left: 318,
  },
  proposal11Child3: {
    top: 288,
    left: 311,
  },
  closed1: {
    top: 291,
    left: 316,
  },
  proposal11Child4: {
    top: 329,
    left: 22,
    height: 25,
    width: 93,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorSlateblue,
    position: "absolute",
  },
  viewProposal: {
    top: 335,
    left: 32,
    color: Color.colorWhite,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    textAlign: "left",
    position: "absolute",
  },
  proposal11Child5: {
    top: 175,
  },
  viewProposal1: {
    top: 181,
  },
  proposal11Child6: {
    top: 250,
  },
  viewProposal2: {
    top: 256,
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
  },
  proposal11Child7: {
    top: 590,
    borderTopLeftRadius: Border.br_21xl,
    borderTopRightRadius: Border.br_21xl,
    height: 50,
    width: 360,
    backgroundColor: Color.colorSlateblue,
    left: 0,
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
  requested1: {
    left: 159,
    top: 601,
    fontSize: FontSize.bodyBold_size,
  },
  closed2: {
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
    left: 9,
    top: 20,
    width: 31,
    height: 29,
    position: "absolute",
  },
  proposal11: {
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

export default Proposal11;
