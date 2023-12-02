import * as React from "react";
import { StyleSheet, View, Pressable, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Chat1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chat1}>
      <View style={[styles.chat1Child, styles.chat1ShadowBox]} />
      <View style={[styles.chat1Item, styles.chat1ShadowBox]} />
      <Pressable
        style={[styles.chat1Inner, styles.chat1ShadowBox]}
        onPress={() => navigation.navigate("Chat3")}
      />
      <View style={[styles.rectangleView, styles.chat1Child4Bg]} />
      <Pressable
        style={styles.icons8Arrow241}
        onPress={() => navigation.navigate("HomePage2")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icons8arrow24-11.png")}
        />
      </Pressable>
      <Image
        style={styles.hamburgerIcon}
        resizeMode="cover"
        source={require("../assets/hamburger.png")}
      />
      <View style={styles.teacher0041} />
      <Text style={[styles.drMuhummadRafi, styles.chatsTypo]}>
        Dr. Muhummad Rafi
      </Text>
      <Text style={[styles.msRomashaKhursheed, styles.chatsTypo]}>
        Ms. Romasha Khursheed
      </Text>
      <Text style={[styles.drUmerSaif, styles.drUmerSaifTypo]}>
        Dr. Umer Saif
      </Text>
      <Text style={[styles.thankyouSir, styles.bestoRfiTypo]}>
        Thankyou Sir
      </Text>
      <Text style={[styles.okayThanksFor, styles.bestoRfiTypo]}>
        Okay, Thanks for sharing.
      </Text>
      <Text style={[styles.bestoRfi, styles.bestoRfiTypo]}>Besto, R/\fi.</Text>
      <Image
        style={[styles.icon1, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/1695878498659-1.png")}
      />
      <Image
        style={[styles.icon2, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/1516807823802-21.png")}
      />
      <Image
        style={[styles.icon3, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/1678185219197-2.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <Image
        style={[styles.chat1Child1, styles.ellipseIconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <Image
        style={[styles.picture811Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/picture8-1.png")}
      />
      <Image
        style={[styles.picture812Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/picture8-1.png")}
      />
      <Text style={[styles.pm, styles.pmTypo]}>9:29 PM</Text>
      <Text style={[styles.pm1, styles.pmTypo]}>9:29 PM</Text>
      <Text style={[styles.pm2, styles.pmTypo]}>9:29 PM</Text>
      <Text style={[styles.text, styles.textTypo]}>3</Text>
      <Text style={[styles.text1, styles.textTypo]}>2</Text>
      <Text style={[styles.chats, styles.chatsTypo]}>Chats</Text>
      <Image
        style={styles.lineIcon}
        resizeMode="cover"
        source={require("../assets/line-12.png")}
      />
      <Image
        style={[styles.chat1Child2, styles.chat1ChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Image
        style={[styles.chat1Child3, styles.chat1ChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <View style={[styles.chat1Child4, styles.chat1Child4Bg]} />
      <Text style={[styles.chats1, styles.callsTypo]}>Chats</Text>
      <Text style={[styles.calls, styles.callsTypo]}>Calls</Text>
      <Image
        style={[styles.chat1Child5, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-15.png")}
      />
      <Text style={[styles.youHave5, styles.textTypo]}>
        You have 5 new messages from 2 chats
      </Text>
      <Text style={[styles.messages, styles.textTypo]}>Messages</Text>
      <View style={styles.teacher0041} />
      <Image
        style={styles.lineIcon}
        resizeMode="cover"
        source={require("../assets/line-12.png")}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.chat1ShadowBox]}
        onPress={() => navigation.navigate("Chat4")}
      />
      <Text style={[styles.spartansFastProgrammers, styles.drUmerSaifTypo]}>
        Spartans FAST Programmers
      </Text>
      <Text style={[styles.yesPlease, styles.bestoRfiTypo]}>Yes, please</Text>
      <Text style={[styles.pm3, styles.pmTypo]}>9:29 PM</Text>
      <Image
        style={styles.kingLeonidasIStatueInSparIcon}
        resizeMode="cover"
        source={require("../assets/king-leonidas-i-statue-in-sparta-2.png")}
      />
      <Image
        style={[styles.picture813Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/picture8-1.png")}
      />
      <Image
        style={[styles.picture814Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/picture8-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chat1ShadowBox: {
    height: 62,
    backgroundColor: Color.colorGainsboro_200,
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
  chat1Child4Bg: {
    backgroundColor: Color.colorSlateblue,
    position: "absolute",
  },
  chatsTypo: {
    textAlign: "left",
    color: Color.colorSlateblue,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  drUmerSaifTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorSlateblue,
    fontSize: FontSize.size_sm,
    left: 78,
    position: "absolute",
  },
  bestoRfiTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorSlateblue,
    position: "absolute",
  },
  iconLayout2: {
    height: 58,
    width: 58,
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 20,
    width: 21,
    left: 303,
    position: "absolute",
  },
  iconLayout: {
    width: 20,
    position: "absolute",
  },
  pmTypo: {
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorSlateblue,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorGainsboro_100,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  chat1ChildPosition: {
    left: 40,
    width: 20,
    height: 20,
    position: "absolute",
  },
  callsTypo: {
    fontSize: FontSize.bodyBold_size,
    top: 597,
    color: Color.colorGainsboro_100,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  iconPosition: {
    top: 414,
    width: 20,
    height: 20,
    position: "absolute",
  },
  chat1Child: {
    top: 313,
  },
  chat1Item: {
    top: 244,
  },
  chat1Inner: {
    top: 174,
  },
  rectangleView: {
    top: -594,
    left: -4,
    borderRadius: Border.br_21xl,
    width: 370,
    height: 700,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  icons8Arrow241: {
    left: 11,
    top: 18,
    width: 31,
    height: 29,
    position: "absolute",
  },
  hamburgerIcon: {
    top: 24,
    left: 307,
    width: 25,
    height: 16,
    position: "absolute",
  },
  teacher0041: {
    top: 455,
    left: 183,
    width: 147,
    height: 153,
    position: "absolute",
  },
  drMuhummadRafi: {
    fontSize: FontSize.size_sm,
    left: 78,
    top: 187,
  },
  msRomashaKhursheed: {
    top: 258,
    fontSize: FontSize.size_sm,
    left: 78,
  },
  drUmerSaif: {
    top: 325,
  },
  thankyouSir: {
    top: 349,
    left: 96,
    fontSize: FontSize.size_xs,
  },
  okayThanksFor: {
    top: 279,
    left: 78,
  },
  bestoRfi: {
    top: 208,
    left: 78,
  },
  icon1: {
    top: 250,
    left: 2,
    height: 58,
    width: 58,
  },
  icon2: {
    top: 179,
    left: 2,
    height: 58,
    width: 58,
  },
  icon3: {
    top: 316,
    left: 4,
  },
  ellipseIcon: {
    top: 204,
  },
  chat1Child1: {
    top: 280,
  },
  picture811Icon: {
    left: 74,
    top: 346,
    width: 20,
    height: 20,
  },
  picture812Icon: {
    top: 346,
    width: 20,
    height: 20,
    left: 78,
  },
  pm: {
    left: 296,
    fontSize: FontSize.size_4xs,
    top: 187,
  },
  pm1: {
    top: 263,
    left: 296,
    fontSize: FontSize.size_4xs,
  },
  pm2: {
    top: 329,
    left: 296,
    fontSize: FontSize.size_4xs,
  },
  text: {
    left: 309,
    color: Color.colorGainsboro_100,
    fontSize: FontSize.size_sm,
    top: 204,
  },
  text1: {
    left: 309,
    color: Color.colorGainsboro_100,
    fontSize: FontSize.size_sm,
    top: 280,
  },
  chats: {
    top: 133,
    left: 18,
    fontSize: FontSize.size_6xl,
  },
  lineIcon: {
    top: 441,
    left: 16,
    width: 311,
    height: 0,
    position: "absolute",
  },
  chat1Child2: {
    top: 357,
  },
  chat1Child3: {
    top: 218,
  },
  chat1Child4: {
    top: 594,
    borderTopLeftRadius: Border.br_21xl,
    borderTopRightRadius: Border.br_21xl,
    height: 57,
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
  chats1: {
    left: 47,
  },
  calls: {
    left: 275,
  },
  chat1Child5: {
    top: 623,
    left: 62,
    height: 17,
  },
  youHave5: {
    top: 66,
    left: 59,
    fontSize: FontSize.size_sm,
  },
  messages: {
    top: 16,
    left: 58,
    fontSize: FontSize.size_11xl,
  },
  rectanglePressable: {
    top: 382,
  },
  spartansFastProgrammers: {
    top: 395,
  },
  yesPlease: {
    top: 416,
    left: 96,
    fontSize: FontSize.size_xs,
  },
  pm3: {
    top: 399,
    left: 298,
  },
  kingLeonidasIStatueInSparIcon: {
    top: 389,
    left: 9,
    width: 50,
    height: 52,
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  picture813Icon: {
    left: 78,
  },
  picture814Icon: {
    left: 74,
  },
  chat1: {
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

export default Chat1;
