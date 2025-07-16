import React from 'react';
import AuthForm from '../../components/AuthForm';
import Navbar from "../../components/Navbar";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white flex flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-16">
          <AuthForm initialView="login" />
      </main>
    </div>
  );
}
