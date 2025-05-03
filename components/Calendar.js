import { StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Ionicons } from "@expo/vector-icons";

const Calendar = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.centerSection}>
                <FontAwesome5 name="calendar-day" size={50} color="#41228e" /> 
                <View style={styles.calendarContainer}> 
                    <Text style={styles.calendarTitle}>Calendário</Text>
                </View>                   
            </View>
        </SafeAreaView>
    )
}

export default Calendar

const styles = StyleSheet.create({    
  calendarContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
  },
  calendarTitle:{
    fontSize: 16,
    color: '#41228e',
  },
  header: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  centerSection: {
    flexDirection: 'column',
    alignItems: 'center',    
  },
  container: {
    paddingTop: 20
  }
})
