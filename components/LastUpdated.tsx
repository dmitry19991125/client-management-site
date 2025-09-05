type Props = { date: string };

export function LastUpdated({ date }: Props) {
  return (
    <p className="text-sm text-gray-600 dark:text-gray-300">
      Last updated: {new Date(date).toLocaleString()}
    </p>
  );
}
