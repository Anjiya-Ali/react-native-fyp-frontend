import * as React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Proposal3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.proposal3}>
      <View style={[styles.proposal3Child, styles.proposal3Bg]} />
      <Image
        style={styles.proposal3Item}
        resizeMode="cover"
        source={require("../assets/rectangle-15.png")}
      />
      <Text style={[styles.helloImDrContainer, styles.lineIconPosition]}>
        <Text style={styles.helloImDrMuhammad}>{`Hello,
I'm Dr. Muhammad Rafi, an experienced Java instructor excited to elevate your programming skills.

`}</Text>
        <Text style={styles.approach}>{`Approach:
`}</Text>
        <Text
          style={styles.helloImDrMuhammad}
        >{`Personalized Learning: I tailor sessions to match your unique learning style and pace.
Practical Applications: We'll focus on real-world examples and hands-on projects for a comprehensive understanding.
Regular Interaction: Consistent sessions for steady progress.

`}</Text>
        <Text style={styles.approach}>About Me:</Text>
        <Text style={styles.helloImDrMuhammad}>{` 
With `}</Text>
        <Text style={styles.approach}>10</Text>
        <Text
          style={styles.helloImDrMuhammad}
        >{` years of experience in Java and a passion for teaching, I've successfully guided students in mastering the language. My approach goes beyond theory, emphasizing practical application and real-world scenarios.

`}</Text>
        <Text style={styles.approach}>{`Logistics:
`}</Text>
        <Text
          style={styles.helloImDrMuhammad}
        >{`Platform: Comfortable with [Preferred online platform].
Availability: I'm flexible to accommodate your schedule.

Let's connect and discuss how we can customize our sessions to maximize your learning journey.

Best,
Dr. Muhammad Rafi 
+923471678725`}</Text>
      </Text>
      <Text style={styles.muhummadRafisProposal}>Muhummad Rafi’s Proposal</Text>
      <TouchableOpacity
        style={[styles.proposal3Inner, styles.proposal3Bg]}
        onPress={() => navigation.navigate("Proposal4")}
      />
      <Text style={[styles.accept, styles.acceptTypo]}>Accept</Text>
      <TouchableOpacity style={styles.decline} onPress={() => navigation.goBack()}>
        <Text style={styles.decline1}>Decline</Text>
      </TouchableOpacity>
      <Image
        style={[styles.lineIcon, styles.lineIconPosition]}
        resizeMode="cover"
        source={require("../assets/line-13.png")}
      />
      <Image
        style={[styles.whatsappImage20231007At6, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/whatsapp-image-20231007-at-627-1.png")}
      />
      <Image
        style={[styles.icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/1516807823802-31.png")}
      />
      <Text style={[styles.javaTutoring, styles.acceptTypo]}>
        Java Tutoring
      </Text>
      <Image
        style={styles.picture46Icon}
        resizeMode="cover"
        source={require("../assets/picture4-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  proposal3Bg: {
    backgroundColor: Color.colorSlateblue,
    borderRadius: Border.br_21xl,
    position: "absolute",
  },
  lineIconPosition: {
    left: 14,
    position: "absolute",
  },
  acceptTypo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    textAlign: "left",
    position: "absolute",
  },
  iconPosition: {
    borderRadius: Border.br_41xl,
    top: 20,
    position: "absolute",
  },
  proposal3Child: {
    top: 174,
    borderStyle: "solid",
    borderColor: Color.labelColorLightPrimary,
    borderWidth: 1,
    width: 360,
    height: 466,
    left: 0,
  },
  proposal3Item: {
    top: 223,
    borderRadius: Border.br_11xl,
    width: 384,
    height: 435,
    left: 0,
    position: "absolute",
  },
  helloImDrMuhammad: {
    fontWeight: "300",
    fontFamily: FontFamily.calibri,
  },
  approach: {
    fontWeight: "700",
    fontFamily: FontFamily.calibri,
  },
  helloImDrContainer: {
    top: 230,
    fontSize: FontSize.size_3xs,
    width: 333,
    height: 315,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  muhummadRafisProposal: {
    top: 184,
    left: 75,
    fontSize: FontSize.bodyBold_size,
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    textAlign: "left",
    position: "absolute",
  },
  proposal3Inner: {
    top: 570,
    left: 172,
    width: 175,
    height: 51,
  },
  accept: {
    left: 225,
    top: 583,
    color: Color.colorGainsboro_100,
  },
  decline1: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    color: Color.colorSlateblue,
    textAlign: "left",
  },
  decline: {
    left: 28,
    top: 583,
    position: "absolute",
  },
  lineIcon: {
    top: 551,
    width: 323,
    height: 2,
  },
  whatsappImage20231007At6: {
    left: 191,
    width: 100,
    height: 100,
  },
  icon: {
    left: 61,
    width: 108,
    height: 108,
  },
  javaTutoring: {
    top: 134,
    left: 114,
    color: Color.labelColorLightPrimary,
  },
  picture46Icon: {
    top: 41,
    left: 150,
    width: 50,
    height: 56,
    position: "absolute",
  },
  proposal3: {
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default Proposal3;
