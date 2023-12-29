<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentos de redes y <i>networking</i>
    .row.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.custom-cardBlock.slideInUp(data-aos="fade-right")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t1-i1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Para dar comienzo a este recorrido formativo por los #[b fundamentos de seguridad digital y los análisis de riesgos], presentamos algunos conceptos claves que orientarán la asimilación de los contenidos. Preste toda su atención y disponibilidad para su estudio.
    Separador
    #t_1_1
    .titulo-segundo.color-secundario
      h2 1.1 Conceptos
    .row.mb-5(data-aos="fade-right")
      .col-auto.col-lg-2.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/t1-ic1.svg', alt='icono decorativo')
      .col-lg-10
        p.mb-3 Una red de computadoras es <b>un conjunto de ordenadores y otros dispositivos que se conectan entre sí,</b> tanto de manera alámbrica, es decir por cables, o inalámbricas, o sea <i>wifi</i>, para intercambiar información y compartir recursos.
    .row.justify-content-center
      .col-8.col-lg-4
        .nav-holder.align-items-center(data-aos="flip-up")
          img(src="@/assets/curso/t1-c1.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Información para cada propósito
              p.text-center Las redes informáticas tienen la capacidad de dar la información para cada propósito de negocios, entretenimiento e investigación.

      .col-8.col-lg-4
        .nav-holder.align-items-center.color2(data-aos="flip-up")
          img(src="@/assets/curso/t1-c2.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Conexión unificada
              p.text-center También da la posibilidad de adecuar una única conexión a Internet en varios ordenadores.

      .col-8.col-lg-4
        .nav-holder.align-items-center(data-aos="flip-up")
          img(src="@/assets/curso/t1-c3.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Intercambio de información y dispositivos
              p.text-center La red informática tiene la habilidad de compartir impresora y otros periféricos, además de enviar y recibir mensajes y pasar archivos a otros ordenadores sin necesitar de un cd, memoria USB u otro elemento.
    Separador
    #t_1_2
    .titulo-segundo.color-secundario
      h2 1.2 Características
    .row.mb-5(data-aos="fade-right")
      .col-auto.col-lg-2.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/t1-ic2.svg', alt='icono decorativo')
      .col-lg-10
        p.mb-3.text-bold En este punto, las características hacen referencia a los elementos que componen una red: <i>host, switch, router, servidor, firewall,</i> etc.  
        p.mb-3 En el siguiente recurso, le presentamos las topologías de red más importantes; conozca y asimile cada una de ellas:
    TabsA.color-acento-botones(data-aos="fade-left")
      .tarjeta.color-acento-contenido.p-5(titulo="Punto a punto")
        .row.justify-content-center
          .col-auto.col-lg-3.mb-4.mb-lg-0
            figure.slideInLeft
              img(src='@/assets/curso/t1-t1.png', alt='icono decorativo')
          .col-lg-9
            p.mb-3 Cuando se habla de la topología, se está haciendo referencia al enlace constante entre dos puntos finales. Esta topología, denominada punto a punto conmutado, es básicamente el modo más tradicional de la telefonía básica. El valor que tiene una red permanente de punto a punto, está relacionado con el proceso de comunicación directo y sin obstáculos entre los puntos finales. El valor de una conexión punto-a-punto a demanda, es proporcional al número de pares posibles de abonados y se ha denominado como la ley de Metcalfe.
      .tarjeta.color-acento-contenido.p-5(titulo="Topología en bus")
        .row.justify-content-center
          .col-auto.col-lg-3.mb-4.mb-lg-0
            figure.slideInLeft
              img(src='@/assets/curso/t1-t2.png', alt='icono decorativo')
          .col-lg-9
            p.mb-3  Cuando se hace referencia a la topología de bus, hay que tener sabido que todos los equipos están conectados a un circuito común. Allí, toda la información que sea enviada desde un equipo hasta otro, viajará de manera directa o indirecta, mientras exista un controlador que enrute los datos al destino indicado. La información será procesada por el cable en ambas direcciones y lo hará a una velocidad aproximada de 10/100 Mbps y tendrá en sus dos extremos una resistencia (terminador). Es posible conectar al bus una buena cantidad de computadores o equipos y, si alguno de los computadores llega a fallar, la comunicación se podrá mantener, pero, en cambio, si la falla se presenta en el bus, entonces no sucederá lo mismo. Existen varios tipos de cableado, entre los que se puede encontrar el cableado coaxial, el par trenzado o la denominada fibra óptica. En una topología de bus, cada uno de los equipos o computadores está conectado a un segmento común de cable de red.
      .tarjeta.color-acento-contenido.p-5(titulo="La topología en estrella")
        .row.justify-content-center
          .col-auto.col-lg-3.mb-4.mb-lg-0
            figure.slideInLeft
              img(src='@/assets/curso/t1-t3.png', alt='icono decorativo')
          .col-lg-9
            p.mb-3  Esta topología reduce la posibilidad de que la red falle, conectando todos los computadores a un nodo central. Cuando se pone a una red basada en la topología estrella, este concentrador central vuelve a enviar todas las transmisiones recibidas de cualquier computador periférico a todos los computadores periféricos de la red; algunas veces, incluso, al computador que lo envió. Todos los computadores o equipos periféricos se pueden comunicar con los demás recibiendo del computador central solamente. Una falla en la línea de conexión de cualquier computador con el computador central provocaría el aislamiento de ese nodo respecto a los demás, pero el resto de los sistemas permanecería intacto.
      .tarjeta.color-acento-contenido.p-5(titulo="Topología en anillo")
        .row.justify-content-center
          .col-auto.col-lg-3.mb-4.mb-lg-0
            figure.slideInLeft
              img(src='@/assets/curso/t1-t4.png', alt='icono decorativo')
          .col-lg-9
            p.mb-3  En la topología en anillo, cuando el nodo central es pasivo, el nodo origen ha de tener la capacidad de tolerar un eco de su transmisión. Una red, en estrella activa, tiene un nodo central activo que, generalmente, cuenta con los medios necesarios para prevenir problemas afines al eco.  
            p.mb-3  La red en anillo, es básicamente una topología de red a través de la cual, cada estación tiene una única conexión de entrada y otra de salida. Cada estación cuenta con un receptor y un transmisor que tiene como función ser traductor, es decir, que pasa la señal a la estación siguiente. A través de un #[i token], conocido también como testigo. La comunicación, en este tipo de red, es permitida; es así como se logran evitar las probables pérdidas de información por colisiones.
      .tarjeta.color-acento-contenido.p-5(titulo="La topología en árbol")
        .row.justify-content-center
          .col-auto.col-lg-3.mb-4.mb-lg-0
            figure.slideInLeft
              img(src='@/assets/curso/t1-t5.png', alt='icono decorativo')
          .col-lg-9
            p.mb-3  A la topología en árbol también se le conoce como topología jerárquica y se le puede definir como la colección de redes, en estrella, que tiene un orden jerárquico. Esta tipología de árbol cuenta con nodos periféricos individuales que requieren tanto transmitir como hacer recepción, únicamente, de otro nodo; y no se requiere, que actúen como repetidores o regeneradores. La función del nodo central es posible distribuirla, de manera contraria a como se hace en las redes en estrella.
            p.mb-3  Como en las redes en estrella convencionales, los nodos individuales podrían permanecer aislados de la red por un fallo puntual en la ruta de conexión del nodo.
      .tarjeta.color-acento-contenido.p-5(titulo="Topología en malla")
        .row.justify-content-center
          .col-auto.col-lg-3.mb-4.mb-lg-0
            figure.slideInLeft
              img(src='@/assets/curso/t1-t6.png', alt='icono decorativo')
          .col-lg-9
            p.mb-3  La topología de red mallada tiene como finalidad tener conectado cada nodo, a todos los nodos. De esta manera es posible dirigir los mensajes de un nodo a otro por diferentes caminos. Si la red de malla está totalmente conectada, no puede existir ninguna clase de interrupción en las comunicaciones. Cada servidor tiene sus propias conexiones con todos los demás servidores.
      .tarjeta.color-acento-contenido.p-5(titulo="Topología híbrida o mixta")
        .row.justify-content-center
          .col-auto.col-lg-3.mb-4.mb-lg-0
            figure.slideInLeft
              img(src='@/assets/curso/t1-t7.png', alt='icono decorativo')
          .col-lg-9
            p.mb-3 En esta topología las redes pueden utilizar diferentes tipologías para conectarse, como por ejemplo en estrella. La topología híbrida es una de las más comunes y se adquiere de la unión de varios tipos de topologías de red, de aquí el nombre de híbridas. Como, por ejemplo: en árbol, estrella-estrella, bus-estrella, etc.
    Separador
    #t_1_3
    .titulo-segundo.color-secundario
      h2 1.3 Tipos de redes
    p.mb-5(data-aos="fade-right")  Las redes informáticas o de ordenadores se pueden clasificar de varias formas o tipos diferentes. Aquí le mostramos los tipos de redes más importantes y destacados y que, además, son los más usados:
    .row.justify-content-center
      .col-auto.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/t1-i2.jpg', alt='icono decorativo')
      .col-lg-6(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta color-acento-contenido")
          .row(titulo="LAN (red de área local)")         
            .col-md-11
              p  Su finalidad se relaciona con la unión de varios ordenadores y dispositivos conectados a un servidor.
          .row(titulo="WLAN (red de área local inalámbrica)")         
            .col-md-11
              p Una WLAN tiene la misma función que una LAN, pero las conexiones se realizan de forma inalámbrica.     
          .row(titulo="WAN (red de área amplia)")         
            .col-md-11
              p Son las redes de mayor alcance, como lo es la red global de redes, Internet.  
          .row(titulo="MAN (red de área metropolitana)")         
            .col-md-11
              p Las MAN suelen ser más grandes que las LAN, tienen como función conectar distintas áreas alejadas entre sí. Son redes de tamaño intermedio.
          .row(titulo="PAN (red de área personal)")         
            .col-md-11
              p Una PAN sirve a una persona. Se utiliza generalmente para uso personal o individual cuando se requiere, por ejemplo, en la oficina o trabajo.
          .row(titulo="SAN (red de área de almacenamiento)")         
            .col-md-11
              p Pueden gestionar una gran cantidad de tráfico. Es una red que forma parte de empresas que trabajan con servidores y quieren mantener un buen rendimiento.
          .row(titulo="CAN (red de área de campus)")         
            .col-md-11
              p Se puede inferir que se encuentra entre una LAN y una MAN. No es tan pequeña como una LAN, pero tampoco es tan grande como una MAN.
          .row(titulo="VPN (red privada virtual)")         
            .col-md-11
              p Una VPN realiza un canal cifrado que mantiene la identidad y las credenciales de acceso de un usuario, así como cualquier dato transferido.
    Separador
    #t_1_4
    .titulo-segundo.color-secundario
      h2 1.4 Modelo OSI
    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="fade-right")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t1-i3.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.shadow-box
            p.mb-0 Teniendo en cuenta que, en general, los conjuntos de protocolos de red se estructuran en capas, la Organización Internacional para la Estandarización (ISO) ha implementado el modelo de referencia de Interconexión de Sistemas Abiertos (OSI) que maneja capas estructuradas. El modelo OSI es el modelo de la interconexión de sistemas abiertos. <b>El modelo OSI está conformado por siete capas para las actividades de red y cada capa tiene asociados uno o más protocolos.</b>
    p.mb-5(data-aos="fade-down")  En la siguiente tabla, entérese de cuáles son esas capas y las especificidades de cada una de ellas:
    .row.justify-content-center
      .col-lg-10(data-aos="fade-left")
        figcaption.customCaption.mb-3 <b>Tabla 1.</b> Modelo de referencia de Interconexión de Sistemas Abiertos

        .tabla-a.mb-2
          table  
            thead.tabla-b__header 
              tr
                th.morado-2(style="width:15%")
                  h5.text-white.mb-0 N° de capa
                th.morado-2(style="width:25%")
                  h5.text-white.mb-0 Nombre de capa
                th.morado-2
                  h5.text-white.mb-0 Descripción
            tbody
              tr.text-center
                td 
                  h4.mb-0 7
                td 
                  h4.mb-0 Aplicación
                td Hace referencia a cada uno de los servicios y/o las aplicaciones de comunicación estándar, que pueden ser manipulados o utilizados por cualquier usuario.

              tr.text-center
                td
                  h4.mb-0 6
                td
                  h4.mb-0 Presentación
                td La presentación corrobora que la información sea transferida hasta el sistema receptor de manera comprensible para el sistema.

              tr.text-center
                td
                  h4.mb-0 5
                td
                  h4.mb-0 Sesión
                td Dirige las conexiones y terminaciones entre los sistemas que operan.

              tr.text-center
                td
                  h4.mb-0 4
                td
                  h4.mb-0 Transporte
                td Manda la transferencia de datos. Así mismo, asegura que los datos recibidos sean idénticos a los transmitidos.

              tr.text-center
                td
                  h4.mb-0 3
                td
                  h4.mb-0 Red
                td Dispone las direcciones de datos y la transferencia entre redes.

              tr.text-center
                td
                  h4.mb-0 2
                td
                  h4.mb-0 Vínculo de datos
                td Dirige la transferencia de datos en el medio de la red.

              tr.text-center
                td
                  h4.mb-0 1
                td
                  h4.mb-0 Física
                td Da conocer las características del <i>hardware</i> de red.

        figcaption Nota: Tomada de la Guía de administración del sistema: servicios IP (2010).
    Separador
    #t_1_5
    .titulo-segundo.color-secundario
      h2 1.5 Protocolo TCP/IP
    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        p.mb-4  TCP/IP son las siglas de las siguientes palabras: <b><i>Transmission Control Protocol/Internet Protocol (Protocolo de control de transmisión/Protocolo de Internet).</i></b>
        .cajon.color-secundario.p-4.mb-4
          p.mb-0  <b>Los protocolos TCP/IP</b> son un conjunto de reglas para formatos de mensajes y procedimientos, que permiten que el <i>hardware</i> y los <i>software</i> de aplicación, intercambien información.
        p.mb-3  Despliegue el recurso que se muestra a continuación para tener un primer acercamiento conceptual a los protocolos TCP/IP y descubra cómo estos se disponen en capas.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/t1-i4.jpg', alt='icono decorativo')
    p.mb-5(data-aos="fade-right")  Los protocolos TCP / IP se puede dar en términos de capas, como se muestra en la siguiente figura. 
    .row.justify-content-center
      .col-lg-11(data-aos="fade-left")
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/t1-info1.svg', alt='infografia de protocolos TCP /IP')
          //--linea 1
          .tarjeta.color-secundario.p-3.shadow-box(x="12%" y="25%")
            p La función la determina la aplicación que sea utilizada, es decir, proporcionar servicios de red que brindan la interfaz con el sistema operativo.
          .tarjeta.color-secundario.p-3.shadow-box(x="29%" y="23%")
            p <b>FTP (<i>File Transfer Protocol</i>):</b> transferencia interactiva de archivos.
          .tarjeta.color-secundario.p-3.shadow-box(x="42%" y="23%")
            p <b>TELNET:</b> inicio de la sesión de forma remota.         
          .tarjeta.color-secundario.p-3.shadow-box(x="55%" y="23%")
            p <b>HTTP (<i>Hypertext Transfer Protocol</i>):</b> transportar archivos que forman las páginas <i>web</i> de la <i>World Wide Web</i>. 
          .tarjeta.color-secundario.p-3.shadow-box(x="67%" y="23%")
            p <b>SMTP (<i>Simple Mail Transfer Protocol</i>):</b>  transmisión de mensajes de correo electrónico y archivos adjuntos.
          .tarjeta.color-secundario.p-3.shadow-box(x="80%" y="23%")
            p <b>DNS (<i>Domain Name System</i>):</b>  intrepidez del nombre de un host a la dirección IP.
          //--linea 2
          .tarjeta.color-secundario.p-3.shadow-box(x="12%" y="48%")
            p Garantiza que los paquetes lleguen sin errores y en secuencia.
          .tarjeta.color-secundario.p-3.shadow-box(x="29%" y="46%")
            p <b>UDP (<i>User Datagram Protocol</i>):</b> crea una transmisión no fiable, o sea, que no está libre de errores.
          .tarjeta.color-secundario.p-3.shadow-box(x="42%" y="46%")
            p <b>TCP (<i>Transmission Control Protocol</i>):</b> forma una transmisión íntegra de datos. Es más complicado ya que contiene detección de errores y formas de recuperar los datos perdidos.
          //--linea 3
          .tarjeta.color-secundario.p-3.shadow-box(x="12%" y="72%")
            p Suministra el paquete de datos (datagrama). <br>Se relacionan algunos protocolos de la siguiente manera:
          .tarjeta.color-secundario.p-3.shadow-box(x="29%" y="69%")
            p <b>IP (<i>Internet Protocol</i>):</b> factor principal de todo el modelo. Se establece para definir la dirección IP, comprobando así la ruta que tiene que seguir el paquete.
          .tarjeta.color-secundario.p-3.shadow-box(x="42%" y="69%")
            p <b>ICMP (<i>Internet Control Message Protocol</i>):</b>  proveer notificaciones y diagnóstico de errores cuando se malogran los datagramas IP.       
          .tarjeta.color-secundario.p-3.shadow-box(x="55%" y="69%")
            p <b>ARP (<i>Address Resolution Protocol</i>)</b> asiste al protocolo IP a guiar los datos solventando la dirección <i>hardware</i> o MAC. 
          .tarjeta.color-secundario.p-3.shadow-box(x="67%" y="69%")
            p <b>RARP (<i>Reverse Address Resolution Protocol</i>):</b>   igual que el ARP pero al revés, o sea, dada la MAC te regresa la IP.
          .tarjeta.color-secundario.p-3.shadow-box(x="80%" y="69%")
            p <b>NAT (<i>Network Address Translation</i>):</b> transforma la dirección IP privada a una pública.
          .tarjeta.color-secundario.p-3.shadow-box(x="93%" y="69%")
            p <b>RIP (<i>Routing Information Protocol</i>):</b> es manejado por los #[i routers] para intercambiar información de las diferentes redes y ordenar con mayor eficacia los paquetes.
          //--linea 4
          .tarjeta.color-secundario.p-3.shadow-box(x="12%" y="94%")
            p Está relacionada con componentes #[i hardware] que serán utilizados para la red y cómo enrutar los datos.
          .tarjeta.color-secundario.p-3.shadow-box(x="29%" y="90%")
            p Su función es gestionar la velocidad de transmisión de datos.
          .tarjeta.color-secundario.p-3.shadow-box(x="42%" y="90%")
            p Vincula el mensaje para conectarlo con la capa de red.       
          .tarjeta.color-secundario.p-3.shadow-box(x="65%" y="90%")
            p Establece la topografía de la <i>web</i> por medio de <i>routers, hubs y switches.</i>
    Separador
    #t_1_6
    .titulo-segundo.color-secundario
      h2 1.6 Protocolos IPv4 e IPv6
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p.mb-3  El <i>Internet Protocol Version 4</i> (IPv4), conocido como el sistema de identificación que usa Internet para enviar información entre los dispositivos, maneja direcciones de 32 <i>bits</i> con hasta 12 caracteres, en cuatro bloques de 3 caracteres, cada bloque. El DNS los convierte en nombres de dominio como 1and1.es. ajustando todos los dígitos.
        .cajon.color-secundario.p-4.mb-5
          p.mb-0  Por otra parte, está el <i>Internet Protocol Version 6</i> (IPv6); su espacio de direcciones es de 128-<i>bits</i>. Este protocolo aumenta el tamaño de la dirección IP de 32 <i>bits</i> a 128 <i>bits</i> para así resistir más niveles en la jerarquía de direccionamiento y un número mayor de nodos direccionables. El diseño del protocolo suma muchos beneficios en seguridad: una mayor capacidad de transmisión, manejo de calidad de servicio y mejora la facilidad de administración.
        p.mb-3  Los siguientes puntos son los beneficios que representa un proceso de transición de IPv4 al IPv6, que es importante tenerlos presentes, al momento de adoptar el nuevo protocolo:
      .col-auto.col-lg-5(data-aos="fade-left")
        figure(data-aos="fade-up")
          img(src='@/assets/curso/t1-i5.jpg', alt='icono decorativo')
    .row.justify-content-center
      .col-lg-10(data-aos="fade-right")
        AcordionA(tipo="a" clase-tarjeta="tarjeta color-acento-contenido")
          .row.justify-content-center(titulo="Más usuarios y mejores servicios")    
            .col-auto.col-lg-1.mb-4.mb-lg-0
              figure(data-aos="fade-up")
                img(src='@/assets/curso/t1-ic3.svg', alt='icono decorativo')
            .col-md-11
              p Podrá tener un mayor número de equipos conectados a la red.  Así mismo, tendrá un proceso técnicamente transparente para los usuarios de la red de comunicaciones y sus distintos servicios. 

          .row.justify-content-center(titulo="Mayor movilidad, mejor seguridad")    
            .col-auto.col-lg-1.mb-4.mb-lg-0
              figure(data-aos="fade-up")
                img(src='@/assets/curso/t1-ic4.svg', alt='icono decorativo')
            .col-md-11
              p Tendrá la posibilidad de incrementar la movilidad de los usuarios al tener un número mayor de direcciones IP para la conectividad. En el mismo sentido, mejorará la seguridad a nivel de direccionamiento IP de la red, en virtud de la arquitectura del nuevo protocolo y sus servicios.

          .row.justify-content-center(titulo="Reducción de costos y más aplicaciones y servicios")    
            .col-auto.col-lg-1.mb-4.mb-lg-0
              figure(data-aos="fade-up")
                img(src='@/assets/curso/t1-ic5.svg', alt='icono decorativo')
            .col-md-11
              p Podrá reducir los costos al implementar la solución de IPv6; en este sentido, los costos podrían ser mayores de no implementarse el nuevo protocolo. Además, se facilitará la aparición de nuevas aplicaciones y servicios sobre una gran variedad de plataformas.

          .row.justify-content-center(titulo="Nuevas tecnologías")    
            .col-auto.col-lg-1.mb-4.mb-lg-0
              figure(data-aos="fade-up")
                img(src='@/assets/curso/t1-ic6.svg', alt='icono decorativo')
            .col-md-11
              p Gran número de direcciones IP para conexiones a Internet con el mundo exterior, facilitando el crecimiento de nuevas tecnologías como el Internet de las cosas, las ciudades inteligentes, redes de sensores, entre otras. 

          .row.justify-content-center(titulo="Amparo tecnológico de los PSI")    
            .col-auto.col-lg-1.mb-4.mb-lg-0
              figure(data-aos="fade-up")
                img(src='@/assets/curso/t1-ic7.svg', alt='icono decorativo')
            .col-md-11
              p Los Proveedores de Servicio de Internet, PSI, tendrán que preparar el proceso de transición de IPv6, mediante la creación de un #[i backbone] nativo de IPv6 que apoye a los clientes en el enrutamiento de las nuevas direcciones IPv6, a fin de garantizar la publicación de servicios y aplicaciones que se consideren pertinentes hacia Internet.
          .row.justify-content-center(titulo="Proveedores de servicio a cargo")    
            .col-auto.col-lg-1.mb-4.mb-lg-0
              figure(data-aos="fade-up")
                img(src='@/assets/curso/t1-ic8.svg', alt='icono decorativo')
            .col-md-11
              p La implementación de IPv6 será un proceso gradual, cuya responsabilidad no será del gobierno, sino del proveedor del servicio de Internet directamente y no deberá generar costos directos.
    Separador
    #t_1_7
    .titulo-segundo.color-secundario
      h2 1.7 Enrutamiento IP
    .row.align-items-center.justify-content-center.mb-0.mb-lg-4
      .col-auto.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/t1-i6.jpg', alt='icono decorativo')
      .col-lg-7(data-aos="fade-left")
        p.mb-3.text-bold(data-aos="fade-up") Acceder a la comunicación e interconectividad de redes, a través de paquetes IP enviados desde un origen a un destino, aprovechando la tecnología con la que cuenta cada <i>router</i>, permite diversas configuraciones y protocolos. 
        p(data-aos="fade-up")  Algunas de sus utilidades son, entre otras, poder hallar redes remotas, conservar la información de enrutamiento actualizada, elegir el mejor camino hacia las redes de destino, poder encontrar un mejor camino nuevo si la ruta actual deja de estar disponible.
    p.mb-5(data-aos="fade-right")  Descubra los tipos de enrutamiento IP que se presentan en el siguiente recurso. Conozca, además, sus ventajas y desventajas. Le sugerimos tomar nota atenta de los aspectos más importantes. ¡Adelante!
    .row.justify-content-center
      .col-8.col-lg-3.mb-5.mb-lg-0
        .objBox
          a(@click="modal1 = true")
            figure(data-aos="flip-up")
              img(src='@/assets/curso/t1-link1.svg', alt='icono decorativo')
          //--.indicador--click(v-if="mostrarIndicador")    
        ModalA(:abrir-modal.sync="modal1")
          .row.align-items-center
            .col-auto.col-lg-2
              figure
                img(src='@/assets/curso/t1-m1.svg', alt='icono decorativo')
            .col-lg-10
              p.mb-3  Acceden a la configuración manual de las tablas de enrutamiento, las tablas no serán modificadas en forma dinámica, no tiene flexibilidad frente a fallas de los enlaces, no son fundamentales las cargas y procesos asociados a un protocolo de descubrimiento de rutas, se establecen fácilmente barreras de seguridad.
              .tabla-a.color-acento-botones
                table
                  caption Nota: Tomada del enrutamiento Ip 2017.
                  thead
                    tr
                      th Ventajas
                      th Desventajas
                  tbody
                    tr
                      td Es muy segura debido a que es configurada manualmente.
                      td Necesita mantenimiento constante.
                    tr
                      td Es muy eficientes en redes pequeñas.
                      td Su utilización en redes grandes generalmente es muy compleja y se necesita de mucho tiempo.
                    tr
                      td Agota muy pocos recursos de sistema y de banda ancha.
                      td No es escalable, ya que no actualiza sus tablas de enrutamiento automáticamente.
      .col-8.col-lg-3
        .objBox
          a(@click="modal2 = true")
            figure(data-aos="flip-up")
              img(src='@/assets/curso/t1-link2.svg', alt='icono decorativo')
          //--.indicador--click(v-if="mostrarIndicador")    
        ModalA(:abrir-modal.sync="modal2")
          .row.align-items-center
            .col-auto.col-lg-2
              figure
                img(src='@/assets/curso/t1-m2.svg', alt='icono decorativo')
            .col-lg-10
              p.mb-3  Se basa en la comunicación, por medio de <i>broadcasts</i>, entre los <i>routers</i>. Para hallar las mejores rutas los <i>routers</i> utilizan el concepto de métrica. No se requiere mantener manualmente las tablas de rutas.
              .tabla-a.color-acento-botones
                table
                  caption Nota: Tomada del enrutamiento Ip 2017.
                  thead
                    tr
                      th Ventajas
                      th Desventajas
                  tbody
                    tr
                      td Se reduce notablemente su mantenimiento.
                      td En cuestión de seguridad su nivel es menor en cuanto al estático.
                    tr
                      td Es eficiente para las redes grades y para pequeñas.
                      td El administrador, requiere conocimientos complejos sobre enrutamiento dinámico.
                    tr
                      td Reduce el trabajo del administrador de la red ya que es escalable.
                      td Gasta muchos recursos del router, así como de banda ancha.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
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
