import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MarqueeBanner } from "../../components/MarqueeBanner";

const tasks = [
    { task: "Searching Doctor Network 1", status: "No Doctors Available", isError: true },
    { task: "Searching Doctor Network 2", status: "1 Licensed Doctor Available" },
    { task: "Checking Pharmacy for Stock", status: "Generic Cialis® Stock Available - Low Stock" },
    { task: "Checking for Discount Code", status: "Instead of $10 discount" },
    { task: "Gathering Shipping Estimate", status: "Qualified for 2 Free months Shipping!" }
];

const ProcessingPage = () => {
    const { productName } = useParams()
    // console.log(data)
    const navigate = useNavigate();
    const [currentTask, setCurrentTask] = useState(0);
    const [showStatus, setShowStatus] = useState(false);
    // const progress = ((currentTask + 1) / tasks.length) * 100;
    const progress = Math.min((currentTask / (tasks.length - 1)) * 100, 100);

    useEffect(() => {
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
            setTimeout(() => navigate(`/home/treatment/product/${productName}`), 1000);
        }
    }, [currentTask, navigate, productName]);

    return (
        <div>
            <MarqueeBanner text="Checking Eligibility" className="bg-red-400 text-white animate-pulse" />

            <div className="flex flex-col items-center p-6 justify-items-center juctify-center md:mt-10 lg:mt-20">
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
                                        <span className={item.isError ? "text-red-500" : "text-green-600 font-semibold"}>
                                            {item.status}
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