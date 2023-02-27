<template>
    <div class="flex">
        <span v-for="(letter, idx) in letters" :class="{
            'mx-2': letter === ' ',
            'hover:text-red': idx % 2 === 0,
            'hover:text-black': idx % 2 !== 0,
            'hover:rotate-12': idx % 2 === 0,
            'hover:-rotate-12': idx % 2 !== 0,
        }" class="hover:rotate-12 hover:scale-[1.5] transition-all">
            {{ letter }}
        </span>
    </div>
</template>

<script>
export default {
    name: 'HoverableLetters',
    props: {
        content: {
            required: true,
            type: String,
        },
        hoveredColor: {
            type: String,
            default: 'red',
        }
    },
    computed: {
        letters() {
            return this.content.split('');
        },
    },
}
</script>

<style lang="scss" scoped>

</style>