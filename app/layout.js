import "./globals.css";
import Header from '../components/Header/Header'
import { Analytics } from "@vercel/analytics/react"


export const metadata = {
  title: "Parkway Schedule Help",
  description: "Made By Tim Dobranski",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='body'>
      <div className='app'>
        <Header />
        <Analytics />
        {children}
        </div>
        </body>
    </html>
  );
}
