import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/features/userSlice.js";

const Profile = () => {
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem("token"); // if you're storing the token
        navigate("/login");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-white py-10">
            <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-lg border border-gray-200">
                <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">Your Profile</h2>

                <div className="space-y-6">
                    <div className="flex justify-between text-lg">
                        <span className="font-medium text-gray-600">Name:</span>
                        <span className="text-gray-900">{user?.name || "N/A"}</span>
                    </div>

                    <div className="flex justify-between text-lg">
                        <span className="font-medium text-gray-600">Email:</span>
                        <span className="text-gray-900">{user?.email || "N/A"}</span>
                    </div>

                    <div className="flex justify-between text-lg">
                        <span className="font-medium text-gray-600">Role:</span>
                        <span className="text-gray-900 capitalize">{user?.role || "user"}</span>
                    </div>

                    {/* Example future field */}
                    {/* <div className="flex justify-between text-lg">
            <span className="font-medium text-gray-600">Joined:</span>
            <span className="text-gray-900">{new Date(user?.createdAt).toLocaleDateString() || 'N/A'}</span>
          </div> */}
                </div>

                <div className="mt-10 flex justify-between">
                    <button
                        onClick={() => navigate("/edit-profile")}
                        className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                    >
                        Edit Profile
                    </button>
                    <button
                        onClick={handleLogout}
                        className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
