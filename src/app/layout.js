import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";
import { yekanbakh } from "../fonts/fonts";
import SideBar from "@/components/SideBar/SideBar";
import Header from "@/components/Header/Header";
import { ToastContainer } from "react-toastify";

export default function RootLayout({ children }) {
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
          />
          <SideBar />
          <section className=" w-full">
            <Header />
            <main>{children}</main>
          </section>
        </ThemeProvider>
      </body>
    </html>
  );
}
