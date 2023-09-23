<template>
    <div class="pt-[60px] pb-[120px]">
        <loading v-model:active="isLoading" :is-full-page="fullPage" />
        <div class="container">
            <template v-if="benner.style == 1 && (benner.title || benner.content)">
                <div class="py-[104px] border-2 border-white border-solid bg-[#251E2C]">
                    <h1 class="heading-2 text-white text-center" v-if="benner.content">{{ benner.title }}</h1>
                    <p class="text-center text-semi-white mt-4" v-if="benner.content">{{ benner.content }}</p>
                </div>
            </template>
            <template v-else>
                <div class="h-[270px]">
                    <img class="h-full w-full object-cover" loading="lazy" width="700" height="270" :src="benner.image"
                        :alt="benner.title">
                </div>
            </template>

            <div class="flex flex-col md:flex-row gap-6 mt-16">
                <div class="md:w-1/2 lg:h-[544px]">
                    <Splide id="slide-content" :options="settings" aria-label="My Favorite Images">
                        <SplideSlide v-for="(item, index) in sportifyList" :key="index">
                            <a :href="item.url">
                                <img style="height: 100%; width: 100%; object-fit: cover;" :src="item.image" alt="content">
                            </a>
                        </SplideSlide>
                    </Splide>
                </div>
                <div class="md:w-1/2 hidden lg:block">
                    <Splide id="slide-content" :options="settingsContent" aria-label="My Favorite Images">
                        <SplideSlide v-for="(item, index) in youtubeList" :key="index">
                            <a :href="item.url">
                                <img style="width: 100%; height: 100%; object-fit: cover;" :src="item.image" alt="content">
                            </a>
                        </SplideSlide>
                    </Splide>
                </div>

                <div class="md:w-1/2 lg:hidden">
                    <Splide id="slide-content" :options="settings" aria-label="My Favorite Images">
                        <SplideSlide v-for="(item, index) in youtubeList" :key="index">
                            <a :href="item.url">
                                <img style="width: 100%; height: 100%; object-fit: cover;" :src="item.image" alt="content">
                            </a>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
// Default theme
import '@splidejs/vue-splide/css';

// or other themes
import '@splidejs/vue-splide/css/skyblue';
import '@splidejs/vue-splide/css/sea-green';

// or only core styles
import '@splidejs/vue-splide/css/core';
export default {
    name: 'content',
    components: {
        Splide,
        SplideSlide,
        Loading
    },
    data() {
        return {
            isLoading: false,
            settings: {
                rewind: true, 
                perPage: 1, 
                arrows: true,
                pagination: false,
                lazyLoad: 'nearby',
                slidesToScroll:1,
                interval: 2000,
                autoplay: true,
                autoplaySpeed:0,
                autoplaySpeed: 1,
                arrowPath: 'M21 12L8.2 24L8.2 0L21 12Z fill="white"'
            },

            settingsContent: {
                loop: true,
                perPage: 2,
                direction: 'ttb',
                gap: '24px',
                arrows: false,
                pagination: false,
                height: '34rem',
                wheel: true,
                rewind: true, 
                lazyLoad: 'nearby',
                autoplay:true,
                slidesToScroll:1,
                interval: 2000,
                breakpoints: {
                    640: {
                        perPage: 1,
                    },
                },
                arrowPath: 'M21 12L8.2 24L8.2 0L21 12Z fill="white"'
            },
            youtubeList: [],
            sportifyList: [],
            benner: {}
        }
    },

    mounted() {
        this.buttonArrowLeft();
        this.buttonArrowRight();
        this.started();
        this.getBenner();
    },

    methods: {
        async started() {
            try {
                this.isLoading = true;
                this.getYoutubeList();
                this.getSportifyList();
                this.isLoading = false;
            } catch (error) {

            }
        },
        async getYoutubeList() {
            try {
                const response = await this.$api.get("/youtube");
                this.youtubeList = response.data.data
            } catch (error) {
                console.log(error)
            }
        },

        async getSportifyList() {
            try {
                const response = await this.$api.get("/sportify");
                this.sportifyList = response.data.data
            } catch (error) {

            }
        },
        async getBenner() {
            const id = 2;
            const responese = await this.$api.get(`/benner/${id}`);
            console.log(responese.data.data[0]);
            this.benner = responese.data.data[0];
        },
        // Slide Content
        buttonArrowLeft() {
            const getButtonArrowLeft = document.querySelector('#slide-content .splide__arrow--prev svg');
            console.log(getButtonArrowLeft);
            getButtonArrowLeft.setAttribute('viewBox', '0 0 24 24');
            getButtonArrowLeft.style.width = '24px';
            getButtonArrowLeft.style.height = '24px';
        },

        buttonArrowRight() {
            const getButtonArrowRight = document.querySelector('#slide-content .splide__arrow--next svg');
            getButtonArrowRight.setAttribute('viewBox', '0 0 24 24');
            getButtonArrowRight.style.width = '24px';
            getButtonArrowRight.style.height = '24px';
        }
    },

}
</script>
<style>
#slide-content {
    @apply p-0 h-full;
}

#slide-content #slide-content-track {
    @apply h-full;
}

#slide-content .splide__arrow--prev {
    border: 1.5px solid white;
    @apply rounded-full h-[52px] w-[52px];
}

#slide-content .splide__arrow--next {
    border: 1.5px solid white;
    @apply rounded-full h-[52px] w-[52px];
}

#slide-content .splide__arrow svg {
    fill: white;
}
</style>