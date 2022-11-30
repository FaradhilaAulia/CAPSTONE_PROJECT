import {useState, useEffect, useContext} from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {SyncOutlined} from '@ant-design/icons';
import Link from "next/link";
import {Context} from "../context";
import { useRouter } from "next/router";

const Register = ( ) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    const {
        state: {user},
    } = useContext(Context);


    useEffect(() => {
        if(user !== null) router.push("/")
    }, [user])



    const handleSubmit = async (e) =>{
        e.preventDefault();
        //console.table({name, email, password})
        try{
            setLoading(true);

            const {data} = await axios.post(`/api/register`, {
                name, 
                email, 
                password,
            });

            // console.log("Register respon", data);
            toast.success("Yeay Register Berhasil, Silahkan Login")
            setLoading(false);

        }catch (err){
            toast.error(err.response.data);
            setLoading(false);
        }
    };

    return (
        <>
        <h1 className="container-fluid p-5 bg-primary text-white text-center"> Register Page</h1>
            <div className="container col-md-4 offset-md-4 pb-5">
                <form onSubmit={handleSubmit}>
                    <input type="text" className="form-control mb-2 p-2" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name" required
                    />
                    
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
                        disabled={!name || !email || !password || loading}
                        >
                            {loading ? <SyncOutlined spin /> : "Register"}
                    </button>
                    </div>     
                </form>
                <p className="text-center p-3">
                    already register ? {" "}
                    <Link href="/login" className="text-primary text-decoration-none">Login</Link>
                </p>
            </div>
        </>
    );
};

export default Register;