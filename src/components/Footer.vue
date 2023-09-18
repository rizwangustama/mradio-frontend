<script setup>
import IconInstagram from '../components/icons/IconInstagram.vue'
import IconTiktok from './icons/IconTiktok.vue';
import IconTwitter from './icons/IconTwitter.vue';  
</script>
<template>
    <footer class="bg-secondary py-12">
        <div class="container">
            <div class="flex flex-col items-center gap-6">
                <p class="paragraph-2 text-black">Copyright © 2023 mradiomj. All rights reserved by <a href="https://vandora.id">vandora.id</a></p>
                <div class="flex gap-4">
                    <a href="#">
                        <IconInstagram/>
                    </a>
                    <a href="#">
                        <IconTiktok/>
                    </a>
                    <a href="#">
                        <IconTwitter/>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>