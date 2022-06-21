import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
// import ElementPlus from "element-plus";
// import zhCn from "element-plus/es/locale/lang/zh-cn";

import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons

const app = createApp(App);

app.component("Button", Button);
app.component("InputText", InputText);
// app.use(ElementPlus, {
//   locale: zhCn,
// });
app.use(PrimeVue);
app.mount("#app");
