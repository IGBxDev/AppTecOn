import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import Profile from '../components/Profile';
import Calendar from '../components/Calendar';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <Profile />
      <View style={styles.container}>
        <Calendar />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: '#fff',
   
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
