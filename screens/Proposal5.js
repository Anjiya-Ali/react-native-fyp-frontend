import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import OrderSummaryCard from "../components/OrderSummaryCard";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Proposal5 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.proposal5, styles.proposal5ShadowBox]}>
      <View style={[styles.proposal5Child, styles.proposal5Border]} />
      <Image
        style={[styles.picture44Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/picture4-2.png")}
      />
      <Image
        style={[styles.picture45Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/picture4-2.png")}
      />
      <Text style={[styles.yourOrderIs, styles.orderTypo]}>
        Your Order is Under Confirmation
      </Text>
      <Text
        style={[styles.pleaseHangTight, styles.orderTypo1]}
      >{`Please hang tight,
while we review your payment`}</Text>
      <Image
        style={styles.hourglass1Icon}
        resizeMode="cover"
        source={require("../assets/hourglass-1.png")}
      />
      <View style={[styles.proposal5Item, styles.proposal5Position]} />
      <Image
        style={[styles.proposal5Inner, styles.proposal5Position]}
        resizeMode="cover"
        source={require("../assets/rectangle-130.png")}
      />
      <Text style={[styles.youOrderSummary, styles.orderTypo]}>
        You Order Summary is:
      </Text>
      <OrderSummaryCard />
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("Proposal12")}
      >
        <Text style={[styles.text, styles.orderTypo]}>􀅾</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  proposal5ShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  proposal5Border: {
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
  },
  iconLayout: {
    height: 56,
    width: 50,
    position: "absolute",
  },
  orderTypo: {
    textAlign: "left",
    fontSize: FontSize.bodyBold_size,
  },
  orderTypo1: {
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  proposal5Position: {
    left: 0,
    position: "absolute",
  },
  proposal5Child: {
    top: 111,
    left: 33,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGainsboro_200,
    width: 290,
    height: 158,
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
  picture44Icon: {
    top: 81,
    left: 13,
  },
  picture45Icon: {
    top: 242,
    left: 296,
  },
  yourOrderIs: {
    top: 196,
    left: 40,
    color: Color.colorSlateblue,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  pleaseHangTight: {
    top: 223,
    left: 79,
    fontSize: FontSize.size_xs,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    width: 195,
  },
  hourglass1Icon: {
    top: 121,
    left: 145,
    width: 70,
    height: 70,
    position: "absolute",
  },
  proposal5Item: {
    top: 394,
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorSlateblue,
    width: 360,
    height: 307,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
  },
  proposal5Inner: {
    top: 447,
    borderRadius: Border.br_11xl,
    width: 384,
    height: 272,
  },
  youOrderSummary: {
    top: 411,
    left: 84,
    color: Color.colorGainsboro_100,
    width: 192,
    height: 16,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  text: {
    lineHeight: 22,
    fontFamily: FontFamily.sFProDisplay,
    color: Color.blue500,
  },
  pressable: {
    left: 5,
    top: 7,
    position: "absolute",
  },
  proposal5: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default Proposal5;
