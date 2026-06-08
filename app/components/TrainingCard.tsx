type Props = {
  title: string;
  students: number;
};

export default function TrainingCard({
  title,
  students,
}: Props) {
  return (
    <div className="glass p-6 rounded-3xl">
      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-gray-400">
        {students}+ Students
      </p>
    </div>
  );
}