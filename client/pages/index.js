import { SafetyCertificateTwoTone, CompassTwoTone, StarTwoTone, StarFilled } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import course from '../../server/models/course';
import axios from 'axios';
import CourseCard from '../component/cards/CourseCard';

const Index = ({ courses }) => {
  //  const [courses, setCourses] = useState([]);

  //  useEffect(() => {
  //    const fetchCourses = async () => {
  //      const { data } = await axios.get('/api/courses');
  //      setCourses(data);
  //    };
  //    fetchCourses();
  // }, []);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <header>
        <div className="pageatas">
          <div className="logo">
            <Image className="img" src="/profile/SOLUSIPINTAR.png" width={400} height={300} />
          </div>
          <h1>SOLUSIPINTAR</h1>
          <h3>
            Solusi Pintar menyediakan kemudahan untuk teman-teman <br />
            para penyandang disabilitas untuk bisa menikmati pendidikan
            <br />
            tanpa kekurangan apapun.
          </h3>
        </div>
        <div className="tombol">
          <a href="/register" target="_blank">
            <span>Daftar sekarang</span>
          </a>
        </div>
        <div className="gambarsamping">
          <Image className="img" src="/profile/samping.png" width={1000} height={600} />
        </div>
      </header>

      <section id="features">
        <h1>Our Vision</h1>

        <div className="feature-base">
          <div className="feature-box">
            <i>
              <SafetyCertificateTwoTone />
            </i>
            <h3>Visi</h3>
            <p>Menjadi Penyelenggara Website Pendidikan Secara Online yang bisa diakses oleh seluruh kalangan dengan fitur yang mudah dan juga fungsi yang begitu banyak. </p>
          </div>
          <div className="feature-box">
            <i>
              <CompassTwoTone />
            </i>
            <h3>Misi</h3>
            <p>Menjadi website yang bisa bermanfaat bagi seluruh pengguna, memberikan kemudahan dalam pembelajaran dan juga menjadi website ini menjadi sarana pengembangan.</p>
          </div>
          <div className="feature-box">
            <i>
              <StarTwoTone />
            </i>
            <h3>Goals</h3>
            <p>Mampu memberikan pembelajaran dan fasilitas website yang mumpuni untuk para teman-teman penyandang disabilitas sehingga mereka dengan mudah belajar melalui platform online</p>
          </div>
        </div>
        <h4 className="container-fluid p-5 bg-primary text-white text-center mt-5">
          Untuk teman-teman disabilitas, sebelum kamu menggunakan website ini mari aktifkan screen reader berikut! ^^
          <div className="tomboldw mt-5">
            <a
              href="https://chrome.google.com/webstore/detail/screen-reader/kgejglhpjiefppelpmljglcjbhoiplfn?hl=id&brand=CHBD&gclid=Cj0KCQiA1sucBhDgARIsAFoytUvcrhAnGYBdwoYYsciBOKEDZJVSRHL_7ON_QXwMAsVMCIEJwb6i0mMaAqA1EALw_wcB&gclsrc=aw.ds"
              target="_blank"
            >
              <span>Download disini</span>
            </a>
          </div>
        </h4>
      </section>

      <h1 id="course">Online Course</h1>
      <div className="container-fluid">
        <div className="row">
          {courses.map((course) => (
            <div className="col-md-4" key={course._id}>
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>

      <div className="team">
        <h3>Our team</h3>
        <p>Inilah kami, dibalik website yang sedang kalian jalankan ada ide dan pembuatan yang dikerjakan oleh kami.</p>

        <div className="tim">
          <div>
            <Image className="img" src="/profile/fachriza.jpeg" width={200} height={200} />
            <h6>Fachriza Adrian</h6>
            <span> Universitas Sumatera Utara </span>
          </div>
          <div>
            <Image className="img" src="/profile/dhila.jpeg" width={200} height={200} />
            <h6>Faradhila Aulia </h6>
            <span> Universitas Sumatera Utara </span>
          </div>
          <div>
            <Image className="img" src="/profile/atha.jpeg" width={200} height={200} />
            <h6>Atha Maulana</h6>
            <span> Universitas Sumatera Utara </span>
          </div>
          <div>
            <Image className="img" src="/profile/najwa.jpg" width={200} height={200} />
            <h6>Najwa Syiba</h6>
            <span> Unversitas Andalas </span>
          </div>
        </div>
      </div>

      <section className="contact-us">
        <h5>Contact us</h5>
        <div className="link-item">
          <a href="https://discord.gg/tmm4Z9D9" target="_blank">
            <span>Our Discord Group</span>
          </a>
        </div>
        <div className="link-item">
          <a href="https://github.com/FaradhilaAulia/CAPSTONE_PROJECT.git" target="_blank">
            <span>Our Github Repository</span>
          </a>
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.API}/courses`);
  return {
    props: {
      courses: data,
    },
  };
}

export default Index;
