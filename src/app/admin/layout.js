import AdminHeader from "./_components/AdminHeader";
import AdminSidebar from "./_components/AdminSidebar";

function layout({children}) {
  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}

export default layout;
