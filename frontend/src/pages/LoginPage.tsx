export default function LoginPage(){


    return(
        <div className="flex min-h-screen items-center justify-center">
            <div className="flex flex-col gap-3 border-2 border-purple-300 p-10 rounded-2xl shadow-md shadow-purple-300">
                <div className="flex gap-2">
                    <label className="text-white font-bold">Email:</label>
                    <input
                    className="border border-purple-400 rounded caret-white-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    />
                </div>
                 <div className="flex gap-2">
                    <label className="text-white font-bold">Password:</label>
                    <input
                    className="border border-purple-400 rounded caret-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    />
                </div>
                <div className="flex justify-center">
                    <button
                    className="border-2 px-10 py-1 border-purple-400 rounded text-white font-extrabold"
                    >Login</button>
                </div>
            </div>
        </div>
    )

}