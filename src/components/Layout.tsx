import { lazy, Suspense, type ReactNode } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Loading from "../pages/Loading";
import Footer from "./Footer";
import Header from "./Header";

const ErrorBoundary = lazy(() => import("../pages/ErrorBoundary"));

export function Layout(): ReactNode {
  const { pathname } = useLocation()

  return (
    <ErrorBoundary key={pathname}>
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
