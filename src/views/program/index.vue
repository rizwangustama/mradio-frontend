<template>
    <loading v-model:active="isLoading" :is-full-page="fullPage" />
    <div class="pt-[60px] pb-[120px]">
        <div class="container">
            <template v-if="benner.style == 1 && (benner.title || benner.content)">
                <div class="py-[104px] border-2 border-white border-solid bg-[#251E2C]">
                    <h1 class="heading-2 text-white text-center " v-if="benner.title">{{ benner.title }}</h1>
                    <p class="text-center text-semi-white mt-4" v-if="benner.content">{{ benner.content }}</p>
                </div>
            </template>
            <template v-else>
                <div class="h-[270px]">
                    <img class="h-full w-full object-cover" width="700" height="270" loading="lazy" :src="benner.image" :alt="benner.title">
                </div>
            </template>

            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5 md:gap-x-6 gap-y-10 mt-[60px]">
                <div v-for="(data, i) in imgsRef" :key="i" @click="showSingle(i)">
                    <div class="flex flex-col gap-3">
                        <img :src="data.thumbnail" :alt="data.alt">
                        <div class="flex gap-3 flex-col">
                            <h3 class="heading-3 text-white">{{ data.title }}</h3>
                            <p class="paragraph-3 text-semi-white">{{ data.except }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- <div class="grid grid-cols-4">
                <template v-for="(data, index) in imgsRef" :key="index">
                    <button @click="showSingle(index)">Show single picture.</button>
                </template>
            </div> -->

            <!-- <button @click="showMultiple">Show a group of pictures.</button> -->

            <vue-easy-lightbox :visible="visibleRef" :imgs="imgsRef" :index="indexRef" @hide="onHide"></vue-easy-lightbox>
        </div>
    </div>
</template>


<script>
import { ref, defineComponent, toHandlers } from 'vue'
import program from '../../assets/images/program-isi-1.png'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
export default defineComponent({
    name: 'program',
    components: {
        program,
        Loading
    },
    setup() {
        const visibleRef = ref(false)
        const isLoading = ref(false)
        const indexRef = ref(0)
        const imgsRef = ref([
            // {
            //     src: program,
            //     title: 'Special Malam Jumat 1',
            //     except: 'Podcast horor yang akan menceritakan pengalaman-pengalaman horor yang pernah dialami oleh para M-Listener',
            //     alt: 'images-3'
            // },
            // {
            //     src: program,
            //     title: 'Special Malam Jumat 2',
            //     except: 'Podcast horor yang akan menceritakan pengalaman-pengalaman horor yang pernah dialami oleh para M-Listener',
            //     alt: 'images-2'
            // },
            // {
            //     src: program,
            //     title: 'Special Malam Jumat 3',
            //     except: 'Podcast horor yang akan menceritakan pengalaman-pengalaman horor yang pernah dialami oleh para M-Listener',
            //     alt: 'images-1'
            // },
            // {
            //     src: program,
            //     title: 'Special Malam Jumat 3',
            //     except: 'Podcast horor yang akan menceritakan pengalaman-pengalaman horor yang pernah dialami oleh para M-Listener',
            //     alt: 'images-1'
            // },
            // {
            //     src: 'https://via.placeholder.com/150.png/',
            //     title: 'Special Malam Jumat 3',
            //     except: 'Podcast horor yang akan menceritakan pengalaman-pengalaman horor yang pernah dialami oleh para M-Listener',
            //     alt: 'images-1'
            // }
        ])
        const listProgram = ref("");
        const benner = ref({});
        const onShow = () => {
            visibleRef.value = true
        }
        const showSingle = (index) => {
            indexRef.value = index,
                visibleRef.value = true,
                onShow()
        }
        const onHide = () => (visibleRef.value = false)

        return {
            visibleRef,
            indexRef,
            imgsRef,
            showSingle,
            onHide,
            listProgram,
            isLoading,
            benner
        }
    },

    mounted() {
        this.getListProgram();
        this.getBenner();
    },

    methods: {
        async getListProgram() {
            try {
                this.isLoading = true;
                const response = await this.$api.get('/program');
                this.listProgram = response.data.data;
                this.imgsRef = this.listProgram.map(item => {
                    return {
                        src: item.src,
                        title: item.title,
                        except: item.content,
                        alt: item.title,
                        thumbnail: item.image
                    }
                });
                this.isLoading = false;
                console.log(response.data.data);
            } catch (error) {
                console.log(error)
            }
        },

        async getBenner() {
            const id = 1;
            const responese = await this.$api.get(`/benner/${id}`);
            console.log(responese.data.data[0]);
            this.benner = responese.data.data[0];
        }
    },
})
</script>