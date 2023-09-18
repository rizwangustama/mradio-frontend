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
                    <img class="h-full w-full object-cover" loading="lazy" width="700" height="270" :src="benner.image" :alt="benner.title">
                </div>
            </template>

            <div class="flex flex-col md:flex-row gap-12 py-[60px]">
                <div class="w-full md:w-1/2">
                    <Splide id="slide-content" v-if="sportifyList" :options="settingsOne" aria-label="My Content">
                        <SplideSlide v-for="(item, index) in sportifyList" :key="index">
                            <a :href="item.url">
                                <img style="height: 100%; width: 100%; object-fit: cover;" :src="item.image" alt="content">
                            </a>
                        </SplideSlide>
                    </Splide>
                </div>
                <div class="w-full md:w-1/2" v-if="youtubeList">
                    <Splide id="slide-content-1" :options="settingsOne" aria-label="My Content">
                        <SplideSlide v-for="(item, index) in youtubeList" :key="index">
                            <a :href="item.url">
                                <img style="height: 100%; width: 100%; object-fit: cover;" :src="item.image" alt="content">
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
            settingsOne: {
                rewing: true,
                perPage: 1,
                arrows: true,
                pagination: false,
                lazyLoad: 'nearby',
                autoScroll: {
                    speed: 2,
                },
                autoPlay: 'pause',
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
            getButtonArrowLeft.setAttribute('viewBox', '0 0 24 24');
            getButtonArrowLeft.style.width = '24px';
            getButtonArrowLeft.style.height = '24px';

            const getButtonArrowLeftConntent1 = document.querySelector('#slide-content-1 .splide__arrow--prev svg');
            getButtonArrowLeftConntent1.setAttribute('viewBox', '0 0 24 24');
            getButtonArrowLeftConntent1.style.width = '24px';
            getButtonArrowLeftConntent1.style.height = '24px';
        },

        buttonArrowRight() {
            const getButtonArrowRight = document.querySelector('#slide-content .splide__arrow--next svg');
            getButtonArrowRight.setAttribute('viewBox', '0 0 24 24');
            getButtonArrowRight.style.width = '24px';
            getButtonArrowRight.style.height = '24px';

            const getButtonArrowRightConntent1 = document.querySelector('#slide-content-1 .splide__arrow--next svg');
            getButtonArrowRightConntent1.setAttribute('viewBox', '0 0 24 24');
            getButtonArrowRightConntent1.style.width = '24px';
            getButtonArrowRightConntent1.style.height = '24px';
        }
    },

}
</script>
<style>
#slide-content,
#slide-content-1 {
    @apply p-0 h-full;
}

#slide-content #slide-content-track,
#slide-content-1 #slide-content-track {
    @apply h-full;
}

#slide-content .splide__arrow--prev,
#slide-content-1 .splide__arrow--prev {
    border: 1.5px solid white;
    @apply rounded-full h-[52px] w-[52px];
}

#slide-content .splide__arrow--next,
#slide-content-1 .splide__arrow--next {
    border: 1.5px solid white;
    @apply rounded-full h-[52px] w-[52px];
}

#slide-content .splide__arrow svg,
#slide-content-1 .splide__arrow svg {
    fill: white;
}
</style>