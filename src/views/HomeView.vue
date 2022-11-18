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

    <v-alert
        v-if="message.type != '' && message.value != ''"
        prominent
        :type="message.type"
        class="mx-4"
    >
      <v-row align="center">
        <v-col>
          {{ message.value }}
        </v-col>
      </v-row>
    </v-alert>

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
import { api } from "../services/api";

export default {
  data() {
    return {
      challengers: [],
      message: {
        type: "",
        value: ""
      }
    };
  },
  methods: {
    async generateChallenges() {
      if (!this.canGenerateChallenges) {
        this.message.type = "warning";
        this.message.value = "Informe o nomes de todos os desafiantes";
        return;
      }

      try {
        await api.post("/challenges", {
          "challengers": this.challengers
        });

        this.$store.commit("saveChallengers", this.challengers);

        this.$router.push({ name: "mission-list" });
      } catch (error) {
        this.message.type = "error";
        this.message.value = "O serviço está indisponível no momento. Tente novamente mais tarde.";
      }
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
