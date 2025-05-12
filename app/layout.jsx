import "./globals.css";

export const metadata = {
  title: "WeatherNow 🌦️",
  description: "Find your weather instantly!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sanfrancisco min-h-screen">{children}</body>
    </html>
  );
}
