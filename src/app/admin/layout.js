"use client";
import { useAuth } from "../context/authContext.js";
import AdminLoginForm from "./_components/AdminLoginForm.js";
import AdminHeader from "./_components/AdminHeader";
import AdminSidebar from "./_components/AdminSidebar";

function AdminLayout({ children }) {
  const { user, loading } = useAuth();

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Loading...</h2>
        </div>
      </div>
    );
  }

  // If user is not logged in or is not an admin, show login form
  if (!user || user.role !== "admin") {
    return <AdminLoginForm />;
  }

  // If user is logged in and is an admin, show admin panel
  return (
    <div className="flex h-screen overflow-hidden">
      <AdminSidebar />
      <div className="flex-1 overflow-y-auto p-6">
        <AdminHeader />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}

export default AdminLayout;