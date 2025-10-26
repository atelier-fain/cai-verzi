<template>
  <div class="footer">
    <div class="container">
      <div class="top">
        <span><span class="nowrap">CAPITALA CULTURALĂ</span><br><span>A CAPITALEI</span></span>
        <div class="list">
          <div>
            <span>Un proiect</span>
            <q-img src="../assets/the-institute.svg"
                   alt="institute"
            />
          </div>
          <div>
            <span>Finanțat de</span>
            <q-img src="../assets/primaria.svg"
                   alt="primaria"
            />
          </div>
          <div>
            <span>Parteneri</span>
            <div class="flex wrap items-center">
              <q-img width="100px" src="../assets/bt-logo.svg" alt="bt"/>
              <q-img src="../assets/asap.svg" alt="asap"/>
              <q-img src="../assets/Logo UB orizontal NA.svg" alt="ub"/>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <span>Parteneri Instituționali</span>
        <div class="logos-partners">
          <q-img
            v-for="img in logosPartners"
            :key="img"
            :src="`${IMGS_BASE_URL}/${img}`"
            :alt="img"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { IMGS_BASE_URL } from '../boot/axios.js';

import {ref} from 'vue'

const logosPartners = ref([
  "Galateca.svg",
  "Group 562.svg",
  "Layer_1.svg",
  "logo MNIR.svg",
  "logo MOBIUS alb-negru.svg",
  "logo_MNAR_curbe_rosu bloc fara fundal.svg",
  "logo_romana.svg",
  "logo-mmb.svg",
  "logo-muzeul-taranului-roman.svg",
  "Logo.svg",
  "MNHCV-LOGO-20-ani_BLACK-Lung-copy-2 copy.svg",
  "TTTT_CC_AMZEI_NEGRU.svg"
])
</script>

<style lang="scss">
.footer {
  padding-bottom: 40px;
  .container {
    display: flex;
    flex-direction: column;
    gap: 40px;
    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 20px;
      .nowrap {
        white-space: nowrap;
      }
      > span {
        font-size: 20px;
        font-weight: 700;
      }
      > .list {
        display: flex;
        align-items: center;
        gap: 40px;
        > div > span {
          font-size: 16px;
          font-weight: bold;
        }
        .q-img, > div .q-img {
          width: 180px;
          max-height: 80px;
          img {
            object-fit: scale-down !important;
          }
        }
        > div {
          display: flex;
          align-items: center;
          gap: 20px;

        }
      }
    }
    .bottom {
      display: flex;
      align-items: center;
      gap: 80px;
      > span {
        font-size: 20px;
        font-weight: 700;
        white-space: nowrap;
      }
      .logos-partners {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;

        .q-img {
          max-width: 100px;
        }
      }
    }
    @media only screen and (max-width: 1440px) {
      .top {
        gap: 20px;
        flex-wrap: wrap;
        align-items: flex-start;
      }
      .bottom {
        flex-direction: column;
        gap: 20px;
        align-items: flex-start;
      }

    }
    @media only screen and (max-width: 1200px) {
      .top {
          .list {
            display: flex;
            gap: 40px;
            flex-wrap: wrap;
            justify-content: flex-start;
            > div {
              gap: 10px;
            }
          }
        }
      .bottom {
        .logos-partners {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
      }
    }
    @media only screen and (max-width: 1024px) {
        .top {
          flex-direction: column;
          > span {
            display: flex;
            align-items: center;
            gap: 6px;
            > br {
              display: none;
            }
          }
        }
    }
    @media only screen and (max-width: 768px) {
        .top {
          gap: 40px;
          .list {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
    }
    @media only screen and (max-width: 600px) {
      .top {
        > span {
          flex-wrap: wrap;
        }
        .list {
          > div {
            align-items: flex-start;
            .flex.wrap {
              flex-direction: column;
            }
          }
        }
      }
        .bottom {
          .logos-partners {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto;
            row-gap: 40px;
            .q-img {
              max-width: 60%;
            }
          }
        }
    }

  }
}


</style>
