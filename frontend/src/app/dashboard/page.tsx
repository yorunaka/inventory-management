"use client";
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

// 🎨 Warna untuk chart
const COLORS = ["#4CAF50", "#FF9800", "#F44336", "#2196F3"];

const Dashboard = () => {
  // Dummy Data
  const userStat = {
    total: 15,
    admin: 5,
    staff: 10,
    activeToday: 5,
  };

  const deviceStat = {
    total: 60,
    normal: 50,
    inUse: 8,
    broken: 2,
  };

  const activityLogs = [
    { device: "PC-01", cpu: 85, ram: 70, status: "Overload" },
    { device: "PC-02", cpu: 35, ram: 50, status: "Normal" },
    { device: "PC-03", cpu: 15, ram: 20, status: "Idle" },
  ];

  const prediction = {
    low: 40,
    medium: 15,
    high: 5,
    topRiskDevices: ["PC-07", "PC-14", "PC-22"],
  };

  // 📊 Data untuk chart
  const userChartData = [
    { name: "Admin", value: userStat.admin },
    { name: "Staff", value: userStat.staff },
  ];

  const deviceChartData = [
    { name: "Normal", value: deviceStat.normal },
    { name: "Dalam Pemakaian", value: deviceStat.inUse },
    { name: "Rusak", value: deviceStat.broken },
  ];

  const predictionChartData = [
    { name: "Risiko Rendah", value: prediction.low },
    { name: "Risiko Sedang", value: prediction.medium },
    { name: "Risiko Tinggi", value: prediction.high },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-6">
      {/* Card: Statistik Pengguna */}
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-lg font-semibold mb-4">Statistik Pengguna</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={userChartData}
              dataKey="value"
              nameKey="name"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {userChartData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
        <p className="mt-4 text-green-600">
          Aktif Hari Ini: {userStat.activeToday}
        </p>
      </div>

      {/* Card: Status Perangkat */}
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-lg font-semibold mb-4">Status Perangkat</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={deviceChartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#2196F3">
              {deviceChartData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Card: Aktivitas Monitoring */}
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-lg font-semibold mb-4">Aktivitas Monitoring</h2>
        <ul className="space-y-2">
          {activityLogs.map((log, i) => (
            <li
              key={i}
              className="border-b pb-2 last:border-b-0 flex justify-between"
            >
              <span>{log.device}</span>
              <span>
                CPU {log.cpu}% | RAM {log.ram}% |{" "}
                <span
                  className={
                    log.status === "Overload"
                      ? "text-red-600"
                      : log.status === "Idle"
                      ? "text-gray-500"
                      : "text-green-600"
                  }
                >
                  {log.status}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card: Prediksi Kerusakan */}
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-lg font-semibold mb-4">Prediksi Kerusakan</h2>
        <ResponsiveContainer className='mt-2' width="100%" height={300}>
          <PieChart>
            <Pie
              data={predictionChartData}
              dataKey="value"
              nameKey="name"
              outerRadius={80}
              label
            >
              {predictionChartData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>

        <h3 className="font-medium mt-3">Top Risiko Tinggi:</h3>
        <ul className="list-disc list-inside">
          {prediction.topRiskDevices.map((dev, i) => (
            <li key={i}>{dev}</li>
          ))}
        </ul>
      </div>

      {/* Card: Ringkasan Sistem */}
      <div className="bg-white shadow-lg rounded-2xl p-6 col-span-1 md:col-span-2 xl:col-span-1">
        <h2 className="text-lg font-semibold mb-4">Ringkasan Sistem</h2>
        <p>Laporan Kerusakan Bulan Ini: 7</p>
        <p>Perangkat Sehat: 53 | Rusak: 7</p>
        <p>Uptime Rata-rata: 98%</p>
        <p className="text-sm text-gray-500 mt-2">Versi Aplikasi: v1.0.0</p>
      </div>
    </div>
  );
};

export default Dashboard;
