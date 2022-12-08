import axios from "axios";
import InstructorRoute from "../../component/routes/InstructorRoute";

const InstructorIndex = () => {
  return (
    <InstructorRoute>
      <h1 className="container-fluid p-5 bg-primary text-white text-center">Instructor Dashboard</h1>
    </InstructorRoute>
  );
};

export default InstructorIndex;
