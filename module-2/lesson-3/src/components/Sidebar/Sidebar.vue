<script>
import { navLinks } from '../../constants/navLinks';
export default {
    data() {
        return {
            navlinks: navLinks,
        }
    },
}
</script>

<template>
    <div class="siebar w-[250px] shadow-lg min-h-screen relative">

        <a href="#" class="logo text-center text-2xl p-5 block text-purple-700">DASHBOARD</a>


        <div class="list">
            <router-link
                class="list__item text-xl block p-4 shadow my-2 bg-purple-200 hover:bg-purple-600 hover:text-white duration-100"
                v-for="el in navlinks" :to="el.link">

                <i :class="el.icon"></i> <span class="ms-3">{{ el.title }}</span>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.list_item {
    border-radius: 0 6px 6px 0;
}

.router-link-active {
    background-color: blueviolet;
    color: white;
}
</style>