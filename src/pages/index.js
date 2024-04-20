import Head from 'next/head';
import Navbar from '../components/navbar/NavBar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mt-10">Welcome to My Portfolio</h1>
        <p className="text-lg text-gray-700 text-center mt-4">Explore my projects and skills</p>
      </main>

      <footer className="text-center py-4 bg-gray-200 mt-10">
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}
