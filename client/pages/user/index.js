import { useContext } from "react";
import { Context } from "../../context";
import UserRoute from "../../component/routes/UserRoute";
import Head from "next/head";

const UserIndex = () => {
    const {state: {user},
        } = useContext((Context))

    return(
        <UserRoute>
            <Head>
                <title>User Dashboard</title>
            </Head>
                <h1 className="container-fluid p-5 bg-primary text-white text-center">
                    User Dashboard
                </h1>
        </UserRoute>
    );      
};

export default UserIndex;