import React, {Component} from 'react'
import {View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    Platform,
} from 'react-native'

import ToastUtil  from '../../utils/toast'

//redux 绑定
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Actions from '../../state/redux/action'

import MeItemTypes from './meItemType'

import CommonStyles from '../../utils/css/styles'
import Images from '../../utils/image'
import OrderHandleItem from '../../components/Me/OrderHandleItem'

import { NavigationActions} from 'react-navigation'
import Colors from '../../utils/color'


class MeScreen extends Component{

    static navigationOptions =({navigation}) => ({
        title : '我的',
        headerTitleStyle : { alignSelf : 'center'},
        headerBackTitle : '返回',
        headerTintColor : Colors.MainColor,
        headerRight : (
            <View style = { {
                marginRight : 16,
            }}>
                <TouchableOpacity onPress = {
                    () => {
                        const { dispatch } = navigation;

                        dispatch(NavigationActions.navigate({
                            routeName : 'Logout'
                        }));
                    }
                }>
                    <Image source={ Images.Me.Settings } style={ {
                        width : 22,
                        height : 22,
                    }}/>
                </TouchableOpacity>
            </View>
        ),
    });

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

    //订单相关的5个点击事件。

    _orderDealAction = ( params ) => {

        const { dispatch }  = this.props.navigation;

        dispatch(NavigationActions.navigate({
            routeName:'Order',
            params:{
                title : params.title,
            }
        }));

    }


    _rowPress=(item)=>{

        switch (item.type)
        {
            case MeItemTypes.ME_ALL_ORDER:{
                const { dispatch }  = this.props.navigation;
                dispatch(NavigationActions.navigate({
                    routeName : 'Order',
                    params : {
                        title : '全部订单',
                    }
                }));
                break;
            }

            case MeItemTypes.ME_Manage_ADDR:{
                ToastUtil(item.title);

                break;
            }

            case MeItemTypes.ME_FEED_BACK : {
                ToastUtil(item.title);

                break;
            }

            case MeItemTypes.ME_ABOUT_US :{
                ToastUtil(item.title);

                break;
            }
            default:
                break;
        }

    };


    //下面是相关的view 模块
    listHeader = ()=>{
        return (
            <View style={MeStyles.listHeader}>

                <TouchableOpacity onPress = { () => {
                    const { dispatch } = this.props.navigation;
                    dispatch(NavigationActions.navigate({
                        routeName : 'UserInfo',
                    }));

                }}>
                    <Image style={MeStyles.listHeaderPortrait} source={Images.Me.UserHeadDefault}></Image>
                    <Text style={MeStyles.listHeaderName}>新鲜到家客户</Text>
                </TouchableOpacity>

                {this.orderHandle()}
            </View>
        );
    };

    orderHandle = ()=>{
        return (
            <View style={MeStyles.orderHandle}>

                <OrderHandleItem title='待付款'
                                 image={Images.Me.PendingPayment}
                                 onPress={this._orderDealAction.bind(this, {
                                     title : '待付款'
                                 })}
                >
                </OrderHandleItem>
                <OrderHandleItem title='待收货'
                                 image={Images.Me.Shipped}
                                 onPress={this._orderDealAction.bind(this, {
                                     title : '待收货'
                                 })}
                >
                </OrderHandleItem>
                <OrderHandleItem title='已完成'
                                 image={Images.Me.Order_Completed}
                                 onPress={this._orderDealAction.bind(this, {
                                     title : '已完成'
                                 })}
                >
                </OrderHandleItem>
                <OrderHandleItem title='已取消'
                                 image={Images.Me.Cancelled}
                                 onPress={this._orderDealAction.bind(this, {
                                     title : '已取消'
                                 })}
                >
                </OrderHandleItem>
                <OrderHandleItem title='待评价'
                                 image={Images.Me.Evaluate}
                                 onPress={this._orderDealAction.bind(this, {
                                     title : '待评价'
                                 })}
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


