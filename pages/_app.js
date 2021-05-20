import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import ProfileProvider from "../contexts/Profile";
function MyApp({ Component, pageProps }) {
  return (
    <ProfileProvider>
      <Component {...pageProps} />;
    </ProfileProvider>
  )
}

export default MyApp;
