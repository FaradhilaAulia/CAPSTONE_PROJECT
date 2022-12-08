import { useContext, useState } from "react";
import { Context } from "../../context";
import { Button } from "antd";
import axios from "axios";
import { SettingOutlined, UserSwitchOutlined, LoadingOutlined } from "@ant-design/icons";
import { toast, Toast } from "react-toastify";
import UserRoute from "../../component/routes/UserRoute";

const BecomeInstructor = () => {

    const [loading, setLoading] = useState(false);
    const {
        state: {user},
    } = useContext(Context);

    const becomeInstructor = () => {
        //console.log("become Instructor");
        setLoading(true)
        axios.post("/api/make-instructor")
        .then(res => {
            console.log(res)
            window.location.href = res.data;
        })
        .catch(err => {
            console.log(err.response.status)
            toast.error("Stripe Onboarding Fail, Try again.");
            setLoading(false);
        });
    };
    
    return(
        <>
            <h1 className="container-fluid p-5 bg-primary text-white text-center">
                Become Instructor
            </h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 text-center">
                        <div className="pt-4">
                            <UserSwitchOutlined className="display-1 pb-3" />
                            <br />
                            <h2>Setup payout to publish courses on SolusiPintar</h2>
                            <p className="lead text-warning">
                                Partner with stripe
                            </p>

                            <button 
                            className="mb-3" 
                            type="primary" 
                            shape="round" 
                            icon= {loading ? <LoadingOutlined/> : <SettingOutlined/>}
                            size="large"
                            onClick={becomeInstructor}
                            disabled={
                                user && user.role && user.role.includes("instructor")  || loading
                                }
                            >
                                {loading ? "Processing..." : "Payout Setup"}
                            </button>
                            <p className="lead">
                                redicted to stripe to complete process
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default BecomeInstructor;