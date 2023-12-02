import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Proposal4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.proposal4}>
      <View style={[styles.proposal4Child, styles.rectangleViewShadowBox]} />
      <Text style={[styles.text, styles.textText]}>300$</Text>
      <Text style={styles.yourTotalIs}>Your Total is :</Text>
      <Image
        style={[styles.picture42Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/picture4-2.png")}
      />
      <Image
        style={[styles.picture43Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/picture4-2.png")}
      />
      <View style={[styles.proposal4Item, styles.rectangleBg]} />
      <Image
        style={styles.proposal4Inner}
        resizeMode="cover"
        source={require("../assets/rectangle-130.png")}
      />
      <Text style={[styles.confirmToPay, styles.confirmToPayTypo]}>
        Confirm to Pay:
      </Text>
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-12.png")}
      />
      <Image
        style={[styles.proposal4Child1, styles.rectangleIconLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-13.png")}
      />
      <Text style={[styles.bankName, styles.bankNameTypo]}>Bank Name</Text>
      <Text style={[styles.accountNumberIban, styles.bankNameTypo]}>
        Account Number/ IBAN
      </Text>
      <Text style={[styles.bankAlHabib, styles.bankAlHabibTypo]}>
        Bank Al-Habib
      </Text>
      <Text style={[styles.pk001234567890, styles.bankAlHabibTypo]}>
        PK00-1234567890
      </Text>
      <Pressable
        style={[styles.rectanglePressable, styles.rectangleBg]}
        onPress={() => navigation.navigate("Proposal5")}
      />
      <Text style={[styles.pay, styles.payTypo]}>Pay</Text>
      <View style={[styles.rectangleView, styles.rectangleBg]} />
      <Text style={[styles.javaTutoring, styles.confirmToPayTypo]}>
        Java Tutoring
      </Text>
      <Text style={[styles.text1, styles.payTypo]}>300$</Text>
      <Text style={[styles.muhummadRafi, styles.text2Typo]}>Muhummad Rafi</Text>
      <Image
        style={styles.starIcon}
        resizeMode="cover"
        source={require("../assets/star-12.png")}
      />
      <Text style={[styles.text2, styles.text2Typo]}>4.5</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleViewShadowBox: {
    width: 259,
    borderRadius: Border.br_8xs,
    left: 55,
    borderWidth: 1,
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
  textText: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
  },
  iconLayout: {
    height: 56,
    width: 50,
    position: "absolute",
  },
  rectangleBg: {
    backgroundColor: Color.colorSlateblue,
    position: "absolute",
  },
  confirmToPayTypo: {
    fontSize: FontSize.bodyBold_size,
    color: Color.colorGainsboro_100,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  rectangleIconLayout: {
    width: 310,
    left: 29,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  bankNameTypo: {
    left: 32,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorSlateblue,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  bankAlHabibTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    color: Color.colorGainsboro_100,
    textAlign: "left",
    position: "absolute",
  },
  payTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  text2Typo: {
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  proposal4Child: {
    top: 45,
    backgroundColor: Color.colorGainsboro_200,
    height: 101,
    position: "absolute",
  },
  text: {
    top: 82,
    left: 135,
    fontSize: FontSize.size_21xl,
    textAlign: "left",
    color: Color.colorSlateblue,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  yourTotalIs: {
    top: 57,
    left: 142,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorSlateblue,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  picture42Icon: {
    top: 15,
    left: 30,
  },
  picture43Icon: {
    top: 111,
    left: 285,
  },
  proposal4Item: {
    top: 318,
    width: 360,
    height: 307,
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorSlateblue,
    left: 0,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
  },
  proposal4Inner: {
    top: 371,
    borderRadius: Border.br_11xl,
    width: 384,
    height: 272,
    left: 0,
    position: "absolute",
  },
  confirmToPay: {
    top: 334,
    left: 125,
    width: 136,
    height: 16,
    color: Color.colorGainsboro_100,
  },
  rectangleIcon: {
    top: 422,
    height: 37,
  },
  proposal4Child1: {
    top: 494,
    height: 38,
  },
  bankName: {
    top: 401,
  },
  accountNumberIban: {
    top: 469,
  },
  bankAlHabib: {
    top: 433,
    left: 35,
    fontFamily: FontFamily.interRegular,
  },
  pk001234567890: {
    top: 506,
    left: 41,
    fontFamily: FontFamily.interRegular,
  },
  rectanglePressable: {
    top: 567,
    left: 96,
    width: 166,
    height: 51,
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorSlateblue,
  },
  pay: {
    top: 581,
    left: 157,
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_xl,
  },
  rectangleView: {
    top: 200,
    height: 69,
    width: 259,
    borderRadius: Border.br_8xs,
    left: 55,
    borderWidth: 1,
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
  javaTutoring: {
    top: 208,
    left: 76,
    color: Color.colorGainsboro_100,
  },
  text1: {
    top: 222,
    left: 255,
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
  },
  muhummadRafi: {
    top: 231,
    left: 78,
    color: Color.colorGainsboro_100,
  },
  starIcon: {
    top: 244,
    left: 75,
    width: 23,
    height: 23,
    position: "absolute",
  },
  text2: {
    top: 247,
    left: 97,
    color: Color.colorWhite,
  },
  proposal4: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
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

export default Proposal4;
