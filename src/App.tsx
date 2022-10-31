import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import JobItem from "./components/JobItem";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./scss/app.scss";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="job/:id"
          element={
            <JobItem
              id={""}
              name={""}
              email={""}
              phone={""}
              title={""}
              salary={""}
              address={""}
              updatedAt={""}
              description={""}
              employment_type={[]}
              pictures={[]}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
