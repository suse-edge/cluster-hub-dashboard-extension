<script>
// import DashboardMetrics from '@shell/components/DashboardMetrics';
// import metricPoller from '@shell/mixins/metric-poller';
import DashboardMetrics from './DashboardMetrics';

const CLUSTER_HUB_DASHBOARD_URL =
  '/api/v1/namespaces/cattle-monitoring-system/services/http:rancher-monitoring-grafana:80/proxy/d/cluster-hub-dashboard/provisioned-cluster-hub-dashboard?orgId=1';

export default {
  name: 'ClusterHubDashboard',
  components: { DashboardMetrics },
  layout: 'plain',
  //   mixins: [metricPoller],
  data() {
    return {
      CLUSTER_HUB_DASHBOARD_URL,
    };
  },
};
</script>

<template>
  <DashboardMetrics
    :detail-url="CLUSTER_HUB_DASHBOARD_URL"
    :has-summary-and-detail="false"
    graph-height="974px"
  />
</template>

<style lang="scss" scoped></style>
