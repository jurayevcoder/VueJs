<script>
export default {
    name: "Header",
    props: {
        toggle: Function
    }
}
</script>

<template>
    <header class="shadow grow">
        <nav class="flex justify-between max-w-full">
            <div class="bloc p-4">
                <div class="flex justify-center items-center">
                    <button @click="toggle"
                        class="flex justify-center items-center focus:ring-2 text-3xl w-[36px] h-[36px] rounded-lg ml-[300px]">
                        <i class="bx bx-menu"></i>
                    </button>

                    <input type="text" placeholder="Search..." class="pl-3 w-[212px] h-[37px] rounded-3 ml-[1150px]"
                        style="border-color: gray;">
                    <button class="ml-[-40px] text-xl"><i class='bx bx-search' style="color:gray"></i></button>
                    <button class="text-2xl ml-20"><i class='bx bx-bell' style="color: gray;"></i></button>
                </div>
            </div>
        </nav>
    </header>
</template>

<style></style>