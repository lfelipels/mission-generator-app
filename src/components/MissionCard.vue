<template lang="">
    <v-card :color="color">
        <v-card-title class="ml-8 mt-3">
            {{ challengerName }}
        </v-card-title>
        <v-card-text class="d-flex flex-column">
            <div class="font-weight-bold ml-8 mb-2">
                Missões
            </div>
            <v-timeline
                align-top
                dense
            >
                <v-timeline-item
                    v-for="(mission, idx) in missions"
                    :key="idx"
                    small
                >
                <div>
                    {{ mission }}
                </div>
                </v-timeline-item>
            </v-timeline>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    props: {
        challengerName: String,
        missions: Array,
        color: String
    }
}
</script>