import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const CommunitiesE2 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.communitiesE2, styles.communitiesShadowBox]}>
      <View
        style={[styles.communitiesE2Child, styles.communitiesChildShadowBox3]}
      />
      <View style={[styles.communitiesE2Item, styles.communitiesBg]} />
      <View style={[styles.communitiesE2Inner, styles.communitiesBg]} />
      <Text style={[styles.courses, styles.communitiesTypo]}>Courses</Text>
      <Text style={[styles.teachers, styles.communitiesTypo]}>Teachers</Text>
      <Text style={[styles.communities, styles.communitiesTypo]}>
        Communities
      </Text>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-15.png")}
      />
      <Text style={[styles.communities1, styles.communitiesTypo]}>
        Communities
      </Text>
      <View style={styles.rectangleView} />
      <Text style={styles.search}>Search</Text>
      <Image
        style={styles.ask1Icon}
        resizeMode="cover"
        source={require("../assets/ask-1.png")}
      />
      <Text style={[styles.dataScienceEnthusiasts, styles.dataTypo]}>
        Data Science Enthusiasts
      </Text>
      <Text style={[styles.members, styles.membersTypo1]}>110 Members</Text>
      <Text style={[styles.createdByInsha, styles.membersTypo1]}>
        Created by Insha Samnani
      </Text>
      <Image
        style={[styles.lo1Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/lo-1.png")}
      />
      <View
        style={[styles.communitiesE2Child1, styles.communitiesChildShadowBox2]}
      />
      <Image
        style={[styles.pythonLogoNotext1Icon, styles.pythonIconLayout]}
        resizeMode="cover"
        source={require("../assets/pythonlogonotext-1.png")}
      />
      <View
        style={[styles.communitiesE2Child2, styles.communitiesChildShadowBox3]}
      />
      <Text style={[styles.programmingWizards, styles.dataTypo]}>
        Programming Wizards
      </Text>
      <Text style={[styles.members1, styles.membersTypo1]}>200 Members</Text>
      <Text style={[styles.createdByAnjiya, styles.membersTypo1]}>
        Created by Anjiya Ali
      </Text>
      <Image
        style={[styles.lo7Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/lo-1.png")}
      />
      <View
        style={[styles.communitiesE2Child3, styles.communitiesChildShadowBox2]}
      />
      <Image
        style={[styles.jpegaiHome1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/jpegaihome-1.png")}
      />
      <View
        style={[styles.communitiesE2Child4, styles.communitiesChildShadowBox1]}
      />
      <Text style={[styles.machineBots, styles.spartansTypo]}>
        Machine Bots
      </Text>
      <Text style={[styles.members2, styles.membersTypo]}>9 Members</Text>
      <Text style={[styles.createdByIsmail, styles.createdTypo]}>
        Created by Ismail Ansari
      </Text>
      <Image
        style={[styles.lo1Icon1, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/lo-1.png")}
      />
      <View
        style={[styles.communitiesE2Child5, styles.communitiesChildShadowBox]}
      />
      <View
        style={[styles.communitiesE2Child6, styles.communitiesChildShadowBox1]}
      />
      <Text style={[styles.spartans, styles.spartansTypo]}>Spartans</Text>
      <Text style={[styles.members3, styles.membersTypo]}>1000 Members</Text>
      <Text style={[styles.createdByInsha1, styles.createdTypo]}>
        Created by Insha Samnani
      </Text>
      <Image
        style={[styles.lo7Icon1, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/lo-1.png")}
      />
      <View
        style={[styles.communitiesE2Child7, styles.communitiesChildShadowBox]}
      />
      <View
        style={[styles.communitiesE2Child8, styles.communitiesChildShadowBox3]}
      />
      <Text style={[styles.dataScienceEnthusiasts1, styles.dataTypo]}>
        Data Science Enthusiasts
      </Text>
      <Text style={[styles.members4, styles.membersTypo1]}>110 Members</Text>
      <Text style={[styles.createdByInsha2, styles.membersTypo1]}>
        Created by Insha Samnani
      </Text>
      <Image
        style={[styles.lo8Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/lo-1.png")}
      />
      <View
        style={[styles.communitiesE2Child9, styles.communitiesChildShadowBox2]}
      />
      <Image
        style={[styles.pythonLogoNotext2Icon, styles.pythonIconLayout]}
        resizeMode="cover"
        source={require("../assets/pythonlogonotext-1.png")}
      />
      <Image
        style={[styles.thinks8dd35e85fill1366x700Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/thinks8dd35e85fill1366x700formatjpeg-1.png")}
      />
      <Image
        style={styles.vectorSignSpartanHelmet260Icon}
        resizeMode="cover"
        source={require("../assets/vectorsignspartanhelmet260nw382914535-1.png")}
      />
      <Pressable
        style={styles.icons8Arrow241}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icons8arrow24-11.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  communitiesShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  communitiesChildShadowBox3: {
    height: 100,
    width: 157,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGainsboro_200,
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
  communitiesBg: {
    backgroundColor: Color.colorSlateblue,
    position: "absolute",
  },
  communitiesTypo: {
    textAlign: "left",
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  dataTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    color: Color.colorSlateblue,
    textAlign: "left",
    position: "absolute",
  },
  membersTypo1: {
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_4xs,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout1: {
    height: 20,
    width: 20,
    position: "absolute",
  },
  communitiesChildShadowBox2: {
    height: 62,
    width: 64,
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
    backgroundColor: Color.colorWhite,
  },
  pythonIconLayout: {
    height: 44,
    left: 126,
    width: 40,
    position: "absolute",
  },
  iconLayout: {
    height: 42,
    width: 40,
    position: "absolute",
  },
  communitiesChildShadowBox1: {
    top: 274,
    height: 100,
    width: 157,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
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
  spartansTypo: {
    top: 280,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    color: Color.colorSlateblue,
    textAlign: "left",
    position: "absolute",
  },
  membersTypo: {
    top: 312,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_4xs,
    textAlign: "left",
    position: "absolute",
  },
  createdTypo: {
    top: 297,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_4xs,
    textAlign: "left",
    position: "absolute",
  },
  iconPosition: {
    top: 351,
    height: 20,
    width: 20,
    position: "absolute",
  },
  communitiesChildShadowBox: {
    top: 328,
    height: 62,
    width: 64,
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
    backgroundColor: Color.colorWhite,
  },
  communitiesE2Child: {
    left: 14,
    top: 142,
    height: 100,
    width: 157,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
  },
  communitiesE2Item: {
    top: -594,
    left: -4,
    borderRadius: Border.br_21xl,
    width: 370,
    height: 724,
  },
  communitiesE2Inner: {
    top: 596,
    left: 0,
    borderTopLeftRadius: Border.br_21xl,
    borderTopRightRadius: Border.br_21xl,
    width: 360,
    height: 45,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  courses: {
    left: 32,
    fontSize: FontSize.bodyBold_size,
    textAlign: "left",
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    top: 602,
  },
  teachers: {
    left: 128,
    fontSize: FontSize.bodyBold_size,
    textAlign: "left",
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    top: 602,
  },
  communities: {
    top: 603,
    left: 228,
    fontSize: FontSize.bodyBold_size,
    textAlign: "left",
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  ellipseIcon: {
    top: 626,
    left: 268,
    height: 14,
    width: 20,
    position: "absolute",
  },
  communities1: {
    top: 16,
    left: 63,
    fontSize: FontSize.size_11xl,
  },
  rectangleView: {
    top: 67,
    left: 36,
    borderRadius: Border.br_xl,
    width: 290,
    height: 43,
    backgroundColor: Color.colorGainsboro_200,
    position: "absolute",
  },
  search: {
    top: 77,
    left: 54,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorSlateblue,
    textAlign: "left",
    position: "absolute",
  },
  ask1Icon: {
    top: 74,
    left: 278,
    width: 30,
    height: 30,
    position: "absolute",
  },
  dataScienceEnthusiasts: {
    width: 136,
    left: 20,
    top: 148,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
  },
  members: {
    top: 194,
    left: 20,
  },
  createdByInsha: {
    top: 179,
    left: 20,
  },
  lo1Icon: {
    left: 21,
    top: 219,
    height: 20,
  },
  communitiesE2Child1: {
    left: 113,
    top: 196,
    height: 62,
    width: 64,
  },
  pythonLogoNotext1Icon: {
    top: 207,
  },
  communitiesE2Child2: {
    left: 189,
    top: 142,
    height: 100,
    width: 157,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
  },
  programmingWizards: {
    left: 195,
    top: 148,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
  },
  members1: {
    top: 180,
    left: 195,
  },
  createdByAnjiya: {
    top: 165,
    left: 195,
  },
  lo7Icon: {
    left: 196,
    top: 219,
    height: 20,
  },
  communitiesE2Child3: {
    left: 288,
    top: 196,
    height: 62,
    width: 64,
  },
  jpegaiHome1Icon: {
    left: 300,
    top: 207,
  },
  communitiesE2Child4: {
    left: 14,
  },
  machineBots: {
    left: 20,
  },
  members2: {
    left: 20,
  },
  createdByIsmail: {
    left: 20,
  },
  lo1Icon1: {
    left: 21,
  },
  communitiesE2Child5: {
    left: 113,
  },
  communitiesE2Child6: {
    left: 189,
  },
  spartans: {
    left: 195,
  },
  members3: {
    left: 195,
  },
  createdByInsha1: {
    left: 195,
  },
  lo7Icon1: {
    left: 196,
  },
  communitiesE2Child7: {
    left: 288,
  },
  communitiesE2Child8: {
    top: 412,
    left: 14,
  },
  dataScienceEnthusiasts1: {
    top: 418,
    width: 106,
    left: 20,
  },
  members4: {
    top: 462,
    left: 19,
  },
  createdByInsha2: {
    top: 448,
    left: 18,
  },
  lo8Icon: {
    top: 489,
    left: 21,
  },
  communitiesE2Child9: {
    top: 466,
    left: 113,
  },
  pythonLogoNotext2Icon: {
    top: 477,
  },
  thinks8dd35e85fill1366x700Icon: {
    top: 339,
    left: 125,
  },
  vectorSignSpartanHelmet260Icon: {
    top: 340,
    left: 301,
    height: 38,
    width: 40,
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
  communitiesE2: {
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
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

export default CommunitiesE2;
