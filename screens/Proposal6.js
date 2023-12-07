import * as React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import OrderSummaryCard from "../components/OrderSummaryCard";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Proposal6 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.proposal6, styles.proposal6ShadowBox]}>
      <View style={[styles.proposal6Child, styles.proposal6ChildBorder]} />
      <Image
        style={[styles.picture46Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/picture4-2.png")}
      />
      <Image
        style={[styles.picture47Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/picture4-2.png")}
      />
      <Image
        style={styles.we2Icon}
        resizeMode="cover"
        source={require("../assets/we-2.png")}
      />
      <Text style={[styles.congratulations, styles.textTypo]}>
        Congratulations !!!
      </Text>
      <Image
        style={[styles.proposal6Item, styles.proposal6Layout]}
        resizeMode="cover"
        source={require("../assets/star-121.png")}
      />
      <Image
        style={[styles.proposal6Inner, styles.proposal6Layout]}
        resizeMode="cover"
        source={require("../assets/star-121.png")}
      />
      <Image
        style={[styles.starIcon, styles.starIconPosition]}
        resizeMode="cover"
        source={require("../assets/star-121.png")}
      />
      <Image
        style={[styles.proposal6Child1, styles.starIconPosition]}
        resizeMode="cover"
        source={require("../assets/star-121.png")}
      />
      <Image
        style={[styles.proposal6Child2, styles.proposal6ChildPosition]}
        resizeMode="cover"
        source={require("../assets/star-121.png")}
      />
      <Image
        style={[styles.proposal6Child3, styles.proposal6ChildPosition]}
        resizeMode="cover"
        source={require("../assets/star-121.png")}
      />
      <Text style={[styles.youHaveSucessfullyContainer, styles.youTypo]}>
        <Text style={styles.youHaveSucessfully}>{`You have sucessfully hired 
`}</Text>
        <Text style={styles.drMuhummadRafi}>{`Dr. Muhummad Rafi
`}</Text>
        <Text style={styles.youHaveSucessfully}>{`for
`}</Text>
        <Text style={styles.drMuhummadRafi}>Java Tutoring</Text>
      </Text>
      <View style={[styles.rectangleView, styles.proposal6ChildBorder]} />
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle-130.png")}
      />
      <Text style={[styles.youOrderSummary, styles.proposal6Layout]}>
        You Order Summary is:
      </Text>
      <View style={[styles.proposal6Child4, styles.proposal6ChildBorder]} />
      <Image
        style={[styles.whatsappImage20231007At6, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/whatsapp-image-20231007-at-627-2.png")}
      />
      <Image
        style={[styles.icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/1516807823802-4.png")}
      />
      <Image
        style={styles.picture47Icon1}
        resizeMode="cover"
        source={require("../assets/picture4-7.png")}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity}
        onPress={() => navigation.navigate("Proposal7")}
      >
        <Text style={[styles.text, styles.textTypo]}>􀅾</Text>
      </TouchableOpacity>
      <OrderSummaryCard propTop={512} propLeft={50} />
    </View>
  );
};

const styles = StyleSheet.create({
  proposal6ShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  proposal6ChildBorder: {
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    position: "absolute",
  },
  iconLayout: {
    height: 56,
    width: 50,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontSize: FontSize.bodyBold_size,
  },
  proposal6Layout: {
    height: 16,
    position: "absolute",
  },
  starIconPosition: {
    top: 63,
    height: 16,
    width: 16,
    position: "absolute",
  },
  proposal6ChildPosition: {
    top: 85,
    height: 16,
    width: 16,
    position: "absolute",
  },
  youTypo: {
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  iconPosition: {
    borderRadius: Border.br_41xl,
    top: 161,
    position: "absolute",
  },
  proposal6Child: {
    top: 37,
    left: 45,
    backgroundColor: Color.colorGainsboro_200,
    width: 269,
    height: 308,
    borderRadius: Border.br_8xs,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  picture46Icon: {
    top: 22,
    left: 29,
  },
  picture47Icon: {
    top: 314,
    left: 289,
  },
  we2Icon: {
    top: 50,
    left: 146,
    width: 70,
    height: 70,
    position: "absolute",
  },
  congratulations: {
    top: 124,
    left: 108,
    color: Color.colorSlateblue,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  proposal6Item: {
    width: 16,
    top: 46,
    height: 16,
    left: 130,
  },
  proposal6Inner: {
    left: 213,
    width: 16,
    top: 46,
    height: 16,
  },
  starIcon: {
    left: 234,
  },
  proposal6Child1: {
    left: 115,
  },
  proposal6Child2: {
    left: 221,
  },
  proposal6Child3: {
    left: 130,
  },
  youHaveSucessfully: {
    color: Color.colorSlateblue,
  },
  drMuhummadRafi: {
    color: Color.labelColorLightPrimary,
  },
  youHaveSucessfullyContainer: {
    top: 236,
    left: 44,
    textAlign: "center",
    width: 271,
    fontSize: FontSize.bodyBold_size,
    fontWeight: "800",
    position: "absolute",
  },
  rectangleView: {
    top: 396,
    left: -1,
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorSlateblue,
    width: 360,
    height: 307,
  },
  rectangleIcon: {
    top: 449,
    left: 0,
    borderRadius: Border.br_11xl,
    width: 384,
    height: 272,
    position: "absolute",
  },
  youOrderSummary: {
    top: 413,
    left: 83,
    color: Color.colorGainsboro_100,
    width: 192,
    textAlign: "left",
    fontSize: FontSize.bodyBold_size,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  proposal6Child4: {
    top: 154,
    left: 103,
    width: 162,
    height: 77,
    borderRadius: Border.br_8xs,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  whatsappImage20231007At6: {
    left: 191,
    width: 60,
    height: 60,
  },
  icon: {
    left: 111,
    width: 68,
    height: 68,
  },
  picture47Icon1: {
    top: 175,
    left: 169,
    width: 30,
    height: 34,
    position: "absolute",
  },
  text: {
    lineHeight: 22,
    fontFamily: FontFamily.sFProDisplay,
    color: Color.blue500,
  },
  TouchableOpacity: {
    left: 10,
    top: 5,
    position: "absolute",
  },
  proposal6: {
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Proposal6;
