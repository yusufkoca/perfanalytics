import "./App.css";
import metricsService from "./services/metricsService";
import LoadingView from "./components/LoadingView";
import ErrorView from "./components/ErrorView";
import useApi from "./hooks/useApi";
import TabbedPanel from "./pages/dashboard/TabbedPanel";
import NoDataView from "./components/NoDataView";

const App = () => {
  const [apiResult] = useApi(metricsService.getAll);
  const { data: metrics, loading, hasError, error } = apiResult;
  if (loading) return <LoadingView></LoadingView>;
  if (hasError) return <ErrorView error={error}></ErrorView>;
  if (metrics && metrics.length > 0) {
    return <TabbedPanel metrics={metrics}></TabbedPanel>;
  } else {
    return <NoDataView></NoDataView>;
  }
};

export default App;
