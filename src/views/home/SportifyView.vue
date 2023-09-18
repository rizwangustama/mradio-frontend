<template>
    <div :class="background">
        <div :class="classes">
            <h1 class="heading-2 text-white text-center">MRadio Music</h1>
            <div class="flex flex-col md:flex-row gap-6 mt-5 md:mt-20">
                <div class="md:w-1/2" v-for="data in listSportify">
                    <div v-html="data.html"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props: {
        classes: String,
        background: String,
    },
    data() {
        return {
            listSportify: []
        }
    },
    mounted() {
        this.getSportifyList()
    },
    methods: {
        async getSportifyList() {
            try {
                const response = await this.$api.get('/sportify-list');
                console.log(response);
                this.listSportify = response.data.data
            } catch (error) {
                console.log(error)
            }
        }
    },
}
</script>