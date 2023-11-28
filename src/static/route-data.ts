import { ref } from "vue";

export enum routeName {
  HOME = "Home",
  PROJECT = "Project",
  EXPERIENCE = "Experience",
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
  experience: {
    redirect: {
      name: routeName.EXPERIENCE,
    },
    url: "/experience",
  },
  contact: {
    redirect: {
      name: routeName.HOME,
      hash: "#contact-me",
    },
    url: "/#contact-me",
  },
});
