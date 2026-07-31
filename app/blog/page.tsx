export const metadata = {
  title: "Blog — MYD Fashion",
  description: "Actualités et articles autour de la mode féminine par MYD Fashion.",
};
async function getArticles() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=9");
  if (!res.ok) throw new Error("Impossible de charger les articles.");
  return res.json();
}

export default async function Blog() {
  const articles = await getArticles();

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-pink-600 text-center mb-8">
        Notre Blog
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article: any) => (
          <a
            key={article.id}
            href={`/blog/${article.id}`}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition block"
          >
            <h3 className="font-semibold text-pink-600 capitalize">{article.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{article.body.slice(0, 80)}...</p>
          </a>
        ))}
      </div>
    </div>
  );
}