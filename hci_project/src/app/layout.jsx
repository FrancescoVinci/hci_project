import {Inter} from "next/font/google";
import {Providers} from "./providers";
import "@/styles/global.css"
import 'react-toastify/dist/ReactToastify.css';
import {Navbar} from "@/components/navbar";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({children}) {
    return (
        <html lang="en" className="light">
        <body className={inter.className}>
        <Providers>
            <div className="relative flex flex-col h-screen bg-slate-100">
                <Navbar/>
                <main className="flex-grow container mx-auto pt-5">
                    {children}
                </main>
                <footer className="w-full flex items-center justify-center py-3">
                    <span className="text-gray">Made with ❤️ by BeViCi</span>
                </footer>
            </div>
        </Providers>
        </body>
        </html>
    );
}
