//factory pattern

/// SpringBoot [JWT] -- Bearer
/// x-access-token


export default function authHeader(){
    const user = JSON.parse(localStorage.getItem("user"));
    if(user && user.accessToken){
        return {'x-access-token':user.accessToken}
    }else{
        return {};
    }
}