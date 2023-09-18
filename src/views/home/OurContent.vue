<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
// Default theme
import '@splidejs/vue-splide/css';

// or other themes
import '@splidejs/vue-splide/css/skyblue';
import '@splidejs/vue-splide/css/sea-green';

// or only core styles
import '@splidejs/vue-splide/css/core';

export default {
    name: 'our-content',
    components: {
        Splide,
        SplideSlide,
    },
    props: {
        background: String,
        classes: String
    },
    data() {
        return {
            sportifyList: [],
            youtubeList: [],
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
            }
        }
    },

    mounted() {
       this.buttonArrowLeft();
       this.buttonArrowRight();
       this.getSportifyList();
       this.getYoutubeList();
    },

    methods: {
        async getSportifyList() {
            try {
                const response = await this.$api.get("/sportify");
                console.log(response.data.data);
                this.sportifyList = response.data.data
            } catch (error) {
                
            }
        },

        async getYoutubeList () {
            try {
                const response = await this.$api.get("/youtube");
                console.log(response.data.data);
                this.youtubeList = response.data.data
            } catch (error) {
                console.log(error)
            }
        },

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

<template>
    <div :class="background">
        <div :class="classes">
            <div>
                <h1 class="heading-2 text-white text-center">Our Content</h1>
            </div>
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


<!-- <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 12L8.2 24L8.2 0L21 12Z" fill="white"/>
    </svg>
     -->

     