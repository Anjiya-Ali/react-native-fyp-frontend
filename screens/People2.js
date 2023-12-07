import * as React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const People2 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.people2, styles.people2ShadowBox]}>
      <View style={[styles.people2Child, styles.people2ShadowBox]} />
      <View style={styles.people2Item} />
      <Image
        style={styles.hamburgerIcon}
        resizeMode="cover"
        source={require("../assets/hamburger.png")}
      />
      <View style={styles.teacher0041} />
      <Text style={[styles.phdInCs, styles.phdInCsPosition]}>
        PhD. in CS | NLP Specialist
      </Text>
      <Text style={[styles.drUmerSaif, styles.phdInCsPosition]}>
        Dr. Umer Saif
      </Text>
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/1678185219197-2.png")}
      />
      <Text style={styles.all1}>All (1)</Text>
      <Image
        style={styles.people2Inner}
        resizeMode="cover"
        source={require("../assets/line-12.png")}
      />
      <Text style={[styles.isAConnection, styles.phdInCsPosition]}>
        is a connection
      </Text>
      <Text style={[styles.youHave1Container, styles.connectionsTypo]}>
        <Text style={styles.youHave}>{`You have `}</Text>
        <Text style={styles.text}>1</Text>
        <Text style={styles.youHave}> connection</Text>
      </Text>
      <Text style={[styles.connections, styles.connectionsTypo]}>
        Connections
      </Text>
      <Image
        style={styles.me3Icon}
        resizeMode="cover"
        source={require("../assets/me-3.png")}
      />
      <TouchableOpacity
        style={styles.icons8Arrow241}
        onPress={() => navigation.navigate("HomePage2")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/icons8arrow24-11.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  people2ShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  phdInCsPosition: {
    textAlign: "left",
    color: Color.colorSlateblue,
    left: 78,
    position: "absolute",
  },
  connectionsTypo: {
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    textAlign: "left",
    position: "absolute",
  },
  people2Child: {
    top: 185,
    left: 0,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGainsboro_200,
    width: 360,
    height: 62,
    position: "absolute",
  },
  people2Item: {
    top: -594,
    left: -4,
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorSlateblue,
    width: 370,
    height: 700,
    position: "absolute",
  },
  hamburgerIcon: {
    top: 24,
    left: 315,
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
  phdInCs: {
    top: 211,
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  drUmerSaif: {
    top: 192,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_sm,
  },
  icon: {
    top: 190,
    left: 7,
    borderRadius: Border.br_31xl,
    width: 58,
    height: 58,
    position: "absolute",
  },
  all1: {
    top: 133,
    left: 18,
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    textAlign: "left",
    color: Color.colorSlateblue,
    position: "absolute",
  },
  people2Inner: {
    top: 441,
    left: 16,
    width: 311,
    height: 0,
    position: "absolute",
  },
  isAConnection: {
    top: 228,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.interRegular,
  },
  youHave: {
    fontSize: FontSize.size_sm,
  },
  text: {
    fontSize: FontSize.size_xl,
  },
  youHave1Container: {
    top: 58,
    left: 54,
  },
  connections: {
    top: 16,
    left: 63,
    fontSize: FontSize.size_11xl,
  },
  me3Icon: {
    top: 197,
    left: 307,
    width: 40,
    height: 40,
    position: "absolute",
  },
  icon1: {
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
  people2: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default People2;
