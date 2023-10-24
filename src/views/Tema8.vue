<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Amenazas y vulnerabilidades
    .row.mb-2.justify-content-center
      .col-lg-10(data-aos="fade-right")
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5.slideInUp
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t8-i1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.shadow-box
            p.mb-0 Las vulnerabilidades y amenazas informáticas se relacionan con los riesgos que se pueden generar para los sistemas y la información de una organización. Este fenómeno es cada vez más frecuente ya que, en la actualidad, existe una alta dependencia digital y de los servicios TI.
    p.mb-5(data-aos="fade-down")  En el siguiente recurso, le presentamos algunas definiciones claves que favorecen la asimilación y conceptualización en lo referente a amenazas y vulnerabilidades informáticas.
    TabsB.color-acento-contenido(data-aos="fade-left")
      .py-4.py-md-5(titulo="Amenazas" :icono="require('@/assets/curso/t8-ico1.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Amenazas
            p Cuando se habla de amenaza informática, se está haciendo referencia al aprovechamiento de la vulnerabilidad que se presenta para atacar o invadir un sistema informático.
          .col-md-6
            figure.slideInLeft
              img(src='@/assets/curso/t8-i2.jpg', alt='mujer sentada frente a copotador recibiendo señal de alerta')
      .py-4.py-md-5(titulo="Externas e internas" :icono="require('@/assets/curso/t8-ico2.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Externas e internas
            p Las amenazas informáticas para las organizaciones, generalmente, se adquieren mediante ataques; no obstante, hay otros tipos de amenazas como, por ejemplo, las amenazas internas (robos de información o uso inadecuado de los sistemas).
          .col-md-6
            figure.slideInLeft
              img(src='@/assets/curso/t8-i2_1.jpg', alt='hombre sentado frente a multiples pantalla de computadores')
      .py-4.py-md-5(titulo="Vulnerabilidades" :icono="require('@/assets/curso/t8-ico3.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Vulnerabilidades
            p Se relaciona con la debilidad de un sistema de información que pone en riesgo la seguridad de la misma. Los ciberdelincuentes aprovechan las vulnerabilidades de los sistemas informáticos (por ejemplo, de los sistemas operativos) para poder ingresar en los mismos y ejecutar actividades ilegales, robar información sensible o interrumpir su funcionamiento.
          .col-md-6
            figure.slideInLeft
              img(src='@/assets/curso/t8-i2_2.jpg', alt='hombre sentado frente a multiples pantalla de computadores')
      .py-4.py-md-5(titulo="Actualización de sistemas de protección" :icono="require('@/assets/curso/t8-ico4.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Actualización de sistemas de protección
            p Hablar de vulnerabilidades, es hablar de las principales causas y razones por las cuales una empresa u organización puede llegar a ser víctima de ataques de orden informático, en contra de sus sistemas. Por ello, se recomienda la actualización permanente a las últimas versiones disponibles de las aplicaciones informáticas, los sistemas de protección y los sistemas operativos. Esto es fundamental ya que tales actualizaciones, contienen múltiples correcciones y ajustes sobre vulnerabilidades ya descubiertas.
          .col-md-6
            figure.slideInLeft
              img(src='@/assets/curso/t8-i2_3.jpg', alt='hombre sentado frente a multiples pantalla de computadores')
    Separador
    #t_8_1
    .titulo-segundo.color-secundario
      h2 8.1 Características y tipos de amenazas y vulnerabilidades
    .row.justify-content-center.mb-5
      .col-8.col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure.slideInLeft
          img(src='@/assets/curso/t8-ic1.svg', alt='imagen decorativa')
      .col-lg-9(data-aos="fade-left")
        p.mb-3  En términos informáticos y organizacionales, tanto las amenazas y las vulnerabilidades son propias de los sistemas de una compañía y esto la hace siempre susceptible. <b>Las amenazas y vulnerabilidades atentan contra la seguridad de un sistema de información y exponen la seguridad de la información</b> frente a los ataques que comprenden la integridad, disponibilidad o confidencialidad de la misma.
        p.mb-3  El principal tipo de amenaza que tiene el sistema de información de cualquier organización es la amenaza de <i>malware</i>; los programas maliciosos o inseguros son una de las mayores ciberamenazas a las que se enfrentan las organizaciones. <b>Dentro del <i>malware</i> se encuentran las siguientes amenazas:</b>
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        ImagenInfografica.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/t8-info1.svg', alt='infografia descriptiva malware')
          .tarjeta.color-secundario.p-3(x="9%" y="52%")
            p Los virus informáticos son los que se instalan en un dispositivo con el fin de proporcionar dificultades en su funcionamiento. 
          .tarjeta.color-secundario.p-3(x="25%" y="88%")
            p Este es uno de los <i>malware</i> más comunes que infectan los equipos y sistemas de una empresa.
          .tarjeta.color-secundario.p-3(x="50%" y="100%")
            p Los troyanos son instalados en un equipo y pasan desapercibidos para el usuario.
          .tarjeta.color-secundario.p-3(x="75%" y="88%")
            p Su función es encriptar toda la información de la organización, interrumpiendo el acceso a los datos y los sistemas y se pide un rescate para poder liberar la información.
          .tarjeta.color-secundario.p-3(x="92%" y="54%")
            p Son instalados a través de troyanos y su función es robar datos de acceso a plataformas <i>web</i>, sitios bancarios y similares.
    Separador
    #t_8_2
    .titulo-segundo.color-secundario
      h2 8.2 Vulnerabilidades del sistema
    .row.justify-content-center
      .col-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/t8-i3.svg', alt='imagen decorativa')
      .col-lg-8(data-aos="fade-left")
        p.mb-3.text-bold(data-aos="fade-up")  De manera frecuente, tanto los sistemas informáticos como las aplicaciones informáticas, suelen tener algún tipo de error en su diseño, o en su estructura; incluso es altamente frecuente que presenten fallas en su código, dando comienzo o cabida a cualquier vulnerabilidad.
        p.mb-3(data-aos="fade-up")  Siempre que exista un error, incluso si este no es notorio o grande, será posible generar algún tipo de amenaza en los sistemas y sobre la información de las organizaciones, favoreciendo así, ataques tanto externos como internos.
        p.mb-3(data-aos="fade-up")  A continuación, le contamos dónde suelen presentarse las principales vulnerabilidades:
        ul.lista-ul
          li.d-flex
            i.fas.fa-check
            p.mb-0  Fallas de configuración 
          li.d-flex
            i.fas.fa-check
            p.mb-0 Fallas en la gestión de recursos
          li.d-flex
            i.fas.fa-check
            p.mb-0 Fallas en los sistemas de validación
          li.d-flex
            i.fas.fa-check
            p.mb-0 Errores que generan el acceso a directorios
          li.d-flex
            i.fas.fa-check
            p.mb-0 Errores en la gestión y asignación de permisos
    Separador
    #t_8_3
    .titulo-segundo.color-secundario
      h2 8.3 Amenazas de ataques de denegación de servicio
    .row
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p.mb-5.text-bold  Cuando se habla de ataque por denegación de servicio distribuido (DDoS), se logra establecer que este, se genera en el momento en que el servidor recibe demasiadas solicitudes o peticiones de acceso.
        .cajon.color-secundario.p-4(data-aos="flip-up")
          p.mb-0  Esta situación de sobredemanda en solicitudes al servidor es la razón por la cual se presenta un colapso del sistema, provocando que el servidor se abata o que alcance un funcionamiento incorrecto, por ejemplo, acceso lento o rebote de mensajes de errores.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/t8-i4.jpg', alt='imagen decorativa')
    Separador
    #t_8_4
    .titulo-segundo.color-secundario
      h2 8.4 Vulnerabilidades producidas por contraseñas
    .row.justify-content-center
      .col-lg-10(data-aos="fade-down")
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t8-i5.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.shadow-box
            p.mb-3 No tener contraseñas seguras, que sean difíciles de descifrar, genera vulnerabilidades en los sistemas, ya que facilita el robo, la modificación o eliminación de información, cambiar configuraciones si disponen de los privilegios apropiados o, incluso, apagar equipos.
            p.mb-0.text-bold La creación de contraseñas seguras es una de las claves para incrementar el nivel de ciberseguridad de las empresas.
    Separador
    #t_8_5
    .titulo-segundo.color-secundario
      h2 8.5 Vulnerabilidades producidas por usuarios
    .row.justify-content-center.mb-5
      .col-8.col-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/t8-ic3.svg', alt='imagen decorativa')
      .col-lg-10(data-aos="fade-left")
        p.mb-3  Los ataques informáticos suelen tener como causa principal, el uso no adecuado de los usuarios. Cuando se conceden privilegios o permisos que no son usados pertinentemente, se pueden generar accesos de los usuarios a opciones, tanto de configuración como de administración, para los cuales no se encuentran preparados.
        p Visite el recurso que se muestra a continuación, en él se presentan algunos aspectos que debe tener en cuenta, relacionados con las vulnerabilidades producidas por usuarios:
    TabsC.color-primario(data-aos="fade-right")
      .py-3.py-md-4(titulo="Del error a la amenaza")
        .row 
          .col-md-6
            figure.slideInLeft
              img(src='@/assets/curso/t8-t1.jpg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            .h4 Del error a la amenaza
            p El uso inadecuado de los sistemas y/o de sus funciones, posibilita cometer algunos errores que llegan a convertirse en amenazas para la empresa u organización.
      .py-3.py-md-4(titulo="Error del usuario, vulnerabilidad constante")
        .row 
          .col-md-6
            figure.slideInLeft
              img(src='@/assets/curso/t8-t2.jpg', alt='usuario frente al pc aparentemente preocupado')
          .col-md-6.mb-4.mb-md-0
            .h4 Error del usuario, vulnerabilidad constante
            p El error humano es otra causa de riesgos en ciberseguridad. La persona siempre tiene el riesgo de cometer un error que pueda generar una vulnerabilidad, que genere una amenaza informática.
      .py-3.py-md-4(titulo="Necesidad de formación en ciberseguridad")
        .row 
          .col-md-6
            figure.slideInLeft
              img(src='@/assets/curso/t8-t3.jpg', alt='usuario frente al pc aparentemente preocupado')
          .col-md-6.mb-4.mb-md-0
            .h4 Necesidad de formación en ciberseguridad
            p Otra razón por la cual se generan algunas vulnerabilidades, es por la falta de formación en ciberseguridad, que se evidencia en malas prácticas, en caer en engaños publicitarios maliciosos, en la apertura de correos o información fraudulenta y eventos similares.
      .py-5.py-md-4(titulo="Phishing y otras amenazas")
        .row 
          .col-md-6
            figure.slideInLeft
              img(src='@/assets/curso/t8-t4.jpg', alt='imagen decorativa')
          .col-md-6.mb-4.mb-md-0
            .h4 <i>Phishing</i> y otras amenazas
            p Todas las gestiones o acciones equívocas, llegan a ser una amenaza de potenciales ataques; entre los más comunes está el <i>phishing</i> (suplantación de identidad) u otros conexos o relacionados.
    Separador
    #t_8_6
    .titulo-segundo.color-secundario
      h2 8.6 Otras amenazas informáticas
    .row.mb-2.justify-content-center
      .col-lg-10(data-aos="fade-left")
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t8-i6.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.shadow-box
            p.mb-3 Se conocen otras amenazas informáticas que afectan a las empresas como los ataques por inyección <b>SQL</b>, que afectan a servidores de bases de datos empresariales, red de equipos <i>zombies</i>, ataques MITM <i>(man in the middle)</i>, etc.
    p.mb-5(data-aos="fade-right")  Estas son algunas particularidades que usted debe conocer y tener en cuenta, en lo referente a amenazas informáticas diversas:
    TabsC.color-primario(data-aos="fade-right")
      .py-3.py-md-4(titulo="Ataques innovadores, ciberseguridad dinámica")
        .row 
          .col-md-6
            figure.slideInLeft
              img(src='@/assets/curso/t8-t5.jpg', alt='imagen decorativa')
          .col-md-6.mb-4.mb-md-0
            .h4 Ataques innovadores, ciberseguridad dinámica
            p La ciberdelincuencia no para y, por lo general, buscan nuevas formas de atacar, infectar y robar información de las organizaciones; es por esto que la ciberseguridad debe ser una actividad flexible y dinámica que se adapte a las nuevas amenazas.
      .py-3.py-md-4(titulo="Eliminación constante de vulnerabilidades")
        .row 
          .col-md-6
            figure.slideInLeft
              img(src='@/assets/curso/t8-t6.jpg', alt='imagen decorativa')
          .col-md-6.mb-4.mb-md-0
            .h4 Eliminación constante de vulnerabilidades
            p Las vulnerabilidades exponen a las organizaciones frente a las amenazas informáticas. Entonces, es importante enfocarse en eliminar vulnerabilidades, como una de las principales acciones de la ciberseguridad para reducir las amenazas informáticas.
      .py-3.py-md-4(titulo="Desde el exterior")
        .row 
          .col-md-6
            figure.slideInLeft
              img(src='@/assets/curso/t8-t7.jpg', alt='imagen decorativa')
          .col-md-6.mb-4.mb-md-0
            .h4 Desde el exterior
            p Son múltiples los tipos y maneras de vulnerabilidades y/o amenazas informáticas. La mayoría de estas amenazas y/o vulnerabilidades, tienen origen en el exterior, como por ejemplo el <i>malware</i> o los ataques DDoS.
      .py-3.py-md-4(titulo="Desde el interior")
        .row 
          .col-md-6
            figure.slideInLeft
              img(src='@/assets/curso/t8-t8.jpg', alt='imagen decorativa')
          .col-md-6.mb-4.mb-md-0
            .h4 Desde el interior
            p Otras amenazas o vulnerabilidades tienen su origen al interior de los sistemas y suelen ser ocasionadas por los mismos usuarios o colaboradores de las empresas u organizaciones, entre los más comunes están: los robos, los accesos con privilegios incorrectos o, simplemente, errores humanos.

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
