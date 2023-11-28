import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faEquals, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faHackerrank,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import FontAwesomeIcon from "/src/helpers/fontawesome/index.vue";

library.add(
  fas,
  faInstagram,
  faGithub,
  faLinkedin,
  faHackerrank,
  faGithub,
  faEquals,
  faTimes
);

export { FontAwesomeIcon };
