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
      <head>
        <link 
          rel="preload" 
          as="image" 
          href="/images/ambi.png"        // <-- change this to your hero image path
          imageSrcSet="/images/ambi.png" // <-- same file
        />
      </head>
      {/* Applied the variable and font-sans globally */}
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}