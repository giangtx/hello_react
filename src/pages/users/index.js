import React from "react";
import { useEffect } from "react";
import userService from "../../service/user";
import { useState } from "react";
import Loading from "../../components/app/Loading";
import UserTable from "../../components/user/UserTable";

const Users = () => {

  // thông tin lấy từ api sẽ truyền vào đây
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  // mỗi khi có thay đổi sẽ gọi vào đây
  useEffect(() => {
    getUser();
  }, []);

  // lấy thông tin người dùng từ api
  const getUser = async () => {
    setLoading(true);
    // gọi service lấy thông tin user
    const res = await userService.getUser();
    if (res.status === 200) {
      // nếu mà thành công thì gán giá trị cho biến users
      setUser(res.data.data);
    } else {
      // nếu lỗi thì vào đây
      console.log(res.msg);
    }
    setLoading(false);
  }

  // thay vì dùng ?: thì sẽ viết hàm để xử lý kết quả khi loading
  const getTableContent = () => {
    if (loading) {
      return <Loading />
    }
    // truyền giá trị users cho component con
    return <UserTable users={users}/>
  }

  return (
    <div className="common-page user-page">
      <div className="common-title">
        Danh sach nguoi dung
      </div>
      <div className="user-body">
        <div className="common-filter">
          <div className='input-form'>
            <input className='input-select select-mode' placeholder="search" />
          </div>
          <div className="action-filter">
            <button className='btn btn-add flex'>
              new
            </button>
          </div>
        </div>
        {getTableContent()}
      </div>
    </div>
  )
}

export default Users;