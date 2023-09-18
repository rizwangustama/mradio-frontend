<template>
    <loading v-model:active="isLoading" :is-full-page="fullPage"/>
    <div>
        <div class="container">
            <div class="flex flex-col md:flex-row py-[120px] gap-12">
                <!-- Slider -->
                <div class="w-full md:w-8/12">
                    <img class="border-2 border-white h-[584px] w-full object-cover" v-if="oneNews" :src="oneNews[0].image" alt="">
                </div>
                <div class="w-full md:w-4/12">
                    <div class="flex flex-col">
                        <div v-for="(item, index) in listTopNews" :key="index" id="card-news" class="flex flex-col gap-3 py-6">
                            <a :href="item.link" class="text-white heading-3">{{ item.title}}</a>
                            <p class="text-white paragraph-3 line-clamp-2 md:line-clamp-3">{{ item.content }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Component Last News -->
    <div class="py-[120px] bg-[#251E2C]">
        <div class="container">
            <h1 class="heading-2 text-white text-center">Last News</h1>
            <div class="grid grid-cols-4 gap-x-6 gap-y-10 mt-20">
                <template v-for="(item, index) in listLastNews" :key="index">
                    <CardProgram :title="item.title" :content="item.content" :link="item.link" :image="item.image"></CardProgram>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import CardProgram from '../../components/CardProgram.vue';
export default {
    components: {
        CardProgram,
        Loading
    },
    data() {
        return {
            newsList: null,
            oneNews: null,
            listTopNews: null,
            listLastNews: null,
            isLoading: false
        }
    },
    mounted() {
        this.starter();
    },
    methods: {
        async starter() {
            try {
                this.isLoading = true
                await this.getListNews();
                await this.getOneNews();
                await this.getTopNews();
                await this.getLastNews();
                console.log(this.oneNews[0].image);
                this.isLoading = false;
            } catch (error) {
                
            }
           
        },
        
        async getListNews() {
            try {
                const res = await this.$api.get('/news');
                console.log(res.data.data);
                this.newsList = res.data.data
            } catch (error) {
                console.log(error);
            }
            
        },

        getOneNews() {
            this.oneNews = this.newsList.slice(0,1);
        },

        getTopNews() {
            this.listTopNews = this.newsList.slice(2,6);
        },
        getLastNews() {
            this.listLastNews = this.newsList.slice(7)
        },
    },
}
</script>
<style>
    #card-news {
        border-bottom: 2px solid white;
    }
    #card-news:nth-last-child(1) {
        border-bottom: unset;
    }
</style>