import SingleCourse from '../../pages/course/[slug]';
import { currencyFormatter } from '../../utils/helpers';
import { Badge, Modal, Button } from 'antd';
import ReactPlayer from 'react-player';
import { LoadingOutlined, SafetyOutlined } from '@ant-design/icons';

const SingleCourseJumbotron = ({ 
  course, 
  showModal, 
  setShowModal, 
  preview, 
  setPreview, 
  loading, 
  user, 
  handleFreeEnrollment ,
  enrolled,
  setEnrolled,
}) => {
  const { name, 
    description, 
    instructor, 
    updatedAt, 
    lessons, 
    image, 
    price, 
    paid, 
    category } = course;

  return (
    <div className="container-fluid p-5 bg-primary text-white ">
      <div className="row">
        <div className="col-md-8">
          {/* title */}
          <h1 className="text-light font-weight-bold">{name}</h1>
          {/* description */}
          <p className="lead">
            {description && description.substring(0, 160)}...
          </p>
          {/* category */}
          <Badge
            count={category}
            style={{ backgroundColor: "#03a9f4" }}
            className="pb-4 mr-2"
          />
          {/* author */}
          <p>Created by {instructor.name}</p>
          {/* updated at */}
          <p>Last udpated {new Date(updatedAt).toLocaleDateString()}</p>
          {/* price */}
          <h4 className="text-light">
            {paid
              ? currencyFormatter({
                  amount: price,
                  currency: "usd",
                })
              : "Free"}
          </h4>
        </div>
        <div className="col-md-4">
          {/* show video preview or course image */}
          {lessons[0].video && lessons[0].video.Location ? (
            <div
              onClick={() => {
                setPreview(lessons[0].video.Location);
                setShowModal(!showModal);
              }}
            >
              <ReactPlayer
                className="react-player-div"
                url={lessons[0].video.Location}
                light={image.Location}
                width="100%"
                height="225px"
              />
            </div>
          ) : (
            <>
              <img src={image.Location} alt={name} className="img img-fluid" />
            </>
          )}
          {/* enroll button */}
          {loading ? (
            <div className="d-flex justify-content-center mt-3">
              <LoadingOutlined className="h1 text-danger" />
            </div>
          ) : (
            <Button className='btn btn-success mb-3 mt-3' 
            type="danger" 
            shape="round" 
            icon={<SafetyOutlined/>} 
            size="large" 
            disabled={loading}
            onClick={handleFreeEnrollment}
            >
              { user ? enrolled.status ? "Pergi ke Course" : "Enroll" : "Login to Enroll"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleCourseJumbotron;
