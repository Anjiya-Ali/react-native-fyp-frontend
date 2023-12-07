import * as React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Cart5 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cart5}>
      <View style={styles.cart5Child} />
      <Image
        style={styles.cart5Item}
        resizeMode="cover"
        source={require("../assets/rectangle-11.png")}
      />
      <Text style={styles.personexamplecom}>person@example.com</Text>
      <Text style={styles.yourOrderSummary}>Your Order Summary is:</Text>
      <View style={styles.cart5Inner} />
      <Image
        style={[styles.picture44Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/picture4-2.png")}
      />
      <Image
        style={[styles.picture45Icon, styles.text3Position]}
        resizeMode="cover"
        source={require("../assets/picture4-2.png")}
      />
      <Image
        style={styles.we1Icon}
        resizeMode="cover"
        source={require("../assets/we-2.png")}
      />
      <Text style={[styles.congratulations, styles.congratulationsTypo]}>
        Congratulations !!!
      </Text>
      <Text style={[styles.youHaveSucessfully, styles.congratulationsTypo]}>{`
You have sucessfully purchased`}</Text>
      <Image
        style={[styles.starIcon, styles.starIconLayout]}
        resizeMode="cover"
        source={require("../assets/star-12.png")}
      />
      <Image
        style={[styles.cart5Child1, styles.starIconLayout]}
        resizeMode="cover"
        source={require("../assets/star-12.png")}
      />
      <Image
        style={[styles.cart5Child2, styles.cart5ChildPosition2]}
        resizeMode="cover"
        source={require("../assets/star-12.png")}
      />
      <Image
        style={[styles.cart5Child3, styles.cart5ChildPosition2]}
        resizeMode="cover"
        source={require("../assets/star-12.png")}
      />
      <Image
        style={[styles.cart5Child4, styles.cart5ChildPosition1]}
        resizeMode="cover"
        source={require("../assets/star-12.png")}
      />
      <Image
        style={[styles.cart5Child5, styles.cart5ChildPosition1]}
        resizeMode="cover"
        source={require("../assets/star-12.png")}
      />
      <Text
        style={styles.informationRetrieval}
      >{`Information Retrieval `}</Text>
      <View style={[styles.rectangleView, styles.cart5ChildShadowBox1]} />
      <View style={[styles.cart5Child6, styles.cart5ChildLayout]} />
      <Text
        style={[styles.informationRetrieval1, styles.informationTypo]}
      >{`Information Retrieval `}</Text>
      <Text style={[styles.muhummadRafi, styles.muhummadTypo]}>
        Muhummad Rafi
      </Text>
      <Image
        style={[styles.cart5Child7, styles.cart5ChildPosition]}
        resizeMode="cover"
        source={require("../assets/star-12.png")}
      />
      <Text style={[styles.text, styles.textTypo1]}>4.5</Text>
      <Image
        style={[styles.picture223Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/picture22-1.png")}
      />
      <View style={[styles.cart5Child8, styles.cart5ChildShadowBox]} />
      <Text style={[styles.goToCourse, styles.courseTypo]}>Go to Course</Text>
      <Text style={[styles.text1, styles.textTypo]}>300$</Text>
      <View style={[styles.cart5Child9, styles.cart5ChildShadowBox1]} />
      <View style={[styles.cart5Child10, styles.cart5ChildLayout]} />
      <Text
        style={[styles.informationRetrieval2, styles.informationTypo]}
      >{`Information Retrieval `}</Text>
      <Text style={[styles.muhummadRafi1, styles.muhummadTypo]}>
        Muhummad Rafi
      </Text>
      <Image
        style={[styles.cart5Child11, styles.cart5ChildPosition]}
        resizeMode="cover"
        source={require("../assets/star-12.png")}
      />
      <Text style={[styles.text2, styles.textTypo1]}>4.5</Text>
      <Image
        style={[styles.picture225Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/picture22-1.png")}
      />
      <View style={[styles.cart5Child12, styles.cart5ChildShadowBox]} />
      <Text style={[styles.goToCourse1, styles.courseTypo]}>Go to Course</Text>
      <Text style={[styles.text3, styles.textTypo]}>99$</Text>
      <View style={[styles.cart5Child13, styles.cart5ChildShadowBox1]} />
      <View style={[styles.cart5Child14, styles.cart5ChildLayout]} />
      <Text style={[styles.probabilisticModel, styles.text5Position]}>
        Probabilistic Model
      </Text>
      <Text style={[styles.muhummadRafi2, styles.muhummadTypo]}>
        Muhummad Rafi
      </Text>
      <Image
        style={[styles.cart5Child15, styles.cart5ChildPosition]}
        resizeMode="cover"
        source={require("../assets/star-12.png")}
      />
      <Text style={[styles.text4, styles.textTypo1]}>4.3</Text>
      <View style={[styles.cart5Child16, styles.cart5ChildShadowBox]} />
      <Text style={[styles.goToCourse2, styles.courseTypo]}>Go to Course</Text>
      <Text style={[styles.text5, styles.text5Position]}>100$</Text>
      <Image
        style={styles.picture52}
        resizeMode="cover"
        source={require("../assets/picture-5-1.png")}
      />
      <TouchableOpacity style={styles.TouchableOpacity} onPress={() => navigation.goBack()}>
        <Text style={styles.text6}>􀅾</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    height: 56,
    width: 50,
  },
  text3Position: {
    left: 296,
    position: "absolute",
  },
  congratulationsTypo: {
    color: Color.colorSlateblue,
    top: 133,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.bodyBold_size,
    textAlign: "left",
    position: "absolute",
  },
  starIconLayout: {
    height: 23,
    width: 23,
    top: 55,
    position: "absolute",
  },
  cart5ChildPosition2: {
    top: 72,
    height: 23,
    width: 23,
    position: "absolute",
  },
  cart5ChildPosition1: {
    top: 94,
    height: 23,
    width: 23,
    position: "absolute",
  },
  cart5ChildShadowBox1: {
    height: 79,
    width: 261,
    left: 86,
    borderRadius: Border.br_8xs,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    backgroundColor: Color.colorSlateblue,
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
  cart5ChildLayout: {
    height: 74,
    width: 96,
    backgroundColor: Color.colorGainsboro_100,
    left: 10,
    borderRadius: Border.br_8xs,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    position: "absolute",
  },
  informationTypo: {
    left: 118,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    color: Color.colorGainsboro_100,
  },
  muhummadTypo: {
    fontSize: FontSize.size_4xs,
    left: 118,
    textAlign: "left",
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  cart5ChildPosition: {
    left: 114,
    height: 23,
    width: 23,
    position: "absolute",
  },
  textTypo1: {
    color: Color.colorWhite,
    left: 136,
    fontSize: FontSize.size_4xs,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iconLayout: {
    height: 53,
    left: 8,
    width: 100,
    position: "absolute",
  },
  cart5ChildShadowBox: {
    height: 24,
    width: 107,
    left: 233,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_21xl,
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
  courseTypo: {
    left: 240,
    fontSize: FontSize.size_sm,
    color: Color.colorSlateblue,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
  },
  text5Position: {
    top: 433,
    textAlign: "left",
    position: "absolute",
  },
  cart5Child: {
    top: 240,
    width: 360,
    height: 400,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    backgroundColor: Color.colorSlateblue,
    borderRadius: Border.br_21xl,
    left: 0,
    position: "absolute",
  },
  cart5Item: {
    top: 293,
    borderRadius: Border.br_11xl,
    width: 384,
    height: 365,
    left: 0,
    position: "absolute",
  },
  personexamplecom: {
    left: 123,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.interRegular,
    top: 381,
    position: "absolute",
  },
  yourOrderSummary: {
    top: 255,
    left: 84,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.bodyBold_size,
    textAlign: "left",
    color: Color.colorGainsboro_100,
    position: "absolute",
  },
  cart5Inner: {
    top: 49,
    left: 33,
    backgroundColor: Color.colorGainsboro_200,
    width: 290,
    height: 158,
    borderRadius: Border.br_8xs,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
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
    top: 19,
    left: 13,
    position: "absolute",
  },
  picture45Icon: {
    top: 180,
    height: 56,
    width: 50,
  },
  we1Icon: {
    top: 59,
    left: 145,
    width: 70,
    height: 70,
    position: "absolute",
  },
  congratulations: {
    left: 107,
  },
  youHaveSucessfully: {
    left: 45,
  },
  starIcon: {
    left: 125,
  },
  cart5Child1: {
    left: 208,
  },
  cart5Child2: {
    left: 229,
  },
  cart5Child3: {
    left: 110,
  },
  cart5Child4: {
    left: 216,
  },
  cart5Child5: {
    left: 125,
  },
  informationRetrieval: {
    left: 122,
    fontSize: FontSize.size_sm,
    top: 337,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    textAlign: "left",
    color: Color.colorGainsboro_100,
    position: "absolute",
  },
  rectangleView: {
    top: 334,
  },
  cart5Child6: {
    top: 337,
    height: 74,
    width: 96,
    backgroundColor: Color.colorGainsboro_100,
    left: 10,
  },
  informationRetrieval1: {
    top: 340,
    textAlign: "left",
    position: "absolute",
  },
  muhummadRafi: {
    top: 359,
  },
  cart5Child7: {
    top: 374,
  },
  text: {
    top: 377,
  },
  picture223Icon: {
    top: 352,
  },
  cart5Child8: {
    top: 381,
    height: 24,
    width: 107,
    left: 233,
  },
  goToCourse: {
    top: 384,
  },
  text1: {
    top: 341,
    left: 286,
    textAlign: "left",
    position: "absolute",
  },
  cart5Child9: {
    top: 520,
  },
  cart5Child10: {
    top: 523,
  },
  informationRetrieval2: {
    top: 526,
    textAlign: "left",
    position: "absolute",
  },
  muhummadRafi1: {
    top: 545,
  },
  cart5Child11: {
    top: 560,
  },
  text2: {
    top: 563,
  },
  picture225Icon: {
    top: 538,
  },
  cart5Child12: {
    top: 567,
  },
  goToCourse1: {
    top: 570,
  },
  text3: {
    top: 525,
    left: 296,
    position: "absolute",
    textAlign: "left",
  },
  cart5Child13: {
    top: 427,
  },
  cart5Child14: {
    top: 430,
  },
  probabilisticModel: {
    left: 118,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    color: Color.colorGainsboro_100,
  },
  muhummadRafi2: {
    top: 452,
  },
  cart5Child15: {
    top: 467,
  },
  text4: {
    top: 470,
  },
  cart5Child16: {
    top: 474,
  },
  goToCourse2: {
    top: 477,
  },
  text5: {
    left: 288,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
  },
  picture52: {
    top: 425,
    height: 91,
    width: 100,
    left: 10,
    position: "absolute",
  },
  text6: {
    lineHeight: 22,
    fontFamily: FontFamily.sFProDisplay,
    color: Color.blue500,
    fontSize: FontSize.bodyBold_size,
    textAlign: "left",
  },
  TouchableOpacity: {
    left: 5,
    top: 0,
    position: "absolute",
  },
  cart5: {
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

export default Cart5;
