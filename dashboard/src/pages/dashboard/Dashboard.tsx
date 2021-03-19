import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Metric } from "../../typings/Metric";
import LineChart from "../../components/LineChart";

const Dashboard = ({ metrics }: { metrics: Metric[] }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Paper>
          <LineChart
            title={"TTFB"}
            xAxesDataSet={metrics.map((metric: Metric) => metric.createdAt)}
            yAxesDataSet={metrics.map((metric: Metric) => metric.ttfb)}
          ></LineChart>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper>
          <LineChart
            title={"FCP"}
            xAxesDataSet={metrics.map((metric: Metric) => metric.createdAt)}
            yAxesDataSet={metrics.map((metric: Metric) => metric.fcp)}
          ></LineChart>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper>
          <LineChart
            title={"Dom Load"}
            xAxesDataSet={metrics.map((metric: Metric) => metric.createdAt)}
            yAxesDataSet={metrics.map((metric: Metric) => metric.dom_load)}
          ></LineChart>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper>
          <LineChart
            title={"Window Load"}
            xAxesDataSet={metrics.map((metric: Metric) => metric.createdAt)}
            yAxesDataSet={metrics.map((metric: Metric) => metric.window_load)}
          ></LineChart>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
