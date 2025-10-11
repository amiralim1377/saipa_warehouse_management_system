"use server";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider/ThemeProvider";
import { yekanbakh } from "../fonts/fonts";
import SideBar from "@/components/SideBar/SideBar";
import Header from "@/components/Header/Header";
import { ToastContainer } from "react-toastify";
import CustomCloseButton from "@/components/CustomCloseButton/CustomCloseButton";

export default async function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="fa" suppressHydrationWarning>
      <body className={`  ${yekanbakh.variable} flex`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnHover
            draggable
            closeButton={CustomCloseButton}
          />
          <SideBar />
          <section className="w-full min-h-screen flex flex-col">
            <Header />
            <main className="max-w-9xl mx-auto w-full p-6">{children}</main>
          </section>
        </ThemeProvider>
      </body>
    </html>
  );
}
