<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 10
      h1 <i>Ethical hacking</i>
    .row.justify-content-center
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p.text-bold-mb-5  Un <i>hacker</i> ético es una persona que realiza pruebas de penetración con la intención de buscar y encontrar vulnerabilidades actuando de forma igual, o al menos similar, y utilizando los mismos métodos que usaría un <i>hacker</i> con intención de atacar el sistema.
        .cajon.color-secundario.p-4
          p.mb-0   Las pruebas de penetración de un <i>hacker</i> ético, permiten evaluar vulnerabilidades, analizar y categorizar las debilidades explotadas y proveer recomendaciones, con base a las prioridades de la organización y por último eliminar dichas vulnerabilidades.  
      .col-9.col-lg-5(data-aos="fade-left")
        figure.slideInUp
          img(src='@/assets/curso/t10-i1.jpg', alt='Un computador portátil')
    Separador
    #t_10_1
    .titulo-segundo.color-secundario
      h2 10.1  Objetivos del <i>Ethical hacking</i>
    .row.mb-2.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t10-i2.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El objetivo fundamental del <i>ethical hacking</i> es explorar las vulnerabilidades existentes en los sistemas, haciendo pruebas de intrusión, que sirven para verificar y evaluar la seguridad física y lógica de los sistemas de información, redes de computadoras, aplicaciones <i>web</i>, bases de datos, servidores, etc.
    .row.justify-content-center
      .col-lg-10
        .cajon.color-secundario.p-4(data-aos="fade-right")
          p.mb-0 Esta técnica logra el acceso y demuestra si un sistema es vulnerable o no. Esta información sirve para tomar medidas preventivas en contra de ataques.
    Separador
    #t_10_2
    .titulo-segundo.color-secundario
      h2 10.2 Tipos de pruebas de penetración
    .row.justify-content-center.mb-5
      .col-8.col-lg-2.mb-4.mb-lg-0
        figure.slideInUp
          img(src='@/assets/curso/t10-ic1.svg', alt='icono decorativo')
      .col-lg-10(data-aos="fade-left")
        p.mb-3.text-bold Dentro del ejercicio del <i>ethical hacking</i>, existen tres tipos de pruebas de penetración: caja negra, caja blanca y caja gris.
        p Descubra las particularidades de cada una de estos tres tipos de pruebas de penetración.
    TabsA.color-acento-botones(data-aos="fade-right")
      .tarjeta.color-acento-contenido.p-5(titulo="Prueba de la caja negra")
        .row.justify-content-center.slideInLeft
          .col-6.col-lg-2.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/t10-ic2.svg', alt='icono decorativo')
          .col-lg-10
            p  La caja negra es cuando el <i>ethical hacker</i> no tiene información sobre el objetivo o la red. Esta prueba es la mejor para simular un ataque externo e ignora las amenazas internas.
      .tarjeta.color-acento-contenido.p-5(titulo="Prueba de la caja blanca")
        .row.justify-content-center.slideInLeft
          .col-6.col-lg-2.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/t10-ic3.svg', alt='icono decorativo')
          .col-lg-10
            p  La prueba de caja blanca es lo opuesto a una caja negra. El <i>ethical hacker</i>  tiene pleno conocimiento de la red, los sistemas informáticos y la infraestructura. La prueba de la caja blanca permite una prueba exhaustiva del entorno.
      .tarjeta.color-acento-contenido.p-5(titulo="Prueba de la caja gris")
        .row.justify-content-center.slideInLeft
          .col-6.col-lg-2.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/t10-ic4.svg', alt='icono decorativo')
          .col-lg-10
            p La prueba de caja gris, simula una amenaza interna. El <i>ethical hacker</i> recibe información parcial sobre la red y los sistemas informáticos, como configuraciones de IP, listas de correo electrónico, nombres de computadora u otra información que una persona con datos privilegiados tendría de manera realista.

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
