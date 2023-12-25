import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import jointAccountContext from "../context/JointAccounts/JointAccountContext";
import { useRoute, useFocusEffect } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const windowWidth = Dimensions.get("window").width;
const { height, width } = Dimensions.get("window");

const MyAcceptedInvitations = ({route}) => {
    const { additionalData } = route.params;

  const context1 = useContext(jointAccountContext);
  const { getAcceptedInvitations, acceptedInvitations, withdrawInvitation } = context1;
  const [localRequests, setLocalRequests] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        await getAcceptedInvitations(additionalData);
        setLocalRequests(acceptedInvitations || []);
      };

      fetchData();
    }, [getAcceptedInvitations, acceptedInvitations])
  );

  const navigation = useNavigation();

  const flexD = "column";
  const host = "http://192.168.0.147:3000";

  const handleWithdrawConnection = async (connectionId) => {
    await withdrawInvitation(connectionId, additionalData);
    setLocalRequests(
      localRequests.filter((request) => request.id !== connectionId)
    );
  };

  return (
    <View style={{ flex: 1, flexDirection: flexD, backgroundColor: "#adadad" }}>
      <ScrollView
        style={{ flex: 1, flexDirection: flexD, backgroundColor: "#adadad" }}
      >
        <View style={[styles.headerPosition, { position: "relative" }]}>
          <View style={[styles.headerChild, { flex: 1, width: windowWidth }]} />
          <Text style={styles.myCourses1}>COURSE PARTNERS</Text>
          <TouchableOpacity
            style={[styles.icons8Arrow241, { left: windowWidth * 0.035 }]}
            onPress={() => navigation.navigate("TeacherHomePage")} //set it
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/icons8arrow24-1.png")}
            />
          </TouchableOpacity>
        </View>
        {localRequests.length > 0 && (
          <ScrollView>
            {localRequests.map((connection, index) => (
              <View key={index}>
                <View style={styles.sectionContainer}>
                  <View style={styles.profileHeader}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("OtherProfilePage", {
                          additionalData: connection.id,
                        })
                      }
                    >
                      <Image
                        style={styles.profileImage}
                        resizeMode="cover"
                        source={{
                          uri: `${host}/${connection.profile_picture}`,
                        }}
                      />
                    </TouchableOpacity>
                    <View style={styles.profileTextContainer}>
                      <Text style={styles.userName}>{connection.name}</Text>
                      <Text style={styles.userDetails}>{connection.bio}</Text>
                    </View>
                  </View>
                  <View style={styles.separator} />
                  <View style={{
                    alignItems: "center",
                  }}>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        )}
        {localRequests.length === 0 && (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={require("../assets/image-18.png")}
              style={styles.imageStyle}
            />
            <Text style={{ color: 'blue', fontSize: 25, fontWeight: "bold" }}>NO COURSE PARTNERS</Text>
          </View>
        )}
      </ScrollView>
      <View style={[styles.headerPosition1, { position: "relative" }]}>
        <View style={[styles.headerChild1, { flex: 1, width: windowWidth }]} />
        <TouchableOpacity
          style={[styles.icons8Arrow2411, { left: windowWidth * 0.055 }]}
          onPress={() => navigation.navigate("ViewMemberForJointAccount")}
        >
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/friendss.png")}
          />
          <Text style={styles.iconText}>Connections</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.hamburgerIcon1}
          onPress={() => navigation.navigate("MypendingInvitations", {
            additionalData: additionalData,
          })}
        >
          <Image
            resizeMode="cover"
            source={require("../assets/hourglass.png")}
          />
          <Text style={styles.iconText}>Pending</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  acceptButtonText: {
    color: Color.colorSlateblue,
    fontSize: 16,
  },
  iconText: {
    fontSize: 12,
    color: 'white',
    bottom: 4,
  },
  headerPosition: {
    height: 81,
    position: "absolute",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  headerPosition1: {
    height: 71,
    position: "absolute",
    alignItems: "center",
    bottom: 0,
    left: 0,
    right: 0,
  },
  headerChild: {
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    backgroundColor: Color.colorSlateblue,
  },
  headerChild1: {
    borderTopRightRadius: Border.br_11xl,
    borderTopLeftRadius: Border.br_11xl,
    backgroundColor: Color.colorSlateblue,
    flex: 1,
    width: "100%",
    flexDirection: "row",
  },
  hamburgerIcon: {
    top: 33,
    left: windowWidth - 40,
    width: 25,
    height: 16,
    position: "absolute",
  },
  hamburgerIcon1: {
    top: 20,
    left: windowWidth - 70,
    width: 45,
    height: 20,
    position: "absolute",
    textAlign: 'center',
    alignItems: 'center',
  },
  hamburgerIcon2: {
    top: 20,
    width: 50,
    height: 20,
    position: "absolute",
    textAlign: 'center',
    alignItems: 'center',
  },
  box: {
    margin: "0 auto",
    height: height / 6,
    alignSelf: "center",
  },
  excelInAgileTypo: {
    height: 46,
    width: 283,
    color: Color.colorSlateblue,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  myCourses1: {
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorWhite,
    width: 185,
    height: 26,
    textAlign: "center",
    top: 30,
    position: "absolute",
  },
  myCourses2: {
    fontSize: FontSize.size_mini,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorWhite,
    width: 185,
    height: 26,
    textAlign: "center",
    top: 30,
    position: "absolute",
  },
  image1Icon: {
    width: width * 0.8,
    margin: "0 auto",
    height: width < 600 ? height / 5.5 : height / 2.8,
  },
  excelInAgile: {
    top: width < 600 ? 115 : 245,
    left: 7,
  },
  agile: {
    width: "100%",
  },
  icons8Arrow241: {
    left: 13,
    width: 26,
    height: 24,
    top: 30,
    position: "absolute",
  },
  icons8Arrow2411: {
    top: 24,
    left: 13,
    width: 60,
    height: 25,
    position: "absolute",
    textAlign: "center",
    alignItems: "center",
  },
  icon: {
    width: 25,
    height: 25,
  },
  icon1: {
    width: 25,
    height: 29,
  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 5,
  },
  sectionContainer: {
    backgroundColor: "white",
    padding: 10,
    marginTop: 10,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  profileImage: {
    borderRadius: 32,
    width: 64,
    height: 64,
  },
  profileTextContainer: {
    flex: 1,
    marginLeft: 5,
  },
  userName: {
    color: "black",
    fontSize: FontSize.size_xl,
    fontWeight: "700",
  },
  userName1: {
    color: "white",
    fontSize: FontSize.size_base,
    textAlign: "center",
    position: "absolute",
    top: 60,
  },
  userDetails: {
    fontWeight: "300",
    color: "black",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.calibri,
  },
});

export default MyAcceptedInvitations;