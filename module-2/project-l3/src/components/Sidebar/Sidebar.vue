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
    <div class="siebar w-[300px] shadow-lg min-h-screen relative">

        <a href="#" class="logo text-center text-2xl p-5 block text-black">CRUD OPERATIONS</a>


        <ul class="list">
            <div class="mb-20 mt-8">
                <img src="../../assets/My project-1.png" alt="" class="rounded-[50%] w-[150px] ml-[75px] mb-2">
                <h1 class="text-center text-2xl font-bold">Jurayev Coder</h1>
                <p class="text-center text-[#FEAF00]">Admin</p>
            </div>
            <li class="list__item p-3 my-2 rounded-md hover:bg-[#FEAF00] duration-100 w-[240px] h-[50px] ml-8"
                v-for="el in navlinks">
                <router-link :to="el.link" class="list__item--link text-xl ml-12">
                    <i :class="el.icon"></i> <span class="ms-3">{{ el.title }}</span>
                </router-link>
            </li>
            <div
                class="text-xl text-center mt-[150px] flex justify-center items-center gap-4 hover:bg-[#FEAF00] duration-100 rounded-md p-3 w-[240px] h-[50px] ml-8">
                <a href="/logout">Logout </a><i class="bx bx-log-in"></i>
            </div>
        </ul>
    </div>
</template>

<style></style>