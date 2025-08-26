function Dashboard() {
  const stats = [
    { label: "Total Employers", value: "3782+" },
    { label: "Total Job Seekers", value: "812+" },
    { label: "Total Jobs Posted", value: "51+" },
    { label: "Total Revenue This Month", value: "1000$" },
    { label: "Active Subscriptions", value: "233" },
    { label: "Flagged Jobs / Pending Approval", value: "53+" },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {stats.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center transition-transform hover:scale-105">
            <p className="text-sm font-medium mb-3 text-gray-600 tracking-wide">{item.label}</p>
            <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-white font-bold text-2xl px-8 py-5 rounded-lg shadow-lg w-full text-center">
              {item.value}
            </div>
          </div>
        ))}

        {/* Graph placeholder */}
        <div className="flex flex-col items-center col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-1">
          <p className="text-sm font-medium mb-3 text-gray-600 tracking-wide">Performance Graph</p>
          <div className="w-full h-48 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 flex items-center justify-center rounded-lg shadow">
            <div className="text-center">
              <svg className="w-12 h-12 text-gray-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
              <span className="text-gray-400 text-sm">Graph Visualization</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;