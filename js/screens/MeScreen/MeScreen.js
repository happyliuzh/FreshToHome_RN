import React, {Component} from 'react'
import {View,
    Text,
    StyleSheet,
    FlatList,
    Image,
} from 'react-native'
import CommonStyles from '../../utils/css/styles'
import Images from '../../utils/image'
import OrderHandleItem from '../../components/Me'


export default class MeScreen extends Component{

    static navigationOptions = {
        title : '我的'
    };


    listHeader = ()=>{
        return (
            <View style={MeStyles.listHeader}>
                <Image style={MeStyles.listHeaderPortrait} source={Images.Me.UserHeadDefault}></Image>
                <Text style={MeStyles.listHeaderName}>新鲜到家客户</Text>
                {this.orderHandle()}
            </View>
        );
    };

    orderHandle = ()=>{
        return (
            <View style={MeStyles.orderHandle}>

                <OrderHandleItem title='待付款'
                                 image={Images.Me.PendingPayment}
                >
                </OrderHandleItem>
                <OrderHandleItem title='待发货'
                                 image={Images.Me.To_be_shipped}
                >
                </OrderHandleItem>
                <OrderHandleItem title='已发货'
                                 image={Images.Me.Shipped}
                >
                </OrderHandleItem>
                <OrderHandleItem title='已完成'
                                 image={Images.Me.Order_Completed}
                >
                </OrderHandleItem>
                <OrderHandleItem title='全部'
                                 image={Images.Me.Order_All}
                >
                </OrderHandleItem>
            </View>
        );
    };

    render(){
        return(
        <View style = {CommonStyles.top_layout_container}>

            <FlatList style={MeStyles.flatList}
                      refreshing={false}
                      onRefresh={()=>{}}
                      ListHeaderComponent={this.listHeader}
                      //解决flatlist动一下才显示的问题
                      removeClippedSubviews={false}



            >
            </FlatList>
        </View>
        );
    }
}

const MeStyles = StyleSheet.create({
    flatList: {
        flex : 1,
        backgroundColor : '#f6f6f6',
    },

    listHeader : {
        justifyContent : 'flex-start',
        alignItems : 'stretch',
        backgroundColor:'#fff',
    },
    listHeaderPortrait : {
        marginTop:24,
        width : 80,
        height:80,
        alignSelf:'center',
    },
    listHeaderName : {
        marginTop:20,
        fontSize : 18,
        color : '#999999',
        alignSelf:'center',

    },

    orderHandle : {
        flexDirection:'row',
        marginTop : 20,
        height : 80,
    }
});




