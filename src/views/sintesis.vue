<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 Diagnosticar el estado en el que se encuentra la ciberseguridad de su empresa es fundamental, ya que esto permite implementar métodos de análisis y evaluación de riesgos con el fin de implementar un plan de acción para el tratamiento de estos posibles riesgos o amenazas; implicando el conocimiento de la normatividad y estándares en ciberseguridad, al igual que normas, marco legal y jurídico, tipificación de delitos informáticos en el país, al igual que se deben reconocer los diferentes tipos de amenazas.
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

<style lang="sass"></style>
