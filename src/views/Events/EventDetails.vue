<script setup lang="ts">
import { EventItem } from "@/types";
import { PropType } from "vue";

  defineProps({
    event: {
      type: Object as PropType<EventItem>,
      required: true
    }
  })
</script>

<template>
  <div class="event-details" v-if="event">
    <!-- <span class="event-tag">{{ event.category }}</span> -->
    <p><span>location: {{ event.location }}</span> | <span>@ {{ event.time }}</span></p>

    <p>{{ event.description }}</p>
  </div>
</template>

<style scoped>
p {
  font-size: 1.5em;
}
</style>