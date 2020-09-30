import Packages from 'packages/index'

const components = [...Packages];

const install = Vue => {
  components.forEach(comp => {
    Vue.use(comp);
  });
};

export default {
  install,
  ...Packages
}