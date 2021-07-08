

// "/api/test/all"
// "/api/test/admin"
// "/api/test/learner"

import axios from "axios";
import authHeader from "./auth-header"

const API_URL="http://localhost:8080/api/test/";


class UserService{

    getPublicContent(){
        return axios.get(API_URL+'all');
    }

    getLearnerBoard(){
        return axios.get(API_URL+'learner',{headers:authHeader()});
    }
    getAdminBoard(){
        return axios.get(API_URL+'admin',{headers:authHeader()});
    }
    getInstructorBoard(){
        return axios.get(API_URL+'instructor',{headers:authHeader()});
    }

}

export default new UserService();

