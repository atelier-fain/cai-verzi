<template>
  <div class="footer">
    <div class="container">
      <div class="top">
        <span><span>CAPITALA CULTURALĂ</span><br><span>A CAPITALEI</span></span>
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
          <div>
            <q-img src="../assets/bt-logo.png" alt="bt"/>
            <q-img src="../assets/asap.svg" alt="asap"/>
          </div>
        </div>
      </div>
      <div class="bottom">
        <span>Parteneri Instituționali</span>
        <q-img src="../assets/group.png"
               alt="group"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
.footer {
  .container {
    .top {
      display: flex;
      align-items: center;
      gap: 80px;
      > span {
        font-size: 20px;
        font-weight: 700;
      }
      > div {
        display: flex;
        align-items: center;
        gap: 20px;
        > span {
          font-size: 16px;
          font-weight: 700;
        }
        .q-img, > div .q-img {
          width: 180px;
        }
        > div {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 20px;

        }
      }
    }
    .bottom {
      display: flex;
      align-items: center;
      > span {
        font-size: 20px;
        font-weight: 700;
        white-space: nowrap;
        margin-right: 20px;
      }
    }

  }
}


</style>
