"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

type Dataset = {
  label: string;
  data: number[];
  borderColor?: string;
  backgroundColor?: string;
};

type Config = {
  labels: string[];
  datasets: Dataset[];
};

type Props = {
  config: Config;
};

export function ChartPreview({ config }: Props) {
  // Explicitly type data for better type safety
  const data: ChartData<"line", number[]> = {
    labels: config.labels,
    datasets: config.datasets,
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return <Line data={data} options={options} height={280} />;
}
