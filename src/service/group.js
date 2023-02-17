import { requestGet } from "../utils/request";

const groupService = {

    getGroups() {
        return requestGet('/group');
    }
}

export default groupService;