import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import PopularCoursesContainer1 from "../components/PopularCoursesContainer1";
import LiveSessionsContainer from "../components/LiveSessionsContainer";
import PopularCommunitiesContainer1 from "../components/PopularCommunitiesContainer1";
import SearchForm from "../components/SearchForm";
import { useNavigation } from "@react-navigation/native";
import PrivacyPolicyContainer1 from "../components/PrivacyPolicyContainer1";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const HomePage2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homePage2}>
      <PopularCoursesContainer1 />
      <View style={[styles.commHeading, styles.commLayout]}>
        <View style={[styles.commHeadingChild, styles.menuPosition1]} />
        <Text style={[styles.popularCommunities, styles.anjiyaAliTypo]}>
          POPULAR COMMUNITIES
        </Text>
      </View>
      <View style={[styles.coursesHeading, styles.commLayout]}>
        <View style={[styles.commHeadingChild, styles.menuPosition1]} />
        <Text style={[styles.coursesForYou, styles.anjiyaAliTypo]}>
          COURSES FOR YOU
        </Text>
      </View>
      <LiveSessionsContainer />
      <View style={[styles.liveHeading, styles.commLayout]}>
        <View style={[styles.commHeadingChild, styles.menuPosition1]} />
        <Text style={[styles.liveSessions, styles.anjiyaAliTypo]}>
          LIVE SESSIONS
        </Text>
      </View>
      <PopularCommunitiesContainer1 />
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <SearchForm />
        <Image
          style={[styles.image1Icon, styles.image1IconLayout]}
          resizeMode="cover"
          source={require("../assets/image-19.png")}
        />
      </View>
      <View style={[styles.menu, styles.menuPosition1]}>
        <View style={[styles.menuChild, styles.menuPosition]} />
        <Pressable
          style={[styles.myCourses, styles.myPostsPosition]}
          onPress={() => navigation.navigate("MyCourses")}
        >
          <Text style={styles.myCourses1}>My Courses</Text>
        </Pressable>
        <Pressable
          style={[styles.myPosts, styles.myPostsPosition]}
          onPress={() => navigation.navigate("MyPostPage")}
        >
          <Text style={styles.myCourses1}>My Posts</Text>
        </Pressable>
        <Pressable
          style={[styles.elearningPage, styles.myPostsPosition]}
          onPress={() => navigation.navigate("ELearningPage")}
        >
          <Text style={styles.myCourses1}>eLearning Page</Text>
        </Pressable>
        <Image
          style={styles.icons8Cart241}
          resizeMode="cover"
          source={require("../assets/icons8cart24-11.png")}
        />
        <View style={styles.icons8Chats241} />
        <Image
          style={styles.icons8Chats242}
          resizeMode="cover"
          source={require("../assets/icons8chats24-21.png")}
        />
        <Image
          style={styles.icons8Sessions321}
          resizeMode="cover"
          source={require("../assets/icons8sessions32-11.png")}
        />
        <Pressable
          style={[styles.upcomingSessions, styles.myPostsPosition]}
          onPress={() => navigation.navigate("UpcomingSesions")}
        >
          <Text style={styles.myCourses1}>Upcoming Sessions</Text>
        </Pressable>
        <Pressable
          style={styles.cart}
          onPress={() => navigation.navigate("Cart1")}
        >
          <Text style={styles.myCourses1}>Cart</Text>
        </Pressable>
        <Pressable
          style={[styles.scheduledMeetings, styles.myPostsPosition]}
          onPress={() => navigation.navigate("Schedule1")}
        >
          <Text style={styles.myCourses1}>Scheduled Meetings</Text>
        </Pressable>
        <Image
          style={styles.icons8Schedule501}
          resizeMode="cover"
          source={require("../assets/icons8schedule50-11.png")}
        />
        <Image
          style={styles.icons8Connection801}
          resizeMode="cover"
          source={require("../assets/icons8connection80-11.png")}
        />
        <Image
          style={[styles.icons8Myspace3501, styles.icons8Layout]}
          resizeMode="cover"
          source={require("../assets/icons8myspace350-11.png")}
        />
        <Image
          style={[styles.icons8Topic241, styles.image1IconLayout]}
          resizeMode="cover"
          source={require("../assets/icons8topic24-11.png")}
        />
        <Image
          style={[styles.icons8Course5011, styles.icons8Layout]}
          resizeMode="cover"
          source={require("../assets/icons8course50-1-11.png")}
        />
        <Image
          style={styles.icons8Elearning641}
          resizeMode="cover"
          source={require("../assets/icons8elearning64-11.png")}
        />
        <Pressable
          style={[styles.myChats, styles.myPostsPosition]}
          onPress={() => navigation.navigate("Chat1")}
        >
          <Text style={styles.myCourses1}>My Chats</Text>
        </Pressable>
        <Pressable
          style={[styles.myConnections, styles.myPostsPosition]}
          onPress={() => navigation.navigate("People2")}
        >
          <Text style={styles.myCourses1}>My Connections</Text>
        </Pressable>
        <Pressable
          style={[styles.myCommunities, styles.myPostsPosition]}
          onPress={() => navigation.navigate("MyCommunities")}
        >
          <Text style={styles.myCourses1}>My Communities</Text>
        </Pressable>
        <View style={[styles.menuItem, styles.menuPosition]} />
        <Pressable
          style={styles.mine21}
          onPress={() => navigation.navigate("StudentProfilePage")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/mine2-11.png")}
          />
        </Pressable>
        <Text style={[styles.anjiyaAli, styles.anjiyaAliTypo]}>ANJIYA ALI</Text>
        <Pressable
          style={styles.icons8Cross3011}
          onPress={() => navigation.navigate("HomePage1")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/icons8cross30-1-11.png")}
          />
        </Pressable>
      </View>
      <PrivacyPolicyContainer1 />
    </View>
  );
};

const styles = StyleSheet.create({
  commLayout: {
    height: 38,
    width: 360,
    left: 0,
  },
  menuPosition1: {
    top: 0,
    position: "absolute",
  },
  anjiyaAliTypo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    textAlign: "left",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  headerPosition: {
    height: 81,
    top: 0,
    width: 360,
    left: 0,
    position: "absolute",
  },
  image1IconLayout: {
    width: 34,
    position: "absolute",
  },
  menuPosition: {
    left: 299,
    top: 0,
    position: "absolute",
  },
  myPostsPosition: {
    left: 359,
    position: "absolute",
  },
  icons8Layout: {
    width: 39,
    left: 309,
    height: 31,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  commHeadingChild: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGainsboro_200,
    height: 38,
    width: 360,
    left: 0,
  },
  popularCommunities: {
    left: 63,
    color: Color.labelColorLightPrimary,
    top: 7,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  commHeading: {
    top: 606,
    position: "absolute",
  },
  coursesForYou: {
    left: 88,
    color: Color.labelColorLightPrimary,
    top: 7,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  coursesHeading: {
    top: 351,
    position: "absolute",
  },
  liveSessions: {
    left: 112,
    color: Color.labelColorLightPrimary,
    top: 7,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  liveHeading: {
    top: 104,
    position: "absolute",
  },
  headerChild: {
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    backgroundColor: Color.colorSlateblue,
  },
  image1Icon: {
    top: 20,
    left: 10,
    borderRadius: Border.br_xl,
    height: 39,
  },
  menuChild: {
    width: 281,
    height: 809,
    backgroundColor: Color.colorGainsboro_200,
  },
  myCourses1: {
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    color: Color.labelColorLightPrimary,
  },
  myCourses: {
    top: 123,
  },
  myPosts: {
    top: 216,
  },
  elearningPage: {
    top: 357,
  },
  icons8Cart241: {
    width: 28,
    height: 31,
    left: 318,
    top: 494,
    position: "absolute",
  },
  icons8Chats241: {
    top: 134,
    width: 24,
    height: 24,
    left: 0,
    position: "absolute",
  },
  icons8Chats242: {
    top: 164,
    left: 315,
    width: 26,
    height: 36,
    position: "absolute",
  },
  icons8Sessions321: {
    top: 446,
    left: 311,
    width: 38,
    height: 32,
    position: "absolute",
  },
  upcomingSessions: {
    top: 451,
  },
  cart: {
    top: 494,
    left: 359,
    position: "absolute",
  },
  scheduledMeetings: {
    top: 404,
  },
  icons8Schedule501: {
    top: 398,
    left: 313,
    width: 37,
    height: 37,
    position: "absolute",
  },
  icons8Connection801: {
    top: 252,
    left: 303,
    width: 44,
    height: 46,
    position: "absolute",
  },
  icons8Myspace3501: {
    top: 307,
  },
  icons8Topic241: {
    top: 217,
    left: 312,
    height: 26,
  },
  icons8Course5011: {
    top: 119,
  },
  icons8Elearning641: {
    top: 346,
    width: 45,
    height: 45,
    left: 309,
    position: "absolute",
  },
  myChats: {
    top: 170,
  },
  myConnections: {
    top: 263,
  },
  myCommunities: {
    top: 310,
  },
  menuItem: {
    width: 280,
    height: 104,
    backgroundColor: Color.colorSlateblue,
  },
  icon: {
    borderRadius: Border.br_31xl,
  },
  mine21: {
    top: 21,
    width: 62,
    height: 66,
    left: 318,
    position: "absolute",
  },
  anjiyaAli: {
    top: 42,
    left: 398,
    color: Color.colorWhite,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  icons8Cross3011: {
    left: 536,
    top: 39,
    width: 30,
    height: 30,
    position: "absolute",
  },
  menu: {
    left: -220,
    width: 580,
    height: 809,
  },
  homePage2: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 818,
    width: "100%",
  },
});

export default HomePage2;
