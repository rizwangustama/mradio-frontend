
<script>
import IconRight from '../../components/icons/IconRight.vue';
import { defineComponent } from 'vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide';
// Default theme
import '@splidejs/vue-splide/css';

// or other themes
import '@splidejs/vue-splide/css/skyblue';
import '@splidejs/vue-splide/css/sea-green';

// or only core styles
import '@splidejs/vue-splide/css/core';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import CardProgram from '../../components/CardProgram.vue';

export default defineComponent({
    components: {
        IconRight,
        Loading,
        Splide,
        SplideSlide,
        AutoScroll,
        CardProgram
    },
    props: {
        classes: String,
        background: String,
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
                autoplay: 'pause',
                breakpoints: {
                    1024: {
                        perPage: 4,
                    },
                    780: {
                        perPage: 2,
                    },
                    420: {
                        perPage: 2
                    }
                }
            },
            listProgram: '',
            isLoading: false
        }
    }, 

    mounted() {
        this.getListProgram();
    },

    methods: {
        async getListProgram(){
            try {
                this.isLoading = true
                const response = await this.$api.get('/program');
                this.listProgram = response.data.data;
                this.isLoading = false
                // console.log(response.data.data)
            } catch (error) {
                // console.log(error)
            }
        }
    }, 
})
</script>

<template>
    <loading v-model:active="isLoading" :is-full-page="fullPage"/>
    <div :class="background">
        <div :class="classes">
            <div class="flex items-center justify-center md:justify-between">
                <div>
                    <h1 class="heading-2 text-white">Our Program</h1>
                </div>
                <div class="hidden md:flex">
                    <router-link class="btn-secondary flex" to="/program">
                        <span>
                            All Program
                            <IconRight/>
                        </span>
                    </router-link>
                </div>
            </div>

            <Splide id="splide-slider-carousel" :options="settings" aria-label="My Favorite Images">
                <SplideSlide v-for="(item, index) in listProgram" :key="index">
                    <CardProgram :title="item.title" :content="item.content" :link="item.link" :image="item.image"/>
                </SplideSlide>
            </Splide>

        </div>
    </div>
</template>

<style>

#splide-slider-carousel {
    padding: 0;
    margin-top: 80px;
    @apply mt-10 md:mt-20;
}

</style>