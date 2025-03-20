import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { scroller } from "react-scroll";
import { MarqueeBanner } from "../../components/MarqueeBanner";
import categories from "../../config"; // Ensure this path is correct

const ProcessingPage = () => {
    const { category } = useParams<{ category: string }>();
    const navigate = useNavigate();
    const [currentTask, setCurrentTask] = useState(0);
    const [showStatus, setShowStatus] = useState(false);

    const location = useLocation();

    useEffect(() => {
        if (location.hash && location.hash === "#checking") {
            scroller.scrollTo("checking", {
                smooth: true,
                duration: 500,
                offset: -140, // Adjust if needed
            });
        }
    }, [location.hash]);




    const tasks = useMemo(() => {
        if (!category) return [];
        return [
            { task: `Searching Doctor Network for ${category}`, status: "No Doctors Available", isError: true },
            { task: "Searching Doctor Network 2", status: "1 Licensed Doctor Available" },
            { task: `Checking Pharmacy for Stock of ${category}`, status: `Generic ${category} Stock Available Low Stock` },
            { task: "Gathering Shipping Estimate", status: "Qualified for 2 Free months Shipping!" },
        ];
    }, [category]);

    const progress = tasks.length ? Math.min((currentTask / (tasks.length - 1)) * 100, 100) : 0;

    useEffect(() => {
        if (!category) return;

        if (currentTask < tasks.length) {
            setShowStatus(false);
            const taskTimer = setTimeout(() => {
                setShowStatus(true);
                const statusTimer = setTimeout(() => {
                    setCurrentTask((prev) => prev + 1);
                }, 1000);
                return () => clearTimeout(statusTimer);
            }, 1500);
            return () => clearTimeout(taskTimer);
        } else {
            setTimeout(() => navigate(`/home/treatment/product/${category}`), 1000);
        }
    }, [currentTask, navigate, category, tasks.length]);

    if (!category) {
        return (
            <div className="flex flex-col items-center p-6">
                <h1 className="text-xl text-red-500 font-bold mb-4">Error: No Category Specified</h1>
                <p>Please go back and choose a category to proceed with the processing.</p>
            </div>
        );
    }

    const categoryExists = categories.some(
        (cat) => cat.categoryName.toLowerCase() === category.toLowerCase()
    );

    if (!categoryExists) {
        return (
            <div className="flex flex-col items-center p-6">
                <h1 className="text-xl text-red-500 font-bold mb-4">Error: Category Not Found</h1>
                <p>The category you are looking for does not exist.</p>
            </div>
        );
    }

    return (
        <div>
            <MarqueeBanner text="Checking Eligibility" className="bg-red-400 text-white animate-pulse" />
            <div className="flex flex-col items-center p-6 justify-items-center md:mt-10 lg:mt-15" id="checking">
                <h1 className="text-2xl font-bold mb-4">Checking Doctor & Stock Availability</h1>
                <div className="w-full max-w-lg bg-gray-200 rounded-full h-5 overflow-hidden mb-6">
                    <div className="bg-green-500 h-full transition-all duration-500 ease-in-out" style={{ width: `${progress}%` }}></div>
                </div>
                <p className="text-sm text-gray-500 mb-4">Total Progress: {Math.round(progress)}%</p>
                <table className="w-full max-w-lg border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-2 text-left font-bold">Task</th>
                            <th className="p-2 text-left font-bold">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.slice(0, currentTask + 1).map((item, index) => (
                            <tr key={index} className="border-t border-gray-300">
                                <td className="p-2">{item.task}</td>
                                <td className="p-2">
                                    {index === currentTask && !showStatus ? (
                                        <div className="animate-spin w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full"></div>
                                    ) : (
                                        <span className={item.isError ? "text-red-500 font-semibold" : "text-green-600 font-semibold"}>
                                            {item.status.includes("Low Stock") ? (
                                                <>
                                                    {item.status.split("Low Stock")[0]}
                                                    <span className="text-red-500">- Low Stock</span>
                                                </>
                                            ) : (
                                                item.status
                                            )}
                                        </span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProcessingPage;
