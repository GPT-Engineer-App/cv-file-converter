import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CV File Format Converter",
  description: "Convert CV files to a standardized format",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
        <aside className="w-64 bg-gray-900 text-white p-4">
          <div className="flex items-center mb-8">
            <img src="/logo.png" alt="Jovi Konsult AB" className="h-8 w-8 mr-2" />
            <span className="text-xl font-bold">Jovi Konsult AB</span>
          </div>
          <nav>
            <ul>
              <li className="mb-4">
                <a href="/" className="text-white">Home</a>
              </li>
              <li className="mb-4">
                <a href="/upload" className="text-white">Upload CV</a>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1 p-8 bg-gray-800 text-white">
          {children}
        </main>
      </body>
    </html>
  );
}