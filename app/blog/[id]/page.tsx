async function getArticle(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) throw new Error("Article introuvable.");
  return res.json();
}

export default async function ArticleDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = await getArticle(id);

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <a href="/blog" className="text-pink-600 underline">&larr; Retour au blog</a>
      <h1 className="text-3xl font-bold text-pink-600 mt-4 capitalize">{article.title}</h1>
      <p className="text-gray-700 mt-4">{article.body}</p>
    </div>
  );
}