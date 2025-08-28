import AdminHeader from "./_components/AdminHeader";
import AdminSidebar from "./_components/AdminSidebar";

function layout({children}) {
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

export default layout;
