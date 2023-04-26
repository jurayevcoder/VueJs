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


        <ul class="list">
            <li class="list__item p-4 shadow my-2 rounded-md bg-purple-200 hover:bg-purple-500 duration-100"
                v-for="el in navlinks">
                <router-link :to="el.link" class="list__item--link text-xl">
                    <i :class="el.icon"></i> <span class="ms-3">{{ el.title }}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style></style>