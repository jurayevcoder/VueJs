<script>
export default {};
</script>

<template>
    <footer>
        <div class="container">
            <p class="text-center">{{ new Date().getFullYear() }}</p>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    height: 70px;
    background-color: black;
    text-align: center;
    color: #fff;
    align-items: center;
    display: flex;
}
</style>