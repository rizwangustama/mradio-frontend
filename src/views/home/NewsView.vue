<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
// Default theme
import '@splidejs/vue-splide/css';

// or other themes
import '@splidejs/vue-splide/css/skyblue';
import '@splidejs/vue-splide/css/sea-green';

// or only core styles
import '@splidejs/vue-splide/css/core';
import CardProgram from '../../components/CardProgram.vue';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

export default{
    name: "news-view",
    components: {
        Splide,
        SplideSlide,
        CardProgram,
        Loading
    },
    props: {
        background: String,
        classes: String,
    },
    data() {
        return {
            settings: {
                // type: 'loop',
                rewind: true, 
                perPage: 4, 
                gap: '24px',
                arrows: false,
                pagination: false,
                lazyLoad: 'nearby',
                autoScroll: {
                    speed: 2,
                },
                breakpoints: {
                    1200: {
                        perPage: 4,
                    },
                    1024: {
                        perPage: 3,
                    },
                    780: {
                        perPage: 2,
                    },
                    420: {
                        perPage: 2,
                        gap: '24px'
                    },
                    400: {
                        gap: '18px'
                    }
                }
            },
            listNews:[],
            isLoading : false
        }
    },
    mounted() {
        this.getListNews()
    },
    methods: {
        async getListNews() {
            try {
                this.isLoading = true;
                const response = await this.$api.get('/news');
                this.listNews = response.data.data.slice(0, 10);
                this.isLoading = false
            } catch (error) {
                
            }
            
        }
    },
}
</script>
<template>
    <loading v-model:active="isLoading" :is-full-page="fullPage"/>
    <div :class="background">
        <div :class="classes">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="heading-2 text-white">News</h1>
                </div>
                <div>
                    <router-link class="btn-secondary flex" to="/news">
                        <span>
                            All News
                            <IconRight/>
                        </span>
                    </router-link>
                </div>
            </div>

            <Splide id="splide-slider-carousel" :options="settings" aria-label="My Favorite Images">
                <SplideSlide v-for="(item, index) in listNews" :key="index">
                    <CardProgram :title="item.title" :content="item.content" :link="item.link" :image="item.image"/>
                </SplideSlide>
            </Splide>
        </div>
    </div>
</template>