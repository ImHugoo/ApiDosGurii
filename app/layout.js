import { Inter } from "next/font/google";
import "./tailwind.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Teste",
  description: "Next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}