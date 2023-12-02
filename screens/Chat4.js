import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Chat4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chat4}>
      <View style={styles.chat4Child} />
      <View style={styles.chat4Item} />
      <View style={styles.chat4Inner} />
      <View style={[styles.rectangleView, styles.chat4Child6Border]} />
      <View style={[styles.chat4Child1, styles.chat4ChildShadowBox]} />
      <View style={[styles.chat4Child2, styles.chat4ChildShadowBox]} />
      <Text style={[styles.spartansFastProgrammers, styles.messageTypo]}>
        Spartans FAST Programmers
      </Text>
      <Pressable
        style={[styles.picture1111, styles.pictureLayout]}
        onPress={() => navigation.navigate("GroupAudioCall")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/picture111-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.picture1112, styles.pictureLayout]}
        onPress={() => navigation.navigate("GroupVideoCall")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/picture111-2.png")}
        />
      </Pressable>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-7.png")}
      />
      <Text style={[styles.message, styles.messageTypo]}>Message |</Text>
      <Text style={[styles.pm, styles.pmTypo]}>9:29 PM</Text>
      <View style={[styles.chat4Child3, styles.chat4ChildBorder]} />
      <Text style={[styles.pm1, styles.pm1Typo]}>9:29 PM</Text>
      <Text style={[styles.pm2, styles.pm1Typo]}>9:29 PM</Text>
      <Text
        style={[styles.youMustBe, styles.muhummadTypo]}
      >{`You, must be its a big competition
Indeed!!!!!!`}</Text>
      <Text
        style={[styles.iAmGood, styles.muhummadTypo]}
      >{`I am good, what about this Sundays Rehearsal for Cup.
I am Up for that.`}</Text>
      <View style={styles.chat4Child4} />
      <Text style={[styles.pm3, styles.pm1Typo]}>9:29 PM</Text>
      <Text style={[styles.guysIAm, styles.guysIAmTypo]}>
        Guys, I am sorry my cousin Uzair is getting married, can’t come
      </Text>
      <View style={[styles.chat4Child5, styles.chat4ChildBorder]} />
      <Text style={[styles.pm4, styles.pm1Typo]}>9:29 PM</Text>
      <Text style={[styles.pleaseComeIsmail, styles.guysIAmTypo]}>
        Please Come, Ismail without you colors are empty in coding competition
      </Text>
      <Text
        style={[styles.heyGuysWhatsupppppp, styles.yesPleaseTypo]}
      >{`Hey Guys,
Whatsupppppp`}</Text>
      <Image
        style={styles.picture71Icon}
        resizeMode="cover"
        source={require("../assets/picture7-1.png")}
      />
      <Image
        style={[styles.picture61Icon, styles.pictureLayout]}
        resizeMode="cover"
        source={require("../assets/picture6-1.png")}
      />
      <Image
        style={styles.icon2}
        resizeMode="cover"
        source={require("../assets/222-1.png")}
      />
      <Image
        style={[styles.picture81Icon, styles.iconPosition1]}
        resizeMode="cover"
        source={require("../assets/picture8-1.png")}
      />
      <Image
        style={[styles.picture82Icon, styles.iconPosition1]}
        resizeMode="cover"
        source={require("../assets/picture8-1.png")}
      />
      <View style={[styles.chat4Child6, styles.chat4Child6Border]} />
      <Text style={[styles.pm5, styles.pmTypo]}>9:29 PM</Text>
      <Text style={[styles.yesPlease, styles.yesPleaseTypo]}>Yes Please</Text>
      <Image
        style={[styles.picture83Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/picture8-1.png")}
      />
      <Image
        style={[styles.picture84Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/picture8-1.png")}
      />
      <Image
        style={styles.kingLeonidasIStatueInSparIcon}
        resizeMode="cover"
        source={require("../assets/king-leonidas-i-statue-in-sparta-1.png")}
      />
      <Image
        style={[styles.icon3, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/1516807823802-24.png")}
      />
      <Image
        style={[styles.icon4, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/1516807823802-24.png")}
      />
      <Text style={[styles.anjiyaMuhummadAli, styles.muhummadTypo]}>
        Anjiya Muhummad Ali
      </Text>
      <Text style={[styles.ismailAhmedAnsari, styles.muhummadTypo]}>
        Ismail Ahmed Ansari
      </Text>
      <Text style={[styles.drMuhummadRafi, styles.muhummadTypo]}>
        Dr. Muhummad Rafi
      </Text>
      <Text style={[styles.drMuhummadRafi1, styles.muhummadTypo]}>
        Dr. Muhummad Rafi
      </Text>
      <Pressable
        style={styles.icons8Arrow241}
        onPress={() => navigation.navigate("Chat1")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icons8arrow24-11.png")}
        />
      </Pressable>
      <Image
        style={[styles.image1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-15.png")}
      />
      <Image
        style={[styles.image2Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-24.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chat4Child6Border: {
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_mini,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    position: "absolute",
  },
  chat4ChildShadowBox: {
    height: 25,
    borderColor: Color.colorSlateblue,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_8xs,
    width: 30,
    borderWidth: 1,
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
  messageTypo: {
    textAlign: "left",
    color: Color.colorGainsboro_100,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  pictureLayout: {
    height: 20,
    width: 20,
    position: "absolute",
  },
  pmTypo: {
    color: Color.colorSlateblue,
    fontSize: FontSize.size_6xs,
    fontFamily: FontFamily.interRegular,
    left: 299,
    textAlign: "left",
    position: "absolute",
  },
  chat4ChildBorder: {
    width: 214,
    left: 27,
    borderRadius: Border.br_mini,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    backgroundColor: Color.colorSlateblue,
    position: "absolute",
  },
  pm1Typo: {
    fontSize: FontSize.size_6xs,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorGainsboro_100,
    position: "absolute",
  },
  muhummadTypo: {
    fontSize: FontSize.size_3xs,
    left: 40,
    textAlign: "left",
    color: Color.colorGainsboro_100,
    position: "absolute",
  },
  guysIAmTypo: {
    width: 189,
    fontSize: FontSize.size_3xs,
    left: 40,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorGainsboro_100,
    position: "absolute",
  },
  yesPleaseTypo: {
    textAlign: "right",
    fontSize: FontSize.size_3xs,
    color: Color.colorSlateblue,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iconPosition1: {
    top: 143,
    height: 20,
    width: 20,
    position: "absolute",
  },
  iconPosition: {
    top: 403,
    height: 20,
    width: 20,
    position: "absolute",
  },
  iconLayout1: {
    height: 28,
    width: 28,
    borderRadius: Border.br_31xl,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    borderRadius: Border.br_29xl,
    left: 4,
    height: 20,
    width: 20,
    position: "absolute",
  },
  chat4Child: {
    top: -65,
    width: 360,
    height: 142,
    backgroundColor: Color.colorSlateblue,
    borderRadius: Border.br_21xl,
    left: 0,
    position: "absolute",
  },
  chat4Item: {
    left: 9,
    width: 288,
    height: 43,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    top: 590,
    backgroundColor: Color.colorSlateblue,
    borderRadius: Border.br_21xl,
    position: "absolute",
  },
  chat4Inner: {
    top: 165,
    left: 29,
    width: 184,
    height: 60,
    borderRadius: Border.br_mini,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    backgroundColor: Color.colorSlateblue,
    position: "absolute",
  },
  rectangleView: {
    top: 112,
    left: 234,
    width: 118,
    height: 49,
  },
  chat4Child1: {
    top: 46,
    left: 225,
  },
  chat4Child2: {
    top: 45,
    left: 106,
  },
  spartansFastProgrammers: {
    top: 14,
    left: 88,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  picture1111: {
    left: 111,
    top: 48,
    height: 20,
  },
  picture1112: {
    left: 230,
    top: 48,
    height: 20,
  },
  ellipseIcon: {
    width: 54,
    height: 50,
    left: 299,
    top: 590,
    position: "absolute",
  },
  message: {
    top: 603,
    left: 26,
    fontFamily: FontFamily.interRegular,
  },
  pm: {
    top: 149,
  },
  chat4Child3: {
    top: 230,
    height: 46,
  },
  pm1: {
    top: 261,
    left: 201,
  },
  pm2: {
    top: 209,
    left: 175,
  },
  youMustBe: {
    top: 244,
    width: 201,
    fontFamily: FontFamily.interRegular,
  },
  iAmGood: {
    top: 181,
    width: 173,
    fontFamily: FontFamily.interRegular,
  },
  chat4Child4: {
    top: 281,
    width: 223,
    left: 27,
    height: 50,
    borderRadius: Border.br_mini,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    backgroundColor: Color.colorSlateblue,
    position: "absolute",
  },
  pm3: {
    top: 313,
    left: 216,
  },
  guysIAm: {
    top: 296,
  },
  chat4Child5: {
    top: 336,
    height: 49,
  },
  pm4: {
    top: 370,
    left: 207,
  },
  pleaseComeIsmail: {
    top: 353,
  },
  heyGuysWhatsupppppp: {
    top: 119,
    left: 274,
  },
  picture71Icon: {
    top: 596,
    left: 313,
    height: 30,
    width: 30,
    position: "absolute",
  },
  picture61Icon: {
    top: 601,
    left: 267,
  },
  icon2: {
    top: 600,
    left: 241,
    height: 22,
    width: 20,
    position: "absolute",
  },
  picture81Icon: {
    left: 325,
  },
  picture82Icon: {
    left: 329,
  },
  chat4Child6: {
    top: 387,
    left: 282,
    width: 70,
    height: 36,
  },
  pm5: {
    top: 407,
  },
  yesPlease: {
    top: 394,
    left: 296,
  },
  picture83Icon: {
    left: 325,
  },
  picture84Icon: {
    left: 329,
  },
  kingLeonidasIStatueInSparIcon: {
    top: 52,
    left: 153,
    width: 60,
    height: 62,
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  icon3: {
    top: 232,
  },
  icon4: {
    top: 338,
  },
  anjiyaMuhummadAli: {
    top: 169,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  ismailAhmedAnsari: {
    top: 286,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  drMuhummadRafi: {
    top: 232,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  drMuhummadRafi1: {
    top: 341,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  icons8Arrow241: {
    left: 11,
    top: 15,
    width: 31,
    height: 29,
    position: "absolute",
  },
  image1Icon: {
    top: 284,
  },
  image2Icon: {
    top: 167,
  },
  chat4: {
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

export default Chat4;
