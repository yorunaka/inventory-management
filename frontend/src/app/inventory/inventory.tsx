"use client"
import { useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

const COLORS = ["#4CAF50", "#FF9800", "#F44336", "#2196F3"];

const Inventory = () => {
  // 🔹 Dummy Data Perangkat
  const devices = [
    { id: 1, name: "PC-01", category: "PC", status: "Normal", location: "Lab A" },
    { id: 2, name: "PC-02", category: "PC", status: "Dalam Pemakaian", location: "Lab B" },
    { id: 3, name: "PC-03", category: "PC", status: "Rusak", location: "Lab A" },
    { id: 4, name: "Laptop-01", category: "Laptop", status: "Normal", location: "Lab C" },
    { id: 5, name: "Printer-01", category: "Printer", status: "Rusak", location: "Lab B" },
    { id: 6, name: "Switch-01", category: "Networking", status: "Normal", location: "Lab Server" },
  ];

  const [filter, setFilter] = useState("All");

  // 🔹 Data untuk Statistik
  const statusSummary = [
    { name: "Normal", value: devices.filter((d) => d.status === "Normal").length },
    { name: "Dalam Pemakaian", value: devices.filter((d) => d.status === "Dalam Pemakaian").length },
    { name: "Rusak", value: devices.filter((d) => d.status === "Rusak").length },
  ];

  const filteredDevices =
    filter === "All" ? devices : devices.filter((d) => d.status === filter);

  return (
    <div className="p-6 space-y-6">
      {/* Ringkasan */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-2">Total Perangkat</h2>
          <p className="text-2xl">{devices.length}</p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-2">Perangkat Normal</h2>
          <p className="text-2xl text-green-600">
            {statusSummary.find((s) => s.name === "Normal")?.value}
          </p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-2">Perangkat Rusak</h2>
          <p className="text-2xl text-red-600">
            {statusSummary.find((s) => s.name === "Rusak")?.value}
          </p>
        </div>
      </div>

      {/* Chart Status */}
      <div className="bg-white p-4 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-4">Statistik Status Perangkat</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={statusSummary}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value">
              {statusSummary.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Filter & Tabel */}
      <div className="bg-white p-4 rounded-2xl shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Daftar Perangkat</h2>
          <select
            className="border rounded-md px-3 py-1"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">Semua</option>
            <option value="Normal">Normal</option>
            <option value="Dalam Pemakaian">Dalam Pemakaian</option>
            <option value="Rusak">Rusak</option>
          </select>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2">Nama</th>
              <th className="p-2">Kategori</th>
              <th className="p-2">Status</th>
              <th className="p-2">Lokasi</th>
            </tr>
          </thead>
          <tbody>
            {filteredDevices.map((dev) => (
              <tr key={dev.id} className="border-b hover:bg-gray-50">
                <td className="p-2">{dev.name}</td>
                <td className="p-2">{dev.category}</td>
                <td
                  className={`p-2 font-medium ${
                    dev.status === "Normal"
                      ? "text-green-600"
                      : dev.status === "Dalam Pemakaian"
                      ? "text-orange-600"
                      : "text-red-600"
                  }`}
                >
                  {dev.status}
                </td>
                <td className="p-2">{dev.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
