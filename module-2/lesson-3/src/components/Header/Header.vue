<script>
import User from '../../ui/User/User.vue';
export default {
    name: "Header",
    props: {
        toggle: Function
    },
    components: {
        User,
    }
}
</script>

<template>
    <header class="shadow">
        <nav class="flex justify-between w-full items-center pe-4">

            <a href="#" class="logo ms-8 text-center text-2xl p-5 block text-purple-700">DASHBOARD</a>

            <div class="flex">

                <User />

                <button @click="toggle"
                    class="bg-purple-300 flex justify-center items-center focus:ring-2 text-3xl w-[36px] h-[36px] rounded-lg">
                    <i class="bx bx-menu"></i>
                </button>
            </div>
        </nav>
    </header>
</template>

<style></style>