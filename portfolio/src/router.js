import Vue from "vue";
import Router from "vue-router";
import About from "./views/About.vue";
import Trversal from "./views/Trversal.vue";
import Critical from "./views/Critical.vue";
import Habitat from "./views/Habitat.vue";
import Contact from "./views/Contact.vue";


Vue.use(Router);

export default new Router({
  routes: [
    {
        path: "/",
        name: "Tabatha Young",
        component: About
    },
    {
        path: "/Trversal",
        name: "About Trversal",
        component: Trversal
    },
    {
        path: "/Critical",
        name: "About Critical Reactions",
        component: Critical
    },
    {
        path: "/Habitat",
        name: "About Habit@",
        component: Habitat
    },
    {
        path: "/Contact",
        name: "Contact Me",
        component: Contact
    },
    {
        path: "*",
        redirect: '/'
    }

  ]
});
