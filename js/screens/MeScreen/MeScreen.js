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


import ToastComponent from '../../utils/toast/easyToast'

import { PulseLoader } from 'react-native-indicator'

import Toast from 'react-native-root-toast'

import Modal from 'react-native-root-modal'

import Spinner from 'react-native-loading-spinner-overlay';


import Colors from '../../utils/color'


//redux 绑定
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Actions from '../../state/redux/action'

import MeItemTypes from './meItemType'

import CommonStyles from '../../utils/css/styles'
import Images from '../../utils/image'
import OrderHandleItem from '../../components/Me/OrderHandleItem'



class MeScreen extends Component{

    static navigationOptions = {
        title : '我的',
        headerTitleStyle : { alignSelf : 'center'},

    };

    constructor(){
        super();
        this.state = {
            dataSource : [{
                    title : '全部订单',
                    type  : MeItemTypes.ME_ALL_ORDER,
                },
                {
                    title : '收货地址管理',
                    type  : MeItemTypes.ME_Manage_ADDR,

                },
                {
                    title : '问题反馈',
                    type  : MeItemTypes.ME_FEED_BACK,

                },
                {
                    title: '关于我们',
                    type  : MeItemTypes.ME_ABOUT_US,

                }],
        };
    }

    //订单相关的点击事件。
    _pendingPaymentAction=()=>{
        alert('待付款！');
    };

    _tobeReceivedAction=()=>{
        alert('待收货！');
    };

    _completedOrderAction=()=>{
        alert('已完成！');
    };

    _allOrderAction=()=>{
        alert('全部！');
    };

    _cancelledAction=()=>{
        alert('已取消');
    };

    _tobeEvaluated=()=>{
        alert('待评价');
    };

    _rowPress=(item)=>{

        switch (item.type)
        {
            case MeItemTypes.ME_ALL_ORDER:{
                console.log('全部订单。。。。');

                break;
            }

            case MeItemTypes.ME_Manage_ADDR:{
                break;
            }

            case MeItemTypes.ME_FEED_BACK : {
                break;
            }

            case MeItemTypes.ME_ABOUT_US :{
                break;
            }
            default:
                break;
        }

        // alert(item.title);

        this.refs.toast.show(item.title);
        console.log(item.title);

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
                <OrderHandleItem title='待收货'
                                 image={Images.Me.Shipped}
                                 onPress={this._tobeReceivedAction}
                >
                </OrderHandleItem>
                <OrderHandleItem title='已完成'
                                 image={Images.Me.Order_Completed}
                                 onPress={this._completedOrderAction}
                >
                </OrderHandleItem>
                <OrderHandleItem title='已取消'
                                 image={Images.Me.Cancelled}
                                 onPress={this._cancelledAction}
                >
                </OrderHandleItem>
                <OrderHandleItem title='待评价'
                                 image={Images.Me.Evaluate}
                                 onPress={this._tobeEvaluated}
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

                        <Text style={{marginLeft:20,fontSize:16,color:'#333333'}}>
                            {item.item.title}
                        </Text>

                        <Image source={Images.Common.ArrowRight} style={{width : 30, height:30, marginRight:20}}>

                        </Image>

                    </View>
                </TouchableHighlight>

            );
        }

        return (
            <TouchableNativeFeedback onPress={ this._rowPress.bind(this,item.item) }>
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


 //<PulseLoader frequency={1000} size={90} color={Colors.MainColor} style={{alignSelf : 'center'}}/>


render(){
        return(
        <View style = {CommonStyles.top_layout_container}>


            <FlatList style={MeStyles.flatList}

                      refreshing={this.props.refreshing}

                      onRefresh={()=>{
                                        this.props.actions.requestData();

                                        setTimeout(()=>{

                                            alert('refreshed...');
                                            this.props.actions.requestSuccess();

                                        }, 3000);

                                        }
                                }

                      ListHeaderComponent={this.listHeader}

                      keyExtractor={(item, index) => {return index;}}

                      data = {this.state.dataSource} //数据源
                      renderItem = {(item) => this.renderRow(item)} //每一行render

                      ItemSeparatorComponent = {this._renderSeprator}

                      //解决flatlist动一下才显示的问题

                      removeClippedSubviews={false}

            >
            </FlatList>
            {
                ToastComponent()
            }

        </View>
        );
    };



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


const mapStateToProps = (state) => {
    return {
        refreshing : state.meReducer.loading,
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        actions : bindActionCreators(Actions.meAction, dispatch),
    };

};

export default connect(mapStateToProps, mapDispatchToProps)(MeScreen);


