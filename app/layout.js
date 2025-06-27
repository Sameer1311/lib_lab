import { Geist, Geist_Mono, Pixelify_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./component/utils/themeprovider";
import Navbar from "./component/Navbar/page";
import ClientLayout from "./component/utils/cient_layout";
import Footer from "./component/footer/page";
import RazorpayLoader from "./component/utils/payment";
import { AuthProvider } from "./component/utils/Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Lib_lab",
  description: "Buy books, manage your collection, and more.",
  icons: {
    icon: "/images/logo.jpeg",
  },
};


export default function RootLayout({ children }) {


  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pixelifySans.variable} antialiased dark:bg-gradient-to-br from-gray-900 to-black`}
      >
      <AuthProvider>
        <ClientLayout>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            <RazorpayLoader/>
            {children}
            <Footer />
          </ThemeProvider>
        </ClientLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
