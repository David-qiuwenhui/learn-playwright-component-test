<template>
  <div>
    <div>Counter</div>
    <div>
      <div data-testid="count">{{ count }}</div>
      <button @click="handleIncrease">increase</button>
      <button @click="handleDecrease">decrease</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Props {
  initCount: number;
  min?: number;
  max?: number;
}

const props = withDefaults(defineProps<Props>(), {
  initCount: 0,
  min: 0,
  max: 10,
});

const count = ref(props.initCount);

function handleIncrease() {
  if (count.value >= props.max) {
    return;
  }
  count.value++;
}

function handleDecrease() {
  if (count.value <= props.min) {
    return;
  }
  count.value--;
}
</script>

<style scoped></style>
