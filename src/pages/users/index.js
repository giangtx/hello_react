import React from "react";
import { useEffect } from "react";
import userService from "../../service/user";
import { useState } from "react";
import Loading from "../../components/app/Loading";
import UserTable from "../../components/user/UserTable";
import { useLocation  } from "react-router-dom";


const Users = () => {

  // lấy ra cái thông tin của page trên url (vd users?page=2 => 2)
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const currentpage = queryParams.get('page') ? queryParams.get('page') : 1;

  // thông tin lấy từ api sẽ truyền vào đây state
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(currentpage);
  const [search, setSearch] = useState('');
  const [totalPage, setTotalPage] = useState(0);

  // sau khi con update page cho component cha thì Users lắng nghe sự thay đổi page để gọi lại hàm getUser
  useEffect(() => {
    getUser(page);
  }, [page]);

  // lấy thông tin người dùng từ api
  const getUser = async (pageNum) => {
    setLoading(true);
    // gọi service lấy thông tin user
    const res = await userService.getUser(pageNum, 5, search);
    if (res.status === 200) {
      // nếu mà thành công thì gán giá trị cho biến users
      setUser(res.data.data);
      setTotalPage(res.data.totalpage);
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
    return <UserTable 
            users={users}
            pageCount={totalPage}
            forcePage={page}
            setPage={setPage}
          />
  }

  const handleSearch = () => {
    getUser(page)
  }

  return (
    <div className="common-page user-page">
      <div className="common-title">
        Danh sach nguoi dung
      </div>
      <div className="user-body">
        <div className="common-filter">
          <div className='input-form'>
            <input className='input-select select-mode'
              placeholder="search"
              onChange={(e) => {setSearch(e.target.value);}}
            />
            <button className='btn btn-add flex' onClick={() => { handleSearch() }}>
              search
            </button>
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