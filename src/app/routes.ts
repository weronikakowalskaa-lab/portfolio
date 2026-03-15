import { createBrowserRouter } from "react-router";
import { HomePage } from "./components/HomePage";
import { CaseStudyPage } from "./components/CaseStudyPage";
import { PetCareCaseStudy } from "./components/PetCareCaseStudy";
import { LittleLemonCaseStudy } from "./components/LittleLemonCaseStudy";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/projects/petcare-app",
    Component: PetCareCaseStudy,
  },
  {
    path: "/projects/little-lemon",
    Component: LittleLemonCaseStudy,
  },
  {
    path: "/projects/:slug",
    Component: CaseStudyPage,
  },
]);
