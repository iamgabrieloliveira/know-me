<template>
    <div class="h-20 md:h-32 px-4 md:p-0 flex md:flex-row justify-between md:justify-around items-center">
        <div
            class="gap-4 hidden md:flex">
            <button
                class="transition-all text-2xl"
                :class="{
                    'opacity-50': isPortuguese,
                }"
                @click="setLanguage(LANGUAGES.english)"
            >
                <hoverable-letters content="English" />
            </button>
            <button
                class="transition-all text-2xl"
                :class="{
                    'opacity-50': !isPortuguese,
                }"
                @click="setLanguage(LANGUAGES.portuguese)">
                <hoverable-letters content="Portuguese" />
            </button>
        </div>
        <hoverable-letters
            class="text-2xl md:text-4xl cursor-pointer font-bold"
            content="Gabriel Oliveira"
        />
        <div class="hidden gap-6 items-center md:flex">
            <social-media-icon v-for="socialMedia in ALL" :social-media="socialMedia"/>
            <my-button>{{ isPortuguese ? 'Contato' : 'Contact' }}</my-button>
        </div>
        <mobile-menu class="md:hidden" @click="openedMobileMenu = !openedMobileMenu" />
    </div>
</template>

<script>
import HoverableLetters from '@/components/globalComponents/HoverableLetters.vue';
import MobileMenu from "@/components/MenuMobile.vue";
import SocialMediaIcon from '@/components/globalComponents/SocialMediaIcon.vue';

import { LANGUAGES } from '@/constants/languages.js';

import { ALL } from '@/constants/socialMedias.js';
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'Header',
    components: {
        MobileMenu,
        SocialMediaIcon,
        HoverableLetters,
    },
    data() {
        return {
            LANGUAGES,
            openedMobileMenu: false,
            ALL,
        };
    },
    computed: {
        ...mapGetters({
            currentLanguage: 'getCurrentLanguage',
        }),
        isPortuguese() {
            return this.currentLanguage === LANGUAGES.portuguese;
        },
    },
    methods: {
        ...mapMutations({
            setLanguage: 'setLanguage',
        }),
    },
}
</script>