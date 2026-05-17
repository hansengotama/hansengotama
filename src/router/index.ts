import {
    createRouter,
    createWebHistory,
    NavigationGuardNext,
    RouteLocationNormalized,
    RouteRecordRaw,
} from 'vue-router'
import { routeName } from "@/static/route-data";

const homeSection = ["", "#skill", "#project", "#contact-me"];

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: () => import("/src/components/layout/index.vue"),
        children: [
            {
                path: "/",
                name: routeName.HOME,
                component: () => import("../views/home/index.vue"),
                meta: {
                    hash: homeSection,
                    title: "Hansen Wu — Senior Software Engineer",
                    description: "Hansen Wu is a Senior Software Engineer based in Jakarta, Indonesia with 7+ years of experience in backend systems, mobile, and web. Specializing in Go, Flutter, and scalable architecture.",
                },
            },
            {
                path: "/cv",
                name: routeName.CV,
                component: () => import("../views/cv/index.vue"),
                meta: {
                    title: "CV — Hansen Wu",
                    description: "Curriculum Vitae of Hansen Wu, Senior Software Engineer based in Jakarta, Indonesia. 7+ years experience in Go, Flutter, Vue.js, and scalable backend systems.",
                },
            },
        ],
    },
    {
        path: "/:pathMatch(.*)*",
        name: "404",
        component: () => import("../views/not-found/index.vue"),
    },
]

const history = createWebHistory();

const router = createRouter({
    history,
    routes,
    scrollBehavior(to: RouteLocationNormalized, from: RouteLocationNormalized, savedPosition: any) {
        if (from.name === to.name || to.hash) {
            if (to.hash) return {
                el: to.hash,
                behavior: 'smooth',
            };

            return {
                behavior: 'smooth',
                top: 0,
            };
        }

        return savedPosition || { top: 0 };
    },
});

router.beforeEach((to: RouteLocationNormalized, _: RouteLocationNormalized, next: NavigationGuardNext) => {
    if (to.meta.hash) {
        const hash: string[] = to.meta.hash as string[]
        if (!hash.includes(to.hash)) {
            return next({ name: "404" });
        }
    }

    if (to.meta.title) {
        document.title = to.meta.title as string;
    }

    const descEl = document.querySelector('meta[name="description"]');
    if (descEl && to.meta.description) {
        descEl.setAttribute("content", to.meta.description as string);
    }

    const canonicalEl = document.querySelector('link[rel="canonical"]');
    if (canonicalEl) {
        canonicalEl.setAttribute("href", "https://hansengotama.vercel.app" + to.path);
    }

    next();
});

export default router