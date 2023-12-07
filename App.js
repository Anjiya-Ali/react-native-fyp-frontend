const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import ELearningPage from "./screens/ELearningPage";
import CreatePost from "./screens/CreatePost";
import CreateTopicRequest2 from "./screens/CreateTopicRequest2";
import CreateTopicRequest from "./screens/CreateTopicRequest";
import Proposals from "./screens/Proposals";
import MyPostPage from "./screens/MyPostPage";
import CommunitiesE2 from "./screens/CommunitiesE2";
import BuyCourseCart from "./screens/BuyCourseCart";
import BuyCourse from "./screens/BuyCourse";
import CoursesE6 from "./screens/CoursesE6";
import CoursesE5 from "./screens/CoursesE5";
import CoursesE4 from "./screens/CoursesE4";
import CoursesE3 from "./screens/CoursesE3";
import CoursesE2 from "./screens/CoursesE2";
import CoursesE1 from "./screens/CoursesE1";
import TeachersE1 from "./screens/TeachersE1";
import EndDateSelected from "./screens/EndDateSelected";
import StartDateSelected from "./screens/StartDateSelected";
import NothingSelected from "./screens/NothingSelected";
import TimeFilter from "./screens/TimeFilter";
import TopicFilter from "./screens/TopicFilter";
import UpcomingSesions from "./screens/UpcomingSesions";
import Cart4 from "./screens/Cart4";
import Cart3 from "./screens/Cart3";
import Cart2 from "./screens/Cart2";
import Cart1 from "./screens/Cart1";
import Schedule3 from "./screens/Schedule3";
import Schedule2 from "./screens/Schedule2";
import Schedule1 from "./screens/Schedule1";
import People2 from "./screens/People2";
import AddEducation from "./screens/AddEducation";
import EditEducation2 from "./screens/EditEducation2";
import EditEducation from "./screens/EditEducation";
import StudentProfilePage from "./screens/StudentProfilePage";
import PrivacyPolicy2 from "./screens/PrivacyPolicy2";
import Proposal13 from "./screens/Proposal13";
import Proposal12 from "./screens/Proposal12";
import Proposal5 from "./screens/Proposal5";
import Proposal4 from "./screens/Proposal4";
import Proposal3 from "./screens/Proposal3";
import Proposal2 from "./screens/Proposal2";
import Proposal1 from "./screens/Proposal1";
import Proposal11 from "./screens/Proposal11";
import TeacherProfile4 from "./screens/TeacherProfile4";
import Proposal7 from "./screens/Proposal7";
import Proposal6 from "./screens/Proposal6";
import Cart5 from "./screens/Cart5";
import Notifications from "./screens/Notifications";
import FAQ2 from "./screens/FAQ2";
import FAQ1 from "./screens/FAQ1";
import Login from "./screens/Login";
import InviteMembers from "./screens/InviteMembers";
import GroupAudioCall from "./screens/GroupAudioCall";
import GroupVideoCall from "./screens/GroupVideoCall";
import Chat4 from "./screens/Chat4";
import Chat1 from "./screens/Chat1";
import AudioCall from "./screens/AudioCall";
import VideoCall from "./screens/VideoCall";
import Chat3 from "./screens/Chat3";
import UnlockedCommunity from "./screens/UnlockedCommunity";
import LockedCommunity2 from "./screens/LockedCommunity2";
import LockedCommunity from "./screens/LockedCommunity";
import CreateCommunity from "./screens/CreateCommunity";
import MyCommunities from "./screens/MyCommunities";
import LiveSession from "./screens/LiveSession";
import Certificate from "./screens/Certificate";
import Feedback from "./screens/Feedback";
import Quiz from "./screens/Quiz";
import SingleCourse from "./screens/SingleCourse";
import MyCourses from "./screens/MyCourses";
import HomePage1 from "./screens/HomePage1";
import StudentProfile1 from "./screens/StudentProfile1";
import SignUp from "./screens/SignUp";
import AreYouAStudentOrTeacher from "./screens/AreYouAStudentOrTeacher";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import SecondFrontPage from "./screens/SecondFrontPage";
import FrontPage from "./screens/FrontPage";
import HomePage2 from "./screens/HomePage2";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import CourseState from "./context/Courses/courseState";
import CartState from "./context/Cart/cartState";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <CourseState>
        <CartState>
          <NavigationContainer>
            {hideSplashScreen ? (
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                  name="MyCourses"
                  component={MyCourses}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="SingleCourse"
                  component={SingleCourse}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="ELearningPage"
                  component={ELearningPage}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="BuyCourse"
                  component={BuyCourse}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="CreatePost"
                  component={CreatePost}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="CreateTopicRequest2"
                  component={CreateTopicRequest2}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="CreateTopicRequest"
                  component={CreateTopicRequest}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Proposals"
                  component={Proposals}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="MyPostPage"
                  component={MyPostPage}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="CommunitiesE2"
                  component={CommunitiesE2}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="BuyCourseCart"
                  component={BuyCourseCart}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="CoursesE6"
                  component={CoursesE6}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="CoursesE5"
                  component={CoursesE5}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="CoursesE4"
                  component={CoursesE4}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="CoursesE3"
                  component={CoursesE3}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="CoursesE2"
                  component={CoursesE2}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="CoursesE1"
                  component={CoursesE1}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="TeachersE1"
                  component={TeachersE1}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="EndDateSelected"
                  component={EndDateSelected}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="StartDateSelected"
                  component={StartDateSelected}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="NothingSelected"
                  component={NothingSelected}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="TimeFilter"
                  component={TimeFilter}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="TopicFilter"
                  component={TopicFilter}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="UpcomingSesions"
                  component={UpcomingSesions}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Cart4"
                  component={Cart4}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Cart3"
                  component={Cart3}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Cart2"
                  component={Cart2}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Cart1"
                  component={Cart1}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Schedule3"
                  component={Schedule3}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Schedule2"
                  component={Schedule2}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Schedule1"
                  component={Schedule1}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="People2"
                  component={People2}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="AddEducation"
                  component={AddEducation}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="EditEducation2"
                  component={EditEducation2}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="EditEducation"
                  component={EditEducation}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="StudentProfilePage"
                  component={StudentProfilePage}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="PrivacyPolicy2"
                  component={PrivacyPolicy2}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Proposal13"
                  component={Proposal13}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Proposal12"
                  component={Proposal12}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Proposal5"
                  component={Proposal5}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Proposal4"
                  component={Proposal4}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Proposal3"
                  component={Proposal3}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Proposal2"
                  component={Proposal2}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Proposal1"
                  component={Proposal1}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Proposal11"
                  component={Proposal11}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="TeacherProfile4"
                  component={TeacherProfile4}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Proposal7"
                  component={Proposal7}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Proposal6"
                  component={Proposal6}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Cart5"
                  component={Cart5}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Notifications"
                  component={Notifications}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="FAQ2"
                  component={FAQ2}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="FAQ1"
                  component={FAQ1}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Login"
                  component={Login}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="InviteMembers"
                  component={InviteMembers}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="GroupAudioCall"
                  component={GroupAudioCall}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="GroupVideoCall"
                  component={GroupVideoCall}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Chat4"
                  component={Chat4}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Chat1"
                  component={Chat1}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="AudioCall"
                  component={AudioCall}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="VideoCall"
                  component={VideoCall}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Chat3"
                  component={Chat3}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="UnlockedCommunity"
                  component={UnlockedCommunity}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="LockedCommunity2"
                  component={LockedCommunity2}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="LockedCommunity"
                  component={LockedCommunity}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="CreateCommunity"
                  component={CreateCommunity}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="MyCommunities"
                  component={MyCommunities}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="LiveSession"
                  component={LiveSession}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Certificate"
                  component={Certificate}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Feedback"
                  component={Feedback}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Quiz"
                  component={Quiz}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="HomePage1"
                  component={HomePage1}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="StudentProfile1"
                  component={StudentProfile1}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="SignUp"
                  component={SignUp}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="AreYouAStudentOrTeacher"
                  component={AreYouAStudentOrTeacher}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="PrivacyPolicy"
                  component={PrivacyPolicy}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="SecondFrontPage"
                  component={SecondFrontPage}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="FrontPage"
                  component={FrontPage}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="HomePage2"
                  component={HomePage2}
                  options={{ headerShown: false }}
                />
              </Stack.Navigator>
            ) : null}
          </NavigationContainer>
        </CartState>
      </CourseState>
    </>
  );
};
export default App;
