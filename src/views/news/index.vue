<template>
    <loading v-model:active="isLoading" :is-full-page="fullPage" />
    <!-- Component Last News -->
    <div class="py-[120px] bg-[#251E2C]">
        <div class="container">
            <h1 class="heading-2 text-white text-center">Last News</h1>
            <div class="grid grid-cols-1 gap-x-6 gap-y-10 mt-20">
                <template v-for="(item, index) in newsList" :key="index">
                    <a :href="link">
                        <div class="flex flex-row gap-10  justify-center items-center gap-3">
                            <img class="w-3/12 h-[200px] object-cover"
                                loading="lazy" width="262" height="262" :src="item.image" :alt="title">
                            <div class="w-8/12 flex gap-3 flex-col">
                                <h3 class="heading-3 text-white hover:text-gray-400 line-clamp-2">{{ item.title }}</h3>
                                <p class="paragraph-3 text-semi-white line-clamp-2 md:line-clamp-3">{{ item.content }}</p>
                            </div>
                        </div>
                    </a>
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
            this.oneNews = this.newsList.slice(0, 1);
        },

        getTopNews() {
            this.listTopNews = this.newsList.slice(2, 6);
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