import { createRouter, createWebHistory } from 'vue-router' //여기서 정의된 router는 main.js에 등록을 해줘야 실제 적용이 되어 사용할 수 있게 된다.
import HomeView from '../views/HomeView.vue'     // 아래 routes 내의 component에 정의된 컴포넌트의 실제 src
import DataBinding from '../views/DataBinding.vue';
import DataBindingHtml from "@/views/DataBindingHtml";
import DataBindingInputText from "@/views/DataBindingInputText";
import DataBindingInputNumber from "@/views/DataBindingInputNumber";
import DataBindingTextarea from "@/views/DataBindingTextarea";
import DataBindingCheckbox from "@/views/DataBindingCheckbox";
import DataBindingCheckbox2 from "@/views/DataBindingCheckbox2";
import DataBindingRadio from "@/views/DataBindingRadio";
import DataBindingAttribute from "@/views/DataBindingAttribute";
import DataBindingButton from "@/views/DataBindingButton";








//routes 배열에 2개의 라우트가 등록되어 있음(home, about)
const routes = [
  {
    path: '/',              // path : 브라우저에서 접속하는 url 주소 정의
    name: 'home',
    component: HomeView     // component : 지정된 path로 들어왔을 때 보여줄 vue 컴포넌트, 앞으로 구현할 vue 파일을 연결하고 해당 파일을 실행시킴
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')

    //컴포넌트 설정이 home과 다르게 설정되어있음
    //위 주석처럼 라우트 레벨에서 코드를 분할한 후 별도의 chunk 파일을 생성하고, 실제 이 라우트를 방문했을 때 리소스를 로드하게 된다.
    //여기서 chunk 파일은 about이라는 이름으로 생성된다.
    //컴포넌트 import시 /* webpackChunkName: "about" */ 이라는 주석으로 chunk파일 이름을 정의했기 때문.

    //home과 about 라우트의 가장 큰 차이는
    // - home : 사용자가 해당 path에 접근하지 않더라도 이미 vue파일을 import하는 것
    // - about : 사용자가 path에 접근하기 전까지는 vue파일에 대한 import가 일어나지 않는다.
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/databinding-html',
    name: 'DataBindingHtml',
    component: DataBindingHtml
  },
  {
    path: '/databinding-input-text',
    name: 'DataBindingInputText',
    component: DataBindingInputText
  },
  {
    path: '/databinding-input-number',
    name: 'DataBindingInputNumber',
    component: DataBindingInputNumber
  },
  {
    path: '/databinding-textarea',
    name: 'DataBindingTextarea',
    component: DataBindingTextarea
  },
  {
    path: '/databinding-checkbox',
    name: 'DataBindingCheckbox',
    component: DataBindingCheckbox
  },
  {
    path: '/databinding-checkbox2',
    name: 'DataBindingCheckbox2',
    component: DataBindingCheckbox2
  },
  {
    path: '/databinding-radio',
    name: 'DataBindingRadio',
    component: DataBindingRadio
  },
  {
    path: '/databinding-attribute',
    name: 'DataBindingAttribute',
    component: DataBindingAttribute
  },
  {
    path: '/databinding-button',
    name: 'DataBindingButton',
    component: DataBindingButton
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
