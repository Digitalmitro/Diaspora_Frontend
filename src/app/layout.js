import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex-grow">
          {children}
        </div>
      </body>
    </html>
  );
}
