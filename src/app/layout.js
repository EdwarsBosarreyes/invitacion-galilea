import { Orbitron, Inter } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sophia | The Debut Tour",
  description: "Invitación oficial de cumpleaños",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} ${orbitron.variable} bg-kpopDark text-white`}>{children}</body>
    </html>
  );
}
