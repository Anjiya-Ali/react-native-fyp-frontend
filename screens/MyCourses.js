import React, { useContext, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, View, ScrollView, Image, Text, Pressable, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProgressCircle from 'react-native-progress-circle'
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
const windowWidth = Dimensions.get('window').width;
import CourseContext from "../context/Courses/courseContext";

const {height, width} = Dimensions.get('window');
const MyCourses = (props) => {
  const { getMyCourses, myCourses } = useContext(CourseContext);
  const { getCourseCompletion, percentage } = useContext(CourseContext);
  const navigation = useNavigation();
  const host = 'http://192.168.244.190:3000';

  useEffect(() => {
    getMyCourses();
  },[]);

  if (!myCourses) {
    return (
        <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={[styles.headerPosition, { position: 'relative' }]}>
              <View style={[styles.headerChild, { flex: 1, width: windowWidth }]} />
              <Image
                style={styles.hamburgerIcon}
                resizeMode="cover"
                source={require("../assets/hamburger1.png")}
              />
              <Text style={styles.myCourses1}>MY COURSES</Text>
              <Pressable
                style={[styles.icons8Arrow241, { left: windowWidth * 0.035 }]}
                onPress={() => navigation.navigate("HomePage2")}
              >
                <Image
                  style={styles.icon}
                  resizeMode="cover"
                  source={require("../assets/icons8arrow24-1.png")}
                />
              </Pressable>
            </View>
            <View>
                <Text>No Enrolled Courses Yet!</Text>
            </View>
        </View>
    );
  }
  return (
    <ScrollView style={{flex: 1, flexDirection: 'column'}}>
      <View style={[styles.headerPosition, { position: 'relative' }]}>
        <View style={[styles.headerChild, { flex: 1, width: windowWidth }]} />
        <Image
          style={styles.hamburgerIcon}
          resizeMode="cover"
          source={require("../assets/hamburger1.png")}
        />
        <Text style={styles.myCourses1}>MY COURSES</Text>
        <Pressable
          style={[styles.icons8Arrow241, { left: windowWidth * 0.035 }]}
          onPress={() => navigation.navigate("HomePage2")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icons8arrow24-1.png")}
          />
        </Pressable>
      </View>
    <View style={styles.parent}>
      {myCourses.map((course) => {
        getCourseCompletion(course._id);
        return (
          <View key={course._id} style={styles.box}>
            <Pressable
              key={course._id}
              style={styles.agile}
              onPress={() => navigation.navigate("SingleCourse", { courseId: course._id })}
            >
              <View style={styles.courseDetails}>
                <View style={styles.image1Icon}>
                  <Image
                    style={styles.childIconLayout}
                    resizeMode="cover"
                    source={{ uri: `${host}/${course.featured_image}` }}
                  />
                </View>
                <View style={styles.headerPosition}>
                  <Text style={[styles.excelInAgile, styles.excelInAgileTypo]}>
                    {course.title}
                  </Text>
              <View style={styles.progressIcon}>
              <ProgressCircle
                percent={percentage}
                radius={25}
                borderWidth={8}
                color="#373eb2"
                shadowColor="#8e8e93"
                bgColor="#fff"
              >
                <Text style={{ fontSize: 14 }}>{`${percentage}%`}</Text>
              </ProgressCircle>
            </View>
              </View>
            </View>
          </Pressable>
        </View>
        );
      })}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  courseDetails: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  parent: {
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    },
  headerPosition: {
    height: 81,
    position: "absolute",
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16, // Add some padding for better spacing
    width: "100%", // Use 100% of the parent width
  },
  childIconLayout: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
    borderRadius: 10,
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
  progressIcon: {
      top: width < 600 ? 98 : 227,
      right:0,
      position: "absolute",
    },
  box: {
      marginTop: '3%',
      margin: '0 auto',
      height: '100%',
      alignSelf: 'center',
  },
  excelInAgileTypo: {
      height: 46,
      width: 283,
      color: Color.colorSlateblue,
      fontFamily: FontFamily.interExtraBold,
      fontWeight: "800",
      fontSize: 18,
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
    height: width < 600 ? height / 4.8 : height / 2.8,
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

export default MyCourses;