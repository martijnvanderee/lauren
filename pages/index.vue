<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Card from "../components/Card.vue";
import Hero from "../components/Hero.vue";
import { MAX_AMOUNT_PRODUCTS_HOMEPAGE } from "../util/constants";

const { data } = await useFetch("/api/hello");

useHead({
  script: [
    { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
  ],
});

console.log("data", data);

const query: QueryBuilderParams = {
  path: "/products",
  limit: MAX_AMOUNT_PRODUCTS_HOMEPAGE,
  sort: [{ title: -1 }],
};
</script>

<template>
  <div class="relative">
    <Navbar />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      class="rotate-180 absolute"
    >
      <path
        fill="#079972"
        d="M0,160L40,176C80,192,160,224,240,250.7C320,277,400,299,480,282.7C560,267,640,213,720,197.3C800,181,880,203,960,197.3C1040,192,1120,160,1200,138.7C1280,117,1360,107,1400,101.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
      ></path>
    </svg>

    <section>
      <div class="content">
        <div class="max-w-5xl mx-auto px-2">
          <div class="row">
            <Hero />
          </div>
        </div>
      </div>
    </section>

    <NuxtLayout>
      <section>
        <div class="content">
          <div class="max-w-5xl mx-auto px-2">
            <div class="row">
              <div class="col-sm-12">
                <div class="grid grid-cols-3 gap-4">
                  <ContentList :query="query" v-slot="{ list }">
                    <div v-for="product in list" :key="product._path">
                      <div>
                        <Card v-bind="product" />
                      </div>
                    </div>
                  </ContentList>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </NuxtLayout>

    <div class="h-48">
      <div class="h-24 min-h-full">
        <!-- ... -->
      </div>
    </div>

    <Footer />
  </div>
</template>

<style>
.tag {
  background-color: #bd5ee0;
}
</style>
