import React, {useEffect, useState} from "react";
import Loading from "../../components/app/Loading";
import groupService from "../../service/group";
import GroupTable from "../../components/group/GroupTable";
import { useTranslation } from "react-i18next";

const Groups = () => {

  const { t } = useTranslation();

  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getGroups();
  }, []);

  const getGroups = async  () => {
    setLoading(true);
    const  res = await groupService.getGroups();
    if (res.status === 200){
      setGroups(res.data.data);
      console.log(res.data.data);
    }
    else{
      console.log(res.data.message);
    }
    setLoading(false);
  }

  const getTable = () => {
    if (loading) {
      return <Loading />
    }
    // truyền giá trị users cho component con
    return <GroupTable groups={groups}/>
  }

  return (
    <div className="common-page user-page">
      <div className="common-title">
        {t('group.title')}

      </div>
      <div className="user-body">
        <div className="filter">

        </div>
        {getTable()}
      </div>
    </div>
  )
}

export default Groups;