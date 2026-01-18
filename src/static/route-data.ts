import { ref } from "vue";

export enum routeName {
  HOME = "Home",
  PROJECT = "Project",
  CV = "cv",
}

export default ref({
  home: {
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
      name: routeName.PROJECT,
    },
    url: "/project",
  },
  CV: {
    redirect: {
      name: routeName.CV,
    },
    url: "/cv",
  },
  contact: {
    redirect: {
      name: routeName.HOME,
      hash: "#contact-me",
    },
    url: "/#contact-me",
  },
});
