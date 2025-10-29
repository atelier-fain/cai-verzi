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
          <div v-for="img in logosPartners"
               :key="img">
            <q-img
              :src="`${IMGS_BASE_URL}/${img}`"
              :alt="img"
            />
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { IMGS_BASE_URL } from '../boot/axios.js';

import {ref} from 'vue'

const logosPartners = ref([
  'logo-muzeul-taranului-roman.svg',
  'logo-mmb.svg',
  'logo_MNAR.svg',
  'TTTT_CC_AMZEI_NEGRU.svg',
  'logo-mnir-vector.svg',
  'Logo Antipa.svg',
  'Group_545.svg',
  'Logo Galateca.svg',
  'Logo MARe.svg',
  'Logo.svg',
  'Logo Mobius.svg',
  'AS3UPg.svg',
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
      .logos-partners > div:nth-child(2) {
        width: 300%;
      }
      .logos-partners > div:nth-child(1) {
        height: 70px;
      }
      .logos-partners {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        > div {
          width: 100%;
          height: 60px;
          display: flex;
          align-items: center;
          padding: 10px;
          .q-img {
            width: 100%;
            height: 100%;
            img {
              object-fit: contain !important;
            }
          }
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
          > div {
            width: 120px;
          }
        }
        .logos-partners > div:nth-child(2) {
          width: 100%;
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
          > span {
            width: 100%;
            justify-content: center;
          }
          .list {
            justify-content: center;
            flex-direction: column;
            flex-wrap: nowrap;
            margin: 0 auto;
            gap: 40px;
            > div {
              flex-direction: column;
              align-items: center;
            }
          }
        }
        .bottom {
          .logos-partners {
            justify-items: center;
          }
          > span {
            margin: 0 auto;
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
            row-gap: 20px;
          }
        }
    }

  }
}


</style>
