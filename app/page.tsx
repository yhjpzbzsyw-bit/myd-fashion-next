export const metadata = {
  title: "MYD Fashion — Boutique de vêtements pour femmes",
  description: "Découvrez notre sélection raffinée de vêtements pour femmes, alliant élégance et modernité.",
};

export default function Home() {
  return (
    <div>
      <div className="relative w-full h-96">
        <img
          src="/robe-cintre.jpg"
          alt="MYD Fashion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl font-bold text-white">MYD Fashion</h1>
          <p className="mt-4 text-white max-w-xl">
            Une sélection raffinée de vêtements pour femmes, pensée pour sublimer chaque silhouette.
          </p>
        </div>
      </div>
    </div>
  );
}