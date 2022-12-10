import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import SingleCourseJumbotron from '../../component/cards/SingleCourseJumbotron';
import PreviewModal from '../../component/modal/PreviewModal';
import SingleCourseLessons from '../../component/cards/SingleCourseLessons';

const SingleCourse = ({ course }) => {
  const [showModal, setShowModal] = useState(false);
  const [preview, setPreview] = useState('');

  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <SingleCourseJumbotron course={course} showModal={showModal} setShowModal={setShowModal} preview={preview} setPreview={setPreview} />
      <PreviewModal showModal={showModal} setShowModal={setShowModal} preview={preview} />
      {course.lessons && <SingleCourseLessons lessons={course.lessons} setPreview={setPreview} showModal={showModal} setShowModal={setShowModal} />}
    </>
  );
};

export async function getServerSideProps({ query }) {
  const { data } = await axios.get(`${process.env.API}/course/${query.slug}`);
  return {
    props: {
      course: data,
    },
  };
}

export default SingleCourse;
