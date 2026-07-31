import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "MYD Fashion",
  description: "Boutique de vêtements pour femmes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen">
  <nav className="bg-pink-600 text-white px-8 py-4 flex justify-between items-center">
    <h2 className="text-xl font-bold">MYD Fashion</h2>
    <ul className="flex gap-6">
      <li><Link href="/" className="hover:text-pink-200 transition">Accueil</Link></li>
      <li><Link href="/about" className="hover:text-pink-200 transition">À propos</Link></li>
      <li><Link href="/contact" className="hover:text-pink-200 transition">Contact</Link></li>
      <li><Link href="/creations" className="hover:text-pink-200 transition">Créations</Link></li>
      <li><Link href="/blog" className="hover:text-pink-200 transition">Blog</Link></li>
    </ul>
  </nav>
  <main className="flex-grow">{children}</main>
  <footer className="bg-gray-100 text-center py-4 text-gray-600">
  © 2026 {process.env.NEXT_PUBLIC_SITE_NAME} — Tous droits réservés
</footer>
</body>
    </html>
  );
}