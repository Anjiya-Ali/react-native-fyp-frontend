import React, { useState, useContext, useEffect } from "react";
import { Text, StyleSheet, TouchableOpacity, View, Image, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProjectManagementContainer from "../components/ProjectManagementContainer";
import SearchForm from "../components/SearchForm";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import StudentProfileContext from "../context/StudentProfile/studentProfileContext";
import SessionContext from "../context/Sessions/sessionContext";
import { getToken } from '../src/api/api';
import { SCREEN_NAMES } from '../src/navigators/screenNames';


const host = "http://192.168.0.147:3000"

const LiveSessionItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(item.meetingId)}>
      <View style={styles.liveSessionItem}>
        <Image
          style={styles.liveSessionImage}
          resizeMode="cover"
          source={{ uri: `${host}/${item.liveSessionImage}` }}
        />
        <View style={styles.liveSessionTextContainer}>
          <Text style={styles.liveSessionTitle}>{item.liveSessionTitle}</Text>
          <Text style={styles.liveSessionTeacher}>by {item.liveSessionTeacher}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const HomePage1 = () => {
  const navigation = useNavigation();
  const context = useContext(StudentProfileContext);
  const { getProfilePicture } = context;
  const session_context = useContext(SessionContext);
  const { getLiveSessions } = session_context;
  const [profilePictureUrl, setProfilePictureUrl] = useState('')
  const [liveSessions, setLiveSessions] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    const fetchProfilePicture = async () => {
      const response = await getProfilePicture();
      setProfilePictureUrl(`${host}/${response.profilePictureUrl}`);
    };

    const fetchLiveSessions = async () => {
      const response = await getLiveSessions();
      if (response.liveSessions) {
        setLiveSessions(response.liveSessions);
      }
      const token = await getToken();
      setToken(token);
    };

    fetchProfilePicture();
    fetchLiveSessions();

  }, []);

  const handleLiveSessionPress = (meetingId) => {
    navigation.navigate(SCREEN_NAMES.Home, { name: 'salwa', token: token, meetingId: meetingId });   //name kahan se laun
  }

  return (
    <View>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.arrowContainer}
          onPress={() => navigation.navigate('StudentProfile')}
        >
          {
            profilePictureUrl ? (
              <Image
                style={styles.arrowIcon}
                resizeMode="cover"
                source={{ uri: profilePictureUrl }}
              />
            ) : null
          }
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
      <View style={styles.liveSessionsContainer}>
        <Text style={styles.liveSessionsTitle}>Live Sessions</Text>
        <FlatList
          data={liveSessions}
          keyExtractor={(item) => item.meetingId.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <LiveSessionItem item={item} onPress={handleLiveSessionPress} />}
        />
      </View>
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
  liveSessionsContainer: {
    marginVertical: 10,
  },

  liveSessionsTitle: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 22,
    textTransform: 'uppercase',
    textShadowColor: 'rgba(0, 0, 0, 0.5)', // Shadow color
    textShadowOffset: { width: 1, height: 1 }, // Shadow offset
    textShadowRadius: 2, // Shadow radius
  },

  liveSessionItem: {
    width: 140,
    height: 215,
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 15,
    overflow: 'hidden',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: Color.colorSlateblue
  },
  liveSessionImage: {
    width: 150,
    height: 120,
    borderRadius: 10,
    marginBottom: 6,
  },
  liveSessionTextContainer: {
    padding: 5,
  },
  liveSessionTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  liveSessionTeacher: {
    textTransform: 'capitalize',
    marginTop: 10,
    color: 'white',
    fontSize: 10,
    textAlign: 'center',
  },
});

export default HomePage1;
