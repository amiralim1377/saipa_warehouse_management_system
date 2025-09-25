import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";
import { yekanbakh } from "../fonts/fonts";
import SideBar from "@/components/SideBar/SideBar";
import Header from "@/components/Header/Header";

export default function RootLayout({ children }) {
  console.log(yekanbakh);
  return (
    <html dir="rtl" lang="fa" suppressHydrationWarning>
      <body className={` ${yekanbakh.variable} flex`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SideBar />
          <section className="bg-yellow-300 w-full">
            <Header />
            <main>{children}</main>
          </section>
        </ThemeProvider>
      </body>
    </html>
  );
}
