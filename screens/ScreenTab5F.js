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

export default function ScreenTab5F({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
        <Image style={styles.image} source={require("./log2.png")} />
        <Text style={styles.mytext}>Profil</Text>
        <View style={styles.sview}>
            <Image style={styles.imagek} source={require("./ustawienia.jpeg")} />
            <View>
                <Text style={styles.mytexta}>Imię: Jan</Text>
                <Text style={styles.mytexta}>Nazwisko: Kowalski</Text>
                <Text style={styles.mytexta}>Email: Jan@xx.pl</Text>
            </View>
        </View>
        <View style={styles.sdview}>
            <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate("Historia", {language: "english"})}>
                            <Text style={styles.loginText}>Historia</Text>
                        </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate("Domowa", {language: "english"})}>
                <Text style={styles.loginText}>Wyloguj</Text>
            </TouchableOpacity>
        </View>
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

  sview: {
         flexDirection: 'row',
  },
  sdview: {
           flexDirection: 'row',
           marginTop: 200,
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
      height: 100,
      width: 100,
      marginRight: 10,
      marginTop: 1,
    },
    imagek2: {
          marginBottom: 5,
          height: 200,
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
        marginRight: 100,
        marginLeft: 10,
        textAlign: 'right',
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
    alignItems: "flex-start",
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
    width: "35%",
    borderRadius: 30,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#000000",
    marginLeft: 20,
  },
});