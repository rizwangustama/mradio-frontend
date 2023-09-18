<script>
export default {
    name: 'Streaming View',
    props: {
        classes: String,
        background: String
    },
    data() {
        return {
            currentClock: '',
        }
    },
    methods: {
        updateTime() {
            const date = new Date();
            this.currentClock = date.toLocaleTimeString();
        }
    },
    mounted() {
        // Update the clock time every second
        setInterval(this.updateTime, 1000);



        const script1 = document.createElement('script');
        script1.innerHTML = `
            var cstrFreePlayerUid = 558141;
            var cstrFreePlayerTheme = 'blue';
            var cstrFreePlayerColor = '';
            `;
        document.body.appendChild(script1);

        const script2 = document.createElement('script');
        script2.src = '//corscdn.caster.fm/freeplayer/FreePlanPlayerEmbed.js';
        document.body.appendChild(script2);
    },
}
</script>
<template>
    <div :class="background">
        <div :class="classes">
            <h1 class="heading-2 text-white text-center">{{ currentClock }}</h1>
            <div class="mt-10">
                <!--   DO NOT REMOVE THE LINKS BELOW, THEY  WILL BE HIDDEN (AND WILL HELP US A LOT)   -->
                <a id='cstrFreePlayerBL1' href='//www.caster.fm/'>Free Shoutcast Hosting</a><a id='cstrFreePlayerBL2'
                    href='//www.caster.fm/'>Radio Stream Hosting</a>
                <div id='cstrFreePlayerDiv'></div>
            </div>
        </div>
    </div>
</template>

