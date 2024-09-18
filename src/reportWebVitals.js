import { getCLS, getFID, getLCP, getFCP, getTTFB } from 'web-vitals';

function reportWebVitals(metric) {
  console.log(metric);
  // Optionally send metrics to your analytics endpoint here
}

getCLS(reportWebVitals);
getFID(reportWebVitals);
getLCP(reportWebVitals);
getFCP(reportWebVitals);
getTTFB(reportWebVitals);
