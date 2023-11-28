import {
    createRouter,
    createWebHistory,
    NavigationGuardNext,
    RouteLocationNormalized,
    RouteRecordRaw,
} from 'vue-router'
import {routeName} from "@/static/route-data";

const homeSection = ["", "#skill", "#contact-me"];

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
                },
            },
            {
                path: "/project",
                name: routeName.PROJECT,
                component: () => import("../views/project/index.vue"),
            },
            {
                path: "/experience",
                name: routeName.EXPERIENCE,
                component: () => import("../views/experience/index.vue"),
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
    scrollBehavior(to: RouteLocationNormalized, from: RouteLocationNormalized, savedPosition) {
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

        return {
            top: 0,
        };
    },
});

router.beforeEach((to: RouteLocationNormalized, _: RouteLocationNormalized, next: NavigationGuardNext) => {
    if (to.meta.hash) {
        const hash: string[] = to.meta.hash as string[]
        if (!hash.includes(to.hash)) {
            return next({path: "404"});
        }
    }

    document.title = to.name ? to.name.toString() + " --- Hansen" : "Hansen";

    next();
});

export default router
