// Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow p-4 mb-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">BIWI Technologies</h1>
        </div>
      </header>

      <main className="container mx-auto px-4">
        <Outlet />
      </main>

      <footer className="text-center text-sm text-gray-500 mt-12 p-4 border-t">
        © 2025 BIWI Technologies — Tous droits réservés
      </footer>
    </div>
  );
};

export default Layout;
