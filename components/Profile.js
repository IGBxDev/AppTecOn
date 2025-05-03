import { StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import FontAwesome from '@expo/vector-icons/FontAwesome'

const Profile = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>        
                <View style={styles.leftSection}>
                    <FontAwesome name="user-circle-o" size={45} color="#41228e" style={{ paddingRight: 8}} /> 
                    <View style={styles.leftSectionContainer}>
                        <Text style={styles.leftSectionContainerTitle}>Bruno</Text>
                        <Text style={styles.leftSectionContainerSubTitle}>ContaChamers Conábil Ltda</Text>
                    </View>                       
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    
  leftSectionContainer: {
    paddingLeft: 8,
  },      
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
  leftSectionContainerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#41228e',
  },

  leftSectionContainerSubTitle:{
    fontSize: 13,
    color: '#41228e',
  }
})
