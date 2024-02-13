import { CLUSTER, CUSTOM_PAGE_NAME, PRODUCT_NAME } from '../config/constants';
import Hub from '../pages/Hub.vue';
// import ListResource from '@shell/pages/c/_cluster/_product/_resource/index.vue';
// import CreateResource from '@shell/pages/c/_cluster/_product/_resource/create.vue';
// import ViewResource from '@shell/pages/c/_cluster/_product/_resource/_id.vue';
// import ViewNamespacedResource from '@shell/pages/c/_cluster/_product/_resource/_namespace/_id.vue';

const routes = [
  // this covers the "custom page"
  {
    name: `${PRODUCT_NAME}-c-cluster-${CUSTOM_PAGE_NAME}`,
    path: `/${PRODUCT_NAME}/c/:cluster/${CUSTOM_PAGE_NAME}`,
    component: Hub,
    meta: {
      product: PRODUCT_NAME,
      cluster: CLUSTER,
    },
  },
  // the following routes cover the "resource page"
  // registering routes for list/edit/create views
  //   {
  //     name:      `${ PRODUCT_NAME }-c-cluster-resource`,
  //     path:      `/${ PRODUCT_NAME }/c/:cluster/:resource`,
  //     component: ListResource,
  //     meta:      {
  //       product: PRODUCT_NAME,
  //       cluster: CLUSTER
  //     },
  //   },
  //   {
  //     name:      `${ PRODUCT_NAME }-c-cluster-resource-create`,
  //     path:      `/${ PRODUCT_NAME }/c/:cluster/:resource/create`,
  //     component: CreateResource,
  //     meta:      {
  //       product: PRODUCT_NAME,
  //       cluster: CLUSTER
  //     },
  //   },
  //   {
  //     name:      `${ PRODUCT_NAME }-c-cluster-resource-id`,
  //     path:      `/${ PRODUCT_NAME }/c/:cluster/:resource/:id`,
  //     component: ViewResource,
  //     meta:      {
  //       product: PRODUCT_NAME,
  //       cluster: CLUSTER
  //     },
  //   },
  //   {
  //     name:      `${ PRODUCT_NAME }-c-cluster-resource-namespace-id`,
  //     path:      `/${ PRODUCT_NAME }/:cluster/:resource/:namespace/:id`,
  //     component: ViewNamespacedResource,
  //     meta:      {
  //       product: PRODUCT_NAME,
  //       cluster: CLUSTER
  //     },
  //   }
];

export default routes;
