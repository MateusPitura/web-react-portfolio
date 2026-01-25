import { lazy, Suspense, type ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../pages/Loading";
import Footer from "./Footer";
import Header from "./Header";

const ErrorBoundary = lazy(() => import("../pages/ErrorBoundary"));

export function Layout(): ReactNode {
  return (
    <ErrorBoundary>
      <div className="h-screen flex flex-col">
        <Header />
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
