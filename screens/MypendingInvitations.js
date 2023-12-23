import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  Modal
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import jointAccountContext from "../context/JointAccounts/JointAccountContext";
import { useRoute, useFocusEffect } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const windowWidth = Dimensions.get("window").width;
const { height, width } = Dimensions.get("window");

const MypendingInvitations = ({route}) => {
    const { additionalData } = route.params;

  const context1 = useContext(jointAccountContext);
  const { getPendingInvitations, pendingInvitations, withdrawInvitation } = context1;
  const [localRequests, setLocalRequests] = useState([]);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [requestId, setRequestId] = useState();

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        await getPendingInvitations(additionalData);
        if(pendingInvitations){
          setLocalRequests(pendingInvitations || []);
        }
      };

      fetchData();
    }, [getPendingInvitations, pendingInvitations])
  );

  const navigation = useNavigation();

  const flexD = "column";
  const host = "http://192.168.0.107:3000";

  const handleRejectRequest = (id) => {
    setRequestId(id)
    setShowRejectModal(true);
  };

  const handleWithdrawConnection = async (id) => {
    await withdrawInvitation(id, additionalData);
    setShowRejectModal(false);
  };

  // const handleWithdrawConnection = async (connectionId) => {
  //   await withdrawInvitation(connectionId, additionalData);
  //   // setLocalRequests(
  //   //   localRequests.filter((request) => request.id !== connectionId)
  //   // );
  // };

  return (
    <View style={{ flex: 1, flexDirection: flexD, backgroundColor: "#adadad" }}>
      <ScrollView
        style={{ flex: 1, flexDirection: flexD, backgroundColor: "#adadad" }}
      >
        <View style={[styles.headerPosition, { position: "relative" }]}>
          <View style={[styles.headerChild, { flex: 1, width: windowWidth }]} />
          <Text style={styles.myCourses1}>INVITED CONNECTIONS</Text>
          <TouchableOpacity
            style={[styles.icons8Arrow241, { left: windowWidth * 0.035 }]}
            onPress={() => navigation.navigate("HomePage2")} //set it
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
                  <TouchableOpacity onPress={() => handleRejectRequest(connection.id)}>
                    <Text style={styles.acceptButtonText}>Withdraw</Text>
                  </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        )}
        <Modal
          animationType="slide"
          transparent={true}
          visible={showRejectModal}
          onRequestClose={() => setShowRejectModal(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Are you sure?</Text>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={require("../assets/Logo2.png")}
                />
              </View>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => handleWithdrawConnection(requestId)}
              >
                <Text style={styles.modalButtonText}>Withdraw</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setShowRejectModal(false)}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
          style={styles.hamburgerIcon2}
          onPress={() => navigation.navigate("MyAcceptedInvitations", {
            additionalData: additionalData,
          })}
        >
          <Image
            resizeMode="cover"
            source={require("../assets/follower.png")}
            style = {{height: 33}}
          />
          <Text style={styles.iconText}>Accepted</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: 300,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
    color: Color.colorSlateblue,
    textAlign: "center",
    fontWeight: "400",
  },
  modalButton: {
    backgroundColor: Color.colorSlateblue,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  modalButtonText: {
    color: "white",
    fontSize: 16,
  },
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

export default MypendingInvitations;