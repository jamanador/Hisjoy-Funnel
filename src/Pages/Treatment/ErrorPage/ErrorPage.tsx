import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center p-6 w-full h-screen bg-white rounded-lg flex items-center justify-center">
                <div>
                    <h1 className="text-7xl font-extrabold text-red-600">404</h1>
                    <h2 className="text-2xl font-bold text-gray-800 mt-2">Oops! Page not found</h2>
                    <p className="text-gray-600 mt-2">
                        The page you are looking for doesn't exist or has been removed.
                    </p>
                    <Link
                        to="/"
                        className="mt-4 inline-block px-6 py-3 text-white bg-brand-maroon rounded-lg hover:bg-brand-secondary transition duration-300"
                    >
                        Go Back Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
