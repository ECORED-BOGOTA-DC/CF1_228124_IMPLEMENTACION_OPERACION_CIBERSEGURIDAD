<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Normatividad y estándares: ciberseguridad
    .row.mb-5.slideInUp
      .col-lg-7
        p.mb-4.text-bold  La normalización o estandarización, elabora una serie de especificaciones técnicas, normas que son adoptadas de manera voluntaria.
        p.mb-4  La legislación define la norma:
        .bloque-texto-d.color-secundario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            .h5.text-regular Especificación técnica de aplicación repetitiva o continuada cuya observancia no es obligatoria, establecida con participación de todas las partes interesadas, que aprueba un Organismo reconocido, a nivel nacional o internacional, por su actividad normativa.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h6.mb-0 - Artículo 8 de la Ley 21/1992 de Industria
      .col-lg-5.slideInLeft
        figure
          img(src='@/assets/curso/t2-i1.jpg', alt='imagen decorativa')
    p.mb-5(data-aos="fade-right")  Para profundizar y afianzar en aspectos importantes relativos a normatividad y estándares, visite el recurso que se presenta a continuación. Haga un estudio consciente de todos los elementos que allí se muestran.
    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/WiBw1gUfa-g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.justify-content-center
      .col-lg-10
        .tarjeta.color-primario.p-3(data-aos="fade-right")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/t9-ic8.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  .h3.mb-1 Normatividad y estándares de la ciberseguridad
                  p.text-small Complemente la información sobre la normatividad en la siguiente infografía.
                .col-sm-auto
                  a.boton.color-secundario(:href="obtenerLink('/downloads/Infografia_Normatividad_y_estandares_de_la_ciberseguridad.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

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
