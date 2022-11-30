import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { LoadingOutlined  } from "@ant-design/icons";

const UserRoute = ({ children }) => {
    //state
    const [ok, setOk] = useState(false);
    
    //router
    const router = useRouter();

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        try {
            const {data} = await axios.get("/api/current-user");
            //console.log(data);
            if (data.ok) setOk(true);
        } catch (err) {
            console.log(err);
            setOk(false);
            router.push("/login");
        }
    };

    return (
        <>
            {!ok ? (
                <LoadingOutlined 
                spin 
                className=" d-flex justify-content-center diplay-1 text-primary p-5" 
                /> 
            ) 
            : 
            (
                <> { children } </>
            )}
        </>    
    );      
};

export default UserRoute;