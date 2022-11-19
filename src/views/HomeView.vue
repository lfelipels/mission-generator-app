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
      v-if="messageError != ''"
      prominent
      type="warning"
      class="mx-4 mt-2"
    >
      <v-row align="center">
        <v-col>
          {{ messageError }}
        </v-col>
      </v-row>
    </v-alert>
    <v-card-title>Participantes</v-card-title>
    <v-card-text>
      <FormChallenger @generateChallenges="generateChallenges" />
    </v-card-text>
  </v-card>
</template>

<script>
import { api } from "../services/api";
// import { mapState } from "vuex";
import FormChallenger from "../components/FormChallenger.vue";

export default {
  name: "HomeView",
  computed: {
    messageError() {
      const msg = this.$store.state.messageError;
      this.$store.commit("setMessageError", "");
      return msg;
    },
  },
  components: { FormChallenger },
  methods: {
    async generateChallenges(challengers) {
      try {
        await api.post("/challenges", {
          challengers: challengers,
        });

        this.$store.commit("saveChallengers", challengers);

        this.$router.push({ name: "mission-list" });
      } catch (error) {
        this.$store.commit(
          "setMessageError",
          "O serviço está indisponível no momento. Tente novamente mais tarde."
        );
      }
    },
  },
};
</script>
