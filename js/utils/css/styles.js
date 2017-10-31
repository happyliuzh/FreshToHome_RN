import {StyleSheet} from 'react-native'

const CommonStyles = StyleSheet.create({
    center_layout_container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },

    top_layout_container : {
        flex:1,
        justifyContent:'flex-start',
    },

    horizontalLine : {
        height : 0.5,
        flex : 1,
        backgroundColor:'#aaaaaa',
        marginLeft : 16,
        marginRight : 16,
    }
});

export default CommonStyles;