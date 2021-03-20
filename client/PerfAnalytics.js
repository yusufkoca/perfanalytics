(function () {
  /*
  // This library can be used instead of manually calculating metrics. 
  var script = document.createElement("script");
  script.src = "https://unpkg.com/web-vitals";
  script.onload = function () {
    webVitals.getTTFB(console.log);
    webVitals.getFCP(console.log);
  };
  document.head.appendChild(script);
  */

  const API_BASE_URL = ""; // If hosted in the same domain
  const METRICS_ENDPOINT = "/metrics";

  const calculateTTFB = () => {
    // Source: https://stackoverflow.com/questions/6533456/time-to-first-byte-with-javascript
    return performance.timing.responseStart - performance.timing.requestStart;
  };

  const calculateFCP = () => {
    // Source: https://web.dev/fcp/
    return new Promise(function (resolve, reject) {
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntriesByName(
          "first-contentful-paint"
        )) {
          resolve(entry.startTime);
        }
        reject();
      }).observe({ type: "paint", buffered: true });
    });
  };

  const calculateDomLoad = () => {
    return (
      performance.timing.domContentLoadedEventEnd -
      performance.timing.navigationStart
    );
  };

  const calculateWindowLoad = () => {
    // Source: https://developer.mozilla.org/en-US/docs/Web/API/Navigation_timing_API
    return performance.timing.loadEventEnd - performance.timing.navigationStart;
  };

  const getMetrics = async () => {
    const ttfb = calculateTTFB();
    const fcp = await calculateFCP();
    const dom_load = calculateDomLoad();
    const window_load = calculateWindowLoad();
    return {
      ttfb,
      fcp,
      dom_load,
      window_load,
      href: window.location.href,
    };
  };

  const sendToAnalytics = (metrics) => {
    const body = JSON.stringify(metrics);
    // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
    (navigator.sendBeacon &&
      navigator.sendBeacon(API_BASE_URL + METRICS_ENDPOINT, body)) ||
      fetch(API_BASE_URL + METRICS_ENDPOINT, {
        body,
        method: "POST",
        keepalive: true,
      });
  };

  window.onload = async () => {
    const metrics = await getMetrics();
    sendToAnalytics(metrics);
  };
})();
