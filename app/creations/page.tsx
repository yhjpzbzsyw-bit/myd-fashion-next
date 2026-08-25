import Image from "next/image";

export const metadata = {
  title: "Nos créations — MYD Fashion",
  description: "Explorez notre collection de vêtements pour femmes : robes, ensembles, pantalons et plus.",
};

const creations = [
  { id: 1, titre: "Ensemble jupe", description: "Un ensemble raffiné avec jupe, parfait pour un look chic et féminin.", image: "/complet jupe.jpg" },
  { id: 2, titre: "Ensemble en lin", description: "Léger et naturel, cet ensemble en lin allie confort et élégance.", image: "/complet lin.jpg" },
  { id: 3, titre: "Ensemble pantalon court", description: "Une tenue moderne et estivale, idéale pour les journées chaudes.", image: "/complet patalon court.jpg" },
  { id: 4, titre: "Ensemble pantalon", description: "Un ensemble tailleur intemporel pour un style affirmé.", image: "/complet patalon.jpg" },
  { id: 5, titre: "Culotte élégante", description: "Une pièce fluide et raffinée à porter en toute occasion.", image: "/cullote.jpg" },
  { id: 6, titre: "Pantalon fleuri", description: "Un imprimé floral délicat pour une allure printanière.", image: "/pantallon fleurie.jpg" },
  { id: 7, titre: "Pantalon pierre", description: "Une teinte neutre et élégante, facile à assortir.", image: "/pantallon pierre.jpg" },
  { id: 8, titre: "Pantalon court", description: "Coupe moderne et confortable pour un style décontracté chic.", image: "/pantalon court.jpg" },
  { id: 9, titre: "Pantalon designé", description: "Une coupe travaillée qui sublime la silhouette.", image: "/patalon designé.jpg" },
  { id: 10, titre: "Pantalon fleur", description: "Motifs floraux subtils pour une touche de douceur.", image: "/patalon fleur.jpg" },
  { id: 11, titre: "Pantalon palazzo", description: "Ample et fluide, le pantalon palazzo incarne l'élégance décontractée.", image: "/patalon palazo.jpg" },
  { id: 12, titre: "Robe cintrée", description: "Une robe ajustée qui met en valeur chaque courbe avec grâce.", image: "/robe-cintre.jpg" },
  { id: 13, titre: "Robe djin ovale", description: "Une robe originale au design unique, pour se démarquer avec style.", image: "/robe djin ovale.jpg" },
];

export default function Creations() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-pink-600 text-center mb-8">
        Nos créations
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {creations.map((creation) => (
          <div key={creation.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={creation.image}
                alt={creation.titre}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-pink-600">{creation.titre}</h3>
              <p className="text-gray-600 text-sm mt-2">{creation.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}