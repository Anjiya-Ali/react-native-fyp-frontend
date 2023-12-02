import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Proposal1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.proposal1}>
      <View style={[styles.proposal1Child, styles.proposal1Bg]} />
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
      <View style={[styles.proposal1Item, styles.proposal1Border]} />
      <View style={[styles.proposal1Inner, styles.proposal1ChildLayout]} />
      <View style={[styles.rectangleView, styles.proposal1ChildBorder]} />
      <View style={[styles.proposal1Child1, styles.proposal1ChildBorder]} />
      <View style={[styles.proposal1Child2, styles.proposal1ChildBorder]} />
      <View style={[styles.proposal1Child3, styles.proposal1ChildBorder]} />
      <View style={[styles.proposal1Child4, styles.proposal1ChildLayout]} />
      <View style={[styles.proposal1Child5, styles.proposal1ChildLayout]} />
      <View style={styles.teacher0041} />
      <Image
        style={styles.icon1}
        resizeMode="cover"
        source={require("../assets/1516807823802-11.png")}
      />
      <View style={[styles.proposal1Child6, styles.proposal1ChildShadowBox]} />
      <View style={[styles.proposal1Child7, styles.proposal1ChildShadowBox]} />
      <Text style={[styles.drMuhummadRafi, styles.pmFlexBox]}>
        Dr. Muhummad Rafi
      </Text>
      <Text style={[styles.online, styles.onlineTypo]}>Online</Text>
      <Image
        style={[styles.picture1111Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/picture111-1.png")}
      />
      <Image
        style={[styles.picture1112Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/picture111-2.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-7.png")}
      />
      <Text style={[styles.message, styles.onlineTypo]}>Message |</Text>
      <Text
        style={[styles.sorryFromMy, styles.sorryFromMyTypo]}
      >{`Sorry from my side
Besto, R/\fi`}</Text>
      <Text style={[styles.pm, styles.pmTypo]}>9:29 PM</Text>
      <Text style={[styles.pm1, styles.pmTypo]}>9:29 PM</Text>
      <Text style={[styles.pm2, styles.pmTypo]}>9:29 PM</Text>
      <Text style={[styles.pm3, styles.pm3Clr]}>9:29 PM</Text>
      <Text style={[styles.pm4, styles.pm3Clr]}>9:29 PM</Text>
      <Text style={[styles.pm5, styles.pm3Clr]}>9:29 PM</Text>
      <Text style={[styles.pm6, styles.pm3Clr]}>9:29 PM</Text>
      <Text
        style={[styles.definitelyIllHave, styles.sorryFromMyTypo]}
      >{`Definitely,
I’ll have a look.`}</Text>
      <Text
        style={[styles.wsalamHowMay, styles.sorryFromMyTypo]}
      >{`Wsalam, How may I help You?
I am a professional expert in Computer
Science.`}</Text>
      <Text
        style={[styles.okaySirI, styles.okaySirITypo]}
      >{`Okay Sir, I want to learn topics like parser,
context free grammar, digital signal processor and more.`}</Text>
      <Text
        style={[styles.butIHave, styles.okaySirITypo]}
      >{`But, I have a low budget of around 5$
per hour`}</Text>
      <Text
        style={[styles.sirIAm, styles.sirIAmTypo]}
      >{`Sir, I am a Computer Science Student,
I want tutoring about how compiler works`}</Text>
      <Text style={[styles.salamAreYou, styles.sirIAmTypo]}>{`Salam,
Are you available?`}</Text>
      <Image
        style={styles.picture71Icon}
        resizeMode="cover"
        source={require("../assets/picture7-1.png")}
      />
      <Image
        style={[styles.picture61Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/picture6-1.png")}
      />
      <Image
        style={styles.icon2}
        resizeMode="cover"
        source={require("../assets/222-1.png")}
      />
      <Image
        style={[styles.proposal1Child8, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Image
        style={[styles.picture81Icon, styles.iconPosition3]}
        resizeMode="cover"
        source={require("../assets/picture8-1.png")}
      />
      <Image
        style={[styles.picture82Icon, styles.iconPosition3]}
        resizeMode="cover"
        source={require("../assets/picture8-1.png")}
      />
      <Text style={[styles.pm7, styles.pm3Clr]}>9:29 PM</Text>
      <Image
        style={[styles.picture87Icon, styles.iconPosition2]}
        resizeMode="cover"
        source={require("../assets/picture8-1.png")}
      />
      <Image
        style={[styles.picture88Icon, styles.iconPosition2]}
        resizeMode="cover"
        source={require("../assets/picture8-1.png")}
      />
      <Image
        style={[styles.picture83Icon, styles.iconPosition1]}
        resizeMode="cover"
        source={require("../assets/picture8-1.png")}
      />
      <Image
        style={[styles.picture84Icon, styles.iconPosition1]}
        resizeMode="cover"
        source={require("../assets/picture8-1.png")}
      />
      <Image
        style={[styles.picture85Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/picture8-1.png")}
      />
      <Image
        style={[styles.picture86Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/picture8-1.png")}
      />
      <View style={styles.proposal1Child9} />
      <Text style={[styles.viewProfile, styles.pm3Clr]}>View Profile</Text>
      <Pressable
        style={styles.proposals}
        onPress={() => navigation.navigate("Proposal2")}
      >
        <Text style={[styles.proposals1, styles.pm3Clr]}>Proposals</Text>
      </Pressable>
      <Text style={[styles.more, styles.pm3Clr]}>More</Text>
      <Image
        style={styles.hamburgerIcon}
        resizeMode="cover"
        source={require("../assets/hamburger.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  proposal1Bg: {
    backgroundColor: Color.colorSlateblue,
    borderRadius: Border.br_21xl,
  },
  proposal1Border: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
  },
  proposal1ChildLayout: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorSlateblue,
    position: "absolute",
  },
  proposal1ChildBorder: {
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_mini,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    position: "absolute",
  },
  proposal1ChildShadowBox: {
    height: 25,
    borderColor: Color.colorSlateblue,
    borderRadius: Border.br_8xs,
    width: 30,
    backgroundColor: Color.colorGainsboro_200,
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
  pmFlexBox: {
    textAlign: "left",
    color: Color.colorGainsboro_100,
  },
  onlineTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorGainsboro_100,
    position: "absolute",
  },
  iconLayout: {
    height: 20,
    width: 20,
    position: "absolute",
  },
  ellipseIconPosition: {
    top: 590,
    position: "absolute",
  },
  sorryFromMyTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorGainsboro_100,
    position: "absolute",
  },
  pmTypo: {
    fontSize: FontSize.size_6xs,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  pm3Clr: {
    color: Color.colorSlateblue,
    textAlign: "left",
  },
  okaySirITypo: {
    width: 249,
    textAlign: "right",
    color: Color.colorSlateblue,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  sirIAmTypo: {
    textAlign: "right",
    color: Color.colorSlateblue,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iconPosition3: {
    top: 143,
    height: 20,
    width: 20,
    position: "absolute",
  },
  iconPosition2: {
    top: 453,
    height: 20,
    width: 20,
    position: "absolute",
  },
  iconPosition1: {
    top: 273,
    height: 20,
    width: 20,
    position: "absolute",
  },
  iconPosition: {
    top: 398,
    height: 20,
    width: 20,
    position: "absolute",
  },
  proposal1Child: {
    top: -65,
    left: 0,
    width: 360,
    height: 142,
    position: "absolute",
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
  proposal1Item: {
    left: 9,
    width: 288,
    height: 43,
    top: 590,
    position: "absolute",
    backgroundColor: Color.colorSlateblue,
    borderRadius: Border.br_21xl,
  },
  proposal1Inner: {
    top: 165,
    left: 4,
    width: 238,
    height: 61,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
  },
  rectangleView: {
    top: 345,
    left: 94,
    width: 258,
    height: 71,
  },
  proposal1Child1: {
    top: 418,
    left: 105,
    width: 247,
    height: 52,
  },
  proposal1Child2: {
    top: 240,
    width: 257,
    height: 54,
    left: 95,
  },
  proposal1Child3: {
    top: 112,
    left: 234,
    width: 118,
    height: 49,
  },
  proposal1Child4: {
    top: 301,
    left: 7,
    width: 139,
    height: 39,
  },
  proposal1Child5: {
    top: 474,
    left: 8,
    width: 129,
    height: 46,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
  },
  teacher0041: {
    top: 455,
    left: 183,
    width: 147,
    height: 153,
    position: "absolute",
  },
  icon1: {
    left: 148,
    borderRadius: Border.br_31xl,
    width: 68,
    height: 68,
    top: 45,
    position: "absolute",
  },
  proposal1Child6: {
    top: 46,
    left: 225,
  },
  proposal1Child7: {
    left: 106,
    top: 45,
  },
  drMuhummadRafi: {
    top: 14,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_sm,
    left: 114,
    position: "absolute",
  },
  online: {
    top: 32,
    left: 167,
    fontSize: FontSize.size_3xs,
  },
  picture1111Icon: {
    left: 111,
    top: 48,
    height: 20,
  },
  picture1112Icon: {
    left: 230,
    top: 48,
    height: 20,
  },
  ellipseIcon: {
    width: 54,
    height: 50,
    left: 299,
  },
  message: {
    top: 603,
    left: 26,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
  },
  sorryFromMy: {
    top: 482,
    left: 19,
  },
  pm: {
    top: 505,
    left: 103,
    textAlign: "left",
    color: Color.colorGainsboro_100,
  },
  pm1: {
    top: 329,
    left: 111,
    textAlign: "left",
    color: Color.colorGainsboro_100,
  },
  pm2: {
    top: 210,
    left: 206,
    textAlign: "left",
    color: Color.colorGainsboro_100,
  },
  pm3: {
    top: 149,
    fontSize: FontSize.size_6xs,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    left: 299,
  },
  pm4: {
    top: 279,
    left: 295,
    fontSize: FontSize.size_6xs,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  pm5: {
    top: 403,
    left: 293,
    fontSize: FontSize.size_6xs,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  pm6: {
    top: 452,
    fontSize: FontSize.size_6xs,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    left: 114,
  },
  definitelyIllHave: {
    top: 307,
    left: 21,
  },
  wsalamHowMay: {
    top: 175,
    left: 17,
  },
  okaySirI: {
    top: 357,
    left: 97,
  },
  butIHave: {
    top: 428,
    left: 95,
  },
  sirIAm: {
    top: 246,
    left: 110,
  },
  salamAreYou: {
    top: 119,
    left: 244,
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
  proposal1Child8: {
    top: 95,
    left: 190,
  },
  picture81Icon: {
    left: 325,
  },
  picture82Icon: {
    left: 329,
  },
  pm7: {
    top: 459,
    left: 298,
    fontSize: FontSize.size_6xs,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  picture87Icon: {
    left: 328,
  },
  picture88Icon: {
    left: 332,
  },
  picture83Icon: {
    left: 323,
  },
  picture84Icon: {
    left: 327,
  },
  picture85Icon: {
    left: 323,
  },
  picture86Icon: {
    left: 327,
  },
  proposal1Child9: {
    top: 50,
    left: 245,
    borderRadius: Border.br_3xs,
    borderColor: Color.labelColorLightPrimary,
    width: 97,
    height: 86,
    backgroundColor: Color.colorGainsboro_200,
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
  viewProfile: {
    top: 58,
    left: 251,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  proposals1: {
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_sm,
  },
  proposals: {
    left: 252,
    top: 82,
    position: "absolute",
  },
  more: {
    top: 107,
    left: 253,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  hamburgerIcon: {
    top: 20,
    left: 314,
    width: 25,
    height: 16,
    position: "absolute",
  },
  proposal1: {
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

export default Proposal1;
