import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import jointAccountContext from "../context/JointAccounts/JointAccountContext";
import { useRoute, useFocusEffect } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const { height, width } = Dimensions.get("window");

const ViewSingleJointAccountRequest = ({ route }) => {
  const { additionalData } = route.params;

  const context = useContext(jointAccountContext);
  const [localDetails, setLocalDetails] = useState();
  const { detailsOfJointAccountRequests, getDetailsOfJointAccountRequest, acceptRequest, rejectRequest } =
    context;

  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        await getDetailsOfJointAccountRequest(additionalData);
        setLocalDetails(detailsOfJointAccountRequests || []);
      };

      fetchData();
    }, [detailsOfJointAccountRequests, getDetailsOfJointAccountRequest])
  );

  const [showAcceptModal, setShowAcceptModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);

  const handleAcceptRequest = () => {
    setShowAcceptModal(true);
  };

  const handleRejectRequest = () => {
    setShowRejectModal(true);
  };

  const handleAcceptConfirmation = async () => {
    await acceptRequest(additionalData);
    navigation.navigate("ViewJointAccountRequests")
    setShowAcceptModal(false);
  };

  const handleRejectConfirmation = async () => {
    await rejectRequest(additionalData);
    navigation.navigate("ViewJointAccountRequests")
    setShowRejectModal(false);
  };

  const flexD = "column";

  return (
    <ScrollView
      style={{ flex: 1, flexDirection: flexD, backgroundColor: "#d9d9d9" }}
    >
      <View style={[styles.headerPosition, { position: "relative" }]}>
        <View style={[styles.headerChild, { flex: 1, width: windowWidth }]} />
        <TouchableOpacity
          style={[styles.icons8Arrow241, { left: windowWidth * 0.035 }]}
          onPress={() => navigation.navigate("ViewJointAccountRequests")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icons8arrow24-1.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.sectionContainer}>
          {localDetails && (
            <>
            <Text style={styles.sectionTitle}>
                Inviting to Course "{localDetails.courseName}"
            </Text>
            <Text style={styles.sectionTitle}>by</Text>
            <Text style={styles.sectionTitle}>"{localDetails.name}"</Text>
            <Text style={styles.userDetails}>{localDetails.message}</Text>
            </>
          )}
          <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: 20,
            paddingLeft: 20,
            paddingTop: 20
          }}
        >
          <TouchableOpacity onPress={() => handleAcceptRequest(additionalData)}>
              <Text style={styles.acceptButtonText}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRejectRequest(additionalData)}>
              <Text style={styles.acceptButtonText}>Reject</Text>
            </TouchableOpacity>
        </View>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showAcceptModal}
        onRequestClose={() => setShowAcceptModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Are you sure?
            </Text>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require("../assets/Logo2.png")}
              />
            </View>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleAcceptConfirmation}
            >
              <Text style={styles.modalButtonText}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setShowAcceptModal(false)}
            >
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showRejectModal}
        onRequestClose={() => setShowRejectModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Are you sure?
            </Text>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require("../assets/Logo2.png")}
              />
            </View>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleRejectConfirmation}
            >
              <Text style={styles.modalButtonText}>Reject</Text>
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
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
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
    textAlign: 'center',
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
    userDetails: {
        fontWeight: "300",
        color: "black",
        fontSize: FontSize.size_mini,
        fontFamily: FontFamily.calibri,
        paddingTop: 20
      },
    acceptButtonText: {
        color: Color.colorSlateblue,
        fontSize: 18,
        fontWeight: "500"
        },
  input: {
    color: "black",
  },
  errorContainer: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  errorText: {
    color: "white",
    textAlign: "center",
  },
  viewAllButtonContainer: {
    backgroundColor: Color.colorSlateblue,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  viewAllButton: {
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
  },
  sectionTitle: {
    color: "black",
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    textAlign: "center",
  },
  sectionContainer: {
    padding: 5,
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
  },
  parent: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerPosition: {
    height: 81,
    position: "absolute",
    alignItems: "center",
    paddingHorizontal: 16,
    width: "100%",
  },
  childIconLayout: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: "cover",
  },
  headerChild: {
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    backgroundColor: Color.colorSlateblue,
  },
  hamburgerIcon: {
    top: 33,
    left: windowWidth - 40,
    width: 25,
    height: 16,
    position: "absolute",
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
    width: "100%", // Use 100% of the parent width
  },
  icons8Arrow241: {
    left: 13,
    width: 26,
    height: 24,
    top: 30,
    position: "absolute",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    margin: 10,
  },
  header: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
});

export default ViewSingleJointAccountRequest;
