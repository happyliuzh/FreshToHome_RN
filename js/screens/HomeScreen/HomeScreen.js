import React, {Component} from 'react'
import {View,
    Text,
    StyleSheet,
    Button,
    Image,
    ScrollView,
    RefreshControl,
} from 'react-native'
import CommonStyles from '../../utils/css/styles'

import Colors from '../../utils/color'
import CarouselView from "../../components/Home/carouseView";
import Images from '../../utils/image'
import HomeView from '../../components/Home/homeView'
import Loader from '../../utils/loader'






export default class HomeScreen extends Component{

    static navigationOptions = {
        title: '生鲜货架',
        headerBackTitle : '返回',
    };

    constructor(){
        super();

        this.state = {
           isLoaded : false,
        };
    }

    componentWillMount(){

        console.log('Home Screen will mount');

    }

    componentDidMount(){

        console.log('Home Screen did mount');

        setTimeout(()=>{

            this.setState({
                isLoaded:true,
            });

        }, 2000);
    }

    render(){
        const { navigate } = this.props.navigation;

        if(!this.state.isLoaded)
        {
            return <Loader/>
        }

        return (
            <HomeView>

            </HomeView>
        );

    }
}


const homeStyles = StyleSheet.create({

    container : {
        justifyContent : 'flex-start'
    },

});
