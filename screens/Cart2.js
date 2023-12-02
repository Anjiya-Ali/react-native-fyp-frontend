import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Cart2 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.cart2, styles.cart2ShadowBox]}>
      <View style={[styles.cart2Child, styles.cart2Bg]} />
      <View style={[styles.cart2Item, styles.cart2Border]} />
      <Text style={styles.text}>499$</Text>
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
      <View style={[styles.cart2Inner, styles.cart2InnerBg]} />
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle-1301.png")}
      />
      <Text style={[styles.confimToPay, styles.payTypo]}>Confim to Pay:</Text>
      <Image
        style={[styles.cart2Child1, styles.cart2ChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-12.png")}
      />
      <Image
        style={[styles.cart2Child2, styles.cart2ChildLayout]}
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
      <View style={[styles.rectangleView, styles.cart2InnerBg]} />
      <Text style={[styles.pay, styles.payTypo]}>Pay</Text>
      <Pressable
        style={styles.viewOrder}
        onPress={() => navigation.navigate("Cart3")}
      >
        <Text style={styles.viewOrder1}>View Order</Text>
      </Pressable>
      <Image
        style={styles.wer10Icon}
        resizeMode="cover"
        source={require("../assets/wer-10.png")}
      />
      <Pressable
        style={styles.icons8Back481}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icons8back48-1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  cart2ShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  cart2Bg: {
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  cart2Border: {
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
  },
  iconLayout: {
    height: 56,
    width: 50,
    position: "absolute",
  },
  cart2InnerBg: {
    backgroundColor: Color.colorSlateblue,
    borderRadius: Border.br_21xl,
    position: "absolute",
  },
  payTypo: {
    color: Color.colorGainsboro_100,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  cart2ChildLayout: {
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
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    color: Color.colorGainsboro_100,
    textAlign: "left",
    position: "absolute",
  },
  cart2Child: {
    top: 164,
    left: 121,
    width: 119,
    height: 25,
  },
  cart2Item: {
    top: 51,
    left: 55,
    width: 259,
    height: 101,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_8xs,
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
  text: {
    top: 88,
    left: 135,
    fontSize: FontSize.size_21xl,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    textAlign: "left",
    color: Color.colorSlateblue,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  yourTotalIs: {
    top: 63,
    left: 142,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorSlateblue,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  picture42Icon: {
    top: 21,
    left: 30,
  },
  picture43Icon: {
    top: 117,
    left: 285,
  },
  cart2Inner: {
    top: 267,
    width: 360,
    height: 361,
    left: 0,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
  },
  rectangleIcon: {
    top: 320,
    borderRadius: Border.br_11xl,
    width: 384,
    height: 326,
    left: 0,
    position: "absolute",
  },
  confimToPay: {
    top: 283,
    left: 125,
    fontSize: FontSize.bodyBold_size,
    width: 192,
    height: 16,
  },
  cart2Child1: {
    top: 376,
    height: 37,
  },
  cart2Child2: {
    top: 448,
    height: 38,
  },
  bankName: {
    top: 355,
  },
  accountNumberIban: {
    top: 423,
  },
  bankAlHabib: {
    top: 387,
    left: 35,
  },
  pk001234567890: {
    top: 460,
    left: 41,
  },
  rectangleView: {
    top: 557,
    left: 80,
    width: 214,
    height: 51,
  },
  pay: {
    top: 571,
    left: 169,
    fontSize: FontSize.size_xl,
  },
  viewOrder1: {
    width: 67,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorSlateblue,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  viewOrder: {
    left: 138,
    top: 168,
    position: "absolute",
  },
  wer10Icon: {
    top: 165,
    left: 209,
    width: 20,
    height: 20,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  icons8Back481: {
    top: 0,
    width: 35,
    height: 35,
    left: 0,
    position: "absolute",
  },
  cart2: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default Cart2;
