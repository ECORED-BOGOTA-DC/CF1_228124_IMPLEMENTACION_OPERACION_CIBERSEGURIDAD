<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Normatividad y estándares: seguridad de la información
    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t3-i1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.shadow-box
            p.mb-0 De la misma manera que en los procesos de seguridad de la información y ciberseguridad, <b>es importante en la gestión de riesgos de la seguridad de la información,</b> utilizar los lineamientos de las siguientes normas y estándares:
    .neg-margin-x.bg-soft-lavender
      .p-4.p-lg-5
        .tarjeta.p-4.mb-5
          SlyderA
            .row.m-1.justify-content-center
              .col-lg-6.mb-4.mb-lg-0
                p.mb-3 Es importante para la gestión de riesgos utilizar los lineamientos de las siguientes normas y estándares:
                p.mb-3  <b>ISO 31000: Gestión del riesgo. Directrices:</b> esta normativa establece principios y guías para diseñar, implementar y mantener la gestión de los riesgos en forma sistemática y de transparencia de toda forma de riesgo, por ejemplo: financiera, operativa, de mercadeo, de imagen, y de seguridad de información.
                p.mb-3  <b>ISO/IEC 27005.</b> Gestión de riesgos de la seguridad de la información. Esta norma se encuentra estructurada con 14 numerales de control de seguridad de la información que en su conjunto contiene más de 35 de categorías de seguridad principal y 114 controles.
              .col-auto.col-lg-6
                figure
                  img(src='@/assets/curso/t3-s1.png', alt='imagen decorativa')
            .row.m-1.justify-content-center
              .col-lg-6.mb-4.mb-lg-0
                p.mb-3 Las actividades para la gestión del riesgo en la seguridad en la información son las siguientes:
                ul.lista-ul
                  li.d-flex
                    i.fas.fa-check
                    p.mb-0  Establecimiento del contexto
                  li.d-flex
                    i.fas.fa-check
                    p.mb-0  Valoración del riesgo
                  li.d-flex
                    i.fas.fa-check
                    p.mb-0  Tratamiento del riesgo 
                  li.d-flex
                    i.fas.fa-check
                    p.mb-0  Aceptación del riesgo
                  li.d-flex
                    i.fas.fa-check
                    p.mb-0  Comunicación del riesgo
                  li.d-flex
                    i.fas.fa-check
                    p.mb-0  Monitoreo y revisión del riesgo <b>((ICONTEC), 2009-08-19)</b>                    
              .col-auto.col-lg-6
                figure
                  img(src='@/assets/curso/t3-s2.png', alt='imagen decorativa')
            .row.m-1.justify-content-center
              .col-lg-6.mb-4.mb-lg-0
                p.mb-3 Los objetivos de la normatividad y estándares de la seguridad de la información son:
                ul.lista-ul
                  li.d-flex
                    i.fas.fa-check
                    p.mb-0  <b>Identificar</b> los niveles de riesgo de ciberseguridad en la organización.
                  li.d-flex
                    i.fas.fa-check
                    p.mb-0  Hacer un plan de tratamiento para la gestión de los riesgos que permita la disminución de los riesgos, facilitando lineamientos para gestionar los riesgos, apoyándose con las directrices de la <b>ISO 27001 y 27002.</b>
              .col-auto.col-lg-6
                figure
                  img(src='@/assets/curso/t3-s3.png', alt='imagen decorativa')
            .row.m-1.justify-content-center
              .col-lg-6.mb-4.mb-lg-0
                .h4 Alcance
                p.mb-3 La adopción de normatividad y estándares de gestión de riesgos de seguridad de la información tiene como alcance hacer el análisis de riesgos de los activos de información de las organizaciones determinando el impacto en los activos de información.
              .col-auto.col-lg-6
                figure
                  img(src='@/assets/curso/t3-s4.png', alt='imagen decorativa')
            .row.m-1.justify-content-center
              .col-lg-6.mb-4.mb-lg-0
                .h4 Características
                p.mb-3 La adopción de normatividad y estándares de gestión de riesgos de seguridad de la información, otorga una serie de características entre ellas:
                ul.lista-ul
                  li.d-flex
                    i.fas.fa-check
                    p.mb-0  Identificar acontecimientos potenciales que afecte a la organización proporcionados por los niveles de riesgos.
                  li.d-flex
                    i.fas.fa-check
                    p.mb-0  Proporcionar una seguridad razonable a la organización.
                  li.d-flex
                    i.fas.fa-check
                    p.mb-0  Mejorar la agilidad de los sistemas de gestión de riesgos.
                  li.d-flex
                    i.fas.fa-check
                    p.mb-0  Proporcionar una mayor confianza en la mitigación de riesgos.
                  li.d-flex
                    i.fas.fa-check
                    p.mb-0  Mejora la comunicación y el flujo de información.
              .col-auto.col-lg-6
                figure
                  img(src='@/assets/curso/t3-s5.png', alt='imagen decorativa')
            .row.m-1.justify-content-center
              .col-lg-6.mb-4.mb-lg-0
                .h4 Aplicación
                p.mb-3 Se siguen las directrices y lineamientos dados por la norma:
                ul.lista-ul
                  li.d-flex
                    i.fas.fa-check
                    p.mb-0  <b>ISO/IEC 27005:</b> seguridad de la información, ciberseguridad y protección de la privacidad.
                  li.d-flex
                    i.fas.fa-check
                    p.mb-0  <b>ISO 31000:2018.</b> Gestión del riesgo. Directrices.
              .col-auto.col-lg-6
                figure
                  img(src='@/assets/curso/t3-s6.png', alt='imagen decorativa')

</template>

<script>
export default {
  name: 'Tema3',
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
