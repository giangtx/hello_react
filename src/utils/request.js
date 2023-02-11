// thư viên dùng để gọi api
import axios from "axios";

// url mặc định
const DEFAULT_URL = 'http://localhost:3013';

export const requestGet = async(url, params = {}, config = {}) => {
  // vì khi gọi api thì sẽ xảy ra các lỗi không kiểm soát được nên phải phải cho vào try catch
  try {
    // gì gọi api thì sẽ mất thời gian nên nó là bất đồng bộ vì vậy dùng async và await
    // nếu thì chó thể dùng .then()
    // hoặc dùng Promise()
    const res = await axios.get(DEFAULT_URL + url, {
      ...config,
      params,
    })
    // nếu k có gì xảy ra thì sẽ trả về kêt quả bên dưới
    return {
      data: res.data.data,
      status: res.status,
      msg: res.message,
    };
  } catch(error) {
    // xảy ra lỗi
    return {
      status: 0,
      msg: error,
    }
  }
}

