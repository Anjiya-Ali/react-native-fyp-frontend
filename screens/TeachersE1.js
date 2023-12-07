import * as React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const TeachersE1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.teachersE1, styles.teachersShadowBox1]}>
      <View style={[styles.teachersE1Child, styles.teachersShadowBox]} />
      <View style={[styles.teachersE1Item, styles.teachersShadowBox]} />
      <View style={[styles.teachersE1Inner, styles.rectangleViewShadowBox]} />
      <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
      <View style={[styles.teachersE1Child1, styles.teachersChildShadowBox]} />
      <View style={[styles.teachersE1Child2, styles.teachersChildShadowBox]} />
      <View style={[styles.teachersE1Child3, styles.teachersChildBg]} />
      <Image
        style={[styles.lineIcon, styles.lineIconLayout]}
        resizeMode="cover"
        source={require("../assets/line-121.png")}
      />
      <View style={[styles.teachersE1Child4, styles.teachersChildBg]} />
      <Text style={[styles.courses, styles.teachersTypo]}>Courses</Text>
      <Text style={[styles.teachers, styles.teachersTypo]}>Teachers</Text>
      <Text style={[styles.communities, styles.teachersTypo]}>Communities</Text>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-15.png")}
      />
      <Text style={[styles.teachers1, styles.teachersTypo]}>Teachers</Text>
      <View style={styles.teachersE1Child5} />
      <Text style={styles.search}>Search</Text>
      <Image
        style={styles.ask1Icon}
        resizeMode="cover"
        source={require("../assets/ask-1.png")}
      />
      <Image
        style={[styles.teachersE1Child6, styles.lineIconLayout]}
        resizeMode="cover"
        source={require("../assets/line-12.png")}
      />
      <Image
        style={[styles.icon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/1516807823802-3.png")}
      />
      <Image
        style={[styles.icon1, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/1516807823802-3.png")}
      />
      <Image
        style={[styles.icon2, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/1695878498659-2.png")}
      />
      <Image
        style={[styles.icon3, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/1678185219197-3.png")}
      />
      <Image
        style={[styles.icon4, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/1678185219197-3.png")}
      />
      <Image
        style={styles.profDr2Icon}
        resizeMode="cover"
        source={require("../assets/profdr-2.png")}
      />
      <Text style={[styles.drMuhummadRafi, styles.muhummadTypo]}>
        Dr. Muhummad Rafi
      </Text>
      <Text style={[styles.drMuhummadRafi1, styles.muhummadTypo]}>
        Dr. Muhummad Rafi
      </Text>
      <Text style={[styles.drUmerSaif, styles.drUmerSaifTypo]}>
        Dr. Umer Saif
      </Text>
      <Text style={[styles.drUmerSaif1, styles.muhummadTypo]}>
        Dr. Umer Saif
      </Text>
      <Text style={[styles.drAtifTahir, styles.drUmerSaifTypo]}>
        Dr. Atif Tahir
      </Text>
      <Text style={[styles.romashaKhursheed, styles.muhummadTypo]}>
        Romasha Khursheed
      </Text>
      <Image
        style={[styles.starIcon, styles.teachersChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-41.png")}
      />
      <Image
        style={[styles.teachersE1Child7, styles.teachersChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-41.png")}
      />
      <Image
        style={[styles.teachersE1Child8, styles.teachersChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-41.png")}
      />
      <Image
        style={[styles.teachersE1Child9, styles.teachersChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-41.png")}
      />
      <Image
        style={[styles.teachersE1Child10, styles.teachersChildPosition5]}
        resizeMode="cover"
        source={require("../assets/star-8.png")}
      />
      <Image
        style={[styles.teachersE1Child11, styles.teachersChildPosition4]}
        resizeMode="cover"
        source={require("../assets/star-41.png")}
      />
      <Image
        style={[styles.teachersE1Child12, styles.teachersChildPosition3]}
        resizeMode="cover"
        source={require("../assets/star-41.png")}
      />
      <Image
        style={[styles.teachersE1Child13, styles.teachersChildPosition2]}
        resizeMode="cover"
        source={require("../assets/star-41.png")}
      />
      <Image
        style={[styles.teachersE1Child14, styles.teachersChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-41.png")}
      />
      <Image
        style={[styles.teachersE1Child15, styles.teachersChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-8.png")}
      />
      <Image
        style={[styles.teachersE1Child16, styles.teachersChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-41.png")}
      />
      <Image
        style={[styles.teachersE1Child17, styles.teachersChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-41.png")}
      />
      <Image
        style={[styles.teachersE1Child18, styles.teachersChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-41.png")}
      />
      <Image
        style={[styles.teachersE1Child19, styles.teachersChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-41.png")}
      />
      <Image
        style={[styles.teachersE1Child20, styles.teachersChildPosition5]}
        resizeMode="cover"
        source={require("../assets/star-8.png")}
      />
      <Image
        style={[styles.teachersE1Child21, styles.teachersChildPosition1]}
        resizeMode="cover"
        source={require("../assets/star-8.png")}
      />
      <Image
        style={[styles.teachersE1Child22, styles.teachersChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-41.png")}
      />
      <Image
        style={[styles.teachersE1Child23, styles.teachersChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-41.png")}
      />
      <Image
        style={[styles.teachersE1Child24, styles.teachersChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-41.png")}
      />
      <Image
        style={[styles.teachersE1Child25, styles.teachersChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-41.png")}
      />
      <Image
        style={[styles.teachersE1Child26, styles.teachersChildPosition1]}
        resizeMode="cover"
        source={require("../assets/star-41.png")}
      />
      <Image
        style={[styles.teachersE1Child27, styles.teachersChildPosition1]}
        resizeMode="cover"
        source={require("../assets/star-41.png")}
      />
      <Image
        style={[styles.teachersE1Child28, styles.teachersChildPosition1]}
        resizeMode="cover"
        source={require("../assets/star-41.png")}
      />
      <Image
        style={[styles.teachersE1Child29, styles.teachersChildPosition1]}
        resizeMode="cover"
        source={require("../assets/star-41.png")}
      />
      <Image
        style={[styles.teachersE1Child30, styles.teachersChildPosition]}
        resizeMode="cover"
        source={require("../assets/star-8.png")}
      />
      <Image
        style={[styles.teachersE1Child31, styles.teachersChildPosition4]}
        resizeMode="cover"
        source={require("../assets/star-41.png")}
      />
      <Image
        style={[styles.teachersE1Child32, styles.teachersChildPosition3]}
        resizeMode="cover"
        source={require("../assets/star-41.png")}
      />
      <Image
        style={[styles.teachersE1Child33, styles.teachersChildPosition2]}
        resizeMode="cover"
        source={require("../assets/star-41.png")}
      />
      <Image
        style={[styles.teachersE1Child34, styles.teachersChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-41.png")}
      />
      <Image
        style={[styles.teachersE1Child35, styles.teachersChildPosition]}
        resizeMode="cover"
        source={require("../assets/star-8.png")}
      />
      <Text style={[styles.phdInCs, styles.phdTypo2]}>
        PhD. in CS | Frontend Developer
      </Text>
      <Text style={[styles.phdInCs1, styles.phdTypo1]}>
        PhD. in CS | Frontend Developer
      </Text>
      <Text style={[styles.phdInCs2, styles.phdTypo1]}>
        PhD. in CS | Frontend Developer
      </Text>
      <Text style={[styles.phdInCs3, styles.phdTypo]}>
        PhD. in CS | Frontend Developer
      </Text>
      <Text style={[styles.phdInCs4, styles.phdTypo]}>
        PhD. in CS | Frontend Developer
      </Text>
      <Text style={[styles.phdInCs5, styles.phdTypo2]}>
        PhD. in CS | Frontend Developer
      </Text>
      <Image
        style={[styles.lo1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/lo-1.png")}
      />
      <Image
        style={[styles.lo2Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/lo-1.png")}
      />
      <Image
        style={[styles.lo3Icon, styles.iconPosition1]}
        resizeMode="cover"
        source={require("../assets/lo-1.png")}
      />
      <Image
        style={[styles.lo4Icon, styles.iconPosition1]}
        resizeMode="cover"
        source={require("../assets/lo-1.png")}
      />
      <Image
        style={[styles.lo5Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/lo-1.png")}
      />
      <Image
        style={[styles.lo6Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/lo-1.png")}
      />
      <TouchableOpacity
        style={styles.icons8Arrow241}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon5}
          resizeMode="cover"
          source={require("../assets/icons8arrow24-11.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  teachersShadowBox1: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  teachersShadowBox: {
    height: 100,
    width: 157,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    top: 166,
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
  rectangleViewShadowBox: {
    top: 302,
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
  teachersChildShadowBox: {
    top: 443,
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
  teachersChildBg: {
    backgroundColor: Color.colorSlateblue,
    position: "absolute",
  },
  lineIconLayout: {
    height: 0,
    width: 311,
    left: 27,
    position: "absolute",
  },
  teachersTypo: {
    textAlign: "left",
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  iconLayout2: {
    height: 58,
    width: 58,
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  iconLayout1: {
    left: 237,
    height: 58,
    width: 58,
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  muhummadTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    color: Color.colorSlateblue,
    textAlign: "left",
    position: "absolute",
  },
  drUmerSaifTypo: {
    top: 337,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    color: Color.colorSlateblue,
    textAlign: "left",
    position: "absolute",
  },
  teachersChildLayout: {
    height: 12,
    width: 12,
    position: "absolute",
  },
  teachersChildPosition5: {
    left: 123,
    height: 12,
    width: 12,
    position: "absolute",
  },
  teachersChildPosition4: {
    left: 226,
    height: 12,
    width: 12,
    position: "absolute",
  },
  teachersChildPosition3: {
    left: 243,
    height: 12,
    width: 12,
    position: "absolute",
  },
  teachersChildPosition2: {
    left: 260,
    height: 12,
    width: 12,
    position: "absolute",
  },
  teachersChildPosition1: {
    top: 490,
    height: 12,
    width: 12,
    position: "absolute",
  },
  teachersChildPosition: {
    left: 293,
    height: 12,
    width: 12,
    position: "absolute",
  },
  phdTypo2: {
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_4xs,
    textAlign: "left",
    position: "absolute",
  },
  phdTypo1: {
    left: 196,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_4xs,
    textAlign: "left",
    position: "absolute",
  },
  phdTypo: {
    left: 26,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_4xs,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: 20,
    top: 243,
    width: 20,
    position: "absolute",
  },
  iconPosition1: {
    top: 380,
    height: 20,
    width: 20,
    position: "absolute",
  },
  iconPosition: {
    top: 522,
    height: 20,
    width: 20,
    position: "absolute",
  },
  teachersE1Child: {
    left: 18,
  },
  teachersE1Item: {
    left: 188,
  },
  teachersE1Inner: {
    left: 18,
  },
  rectangleView: {
    left: 188,
  },
  teachersE1Child1: {
    left: 18,
  },
  teachersE1Child2: {
    left: 188,
  },
  teachersE1Child3: {
    top: -594,
    left: -4,
    borderRadius: Border.br_21xl,
    width: 370,
    height: 723,
  },
  lineIcon: {
    top: 297,
  },
  teachersE1Child4: {
    top: 593,
    left: 0,
    borderTopLeftRadius: Border.br_21xl,
    borderTopRightRadius: Border.br_21xl,
    width: 360,
    height: 47,
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
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    top: 601,
  },
  teachers: {
    left: 128,
    fontSize: FontSize.bodyBold_size,
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    top: 601,
  },
  communities: {
    top: 602,
    left: 228,
    fontSize: FontSize.bodyBold_size,
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  ellipseIcon: {
    top: 625,
    left: 158,
    height: 15,
    width: 20,
    position: "absolute",
  },
  teachers1: {
    top: 16,
    left: 63,
    fontSize: FontSize.size_11xl,
  },
  teachersE1Child5: {
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
    width: 30,
    height: 30,
    left: 278,
    position: "absolute",
  },
  teachersE1Child6: {
    top: 433,
  },
  icon: {
    left: 67,
    top: 145,
  },
  icon1: {
    left: 66,
    top: 420,
  },
  icon2: {
    top: 145,
  },
  icon3: {
    top: 282,
    left: 68,
  },
  icon4: {
    top: 420,
  },
  profDr2Icon: {
    top: 284,
    left: 235,
    width: 50,
    height: 50,
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  drMuhummadRafi: {
    top: 197,
    left: 31,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
  },
  drMuhummadRafi1: {
    top: 471,
    left: 31,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
  },
  drUmerSaif: {
    left: 51,
  },
  drUmerSaif1: {
    top: 473,
    left: 221,
  },
  drAtifTahir: {
    left: 220,
  },
  romashaKhursheed: {
    top: 198,
    left: 195,
  },
  starIcon: {
    left: 53,
    top: 214,
  },
  teachersE1Child7: {
    left: 70,
    top: 214,
  },
  teachersE1Child8: {
    left: 87,
    top: 214,
  },
  teachersE1Child9: {
    left: 105,
    top: 214,
  },
  teachersE1Child10: {
    top: 214,
  },
  teachersE1Child11: {
    top: 216,
  },
  teachersE1Child12: {
    top: 216,
  },
  teachersE1Child13: {
    top: 216,
  },
  teachersE1Child14: {
    top: 216,
    left: 278,
  },
  teachersE1Child15: {
    left: 296,
    top: 216,
  },
  teachersE1Child16: {
    top: 352,
    left: 53,
  },
  teachersE1Child17: {
    top: 352,
    left: 70,
  },
  teachersE1Child18: {
    top: 352,
    left: 87,
  },
  teachersE1Child19: {
    top: 352,
    left: 105,
  },
  teachersE1Child20: {
    top: 352,
  },
  teachersE1Child21: {
    left: 120,
  },
  teachersE1Child22: {
    left: 223,
    top: 352,
  },
  teachersE1Child23: {
    left: 240,
    top: 352,
  },
  teachersE1Child24: {
    left: 257,
    top: 352,
  },
  teachersE1Child25: {
    left: 275,
    top: 352,
  },
  teachersE1Child26: {
    left: 53,
  },
  teachersE1Child27: {
    left: 70,
  },
  teachersE1Child28: {
    left: 87,
  },
  teachersE1Child29: {
    left: 105,
  },
  teachersE1Child30: {
    top: 493,
  },
  teachersE1Child31: {
    top: 493,
  },
  teachersE1Child32: {
    top: 493,
  },
  teachersE1Child33: {
    top: 493,
  },
  teachersE1Child34: {
    top: 493,
    left: 278,
  },
  teachersE1Child35: {
    top: 352,
  },
  phdInCs: {
    top: 227,
    left: 29,
  },
  phdInCs1: {
    top: 228,
  },
  phdInCs2: {
    top: 364,
  },
  phdInCs3: {
    top: 363,
  },
  phdInCs4: {
    top: 505,
  },
  phdInCs5: {
    top: 506,
    left: 198,
  },
  lo1Icon: {
    left: 149,
  },
  lo2Icon: {
    left: 320,
  },
  lo3Icon: {
    left: 320,
  },
  lo4Icon: {
    left: 149,
  },
  lo5Icon: {
    left: 149,
  },
  lo6Icon: {
    left: 319,
  },
  icon5: {
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
  teachersE1: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default TeachersE1;
