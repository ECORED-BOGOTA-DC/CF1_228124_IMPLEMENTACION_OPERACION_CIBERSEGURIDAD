<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Activos de información
    .row.mb-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure.slideInLeft
          img(src='@/assets/curso/t7-i1.jpg', alt='imagen decorativa')
      .col-lg-7(data-aos="fade-left")
        p.mb-3.text-bold  Los activos de información relacionados con la seguridad de la información, hacen referencia a cualquier información o dispositivo que tenga que ver con el tratamiento de ésta y que sea de valor para la organización.
        p.mb-4  Los activos de información cuentan con un sistema de clasificación, el cual se enfoca en las propiedades de confidencialidad, integridad y disponibilidad, como elementos para el tratamiento de los datos. Además, evalúa el impacto que tendría, en caso de no cumplir alguno de estos fundamentos. 
        .cajon.color-secundario.p-4
          p.mb-0  Los activos de información se clasifican, generalmente, en <b>activos de prioridad alta, media y baja</b>; de esta manera se establece cuáles se deben tratar con prelación. 
    .row.justify-content-center(data-aos="fade-right")
      .col-md-8.col-lg-4.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/t7-ic1.svg' alt='icono decorativo')
          .tarjeta.color-secundario.text-center
            .text-white.p-5
              .h4.text-center Baja
              p Se considera baja cuando la clasificación de la información en todas sus propiedades es baja.
      .col-md-8.col-lg-4.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/t7-ic2.svg' alt='icono decorativo')
          .tarjeta.color-primario.text-center
            .text-white.p-5
              .h4.text-center Media
              p Se ubica en esta posición si la clasificación de la información de una de las propiedades es alta o nivel medio.
      .col-md-8.col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/t7-ic3.svg' alt='icono decorativo')
          .tarjeta.color-secundario.text-center
            .text-white.p-5
              .h4.text-center Alta
              p Se determina cuando la clasificación es de dos, en todas las propiedades (confidencialidad, integridad, disponibilidad).
    Separador
    #t_7_1
    .titulo-segundo.color-secundario
      h2 7.1 Características de los activos de información
    .row.justify-content-center.mb-5
      .col-md-8.col-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/t7-ic4.svg', alt='imagen decorativa')
      .col-lg-10(data-aos="fade-down")
        p.mb-3.text-bold Los activos de información presentan características diferentes según el estado, la materia, los niveles de confidencialidad, la integridad y la disponibilidad.
        p Estas son las características más representativas, y a tener en cuenta, de los activos de información:
    .row.mb-5.justify-content-center
      .col-lg-8(data-aos="fade-left")
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/t7-info1.svg', alt='infografia estados de la informacion')
          .tarjeta.color-secundario.p-3(x="10%" y="98%")
            p Presenta y conoce la autenticidad de los diferentes activos de información.
          .tarjeta.color-secundario.p-3(x="36%" y="98%")
            p Evitar que se divague, sin autorización, los activos de información.
          .tarjeta.color-secundario.p-3(x="63%" y="98%")
            p Muestra la protección sobre la modificación o destrucción, que no esté autorizada según los activos del dominio.
          .tarjeta.color-secundario.p-3(x="90%" y="98%")
            p Protege contra el acceso no autorizado a los activos de información.
    Separador
    #t_7_2
    .titulo-segundo.color-secundario
      h2 7.2 Tipos de activos de información
    p.mb-5(data-aos="fade-right")  Se relacionan <b>cinco grandes tipos de activos de información</b>, de la siguiente manera:
    TabsC.color-primario(data-aos="fade-left")
      .py-3.py-md-4(titulo="Seguridad")
        .row 
          .col-md-6
            figure.slideInLeft
              img(src='@/assets/curso/t7-i2.jpg', alt='imagen decorativa')
          .col-md-6.mb-4.mb-md-0
            .h4 Seguridad
            p Todo el ambiente del Sistema de Gestión de Seguridad de la Información según la <b>ISO 27001</b>, que contenga a los activos y que es necesario que garanticen los diferentes niveles de seguridad.
      .py-3.py-md-4(titulo="El sistema mismo")
        .row 
          .col-md-6
            figure.slideInLeft
              img(src='@/assets/curso/t7-i3.jpg', alt='Hombre sentado frente al computador')
          .col-md-6.mb-4.mb-md-0
            .h4 El sistema mismo
            p El propio sistema de información es considerado como uno de los tipos de activos.
      .py-3.py-md-4(titulo="Información generada")
        .row 
          .col-md-6
            figure.slideInLeft
              img(src='@/assets/curso/t7-i4.jpg', alt='imagen decorativa')
          .col-md-6.mb-4.mb-md-0
            .h4 Información generada
            p Toda la información que se ha generado por la aplicación del Sistema de Gestión de Seguridad de la Información.
      .py-3.py-md-4(titulo="Funciones empresariales u organizacionales")
        .row 
          .col-md-6
            figure.slideInLeft
              img(src='@/assets/curso/t7-i5.jpg', alt='imagen decorativa')
          .col-md-6.mb-4.mb-md-0
            .h4 Funciones empresariales u organizacionales
            p Todas las funciones de una organización, con las que se pueden demostrar las diferentes exigencias del Sistema de Gestión de Seguridad de la Información y, además, genera los objetivos deseados.
      .py-3.py-md-4(titulo="Métodos o sistemas de valoración de riesgos")
        .row 
          .col-md-6
            figure.slideInLeft
              img(src='@/assets/curso/t7-i6.jpg', alt='imagen decorativa')
          .col-md-6.mb-4.mb-md-0
            .h4 Métodos o sistemas de valoración de riesgos
            p Es otro tipo de activos, aquellos que pueden realizar un método de evaluación de riesgos para facilitar la inclusión de cualquier otro activo.
    Separador
    #t_7_3
    .titulo-segundo.color-secundario
      h2 7.3 Técnicas de valoración de activos
    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-acento-contenido.p-4.p-md-5.custonBox1(data-aos="fade-down")
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p La técnica que será utilizada para valorar se encuentra apoyada en los activos que se encuentran en los inventarios; tienen una parte de activos que están vinculados con el entorno y otra parte que se encuentran clasificados en otros inventarios. <b>Los activos que pueden estar, o no, en los inventarios, por lo general se encuentran en las aplicaciones que existen en la obtención de información.</b> Otro tipo de activos no pueden estar en el inventario, ya que en este caso dejarían de tener valor.
    p.mb-5(data-aos="fade-right") Si se realizan técnicas de valoración del estado de seguridad de los activos que se tienen en cuenta para estimar todos los valores, se utilizan según los cuatro subestados que se mencionan a continuación (A-C-I-D):
    .row(data-aos="fade-left")
      .col-lg-3
        .nav-holder.align-items-center(data-aos="flip-up")
          img(src="@/assets/curso/t7-h1.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Subestado autentificación
              p
                ul.lista-ul
                  li.d-flex
                    i.fas.fa-check
                    | Baja
                  li.d-flex
                    i.fas.fa-check
                    | Normal
                  li.d-flex
                    i.fas.fa-check
                    | Alta
                  li.d-flex
                    i.fas.fa-check
                    | Crítica
      .col-lg-3
        .nav-holder.align-items-center.color2(data-aos="flip-up")
          img(src="@/assets/curso/t7-h2.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Subestado confidencialidad
              p
                ul.lista-ul
                  li.d-flex
                    i.fas.fa-check
                    | Libre
                  li.d-flex
                    i.fas.fa-check
                    | Restringida
                  li.d-flex
                    i.fas.fa-check
                    | Protegida
                  li.d-flex
                    i.fas.fa-check
                    | Confidencial
      .col-lg-3
        .nav-holder.align-items-center.color2(data-aos="flip-up")
          img(src="@/assets/curso/t7-h3.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Subestado <br>integridad
              p
                ul.lista-ul
                  li.d-flex
                    i.fas.fa-check
                    | Baja
                  li.d-flex
                    i.fas.fa-check
                    | Normal
                  li.d-flex
                    i.fas.fa-check
                    | Alta
                  li.d-flex
                    i.fas.fa-check
                    | Crítica
      .col-lg-3
        .nav-holder.align-items-center.color2(data-aos="flip-up")
          img(src="@/assets/curso/t7-h4.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Subestado disponibilidad
              p
                ul.lista-ul
                  li.d-flex
                    i.fas.fa-check
                    | Menos de una hora
                  li.d-flex
                    i.fas.fa-check
                    | Hasta un día laborable
                  li.d-flex
                    i.fas.fa-check
                    | Hasta una semana laborable
                  li.d-flex
                    i.fas.fa-check
                    | Hasta un mes laborable

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
  background-image: url('../assets/curso/t7-i7.jpg')!important
  background-size: cover
</style>
