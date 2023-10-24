<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Marco jurídico
    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-a.custonBox1.color-acento-contenido.p-4.p-md-5.slideInUp 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-0 Para prevenir y combatir la delincuencia informática, <b>se ha avanzado a nivel global en la aplicación de campañas, técnicas, programas, normas y leyes que responden,</b> en cada país o región, a los eventos más concurrentes relativos a ese fenómeno.
    .row.justify-content-center
      .col-lg-2.d-none.d-lg-block(data-aos="slide-right")
        figure
          img.nW(src='@/assets/curso/t5-ic1.svg', alt='icono decorativo')
      .col-lg-8(data-aos="slide-left")
        p.mb-4.text-bold  El gobierno colombiano ha establecido la siguiente base jurídica para enfrentar los delitos informáticos:
        ul.lista-ul
          li.d-flex
            i.fas.fa-check
            p.mb-0 Comercio electrónico Ley 527/1999
          li.d-flex
            i.fas.fa-check
            p.mb-0 Violación ilícita de comunicaciones Ley 599/2000
          li.d-flex
            i.fas.fa-check
            p.mb-0 Uso de medios tecnológicos Ley 962/2005
          li.d-flex
            i.fas.fa-check
            p.mb-0  Notificación electrónica Ley 1150/2007
          li.d-flex
            i.fas.fa-check
            p.mb-0  Protección de la información Ley 1273/2009
          li.d-flex
            i.fas.fa-check
            p.mb-0  Agencia del espectro electromagnético Ley 1341/2009
          li.d-flex
            i.fas.fa-check
            p.mb-0  Seguridad en redes. Resolución 2258/2009
          li.d-flex
            i.fas.fa-check
            p.mb-0  Seguridad y calidad navegable de información. Circular 052/2009

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped>
.custonBox1:before
  background-image: url('../assets/curso/t5-i1.jpg')!important
  background-size: cover
</style>
