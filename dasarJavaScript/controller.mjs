import users from "./data.mjs";

const index = () =>{
    console.log("Index - Get All Data");
    users.forEach(function (user){
        console.log(user);
    });
};

export {index};