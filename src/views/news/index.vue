<template>
    <loading v-model:active="isLoading" :is-full-page="fullPage" />
    <!-- Component Last News -->
    <div class="py-[120px] bg-[#251E2C]">
        <div class="container">
            <h1 class="heading-2 text-white text-center">Last News</h1>
            <div class="grid grid-cols-1 gap-x-6 gap-y-10 mt-20">
                <template v-for="(item, index) in newsList" :key="index">
                    <a :href="link">
                        <div class="bg-[#362D40] flex flex-col md:flex-row gap-10  justify-start items-center gap-3">
                            <img class="w-full md:w-3/12 h-[200px] object-cover" loading="lazy" width="262" height="262"
                                :src="item.image" :alt="title">
                            <div class="w-full md:w-8/12 flex gap-3 flex-col">
                                <h3 class="heading-3 text-white hover:text-gray-400 line-clamp-2">{{ item.title }}</h3>
                                <p class="paragraph-3 text-semi-white line-clamp-2 md:line-clamp-3">{{ item.content }}</p>
                            </div>
                        </div>
                    </a>
                </template>
            </div>
            <!-- <button @click="loadMore" class="btn-secondary flex mx-auto mt-10">Load More</button> -->
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
            isLoading: false,
            visibleNewsList: [],
            pageSize: 5, // Jumlah berita per load
            currentPage: 1, // Indeks saat ini dari berita yang ditampilkan
        }
    },

    computed: {
        totalPage() {
            return Math.ceil(this.newsList.length / this.pageSize);
        },

        paginatedData() {
            const start = (this.currentPage - 1) * this.pageSize;
            const end = start + this.pageSize;
            return this.newsList.slice(start, end);
        },
    },

    mounted() {
        this.starter();

    },

    methods: {
        async starter() {
            try {
                this.isLoading = true
                await this.getListNews();
                // await this.loadMore();
                this.isLoading = false;
            } catch (error) {

            }
        },

        async getListNews() {
            try {
                const res = await this.$api.get('/news');
                let getdataNewsList = res.data.data;
                getdataNewsList.reverse();
                this.newsList = getdataNewsList;
                this.loadMore();
            } catch (error) {
                console.log(error);
            }
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