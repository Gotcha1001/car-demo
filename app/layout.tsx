import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import { Toaster, toast } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            // Define default styles for toasts
            style: {
              background: "#1c0e64",
              color: "#fff",
              fontSize: "16px",
              padding: "16px",
              borderRadius: "8px",
            },
            // Define styles for success messages
            success: {
              duration: 3000,
              style: {
                background: "#4caf50",
                color: "#fff",
              },
            },
            // Define styles for error messages
            error: {
              duration: 4000,
              style: {
                background: "#f44336",
                color: "#fff",
              },
            },
          }}
        />
        <main className="min-h-screen px-4 md:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
