import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-playfair",
	weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Aangan Landscapes | Sustainable Landscaping for Modern Developments",
	description:
		"From premium plant care to end-to-end landscape execution — trusted by leading developers and estates.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${playfair.variable} antialiased bg-cream text-deep`}>{children}</body>
		</html>
	);
}
