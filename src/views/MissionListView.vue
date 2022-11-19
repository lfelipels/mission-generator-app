<template>
  <div
    class="d-flex flex-column align-center justify-content-center mx-auto my-12"
    style="width: 900px"
  >
    <v-row>
      <v-col cols="12">
        <v-btn class="ma-2" outlined @click="clickHandleNewChallenge">
          Criar novo desafio
        </v-btn>
        <v-btn class="ma-2" outlined @click="clickHandleNewMissions">
          Gerar novas missões
        </v-btn>
      </v-col>
    </v-row>

    <MissionCard
      v-for="(challenge, idx) in challengesByUsers"
      :key="idx"
      :challenger-name="challenge.challenger"
      :missions="challenge.missions"
      class="mb-2"
    />
  </div>
</template>

<script>
import { api } from "@/services/api";
import MissionCard from "../components/MissionCard.vue";

export default {
  data() {
    return {
      challengesByUsers: [],
    };
  },
  mounted() {
    if (this.$store.state.challengers.length < 1) {
      this.$router.push({ name: "home" });
      return;
    }
    this.loadChallenges();
  },
  methods: {
    redirectToHomeWithError(error) {
      this.$store.commit("setMessageError", error);
      this.$store.commit("saveChallengers", []);
      this.$router.push({ name: "home" });
    },

    async loadChallenges() {
      this.challengesByUsers = [];
      console.log(this.$store.state.challengers);
      try {
        const resp = await api.get("/challenges", {
          params: { challengers: this.$store.state.challengers.join(",") },
        });
        this.challengesByUsers = resp.data;
      } catch (error) {
        this.redirectToHomeWithError(
          "O serviço está indisponível no momento. Tente novamente mais tarde."
        );
      }
    },

    clickHandleNewChallenge() {
      this.$store.commit("saveChallengers", []);
      this.$router.push({ name: "home" });
    },

    async clickHandleNewMissions() {
      try {
        await api.post("/challenges", {
          challengers: this.$store.state.challengers,
        });
        this.loadChallenges();
      } catch (error) {
        this.redirectToHomeWithError(
          "O serviço está indisponível no momento. Tente novamente mais tarde."
        );
      }
    },
  },
  components: {
    MissionCard,
  },
};
</script>
