import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import EducationSection from "../components/EducationSection";
import CertificationsSection from "../components/CertificationsSection";
import LanguageFilter from "../components/LanguageFilter";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const StudentProfilePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.studentProfilePage}>
      <View style={styles.groupChildPosition}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={styles.myProfile}>MY PROFILE</Text>
        <TouchableOpacity
          style={styles.hamburger}
          onPress={() => navigation.navigate("HomePage2")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/hamburger1.png")}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[styles.icons8Arrow241, styles.icons8Arrow241Position]}
        onPress={() => navigation.navigate("HomePage1")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icons8arrow24-1.png")}
        />
      </TouchableOpacity>
      <Image
        style={[styles.inshasamnani2Icon, styles.icons8Arrow241Position]}
        resizeMode="cover"
        source={require("../assets/inshasamnani-2.png")}
      />
      <Text style={styles.inshaSamnaniXinternsystemslContainer}>
        <Text
          style={[styles.inshaSamnani, styles.interestsTypo]}
        >{`Insha Samnani
`}</Text>
        <Text
          style={styles.xinternsystemsltdSeniorfa}
        >{`xIntern@SystemsLtd | Senior@FAST-NUCES |SLA&TA@FAST-NUCES`}</Text>
      </Text>
      <Text style={[styles.connections, styles.connectionsTypo]}>
        500+ Connections
      </Text>
      <Text style={[styles.karachiPakistan, styles.connectionsTypo]}>
        Karachi, Pakistan
      </Text>
      <Image
        style={styles.studentProfilePageChild}
        resizeMode="cover"
        source={require("../assets/group-15455.png")}
      />
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text
          style={[
            styles.androidApplicationDevelopmenContainer,
            styles.interestsPosition,
          ]}
        >
          <Text
            style={[styles.androidApplicationDevelopmen, styles.interestsTypo]}
          >{`Android Application Development
`}</Text>
          <Text style={styles.xinternsystemsltdSeniorfa}>
            Passionate mobile app developer skilled in creating robust iOS and
            Android applications. Expertise in the end-to-end development
            process, delivering user-centric solutions with a keen eye for
            innovation.
          </Text>
        </Text>
        <Text style={[styles.interests, styles.interestsPosition]}>
          Interests
        </Text>
        <View style={styles.icons8Plus301Parent}>
          <Image
            style={[styles.icons8Plus301, styles.icons8Layout]}
            resizeMode="cover"
            source={require("../assets/icons8plus30-1.png")}
          />
          <Image
            style={[styles.icons8Pencil302, styles.icons8Layout]}
            resizeMode="cover"
            source={require("../assets/icons8pencil30-2.png")}
          />
        </View>
      </View>
      <EducationSection />
      <CertificationsSection
        achievementList="Certifications"
        certificationBadgeSilverB={`Cloud Foundation
`}
        quizAuthorName={`Dr. Muhammad Rafi
`}
        courseTitleBadge={`Introduction to Data Science
`}
        userProfileImage={`Ms. Romasha Khurshid
`}
      />
      <CertificationsSection
        achievementList="Badges"
        certificationBadgeSilverB={`Silver Badge
`}
        quizAuthorName={`30+ Quizzes
`}
        courseTitleBadge={`Bronze Badge
`}
        userProfileImage={`20+ Quizzes
`}
        propTop={657}
      />
      <LanguageFilter />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 40,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  icons8Arrow241Position: {
    left: 8,
    position: "absolute",
  },
  interestsTypo: {
    fontFamily: FontFamily.calibri,
    fontWeight: "700",
  },
  connectionsTypo: {
    left: 11,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.calibri,
    textAlign: "left",
    position: "absolute",
  },
  groupLayout: {
    height: 103,
    width: 360,
    left: 0,
    position: "absolute",
  },
  interestsPosition: {
    left: 12,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    position: "absolute",
  },
  icons8Layout: {
    width: 15,
    height: 15,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorSlateblue,
  },
  myProfile: {
    top: 5,
    left: 138,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.javaneseText,
    color: Color.colorWhite,
    width: 99,
    height: 31,
    textAlign: "left",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  hamburger: {
    left: 320,
    top: 12,
    width: 25,
    height: 16,
    position: "absolute",
  },
  icons8Arrow241: {
    top: 8,
    width: 26,
    height: 24,
  },
  inshasamnani2Icon: {
    top: 45,
    borderRadius: Border.br_127xl,
    width: 62,
    height: 64,
  },
  inshaSamnani: {
    fontSize: FontSize.size_mini,
    fontWeight: "700",
  },
  xinternsystemsltdSeniorfa: {
    fontWeight: "300",
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.calibri,
  },
  inshaSamnaniXinternsystemslContainer: {
    top: 54,
    left: 81,
    width: 279,
    height: 47,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    position: "absolute",
  },
  connections: {
    top: 126,
    color: Color.colorSlateblue,
  },
  karachiPakistan: {
    top: 113,
    color: "#181818",
    fontWeight: "300",
  },
  studentProfilePageChild: {
    top: 114,
    left: 230,
    width: 95,
    height: 18,
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.colorWhite,
    top: 0,
    height: 103,
  },
  androidApplicationDevelopmen: {
    fontSize: FontSize.size_smi,
  },
  androidApplicationDevelopmenContainer: {
    top: 37,
    width: 334,
    height: 66,
  },
  interests: {
    top: 10,
    fontFamily: FontFamily.calibri,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
  },
  icons8Plus301: {
    left: 0,
    width: 15,
  },
  icons8Pencil302: {
    left: 19,
  },
  icons8Plus301Parent: {
    top: 13,
    left: 308,
    width: 34,
    height: 15,
    position: "absolute",
  },
  rectangleGroup: {
    top: 148,
  },
  studentProfilePage: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    height: 921,
    width: "100%",
  },
});

export default StudentProfilePage;
