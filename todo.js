import { time } from 'console'
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native'
import styling from './Styling'

const Todo = () => {
    const [alldata, setAllData] = useState()
    const [text, setText] = useState()
    const [date, setDate] = useState()
    const [newdata, setNewData] = useState()
    console.log(text);
    // let arr = []
    // let obj={}
    const addData = () => {
        console.log(new Date().getTime());
        setAllData((olditem) => {
            if (olditem) {
                return (
                    [...olditem, setNewData({
                        text: text,
                        date: date,
                    })]
                )
            }
            else {
                [setNewData({
                    text: text,
                    date: date,
                })
                ]
            }
        })
        setText("")
        // setAllData(arr)
        console.log(alldata)
    }
    return (
        <View style={styles.Todos}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.txtWhite}>Todo App</Text>
                </View>
                <ScrollView style={{ width: "100%", height: "100%", }}>
                    <View style={styles.flexCenter}>
                        <View style={styles.flexWrap}>
                            <View style={{ width: "60%", paddingLeft: 10, marginBottom: 10, }}>
                                <View>
                                    <Text>Enter Time</Text>
                                </View>
                                <View>
                                    <Text>Enter Text Enter TextEnter TextEnter TextEnter TextEnter Text</Text>
                                </View>
                            </View>
                            <View>
                                <View>
                                    <TouchableOpacity style={styles.btn2}>
                                        <Text style={styles._h1}>Edit</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity style={styles.btn2}>
                                        <Text style={styles._h1}>Delete</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles.flexWrap}>
                            <View style={{ width: "60%", paddingLeft: 10, marginBottom: 10, }}>
                                <View>
                                    <Text>Enter Time</Text>
                                </View>
                                <View>
                                    <Text>Enter Text Enter TextEnter TextEnter TextEnter TextEnter Text</Text>
                                </View>
                            </View>
                            <View>
                                <View>
                                    <TouchableOpacity style={styles.btn2}>
                                        <Text style={styles._h1}>Edit</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity style={styles.btn3}>
                                        <Text style={styles._h1}>Delete</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* {alldata?.map((e, i) => {
                        return (
                        )
                    })
                    } */}
                </ScrollView>
                <View>
                    <View style={styles.flexRow}>
                        <View>
                            <TextInput value={text} placeholder='Enter Text' style={styles.input} onChangeText={(e) => setText(e)} />
                        </View>
                        <View>
                            <TouchableOpacity style={styles.btn} onPress={() => addData()}>
                                <Text style={styles._h2}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Todo

const styles = StyleSheet.create({
    ...styling,
    Todos: {
        width: "100%",
        // height:"100%",
    }
})