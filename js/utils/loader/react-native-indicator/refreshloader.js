/**
 * Created by liuzhihui on 2017/10/20.
 */

import { BubblesLoader } from 'react-native-indicator'
import React , { Component } from 'react'
import Colors from '../../color'
import DimensionUtil from '../../dimension'


// export default class RefreshLoader extends Component
// {
//     render(){
//       return (
//           <BubblesLoader color={Colors.MainColor}
//                          size={40} dotRadius={8}
//                          style={{
//                              marginTop : DimensionUtil.ScreenHeight - 200,
//                              marginLeft: (DimensionUtil.ScreenWidth - 40) / 2.0,
//               }}/>
//       );
//     };
// }

export default refreshLoader = ()=>{

    return (
        <BubblesLoader color={Colors.MainColor}
                       size={40} dotRadius={8}
                       style={{

                           marginTop : (DimensionUtil.ScreenHeight - 40) / 2.0,
                           marginLeft: (DimensionUtil.ScreenWidth - 40) / 2.0,
                       }}/>
    );
}