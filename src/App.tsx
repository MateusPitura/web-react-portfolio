import { BrowserRouter, Route, Routes } from "react-router-dom";

import { lazy } from "react";
import { Layout } from "./components/Layout";
import { BASENAME } from "./constants";
import Home from "./pages/Home";

const Terms = lazy(() => import("./pages/Terms"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  const isProduction = import.meta.env.MODE === "production";

  return (
    <BrowserRouter basename={isProduction ? BASENAME : "/"}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
