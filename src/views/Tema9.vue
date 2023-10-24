<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 9
      h1 Riesgos
    .row.mb-2.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t9-i1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Se conoce como riesgo a toda posibilidad de sufrir una afectación por causa de factores externos o internos. El riesgo es un peligro latente que puede o no materializarse. En el orden informático y de ciberseguridad, los riesgos no son distintos. Contemplan las vulnerabilidades y las amenazas y pueden ser controlados, tratados, mitigados, prevenidos y, en algunos casos, eliminados.
    p.mb-5  A continuación, se mencionan los tipos de riesgos de ciberseguridad más comunes; conózcalos y tome nota atenta de ellos: 
    .row.justify-content-center
      .col-lg-10(data-aos="fade-right")
        AcordionA(tipo="a" clase-tarjeta="tarjeta color-acento-contenido")
          .row(titulo="Malware")
            .col-md-1.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/t9-ic1.svg', alt='imagen decorativa')
            .col-md-11
              p.mb-3  Se refiere a todos aquellos archivos que contaminan y pueden comprometer tanto la seguridad, como la utilidad y preservación del equipo.
          .row(titulo="Phishing o usurpación de identidad")
            .col-md-1.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/t9-ic2.svg', alt='imagen decorativa')
            .col-md-11
              p.mb-3  Se hacen una serie de actos fraudulentos, ya sea a través de correos o mensajes de entidades reconocidas para generar confianza.
          .row(titulo="Criptomining")
            .col-md-1.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/t9-ic3.svg', alt='imagen decorativa')
            .col-md-11
              p.mb-3  Es un delito en el cual se dirigen ataques a las cuentas, sea un usuario o empresa.
          .row(titulo="Ataques DDoS")
            .col-md-1.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/t9-ic4.svg', alt='imagen decorativa')
            .col-md-11
              p.mb-3 El término de DDoS se debe a su nombre en inglés (Distributed Denial of Service) la cual tiene el objetivo de ejecutar un ataque de denegación de servicio distribuido.
          .row(titulo="Ransomware")
            .col-md-1.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/t9-ic5.svg', alt='imagen decorativa')
            .col-md-11
              p.mb-3 Consiste en un sistema malicioso el cual restringe o prohíbe el acceso a los datos confidenciales.
          .row(titulo="Botnets")
            .col-md-1.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/t9-ic6.svg', alt='imagen decorativa')
            .col-md-11
              p.mb-3 Se trata de una amenaza para los ordenadores actuando a través de troyanos que se filtran en el mismo para así enviar información como <i>spam</i>.
          .row(titulo="Inyección SQL")
            .col-md-1.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/t9-ic7.svg', alt='imagen decorativa')
            .col-md-11
              p.mb-3 Se aprovecha la vulnerabilidad de la validación de acceso a un sitio o aplicación, con la finalidad de infiltrarse en su base de datos para obtener información de los usuarios.
    Separador
    #t_9_1
    .titulo-segundo.color-secundario
      h2 9.1 Niveles de riesgo
    .row.mb-2.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t9-i2.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Los riesgos, suelen estar tipificados según su nivel de probabilidad, de impacto y de daño potencial. La clasificación de los riesgos en niveles, es un elemento que favorece la previsión de los mismos, el tratamiento y control que se les podría aplicar y las demás acciones de actualización y monitoreo de los sistemas de información.
    p.mb-5(data-aos="fade-right")  Estudie, en el siguiente recurso, los niveles en los que se clasifican los riesgos:
    TabsA.color-acento-botones(data-aos="fade-left")
      .tarjeta.color-acento-contenido.p-5(titulo="Nivel bajo")
        .row.justify-content-center
          .col-9.col-lg-4.mb-4.mb-lg-0
            figure.slideInUp
              img(src='@/assets/curso/t9-t1.png', alt='icono decorativo')
          .col-lg-8
            p.mb-3.slideInLeft  Tiene que ver con los ataques a la imagen, menosprecio, así como errores y fallos.

      .tarjeta.color-acento-contenido.p-5(titulo="Nivel medio")
        .row.justify-content-center
          .col-9.col-lg-4.mb-4.mb-lg-0
            figure.slideInUp
              img(src='@/assets/curso/t9-t2.png', alt='icono decorativo')
          .col-lg-8
            p.mb-3.slideInLeft Se incrementan las capacidades ofensivas siendo ésta, la principal amenaza de este nivel. Además de la desfiguración de páginas <i>web</i> y la manipulación de información. 
      .tarjeta.color-acento-contenido.p-5(titulo="Nivel alto")
        .row.justify-content-center
          .col-9.col-lg-4.mb-4.mb-lg-0
            figure.slideInUp
              img(src='@/assets/curso/t9-t3.png', alt='icono decorativo')
          .col-lg-8
            p.mb-3.slideInLeft Se habla de la toma de control de los sistemas como el principal riesgo de este nivel, sin dejar a un lado el robo y publicación o venta de información sustraída, los ciberdelitos y la suplantación. 
      .tarjeta.color-acento-contenido.p-5(titulo="Nivel muy alto")
        .row.justify-content-center
          .col-9.col-lg-4.mb-4.mb-lg-0
            figure.slideInUp
              img(src='@/assets/curso/t9-t4.png', alt='icono decorativo')
          .col-lg-8
            p.mb-3.slideInLeft Puede generar la interrupción de los recursos IT y de otros servicios, con las graves consecuencias que puede tener para una organización, y la filtración de datos.
      .tarjeta.color-acento-contenido.p-5(titulo="Nivel crítico")
        .row.justify-content-center
          .col-9.col-lg-4.mb-4.mb-lg-0
            figure.slideInUp
              img(src='@/assets/curso/t9-t5.png', alt='icono decorativo')
          .col-lg-8
            p.mb-3.slideInLeft Se habla del ciberespionaje como la gran amenaza de este nivel. El ataque proviene de APTs, campañas de <i>malware</i>, interrupción de servicios, compromiso de sistemas de control industrial, incidentes especiales, etc.
    Separador
    #t_9_2
    .titulo-segundo.color-secundario
      h2 9.2 Características, impacto y análisis de riesgos
    .row.mb-2.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t9-i3.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La existencia de vulnerabilidades y posibles fallas en los sistemas informáticos, facilitan que la información pueda ser empleada maliciosamente para conseguir ventajas de ella o que sea manipulada para afectar la infraestructura tecnológica, física y del entorno.
    p.mb-5(data-aos="fade-right")  Le mostraremos, a continuación, aspectos importantes sobre los riesgos, su impacto y probabilidad, su análisis y tratamiento. Además, algunos conceptos nuevos que le afianzarán en su saber sobre ciberseguridad.
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.color-primario.p-3(data-aos="fade-right")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/t9-ic8.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  .h3.mb-1 Características, impacto y análisis de riesgos
                  p.text-small A continuación, se ha diseñado una guía sobre los riesgos, su impacto y probabilidad, su análisis y tratamiento. <b>Descarga la siguiente infografía.</b> 
                .col-sm-auto
                  a.boton.color-secundario(:href="obtenerLink('/downloads/infografia_ciberseguridad_Caracteristicas.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    .row.justify-content-center
      .col-lg-10(data-aos="fade-left")
        .tarjeta.color-secundario.p-4
          .row
            .col-lg-2
              figure
                img.nW(src="@/assets/curso/t9-ic9.svg")
            .col-lg-10
              p.mb-3  Para estudiar a profundidad las técnicas de tratamiento de riesgos y afianzarse en la adopción de controles de seguridad, se recomienda hacer búsqueda de la norma <b>ISO / IEC 27005</b> y la norma <b>ISO 31000:2018.</b>
              .row
                .col-lg-8
                  a.anexo.mb-4.mb-lg-0(href="https://www.iso.org/obp/ui#iso:std:iso:31000:ed-2:v1:es" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p <b>Enlace <i>web</i>.</b> https://www.iso.org/obp/ui#iso:std:iso:31000:ed-2:v1:es

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
