import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
    src: "../public/assets/fonts/Satoshi-Variable.ttf",
    variable: "--font-satoshi",
    display: "swap",
});

// const geistSans = Geist({
//     variable: "--font-geist-sans",
//     subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//     variable: "--font-geist-mono",
//     subsets: ["latin"],
// });

export const metadata: Metadata = {
    title: "FinixCode",
    description: "Frontend Developer Candidate Task",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${satoshi.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
