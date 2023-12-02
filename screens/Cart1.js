import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Cart1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.cart1, styles.cart1ChildShadowBox1]}>
      <View style={[styles.cart1Child, styles.cart1ChildBg]} />
      <Image
        style={[styles.cart1Item, styles.cart1ItemPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <View style={[styles.cart1Inner, styles.cart1ChildShadowBox]} />
      <View style={styles.rectangleView} />
      <Text style={[styles.text, styles.textText]}>499$</Text>
      <Text style={styles.yourTotalIs}>Your Total is :</Text>
      <View style={[styles.cart1Child1, styles.cart1ChildLayout4]} />
      <Text
        style={[styles.informationRetrieval, styles.checkOutTypo]}
      >{`Information Retrieval `}</Text>
      <Text style={[styles.muhummadRafi, styles.muhummadTypo]}>
        Muhummad Rafi
      </Text>
      <Image
        style={[styles.starIcon, styles.cart1ChildLayout3]}
        resizeMode="cover"
        source={require("../assets/star-1.png")}
      />
      <Text style={[styles.text1, styles.textTypo]}>4.5</Text>
      <View style={[styles.cart1Child2, styles.cart1ChildShadowBox]} />
      <View style={[styles.cart1Child3, styles.cart1ChildLayout4]} />
      <Text
        style={[styles.probabilisticModel, styles.checkOutTypo]}
      >{`Probabilistic Model `}</Text>
      <Text style={[styles.muhummadRafi1, styles.muhummadTypo]}>
        Muhummad Rafi
      </Text>
      <Image
        style={[styles.cart1Child4, styles.cart1ChildLayout3]}
        resizeMode="cover"
        source={require("../assets/star-1.png")}
      />
      <Text style={[styles.text2, styles.textTypo]}>4.3</Text>
      <View style={[styles.cart1Child5, styles.cart1ChildShadowBox]} />
      <View style={[styles.cart1Child6, styles.cart1ChildLayout4]} />
      <Text
        style={[styles.softwareEngineering, styles.checkOutTypo]}
      >{`Software Engineering `}</Text>
      <Text style={[styles.romashaKhursheed, styles.muhummadTypo]}>
        Romasha Khursheed
      </Text>
      <Image
        style={[styles.cart1Child7, styles.cart1ChildLayout3]}
        resizeMode="cover"
        source={require("../assets/star-1.png")}
      />
      <Text style={[styles.text3, styles.textTypo]}>4</Text>
      <Text style={[styles.text4, styles.textTypo]}>300$</Text>
      <Text style={[styles.text5, styles.textTypo]}>100$</Text>
      <Text style={[styles.text6, styles.textTypo]}>99$</Text>
      <Pressable
        style={[styles.rectanglePressable, styles.cart1ChildBg]}
        onPress={() => navigation.navigate("Cart2")}
      />
      <Text style={[styles.checkOut, styles.checkOutTypo]}>Check Out</Text>
      <Text style={[styles.yourCartHasContainer, styles.checkOutTypo]}>
        <Text style={styles.yourCart}>{`Your Cart  has : `}</Text>
        <Text style={styles.items}>3 Items</Text>
      </Text>
      <Image
        style={[styles.ellipseIcon, styles.cart1ChildLayout2]}
        resizeMode="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={[styles.cart1Child8, styles.cart1ChildLayout2]}
        resizeMode="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={[styles.cart1Child9, styles.cart1ChildLayout2]}
        resizeMode="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={[styles.picture42Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/picture4-2.png")}
      />
      <Image
        style={[styles.picture43Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/picture4-2.png")}
      />
      <Image
        style={styles.picture51}
        resizeMode="cover"
        source={require("../assets/picture-5-1.png")}
      />
      <Image
        style={[styles.picture221Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/picture22-1.png")}
      />
      <Image
        style={[styles.picture222Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/picture22-1.png")}
      />
      <Image
        style={[styles.lineIcon, styles.cart1ChildLayout1]}
        resizeMode="cover"
        source={require("../assets/line-2.png")}
      />
      <Image
        style={[styles.cart1Child10, styles.cart1ChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-31.png")}
      />
      <Image
        style={[styles.cart1Child11, styles.cart1ChildLayout1]}
        resizeMode="cover"
        source={require("../assets/line-2.png")}
      />
      <Image
        style={[styles.cart1Child12, styles.cart1ChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-31.png")}
      />
      <Image
        style={[styles.cart1Child13, styles.cart1ChildLayout1]}
        resizeMode="cover"
        source={require("../assets/line-2.png")}
      />
      <Image
        style={[styles.cart1Child14, styles.cart1ChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-31.png")}
      />
      <Pressable
        style={[styles.icons8Back481, styles.cart1ItemPosition]}
        onPress={() => navigation.navigate("HomePage2")}
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
  cart1ChildShadowBox1: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  cart1ChildBg: {
    backgroundColor: Color.colorSlateblue,
    borderRadius: Border.br_21xl,
    position: "absolute",
  },
  cart1ItemPosition: {
    position: "absolute",
    left: 0,
  },
  cart1ChildShadowBox: {
    height: 59,
    width: 261,
    left: 87,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
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
  textText: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
  },
  cart1ChildLayout4: {
    height: 74,
    width: 96,
    backgroundColor: Color.colorGainsboro_100,
    left: 12,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  checkOutTypo: {
    color: Color.colorGainsboro_100,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  muhummadTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_4xs,
    color: Color.colorGainsboro_100,
    left: 119,
    textAlign: "left",
    position: "absolute",
  },
  cart1ChildLayout3: {
    height: 23,
    width: 23,
    left: 115,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  cart1ChildLayout2: {
    height: 30,
    width: 26,
    left: 331,
    position: "absolute",
  },
  iconLayout1: {
    height: 56,
    width: 50,
    position: "absolute",
  },
  iconLayout: {
    height: 53,
    width: 100,
    position: "absolute",
  },
  cart1ChildLayout1: {
    height: 9,
    width: 6,
    left: 340,
    position: "absolute",
  },
  cart1ChildLayout: {
    height: 8,
    width: 7,
    left: 340,
    position: "absolute",
  },
  cart1Child: {
    top: 173,
    width: 360,
    height: 467,
    left: 0,
  },
  cart1Item: {
    top: 223,
    borderRadius: Border.br_11xl,
    width: 384,
    height: 437,
    left: 0,
  },
  cart1Inner: {
    top: 265,
  },
  rectangleView: {
    top: 45,
    left: 55,
    backgroundColor: Color.colorGainsboro_200,
    width: 259,
    height: 101,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
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
    top: 82,
    left: 135,
    fontSize: FontSize.size_21xl,
    textAlign: "left",
    color: Color.colorSlateblue,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
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
  cart1Child1: {
    top: 258,
  },
  informationRetrieval: {
    top: 271,
    left: 119,
    color: Color.colorGainsboro_100,
    fontSize: FontSize.size_sm,
  },
  muhummadRafi: {
    top: 290,
  },
  starIcon: {
    top: 305,
  },
  text1: {
    top: 308,
    left: 137,
    color: Color.colorWhite,
    fontSize: FontSize.size_4xs,
  },
  cart1Child2: {
    top: 359,
  },
  cart1Child3: {
    top: 352,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  probabilisticModel: {
    top: 365,
    left: 119,
    color: Color.colorGainsboro_100,
    fontSize: FontSize.size_sm,
  },
  muhummadRafi1: {
    top: 384,
  },
  cart1Child4: {
    top: 399,
  },
  text2: {
    top: 402,
    left: 137,
    color: Color.colorWhite,
    fontSize: FontSize.size_4xs,
  },
  cart1Child5: {
    top: 460,
  },
  cart1Child6: {
    top: 453,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  softwareEngineering: {
    top: 466,
    left: 119,
    color: Color.colorGainsboro_100,
    fontSize: FontSize.size_sm,
  },
  romashaKhursheed: {
    top: 485,
  },
  cart1Child7: {
    top: 500,
  },
  text3: {
    top: 503,
    left: 137,
    color: Color.colorWhite,
    fontSize: FontSize.size_4xs,
  },
  text4: {
    top: 294,
    left: 282,
    fontSize: FontSize.size_6xl,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
  },
  text5: {
    top: 388,
    left: 284,
    fontSize: FontSize.size_6xl,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
  },
  text6: {
    top: 489,
    left: 295,
    fontSize: FontSize.size_6xl,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
  },
  rectanglePressable: {
    top: 554,
    left: 65,
    width: 230,
    height: 51,
  },
  checkOut: {
    top: 568,
    left: 125,
    fontSize: FontSize.size_xl,
  },
  yourCart: {
    fontSize: FontSize.bodyBold_size,
  },
  items: {
    fontSize: FontSize.size_6xl,
  },
  yourCartHasContainer: {
    top: 183,
    left: 69,
  },
  ellipseIcon: {
    top: 257,
  },
  cart1Child8: {
    top: 352,
  },
  cart1Child9: {
    top: 449,
  },
  picture42Icon: {
    top: 15,
    left: 30,
  },
  picture43Icon: {
    top: 111,
    left: 285,
  },
  picture51: {
    top: 345,
    height: 91,
    width: 100,
    left: 12,
    position: "absolute",
  },
  picture221Icon: {
    top: 273,
    left: 10,
  },
  picture222Icon: {
    top: 461,
    left: 12,
    height: 53,
  },
  lineIcon: {
    top: 264,
  },
  cart1Child10: {
    top: 263,
  },
  cart1Child11: {
    top: 456,
  },
  cart1Child12: {
    top: 455,
  },
  cart1Child13: {
    top: 359,
  },
  cart1Child14: {
    top: 358,
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
  },
  cart1: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default Cart1;
