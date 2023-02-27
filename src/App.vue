<template>
    <PageTemplate>
        <Header/>
        <Main/>
        <Footer/>
    </PageTemplate>
</template>

<script>
import PageTemplate from '@/components/PageTemplate.vue';

import Header from '@/components/layout/Header.vue';
import Main from '@/components/layout/Main.vue';
import Footer from '@/components/layout/Footer.vue';

export default {
    name: 'App',
    components: {
        PageTemplate,
        Header,
        Main,
        Footer,
    },
}

</script>