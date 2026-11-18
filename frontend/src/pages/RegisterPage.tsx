import { useState } from "react";

export const RegisterPage = () => {
        const [loading, setLoading] = useState(false)
        const [success, setSuccess] = useState(false)
        const [error, setError] = useState(null)
    return (
        <div className="flex min-h-screen items-center justify-center">
            {loading && <div>Loading ...</div>}
            {success && <div> Success ... </div>}
            {error ? <div>{error}</div> : "" }
            <div className="border-2 border-purple-400 p-10 rounded-2xl  shadow-[18px_18px_0px_rgba(168,85,247,0.3)]">
                {/* Grid container with 2 columns: 1st for labels, 2nd for inputs */}
                <div className="grid grid-cols-[auto_1fr] items-center gap-x-6 gap-y-4">
                    
                    <label className="text-white underline font-bold text-right">Name:</label>
                    <input className="border border-purple-300 rounded p-1 w-full caret-white text-white" />

                    <label className="text-white underline font-bold text-right">Password:</label>
                    <input className="border border-purple-300 rounded p-1 w-fullcaret-white text-white" type="password" />

                    <label className="text-white underline font-bold text-right">Confirm Password:</label>
                    <input className="border border-purple-300 rounded p-1 w-full caret-white text-white" type="password" />

                </div>
                <div className="flex justify-center mt-5 text-white border-2 rounded-xl p-2 border-purple-400 font-bold
                shadow-[4px_4px_4px_rgba(168,85,247,0.3)]
                ">
                    <button>
                        Register User
                    </button>
                </div>
            </div>
        </div>
    );
};