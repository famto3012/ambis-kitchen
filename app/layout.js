// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Ambis Kitchen | Home-cooked Meals",
//   description: "Fresh homemade food delivered with love in Trivandrum.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} antialiased`}>
//         <Header />
//         {children}
//         {/* <Footer /> */}
//       </body>
//     </html>
//   );
// }

import { Poppins } from "next/font/google";
import "./globals.css";

// Configure Poppins with all necessary weights
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Ambis Kitchen | The Royal Taste of Thrippunithura",
  description: "Authentic homemade Palada Payasam, Boli, and Curries delivered in Trivandrum.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Applied the variable and font-sans globally */}
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}