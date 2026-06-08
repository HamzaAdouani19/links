export default function PortfolioPage() {
  return (
    <div className="p-20">
      <h1 className="text-5xl mb-10">
        Portfolio
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {[1,2,3,4,5,6].map((item)=>(
          <div
            key={item}
            className="glass h-72 rounded-3xl"
          />
        ))}
      </div>
    </div>
  );
}