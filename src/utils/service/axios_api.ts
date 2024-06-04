import axios, { type AxiosInstance } from "axios";
//https://www.jstoolset.com/jwt
export const useAxiosRequestWithToken = (token:string = "") : AxiosInstance  =>{
    const useAxios: AxiosInstance = axios.create({
        baseURL               : "https://elie.excursio.africa/api/",
        headers   : {
          accept: 'application/json',
          "Content-type"      :   "application/json",
          "X-Requested-With"  :   "XMLHttpRequest",
          "Authorization"     :   `Bearer ${token}`
        },
      })
      return useAxios
}

export const useAxiosRequest = (token:string = "") : AxiosInstance  =>{
  const useAxios: AxiosInstance = axios.create({
      baseURL               : "https://expressjs-quickbook.vercel.app/api/",
      headers   : {
        accept: 'application/json',
        "Access-Control-Allow-Origin": 'https://qkbfront.drapeauyamboka.com/',
        "Content-type"      :   "application/json",
        "X-Requested-With"  :   "XMLHttpRequest",
        "Authorization"     :   `${token}`,
        
      },
    })
    return useAxios
}

export const getApiWithConfigAxios = (token = "") : AxiosInstance =>{
  return  axios.create({
        baseURL               :/*"https://server.drapeauyamboka.com/api"*/`https://quickbooks.api.intuit.com/v3/company/9341452194141898`,
        headers   : {
          accept: 'application/json',
          "Content-type"      :   "application/json",
          "X-Requested-With"  :   "XMLHttpRequest",
          "Authorization"     :   `Bearer ${token}`       
        }
      })
}