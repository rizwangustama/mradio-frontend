<template>
    <div class="py-[120px]">
        <div class="container">
            <div class="flex flex-col md:flex-row gap-12 items-center">
                <div class="w-full md:w-1/2">
                    <iframe class="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18459.391430164716!2d106.74790947603485!3d-6.299872365424746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f02a87b9339b%3A0x31e8ed7f444966c5!2sFISIP%20UMJ!5e0!3m2!1sid!2sid!4v1686743961334!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="w-full md:w-1/2 flex flex-col gap-7">
                    <div class="flex flex-col gap-4 md:gap-6">
                        <h2 class="heading-3 text-white">{{ partnership.title }}</h2>
                        <ul>
                            <li v-for="(data, i) in partnership.list" class="paragraph-2 text-white">{{ data }}</li>
                        </ul>
                    </div>
                    <div class="flex flex-col gap-4 md:gap-6">
                        <h2 class="heading-3 text-white">{{ mediapartner.title }}</h2>
                        <ul>
                            <li v-for="(data, i) in mediapartner.list" class="paragraph-2 text-white">{{ data }}</li>
                        </ul>
                    </div>
                    <div class="flex flex-col gap-6">
                        <h2 class="heading-3 text-white">{{ mediapartner.title }}</h2>
                        <ul>
                            <li v-for="(data, i) in address.list" class="paragraph-2 text-white">{{ data }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'Contact',
    data() {
        return {
            partnership: {
                title: "Email",
                list: [
                    "Mradio jakarta",
                    "m.radioumj@gmail.com"
                ]
            },
            mediapartner: {
                title: "Media partner",
                list: [
                    "Muhammad rafi azhar",
                    "0895-6041-8562",
                    "m.radioumj@gmail.com"
                ]
            },
            address: {
                title: "Address",
                list: [
                    "Gedung fisip lantai 4 Universitas muhammadiyah jakarta",
                    "Jl. K.H. Ahmad Dahlan, Cireundeu, Kec. Ciputat Tim., Kota Tangerang Selatan, Banten 15419"
                ]
            }
        }
    },
}
</script>