import '../styles/globals.css'

// Import the Head component from the 'next/head' module
import Head from 'next/head'

// Declare the RootLayout component
const RootLayout = ({ children }) => (
  // Render an HTML element with lang attribute set to "en"
  <html lang="en">
    {/* Render the Head component */}
    <Head>
      {/* Preconnect to stijndv.com */}
      <link rel="preconnect" href="https://stijndv.com" />
      {/* Load the Eudoxus Sans font from stijndv.com */}
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
    </Head>
    {/* Render the children prop within a body element */}
    <body>{children}</body>
  </html>
)

// Export the RootLayout component
export default RootLayout
