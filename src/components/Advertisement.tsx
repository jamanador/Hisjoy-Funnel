
export default function Advertisement() {
    return (
        <div className="flex flex-col items-center p-6 space-y-6">
            {/* Button Section */}
            <div className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg">
                <span className="text-lg">✓</span>
                <span className="text-sm font-semibold">No video or phone call required!</span>
            </div>

            {/* As Advertised On Section */}
            <div className="flex items-center space-x-4">
                <div className="flex items-center">
                    <img src="/images/advertisementlogo1.webp" alt="USA Today" className="h-full w-full lg:w-8/12 mx-auto" />
                    {/* <img src="forbes-logo.png" alt="Forbes" className="h-6" />
                    <img src="msnbc-logo.png" alt="MSNBC" className="h-6" />
                    <img src="fox-logo.png" alt="FOX" className="h-6" />
                    <img src="cbs-logo.png" alt="CBS" className="h-6" />
                    <img src="cnn-logo.png" alt="CNN" className="h-6" /> */}
                </div>
            </div>
        </div>
    )
}
