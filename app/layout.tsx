import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
    src: "../public/assets/fonts/Satoshi-Variable.ttf",
    variable: "--font-satoshi",
    display: "swap",
});

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
