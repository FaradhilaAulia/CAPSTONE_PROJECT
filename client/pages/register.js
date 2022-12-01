import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { SyncOutlined, SmileTwoTone, MailTwoTone, LockTwoTone } from '@ant-design/icons';
import Link from 'next/link';
import { Context } from '../context';
import { useRouter } from 'next/router';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const {
    state: { user },
  } = useContext(Context);

  useEffect(() => {
    if (user !== null) router.push('/');
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.table({name, email, password})
    try {
      setLoading(true);

      const { data } = await axios.post(`/api/register`, {
        name,
        email,
        password,
      });

      // console.log("Register respon", data);
      toast.success('Yeay Register Berhasil, Silahkan Login');
      setLoading(false);
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
              <span class="title">Registration</span>

              <form onSubmit={handleSubmit}>
                <div class="input-field">
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                  <i>
                    <SmileTwoTone />
                  </i>
                </div>
                <div class="input-field">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                  <i>
                    <MailTwoTone />
                  </i>
                </div>
                <div class="input-field">
                  <input type="password" class="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                  <i>
                    <LockTwoTone />
                  </i>
                </div>

                <div class="input-field buttonLogin">
                  <button type="submit" disabled={!name || !email || !password || loading}>
                    {loading ? <SyncOutlined spin /> : 'Register'}
                  </button>
                </div>
              </form>

              <div class="login-signup">
                <span class="text">
                  Already register?{' '}
                  <Link href="/login" className="text-primary text-decoration-none">
                    Login
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

export default Register;
