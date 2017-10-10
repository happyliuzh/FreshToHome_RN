/**
 * Created by liuzhihui on 2017/10/10.
 */
import React,{Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'


export default class TabScreen extends Component{

    render(){
        return(
            <Text style={styles.text}>TabScreen</Text>
    );
    }

}

const styles = StyleSheet.create(
    {
        container1 : {
            flex : 1,
            backgroundColor : '#e50263'
        },
        text : {
            color : '#e50263'
        }
    }
);

const HomeIcon = ()=>{
    return <Icon name="ios-home" size={30} color="red"></Icon>
};

