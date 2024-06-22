import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutPage from "./components/pages/About";
import Certifications from "./components/pages/Certifications";
import Projects from "./components/pages/Projects";
import Resume from "./components/pages/Resume";
import Contact from "./components/pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <AboutPage screen="lg" /> },
      { path: "/projects", element: <Projects /> },
      { path: "/resume", element: <Resume /> },
      { path: "/certifications", element: <Certifications /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default router;
