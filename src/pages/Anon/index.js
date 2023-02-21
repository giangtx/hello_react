import React, {useEffect, useState} from "react";
import anonService from "../../service/anon";
import Loading from "../../components/app/Loading";
import AnonTable from "../../components/anon/AnonTable";
import {useTranslation} from "react-i18next";

const Anons = () => {

    const { t } = useTranslation();

    const [anons, setAnons] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getAnons();
    }, []);

    const getAnons = async () => {
        const res = await anonService.getAnons();
        setLoading(true);
        if(res.status === 200){
            setAnons(res.data);
        }
        else{
            console.log(res.message);
        }
        setLoading(false);
    }

    const getTable = () => {
        if (loading) {
            return <Loading />
        }
        return <AnonTable anons={anons}/>
    }

    return(
        <div className="common-page user-page">
            <div className="common-title">
                {t('anons.title')}

            </div>
            <div className="user-body">
                <div className="filter">

                </div>
                {getTable()}
            </div>
        </div>
    )

}
export default Anons;