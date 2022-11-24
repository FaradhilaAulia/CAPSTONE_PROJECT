import Home from '../../scripts/views/pages/home';
import About from '../../scripts/views/pages/about';
import Courses from '../../scripts/views/pages/courses';
import Blog from '../../scripts/views/pages/blog';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/about': About,
  '/courses': Courses,
  '/blog': Blog,
};
 
export default routes;