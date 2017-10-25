import React, {Component} from 'react'
import {View,
    Text,
} from 'react-native'

import CartDefaultHint from '../../components/Cart/defaultHint'

import CommonStyles from '../../utils/css/styles'
import CartView from '../../components/Cart/cartView'
import Loader from '../../utils/loader'

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
        }, 3000);
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