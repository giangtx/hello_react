import { requestGet } from "../utils/request";

const anonService = {
    getAnons() {
        return requestGet('/role');
    }
}

export default anonService;