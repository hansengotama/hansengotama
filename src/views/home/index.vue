<template>
    <div id="home">
        <AboutMe />
        <Skill />
        <Project />
        <ContactMe />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AboutMe from "/src/components/about-me/index.vue";
import Skill from "/src/components/skill/index.vue";
import Project from "/src/components/project/index.vue";
import ContactMe from "/src/components/contact-me/index.vue";

export default defineComponent({
    name: "Home",
    components: {
        AboutMe,
        Skill,
        Project,
        ContactMe,
    },
});
</script>