<template>
    <div class="flex flex-col">
        <div @click="openMenuMobile" class="flex flex-col gap-2 justify-center w-8 h-8 cursor-pointer">
            <div :class="{ 'rotate-45 translate-y-[4px]': open }"
                class="w-10/12 h-0.5 bg-black transition-transform"></div>
            <div :class="{ '-rotate-45 -translate-y-[6px]': open }"
                 class="w-10/12 h-0.5 bg-black transition-transform"></div>
        </div>
        <div class="transition-all origin-bottom animated-menu-mobile h-[90%] w-full bg-defaultBackground absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center"
             :class="{ 'scale-0 opacity-5': !open }"
        >
            <div class="flex flex-col gap-2 mb-20 -mt-40">
                <h1 class="text-3xl font-bold text-center cursor-pointer">English</h1>
                <h1 class="text-3xl font-bold text-center cursor-pointer">Portuguese</h1>
            </div>
            <div class="flex gap-4 mb-5">
                <social-media-icon v-for="socialMedia in ALL" :social-media="socialMedia" />
            </div>
            <my-button class="w-40">
                Contato
            </my-button>
        </div>
    </div>
</template>

<script>
import SocialMediaIcon from '@/components/globalComponents/SocialMediaIcon.vue';

import { toggleOverflow } from '@/utils.js';
import { ALL } from '@/constants/socialMedias.js';

export default {
    name: 'MenuMobile',
    components: {
        SocialMediaIcon
    },
    data() {
        return {
            open: false,
            ALL,
        };
    },
    methods: {
        openMenuMobile() {
            this.open = !this.open;

            toggleOverflow();
        },
    }
}
</script>
