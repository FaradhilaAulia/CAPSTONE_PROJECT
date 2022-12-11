import { useState, useEffect } from 'react';
import axios from 'axios';
import InstructorRoute from '../../component/routes/InstructorRoute';
import { Avatar, Tooltip } from 'antd';
import Link from 'next/link';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import Head from 'next/head';

const InstructorIndex = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    const { data } = await axios.get('/api/instructor-courses');
    setCourses(data);
  };

  const myStyle = { marginTop: '-15px', fontSize: '15px' };

  return (
    <InstructorRoute>
      <Head>
        <title>Dashboard Pemateri</title>
      </Head>
      <h1 className="container-fluid p-5 bg-primary text-white text-center">Dashboard Pemateri</h1>

      {courses &&
        courses.map((course) => (
          <>
            <div className="media pt-2">
              <Avatar
                size={80}
                src={course.image ? course.image.Location : "/course.png"}
              />

              <div className="media-body pl-2">
                <div className="row">
                  <div className="col">
                    <Link
                      href={`/instructor/course/view/${course.slug}`}
                      className="pointer" legacyBehavior
                    >
                      <a className="mt-2 text-primary">
                        <h5 className="pt-2">{course.name}</h5>
                      </a>
                    </Link>
                    <p style={{ marginTop: "-10px" }}>
                      {course.lessons.length} Materi
                    </p>

                    {course.lessons.length < 5 ? (
                      <p style={myStyle} className="text-warning">
                        Minimal 5 Materi Agar Dapat di Publish
                      </p>
                    ) : course.published ? (
                      <p style={myStyle} className="text-success">
                        Materi Berhasil di Publish ke Publik
                      </p>
                    ) : (
                      <p style={myStyle} className="text-success">
                        Materi siap di Publish
                      </p>
                    )}
                  </div>

                  <div className="col-md-3 mt-3 text-center">
                    {course.published ? (
                      <Tooltip title="Published">
                        <CheckCircleOutlined className="h5 pointer text-success" />
                      </Tooltip>
                    ) : (
                      <Tooltip title="Unpublished">
                        <CloseCircleOutlined className="h5 pointer text-warning" />
                      </Tooltip>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
    </InstructorRoute>
  );
};

export default InstructorIndex;
