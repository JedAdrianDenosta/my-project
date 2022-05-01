import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col ">
      <nav className="h-10 bg-red-400"></nav>
      <main className="flex-grow flex flex-col h-full">
        <Component {...pageProps} />
      </main>
      <footer className="h-10 bg-blue-400"></footer>
    </div>
  );
}

export default MyApp;
