import { Line } from "react-chartjs-2";

const LineChart = ({
  title = "",
  xAxesDataSet,
  yAxesDataSet,
}: {
  title: string;
  xAxesDataSet: string[];
  yAxesDataSet: number[];
}) => {
  const lineData = {
    labels: xAxesDataSet, //Dates
    datasets: [
      {
        label: title,
        data: yAxesDataSet,
        fill: false,
      },
    ],
  };
  const options = {
    scales: {
      xAxes: [
        {
          display: true,
          type: "time",
        },
      ],
      yAxes: [
        {
          display: true,
        },
      ],
    },
  };
  return <Line data={lineData} options={options} />;
};

export default LineChart;
