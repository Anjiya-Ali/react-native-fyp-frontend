import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SectionCard3 from "../components/SectionCard3";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const InviteMembers = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.inviteMembers}>
      <TouchableOpacity
        style={styles.rectangleParent}
        onPress={() => navigation.navigate("UnlockedCommunity")}
      >
        <View style={styles.groupChild} />
        <Text style={styles.inviteYourFriends}>INVITE YOUR FRIENDS</Text>
        <TouchableOpacity
          style={styles.icons8Arrow241}
          onPress={() => navigation.navigate("UnlockedCommunity")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icons8arrow24-1.png")}
          />
        </TouchableOpacity>
      </TouchableOpacity>
      <View style={styles.inviteMembersChild} />
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <View style={styles.searchParent}>
          <Text style={[styles.search, styles.searchTypo]}>Search</Text>
          <Image
            style={styles.icons8Search501}
            resizeMode="cover"
            source={require("../assets/icons8search50-1.png")}
          />
        </View>
      </View>
      <View style={[styles.rectangleContainer, styles.groupParentLayout]}>
        <View style={[styles.groupInner, styles.groupParentLayout]} />
        <View style={[styles.groupInner, styles.groupParentLayout]} />
        <Image
          style={[styles.icon1, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/1516807823802-12.png")}
        />
        <Text style={[styles.drMuhammadRafi, styles.eshalFareedPosition]}>
          Dr Muhammad Rafi
        </Text>
        <View style={[styles.groupChild1, styles.groupChildLayout]} />
        <Text style={[styles.invite, styles.inviteClr]}>Invite</Text>
      </View>
      <SectionCard3
        fullName="Ismail Ahmed Ansari"
        dimensionCode={require("../assets/image-12.png")}
      />
      <SectionCard3
        fullName="Anjiya Muhammad Ali"
        dimensionCode={require("../assets/image-21.png")}
        propTop={227}
        propTop1={8}
      />
      <View style={[styles.groupView, styles.groupParentLayout]}>
        <View style={[styles.groupInner, styles.groupParentLayout]} />
        <View style={[styles.groupInner, styles.groupParentLayout]} />
        <View style={[styles.groupInner, styles.groupParentLayout]} />
        <Text style={[styles.drMuhammadRafi, styles.eshalFareedPosition]}>
          Romasha Khurshid
        </Text>
        <View style={[styles.groupChild1, styles.groupChildLayout]} />
        <Text style={[styles.invite, styles.inviteClr]}>Invite</Text>
      </View>
      <View style={[styles.rectangleParent1, styles.groupParentLayout]}>
        <View style={[styles.groupInner, styles.groupParentLayout]} />
        <View style={[styles.groupInner, styles.groupParentLayout]} />
        <View style={[styles.groupInner, styles.groupParentLayout]} />
        <Text style={[styles.drMuhammadRafi, styles.eshalFareedPosition]}>
          Yusra Adam
        </Text>
        <View style={[styles.groupChild1, styles.groupChildLayout]} />
        <Text style={[styles.invite, styles.inviteClr]}>Invite</Text>
        <Image
          style={[styles.vyw5swcg400x4001Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/vyw5swcg-400x400-11.png")}
        />
      </View>
      <View style={[styles.rectangleParent2, styles.groupParentLayout]}>
        <View style={[styles.groupInner, styles.groupParentLayout]} />
        <View style={[styles.groupInner, styles.groupParentLayout]} />
        <View style={[styles.groupInner, styles.groupParentLayout]} />
        <Text style={[styles.drMuhammadRafi, styles.eshalFareedPosition]}>
          Rahim Samnani
        </Text>
        <View style={[styles.groupChild1, styles.groupChildLayout]} />
        <Text style={[styles.invite, styles.inviteClr]}>Invite</Text>
        <Image
          style={[styles.photo1568316674077D72ee56de6Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/photo1568316674077d72ee56de61c-1.png")}
        />
      </View>
      <View style={[styles.rectangleParent3, styles.groupParentLayout]}>
        <View style={[styles.groupInner, styles.groupParentLayout]} />
        <View style={[styles.groupInner, styles.groupParentLayout]} />
        <View style={[styles.groupInner, styles.groupParentLayout]} />
        <Text style={[styles.drMuhammadRafi, styles.eshalFareedPosition]}>
          Saira Samnani
        </Text>
        <View style={[styles.groupChild1, styles.groupChildLayout]} />
        <Text style={[styles.invite, styles.inviteClr]}>Invite</Text>
        <Image
          style={[styles.mai1Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/mai-11.png")}
        />
      </View>
      <View style={[styles.rectangleParent4, styles.groupChildPosition]}>
        <View style={[styles.groupChild18, styles.groupParentLayout]} />
        <View style={[styles.groupChild18, styles.groupParentLayout]} />
        <View style={[styles.groupChild18, styles.groupParentLayout]} />
        <Image
          style={[styles.download2Icon, styles.groupChild21Position]}
          resizeMode="cover"
          source={require("../assets/download-2.png")}
        />
        <Text style={[styles.eshalFareed, styles.invite5Typo]}>
          Eshal Fareed
        </Text>
        <View style={[styles.groupChild21, styles.groupChild21Position]} />
        <Text style={[styles.invite5, styles.invite5Typo]}>Invite</Text>
        <Image
          style={[styles.icon2, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/1695878498659-11.png")}
        />
      </View>
      <View style={[styles.rectangleParent5, styles.groupChildPosition]}>
        <View style={[styles.groupChild22, styles.groupChildPosition]} />
        <View style={[styles.groupChild23, styles.groupChildPosition]} />
        <View style={[styles.groupChild23, styles.groupChildPosition]} />
        <Text style={[styles.shumailaLaljiani, styles.eshalFareedPosition]}>
          Shumaila Laljiani
        </Text>
        <View style={[styles.groupChild1, styles.groupChildLayout]} />
        <Text style={[styles.invite, styles.inviteClr]}>Invite</Text>
        <Image
          style={[styles.aa9ef022cdae83df1d96baa6fbbeb3Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/aa9ef022cdae83df1d96baa6fbbeb380-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    width: 360,
    height: 32,
    left: 0,
    position: "absolute",
  },
  searchTypo: {
    textAlign: "left",
    fontFamily: FontFamily.calibri,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  groupParentLayout: {
    height: 47,
    width: 357,
    left: 0,
    position: "absolute",
  },
  iconLayout2: {
    height: 41,
    width: 41,
    borderRadius: Border.br_31xl,
    left: 4,
    position: "absolute",
  },
  eshalFareedPosition: {
    left: 50,
    color: Color.labelColorLightPrimary,
  },
  groupChildLayout: {
    height: 31,
    width: 96,
    borderRadius: Border.br_base,
    left: 248,
    backgroundColor: Color.colorSlateblue,
  },
  inviteClr: {
    color: Color.colorGainsboro_100,
    left: 274,
    fontWeight: "700",
  },
  iconLayout1: {
    height: 35,
    width: 33,
    left: 8,
  },
  iconLayout: {
    height: 34,
    width: 33,
    left: 8,
    position: "absolute",
  },
  groupChildPosition: {
    width: 357,
    left: 0,
    position: "absolute",
  },
  groupChild21Position: {
    top: 278,
    position: "absolute",
  },
  invite5Typo: {
    top: 282,
    textAlign: "left",
    fontFamily: FontFamily.calibri,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorSlateblue,
    height: 40,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  inviteYourFriends: {
    left: 25,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.javaneseText,
    color: Color.colorWhite,
    textAlign: "center",
    width: 309,
    height: 25,
    top: 8,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  icons8Arrow241: {
    width: 26,
    height: 24,
    left: 8,
    top: 8,
    position: "absolute",
  },
  rectangleParent: {
    height: 40,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  inviteMembersChild: {
    top: 72,
    left: 357,
    backgroundColor: Color.labelColorLightPrimary,
    width: 2,
    height: 601,
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.colorWhite,
    height: 32,
    top: 0,
  },
  search: {
    left: 21,
    color: Color.labelColorLightPrimary,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.calibri,
    fontSize: FontSize.size_lg,
    top: 0,
  },
  icons8Search501: {
    top: 3,
    width: 17,
    height: 17,
    left: 0,
    position: "absolute",
  },
  searchParent: {
    top: 5,
    left: 143,
    width: 71,
    height: 22,
    position: "absolute",
  },
  rectangleGroup: {
    top: 40,
    height: 32,
  },
  groupInner: {
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  icon1: {
    top: 8,
  },
  drMuhammadRafi: {
    top: 12,
    textAlign: "left",
    fontFamily: FontFamily.calibri,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  groupChild1: {
    top: 8,
    position: "absolute",
  },
  invite: {
    top: 12,
    textAlign: "left",
    fontFamily: FontFamily.calibri,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  rectangleContainer: {
    top: 89,
  },
  groupView: {
    top: 296,
  },
  vyw5swcg400x4001Icon: {
    top: 4,
    borderRadius: Border.br_200xl,
    position: "absolute",
  },
  rectangleParent1: {
    top: 365,
  },
  photo1568316674077D72ee56de6Icon: {
    top: 7,
    borderRadius: 33,
  },
  rectangleParent2: {
    top: 434,
  },
  mai1Icon: {
    borderRadius: Border.br_195xl,
    top: 8,
  },
  rectangleParent3: {
    top: 503,
  },
  groupChild18: {
    top: 270,
    backgroundColor: Color.colorWhite,
  },
  download2Icon: {
    borderRadius: 27,
    height: 35,
    width: 33,
    left: 8,
  },
  eshalFareed: {
    left: 50,
    color: Color.labelColorLightPrimary,
  },
  groupChild21: {
    height: 31,
    width: 96,
    borderRadius: Border.br_base,
    left: 248,
    backgroundColor: Color.colorSlateblue,
  },
  invite5: {
    color: Color.colorGainsboro_100,
    left: 274,
    fontWeight: "700",
  },
  icon2: {
    top: 0,
  },
  rectangleParent4: {
    top: 302,
    height: 317,
  },
  groupChild22: {
    height: 28,
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  groupChild23: {
    backgroundColor: Color.colorWhite,
    height: 32,
    top: 0,
  },
  shumailaLaljiani: {
    width: 150,
    height: 16,
    top: 12,
    textAlign: "left",
    fontFamily: FontFamily.calibri,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  aa9ef022cdae83df1d96baa6fbbeb3Icon: {
    borderRadius: 35,
    top: 12,
  },
  rectangleParent5: {
    top: 641,
    height: 46,
  },
  inviteMembers: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    height: 673,
    overflow: "hidden",
    width: "100%",
  },
});

export default InviteMembers;
