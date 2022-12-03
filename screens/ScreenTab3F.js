import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View } from 'react-native';
import React, { useState } from "react";
import {
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";


export default function ScreenTab3F({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
        <Image style={styles.image} source={require("./log2.png")} />
        <Text style={styles.mytext}>Rezerwacje</Text>
        <ScrollView style={styles.scrollView}>
          <Image style={styles.imagek} source={require("./ksiazka2.jpeg")} />
          <Text style={styles.mytextb}>Ksiazka1</Text>
          <Image style={styles.imagek2} source={require("./ksiazka2.jpeg")} />
          <StatusBar style="auto" />
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  scrollView: {
      backgroundColor: 'white',
      marginHorizontal: 20,
    },

  image: {
    marginBottom: 5,
  },

   imagek: {
      marginBottom: 5,
      height: 150,
      width: 100,
      marginRight: 260,
      marginTop: 1,
    },
    imagek2: {
          marginBottom: 5,
          height: 150,
          width: 100,
          marginRight: 260,
          marginTop: 1,
    },
  loginText:{
    placeholderTextColor: "#FFFFFF",
  },

  mytext:{
    height: 30,
    marginBottom: 20,
  },

  mytexta:{
      height: 30,
      marginTop: 0,
      marginBottom: 0,
      color: "green",
    },
 mytextb:{
       height: 30,
       marginTop: 0,
       marginBottom: 0,
       marginLeft:25,
     },

  loginText:{
    color: "white",
  },

  newtext:{
    marginRight: 220,
    marginBottom:10,
  },

  inputView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    width: "70%",
    height: 40,
    marginBottom: 20,
    alignItems: "left",
    borderColor: "#d4d5d9",
    borderWidth: 1,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 10,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
    marginLeft: 180,
    marginTop: 10,
  },

  loginBtn: {
    width: "70%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#1D33DE",
  },
});