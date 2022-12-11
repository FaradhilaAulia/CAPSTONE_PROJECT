import express from 'express';
import formidable from 'express-formidable';

const router = express.Router();

// middleware
import { requireSignin, isInstructor, isEnrolled } from '../middlewares';

// controllers
import { uploadImage, 
    removeImage, 
    create, 
    read, 
    update, 
    uploadVideo, 
    removeVideo, 
    addLesson, 
    removeLesson, 
    updateLesson, 
    publishCourse, 
    unpublishCourse, 
    courses, 
    checkEnrollment,
    freeEnrollment,
    userCourses,
    markCompleted,
    listCompleted,
    markIncomplete,
} 
    from '../controllers/course';

router.get('/courses', courses);
//image
router.post('/course/upload-image', uploadImage);
router.post('/course/remove-image', removeImage);

//course
router.post('/course', requireSignin, isInstructor, create);
router.put('/course/:slug', requireSignin, update);
router.get('/course/:slug', read);

router.post('/course/video-upload/:instructorId', requireSignin, formidable(), uploadVideo);
router.post('/course/video-remove/:instructorId', requireSignin, removeVideo);

router.put('/course/publish/:courseId', requireSignin, publishCourse);
router.put('/course/unpublish/:courseId', requireSignin, unpublishCourse);

router.post('/course/lesson/:slug/:instructorId', requireSignin, addLesson);
router.put('/course/lesson/:slug/:instructorId', requireSignin, updateLesson);
router.put('/course/:slug/:lessonId', requireSignin, removeLesson);

router.get("/check-enrollment/:courseId",requireSignin, checkEnrollment);

router.post("/free-enrollment/:courseId", requireSignin, freeEnrollment);

router.get("/user-courses", requireSignin, userCourses);
router.get("/user/course/:slug", requireSignin, isEnrolled, read);

router.post("/mark-completed", requireSignin, markCompleted);
router.post("/list-completed", requireSignin, listCompleted);
router.post("/mark-incomplete", requireSignin, markIncomplete);
module.exports = router;
