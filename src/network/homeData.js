import {request} from "./index";

export  function getMultidata(){
    return request({
        url:"/home/multidata"
    })
}