import {useState, useContext, useEffect, use} from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {SyncOutlined} from "@ant-design/icons";
import Link from "next/link";
import {Context} from "../context";
import { useRouter } from "next/router";

const Login = ( ) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);


    //state
    const {state, dispatch} = useContext(Context);
    const { user } = state;

    //console.log("STATE", state);

    //router
    const router = useRouter();

    useEffect(() =>{
        if(user !== null) router.push("/");
    }, [user])

    const handleSubmit = async (e) =>{
        e.preventDefault();
        //console.table({name, email, password})
        try{
            setLoading(true);

            const {data} = await axios.post(`/api/login`, {
                email, 
                password,
            });

            dispatch({
                type: "LOGIN",
                payload: data,
            });

            //save localstorage
            window.localStorage.setItem('user', JSON.stringify(data));
            //redirect
            router.push("/");

            //console.log("Login Respon", data);
            //setLoading(false);

        }catch (err){
            toast.error(err.response.data);
            setLoading(false);
        }
    };

    return (
        <>
        <h1 className="container-fluid p-5 bg-primary text-white text-center"> Login Page</h1>
            <div className="container col-md-4 offset-md-4 pb-5">
                <form onSubmit={handleSubmit}>
                    
                    <input type="email" className="form-control mb-2 p-2" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email" required
                    />

                    <input type="password" className="form-control mb-2 p-2" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" required
                    />
                    
                    <div className="d-grid gap-3">
                    <button 
                        className="btn btn-primary btn-block" 
                        type="submit" 
                        disabled={!email || !password || loading}
                        >
                            {loading ? <SyncOutlined spin /> : "Login"}
                    </button>
                    </div>     
                </form>
                <p className="text-center p-3">
                    Not yet register? {" "}
                    <Link href="/register" className="text-primary text-decoration-none">Register</Link>
                </p>
            </div>
        </>
    );
};

export default Login;