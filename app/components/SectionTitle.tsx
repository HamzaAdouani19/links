type Props = {
  title: string;
};

export default function SectionTitle({
  title,
}: Props) {
  return (
    <h2
      className="
      text-5xl
      font-bold
      mb-12
      text-center"
    >
      {title}
    </h2>
  );
}