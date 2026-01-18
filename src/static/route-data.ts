import { ref } from "vue";

export enum routeName {
  HOME = "Home",
  CV = "cv",
}

export default ref({
  me: {
    redirect: {
      name: routeName.HOME,
    },
    url: "/",
  },
  skill: {
    redirect: {
      name: routeName.HOME,
      hash: "#skill",
    },
    url: "/#skill",
  },
  project: {
    redirect: {
      name: routeName.HOME,
      hash: "#project",
    },
    url: "/#project",
  },
  contact: {
    redirect: {
      name: routeName.HOME,
      hash: "#contact-me",
    },
    url: "/#contact-me",
  },
});
