import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import CourseState from "./context/Courses/courseState";
import CartState from "./context/Cart/cartState";
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

import colors from './src/styles/colors';
import Home from './src/scenes/home';
import Viewer_Home from './src/scenes/home/viewer';
import Speaker_Home from './src/scenes/home/speaker';
import Meeting from './src/scenes/ILS';
import { SCREEN_NAMES } from './src/navigators/screenNames';

const Stack = createNativeStackNavigator();

const App = () => {
    const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

    return (
        <>
            <CourseState>
                <CartState>
                    <NavigationContainer>
                        {hideSplashScreen ? (
                            <Stack.Navigator screenOptions={{ headerShown: false }}>
                                <Stack.Screen name={SCREEN_NAMES.Home} component={Home} options={{ headerShown: false }} />
                                <Stack.Screen name="HomePage1" component={HomePage1} options={{ headerShown: false }} />
                                <Stack.Screen name="MyCourses" component={MyCourses} options={{ headerShown: false }} />
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
                </CartState>
            </CourseState>
        </>
    );
};
export default App;