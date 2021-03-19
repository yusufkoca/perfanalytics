import { get } from "./restClient";

const metricsService = {
  getAll: () => get("/metrics"),
};

export default metricsService;
