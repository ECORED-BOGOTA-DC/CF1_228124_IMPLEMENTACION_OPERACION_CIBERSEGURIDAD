<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Tipificación de delitos informáticos en Colombia
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t6-i1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.shadow-box
            p.mb-0 En la actualidad, el amplio uso de las tecnologías y la cantidad en aumento de usuarios en las redes y los sistemas ha favorecido la implantación de los delitos informáticos, es decir, <b>todas aquellas acciones gravemente engañosas y de fraude que pueden cometerse en los ámbitos digitales y <i>on line</i>.</b>
    .row.justify-content-center
      .col-lg-2(data-aos="fade-right").d-none.d-lg-block
        figure
          img.nW(src='@/assets/curso/t5-ic1.svg', alt='icono decorativo')
      .col-lg-8(data-aos="fade-left")
        p.mb-4.text-bold  Según la Ley 1273 de 2009, se ajustaron los delitos informáticos en Colombia en los siguientes términos: 
        ul.lista-ul
          li.d-flex
            i.fas.fa-check
            p.mb-0  Acceso abusivo a un sistema informático (modificado del Código Penal).
          li.d-flex
            i.fas.fa-check
            p.mb-0  Obstaculización ilegítima del sistema informático o red de telecomunicación.
          li.d-flex
            i.fas.fa-check
            p.mb-0  Interceptación de datos informáticos.
          li.d-flex
            i.fas.fa-check
            p.mb-0  Daño informático; uso de <i>software</i> malicioso.
          li.d-flex
            i.fas.fa-check
            p.mb-0  Hurto por medios informáticos y semejantes. 
          li.d-flex
            i.fas.fa-check
            p.mb-0  Violación de datos personales.
          li.d-flex
            i.fas.fa-check
            p.mb-0  Suplantación de sitios <i>web</i> para capturar datos personales y transferencia no consentida de activos.





          

    



















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

<style lang="sass" scoped></style>
