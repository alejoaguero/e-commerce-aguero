import { games } from "../data/Products"


export const productsApi = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(games)
    },2000)
})