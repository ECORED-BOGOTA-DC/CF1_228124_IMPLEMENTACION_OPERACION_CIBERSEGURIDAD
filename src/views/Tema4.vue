<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Marco legal
    .row.mb-5.slideInUp
      .col-lg-7(data-aos="fade-right")
        p.mb-3.text-bold  El CONPES 3701, es la base de la legislación relacionada con esta temática. La Comisión Nacional Digital y de Información Estatal, fue creada a través del Decreto 32 de 2013 del Ministerio de Tecnologías de la Información y las Comunicaciones. 
        p.mb-3  Petición que tiene el objeto 34 de encargarse de la coordinación y orientación superior del desarrollo de funciones y servicios públicos que tienen que ver con el manejo de la información pública, el uso de infraestructura tecnológica de la información, y la utilidad de la información en el Estado colombiano.
        p.mb-3  Visite el recurso que le presentamos a continuación y conozca más y mejor sobre el marco legal en procesos de ciberseguridad y seguridad de la información. <b>Una vez más le insistimos en tomar nota de los aspectos más relevantes.</b>
      .col-lg-5(data-aos="fade-left")
        figure.slideInUp
          img(src='@/assets/curso/t4-i1.jpg', alt='imagen decorativa')
    TabsA.color-acento-botones(data-aos="fade-right")
      .tarjeta.color-acento-contenido.p-5(titulo="Proyectos")
        .h4 Proyectos
        .row
          .col-lg-5.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/t4-t1.png', alt='imagen decorativa')
          .col-lg-7
            ul.lista-ul
              li.d-flex
                i.fas.fa-check
                p <b>Organizativo:</b> se refiere a la afección que se puede generar a la estructura de la organización el método de trabajo que utilicemos o similares.
              li.d-flex
                i.fas.fa-check
                p <b>Técnico:</b> se relaciona mucho con su nombre ya que son proyectos con un contenido técnico significativo. Por ejemplo, securizar la página <i>web</i> corporativa.
              li.d-flex
                i.fas.fa-check
                p <b>Regulatorio:</b> son proyectos enfocados a alinear algún aspecto concreto de la organización a alguna norma o regulación. Por ejemplo, los proyectos encaminados al cumplimiento de la LOPD y el RDLOPD.
      .tarjeta.color-acento-contenido.p-5(titulo="Asesorías")
        .h4 Asesorías 
        .row
          .col-lg-5.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/t4-t2.png', alt='imagen decorativa')
          .col-lg-7
            p Se llevan a cabo después de un diagnóstico previo y su finalidad es brindar apoyo técnico en la toma de decisiones, relacionadas con las vulnerabilidades existentes, en materia de seguridad.
      .tarjeta.color-acento-contenido.p-5(titulo="Servicios outsourcing")
        .h4 Servicios <i>outsourcing</i> 
        .row
          .col-lg-5.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/t4-t3.png', alt='Mujer sentada frente a computador')
          .col-lg-7
            p Para una organización es importante contar con un agente especializado en seguridad, que proteja y prevenga los ataques informáticos.
      .tarjeta.color-acento-contenido.p-5(titulo="Contratación")
        .h4 Contratación
        .row
          .col-lg-5.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/t4-t4.png', alt='persona firmando un contrato')
          .col-lg-7
            p Regirse por la legislación favorece que en los contratos independientes, se asegure la información con cláusulas de confidencialidad y no divulgación.
      .tarjeta.color-acento-contenido.p-5.head-it(titulo="Freelance")
        .h4 <i>Freelance</i>
        .row
          .col-lg-5.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/t4-t5.png', alt='Hombre sentado frente a un computador')
          .col-lg-7
            p Es la persona que trabaja de forma independiente, ofreciendo sus servicios a empresas u otras personas, y quien maneja su tiempo y su forma de trabajar de manera autónoma. En ciberseguridad un <i>Freelance</i> puede ayudar a complementar la seguridad digital teniendo en cuenta, entre otras, hacer copias de seguridad, trabajar con antivirus, usar escritorio virtual, proteger conexión a internet, reforzar seguridad de la <i>web</i>.
      .tarjeta.color-acento-contenido.p-5(titulo="Acuerdos de confidencialidad")
        .h4 Acuerdos de confidencialidad
        .row
          .col-lg-5.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/t4-t6.png', alt='Hombre sentado frente a un computador')
          .col-lg-7
            p Contrato de confidencialidad: cuando es necesario compartir la información de la organización, habrá que establecer las medidas de protección aplicables, por ejemplo: realizar una clasificación o utilizar técnicas de cifrado.

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
