import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
} from 'react-native'
import { useRouter } from 'expo-router'

export default function LoginScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>

      <StatusBar
        barStyle="dark-content"
        backgroundColor="#f7f7f7" 
        translucent={false}
      />

      <View style={styles.containerImage}>
        <Image
        source={require('../assets/image/tec-on.png')}
        resizeMode="contain"
        style={styles.image}
        />
      </View>

      <View style={styles.containerForm}>
        <TextInput style={styles.textInput} placeholder='Email' />
        <TextInput style={styles.textInput} placeholder='Password' secureTextEntry />

        <Pressable
          onPress={() => router.push('/home')}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </Pressable>
      </View>
   
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#e6e6e6',
  },
  containerImage: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
    // borderColor: '#41228e',
    // borderWidth: 1,
  },
  containerForm: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // borderColor: 'red',
    // borderWidth: 1,
  },
  button: {
    backgroundColor: '#41228e',
    borderRadius: 50,
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,

 },
  buttonPressed: {
    backgroundColor: '#2a1462',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textInput: {
    backgroundColor: 'white',
    width: '80%',
    height: 50,
    borderRadius: 50,
    // borderColor: '#41228e',
    // borderWidth: 2,
    paddingHorizontal: 30,
    marginVertical: 10,
    fontSize: 16,

  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: '#41228e',
    // marginTop: -200,
  },
})
