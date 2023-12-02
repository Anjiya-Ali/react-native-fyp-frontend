import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import PrivacyPolicyContainer from "../components/PrivacyPolicyContainer";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Proposal13 = () => {
  return (
    <View style={styles.proposal13}>
      <View style={[styles.proposal13Child, styles.proposal13Layout]} />
      <Image
        style={styles.icons8Arrow241}
        resizeMode="cover"
        source={require("../assets/icons8arrow24-11.png")}
      />
      <View style={[styles.proposal13Item, styles.proposal13Border]} />
      <View style={[styles.proposal13Inner, styles.proposal13ChildLayout]} />
      <View style={[styles.rectangleView, styles.proposal13ChildBorder]} />
      <View style={[styles.proposal13Child1, styles.proposal13ChildBorder]} />
      <View style={[styles.proposal13Child2, styles.proposal13ChildBorder]} />
      <View style={[styles.proposal13Child3, styles.proposal13ChildBorder]} />
      <View style={[styles.proposal13Child4, styles.proposal13ChildLayout]} />
      <View style={[styles.proposal13Child5, styles.proposal13Child5Layout]} />
      <View style={styles.teacher0041} />
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/1516807823802-11.png")}
      />
      <View
        style={[styles.proposal13Child6, styles.proposal13ChildShadowBox]}
      />
      <View
        style={[styles.proposal13Child7, styles.proposal13ChildShadowBox]}
      />
      <Text style={[styles.drMuhummadRafi, styles.pmFlexBox]}>
        Dr. Muhummad Rafi
      </Text>
      <Text style={[styles.online, styles.onlineTypo]}>Online</Text>
      <Image
        style={[styles.picture1111Icon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/picture111-1.png")}
      />
      <Image
        style={[styles.picture1112Icon, styles.iconLayout2]}
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
        style={[styles.picture71Icon, styles.picture71IconLayout]}
        resizeMode="cover"
        source={require("../assets/picture7-1.png")}
      />
      <Image
        style={[styles.picture61Icon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/picture6-1.png")}
      />
      <Image
        style={styles.icon1}
        resizeMode="cover"
        source={require("../assets/222-1.png")}
      />
      <Image
        style={[styles.proposal13Child8, styles.iconLayout2]}
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
        style={[styles.picture83Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/picture8-1.png")}
      />
      <Image
        style={[styles.picture84Icon, styles.iconLayout]}
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
      <Text style={[styles.viewProfile, styles.pm3Clr]}>View Profile</Text>
      <Text style={[styles.proposals, styles.pm3Clr]}>Proposals</Text>
      <Text style={[styles.more, styles.pm3Clr]}>More</Text>
      <Image
        style={styles.hamburgerIcon}
        resizeMode="cover"
        source={require("../assets/hamburger.png")}
      />
      <View style={[styles.menu, styles.menuPosition]}>
        <View style={[styles.menuChild, styles.menuPosition]} />
        <PrivacyPolicyContainer />
        <Text style={[styles.myCourses, styles.myPostsTypo]}>My Courses</Text>
        <Text style={[styles.myPosts, styles.myPostsTypo]}>My Posts</Text>
        <Text style={[styles.elearningPage, styles.myPostsTypo]}>
          eLearning Page
        </Text>
        <Image
          style={styles.icons8Cart241}
          resizeMode="cover"
          source={require("../assets/icons8cart24-1.png")}
        />
        <View style={[styles.icons8Chats241, styles.icons8Chats241Position]} />
        <Image
          style={styles.icons8Chats242}
          resizeMode="cover"
          source={require("../assets/icons8chats24-2.png")}
        />
        <Image
          style={styles.icons8Sessions321}
          resizeMode="cover"
          source={require("../assets/icons8sessions32-1.png")}
        />
        <Text style={[styles.upcomingSessions, styles.myPostsTypo]}>
          Upcoming Sessions
        </Text>
        <Text style={styles.cart}>Cart</Text>
        <Text style={[styles.scheduledMeetings, styles.myPostsTypo]}>
          Scheduled Meetings
        </Text>
        <Image
          style={[styles.icons8Schedule501, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/icons8schedule50-1.png")}
        />
        <Image
          style={[styles.icons8Connection801, styles.proposal13Child5Layout]}
          resizeMode="cover"
          source={require("../assets/icons8connection80-1.png")}
        />
        <Image
          style={[styles.icons8Myspace3501, styles.icons8Layout]}
          resizeMode="cover"
          source={require("../assets/icons8myspace350-1.png")}
        />
        <Image
          style={styles.icons8Topic241}
          resizeMode="cover"
          source={require("../assets/icons8topic24-1.png")}
        />
        <Image
          style={[styles.icons8Course5011, styles.icons8Layout]}
          resizeMode="cover"
          source={require("../assets/icons8course50-1-1.png")}
        />
        <Image
          style={styles.icons8Elearning641}
          resizeMode="cover"
          source={require("../assets/icons8elearning64-1.png")}
        />
        <Text style={[styles.myChats, styles.myPostsTypo]}>My Chats</Text>
        <Text style={[styles.myConnections, styles.myPostsTypo]}>
          My Connections
        </Text>
        <Text style={[styles.myCommunities, styles.myPostsTypo]}>
          My Communities
        </Text>
        <View style={[styles.menuItem, styles.menuPosition]} />
        <Image
          style={styles.mine21Icon}
          resizeMode="cover"
          source={require("../assets/mine2-1.png")}
        />
        <Text style={styles.anjiyaAli}>ANJIYA ALI</Text>
        <Image
          style={[styles.icons8Cross3011, styles.picture71IconLayout]}
          resizeMode="cover"
          source={require("../assets/icons8cross30-1-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  proposal13Layout: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorSlateblue,
  },
  proposal13Border: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
  },
  proposal13ChildLayout: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorSlateblue,
  },
  proposal13ChildBorder: {
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_mini,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    position: "absolute",
  },
  proposal13Child5Layout: {
    height: 46,
    position: "absolute",
  },
  proposal13ChildShadowBox: {
    height: 25,
    width: 30,
    borderColor: Color.colorSlateblue,
    borderRadius: Border.br_8xs,
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
    position: "absolute",
  },
  onlineTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorGainsboro_100,
    position: "absolute",
  },
  iconLayout2: {
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
  },
  pm3Clr: {
    color: Color.colorSlateblue,
    textAlign: "left",
    position: "absolute",
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
  picture71IconLayout: {
    height: 30,
    width: 30,
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
  iconLayout1: {
    left: 323,
    height: 20,
    width: 20,
  },
  iconLayout: {
    left: 327,
    height: 20,
    width: 20,
  },
  iconPosition: {
    top: 398,
    position: "absolute",
  },
  menuPosition: {
    top: 0,
    position: "absolute",
  },
  myPostsTypo: {
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: 359,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  icons8Chats241Position: {
    left: 0,
    position: "absolute",
  },
  icons8Layout: {
    width: 39,
    left: 309,
    height: 31,
    position: "absolute",
  },
  proposal13Child: {
    top: -65,
    width: 360,
    height: 142,
    backgroundColor: Color.colorSlateblue,
    left: 0,
    position: "absolute",
  },
  icons8Arrow241: {
    top: 18,
    left: 11,
    width: 31,
    height: 29,
    position: "absolute",
  },
  proposal13Item: {
    left: 9,
    width: 288,
    height: 43,
    top: 590,
    position: "absolute",
    backgroundColor: Color.colorSlateblue,
    borderRadius: Border.br_21xl,
  },
  proposal13Inner: {
    top: 165,
    left: 4,
    width: 238,
    height: 61,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    position: "absolute",
  },
  rectangleView: {
    top: 345,
    left: 94,
    width: 258,
    height: 71,
  },
  proposal13Child1: {
    top: 418,
    left: 105,
    width: 247,
    height: 52,
  },
  proposal13Child2: {
    top: 240,
    width: 257,
    height: 54,
    left: 95,
  },
  proposal13Child3: {
    top: 112,
    left: 234,
    width: 118,
    height: 49,
  },
  proposal13Child4: {
    top: 301,
    left: 7,
    width: 139,
    height: 39,
    position: "absolute",
  },
  proposal13Child5: {
    top: 474,
    left: 8,
    width: 129,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorSlateblue,
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
  icon: {
    left: 148,
    width: 68,
    height: 68,
    borderRadius: Border.br_31xl,
    top: 45,
    position: "absolute",
  },
  proposal13Child6: {
    top: 46,
    left: 225,
  },
  proposal13Child7: {
    left: 106,
    top: 45,
    height: 25,
    width: 30,
    borderColor: Color.colorSlateblue,
    borderRadius: Border.br_8xs,
  },
  drMuhummadRafi: {
    top: 14,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_sm,
    left: 114,
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
    position: "absolute",
  },
  pm1: {
    top: 329,
    left: 111,
    textAlign: "left",
    color: Color.colorGainsboro_100,
    position: "absolute",
  },
  pm2: {
    top: 210,
    left: 206,
    textAlign: "left",
    color: Color.colorGainsboro_100,
    position: "absolute",
  },
  pm3: {
    top: 149,
    fontSize: FontSize.size_6xs,
    fontFamily: FontFamily.interRegular,
    left: 299,
  },
  pm4: {
    top: 279,
    left: 295,
    fontSize: FontSize.size_6xs,
    fontFamily: FontFamily.interRegular,
  },
  pm5: {
    top: 403,
    left: 293,
    fontSize: FontSize.size_6xs,
    fontFamily: FontFamily.interRegular,
  },
  pm6: {
    top: 452,
    fontSize: FontSize.size_6xs,
    fontFamily: FontFamily.interRegular,
    left: 114,
  },
  definitelyIllHave: {
    left: 21,
    top: 307,
  },
  wsalamHowMay: {
    top: 175,
    left: 17,
  },
  okaySirI: {
    left: 97,
    top: 357,
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
    left: 244,
    top: 119,
  },
  picture71Icon: {
    top: 596,
    left: 313,
  },
  picture61Icon: {
    top: 601,
    left: 267,
  },
  icon1: {
    top: 600,
    left: 241,
    height: 22,
    width: 20,
    position: "absolute",
  },
  proposal13Child8: {
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
  },
  picture87Icon: {
    left: 328,
  },
  picture88Icon: {
    left: 332,
  },
  picture83Icon: {
    top: 273,
    position: "absolute",
  },
  picture84Icon: {
    top: 273,
    position: "absolute",
  },
  picture85Icon: {
    left: 323,
    height: 20,
    width: 20,
  },
  picture86Icon: {
    left: 327,
    height: 20,
    width: 20,
  },
  viewProfile: {
    top: 58,
    left: 251,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_sm,
  },
  proposals: {
    top: 82,
    left: 252,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_sm,
  },
  more: {
    top: 107,
    left: 253,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_sm,
  },
  hamburgerIcon: {
    top: 20,
    left: 314,
    width: 25,
    height: 16,
    position: "absolute",
  },
  menuChild: {
    width: 281,
    left: 299,
    backgroundColor: Color.colorGainsboro_200,
    top: 0,
    height: 640,
  },
  myCourses: {
    top: 123,
  },
  myPosts: {
    top: 216,
  },
  elearningPage: {
    top: 357,
  },
  icons8Cart241: {
    width: 28,
    height: 31,
    left: 318,
    top: 494,
    position: "absolute",
  },
  icons8Chats241: {
    top: 134,
    width: 24,
    height: 24,
  },
  icons8Chats242: {
    top: 164,
    left: 315,
    width: 26,
    height: 36,
    position: "absolute",
  },
  icons8Sessions321: {
    top: 446,
    left: 311,
    width: 38,
    height: 32,
    position: "absolute",
  },
  upcomingSessions: {
    top: 451,
  },
  cart: {
    top: 494,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    left: 359,
    textAlign: "left",
    position: "absolute",
  },
  scheduledMeetings: {
    top: 404,
  },
  icons8Schedule501: {
    width: 37,
    height: 37,
    left: 313,
  },
  icons8Connection801: {
    top: 252,
    left: 303,
    width: 44,
  },
  icons8Myspace3501: {
    top: 307,
  },
  icons8Topic241: {
    top: 217,
    left: 312,
    width: 34,
    height: 26,
    position: "absolute",
  },
  icons8Course5011: {
    top: 119,
  },
  icons8Elearning641: {
    top: 346,
    width: 45,
    height: 45,
    left: 309,
    position: "absolute",
  },
  myChats: {
    top: 170,
  },
  myConnections: {
    top: 263,
  },
  myCommunities: {
    top: 310,
  },
  menuItem: {
    width: 280,
    height: 104,
    left: 299,
    backgroundColor: Color.colorSlateblue,
  },
  mine21Icon: {
    top: 21,
    width: 62,
    height: 66,
    left: 318,
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  anjiyaAli: {
    top: 42,
    left: 398,
    color: Color.colorWhite,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  icons8Cross3011: {
    top: 39,
    left: 536,
  },
  menu: {
    left: -220,
    width: 580,
    height: 640,
  },
  proposal13: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 640,
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

export default Proposal13;
