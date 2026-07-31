export default function CreationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-pink-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="text-center mb-8">
          <span className="inline-block bg-pink-600 text-white text-sm px-4 py-1 rounded-full">
            Collection
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}