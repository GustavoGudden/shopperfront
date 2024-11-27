'use client';

import { ToastContainer } from 'react-toastify';
import './globals.css';
import { APIProvider } from '@vis.gl/react-google-maps';
import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API;

  console.log(apiKey);
  return (
    <html lang="en">
      <body>
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_API} onLoad={() => console.log('Maps API has loaded.')}>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          {children}
        </APIProvider>
      </body>
    </html>
  );
}
