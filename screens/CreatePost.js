import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const CreatePost = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.createPost}>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={styles.createPost1}>CREATE POST</Text>
      </View>
      <Pressable
        style={[styles.icons8Arrow241, styles.icons8Arrow241Position]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icons8arrow24-1.png")}
        />
      </Pressable>
      <Text style={styles.inshaSamnani}>Insha Samnani</Text>
      <Image
        style={[styles.createPostChild, styles.icons8Arrow241Position]}
        resizeMode="cover"
        source={require("../assets/rectangle-4780.png")}
      />
      <Text style={styles.whatsOnYour}>What’s on your mind?</Text>
      <Image
        style={[styles.inshasamnani6Icon, styles.icons8Arrow241Position]}
        resizeMode="cover"
        source={require("../assets/inshasamnani-6.png")}
      />
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={styles.post}>POST</Text>
      </View>
      <View style={[styles.icons8Image501Parent, styles.icons8Layout]}>
        <Image
          style={[styles.icons8Image501, styles.icons8Layout]}
          resizeMode="cover"
          source={require("../assets/icons8image50-1.png")}
        />
        <Text style={[styles.photos, styles.videoTypo]}>Photos</Text>
      </View>
      <View style={[styles.videoParent, styles.videoLayout]}>
        <Text style={[styles.video, styles.videoTypo]}>Video</Text>
        <Image
          style={[styles.icons8Video501, styles.videoLayout]}
          resizeMode="cover"
          source={require("../assets/icons8video50-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 40,
    width: 360,
    position: "absolute",
  },
  groupPosition: {
    backgroundColor: Color.colorSlateblue,
    left: 0,
    top: 0,
  },
  icons8Arrow241Position: {
    position: "absolute",
    left: 8,
  },
  groupLayout: {
    height: 23,
    width: 333,
    position: "absolute",
  },
  icons8Layout: {
    height: 26,
    position: "absolute",
  },
  videoTypo: {
    top: 7,
    fontWeight: "300",
    fontSize: FontSize.size_smi,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.calibri,
    textAlign: "left",
    position: "absolute",
  },
  videoLayout: {
    height: 28,
    position: "absolute",
  },
  groupChild: {
    height: 40,
    width: 360,
    position: "absolute",
  },
  createPost1: {
    top: 5,
    left: 120,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.javaneseText,
    color: Color.colorWhite,
    width: 120,
    height: 31,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent: {
    left: 0,
    top: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  icons8Arrow241: {
    top: 8,
    height: 24,
    width: 26,
    left: 8,
  },
  inshaSamnani: {
    top: 57,
    left: 51,
    fontSize: FontSize.size_mini,
    width: 108,
    height: 17,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.calibri,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  createPostChild: {
    top: 93,
    borderRadius: Border.br_sm,
    width: 341,
    height: 207,
    left: 8,
  },
  whatsOnYour: {
    top: 101,
    width: 125,
    fontWeight: "300",
    fontSize: FontSize.size_smi,
    left: 15,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.calibri,
    textAlign: "left",
    position: "absolute",
  },
  inshasamnani6Icon: {
    top: 47,
    borderRadius: Border.br_127xl,
    height: 37,
    width: 37,
    left: 8,
  },
  groupItem: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorSlateblue,
    left: 0,
    top: 0,
  },
  post: {
    top: 6,
    left: 154,
    color: Color.colorGainsboro_100,
    width: 34,
    fontSize: FontSize.size_smi,
    height: 17,
    fontFamily: FontFamily.calibri,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  rectangleGroup: {
    top: 378,
    left: 8,
  },
  icons8Image501: {
    width: 26,
    left: 0,
    top: 0,
  },
  photos: {
    left: 30,
    height: 13,
    width: 37,
  },
  icons8Image501Parent: {
    top: 307,
    width: 67,
    left: 15,
    height: 26,
  },
  video: {
    left: 32,
    width: 31,
    height: 14,
  },
  icons8Video501: {
    width: 28,
    left: 0,
    top: 0,
  },
  videoParent: {
    top: 334,
    left: 14,
    width: 63,
  },
  createPost: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default CreatePost;
