import React, {Component} from 'react'
import {View,
    Text,
    StyleSheet,
    Button,
} from 'react-native'
import CommonStyles from '../../utils/css/styles'
import Icon from 'react-native-vector-icons/Ionicons'

export default class DetailScreen extends Component{

    static navigationOptions = {
        title : "商品详情",
        headerRight : <Button title="分享" onPress={()=>{

                                                const { navigate } = this.props.navigation;
                                                // navigate.goBack();
                                                // navigate('Tab');
                                                alert('去分享！');

                                            }}>
                      </Button>,
        // headerRight : <Icon.Button></Icon.Button>
    };

    render(){
        const  {params} = this.props.navigation.state;
        const { navigate } = this.props.navigation;

        return(
        <View style={CommonStyles.center_layout_container}>
            <Button title={params.params} onPress={
                ()=>{

                    const { navigate } = this.props.navigation;
                    // navigate.goback();
                    alert("yes , i am !")
                }}
            ></Button>
        </View>
        );
    }
}