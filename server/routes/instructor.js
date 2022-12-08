import express from 'express';

const router = express.Router();
//moddlewares
import { requireSignin } from '../middlewares';
// controllers
import { makeInstructor } from '../controllers/instructor';

router.post("/make-instructor", requireSignin, makeInstructor);

module.exports = router;
