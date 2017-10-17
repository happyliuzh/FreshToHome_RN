/**
 * Created by liuzhihui on 2017/10/16.
 */

export const sleep = (time) => new Promise( resolve => setTimeout(()=>resolve(),time));