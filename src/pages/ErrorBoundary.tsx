import React, { ErrorInfo, lazy, ReactNode, Suspense } from "react";
import Loading from "./Loading";

const ErrorBoundaryContainer = lazy(
  () => import("../components/ErrorBoundaryContainer"),
);

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Suspense
          fallback={
            <div className="h-screen flex flex-col">
              <Loading />
            </div>
          }
        >
          <ErrorBoundaryContainer />
        </Suspense>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
