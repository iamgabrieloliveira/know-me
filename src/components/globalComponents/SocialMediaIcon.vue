<template>
    <a
        :href="URL[socialMedia]"
        target="_blank"
        class="hover:rotate-3 hover:scale-[1.5] hover:text-black transition-all"
    >
        <i
            :class="ICON[socialMedia]"
            class="text-3xl">
        </i>
    </a>
</template>

<script>
import { ICON, URL } from '@/constants/socialMedias.js';

export default {
    name: 'SocialMediaIcon',
    props: {
        socialMedia: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            URL,
            ICON,
        };
    },
}

</script>