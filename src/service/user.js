import { requestGet } from "../utils/request";

const userService = {
  // gọi api get user
  getUser() {
    return requestGet('/user');
  }
}

export default userService;