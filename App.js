import React from 'react'
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity,Image } from 'react-native'
import img from "./imgh.jpg"
import img2 from "./img2.jpg"
const App = () => {
  return (
    <ImageBackground
      style={styles.backGroundImg}
      source={img}
    >
      <View style={styles.View1}>
        <View style={styles.View2}>
          <View style={styles.login1}>
            <View style={styles.login2}>
              <Text style={styles.TextLogin}>Login</Text>
              <Image source={img2} style={styles.LogoImg} >
              </Image>
              <View>
                <TextInput placeholder='Enter Your Email' style={styles.textInput} />
                <TextInput placeholder='Enter Your Password' style={styles.textInput} />
              </View>
              <TouchableOpacity
                style={styles.button}>
                <Text style={{color:"red",fontWeight:"600",fontSize:16,}}>Login</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </View>
    </ImageBackground>
  )
}

export default App

const styles = StyleSheet.create({
  backGroundImg: {
    height: "100%",
  },
  View1: {
    width: "100%",
    height: "100%",
    // justifyContent:"center",
    // alignItems:"center",
  },
  View2: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  login1: {
    width: "85%",
    // height: "40%",
    backgroundColor: "white",
    justifyContent: "center",
    borderRadius: 10,
    textAlign: "center",
    alignItems: "center",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 7,
    // },
    // shadowOpacity: 0.43,
    // shadowRadius: 9.51,

    // elevation: 15,
    shadowColor: "#ff0000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.999,
    shadowRadius: 9,
    elevation: 30,
    // backgroundColor:"red",
  },
  login2: {
    textAlign: "center",
    width: "100%",
    textAlign: "center",
    alignItems: "center",
  },
  TextLogin:{
    fontSize: 20,
    marginBottom:20,
    marginTop:20,
  },
  LogoImg:{
    width:100,
    height:100,
    marginBottom:15,
  },
  textInput: {
    borderColor: "#878787",
    borderWidth: 1,
    width: 270,
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    borderRadius:16,
    paddingLeft:10,
  },
  button:{
    marginBottom:10,
    marginTop:10,
    borderWidth:1,
    borderColor:"#dd9390",    
    width:100,
    color:"white",
    textAlign:"center",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#dd9390",
    height:40,
    fontSize:20,
    // padding:8,
    // paddingLeft:30,
    // paddingBottom:10,
    borderRadius:20,
  }
})