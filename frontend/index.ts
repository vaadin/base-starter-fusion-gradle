// import Vaadin client-router to handle client-side and server-side navigation
import {Router} from '@vaadin/router';

// import Flow module to enable navigation to Vaadin server-side views
import {Flow} from '@vaadin/flow-frontend';

const {serverSideRoutes} = new Flow({
  imports: () => import('../target/frontend/generated-flow-imports')
});

const routes = [
  // for client-side, place routes below (more info https://vaadin.com/docs/latest/fusion/routing/router)
  {
    path: '',
    component: 'hello-world-view',
    action: async () => { await import('./views/hello-world-view'); }
  },
  // for server-side, the next magic line sends all unmatched routes:
  ...serverSideRoutes // IMPORTANT: this must be the last entry in the array
];

// Vaadin router needs an outlet in the index.html page to display views
const router = new Router(document.querySelector('#outlet'));
router.setRoutes(routes);
