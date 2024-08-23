import "./globals.css";
import Header from '../components/Header/Header'

export const metadata = {
  title: "Parkway Schedule Help",
  description: "Made By Tim Dobranski",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='body'>
        <Header />

        {children}
        </body>
    </html>
  );
}
