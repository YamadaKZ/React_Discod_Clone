import { FallbackProps } from "react-error-boundary";

export const ErrorFallback = ({error,resetErrorBoundary} : FallbackProps) => {

    return (
        <div role="alert">
            <p>Something went wrong</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>

        </div>
    )
};