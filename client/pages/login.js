import { useState, useContext, useEffect, use } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { SyncOutlined, MailTwoTone, LockTwoTone } from '@ant-design/icons';
import Link from 'next/link';
import { Context } from '../context';
import { useRouter } from 'next/router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  //state
  const { state, dispatch } = useContext(Context);
  const { user } = state;

  //console.log("STATE", state);

  //router
  const router = useRouter();

  useEffect(() => {
    if (user !== null) router.push('/');
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.table({name, email, password})
    try {
      setLoading(true);

      const { data } = await axios.post(`/api/login`, {
        email,
        password,
      });

      dispatch({
        type: 'LOGIN',
        payload: data,
      });

      //save localstorage
      window.localStorage.setItem('user', JSON.stringify(data));
      //redirect
      router.push('/user');

      //console.log("Login Respon", data);
      //setLoading(false);
    } catch (err) {
      toast.error(err.response.data);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="center">
        <div className="container">
          <div className="forms">
            <div className="form login">
              <span className="title">Login</span>

              <form onSubmit={handleSubmit}>
                <div className="input-field">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
                  <i>
                    <MailTwoTone />
                  </i>
                </div>
                <div className="input-field">
                  <input type="password" className="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
                  <i>
                    <LockTwoTone />
                  </i>
                </div>

                <div className="checkbox-text">
                  <Link href="/forgot-password">Forgot Password</Link>
                </div>

                <div className="input-field buttonLogin">
                  <button type="submit" disabled={!email || !password || loading}>
                    {loading ? <SyncOutlined spin /> : 'Login'}
                  </button>
                </div>
              </form>

              <div className="login-signup">
                <span className="text">
                  Not a member?{' '}
                  <Link href="/register" className="text-primary text-decoration-none">
                    Signup Now
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
