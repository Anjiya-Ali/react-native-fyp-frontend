import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import teacherProfileContext from "../context/TeacherProfile/teacherProfileContext";
import RNPickerSelect from "react-native-picker-select";

const windowWidth = Dimensions.get("window").width;
const { height, width } = Dimensions.get("window");

const UpdateSingleExperienceScreenT = ({ route }) => {

  const { additionalData } = route.params;

  const years = [];

  for (let year = 1980; year <= 2040; year++) {
    years.push({ label: year.toString(), value: year.toString() });
  }

  const context = useContext(teacherProfileContext);
  const [experienceUpdated, setExperienceUpdated] = useState();
  const [experienceCompany, setExperienceCompany] = useState(additionalData.company);
  const [experienceLocation, setExperienceLocation] = useState(additionalData.location);
  const [experienceTitle, setExperienceTitle] = useState(additionalData.title);
  const [error, setError] = useState(null);
  const { editExperience } = context;

  const [value, setValue] = useState(additionalData.start_date.toString());
  const [value1, setValue1] = useState(additionalData.end_date.toString());

  const handleDropdownChange = (value) => {
    setValue(value);
  };

  const handleDropdownChange1 = (value) => {
    setValue1(value);
  };

  const handleUpdateExperience = async (id) => {
    try {
        setError(null);
        if (experienceCompany.trim() === "" || experienceLocation.trim() === "" || experienceTitle.trim() === "" || value === null || value1 === null) {
            setError("Please provide complete and valid details.");
            setTimeout(() => {
              setError(null);
            }, 3000);
            return;
          }
        else{
            if(parseInt(value) > parseInt(value1)){
                setError("Start date cannot be greater than end date.");
                setTimeout(() => {
                  setError(null);
                }, 3000);
                return;
              }
            else{  
                await editExperience(experienceTitle, experienceCompany, parseInt(value), parseInt(value1), experienceLocation, id);
                setExperienceUpdated(true);
            }
        }
    } catch (error) {
        setError("An error occurred while updating the experience. Please try again.");
        setTimeout(() => {
          setError("");
        }, 3000);
        return;
    }
  }

  const navigation = useNavigation();

  useEffect(() => {
    if(experienceUpdated){
      navigation.navigate("TeacherProfilePage")
    }
  }, [experienceUpdated]);

  const flexD = "column";

  return (
    <ScrollView style={{ flex: 1, flexDirection: flexD, backgroundColor: "#adadad" }}>
      <View style={[styles.headerPosition, { position: "relative" }]}>
        <View style={[styles.headerChild, { flex: 1, width: windowWidth }]} />
        <TouchableOpacity
          style={[styles.icons8Arrow241, { left: windowWidth * 0.035 }]}
          onPress={() => navigation.navigate("TeacherProfilePage")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icons8arrow24-1.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.header}>Update Experience</Text>
        {error && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Title</Text>
          <TextInput defaultValue={experienceTitle} placeholderTextColor="black"value={experienceTitle} onChangeText={(text) => setExperienceTitle(text)} style={styles.input} multiline={true}/>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Company</Text>
          <TextInput defaultValue={experienceTitle} placeholderTextColor="black"value={experienceCompany} onChangeText={(text) => setExperienceCompany(text)} style={styles.input} multiline={true}/>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Start Year</Text>
          <RNPickerSelect
              onValueChange={handleDropdownChange}
              items={years}
              placeholder={{ label: "Select year", value: null }}
              value={value}
              style={{
                inputAndroid: {
                  backgroundColor: '#adadad',
                  color: 'black',
                },
                inputIOS: {
                  backgroundColor: '#adadad',
                  color: 'black',
                },
              }}
            />
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>End Year</Text>
          <RNPickerSelect
              onValueChange={handleDropdownChange1}
              items={years}
              placeholder={{ label: "Select year", value: null }}
              value={value1}
              style={{
                inputAndroid: {
                  backgroundColor: '#adadad',
                  color: 'black',
                },
                inputIOS: {
                  backgroundColor: '#adadad',
                  color: 'black',
                },
              }}
          />
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Location</Text>
          <TextInput defaultValue={experienceLocation} placeholderTextColor="black"value={experienceLocation} onChangeText={(text) => setExperienceLocation(text)} style={styles.input} multiline={true}/>
        </View>
        <TouchableOpacity
          onPress={() => handleUpdateExperience(additionalData.id)}
          style={styles.viewAllButtonContainer}
        >
          <Text style={styles.viewAllButton}>Update</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    color: "black"
  },
  errorContainer: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  errorText: {
    color: 'white',
    textAlign: 'center',
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
  },
  sectionContainer: {
    padding: 5,
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
  },
  parent: {
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
  },
  headerPosition: {
    height: 81,
    position: "absolute",
    alignItems: "center",
    paddingHorizontal: 16, // Add some padding for better spacing
    width: "100%", // Use 100% of the parent width
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

export default UpdateSingleExperienceScreenT;