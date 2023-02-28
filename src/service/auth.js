import { requestPost } from "../utils/request";
const authService = {
    login(username,password){
        return requestPost('/auth/login', { username, password })
    }
}

export default authService;