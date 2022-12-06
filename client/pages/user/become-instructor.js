import { useContext, useState } from 'react';
import { Context } from '../../context';
import { Button } from 'antd';
import axios from 'axios';
import { SettingOutlined, UserSwitchOutlined, LoadingOutLined, SwapLeftOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';
import UserRoute from '../../component/routes/UserRoute';

const BecomeInstructor = () => {
  // state
  const [loading, setLoading] = useState(false);
  const {
    state: { user },
  } = useContext(Context);

  return (
    <>
      <h1 className="jumbotron text-center square"> Become Instructor</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center">
            <div className="pt-4">
              <UserSwitchOutlined className="display-1 pb-3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BecomeInstructor;
