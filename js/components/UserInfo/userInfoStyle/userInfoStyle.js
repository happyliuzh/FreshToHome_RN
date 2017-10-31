/**
 * Created by liuzhihui on 2017/10/30.
 */
import {
    StyleSheet,
} from 'react-native'

const Styles = StyleSheet.create({

    container : {
        marginLeft : 16,
        marginRight : 16,
        height : 80,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
    },

    leftView : {
        justifyContent: 'center',
    },

    leftText : {
        color : '#666666',
        fontSize : 16,
    },

    rightView : {

        flexDirection: 'row',
        alignItems:'center',
    },

    arrowRight : {

        marginLeft: 16,
        width : 22,
        height : 22,

    },

    rightImage : {

        width : 60,
        height: 60,
    }
});

export default Styles;