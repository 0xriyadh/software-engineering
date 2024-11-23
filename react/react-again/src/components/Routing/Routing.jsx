import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import Landing from "./components/Routing/Landing";
// import Dashboard from "./components/Routing/Dashboard";
import { lazy, Suspense } from "react";

const Landing = lazy(() => import("./Landing"));
const Dashboard = lazy(() => import("./Dashboard"));

function Routing() {
    return (
        <BrowserRouter>
            <AppBar />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route
                    path="/dashboard"
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <Dashboard />
                        </Suspense>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

function AppBar() {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };
    return (
        <div>
            <h1 className="text-white text-center py-2 mb-2 bg-red-500">
                App Bar...
            </h1>
            <div className="flex justify-start space-x-4 mx-6">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleNavigate("/")}
                >
                    Landing
                </button>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleNavigate("/dashboard")}
                >
                    Dashboard
                </button>
            </div>
        </div>
    );
}

export default Routing;
