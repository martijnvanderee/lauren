<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 413.6448249907485 485.9811606767139"
    width="w-full"
    height="971.9623213534278"
  >
    <!-- svg-source:excalidraw -->

    <defs></defs>
    <g stroke-linecap="round">
      <g
        transform="translate(12.597132505849004 8.983189837262216) rotate(0 194.2252799895257 234.00739050109473)"
      >
        <path
          class="path"
          d="M-2.6 1.02 C61.69 24.36, 356.29 61.8, 387.71 139.46 C419.13 217.12, 219.23 412.33, 185.91 467"
          stroke="#570df8"
          stroke-width="4.5"
          fill="none"
          stroke-dasharray="8 12"
        ></path>
      </g>
      <g
        transform="translate(12.597132505849004 8.983189837262216) rotate(0 194.2252799895257 234.00739050109473)"
      >
        <path
          class="path1"
          d="M196.98 436.36 C192.55 448.88, 190.97 462.09, 189.26 466.21"
          stroke="#570df8"
          stroke-width="4.5"
          fill="none"
        ></path>
      </g>
      <g
        transform="translate(12.597132505849004 8.983189837262216) rotate(0 194.2252799895257 234.00739050109473)"
      >
        <path
          class="path2"
          d="M213 449.19 C202.69 456.66, 195.17 465.12, 189.26 466.21"
          stroke="#570df8"
          stroke-width="4.5"
          fill="none"
        ></path>
      </g>
    </g>
    <mask></mask>
  </svg>
</template>

<style class="style-fonts">
@font-face {
  font-family: "Virgil";
  src: url("https://excalidraw.com/Virgil.woff2");
}
@font-face {
  font-family: "Cascadia";
  src: url("https://excalidraw.com/Cascadia.woff2");
}

.path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: dash 5s linear alternate infinite;
}

.path1 {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: dash1 5s linear alternate infinite;
}

.path2 {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: dash2 5s linear alternate infinite;
}

@keyframes dash {
  from {
    stroke-dashoffset: 822;
  }
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes dash1 {
  from {
    stroke-dashoffset: 822;
  }
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes dash2 {
  from {
    stroke-dashoffset: 822;
  }
  to {
    stroke-dashoffset: 0;
  }
}
</style>
