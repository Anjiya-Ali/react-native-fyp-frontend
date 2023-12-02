import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Notifications = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notifications}>
      <View
        style={[styles.notificationsChild, styles.notificationsChildShadowBox1]}
      />
      <View style={[styles.notificationsItem, styles.notificationsShadowBox]} />
      <View
        style={[styles.notificationsInner, styles.notificationsShadowBox]}
      />
      <Image
        style={[styles.active3Icon, styles.iconLayout3]}
        resizeMode="cover"
        source={require("../assets/active-3.png")}
      />
      <Image
        style={[styles.active4Icon, styles.iconLayout3]}
        resizeMode="cover"
        source={require("../assets/active-3.png")}
      />
      <View
        style={[styles.rectangleView, styles.notificationsChildShadowBox1]}
      />
      <View
        style={[
          styles.notificationsChild1,
          styles.notificationsChildShadowBox1,
        ]}
      />
      <View style={styles.notificationsChild2} />
      <View style={styles.notificationsChild3} />
      <Pressable
        style={styles.hamburger}
        onPress={() => navigation.navigate("HomePage2")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/hamburger1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.icons8Arrow241}
        onPress={() => navigation.navigate("HomePage2")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icons8arrow24-1.png")}
        />
      </Pressable>
      <View style={styles.teacher0041} />
      <Text style={[styles.drMuhummadRafi, styles.drMuhummadRafiTypo]}>
        Dr. Muhummad Rafi
      </Text>
      <Text style={[styles.msRomashaKhursheed, styles.drMuhummadRafiTypo]}>
        Ms. Romasha Khursheed
      </Text>
      <Text style={[styles.drMuhummadAtif, styles.drUmerSaifTypo]}>
        Dr. Muhummad Atif Tahir
      </Text>
      <Text style={[styles.drUmerSaif, styles.drUmerSaifTypo]}>
        Dr. Umer Saif
      </Text>
      <Text style={[styles.hasBid, styles.hasTypo1]}>has bid</Text>
      <Text style={[styles.hasBidTo, styles.hasTypo1]}>
        has bid to your topic
      </Text>
      <Text style={[styles.toYourTopic, styles.hasTypo1]}>
        to your topic request for Algorithms.
      </Text>
      <Text style={[styles.requestForAlgorithms, styles.hasTypo1]}>
        request for Algorithms.
      </Text>
      <Text style={[styles.has, styles.hasTypo]}>{`has `}</Text>
      <Text style={[styles.messagedYou, styles.hasTypo]}>messaged you.</Text>
      <Image
        style={[styles.icon2, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/1695878498659-1.png")}
      />
      <Image
        style={[styles.icon3, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/1516807823802-21.png")}
      />
      <Image
        style={[styles.icon4, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/1678185219197-2.png")}
      />
      <Text style={[styles.pm, styles.textTypo]}>9:29 PM</Text>
      <Text style={[styles.pm1, styles.textTypo]}>9:29 PM</Text>
      <Text style={[styles.text, styles.textTypo]}>01-09-2023</Text>
      <Text style={[styles.text1, styles.textTypo]}>01-09-2023</Text>
      <Text style={[styles.text2, styles.textTypo]}>25-08-2023</Text>
      <Text style={[styles.text3, styles.textTypo]}>25-08-2023</Text>
      <Text style={[styles.pm2, styles.pm2Typo]}>9:29 PM</Text>
      <Text style={[styles.pm3, styles.pm2Typo]}>9:29 PM</Text>
      <Text style={[styles.youHave4, styles.todayTypo]}>
        You have 4 new notifications
      </Text>
      <Image
        style={styles.lineIcon}
        resizeMode="cover"
        source={require("../assets/line-12.png")}
      />
      <Text style={[styles.notifications1, styles.todayTypo]}>
        Notifications
      </Text>
      <View
        style={[styles.notificationsChild4, styles.notificationsChildShadowBox]}
      />
      <Text style={[styles.today, styles.todayTypo]}>Today</Text>
      <View
        style={[styles.notificationsChild5, styles.notificationsChildShadowBox]}
      />
      <Text style={[styles.lastWeek, styles.todayTypo]}>Last Week</Text>
      <Text
        style={[styles.hasAccepted, styles.hasTypo]}
      >{`has accepted `}</Text>
      <Text style={[styles.yourRequestNow, styles.hasTypo]}>
        your request. Now, you both can interact with each other.
      </Text>
      <Image
        style={[styles.active1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/active-1.png")}
      />
      <Image
        style={[styles.active2Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/active-1.png")}
      />
      <Image
        style={styles.profDr1Icon}
        resizeMode="cover"
        source={require("../assets/profdr-1.png")}
      />
      <Pressable
        style={[styles.yourPaymentForContainer, styles.yourContainerPosition]}
        onPress={() => navigation.navigate("Proposal6")}
      >
        <Text style={[styles.yourPaymentForJavaTutorin, styles.yourTypo]}>
          Your payment for “Java Tutoring” topic request to Dr. Muhammad Rafi
          has been accepted.
        </Text>
      </Pressable>
      <Pressable
        style={[styles.yourPaymentForContainer1, styles.yourContainerPosition]}
        onPress={() => navigation.navigate("Cart5")}
      >
        <Text style={[styles.yourPaymentForJavaTutorin1, styles.yourTypo]}>
          Your payment for “Java Tutoring”, “Probabilistic Model”, “Information
          Retrieval” courses has been accepted.
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationsChildShadowBox1: {
    height: 62,
    width: 360,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_8xs,
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
  notificationsShadowBox: {
    left: 1,
    height: 62,
    width: 360,
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
  iconLayout3: {
    height: 28,
    left: 21,
    width: 26,
    position: "absolute",
  },
  drMuhummadRafiTypo: {
    textAlign: "left",
    color: Color.colorSlateblue,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_sm,
    left: 74,
    position: "absolute",
  },
  drUmerSaifTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 78,
    textAlign: "left",
    color: Color.colorSlateblue,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  hasTypo1: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorSlateblue,
    position: "absolute",
  },
  hasTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorSlateblue,
    position: "absolute",
  },
  iconLayout1: {
    height: 58,
    width: 58,
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorSlateblue,
    position: "absolute",
  },
  pm2Typo: {
    left: 296,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorSlateblue,
    position: "absolute",
  },
  todayTypo: {
    color: Color.colorGainsboro_100,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  notificationsChildShadowBox: {
    height: 36,
    borderBottomRightRadius: Border.br_21xl,
    borderTopRightRadius: Border.br_21xl,
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
  iconLayout: {
    height: 25,
    width: 23,
    left: 43,
    position: "absolute",
  },
  yourContainerPosition: {
    left: 58,
    position: "absolute",
  },
  yourTypo: {
    width: 287,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorSlateblue,
  },
  notificationsChild: {
    top: 438,
  },
  notificationsItem: {
    top: 507,
  },
  notificationsInner: {
    top: 576,
  },
  active3Icon: {
    top: 524,
  },
  active4Icon: {
    top: 595,
  },
  rectangleView: {
    top: 369,
  },
  notificationsChild1: {
    top: 251,
  },
  notificationsChild2: {
    top: 168,
    height: 75,
    width: 360,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_8xs,
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
  notificationsChild3: {
    top: -594,
    left: -4,
    borderRadius: Border.br_21xl,
    width: 370,
    height: 700,
    backgroundColor: Color.colorSlateblue,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  hamburger: {
    left: 320,
    top: 24,
    width: 25,
    height: 16,
    position: "absolute",
  },
  icons8Arrow241: {
    left: 5,
    top: 20,
    height: 24,
    width: 26,
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
    top: 182,
  },
  msRomashaKhursheed: {
    top: 264,
  },
  drMuhummadAtif: {
    top: 379,
  },
  drUmerSaif: {
    top: 448,
  },
  hasBid: {
    left: 253,
    top: 379,
  },
  hasBidTo: {
    top: 450,
    left: 171,
  },
  toYourTopic: {
    top: 396,
    left: 78,
  },
  requestForAlgorithms: {
    top: 466,
    left: 79,
  },
  has: {
    top: 266,
    left: 253,
  },
  messagedYou: {
    top: 281,
    left: 74,
  },
  icon2: {
    top: 257,
    left: 2,
    height: 58,
    width: 58,
  },
  icon3: {
    top: 176,
    left: 2,
    height: 58,
    width: 58,
  },
  icon4: {
    top: 444,
    left: 4,
  },
  pm: {
    left: 297,
    fontSize: FontSize.size_4xs,
    top: 232,
  },
  pm1: {
    top: 295,
    left: 297,
    fontSize: FontSize.size_4xs,
  },
  text: {
    top: 232,
    left: 74,
  },
  text1: {
    top: 297,
    left: 74,
  },
  text2: {
    top: 484,
    left: 74,
  },
  text3: {
    top: 415,
    left: 78,
  },
  pm2: {
    top: 413,
  },
  pm3: {
    top: 482,
  },
  youHave4: {
    top: 56,
    left: 57,
    fontSize: FontSize.size_sm,
    color: Color.colorGainsboro_100,
  },
  lineIcon: {
    top: 441,
    left: 16,
    width: 311,
    height: 0,
    position: "absolute",
  },
  notifications1: {
    top: 15,
    left: 60,
    fontSize: FontSize.size_11xl,
  },
  notificationsChild4: {
    top: 121,
    width: 143,
    left: 0,
    height: 36,
    borderBottomRightRadius: Border.br_21xl,
    borderTopRightRadius: Border.br_21xl,
  },
  today: {
    top: 130,
    left: 81,
    fontSize: FontSize.size_sm,
    color: Color.colorGainsboro_100,
  },
  notificationsChild5: {
    top: 320,
    left: -3,
    width: 146,
  },
  lastWeek: {
    top: 330,
    left: 50,
    fontSize: FontSize.size_sm,
    color: Color.colorGainsboro_100,
  },
  hasAccepted: {
    top: 184,
    left: 211,
    width: 97,
  },
  yourRequestNow: {
    top: 199,
    left: 73,
    width: 277,
  },
  active1Icon: {
    top: 170,
  },
  active2Icon: {
    top: 253,
  },
  profDr1Icon: {
    top: 376,
    left: 10,
    width: 50,
    height: 50,
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  yourPaymentForJavaTutorin: {
    height: 35,
  },
  yourPaymentForContainer: {
    top: 523,
  },
  yourPaymentForJavaTutorin1: {
    height: 45,
  },
  yourPaymentForContainer1: {
    top: 588,
  },
  notifications: {
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

export default Notifications;
