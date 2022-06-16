import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, PermissionsAndroid, TextComponent, Pressable, Linking } from 'react-native';

const ImgProfile = "https://avatars.githubusercontent.com/u/49663041?v=4"
const urlGit = "https://github.com/neowresp"

export default function App() {

  const github = async () => {
    const re = await Linking.canOpenURL(urlGit);
    if(re){
      await Linking.openURL(urlGit)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#010409" barStyle="light-content" />
    <View style={styles.container}>
      <Text style={styles.text}>Kazuma</Text>
      <Image accessibilityLabel='Kazuma' style={styles.avatar} source={{uri:ImgProfile}}/>
      <Text style={styles.nickname}>@neowresp</Text>
      <Text style={styles.description}>Uma simples pessoas querendo jogar seus joguinhos.</Text>
      <StatusBar style="auto"/>
      <Pressable onPress={github}>
      <Text style={styles.button}>Github</Text>
      </Pressable>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010409',
    alignItems: 'center',
    padding: 20,
    },
    text:{
      fontWeight: 'bold',
      fontStyle: 'italic',
      fontSize: 50,
      color: "white",
      padding: 20,
    },
    avatar: {
      height: 150,
      width: 150,
      borderRadius: 100,
      borderWidth: 5,
      borderColor: "white",
      padding: 20,
    },
    nickname: {
      color: "grey",
      padding: 15,
    },
    description: {
      color: "white",
      textAlign: "center",
      fontSize: 20,
    },
    button: {
      marginTop: 40,
      backgroundColor: "grey",
      borderRadius: 20,
      padding: 20,
      fontWeight: "bold",
      fontSize: 15,
      color: "black",
    },
});
