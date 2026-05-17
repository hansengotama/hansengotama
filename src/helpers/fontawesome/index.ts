import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faHackerrank, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import FontAwesomeIcon from "/src/helpers/fontawesome/index.vue";

library.add(
  faPhone,
  faEnvelope,
  faLocationDot,
  faGithub,
  faHackerrank,
  faInstagram,
  faLinkedin,
);

export { FontAwesomeIcon };
