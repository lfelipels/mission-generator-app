<template>
  <div 
      class="d-flex flex-column align-center justify-content-center mx-auto my-12"
      style="width: 900px;">
    <v-row>
      <v-col cols="12">
        <v-btn
          class="ma-2"
          outlined    
          @click="clickHandleNewChallenge"
        >
          Criar novo desafio
        </v-btn>
      </v-col>
    </v-row>
        
    <MissionCard 
      v-for="(challenge, idx) in challengesByUsers"
      :key="idx"
      :challenger-name="challenge.challengerName" 
      :missions="challenge.missions" 
      class="mb-2" />
  </div>
</template>

<script>
import { api } from "@/services/api";
import MissionCard from "../components/MissionCard.vue";

export default {
  data() {
    return {
      challengesByUsers: []
    }
  },
  mounted() {
    this.loadChallenges();
  },
  methods: {
    async loadChallenges() {
      this.challengesByUsers = [];
      try {
        const resp = await api.get("/challenges");

        for (let name in resp.data) {
          if (Object.hasOwnProperty.call(resp.data, name)) {
            this.challengesByUsers.push({
              challengerName: name,
              missions: resp.data[name]
            });
          }
        }
      } catch (error) {
        //
        console.log(error);
      }
    },

    clickHandleNewChallenge() {
      this.$router.push({ name: "home"});
    }
  },
  components: {
    MissionCard
  }
}
</script>

