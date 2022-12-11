import { List, Avatar } from 'antd';

const { Item } = List;

const SingleCourseLessons = ({ lessons, setPreview, showModal, setShowModal }) => {
  return (
    <div className="d-flex flex-column mt-3 p-3">
    <div className="row">
      <div className="col lesson-list mt-3 ">
        {lessons && <h4>{lessons.length} Materi</h4>}
        <hr />
        <List
          itemLayout="horizontal"
          dataSource={lessons}
          renderItem={(item, index) => (
            <Item>
              <Item.Meta
                avatar={<Avatar>{index + 1}</Avatar>}
                title={item.title}
              />
              {item.video && item.video !== null && item.free_preview && (
                <span
                  className="text-primary pointer"
                  onClick={() => {
                    setPreview(item.video.Location);
                    setShowModal(!showModal);
                  }}
                >
                  Preview
                </span>
              )}
            </Item>
          )}
        />
      </div>
    </div>
  </div>
  );
};

export default SingleCourseLessons;
