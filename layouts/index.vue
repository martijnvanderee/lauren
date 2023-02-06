<script setup lang="ts">
import { Navbar } from "~~/.nuxt/components";
import { Footer } from "~~/.nuxt/components";
</script>

<template>
  <div>
    <Navbar />
    Some default layout shared across all pages
    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>
