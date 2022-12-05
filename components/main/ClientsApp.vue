<template>
  <section class="clients">
    <div class="container">
      <h2 class="visually-hidden">This is our clients</h2>
      <div class="row d-flex align-items-center">
        <div class="clients__item item-clients col-12 col-sm-4 col-lg-2 d-flex align-items-center justify-content-center"
          v-for="item in ClientsList"
          :key="item.icon"
        >
          <img 
            :src="require(`@/assets/img/${item.icon}.svg`)"
            :alt="item.title"
          />
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      ClientsList: [
        {
          icon: 'clients-01',
        },
        {
          icon: 'clients-02',
        },
        {
          icon: 'clients-03',
        },
        {
          icon: 'clients-04',
        },
        {
          icon: 'clients-05',
        },
        {
          icon: 'clients-06',
        },
      ],
    }
  }
};
</script>

<style lang="scss">
@import "bootstrap/dist/css/bootstrap.css";
@import "@/assets/css/main.scss";

.clients {
  padding-top: 50px;
  padding-bottom: 50px;
  background: #fafafa;

  .item-clients {
    height: 80px;
  }

  @media (max-width: $lg-width) {
    .clients__item:not(:nth-last-child(-n+3))  {
      margin-bottom: 30px;
    }
  }

  @media (max-width: $sm-width) {
    padding: 30px 0;
    
    .clients__item:not(:last-child)  {
      margin-bottom: 20px;
    }
  }
}

</style>