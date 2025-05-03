import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // ou 'react-native-vector-icons/Ionicons'
import { SafeAreaView } from 'react-native-safe-area-context';

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>        
            <View style={styles.leftSection}>
                <Ionicons name="home-outline" size={24} color="#41228e" />
                <Text style={styles.headerTitle}>Home</Text>
            </View>

            <TouchableOpacity>
                <Ionicons name="menu-outline" size={28} color="#41228e" />
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15,   
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 5,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    marginLeft: 8,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#41228e',
  },
  container: {
    backgroundColor: '#fff',
  },
})
