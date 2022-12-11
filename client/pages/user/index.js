import { useContext, useEffect, useState } from "react";
import { Context } from "../../context";
import UserRoute from "../../component/routes/UserRoute";
import Head from "next/head";
import axios from "axios";
import { Avatar } from "antd";
import Link from "next/link";
import { SyncOutlined, PlayCircleOutlined } from "@ant-design/icons";

const UserIndex = () => {
    const {state: {user},
        } = useContext((Context));
        const [courses, setCourses] = useState([]);
        const [loading, setLoading] = useState(false);
        
        useEffect(() => {
            loadCourses()
        }, [])

        const loadCourses = async () => {
            const {data} = await axios.get("/api/user-courses")
            setCourses(data)
        }

    return(
        <UserRoute>
            <Head>
                <title>Dashboard Pengguna</title>
            </Head>
                <h1 className="container-fluid p-5 bg-primary text-white text-center">
                    Dashboard Pengguna
                </h1>
                {courses &&
        courses.map((course) => (
          <div key={course._id} className="media pt-2 pb-1">
            <Avatar
              size={160}
              shape="square"
              src={course.image ? course.image.Location : "/course.png"}
            />

            <div className="media-body pl-2 ">
              <div className="row">
                <div className="col ">
                  <Link
                    href={`/user/course/${course.slug}`}
                    className="pointer"
                    legacyBehavior>
                    <a className="mt-2  text-decoration-none text-dark">
                      <h5 className="pt-2">{course.name}</h5>
                    </a>
                  </Link>
                  <p style={{ marginTop: "-10px" }}>
                    {course.lessons.length} Materi
                  </p>
                  <p
                    className="text-muted"
                    style={{ marginTop: "-15px", fontSize: "12px" }}
                  >
                    Oleh {course.instructor.name}
                  </p>
                </div>
                <div className="col-md-3 mt-3 text-center ">
                  <Link href={`/user/course/${course.slug}`} legacyBehavior>
                    <a>
                      <PlayCircleOutlined className="h2 pointer text-primary" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        </UserRoute>
    );      
};

export default UserIndex;