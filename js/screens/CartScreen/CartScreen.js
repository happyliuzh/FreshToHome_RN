import React, {Component} from 'react'
import {View,
    Text,
    TouchableOpacity,
} from 'react-native'

import CartDefaultHint from '../../components/Cart/defaultHint'

import CommonStyles from '../../utils/css/styles'
import CartView from '../../components/Cart/cartView'
import Loader from '../../utils/loader'
import Colors from '../../utils/color'

// <CartDefaultHint onPress={() => {
//     const { navigate } = this.props.navigation;
//     alert(navigate);
//
// }}>
//
// </CartDefaultHint>

export default class CartScreen extends Component{

    static navigationOptions = {
        title : "菜篮子",
        headerTitleStyle : { alignSelf : 'center'},
        headerRight:(
            <TouchableOpacity style = { { marginRight : 16,} }
                              onPress = { () => {
                                  alert('编辑购物车');
                              }}

            >
                <Text style={ {
                    color : Colors.MainColor,
                    fontSize : 18,
                } }>
                    编辑
                </Text>
            </TouchableOpacity>
        ),

    };

    constructor()
    {
        super();
        this.state = {
          loading : true,
            nodata : true,
        };

    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                loading : false,
            });
        }, 1000);

    }

    render(){

        if(this.state.loading)
        {
            return (
                <Loader>

                </Loader>
            );
        }

        if(this.state.nodata)
        {
            return (
                <CartDefaultHint onPress={ () => {

                    //回首页
                    const { navigate }  = this.props.navigation;
                    navigate('Home');

                    this.setState({
                        nodata:false,
                    });


                }}/>
            );
        }


        return(

            <View style = {CommonStyles.top_layout_container}>

                <CartView>

                </CartView>

            </View>
        );
    };
}