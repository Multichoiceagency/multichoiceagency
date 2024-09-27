import Header from "./components/Header";
import { ThemeProvider } from "./components/theme-provider";
import "./globals.css"; // Keep this for any other global styles you may still need

// Import the DM Sans font from next/font/google
import { DM_Sans } from "next/font/google";

// Initialize the DM Sans font with specific weights
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // You can specify the weights you need
  display: "swap", // Helps with performance by swapping to a fallback font initially
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.className} suppressHydrationWarning>
      <head>
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
         <Header /> {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
