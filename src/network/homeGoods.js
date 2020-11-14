import {request} from "./index";
export function  getHomeGoods(title,id){
    return request({
        url:"/home/"+title,
        params:{
            id:id
        }
    })
}