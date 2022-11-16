<template>
  <v-card class="mx-auto my-12" max-width="600">
    <v-card-title>Desafie seus amigos!</v-card-title>

    <v-card-text>
      <p>
        Que tal gerar algumas missões aleatórias e se divertir com seus amigos?
      </p>
      <p>
        Gostou? Então informe seu nome e desafie mais dois amigos a realizar
        algumas missões com você.
      </p>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Participantes</v-card-title>
    <v-card-text>
      <v-text-field
        outlined
        v-model="challengers[0]"
        label="Primeiro desafiante"
        prepend-inner-icon="mdi-account"
      ></v-text-field>
      <v-text-field
        outlined
        v-model="challengers[1]"
        label="Segundo desafiante"
        prepend-inner-icon="mdi-account"
      ></v-text-field>
      <v-text-field
        outlined
        v-model="challengers[2]"
        label="Terceiro desafiante"
        prepend-inner-icon="mdi-account"
      ></v-text-field>
    </v-card-text>

    <v-card-actions>
      <v-btn
        block
        x-large
        color="#f72585"
        class="text-center white--text"
        :disabled="!canGenerateChallenges"
        @click="generateChallenges"
      >
        Gerar Missões
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      challengers: [],
    };
  },
  methods: {
    generateChallenges() {
      if (!this.canGenerateChallenges) {
        return;
      }

      this.$router.push({ name: "mission-list" });
    },
  },
  computed: {
    canGenerateChallenges() {
      const challengers = this.challengers.filter(
        (name) => name != "" && name != "underfined" && name != null
      );
      return challengers.length == 3;
    },
  },
};
</script>
