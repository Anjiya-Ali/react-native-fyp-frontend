import React, { useState, useContext } from 'react';
import { View, ScrollView, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker as RNPicker } from '@react-native-picker/picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Toast from 'react-native-toast-message';
import { Color } from "../GlobalStyles";
import UserContext from '../context/User/userContext';
import StudentContext from '../context/StudentProfile/studentProfileContext';
import TeacherContext from '../context/TeacherProfile/teacherProfileContext';
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const context1 = useContext(UserContext);
    const {
        handleUserLogin,
    } = context1;

    const context2 = useContext(StudentContext);
    const {
        getStudent,
    } = context2;

    const context3 = useContext(TeacherContext);
    const {
        getTeacher,
    } = context3;

    const handleLogin = async () => {
        if (!validateRequiredFields([email, password])) {
            showError('Please fill in all the fields!');
            return;
        }
        else{
            const user = await handleUserLogin(email, password);
            if(!user.success){
                showError('Invalid Credentials!');
                return;
            }
            else if(user.success){
                if(user.role === "Student"){
                    const userProfile = await getStudent();
                    if(!userProfile.education.length){
                        navigation.navigate("HomePage2") //change
                    }
                    else{
                        navigation.navigate("StudentProfilePage") //change
                    }
                }
                else if(user.role === "Teacher"){
                    const teacherProfile = await getTeacher();
                    if(!teacherProfile.education.length){
                        navigation.navigate("HomePage2") //change
                    }
                    else{
                        navigation.navigate("TeacherProfilePage") //change
                    }
                }
            }
        }
    };

    const handleForgotPasswordPress = async () => {
        navigation.navigate("EmailVerification")
    };

    const validateRequiredFields = (fields) => {
        return fields.every((field) => field.trim() !== '');
    };

    const showError = (message) => {
        Toast.show({
            type: 'error',
            text1: 'Error',
            text2: message,
            position: 'top',
            topOffset: 80,
        });
    };

    return (
        <View style={styles.paybox}>
            <Text style={styles.header}>Login to your Account</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity onPress={handleForgotPasswordPress}>
                <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const RegisterScreen = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('Male');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [reEnterPassword, setReEnterPassword] = useState('');
    const [location, setLocation] = useState('');
    const countryList = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "American Samoa",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antarctica",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas (the)",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia (Plurinational State of)",
        "Bonaire, Sint Eustatius and Saba",
        "Bosnia and Herzegovina",
        "Botswana",
        "Bouvet Island",
        "Brazil",
        "British Indian Ocean Territory (the)",
        "Brunei Darussalam",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cayman Islands (the)",
        "Central African Republic (the)",
        "Chad",
        "Chile",
        "China",
        "Christmas Island",
        "Cocos (Keeling) Islands (the)",
        "Colombia",
        "Comoros (the)",
        "Congo (the Democratic Republic of the)",
        "Congo (the)",
        "Cook Islands (the)",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Curaçao",
        "Cyprus",
        "Czechia",
        "Côte d'Ivoire",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic (the)",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Falkland Islands (the) [Malvinas]",
        "Faroe Islands (the)",
        "Fiji",
        "Finland",
        "France",
        "French Guiana",
        "French Polynesia",
        "French Southern Territories (the)",
        "Gabon",
        "Gambia (the)",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Heard Island and McDonald Islands",
        "Holy See (the)",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran (Islamic Republic of)",
        "Iraq",
        "Ireland",
        "Isle of Man",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea (the Democratic People's Republic of)",
        "Korea (the Republic of)",
        "Kuwait",
        "Kyrgyzstan",
        "Lao People's Democratic Republic (the)",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macao",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands (the)",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Micronesia (Federated States of)",
        "Moldova (the Republic of)",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands (the)",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger (the)",
        "Nigeria",
        "Niue",
        "Norfolk Island",
        "Northern Mariana Islands (the)",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine, State of",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines (the)",
        "Pitcairn",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Republic of North Macedonia",
        "Romania",
        "Russian Federation (the)",
        "Rwanda",
        "Réunion",
        "Saint Barthélemy",
        "Saint Helena, Ascension and Tristan da Cunha",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Martin (French part)",
        "Saint Pierre and Miquelon",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Sint Maarten (Dutch part)",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Georgia and the South Sandwich Islands",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan (the)",
        "Suriname",
        "Svalbard and Jan Mayen",
        "Sweden",
        "Switzerland",
        "Syrian Arab Republic",
        "Taiwan (Province of China)",
        "Tajikistan",
        "Tanzania, United Republic of",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tokelau",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks and Caicos Islands (the)",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates (the)",
        "United Kingdom of Great Britain and Northern Ireland (the)",
        "United States Minor Outlying Islands (the)",
        "United States of America (the)",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela (Bolivarian Republic of)",
        "Viet Nam",
        "Virgin Islands (British)",
        "Virgin Islands (U.S.)",
        "Wallis and Futuna",
        "Western Sahara",
        "Yemen",
        "Zambia",
        "Zimbabwe",
        "Åland Islands"
    ]
    const [countries, setCountries] = useState(countryList);

    const handleRegister = () => {

        if (!validateRequiredFields([firstName, lastName, dob, gender, email, location, password, reEnterPassword])) {
            showError('Please fill in all the fields!');
            return;
        }

        // Validation checks
        if (!validateEmail()) {
            showError('Please enter a valid email address!');
            return;
        }

        if (!validatePassword()) {
            showError(
                'Password needs an uppercase letter and a special character!'
            );
            return;
        }

        if (!validatePasswordMatch()) {
            showError('Passwords do not match!');
            return;
        }

        // Implement your registration logic here
        console.log('Register:', { firstName, lastName, dob, gender, email, password, location });
        showSuccess('Registration successful!');
    };

    const validateRequiredFields = (fields) => {
        return fields.every((field) => field.trim() !== '');
    };

    const validateEmail = () => {
        // Basic email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const showError = (message) => {
        Toast.show({
            type: 'error',
            text1: 'Error',
            text2: message,
            position: 'top',
            topOffset: 80,
        });
    };

    const showSuccess = (message) => {
        Toast.show({
            type: 'success',
            text1: 'Success',
            text2: message,
            position: 'bottom',
        });
    };

    const validatePassword = () => {
        // Password validation with at least one capital letter, one small letter, one number, and one special character
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    };

    const validatePasswordMatch = () => {
        return password === reEnterPassword;
    };

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
        const dateString = date.toLocaleDateString(undefined, options);
        setDob(dateString);
        hideDatePicker();
    };

    return (
        <ScrollView style={styles.paybox} showsVerticalScrollIndicator={false}>
            <Text style={styles.header}>Create a New Account</Text>

            <TextInput
                style={styles.input}
                placeholder="First Name"
                value={firstName}
                onChangeText={(text) => setFirstName(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Last Name"
                value={lastName}
                onChangeText={(text) => setLastName(text)}
            />

            <TouchableOpacity onPress={showDatePicker} style={styles.input}>
                {dob ? (
                    <Text style={styles.datePickerButtonText}>{dob}</Text>
                ) : (
                    <Text style={styles.placeholderText}>Select Birth Date</Text>
                )}
            </TouchableOpacity>

            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />

            <View style={styles.dropdownContainer}>
                <Text style={styles.label}>Gender:</Text>
                <RNPicker
                    style={styles.dropdown}
                    selectedValue={gender}
                    onValueChange={(itemValue) => setGender(itemValue)}
                >
                    <RNPicker.Item label="Male" value="Male" />
                    <RNPicker.Item label="Female" value="Female" />
                </RNPicker>
            </View>

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Re-enter Password"
                secureTextEntry
                value={reEnterPassword}
                onChangeText={(text) => setReEnterPassword(text)}
            />

            <View style={styles.dropdownContainer}>
                <Text style={styles.label}>Location:</Text>
                <RNPicker
                    style={styles.dropdown}
                    selectedValue={location}
                    onValueChange={(itemValue) => setLocation(itemValue)}
                >
                    {countries.map((country, index) => (
                        <RNPicker.Item key={index} label={country} value={country} />
                    ))}
                </RNPicker>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const AuthScreen = () => {
    const [selectedHeading, setSelectedHeading] = useState('Login');

    const handleHeadingPress = (heading) => {
        setSelectedHeading(heading);
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image source={require('../assets/picture4-2.png')} style={styles.logo} />
                <Text style={styles.learnLanceHeader}>LEARNLANCE</Text>
            </View>
            <View style={styles.paybox2}>
                {selectedHeading === 'Login' ? 
                <>
                    <TouchableOpacity
                        onPress={() => handleHeadingPress('Register')}
                        >
                        <Text style={styles.header2}>Create a New Account</Text>
                    </TouchableOpacity>
                    <LoginScreen /> 
                </>
                : 
                <>
                    <TouchableOpacity
                        onPress={() => handleHeadingPress('Login')}
                        >
                        <Text style={styles.header2}>Login to your Account</Text>
                    </TouchableOpacity>
                    <RegisterScreen />
                </>
                }
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    forgot: {
        color: Color.colorSlateblue,
        textAlign: 'center',
        marginBottom: 30,
    },
    paybox: {
        padding: 20,
        paddingTop: 30,
        height: '100%',
        width: '100%',
        marginTop: '5%',
        borderColor: Color.labelColorLightPrimary,
        borderStyle: "solid",
        borderRadius: 20,
        backgroundColor: Color.colorGainsboro_200,
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
      },
      paybox2: {
        marginTop: 20,
        height: '80%',
        width: '100%',
        borderColor: Color.labelColorLightPrimary,
        borderStyle: "solid",
        borderRadius: 30,
        backgroundColor: Color.colorSlateblue,
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
      },
    placeholderText: {
        marginTop: 8,
        fontSize: 15.5,
        color: 'gray',
    },
    loginContainer: {
        marginTop: 30,
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 150, // Adjust the width based on your design
        height: 150, // Adjust the height based on your design
        resizeMode: 'contain',
        marginBottom: 10,
    },
    learnLanceHeader: {
        fontSize: 40,
        textTransform: 'uppercase',
        color: 'black'
    },
    container: {
        flex: 1,
    },
    banner: {
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 20,
        marginTop: 20,
    },
    heading: {
        flex: 1,
        paddingVertical: 15,
        alignItems: 'center',
        backgroundColor: Color.colorSlateblue,
    },
    selectedHeading: {
        backgroundColor: Color.colorGray_100,
    },
    headingText: {
        color: 'white',
        fontSize: 18,
    },
    input: {
        height: 40,
        width: '100%',
        backgroundColor: '#f4f4f4',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#333',
        // Adding shadow for a subtle lift
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    button: {
        backgroundColor: Color.colorSlateblue,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 20,
        width: 150,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 150,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    datePickerButton: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    datePickerButtonText: {
        color: 'black',
    },
    header: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 30,
        color: 'black'
    },
    header2: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        marginTop: 20,
    },
    dropdownContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginLeft: 4,
    },
    label: {
        fontSize: 16,
        marginRight: 10,
    },
    dropdown: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
    },
});

export default AuthScreen;
