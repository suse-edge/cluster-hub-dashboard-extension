import { IPlugin } from '@shell/core/types';
import { BLANK_CLUSTER, CUSTOM_PAGE_NAME, PRODUCT_NAME } from './constants';

export function init($plugin: IPlugin, store: any) {
  const {
    product,
    // configureType,
    virtualType,
    basicType,
  } = $plugin.DSL(store, PRODUCT_NAME);

  // registering a top-level product
  product({
    icon: 'dashboard',
    inStore: 'management',
    weight: 100,
    to: {
      name: `${PRODUCT_NAME}-c-cluster-${CUSTOM_PAGE_NAME}`,
      params: {
        product: PRODUCT_NAME,
        cluster: BLANK_CLUSTER,
      },
    },
  });

  // defining a k8s resource as page
  //   configureType(YOUR_K8S_RESOURCE_NAME, {
  //     displayName: 'some-custom-name-you-wish-to-assign-to-this-resource',
  //     isCreatable: true,
  //     isEditable:  true,
  //     isRemovable: true,
  //     showAge:     true,
  //     showState:   true,
  //     canYaml:     true,
  //     customRoute: {
  //       name: `${ YOUR_PRODUCT_NAME }-c-cluster-resource`,
  //       params: {
  //         product: YOUR_PRODUCT_NAME,
  //         cluster: BLANK_CLUSTER,
  //         resource: YOUR_K8S_RESOURCE_NAME
  //       }
  //     }
  //   });

  // creating a custom page
  virtualType({
    labelKey: 'hub.pages.dashboard',
    name: CUSTOM_PAGE_NAME,
    route: {
      name: `${PRODUCT_NAME}-c-cluster-${CUSTOM_PAGE_NAME}`,
      params: {
        product: PRODUCT_NAME,
        cluster: BLANK_CLUSTER,
      },
    },
  });

  // registering the defined pages as side-menu entries
  basicType([CUSTOM_PAGE_NAME]);
}
