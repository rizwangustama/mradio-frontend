<template>
    <div id="header" class="bg-primary sticky z-20 w-full top-0">
        <div class="container">
            <header class="w-full py-2 md:py-4 flex justify-between relative z-30">
                <nav class="flex gap-12 items-center justify-between md:justify-start w-full">
                    <button @click="popUp()" class="icon w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-full relative z-10">
                        <img src="../assets/images/logo.png" alt="logo">
                    </button>
                    <div :class="[isActive ? 'active-card-popup' : 'no-active-popup']"
                        class="w-screen h-screen top-0 left-0 fixed z-10  bg-black bg-opacity-50 p-20">
                        <div class="bg-white p-10 max-w-[100%] sm:max-w-[50%] relative left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
                            <div class="flex flex-col">
                                <h1 class="font-bold text-2xl sm:text-3xl md:text-4xl font-heading text-center">Our Social Media</h1>
                                <span class="w-full h-[1px] bg-black my-5"></span>
                                <div class="flex justify-center">
                                    <a href="" class="px-2">
                                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M16.5013 11.9998C15.4404 11.9998 14.423 12.4213 13.6729 13.1714C12.9227 13.9216 12.5013 14.939 12.5013 15.9998C12.5013 17.0607 12.9227 18.0781 13.6729 18.8283C14.423 19.5784 15.4404 19.9998 16.5013 19.9998C17.5622 19.9998 18.5796 19.5784 19.3297 18.8283C20.0799 18.0781 20.5013 17.0607 20.5013 15.9998C20.5013 14.939 20.0799 13.9216 19.3297 13.1714C18.5796 12.4213 17.5622 11.9998 16.5013 11.9998ZM16.5013 9.33317C18.2694 9.33317 19.9651 10.0355 21.2153 11.2858C22.4656 12.536 23.168 14.2317 23.168 15.9998C23.168 17.7679 22.4656 19.4636 21.2153 20.7139C19.9651 21.9641 18.2694 22.6665 16.5013 22.6665C14.7332 22.6665 13.0375 21.9641 11.7873 20.7139C10.537 19.4636 9.83463 17.7679 9.83463 15.9998C9.83463 14.2317 10.537 12.536 11.7873 11.2858C13.0375 10.0355 14.7332 9.33317 16.5013 9.33317ZM25.168 8.99984C25.168 9.44186 24.9924 9.86579 24.6798 10.1783C24.3673 10.4909 23.9433 10.6665 23.5013 10.6665C23.0593 10.6665 22.6354 10.4909 22.3228 10.1783C22.0102 9.86579 21.8346 9.44186 21.8346 8.99984C21.8346 8.55781 22.0102 8.13389 22.3228 7.82133C22.6354 7.50877 23.0593 7.33317 23.5013 7.33317C23.9433 7.33317 24.3673 7.50877 24.6798 7.82133C24.9924 8.13389 25.168 8.55781 25.168 8.99984ZM16.5013 5.33317C13.2026 5.33317 12.664 5.3425 11.1293 5.4105C10.084 5.45984 9.38263 5.59984 8.73197 5.85317C8.18746 6.05309 7.69519 6.37352 7.29197 6.7905C6.87464 7.1937 6.55377 7.68595 6.3533 8.2305C6.09997 8.88384 5.95997 9.58384 5.91197 10.6278C5.84264 12.0998 5.8333 12.6145 5.8333 15.9998C5.8333 19.2998 5.84264 19.8372 5.91064 21.3718C5.95997 22.4158 6.09997 23.1185 6.35197 23.7678C6.57864 24.3478 6.8453 24.7652 7.28797 25.2078C7.7373 25.6558 8.15464 25.9238 8.72797 26.1452C9.38664 26.3998 10.088 26.5412 11.128 26.5892C12.6 26.6585 13.1146 26.6665 16.5 26.6665C19.8 26.6665 20.3373 26.6572 21.872 26.5892C22.9146 26.5398 23.616 26.3998 24.268 26.1478C24.812 25.9469 25.3041 25.6266 25.708 25.2105C26.1573 24.7625 26.4253 24.3452 26.6466 23.7705C26.9 23.1145 27.0413 22.4132 27.0893 21.3705C27.1586 19.8998 27.1666 19.3838 27.1666 15.9998C27.1666 12.7012 27.1573 12.1625 27.0893 10.6278C27.04 9.58517 26.8986 8.88117 26.6466 8.2305C26.4457 7.68653 26.1254 7.19448 25.7093 6.7905C25.3063 6.37297 24.814 6.05206 24.2693 5.85184C23.616 5.5985 22.9146 5.4585 21.872 5.4105C20.4013 5.34117 19.888 5.33317 16.5013 5.33317ZM16.5013 2.6665C20.124 2.6665 20.576 2.67984 21.9986 2.7465C23.4173 2.81317 24.3853 3.03584 25.2346 3.3665C26.1146 3.70517 26.856 4.16384 27.5973 4.90384C28.2753 5.57036 28.7999 6.37662 29.1346 7.2665C29.464 8.11584 29.688 9.08384 29.7546 10.5038C29.8173 11.9252 29.8346 12.3772 29.8346 15.9998C29.8346 19.6225 29.8213 20.0745 29.7546 21.4958C29.688 22.9158 29.464 23.8825 29.1346 24.7332C28.8008 25.6235 28.2761 26.43 27.5973 27.0958C26.9306 27.7736 26.1244 28.2982 25.2346 28.6332C24.3853 28.9625 23.4173 29.1865 21.9986 29.2532C20.576 29.3158 20.124 29.3332 16.5013 29.3332C12.8786 29.3332 12.4266 29.3198 11.004 29.2532C9.5853 29.1865 8.61864 28.9625 7.76797 28.6332C6.87774 28.2991 6.07134 27.7744 5.4053 27.0958C4.72721 26.4294 4.20258 25.6231 3.86797 24.7332C3.5373 23.8838 3.31464 22.9158 3.24797 21.4958C3.18397 20.0745 3.16797 19.6225 3.16797 15.9998C3.16797 12.3772 3.1813 11.9252 3.24797 10.5038C3.31464 9.0825 3.5373 8.11717 3.86797 7.2665C4.20162 6.37608 4.72637 5.5696 5.4053 4.90384C6.07153 4.22548 6.87787 3.70081 7.76797 3.3665C8.6173 3.03584 9.58397 2.81317 11.004 2.7465C12.4266 2.68384 12.8786 2.6665 16.5013 2.6665Z"
                                                fill="#362D40" />
                                        </svg>
                                    </a>
                                    <a href="" class="px-2">
                                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M22.6335 7.76C21.7221 6.7195 21.2198 5.38324 21.2202 4H17.1002V20.5333C17.0684 21.428 16.6907 22.2755 16.0466 22.8973C15.4024 23.519 14.5421 23.8665 13.6469 23.8667C11.7535 23.8667 10.1802 22.32 10.1802 20.4C10.1802 18.1067 12.3935 16.3867 14.6735 17.0933V12.88C10.0735 12.2667 6.04688 15.84 6.04688 20.4C6.04688 24.84 9.72688 28 13.6335 28C17.8202 28 21.2202 24.6 21.2202 20.4V12.0133C22.8909 13.2131 24.8967 13.8569 26.9535 13.8533V9.73333C26.9535 9.73333 24.4469 9.85333 22.6335 7.76Z"
                                                fill="#362D40" />
                                        </svg>

                                    </a>
                                    <a href="" class="px-2">
                                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M30.4466 8.00016C29.4199 8.46683 28.3132 8.7735 27.1666 8.92016C28.3399 8.2135 29.2466 7.0935 29.6732 5.74683C28.5666 6.4135 27.3399 6.88016 26.0466 7.14683C24.9932 6.00016 23.5132 5.3335 21.8332 5.3335C18.6999 5.3335 16.1399 7.8935 16.1399 11.0535C16.1399 11.5068 16.1932 11.9468 16.2866 12.3602C11.5399 12.1202 7.31322 9.84016 4.49989 6.38683C4.00656 7.22683 3.72656 8.2135 3.72656 9.2535C3.72656 11.2402 4.72656 13.0002 6.27322 14.0002C5.32656 14.0002 4.44656 13.7335 3.67322 13.3335V13.3735C3.67322 16.1468 5.64656 18.4668 8.25989 18.9868C7.42086 19.2164 6.54002 19.2484 5.68656 19.0802C6.0487 20.2168 6.75794 21.2114 7.71458 21.9241C8.67122 22.6368 9.82715 23.0317 11.0199 23.0535C8.99806 24.6541 6.49188 25.5192 3.91322 25.5068C3.45989 25.5068 3.00656 25.4802 2.55322 25.4268C5.08656 27.0535 8.09989 28.0002 11.3266 28.0002C21.8332 28.0002 27.6066 19.2802 27.6066 11.7202C27.6066 11.4668 27.6066 11.2268 27.5932 10.9735C28.7132 10.1735 29.6732 9.16016 30.4466 8.00016Z"
                                                fill="#362D40" />
                                        </svg>

                                    </a>

                                </div>
                            </div>

                            <button @click="popUp()" class="bg-white p-2 rounded-full border border-black absolute -top-2.5 -right-2.5">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.29279 5.29308C5.48031 5.10561 5.73462 5.00029 5.99979 5.00029C6.26495 5.00029 6.51926 5.10561 6.70679 5.29308L11.9998 10.5861L17.2928 5.29308C17.385 5.19757 17.4954 5.12139 17.6174 5.06898C17.7394 5.01657 17.8706 4.98898 18.0034 4.98783C18.1362 4.98668 18.2678 5.01198 18.3907 5.06226C18.5136 5.11254 18.6253 5.18679 18.7192 5.28069C18.8131 5.37458 18.8873 5.48623 18.9376 5.60913C18.9879 5.73202 19.0132 5.8637 19.012 5.99648C19.0109 6.12926 18.9833 6.26048 18.9309 6.38249C18.8785 6.50449 18.8023 6.61483 18.7068 6.70708L13.4138 12.0001L18.7068 17.2931C18.8889 17.4817 18.9897 17.7343 18.9875 17.9965C18.9852 18.2587 18.88 18.5095 18.6946 18.6949C18.5092 18.8803 18.2584 18.9855 17.9962 18.9878C17.734 18.99 17.4814 18.8892 17.2928 18.7071L11.9998 13.4141L6.70679 18.7071C6.51818 18.8892 6.26558 18.99 6.00339 18.9878C5.74119 18.9855 5.49038 18.8803 5.30497 18.6949C5.11956 18.5095 5.01439 18.2587 5.01211 17.9965C5.00983 17.7343 5.11063 17.4817 5.29279 17.2931L10.5858 12.0001L5.29279 6.70708C5.10532 6.51955 5 6.26525 5 6.00008C5 5.73492 5.10532 5.48061 5.29279 5.29308Z"
                                        fill="black" />
                                </svg>

                            </button>
                        </div>
                    </div>
                    <menu>
                        <ul class="hidden md:flex gap-4">
                            <li>
                                <router-link class="text-white paragraph-1" to="/">Home</router-link>
                            </li>
                            <li><router-link class="text-white paragraph-1" to="/program">Our Program</router-link></li>
                            <li><router-link class="text-white paragraph-1" to="/content">Content</router-link></li>
                            <li><router-link class="text-white paragraph-1" to="/news">News</router-link></li>
                            <li><router-link class="text-white paragraph-1" to="/contact">Contact</router-link></li>
                        </ul>

                        <div class="md:hidden p-2 outline-none">
                            <button class="outline-none" @click="toggle" :class="[isToggle ? 'no-active' : 'active']">
                                <span>
                                    <svg class="menu" width="32" height="32" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 6H21V8H3V6ZM3 11H21V13H3V11ZM3 16H21V18H3V16Z" fill="white" />
                                    </svg>
                                    <svg class="close" width="32" height="32" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                                            fill="white" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </menu>
                </nav>
                <a href="/" class="hidden md:flex btn-primary bg-white text-primary">Streaming</a>
            </header>
        </div>
        <div :class="[isToggle ? 'active-mobile' : 'no-mobile']">
            <div class="container py-8">
                <ul class="flex flex-col">
                    <li class="py-2">
                        <router-link class="text-white text-center text-3xl" to="/">Home</router-link>
                    </li>
                    <li class="py-2"><a href="/program" class="text-white text-center text-2xl">Our Program</a></li>
                    <li class="py-2"><a href="/content" class="text-white text-center text-2xl">Content</a></li>
                    <li class="py-2"><a href="/news" class="text-white text-center text-2xl">News</a></li>
                    <li class="py-2"><a href="/contact" class="text-white text-center text-2xl">Contact</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'header',
    data() {
        return {
            isActive: false,
            isToggle: false
        }
    },
    methods: {
        popUp: function () {
            if (!this.isActive) {
                this.isActive = true;
                const getBody = document.querySelector('body');
                getBody.style.overflow = 'hidden';
            } else {
                this.isActive = false;
                const getBody = document.querySelector('body');
                getBody.style.overflow = 'unset';
            }
        },
        toggle() {
            if (!this.isToggle) {
                this.isToggle = true;
                const getBody = document.querySelector('body');
                getBody.style.overflow = 'hidden';
            } else {
                this.isToggle = false;
                const getBody = document.querySelector('body');
                getBody.style.overflow = 'unset';
            }
        }
    },
}
</script>

<style>
#header .active {
    display: flex !important;
}

#header #card-popup {
    /* display: none; */
    left: -100vh;
}

#header .active-card-popup {
    left: 0px;
    transition: left .3s;
}

#header .no-active-popup {
    left: -100%;
    transition: left .3s;
}

#header menu .no-active .menu {
    display: none;
}

#header menu .active .close {
    display: none;
}

#header .no-mobile {
    left: -100%;
    transition: left .3s;
    @apply -left-full h-screen fixed bg-primary w-full;
}

#header .active-mobile {
    left: 0%;
    transition: left .3s;
    @apply h-screen fixed bg-primary w-full;
}</style>
