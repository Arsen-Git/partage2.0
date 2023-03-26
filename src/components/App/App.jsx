import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import Spinner from "../Spinner/Spinner";

const Homepage = lazy(() => import("../../pages/Homepage"));
const CollectionPage = lazy(() => import("../../pages/CollectionPage"));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/:collectionId" element={<CollectionPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
