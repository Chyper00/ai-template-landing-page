/* eslint-disable no-undef */
import './globals.css';
export const metadata = {
  title: 'Simple IA|Landing page',
  description: 'Landing Page',
};

import { FaRobot } from 'react-icons/fa';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-800 text-zinc-50">
        <div className="flex flex-col md:flex-row bg-slate-950 m-10  h-screen">
          <div className="flex-1 flex-col bg-black h-screen">
            <header className="flex justify-between items-center align-middle p-4">
              <div className="flex items-center">
                <FaRobot className="text-green-500 text-3xl mr-2" />
                <a href="/">
                  <span className="ml-2 font-bold">AI Research</span>
                </a>
              </div>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Demo
              </button>
              <nav className="mt-4 md:mt-0 flex items-center">
                <a
                  href="/blog"
                  className="mr-4 hover:text-green-500 hover:underline"
                >
                  Blog
                </a>
                <a
                  href="/prices"
                  className="hover:text-green-500 hover:underline"
                >
                  Prices
                </a>
              </nav>
            </header>
            <section className="flex flex-col md:flex-row p-4 md:p-20">
              {children}
            </section>
          </div>
        </div>
      </body>
    </html>
  );
}
