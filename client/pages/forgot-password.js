import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { SyncOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { Context } from '../context';
import { useRouter } from 'next/router';
import Head from 'next/head';

const ForgotPassword = () => {
  // state
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // context
  const {
    state: { user },
  } = useContext(Context);
  // router
  const router = useRouter();

  // redirect if user is logged in
  useEffect(() => {
    if (user !== null) router.push('/');
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post('/api/forgot-password', { email });
      setSuccess(true);
      toast.success('Check your email for the secret code');
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast(err.response.data);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    // console.log(email, code, newPassword);
    // return;
    try {
      setLoading(true);
      const { data } = await axios.post('/api/reset-password', {
        email,
        code,
        newPassword,
      });
      toast.success('You can use new password');
      setEmail('');
      setCode('');
      setNewPassword('');
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast(err.response.data);
    }
  };

  return (
    <>
    <Head>
            <title>Forgot Password</title>
        </Head>
      <div className="center">
        <div className="container">
          <div className="forms">
            <div className="form login">
              <span className="title">Forgot Password</span>
              <form onSubmit={success ? handleResetPassword : handleSubmit}>
                <div className="input-field">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required />{' '}
                </div>
                {success && (
                  <>
                    <div className="input-field">
                      <input type="text" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Enter secret code" required />
                    </div>
                    <div className="input-field">
                      <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="New Password" required />
                    </div>
                  </>
                )}

                <div className="input-field buttonLogin">
                  <button type="submit" disabled={loading || !email}>
                    {loading ? <SyncOutlined spin /> : 'Submit'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
