import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView, ScrollView, PermissionsAndroid } from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
export default function App() {

  useEffect(()=>{

  },[])

  const checkPermission = async () =>{
    const hasPermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
    
    if(hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, {
      title: "Image gallery app permissions",
      message: "Image gallery needs your permission to access your photos",
      buttonPositive: "Ok",
    })
    return status === 'granted'
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          
        </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
