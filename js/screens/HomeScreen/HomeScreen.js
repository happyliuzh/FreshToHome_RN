import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    ScrollView,
    RefreshControl,
    TouchableOpacity,
} from 'react-native'

import { NavigationActions ,} from 'react-navigation'

import CommonStyles from '../../utils/css/styles'

import Colors from '../../utils/color'
import CarouselView from "../../components/Home/carouseView";
import Images from '../../utils/image'
import HomeView from '../../components/Home/homeView'
import Loader from '../../utils/loader'






export default class HomeScreen extends Component{

    static navigationOptions = ({navigation}) => ({
        title: '生鲜货架',
        headerTitleStyle : { alignSelf : 'center'},
        headerBackTitle : '返回',
        headerRight:(
           <TouchableOpacity style = { { marginRight : 16,} }
                             onPress = { () => {

                                const { dispatch } = navigation;

                                dispatch(NavigationActions.navigate({
                                    routeName : 'Zone',
                                    params    : {
                                      title : '常购清单',
                                    },
                                }));
                             }}

           >
               <Text style={ {
                   color : Colors.MainColor,
                   fontSize : 18,
               } }>
                   常购清单
               </Text>
           </TouchableOpacity>
       ),


        headerLeft : (
            <TouchableOpacity style = { { marginLeft : 16}}
                              onPress = { () => {

                                  const { dispatch } = navigation;

                                  dispatch(NavigationActions.navigate({
                                      routeName : 'Search',
                                      params    : {
                                          title : '常购清单',
                                      },
                                  }));                              }}
            >
                <Image source={ require('../../utils/image/res/Common/search.png') } style={{
                    width : 24,
                    height : 24,
                }}/>
            </TouchableOpacity>
        )
    });

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

        }, 1000);
    }

    render(){
        const { navigate } = this.props.navigation;

        if(!this.state.isLoaded)
        {
            return <Loader/>
        }

        return (
            <HomeView navigation = {this.props.navigation }>

            </HomeView>
        );

    }
}


const homeStyles = StyleSheet.create({

    container : {
        justifyContent : 'flex-start'
    },

    headerRight :{
    },

    headerRightText : {
    }

});
