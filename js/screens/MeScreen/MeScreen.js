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
import Styles from '../../utils/css/styles'


export default class MeScreen extends Component{

    static navigationOptions = {
        title : '我的'
    };

    constructor(){
        super();
        this.state = {
            dataSource : [{title : '收货地址管理'},{title: '关于我们'}],
            refreshing:false,
        };
    }

    //订单相关的点击事件。
    _pendingPaymentAction=()=>{
        alert('待付款！');
    };

    _tobeshippedAction=()=>{
        alert('待发货！');
    };

    _shippedAction=()=>{
        alert('已发货！');
    };

    _completedOrderAction=()=>{
        alert('已完成！');
    };

    _allOrderAction=()=>{
        alert('全部！');
    };

    _rowPress=(item)=>{
        alert(item.title);
    };


    //下面是相关的view 模块
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
                                 onPress={this._pendingPaymentAction}
                >
                </OrderHandleItem>
                <OrderHandleItem title='待发货'
                                 image={Images.Me.To_be_shipped}
                                 onPress={this._tobeshippedAction}
                >
                </OrderHandleItem>
                <OrderHandleItem title='已发货'
                                 image={Images.Me.Shipped}
                                 onPress={this._shippedAction}
                >
                </OrderHandleItem>
                <OrderHandleItem title='已完成'
                                 image={Images.Me.Order_Completed}
                                 onPress={this._completedOrderAction}
                >
                </OrderHandleItem>
                <OrderHandleItem title='全部'
                                 image={Images.Me.Order_All}
                                 onPress={this._allOrderAction}
                >
                </OrderHandleItem>
            </View>
        );
    };

    renderRow = (item) => {

        if(Platform.OS === 'ios'){
            return (

                <TouchableHighlight onPress={this._rowPress.bind(this,item.item)}>
                    <View style={MeStyles.listViewRow}>

                        <Text style={{marginLeft:20,fontSize:16}}>
                            {item.item.title}
                        </Text>

                        <Image source={Images.Common.ArrowRight} style={{width : 30, height:30, marginRight:20}}>

                        </Image>

                    </View>
                </TouchableHighlight>

            );
        }

        return (
            <TouchableNativeFeedback onPress={()=>{alert('123'); }}>
                <View style={MeStyles.listViewRow}>

                    <Text style={{marginLeft:20, fontSize:16}}>
                        {item.item.title}
                    </Text>

                    <Image source={Images.Common.ArrowRight} style={{width : 30, height:30, marginRight:20}}>

                    </Image>
                </View>
            </TouchableNativeFeedback>

        );
    }

    _renderSeprator= ()=>{
        return (
            <View style={ {backgroundColor : '#f6f6f6',height : 5}}>

            </View>
        );
    };



    render(){
        return(
        <View style = {CommonStyles.top_layout_container}>

            <FlatList style={MeStyles.flatList}

                      refreshing={this.state.refreshing}

                      onRefresh={()=>{
                                        this.setState({refreshing : true});

                                        setTimeout(()=>{
                                            this.setState({refreshing : false});
                                            alert('refreshed...'); }, 3000);
                                        }
                                }

                      ListHeaderComponent={this.listHeader}

                      keyExtractor={(item, index) => {return index;}}  //使用json中的title动态绑定key

                      data = {this.state.dataSource} //数据源
                      renderItem = {(item) => this.renderRow(item)} //每一行render

                      ItemSeparatorComponent = {this._renderSeprator}

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
        height:50,
        backgroundColor:'#ffff',
        flexDirection : 'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
});




