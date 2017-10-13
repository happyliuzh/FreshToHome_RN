import React, {Component} from 'react'
import {View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableHighlight,
    TouchableNativeFeedback,
    Platform,
} from 'react-native'
import CommonStyles from '../../utils/css/styles'
import Images from '../../utils/image'
import OrderHandleItem from '../../components/Me/OrderHandleItem'


export default class MeScreen extends Component{

    static navigationOptions = {
        title : '我的'
    };


    constructor(){
        super();
        this.state = {
            dataSource : [{title: '关于我们'}],
        };
    }

    pendingPaymentAction=()=>{
        alert('待付款！');
    };

    tobeshippedAction=()=>{
        alert('待发货！');
    };

    shippedAction=()=>{
        alert('已发货！');
    };

    completedOrderAction=()=>{
        alert('已完成！');
    };

    allOrderAction=()=>{
        alert('全部！');
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
                                 onPress={this.pendingPaymentAction}
                >
                </OrderHandleItem>
                <OrderHandleItem title='待发货'
                                 image={Images.Me.To_be_shipped}
                                 onPress={this.tobeshippedAction}
                >
                </OrderHandleItem>
                <OrderHandleItem title='已发货'
                                 image={Images.Me.Shipped}
                                 onPress={this.shippedAction}
                >
                </OrderHandleItem>
                <OrderHandleItem title='已完成'
                                 image={Images.Me.Order_Completed}
                                 onPress={this.completedOrderAction}
                >
                </OrderHandleItem>
                <OrderHandleItem title='全部'
                                 image={Images.Me.Order_All}
                                 onPress={this.allOrderAction}
                >
                </OrderHandleItem>
            </View>
        );
    };

    renderRow = (item) => {

        if(Platform.OS === 'ios'){
            return (
                <TouchableHighlight onPress={()=>{alert('123'); }}>
                    <View style={MeStyles.listViewRow}>

                        <Text style={{marginLeft:20}}>
                            Data : {item.title}
                        </Text>

                        <Image source={Images.Common.ArrowRight} style={{width : 30, height:30, marginRight:20}}>

                        </Image>
                    </View>
                </TouchableHighlight>);
        }

        return (
            <TouchableNativeFeedback onPress={()=>{alert('123'); }}>
                <View style={MeStyles.listViewRow}>

                    <Text style={{marginLeft:20}}>
                        Data : {item.title}
                    </Text>

                    <Image source={Images.Common.ArrowRight} style={{width : 30, height:30, marginRight:20}}>

                    </Image>
                </View>
            </TouchableNativeFeedback>

        );
    }

    keyExtractor = (item: Object, index: number) => {
            return index;
        };

    render(){
        return(
        <View style = {CommonStyles.top_layout_container}>

            <FlatList style={MeStyles.flatList}
                      refreshing={false}
                      onRefresh={()=>{alert('refreshing...')}}
                      ListHeaderComponent={this.listHeader}

                      keyExtractor={this.keyExtractor}  //使用json中的title动态绑定key

                      data = {this.state.dataSource} //数据源
                      renderItem = {(item) => this.renderRow(item)} //每一行render

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
        marginBottom : 20,
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
    },

    listViewRow : {
        height:44,
        backgroundColor:'#ffff',
        flexDirection : 'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
});




