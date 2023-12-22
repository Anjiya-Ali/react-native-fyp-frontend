import React from 'react';
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const Header = ({ heading, navigate }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.headerContainer}>
            <Pressable
                style={styles.arrowContainer}
                onPress={() => navigation.navigate(navigate)}
            >
                <Image
                    style={styles.arrowIcon}
                    resizeMode="cover"
                    source={require("../assets/icons8arrow24-1.png")}
                />
            </Pressable>
            <Text style={styles.heading}>{heading}</Text>
            <Pressable
                onPress={() => navigation.toggleDrawer()}
            >
                <Image
                    style={styles.hamburgerIcon}
                    resizeMode="cover"
                    source={require("../assets/hamburger1.png")}
                />
            </Pressable>
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
        width: 26,
        height: 24,
    },
});

export default Header;
