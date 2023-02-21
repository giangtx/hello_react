import { requestGet } from "../utils/request";

const userService = {
  // gọi api get user
  getUser(page = 1, size = 10, search = '') {
    return requestGet('/user', {page, size, search});
  }
}

export default userService;