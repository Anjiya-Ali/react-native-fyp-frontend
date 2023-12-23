import React, { useState, useContext, useEffect } from "react";
import { Text, StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProjectManagementContainer from "../components/ProjectManagementContainer";
import SearchForm from "../components/SearchForm";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import TeacherProfileContext from "../context/TeacherProfile/teacherProfileContext";

const TeacherHomePage = () => {
    const navigation = useNavigation();
    const Teachercontext = useContext(TeacherProfileContext);
    const { getTeacherProfilePicture } = Teachercontext;
    const [profilePictureUrl, setProfilePictureUrl] = useState('')
    const host = "http://192.168.121.42:3000"

    useEffect(() => {
        const fetchProfilePicture = async () => {
            const response = await getTeacherProfilePicture();
            setProfilePictureUrl(`${host}/${response.profilePictureUrl}`);
        };

        fetchProfilePicture();
    }, []);

    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity
                style={styles.arrowContainer}
                onPress={() => navigation.navigate('TeacherProfile')}
            >
                <Image
                    style={styles.arrowIcon}
                    resizeMode="cover"
                    source={{ uri: profilePictureUrl }}
                />
            </TouchableOpacity>
            <SearchForm />
            <TouchableOpacity
                onPress={() => navigation.toggleDrawer()}
            >
                <Image
                    style={styles.hamburgerIcon}
                    resizeMode="cover"
                    source={require("../assets/hamburger1.png")}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 81,
        backgroundColor: Color.colorSlateblue,
        paddingHorizontal: 16,
        borderBottomRightRadius: Border.br_11xl,
        borderBottomLeftRadius: Border.br_11xl,
    },
    hamburgerIcon: {
        width: 25,
        height: 16,
    },
    heading: {
        fontSize: FontSize.size_xl,
        fontWeight: "500",
        fontFamily: FontFamily.interMedium,
        color: Color.colorWhite,
    },
    arrowIcon: {
        borderRadius: 20,
        width: 40,
        height: 40,
    },
});

export default TeacherHomePage;
