import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import CourseState from "./context/Courses/courseState";
import CartState from "./context/Cart/cartState";
import SessionState from "./context/Sessions/sessionState";
import * as React from "react";

import Certificate from "./screens/Certificate";
import MyCourses from "./screens/MyCourses";
import ELearningPage from "./screens/ELearningPage";
import BuyCourseCart from "./screens/BuyCourseCart";
import BuyCourse from "./screens/BuyCourse";
import CoursesE1 from "./screens/CoursesE1";
import Cart4 from "./screens/Cart4";
import Cart3 from "./screens/Cart3";
import Feedback from "./screens/Feedback";
import Quiz from "./screens/Quiz";
import SingleCourse from "./screens/SingleCourse";
import HomePage1 from "./screens/HomePage1";
import TeacherHomePage from "./screens/TeacherHomePage";
import StudentProfileState from "./context/StudentProfile/studentProfileState";
import TeacherProfileState from "./context/TeacherProfile/teacherProfileState";
import UserState from "./context/User/userState";
import JointAccountState from "./context/JointAccounts/JointAccountState";
import SocialHubState from "./context/SocialHub/SocialHubState";
import AddLanguageScreen from "./screens/AddLanguageScreen";
import AddInterestScreen from "./screens/AddInterestScreen";
import ViewAllLanguages from "./screens/ViewAllLanguages";
import ViewAllBadges from "./screens/ViewAllBadges";
import ViewAllCertifications from "./screens/ViewAllCertifications.js";
import ViewAllInterests from "./screens/ViewAllInterests";
import ViewAllEducation from "./screens/ViewAllEducation";
import EditInterestScreen from "./screens/EditInterestScreen";
import EditEducationScreen from "./screens/EditEducationScreen";
import EditLanguageScreen from "./screens/EditLanguageScreen";
import UpdateSingleInterestScreen from "./screens/UpdateSingleInterestScreen";
import UpdateSingleEducationScreen from "./screens/UpdateSingleEducationScreen";
import UpdateSingleLanguageScreen from "./screens/UpdateSingleLanguageScreen";
import AddEducationScreen from "./screens/AddEducationScreen";
import StudentProfilePage from "./screens/StudentProfilePage";
import TeacherProfilePage from "./screens/TeacherProfilePage";
import MyConnections from "./screens/MyConnections";
import MyFollowers from "./screens/MyFollowers";
import MyPendingConnections from "./screens/MyPendingConnections";
import Main from "./screens/Main";
import Section1Screen from "./screens/Section1Screen";
import Section2Screen from "./screens/Section2Screen";
import Section3Screen from "./screens/Section3Screen";
import OtherProfilePage from "./screens/OtherProfilePage";
import ViewAllExperiencesT from "./screens/ViewAllExperiencesT";
import ViewAllEducationT from "./screens/ViewAllEducationT";
import ViewAllCertificationsT from "./screens/ViewAllCertificationsT";
import ViewAllProjectsT from "./screens/ViewAllProjectsT";
import ViewAllHawT from "./screens/ViewAllHawT";
import ViewAllSkillsT from "./screens/ViewAllSkillsT";
import ViewAllFeedbacksT from "./screens/ViewAllFeedbacksT";
import ViewAllLanguagesT from "./screens/ViewAllLanguagesT";
import AddExperienceScreenT from "./screens/AddExperienceScreenT";
import AddEducationScreenT from "./screens/AddEducationScreenT";
import AddCertificationScreenT from "./screens/AddCertificationScreenT";
import AddProjectScreenT from "./screens/AddProjectScreenT";
import AddHawScreenT from "./screens/AddHawScreenT";
import AddLanguageScreenT from "./screens/AddLanguageScreenT";
import AddSkillScreenT from "./screens/AddSkillScreenT";
import EditLanguageScreenT from "./screens/EditLanguageScreenT";
import EditSkillScreenT from "./screens/EditSkillScreenT";
import Register from "./screens/Register";
import Register1 from "./screens/Register1";
import EmailVerification from "./screens/EmailVerification";
import CodeVerification from "./screens/CodeVerification";
import PasswordVerification from "./screens/PasswordVerification";
import EditProjectScreenT from "./screens/EditProjectScreenT";
import EditHawScreenT from "./screens/EditHawScreenT";
import EditCertificationScreenT from "./screens/EditCertificationScreenT";
import EditEducationScreenT from "./screens/EditEducationScreenT";
import EditExperienceScreenT from "./screens/EditExperienceScreenT";
import UpdateSingleExperienceScreenT from "./screens/UpdateSingleExperienceScreenT";
import UpdateSingleEducationScreenT from "./screens/UpdateSingleEducationScreenT";
import UpdateSingleCertificationScreenT from "./screens/UpdateSingleCertificationScreenT";
import UpdateSingleLanguageScreenT from "./screens/UpdateSingleLanguageScreenT";
import UpdateSingleProjectScreenT from "./screens/UpdateSingleProjectScreenT";
import UpdateSingleHawScreenT from "./screens/UpdateSingleHawScreenT";
import ViewMemberForJointAccount from "./screens/ViewMemberForJointAccount";
import WriteMessageForJointAccount from "./screens/WriteMessageForJointAccount";
import InviteSuccessful from "./screens/InviteSuccessful";
import MypendingInvitations from "./screens/MypendingInvitations";
import MyAcceptedInvitations from "./screens/MyAcceptedInvitations";
import ViewJointAccountRequests from "./screens/ViewJointAccountRequests";
import ViewSingleJointAccountRequest from "./screens/ViewSingleJointAccountRequest";
import StudentProfile from "./screens/StudentProfile"
import TeacherProfile from "./screens/TeacherProfile"
import MySessions from "./screens/MySessions"
import Toast from "react-native-toast-message";
import { useEffect, useRef, useState } from 'react';
import { PermissionsAndroid, Platform, SafeAreaView, StatusBar } from 'react-native';
import { CometChat } from "@cometchat/chat-sdk-react-native";
import { COMETCHAT_CONSTANTS } from './src/CONSTS';
import { CometChatContextProvider } from '@cometchat/chat-uikit-react-native';
import { CometChatTheme } from '@cometchat/chat-uikit-react-native';
import { CometChatUIKit } from '@cometchat/chat-uikit-react-native';
import StackNavigator from './src/StackNavigator';
import { UserContextProvider } from './UserContext';
import { CometChatIncomingCall } from '@cometchat/chat-uikit-react-native';
import { CometChatUIEventHandler } from '@cometchat/chat-uikit-react-native';
import { metaInfo } from './src/metaInfo';

import { createStackNavigator } from "@react-navigation/stack";
import { Login, SignIn, SignUp } from "./src/components/login";
import { Home2 } from "./src/components/home/Home";
import { ConversationComponentList } from "./src/components/conversation";
import { CometChatConversationsWithMessages, CometChatConversations, CometChatUsersWithMessages, CometChatUsers, CometChatCallLogs, CometChatCallLogsWithDetails } from "@cometchat/chat-uikit-react-native";
import { Messages, MessageComposer, MessageHeader, MessageList, MessageModuleList } from "./src/components/messages";
import { UserModuleList } from "./src/components/users/UserModuleList";
import { Details } from "./src/components/users/Details";
import { JoinGroup, AddMember, BannedMembers, CreateGroup, GroupDetails, GroupMember, GroupModuleList, Groups, GroupsWithMessages, TransferOwnership } from "./src/components/groups";
import { AudioBubble, Avatar, BadgeCount, FileBubble, ImageBubble, ListItem, Localize, MessageReceipt, SharedModuleList, SoundManager, StatusIndicator, TextBubble, Theme, VideoBubble } from "./src/components/shared";
import { CallButton, CallFeatureList } from "./src/components/calls";
import { CallBubble } from "./src/components/calls/CallBubble";
import { IncomingCall } from "./src/components/calls/IncomingCall";
import { OutgoingCall } from "./src/components/calls/OutgoingCall";
import Contacts from "./src/components/conversation/Contacts";
import MessageInformation from "./src/components/messages/MessageInformation";
import MediaRecorder from "./src/components/shared/MediaRecorder";
import FormBubble from "./src/components/shared/FormBubble";
import CardBubble from "./src/components/shared/CardBubble";
import { CallLogsModuleList } from "./src/components/callLogs/CallLogsModules";
import CallLogDetails from "./src/components/callLogs/CometChatCallLogDetails";
import CallLogParticipants from "./src/components/callLogs/CometChatParticipants";
import CallLogRecordings from "./src/components/callLogs/CometChatCallLogRecordings";
import CallLogHistory from "./src/components/callLogs/CometChatCallLogHistory";
import SchedulerBubble from "./src/components/shared/SchedulerBubble";

var listnerID = "UNIQUE_LISTENER_ID";

import colors from './src/styles/colors';
import Home from './src/scenes/home';
import Viewer_Home from './src/scenes/home/viewer';
import Speaker_Home from './src/scenes/home/speaker';
import Meeting from './src/scenes/ILS';
import { SCREEN_NAMES } from './src/navigators/screenNames';
const Stack = createNativeStackNavigator();

const App = () => {
    const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

    const getPermissions = () => {
        if (Platform.OS == "android") {
            PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.CAMERA,
                PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
            ]);
        }
    }

    const [callRecevied, setCallReceived] = useState(false);
    const incomingCall = useRef(null);

    useEffect(() => {
        getPermissions();
        CometChatUIKit.init({
            appId: COMETCHAT_CONSTANTS.APP_ID,
            authKey: COMETCHAT_CONSTANTS.AUTH_KEY,
            region: COMETCHAT_CONSTANTS.REGION,
        })
            .then(() => {
                try { CometChat.setDemoMetaInfo(metaInfo) } catch (err) { }
                if (CometChat.setSource) {
                    CometChat.setSource('ui-kit', Platform.OS, 'react-native');
                }
            })
            .catch(() => {
                return null;
            });

        CometChat.addCallListener(
            listnerID,
            new CometChat.CallListener({
                onIncomingCallReceived: (call) => {
                    incomingCall.current = call;
                    setCallReceived(true);
                },
                onOutgoingCallRejected: (call) => {
                    incomingCall.current = null;
                    setCallReceived(false);
                },
                onIncomingCallCancelled: (call) => {
                    incomingCall.current = null;
                    setCallReceived(false);
                }
            })
        );

        CometChatUIEventHandler.addCallListener(listnerID, {
            ccCallEnded: () => {
                incomingCall.current = null;
                setCallReceived(false);
            },
        });

        return () => {
            CometChatUIEventHandler.removeCallListener(listnerID);
            CometChat.removeCallListener(listnerID)
        }

    }, []);

    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
                {
                    callRecevied &&
                    <CometChatIncomingCall
                        call={incomingCall.current}
                        onDecline={(call) => {
                            setCallReceived(false)
                        }}
                        incomingCallStyle={{
                            backgroundColor: 'white',
                            titleColor: 'black',
                            subtitleColor: 'gray',
                            titleFont: {
                                fontSize: 20,
                                fontWeight: 'bold'
                            }
                        }}
                    />
                }
                <UserContextProvider>
                    <CometChatContextProvider theme={new CometChatTheme({})}>
                        <SocialHubState>
                            <StudentProfileState>
                                <TeacherProfileState>
                                    <JointAccountState>
                                        <UserState>
                                            <CourseState>
                                                <CartState>
                                                    <SessionState>
                                                        <NavigationContainer>
                                                            {hideSplashScreen ? (
                                                                <Stack.Navigator headerMode="none">
                                                                    <Stack.Screen
                                                                        name="Main"
                                                                        component={Main}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
                                                                    <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}/>
                                                                    <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
                                                                    <Stack.Screen name="Home2" component={Home2} options={{ headerShown: false }}/>
                                                                    <Stack.Screen name="ConversationsModule" component={ConversationComponentList} />
                                                                    <Stack.Screen name="MessagesModule" component={MessageModuleList} />
                                                                    <Stack.Screen name="CallsModule" component={CallFeatureList} />
                                                                    <Stack.Screen name="CallButton" component={CallButton} />
                                                                    <Stack.Screen name="IncomingCall" component={IncomingCall} options={{ gestureEnabled: false }} />
                                                                    <Stack.Screen name="OutgoingCall" component={OutgoingCall} />
                                                                    <Stack.Screen name="CallBubble" component={CallBubble} />
                                                                    <Stack.Screen name="CallLogsModule" component={CallLogsModuleList} />
                                                                    <Stack.Screen name="CometChatCallLogs" component={CometChatCallLogs} />
                                                                    <Stack.Screen name="CometChatCallLogsWithDetails" component={CometChatCallLogsWithDetails} />
                                                                    <Stack.Screen name="CometChatCallLogDetails" component={CallLogDetails} />
                                                                    <Stack.Screen name="CometChatCallLogParticipants" component={CallLogParticipants} />
                                                                    <Stack.Screen name="CometChatCallLogRecordings" component={CallLogRecordings} />
                                                                    <Stack.Screen name="CometChatCallLogHistory" component={CallLogHistory} />
                                                                    <Stack.Screen name="Contacts" component={Contacts} />
                                                                    <Stack.Screen name="SharedModule" component={SharedModuleList} />
                                                                    <Stack.Screen name="UsersModule" component={UserModuleList} />
                                                                    <Stack.Screen name="GroupsModule" component={GroupModuleList} />
                                                                    <Stack.Screen name="ConversationsWithMessages" component={CometChatConversationsWithMessages} options={{ headerShown: false }}/>
                                                                    <Stack.Screen name="Conversations" component={CometChatConversations} />
                                                                    <Stack.Screen name="Messages" component={Messages} />
                                                                    <Stack.Screen name="MessageHeader" component={MessageHeader} />
                                                                    <Stack.Screen name="MessageList" component={MessageList} />
                                                                    <Stack.Screen name="MessageComposer" component={MessageComposer} />
                                                                    <Stack.Screen name="MessageInformation" component={MessageInformation} />
                                                                    <Stack.Screen name="UsersWithMessages" component={CometChatUsersWithMessages} />
                                                                    <Stack.Screen name="Users" component={CometChatUsers} />
                                                                    <Stack.Screen name="Details" component={Details} />
                                                                    <Stack.Screen name="GroupsWithMessages" component={GroupsWithMessages} />
                                                                    <Stack.Screen name="Groups" component={Groups} />
                                                                    <Stack.Screen name="CreateGroup" component={CreateGroup} />
                                                                    <Stack.Screen name="JoinGroup" component={JoinGroup} />
                                                                    <Stack.Screen name="GroupMember" component={GroupMember} />
                                                                    <Stack.Screen name="AddMember" component={AddMember} />
                                                                    <Stack.Screen name="TransferOwnership" component={TransferOwnership} />
                                                                    <Stack.Screen name="BannedMembers" component={BannedMembers} />
                                                                    <Stack.Screen name="GroupDetails" component={GroupDetails} />
                                                                    <Stack.Screen name="AudioBubble" component={AudioBubble} />
                                                                    <Stack.Screen name="Avatar" component={Avatar} />
                                                                    <Stack.Screen name="BadgeCount" component={BadgeCount} />
                                                                    <Stack.Screen name="FileBubble" component={FileBubble} />
                                                                    <Stack.Screen name="ImageBubble" component={ImageBubble} />
                                                                    <Stack.Screen name="ListItem" component={ListItem} />
                                                                    <Stack.Screen name="Localize" component={Localize} />
                                                                    <Stack.Screen name="MessageReceipt" component={MessageReceipt} />
                                                                    <Stack.Screen name="SoundManager" component={SoundManager} />
                                                                    <Stack.Screen name="StatusIndicator" component={StatusIndicator} />
                                                                    <Stack.Screen name="TextBubble" component={TextBubble} />
                                                                    <Stack.Screen name="Theme" component={Theme} />
                                                                    <Stack.Screen name="VideoBubble" component={VideoBubble} />
                                                                    <Stack.Screen name="MediaRecorder" component={MediaRecorder} />
                                                                    <Stack.Screen name="FormBubble" component={FormBubble} />
                                                                    <Stack.Screen name="CardBubble" component={CardBubble} />
                                                                    <Stack.Screen name="SchedulerBubble" component={SchedulerBubble} />
                                                                    <Stack.Screen
                                                                        name="MyConnections"
                                                                        component={MyConnections}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="ViewMemberForJointAccount"
                                                                        component={ViewMemberForJointAccount}
                                                                        options={{ headerShown: false }}
                                                                        initialParams={{ additionalData: "653c16d7de4f4f52b4ac58c0" }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="ViewJointAccountRequests"
                                                                        component={ViewJointAccountRequests}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="Section1Screen"
                                                                        component={Section1Screen}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="Section2Screen"
                                                                        component={Section2Screen}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="Section3Screen"
                                                                        component={Section3Screen}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="Register"
                                                                        component={Register}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="Register1"
                                                                        component={Register1}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="EmailVerification"
                                                                        component={EmailVerification}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="PasswordVerification"
                                                                        component={PasswordVerification}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="CodeVerification"
                                                                        component={CodeVerification}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="OtherProfilePage"
                                                                        component={OtherProfilePage}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="TeacherProfilePage"
                                                                        component={TeacherProfilePage}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="StudentProfilePage"
                                                                        component={StudentProfilePage}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="ViewSingleJointAccountRequest"
                                                                        component={ViewSingleJointAccountRequest}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="MypendingInvitations"
                                                                        component={MypendingInvitations}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="MyAcceptedInvitations"
                                                                        component={MyAcceptedInvitations}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="WriteMessageForJointAccount"
                                                                        component={WriteMessageForJointAccount}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="InviteSuccessful"
                                                                        component={InviteSuccessful}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="MyFollowers"
                                                                        component={MyFollowers}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="MyPendingConnections"
                                                                        component={MyPendingConnections}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="UpdateSingleHawScreenT"
                                                                        component={UpdateSingleHawScreenT}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="UpdateSingleProjectScreenT"
                                                                        component={UpdateSingleProjectScreenT}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="UpdateSingleCertificationScreenT"
                                                                        component={UpdateSingleCertificationScreenT}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="UpdateSingleLanguageScreenT"
                                                                        component={UpdateSingleLanguageScreenT}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="UpdateSingleExperienceScreenT"
                                                                        component={UpdateSingleExperienceScreenT}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="UpdateSingleEducationScreenT"
                                                                        component={UpdateSingleEducationScreenT}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="EditExperienceScreenT"
                                                                        component={EditExperienceScreenT}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="EditEducationScreenT"
                                                                        component={EditEducationScreenT}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="EditCertificationScreenT"
                                                                        component={EditCertificationScreenT}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="EditHawScreenT"
                                                                        component={EditHawScreenT}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="EditProjectScreenT"
                                                                        component={EditProjectScreenT}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="EditSkillScreenT"
                                                                        component={EditSkillScreenT}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="EditLanguageScreenT"
                                                                        component={EditLanguageScreenT}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="AddProjectScreenT"
                                                                        component={AddProjectScreenT}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="AddSkillScreenT"
                                                                        component={AddSkillScreenT}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="AddHawScreenT"
                                                                        component={AddHawScreenT}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="AddLanguageScreenT"
                                                                        component={AddLanguageScreenT}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="AddExperienceScreenT"
                                                                        component={AddExperienceScreenT}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="AddCertificationScreenT"
                                                                        component={AddCertificationScreenT}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="AddEducationScreenT"
                                                                        component={AddEducationScreenT}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="ViewAllHawT"
                                                                        component={ViewAllHawT}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="ViewAllLanguagesT"
                                                                        component={ViewAllLanguagesT}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="ViewAllFeedbacksT"
                                                                        component={ViewAllFeedbacksT}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="ViewAllSkillsT"
                                                                        component={ViewAllSkillsT}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="ViewAllExperiencesT"
                                                                        component={ViewAllExperiencesT}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="ViewAllCertificationsT"
                                                                        component={ViewAllCertificationsT}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="ViewAllProjectsT"
                                                                        component={ViewAllProjectsT}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="ViewAllEducationT"
                                                                        component={ViewAllEducationT}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="AddLanguageScreen"
                                                                        component={AddLanguageScreen}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="UpdateSingleLanguageScreen"
                                                                        component={UpdateSingleLanguageScreen}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="EditLanguageScreen"
                                                                        component={EditLanguageScreen}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="AddInterestScreen"
                                                                        component={AddInterestScreen}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="UpdateSingleInterestScreen"
                                                                        component={UpdateSingleInterestScreen}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="EditInterestScreen"
                                                                        component={EditInterestScreen}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="AddEducationScreen"
                                                                        component={AddEducationScreen}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="UpdateSingleEducationScreen"
                                                                        component={UpdateSingleEducationScreen}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="EditEducationScreen"
                                                                        component={EditEducationScreen}
                                                                        options={{ headerShown: false }}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="ViewAllLanguages"
                                                                        component={ViewAllLanguages}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="ViewAllEducation"
                                                                        component={ViewAllEducation}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="ViewAllBadges"
                                                                        component={ViewAllBadges}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="ViewAllCertifications"
                                                                        component={ViewAllCertifications}
                                                                    />
                                                                    <Stack.Screen
                                                                        name="ViewAllInterests"
                                                                        component={ViewAllInterests}
                                                                    />
                                                                    <Stack.Screen name="HomePage1" component={HomePage1} options={{ headerShown: false }} />
                                                                    <Stack.Screen name="TeacherHomePage" component={TeacherHomePage} options={{ headerShown: false }} />
                                                                    <Stack.Screen name="MySessions" component={MySessions} options={{ headerShown: false }} />
                                                                    <Stack.Screen name={SCREEN_NAMES.Home} component={Home} />
                                                                    <Stack.Screen name="StudentProfile" component={StudentProfile} options={{ headerShown: false }} />
                                                                    <Stack.Screen name="MyCourses" component={MyCourses} options={{ headerShown: false }} />
                                                                    <Stack.Screen name="TeacherProfile" component={TeacherProfile} options={{ headerShown: false }} />
                                                                    <Stack.Screen name="Certificate" component={Certificate} options={{ headerShown: false }} />
                                                                    <Stack.Screen name="ELearningPage" component={ELearningPage} options={{ headerShown: false }} />
                                                                    <Stack.Screen name="BuyCourseCart" component={BuyCourseCart} options={{ headerShown: false }} />
                                                                    <Stack.Screen name="BuyCourse" component={BuyCourse} options={{ headerShown: false }} />
                                                                    <Stack.Screen name="Feedback" component={Feedback} options={{ headerShown: false }} />
                                                                    <Stack.Screen name="Cart4" component={Cart4} options={{ headerShown: false }} />
                                                                    <Stack.Screen name="Cart3" component={Cart3} options={{ headerShown: false }} />
                                                                    <Stack.Screen name="SingleCourse" component={SingleCourse} options={{ headerShown: false }} />
                                                                    <Stack.Screen name="Quiz" component={Quiz} options={{ headerShown: false }} />
                                                                    <Stack.Screen name="CoursesE1" component={CoursesE1} options={{ headerShown: false }} />

                                                                    <Stack.Screen name={SCREEN_NAMES.Viewer_Home} component={Viewer_Home} options={{
                                                                        headerStyle: {
                                                                            backgroundColor: colors.primary['900'],
                                                                        },
                                                                        headerBackTitle: 'Home',
                                                                        headerTintColor: '#fff',
                                                                        headerTitleStyle: {
                                                                            fontWeight: 'bold',
                                                                        },
                                                                    }} />
                                                                    <Stack.Screen name={SCREEN_NAMES.Speaker_Home} component={Speaker_Home} options={{
                                                                        headerStyle: {
                                                                            backgroundColor: colors.primary['900'],
                                                                        },
                                                                        headerBackTitle: 'Home',
                                                                        headerTintColor: '#fff',
                                                                        headerTitleStyle: {
                                                                            fontWeight: 'bold',
                                                                        },
                                                                    }} />
                                                                    <Stack.Screen name={SCREEN_NAMES.Meeting} component={Meeting} options={{ headerShown: false }} />
                                                                </Stack.Navigator>
                                                            ) : null}
                                                        </NavigationContainer>
                                                    </SessionState>
                                                </CartState>
                                            </CourseState>
                                        </UserState>
                                    </JointAccountState>
                                </TeacherProfileState>
                            </StudentProfileState>
                        </SocialHubState>
                    </CometChatContextProvider>
                </UserContextProvider>
            </SafeAreaView>
        </>
    );
};
export default App;