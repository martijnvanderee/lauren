<script setup plang="ts">
console.log("test");
</script>

<template>
  <div class="hero my-12">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <NuxtImg
        provider="cloudinary"
        src="lauren2"
        :modifiers="{ effect: 'grayscale' }"
        class="max-w-sm rounded-lg shadow-2xl"
      />
      <div>
        <h1 class="text-5xl font-bold">Hey iedereen! 👋</h1>
        <p class="py-6">
          Ik ben Lauren wat leuk dat je mijn site bezoekt ik maak van allerlei
          Sleich
        </p>
        <button class="btn btn-primary font-sans">
          Klik hier om meer van spullen te zien die ik maak
        </button>
      </div>
    </div>
  </div>
</template>
