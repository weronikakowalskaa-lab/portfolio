import { createHashRouter } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { CaseStudyPage } from "./components/CaseStudyPage";
import { PetCareCaseStudy } from "./components/PetCareCaseStudy";
import { LittleLemonCaseStudy } from "./components/LittleLemonCaseStudy";

export const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/projects/petcare-app",
    element: <PetCareCaseStudy />,
  },
  {
    path: "/projects/little-lemon",
    element: <LittleLemonCaseStudy />,
  },
  {
    path: "/projects/:slug",
    element: <CaseStudyPage />,
  },
]);
