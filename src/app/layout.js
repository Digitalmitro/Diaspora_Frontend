import { AuthProvider } from "./context/authContext";
import "./globals.css";
import "dotenv/config";

export default function RootLayout({ children }) {
  console.log(process.env.NEXT_PUBLIC_BACKEND_URL);
  return (
    <html lang="en">
      <body>
        <div className="flex-grow">
          <AuthProvider>{children}</AuthProvider>
        </div>
      </body>
    </html>
  );
}
