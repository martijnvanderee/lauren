<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Card from "../components/Card.vue";

useHead({
  script: [
    { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
  ],
});

const query: QueryBuilderParams = {
  path: "/products",
  limit: 5,
};
</script>

<template>
  <Navbar />

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#0099ff"
      fill-opacity="0.25"
      d="M0,160L40,176C80,192,160,224,240,250.7C320,277,400,299,480,282.7C560,267,640,213,720,197.3C800,181,880,203,960,197.3C1040,192,1120,160,1200,138.7C1280,117,1360,107,1400,101.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
    ></path>
  </svg>

  <section>
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="flex flex-wrap -mx-1 lg:-mx-4">
              <ContentList :query="query" v-slot="{ list }">
                <div v-for="article in list" :key="article._path">
                  <Card
                    :title="article.title"
                    :description="article.discription"
                    :image="article.image"
                    :price="article.price"
                  />
                </div>
              </ContentList>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</template>
