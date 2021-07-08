


/// login ()  POST {username,password}-> JWT -> localStorage(Save)
// logout() We will delete the JWT from our local Storagec
// register() POST {username,email,passowrd}
// retrival of currentuser() get stored user infomation (including JWT)


import axios from "axios";
const API_URL="http://localhost:8080/api/auth/";

class AuthService{
    login(username,password){
        return axios
        .post(API_URL+"signin",{
            username,
            password
        })
        .then(response=>{
            if(response.data.accesToken){
                localStorage.setItem("user", JSON.stringify(response.data))
            }
           return response.data;
        });
    }

    logout(){
        localStorage.removeItem("user");
    }

    register(username,password,email){
        return axios
        .post(API_URL+"signup",{
            username,
            password,
            email
        });
    }

    getCurrentUser(){
        return JSON.parse(localStorage.getItem("user"));
    }
}

export default new AuthService();

