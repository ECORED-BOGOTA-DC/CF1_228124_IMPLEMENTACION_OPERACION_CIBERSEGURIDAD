<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5(data-aos="fade-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/X8UH2wiIFvg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row
      .col-lg-5(data-aos="fade-right")
        figure.mb-5
          img(src="@/assets/curso/t0-i1.png", alt="imagen decorativa")

      .col-lg-7(data-aos="fade-left")
        p.mb-3.text-bold(data-aos="fade-up") Por medio del diagnóstico de la seguridad digital, se logra establecer el estado actual de la ciberseguridad de una organización. 
        p.mb-4(data-aos="fade-up") Gracias a dicho diagnóstico, es posible también, adoptar estándares de seguridad y metodologías para el análisis de riesgos informáticos, disponibles en el mercado. He ahí la importancia de su reconocimiento y elección, de acuerdo a los requerimientos de la organización sobre la cual se está generando un modelo de seguridad.
        .cajon.color-secundario.p-4(data-aos="flip-up")
          p.mb-0  Esto quiere decir que existen varios métodos, metodologías y estándares, con los cuales se pueden hacer análisis de riesgos. En este componente formativo se conceptualizará al respecto y, en esa tarea, se explicarán las metodologías para el análisis de riesgos y los estándares adecuados con sus respectivos controles para la seguridad.


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
