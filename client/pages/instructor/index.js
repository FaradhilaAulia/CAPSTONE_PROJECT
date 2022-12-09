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
        <title>Instructor Dashboard</title>
      </Head>
      <h1 className="container-fluid p-5 bg-primary text-white text-center">Instructor Dashboard</h1>
      {/* <pre>{JSON.stringify(courses, null, 4)}</pre> */}

      {courses &&
        courses.map((course) => (
          <>
            <div className="media pt-2">
              <Avatar size={150} src={course.image ? course.image.Location : '/course.png'} />

              <div className="media-body pl-2">
                <div className="row">
                  <div className="col">
                    <Link href={`/instructor/course/view/${course.slug}`} className="pointer" legacyBehavior>
                      <a className="mt-2  text-decoration-none text-dark ">
                        <h5 className="pt-2">{course.name}</h5>
                      </a>
                    </Link>
                    <p style={{ marginTop: '-10px' }}>{course.lessons.length} Materi </p>

                    {course.lessons.length < 5 ? (
                      <p style={myStyle} className="text-warning">
                        Buat 5 Materi Agar dapat di Posting
                      </p>
                    ) : course.published ? (
                      <p style={myStyle} className="text-success">
                        Modul Berhasil di Unggah
                      </p>
                    ) : (
                      <p style={myStyle} className="text-success">
                        Modul Anda Siap di Unggah
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
