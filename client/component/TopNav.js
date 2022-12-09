import { useState, useEffect, useContext } from "react";
import { Menu } from "antd";
import Link from "next/link";
import {
  AppstoreOutlined, 
  LoginOutlined, 
  LogoutOutlined, 
  UserAddOutlined, 
  CoffeeOutlined,
  DashboardOutlined, 
  CarryOutOutlined,
  ContactsOutlined, 
  TeamOutlined,
} from "@ant-design/icons";
import { Context } from "../context";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const { Item, SubMenu, ItemGroup } = Menu;

const TopNav = () => {
  const [current, setCurrent] = useState("");

  const { state, dispatch } = useContext(Context);
  const { user } = state;

  const router = useRouter();

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  const logout = async () => {
    dispatch({ type: "LOGOUT" });
    window.localStorage.removeItem("user");
    const { data } = await axios.get("/api/logout");
    toast.success(data.message);
    router.push("/login");
  };

  return (
    <Menu mode="horizontal" selectedKeys={[current]} className="mb-2">
      <Item
        key="/"
        onClick={(e) => setCurrent(e.key)}
        icon={<AppstoreOutlined />}
      >
        <Link href="/" className="navbar nav-link navbar-text" legacyBehavior>
        <a className="text-decoration-none"> Home </a>
        </Link>
      </Item>

      <Item key="/about" onClick={(e) => setCurrent(e.key)} icon={<ContactsOutlined />}>
            <Link href="/about" className="navbar nav-link navbar-text" legacyBehavior>
              <a className="text-decoration-none"> About </a>
            </Link>
          </Item>

      {user && user.role && user.role.includes("Instructor") ? (
        <Item
          key="/instructor/course/create"
          onClick={(e) => setCurrent(e.key)}
          icon={<CarryOutOutlined />}
        >
          <Link href="/instructor/course/create" legacyBehavior>
          <a className="text-decoration-none">Create Course</a>
          </Link>
        </Item>
      ) : (
        <Item
          key="/user/become-instructor"
          onClick={(e) => setCurrent(e.key)}
          icon={<TeamOutlined />}
        >
          <Link href="/user/become-instructor" className="navbar nav-link  navbar-text" legacyBehavior>
          <a className="text-decoration-none">Become instructor</a>
          </Link>
        </Item>
      )}

      {user === null && (
        <>
          <Item
            key="/login"
            onClick={(e) => setCurrent(e.key)}
            icon={<LoginOutlined />}
          >
            <Link href="/login" className="navbar nav-link  navbar-text"  legacyBehavior>
              <a className="text-decoration-none">Login</a>
            </Link>
          </Item>

          <Item
            key="/register"
            onClick={(e) => setCurrent(e.key)}
            icon={<UserAddOutlined />}
          >
            <Link href="/register" className="navbar nav-link navbar-text" legacyBehavior>
              <a className="text-decoration-none">Register</a>
            </Link>
          </Item>
        </>
      )}

      {user !== null && (
        <SubMenu
          icon={<CoffeeOutlined />}
          title={user && user.name}
          className="float-end ms-auto"
        >
          <ItemGroup>
            <Item key="/user" icon={<DashboardOutlined />}>
              <Link href="/user" className="navbar nav-link  navbar-text" legacyBehavior> 
                <a className="text-decoration-none">Dashboard</a>
              </Link>
            </Item>
            <Item icon={<LogoutOutlined />} onClick={logout}>Logout</Item>
          </ItemGroup>
        </SubMenu>
      )}

      {user && user.role && user.role.includes("Instructor") && (
        <Item
          key="/instructor"
          onClick={(e) => setCurrent(e.key)}
          icon={<TeamOutlined />}
          className="float-right"
        >
          <Link href="/instructor" legacyBehavior>
            <a className="text-decoration-none">Instructor</a>
          </Link>
        </Item>
      )}

    </Menu>
  );
};

export default TopNav;
