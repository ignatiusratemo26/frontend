import React, { useContext, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { UserContext } from "../UserContext";
import axios from "axios";
import MyPurchases from "./MyPurchases";

export default function ProfilePage() {
    const [redirect, setRedirect] = useState(null);
    const { ready, user, setUser } = useContext(UserContext);
    let { subpage } = useParams();
    if (subpage === undefined) {
        subpage = 'profile';
    }

    async function logout() {
        await axios.post('/api/logout');
        setRedirect('/');
        setUser(null);
    }

    if (!ready) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    if (ready && !user && !redirect) {
        return <Navigate to={'/login'} />;
    }

    if (redirect) {
        return <Navigate to={redirect} />;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-4">Profile</h2>
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 mb-4 md:mb-0">
                    <nav className="space-y-2">
                        <Link to="/profile" className={`block p-2 rounded ${subpage === 'profile' ? 'bg-red-300 text-white' : 'bg-gray-200'}`}>Profile</Link>
                        <Link to="/profile/mypurchases" className={`block p-2 rounded ${subpage === 'mypurchases' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>My Purchases</Link>
                        <Link to="/profile/settings" className={`block p-2 rounded ${subpage === 'settings' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Settings</Link>
                        <button onClick={logout} className="block w-full p-2 rounded bg-red-800 text-white">Logout</button>
                    </nav>
                </div>
                <div className="md:w-3/4 p-4 bg-white rounded-lg shadow-md">
                    {subpage === 'profile' && (
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Welcome, {user.name}</h3>
                            <p>Email: {user.email}</p>
                        </div>
                    )}
                    {subpage === 'mypurchases' && (
                        // <div>
                        //     <h3 className="text-2xl font-semibold mb-4">Your Orders</h3>
                        //     <p>Order details go here</p>
                        // </div>
                        <MyPurchases />
                    )}
                    {subpage === 'settings' && (
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Settings</h3>
                            <p>Settings go here</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}