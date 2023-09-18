<script>
import managerial from '../../assets/images/ourteam-managerial.png';
import secretary from '../../assets/images/ourteam-secretary.png';
import finance from '../../assets/images/ourteam-finance.png';
import programDepartement from '../../assets/images/ourteam-programdepartement.png';
import creativeDepartement from '../../assets/images/ourteam-creativedepartement.png';
import marketing from '../../assets/images/ourteam-marketing.png';
import socialMedia from '../../assets/images/ourteam-socialmedia.png';
import music from '../../assets/images/ourteam-music.png';
export default{
    name: 'ourteam',
    props: {
        background: String,
        classes: String
    },
    data() {
        return {
            ourTeamList: [
                {
                    image: managerial,
                    jabatan: "Managerial"
                },
                {
                    image: secretary,
                    jabatan: "Secretary"
                },
                {
                    image: finance,
                    jabatan: "Finance"
                },
                {
                    image: programDepartement,
                    jabatan: "Program Department"
                },
                {
                    image: creativeDepartement,
                    jabatan: "Creative Department"
                },
                {
                    image: marketing,
                    jabatan: "Marketing Commucation"
                },
                {
                    image: socialMedia,
                    jabatan: "Social Media Specialist"
                },
                {
                    image: music,
                    jabatan: "Music Department"
                }
            ]
        }
    },
}
</script>

<template>
    <div id="our-team" :class="background">
        <div  :class="classes">
            <h1 class="heading-2 text-white text-center">Our Team</h1>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 sm:gap-x-6 gap-y-7 md:gap-y-20 mt-10 lg:mt-20">
                <div class="border-2 border-solid border-white" v-for="data in ourTeamList" :key="index">
                    <img class='xl:h-[320px] w-full' :src="data.image" alt="images">
                    <div class="py-3">
                        <h3 class="heading-3 text-center text-white">{{ data.jabatan }}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>