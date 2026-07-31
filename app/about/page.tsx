export const metadata = {
  title: "À propos — MYD Fashion",
  description: "Découvrez l'univers et les valeurs de MYD Fashion, boutique dédiée à l'élégance féminine.",
};

export default function About() {
  return (
    <div className="p-8 text-center max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-pink-600 mb-4">L'univers MYD Fashion</h1>
      <p className="text-gray-700">
        MYD Fashion est née d'une passion pour la mode et l'élégance au féminin.
        Chaque pièce est choisie avec exigence, pour offrir des tenues raffinées
        qui allient chic intemporel et tendances actuelles.
      </p>
    </div>
  );
}