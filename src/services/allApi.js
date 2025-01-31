import base_url from "./base_url";
import commonApi from "./commonApi"

export const addFieldApi=async(data)=>{
    return await commonApi('POST',`${base_url}/addField`,data,"")
}

export const getFieldApi=async()=>{
    return await commonApi('GET',`${base_url}/viewField`,"")
}