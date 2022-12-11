import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { SyncOutlined, SmileTwoTone, MailTwoTone, LockTwoTone } from '@ant-design/icons';
import Link from 'next/link';
import { Context } from '../context';
import { useRouter } from 'next/router';
import Head from 'next/head';

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
    try {
      setLoading(true);

      const { data } = await axios.post(`/api/register`, {
        name,
        email,
        password,
      });

      toast.success('Yeay Register Berhasil, Silahkan Login');
      setName('');
      setEmail('');
      setPassword('');
      setLoading(false);
    } catch (err) {
      toast.error(err.response.data);
      setLoading(false);
    }
  };

  return (
    <>
    <Head>
        <title>Daftar</title>
    </Head>
      <div className="center-form-login">
        <div className="container">
          <div className="forms">
            <div className="form login">
              <span className="title">Registration</span>

              <form onSubmit={handleSubmit}>
                <div className="input-field">
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                  <i>
                    <SmileTwoTone />
                  </i>
                </div>
                <div className="input-field">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                  <i>
                    <MailTwoTone />
                  </i>
                </div>
                <div className="input-field">
                  <input type="password" className="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                  <i>
                    <LockTwoTone />
                  </i>
                </div>

                <div className="input-field buttonLogin">
                  <button type="submit" disabled={!name || !email || !password || loading}>
                    {loading ? <SyncOutlined spin /> : 'Register'}
                  </button>
                </div>
              </form>

              <div className="login-signup">
                <span className="text">
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
