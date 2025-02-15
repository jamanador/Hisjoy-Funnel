
export default function Advertisement() {
    return (
        <div className="flex flex-col items-center p-2 mb-4 md:my-8 ">
            {/* Button Section */}
            <div className="flex items-center justify-center space-x-2 bg-brand-secondary text-white px-4 py-3 rounded-lg md:w-9/12 w-full mb-4">
                <span className="text-[12px] md:text-lg font-bold">✓</span>
                <span className="text-[13px] md:text-sm font-bold text-center">No video or phone call required!</span>
            </div>

            {/* As Advertised On Section */}
            <div className="flex items-center space-x-4">
                <div className="flex items-center">
                    <img src="/images/advertisementlogo1.webp" alt="USA Today" className="h-full w-full  mx-auto" />
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
