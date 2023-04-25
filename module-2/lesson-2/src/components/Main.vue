<script>
import Section from './Section.vue'
export default {
    components: {
        Section,
    }
};
</script>

<template>
    <main>
        <Section text="INTRO" color="orange" />
        <Section text="HERO" color="dodgerblue" />
    </main>
</template>

<style lang="scss" scoped>
main {
    min-height: calc(100vh - 70px - 70px);
}
</style>