import React from 'react';
import { StyleSheet, View, Image, Text, Pressable, Dimensions } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
const windowWidth = Dimensions.get('window').width;
import { useNavigation } from "@react-navigation/native";
const { height, width } = Dimensions.get('window');

const Header = ({heading, navigate}) => {
    const navigation = useNavigation();
    return (
        <View style={[styles.headerPosition, { position: 'relative' }]}>
            <View style={[styles.headerChild, { flex: 1, width: windowWidth }]} />
            <Image
                style={styles.hamburgerIcon}
                resizeMode="cover"
                source={require("../assets/hamburger1.png")}
            />
            <Text style={styles.myCourses1}>{heading}</Text>
            <Pressable
                style={[styles.icons8Arrow241, { left: windowWidth * 0.035 }]}
                onPress={() => navigation.navigate(navigate)}
            >
                <Image
                    style={styles.icon}
                    resizeMode="cover"
                    source={require("../assets/icons8arrow24-1.png")}
                />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    parent: {
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
    },
    headerPosition: {
        height: 81,
        position: "absolute",
        alignItems: 'center',
        paddingHorizontal: 16, // Add some padding for better spacing
        width: "100%", // Use 100% of the parent width
    },
    childIconLayout: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'cover'
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
        margin: '0 auto',
        height: height / 6,
        alignSelf: 'center',
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
        margin: '0 auto',
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
});

export default Header;
