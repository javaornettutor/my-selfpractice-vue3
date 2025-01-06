// test only
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
import ListDataWithPinia from '../components/CallingEndPointWithAxios/Pinia/ListDataWithPinia.vue';

import CreateData from '../components/CallingEndPointWithAxios/CreateData.vue';
import ModifyMoodWithPinia from '../components/CallingEndPointWithAxios/Pinia/ModifyMoodWithPinia.vue';
import VuetifyExample from '../components/ResponsiveStyles/VuetifyExample.vue';
import ResponsiveStylesMain from '../components/ResponsiveStyles/ResponsiveStylesMain.vue';
import BootstrapVue3Example from '../components/ResponsiveStyles/BootstrapVue3Example.vue';



// import MainPage from '../App.vue';

const routes = [
//   { path: '/', name: 'MainPage', component: MainPage },
  { path: '/SelfPractice', name: 'SelfPractice', component: SelfPractice , meta: { title: 'SelfPractice' } },
  { path: '/CollectionsPractice', name: 'CollectionsPractice', component: CollectionsPractice,  meta: { title: 'Collections Practice' }  },
  { path: '/ParentWithChild', name: 'ParentWithChild', component: ParentWithChild },
  
  { path: '/SlotExample', name: 'SlotExample', component: SlotExample },
  { path: '/MainApiPage', name: 'MainApiPage', component: MainApiPage },

  { path: '/DeleteData/:id', name: 'DeleteData', component: DeleteData },
  { path: '/ModifyData/:id', name: 'ModifyData', component: ModifyData },
  { path: '/ListData', name: 'ListData', component: ListData },
  { path: '/ListDataWithPinia', name: 'ListDataWithPinia', component: ListDataWithPinia, meta: { title: 'Data with Pinia' }  },
  { path: '/CreateData', name: 'CreateData', component: CreateData },
  { path: '/ModifyMoodWithPinia', name: 'ModifyMoodWithPinia', component: ModifyMoodWithPinia , meta: { title: 'Modify MoodWith Pinia' } },
  { path: '/VuetifyExample', name: 'VuetifyExample', component: VuetifyExample , meta: { title: 'Vuetify style Example' } },
  { path: '/ResponsiveStylesMain', name: 'ResponsiveStylesMain', component: ResponsiveStylesMain , meta: { title: 'Responsive Styles Main' } },
  { path: '/BootstrapVue3Example', name: 'BootstrapVue3Example', component: BootstrapVue3Example , meta: { title: 'BootstrapVue3 Example' } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to) => {
  document.title = to.meta.title || 'Default Title';
});
export default router;
