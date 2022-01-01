import { time } from 'console'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import styling from './Styling'
// import { AsyncStorage } from 'react-native';
const Todo = () => {
    const [alldata, setAllData] = useState([])
    const [text, setText] = useState("")
    const [date, setDate] = useState("")
    const [newdata, setNewData] = useState()
    console.log(text);
    // let arr = []
    // let obj={}
    // useEffect(() => {
    //     // _retrieveData = async () => {
    // try {
    //     const value = AsyncStorage.getItem("alldata");
    //     if (value !== null) {
    //         // setAllData(value)
    //         console.log(value);
    //     }
    // } catch (error) {
    //     // Error retrieving data
    //     console.log(error);
    // }
    // };
    // }, [value])
    // console.log(alldata);
    useEffect(() => {
        // if(alldata.length===0){
        AsyncStorage.getItem('data', (err, result) => {
            setAllData(JSON.parse(result))
        })
        // }
        // else{
        // setAllData([])
        // }
    }, [])
    useEffect(() => {
        setDate(new Date().toLocaleString())
    }, [addData])
    const addData = () => {
        setDate(new Date().toLocaleString())
        let obj = {
            text: text,
            date: date,
        }
        // rrrrrr
        if (alldata) {
            setAllData([...alldata, obj])
            console.log(alldata);
            console.log(obj);
        }
        else {
            setAllData([obj])
        }
        console.log(alldata, "------z");
        AsyncStorage.setItem(
            'data',
            JSON.stringify(alldata)
        )
        setText("")
        // setAllData(arr)
        // setAllData((olditem) => {
        //     if (olditem) {
        //         return (
        //             [...olditem, obj]
        //         )
        //     }
        //     else {
        //         [obj]
        //     }
        // })
    }
    const delet = (i) => {
        console.log(i, "key");
        if (alldata.length) {
            alldata.splice(i, 1)
            setNewData(alldata)
            if (alldata.length === 0) {
                AsyncStorage.removeItem("data")
            }
            else {
            AsyncStorage.setItem(
                'data',
                JSON.stringify(alldata)
            )
            }
        }
    }
    useEffect(() => {
        setAllData(newdata)
    }, [newdata])
    const edit = (i) => {
        console.log(i, "key");
        // if (alldata.length) {
        //     alldata.splice(i, 1)
        // }
        // AsyncStorage.setItem(
        //     'data',
        //     JSON.stringify(alldata)
        // )
    }
    return (
        <View style={styles.Todos}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.txtWhite}>Todo App</Text>
                </View>
                <ScrollView style={{ width: "100%", height: "100%", }}>
                    <View style={styles.flexCenter}>
                        {alldata?.map((e, i) => {
                            return (
                                <>
                                    <View key={i}>
                                        <View style={styles.alignItemsEnd}>
                                            <Text>{e.date}</Text>
                                        </View>
                                        <View style={styles.flexWrap}>
                                            <View style={styles._flexDirectionColumn}>
                                                <Text>{e.text}</Text>
                                            </View>
                                            <View>
                                                <TouchableOpacity style={styles.btn2} onPress={() => (i) = edit(i)}>
                                                    <Text style={styles._h1}>Edit</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <View>
                                                <TouchableOpacity style={styles.btn2} onPress={() => delet(i)}>
                                                    <Text style={styles._h1}>Delete</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </>
                            )
                        })}
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