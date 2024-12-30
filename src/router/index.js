import { createRouter, createWebHistory } from 'vue-router';
import SelfPractice from '../components/SelfPractice.vue';
import CollectionsPractice from '../components/CollectionsPractice.vue';
// import RoutePractice from '../components/RoutePractice.vue';
import ParentWithChild from '../components/ParentVsChild/ParentVsChildContainer.vue';
import SlotExample from '../components/SlotsExample/ParentSlot.vue';
import MainApiPage from '../components/CallingEndPointWithAxios/MainAPIPage.vue';

import DeleteData from '../components/CallingEndPointWithAxios/DeleteData.vue';
import ModifyData from '../components/CallingEndPointWithAxios/ModifyData.vue';
import ListData from '../components/CallingEndPointWithAxios/ListData.vue';
// import CreateData from '../components/CallingEndPointWithAxios/CreateData.vue';




// import MainPage from '../App.vue';

const routes = [
//   { path: '/', name: 'MainPage', component: MainPage },
  { path: '/SelfPractice', name: 'SelfPractice', component: SelfPractice , meta: { title: 'SelfPractice' } },
  { path: '/CollectionsPractice', name: 'CollectionsPractice', component: CollectionsPractice,  meta: { title: 'Collections Practice' }  },
  { path: '/ParentWithChild', name: 'ParentWithChild', component: ParentWithChild },
  
  { path: '/SlotExample', name: 'SlotExample', component: SlotExample },
  { path: '/MainApiPage', name: 'MainApiPage', component: MainApiPage },

  { path: '/DeleteData/:id', name: 'DeleteData', component: DeleteData },
  { path: '/ModifyData', name: 'ModifyData', component: ModifyData },
  { path: '/ListData', name: 'ListData', component: ListData },
// { path: '/CreateData', name: 'CreateData', component: CreateData },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to) => {
  document.title = to.meta.title || 'Default Title';
});
export default router;
