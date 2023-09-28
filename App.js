import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import profile from "./assets/profileph.jpg";
import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={style.container}>
      <StatusBar style="light" />
      <View style={style.nav}>
        <View style={style.navArrow}>
          <AntDesign name="arrowleft" size={26} color="white" />
        </View>
        <Text style={style.navText}>Edit Profile</Text>
      </View>
      <View style={style.imageView}>
        <Image source={profile} style={style.image} />
        <View style={style.iconFlex}>
          <Ionicons name="camera-outline" size={26} color="white" />
        </View>
      </View>
      <View style={style.deetz}>
        <Text style={style.datalable}>School</Text>
        <Text style={style.data}>Arizona State University</Text>
        <Text style={style.datalable}>Email address</Text>
        <Text style={style.data}>victorluis01@aol.com</Text>
        <Text style={style.lable}>Name</Text>
        <Text style={style.info}>Victor Luis</Text>
        <Text style={style.lable}>Nickname</Text>
        <Text style={style.info}>ruis_victol</Text>
        <Text style={style.lable}>Emergency contact</Text>
        <View style={[style.info,style.contact]}>
          <Text style={style.contactText}>+1(643)-720-2985</Text>
          <View style={style.contactIcon}>
            <AntDesign name="contacts" size={20} color="black" />
          </View>
        </View>
      </View>
      <Pressable style={style.pressable}>
        <Text style={style.pressableText}>UPDATE PROFILE</Text>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  iconFlex: {
    position: "absolute",
    bottom: 65,
    right: 130,
    backgroundColor: "#27b4e4",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    marginTop: 0,
  },
  nav: {
    flexDirection: "row",
    paddingLeft: 10,
    marginBottom: 10,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 4,
    paddingBottom: 15,
    paddingTop: 45,
    backgroundColor: "#27b4e4",
  },
  navArrow: {
    flex: 1.5,
  },
  navText: {
    flex: 2.5,
    fontSize: 20,
    color: "white",
  },
  imageView: {
    marginTop: 25,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 50,
    borderRadius: 75,
  },
  deetz: {
    marginHorizontal: 40,
  },
  lable: {
    fontSize: 10,
    marginTop: 30,
    color:"#27b4e4"
  },
  info: {
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    marginTop:5,
    paddingBottom: 8,
    fontSize: 15,
  },
  contact:{
    flexDirection:"row",
    justifyContent:"space-between",
  },
  contactText:{
    fontSize: 15,
  },
  datalable:{
    fontSize: 10,
    marginTop: 30,
    color:"grey",
    paddingBottom:5
  },
  data:{
    fontSize:15
  },
  pressable:{
    marginTop:50,
    marginHorizontal:35,
    backgroundColor:"#27b4e4",
    height:70,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:35
  },
  pressableText:{
    color:"white",
    fontSize:20
  }

});
