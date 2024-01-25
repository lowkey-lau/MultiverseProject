import { createApp } from "vue";
import App from "./App.vue";

import "normalize.css/normalize.css";

import VueVideoPlayer from "@videojs-player/vue";
import "video.js/dist/video-js.css";

const app = createApp(App);
app.use(VueVideoPlayer);

app.mount("#app");
