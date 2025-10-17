<template>
  <q-expansion-item
    :label="label"
    :class="theme"
    class="expansion-comp">
    <q-card>
      <q-card-section v-html="content" />
    </q-card>
  </q-expansion-item>
</template>

<script setup>

const props = defineProps({
  content: String,
  label: String,
  theme: String
})
</script>

<style lang="scss">
.expansion-comp.primary {
  background-color: $primary;
  .q-expansion-item__content > .q-card {
    background-color: $primary;
    .q-card__section {
      color: $secondary;
    }
  }
  .q-item {
    .q-icon {
      color: $secondary;
    }
    .q-item__label {
      color: $secondary;
    }
  }
}

.expansion-comp.white {
  background-color: white;
  .q-expansion-item__content > .q-card {
    background-color: white;
    .q-card__section {
      color: $primary;
    }
  }
  .q-item {
    .q-icon {
      color: $primary;
    }
    .q-item__label {
      color: $primary;
    }
  }
}

.expansion-comp {
  border-radius: 31px;
  width: 100%;
  .q-expansion-item__container {
    .q-expansion-item__content > .q-card {
      border-radius: 31px;
      .q-card__section {
        font-size: 18px;
        font-weight: 500;
        padding-bottom: 48px;
      }
    }
    .q-item:hover .q-focus-helper {
      background: unset;
    }
    .q-item {
      justify-content: center;
      .q-icon {
        font-size: 40px;
      }
      .q-item__section {
        flex: unset;
      }
      .q-item__label {
        font-size: 28px;
        font-weight: bold;
      }
    }
  }
}
</style>
