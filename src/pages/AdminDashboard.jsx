// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);

  // Mock data (replace with real API later)
  useEffect(() => {
    const mockBookings = [
      {
        id: 1,
        name: "Kumar",
        phone: "9876543210",
        service: "Haircut",
        date: "2025-08-01",
        time: "11:00",
      },
      {
        id: 2,
        name: "Ravi",
        phone: "9876512345",
        service: "Beard Trim",
        date: "2025-08-01",
        time: "12:30",
      },
    ];
    setBookings(mockBookings);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">Admin Dashboard</h2>

        {bookings.length === 0 ? (
          <p className="text-center text-gray-500">No bookings available.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-purple-100 text-purple-800">
                  <th className="p-2 border">#</th>
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Phone</th>
                  <th className="p-2 border">Service</th>
                  <th className="p-2 border">Date</th>
                  <th className="p-2 border">Time</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking, index) => (
                  <tr key={booking.id} className="hover:bg-gray-100">
                    <td className="p-2 border">{index + 1}</td>
                    <td className="p-2 border">{booking.name}</td>
                    <td className="p-2 border">{booking.phone}</td>
                    <td className="p-2 border">{booking.service}</td>
                    <td className="p-2 border">{booking.date}</td>
                    <td className="p-2 border">{booking.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
