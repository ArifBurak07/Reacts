import axios from "axios";

 export async function getData(){
 const getUsers = (user_id) => {
    return new Promise
    (async(resolve, reject) => {
        const {data} = await axios('https://jsonplaceholder.typicode.com/users/'+user_id);
        resolve(data);
        reject("Başaramadın ustam hata var!!!")
    });
;}

const getPosts = (user_id) =>{
    return new Promise
    (async(resolve,reject)=>{
        const {data} = await axios('https://jsonplaceholder.typicode.com/posts?userId='+user_id);
        resolve(data);
        reject("Başaramadın ustam hata var!!!")
    });
};



Promise.all([getUsers(2), getPosts(2)])
.then(console.log)
.catch(console.log);
};

export default getData;