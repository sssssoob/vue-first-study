import { createApp } from 'vue'
import App from './App.vue'
import router from './router'         // router폴더의 index.js가 import됨
import mixins from "@/mixins";

// createApp(App).use(router).mount('#app')
//최상위 컴포넌트인 App.vue의 App으로 app을 생성하고, use(router) 코드를 추가하여 App.vue에서 router가 사용될 수 있도록 추가
//그리고 App.vue를 public 폴더의 index.html에 정의되어있는 id = 'app'인 html element에 마운트 시킨다

const app = createApp(App)
app.use(router)
app.mixin(mixins);
app.mount('#app')