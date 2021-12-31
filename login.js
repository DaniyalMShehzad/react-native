import React from 'react'
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Image } from 'react-native'
// import img from "./imgh.jpg"
// import img2 from "./img2.jpg"
const Login = () => {
  return (
      <View style={styles.View1}>
        <View style={styles.View2}>
          <View style={styles.login1}>
              <View style={styles.Login3}>
                  <Text style={styles.TextLogin}>Login</Text>
              </View>
            <View style={styles.login2}>
              {/* <Image source={img2} style={styles.LogoImg} >
              </Image> */}
              <View>
                <TextInput placeholder='Enter Your Email' style={styles.textInput} />
                <TextInput placeholder='Enter Your Password' style={styles.textInput} />
              </View>
              <TouchableOpacity
                style={styles.button}>
                <Text style={{ color: "red", fontWeight: "600", fontSize: 16, }}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
  )
}
export default Login

const styles = StyleSheet.create({
  View1:{
    width:"100%",
    height:"100%",
    justifyContent:"space-around",
  },
  View2:{
    width:"100%",
    height:"100%"
  },
  login1:{
    width:"100%",
    height:"100%",
  },
  login2:{
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    // height:"100%",
  },
  Login3:{
    backgroundColor:"#58B747",
    paddingTop:50,
    paddingBottom:50,
    justifyContent:"center",
    alignItems:"center",
  },
  TextLogin:{
    fontSize:26,
    color:"white",
    fontWeight:"500",
  },
  textInput: {
    // borderColor: "#878787",
    backgroundColor:"#EBEBEB",
    // borderWidth: 1,
    width: 500,
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 16,
    paddingLeft: 10,
  },
  button: {
    marginBottom: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#dd9390",
    width: 100,
    color: "white",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dd9390",
    height: 40,
    fontSize: 20,
    // padding:8,
    // paddingLeft:30,
    // paddingBottom:10,
    borderRadius: 20,
  }
})