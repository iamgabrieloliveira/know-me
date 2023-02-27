<template>
    <button class="border-2 rounded font-bold px-6 py-2 shadow-md hover:bg-white hover:border-white hover:text-black hover:rotate-3 hover:scale-[1.1] transition-all">
        <slot/>
    </button>
</template>

<script>
export default {
    name: 'Button',
}
</script>

<style lang="scss" scoped>

</style>