<template>
  <div class="partner-card">
    <div class="img-container">
      <q-img :src="`${IMGS_BASE_URL}/${img}`"
             class="main"
             :alt="img"
             fit="scale-down"
      />
      <q-img src="../assets/border-card.svg"
             class="border-card"
             alt="border-card"
      />
    </div>
    <q-expansion-item
      dense
      label="Află mai multe">
      <q-card>
        <q-card-section v-html="text" />
      </q-card>
    </q-expansion-item>
  </div>
</template>

<script setup>
import { IMGS_BASE_URL } from '../boot/axios.js';

const props = defineProps({
  img: String,
  text: String
})
</script>

<style lang="scss">
.partner-card {
  width: 360px;
  .img-container {
    position: relative;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    .q-img {
      mix-blend-mode: multiply;
    }
    .border-card {
      width: 100%;
      height: 100%;
      z-index: 1;
    }
    .main {
      z-index: 2;
      position: absolute;
    }
  }
  .q-expansion-item.q-expansion-item--expanded {
    .q-expansion-item__container {
      .q-item {
        .q-item__label {
          font-size: 16px;
          color: #BEBEBE;
          font-weight: bold;
        }
        .q-icon {
          font-size: 30px;
          color: #BEBEBE;
        }
      }
    }
  }
  .q-expansion-item {
    z-index: 3;
    position: relative;
    .q-expansion-item__container {
      .q-item:hover .q-focus-helper {
        background: unset;
      }
      .q-item {
        .q-item__section {
          flex: unset;
        }
        .q-item__label {
          font-size: 16px;
          color: #ff41ff;
          font-weight: bold;
        }
        .q-icon {
          font-size: 30px;
          color: #ff41ff;
        }
        .q-item__section--side {
          padding-left: 10px;
        }
      }
    }
    .q-card {
      background: unset;
      .q-card__section {
        color: $primary;
        font-size: 18px;
        font-weight: 500;
        a[href] {
          color: $primary;
        }
      }
    }
  }
  @media only screen and (max-width: 1024px) {
    width: 280px;
    .img-container {
      .main {
        max-height: 320px;
      }

    }

  }
  @media only screen and (max-width: 655px) {
    width: 360px;
  }
}
</style>
