import navConfig from "./nav.config.json";
//组件
const getComponentRoute = (navConfig) => {
  let route = [
    {
      path: "/component",
      name: "ComponentLayout",
      component: () =>
        import(/* webpackChunkName: "component" */ "@/views/Layout.vue"),
      children: [],
    },
  ];
  let addRoute = function (nav) {
    let name = nav.path.substring(1);
    route[0].children.push({
      path: name,
      name: "component-" + name,
      meta: {
        title: nav.name,
      },
      component: () =>
        import(/* webpackChunkName: "component" */ `@/docs${nav.path}.md`),
    });
  };
  navConfig.forEach((item, index) => {
    if (index) {
      if (item.groups && item.groups.length) {
        item.groups.forEach((item) => {
          item.list.forEach((nav) => {
            addRoute(nav);
          });
        });
      } else {
        addRoute(item);
      }
    } else {
      route[0].redirect = "/component" + item.path;
      addRoute(item);
    }
  });
  return route;
};

const ComponentRoute = getComponentRoute(navConfig);
export { ComponentRoute };
