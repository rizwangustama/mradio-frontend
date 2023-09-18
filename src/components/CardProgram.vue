<script>
export default {
    props: {
        title: String,
        content: String,
        link: String,
        image: String,
    }
}
</script>
<template>
    <a :href="link">
        <div class="flex flex-col gap-3">
            <img class="min-h-[150px] max-h-[150px] sm:min-h-[200px] sm:max-h-[230px] md:min-h-[262px] w-full object-fill" loading="lazy" width="262" height="262" :src="image" :alt="title">
            <div class="flex gap-3 flex-col">
                <h3 class="heading-3 text-white hover:text-gray-400 line-clamp-2">{{ title }}</h3>
                <p class="paragraph-3 text-semi-white line-clamp-2 md:line-clamp-3">{{ content }}</p>
            </div>
        </div>
    </a>
</template>

