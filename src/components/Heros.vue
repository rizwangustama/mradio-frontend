<script setup>
import IconRight from './icons/IconRight.vue';
</script>

<template>
    <div class="heros">
        <Carousel v-bind="settings">
            <Slide v-for="carousel in carouselList" :key="carousel">
                <div v-if="carousel.style == 1" class="carousel__item h-[675px] flex items-center container py-10">
                    <div class="w-full md:w-1/2 text-left">
                        <div class="wrapper w-fit">
                            <h1 class="heading-outline heading-1 text-transparent stroke-slate-100 leading-snug" v-html="formatWrite(carousel.title)"></h1>
                            <span class="bg-white h-[1px] w-full flex my-4"></span>
                            <div class="content">
                                <p class="text-white paragraph-2">{{ carousel.content }}</p>
                            </div>
                        </div>

                        <button @click="toLink(carousel.link_button)" class="btn btn-primary mt-[58px]">
                            <span>
                                {{ carousel.label_button }} 
                                <IconRight/>
                            </span>
                        </button>
                    </div>
                    <div class="hidden md:block md:w-1/2">
                        <template v-if="carousel.icon_image" >
                            <img class="hidden md:flex" :src="carousel.icon_image" alt="heros-1">
                        </template>
                        <img  v-else src="../assets/images/heros1.png" alt="heros-1">
                    </div>
                </div>
                <div v-else class="carousel__item w-full h-[675px]">
                    <img class="hidden lg:flex w-full h-full object-cover" :src="carousel.image_desktop" :alt="carousel.title">
                    <img class="flex lg:hidden w-full h-full object-cover" :src="carousel.image_mobile" :alt="carousel.title">

                </div>
            </Slide>

            <template #addons>
                <!-- <Navigation /> -->
                <Pagination />
            </template>

        </Carousel>

    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Heros',
  components: {
    Carousel,
    Slide,
    Pagination,
    // Navigation,
  },
  data() {
    return {
        settings: {
            itemsToShow: 1,
            autoplay: 5000,
            wrapAround: true
        },
        carouselList: [],
        slider: [
            {
                title1 : "Welcome To",
                title2 : "MRadio Jakarta",
                content: "M-Radio merupakan radio komunitas Mahasiswa Prodi Ilmu Komunikasi,Fakultas Ilmu Sosial dan Ilmu Politik Universitas Muhammadiyah Jakarta yang pengelolaannyadi bawah Laboratorium Studio Radio. "
            },
            {
                title1 : "Welcome To",
                title2 : "MRadio Jakarta",
                content: "M-Radio merupakan radio komunitas Mahasiswa Prodi Ilmu Komunikasi,Fakultas Ilmu Sosial dan Ilmu Politik Universitas Muhammadiyah Jakarta yang pengelolaannyadi bawah Laboratorium Studio Radio. "
            }
        ]
    }
  },
  mounted() {
    this.getPagination();
    this.getCarousel();

  },
  methods: {
    getPagination() {
        const getValue = document.querySelector('.carousel__pagination');
        getValue.classList.add('container');
        getValue.classList.add('justify-start');
    },
    async getCarousel() {
        try {
            const responese = await this.$api.get('/carousel');
            this.carouselList = responese.data.data;
        } catch (error) {
            
        }
        
    },
    toLink(link) {
        window.location.href(link)
    },
    formatWrite(value) {
        return value.replace(/\|\|/g, '<br>').replace(/\[/g, '<span class="heading-1 text-white leading-snug">').replace(/\]/g, '</span>');
    }
  }
});
</script>


<style>

.heros .heading-outline{
    -webkit-text-stroke-color: white;
    -webkit-text-stroke-width: 0.5px;
}



.heros .carousel__pagination {
    position: relative;
    @apply bottom-[50px] md:bottom-[100px];
}
.heros .carousel__pagination-button::after {
    background-color: rgba(225, 225, 225, 0.5);
    height: 8px;
    border-radius: 100px;
}

.heros .carousel__pagination-button--active::after  {
    background-color: white!important;
    width: 40px;
    height: 8px;
    border-radius: 100px;
}
</style>