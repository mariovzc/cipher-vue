<template>
  <v-data-table
      v-bind:headers="headers"
      :items="items"
      hide-actions
      class="elevation-1"
    >
    <template slot="items" slot-scope="props">
      <td class="text-xs-right">{{ props.item.old }}</td>
      <td class="text-xs-right">{{ props.item.new }}</td>
      <td class="text-xs-right">{{ props.item.type }}</td>
    </template>
    <template slot="no-data">
      <v-alert :value="true" color="error" icon="warning">
        No hay nada para mostrar
      </v-alert>
    </template>
  </v-data-table>
</template>

<script>
export default {
  props: ['items'],
  data () {
    return {
      headers: [
        {
          text: 'Valor Antiguo',
          value: 'old'
        },
        {
          text: 'Nuevo Valor',
          value: 'new'
        },
        {
          text: 'Tipo',
          value: 'type'
        }
      ]
    }
  }
}
</script>

<style>

</style>
