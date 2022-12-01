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
      router.push('/');

      //console.log("Login Respon", data);
      //setLoading(false);
    } catch (err) {
      toast.error(err.response.data);
      setLoading(false);
    }
  };

  return (
    <>
      <div class="center">
        <div class="container">
          <div class="forms">
            <div class="form login">
              <span class="title">Login</span>

              <form onSubmit={handleSubmit}>
                <div class="input-field">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter you email" required />
                  <i>
                    <MailTwoTone />
                  </i>
                </div>
                <div class="input-field">
                  <input type="password" class="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
                  <i>
                    <LockTwoTone />
                  </i>
                </div>

                <div class="checkbox-text">
                  <div class="checkbox-content">
                    <input type="checkbox" id="logCheck" />
                    <label for="logCheck" class="text">
                      Remember me
                    </label>
                  </div>

                  <a href="#" class="text">
                    Forgot password?
                  </a>
                </div>

                <div class="input-field buttonLogin">
                  <button type="submit" disabled={!email || !password || loading}>
                    {loading ? <SyncOutlined spin /> : 'Login'}
                  </button>
                </div>
              </form>

              <div class="login-signup">
                <span class="text">
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
