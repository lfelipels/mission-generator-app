<template lang="">
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    @submit.prevent="submitHandler"
  >
    <v-text-field
      outlined
      v-model="challengers[0]"
      label="Primeiro desafiante"
      prepend-inner-icon="mdi-account"
      :rules="rules"
    ></v-text-field>
    <v-text-field
      outlined
      v-model="challengers[1]"
      label="Segundo desafiante"
      prepend-inner-icon="mdi-account"
      :rules="rules"
    ></v-text-field>
    <v-text-field
      outlined
      v-model="challengers[2]"
      label="Terceiro desafiante"
      prepend-inner-icon="mdi-account"
      :rules="rules"
    ></v-text-field>
    <v-btn
      block
      x-large
      color="#f72585"
      class="text-center white--text"
      :disabled="!canSubmit"
      type="submit"
    >
      Gerar Missões
    </v-btn>
  </v-form>
</template>
<script>
export default {
  name: "FormChallenger",
  data() {
    return {
      valid: true,
      challengers: [],
    };
  },
  methods: {
    submitHandler() {
      this.$refs.form.validate();
      if (!this.canSubmit) {
        this.$store.commit(
          "setMessageError",
          "Informe os nomes de todos os desafiantes"
        );
        return;
      }
      this.$emit("generateChallenges", this.challengers);
    },
  },
  computed: {
    canSubmit() {
      const challengers = this.challengers.filter(
        (name) => name != "" && name != "underfined" && name != null
      );
      return this.valid && challengers.length == 3;
    },

    rules() {
      const rules = [];
      const onlyAlphaNumeric = (value) => {
        value = value || "";
        value = value.replace(/\W/g, "");
        return value.length >= 3 || "Informe um nome válido";
      };
      rules.push(onlyAlphaNumeric);
      return rules;
    },
  },
};
</script>
