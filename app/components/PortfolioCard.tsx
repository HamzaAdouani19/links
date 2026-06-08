import Image from "next/image";

type Props = {
  title: string;
  image: string;
  description: string;
};

export default function PortfolioCard({
  title,
  image,
  description,
}: Props) {
  return (
    <div className="glass rounded-3xl overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="w-full h-60 object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-semibold">
          {title}
        </h3>

        <p className="mt-3 text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}