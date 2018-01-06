<template>
  <div>
    <v-app>
      <v-container grid-list-md text-xs-center>
        <h1>Cifrado</h1>
        <v-layout row wrap>
          <v-flex xs6 offset-xs3>
            <v-text-field
              label="Palabra"
              v-model="word"
              required
              :rules="wordRules"
            ></v-text-field>
            <v-slider 
              :label="slider.label" 
              min="0" max="26" 
              v-model="code" 
              :color="slider.color"
              thumb-label
            ></v-slider>
            <v-radio-group 
              v-model="type" 
              :mandatory="false" 
              row
            >
              <v-radio 
                label="Cifrar" 
                value="Cifrar" 
                color="primary"
              ></v-radio>
              <v-radio 
                label="Descifrar" 
                value="Descifrar" 
                color="success"
              ></v-radio>
            </v-radio-group>
            <v-btn  
              v-if="type" 
              color="primary"
              @click="convert"
            >
              {{type}}
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
    <v-snackbar
      :right="true"
      :top="true"
      v-model="snackbar"
      :absolute="true"
    >
      Error Verifique que la palabra este en el formato correcto
      <v-btn flat color="pink" @click.native="snackbar = false">Cerrar</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      word: '',
      valid: false,
      wordRules: [
        (v) => !!v || 'El campo es obligatorio',
        (v) => /^[a-zA-Z\s]*$/.test(v) || 'Solo pueden ser letras'
      ],
      code: 0,
      type: '',
      slider: {
        label: 'Codigó:', color: 'orange darken-3'
      },
      snackbar: true
    }
  },
  methods: {
    convert () {
      console.log('ok')
    }
  }
}
</script>