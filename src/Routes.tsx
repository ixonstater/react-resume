import { createBrowserRouter } from "react-router-dom";
import { AboutMe } from "./about_me/AboutMe";
import { Projects } from "./projects/Projects";
import { Resume } from "./resume/Resume";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <AboutMe />
    },
    {
        path: "/about-me",
        element: <AboutMe />
    },
    {
        path: "projects",
        element: <Projects />
    },
    {
        path: "resume",
        element: <Resume />
    }
]);

export default Routes;