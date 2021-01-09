<template>
  <div class="PartsLayout">
    <Button v-if="auth === true" label="Add stock" class="right" />

    <DataTable :value="stocks">
      <Column field="ownerId" header="User Id"></Column>
      <Column field="partId" header="Part Id"></Column>
      <Column field="quantity" header="Quantity"></Column>
    </DataTable>
  </div>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";

import StockService from "../service/StockService";
export default {
  data() {
    return {
      stocks: null,
      auth: false
    };
  },
  stockService: null,
  created() {
    this.stockService = new StockService();
  },
  mounted() {
    this.stockService.getStocks().then(data => (this.stocks = data));
    if (localStorage.getItem("token")) {
      this.auth = true;
    }
  },
  components: {
    DataTable,
    Column,
    Button
  }
};
</script>
<style scoped>
.PartsLayout {
  padding: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}
.right {
  margin-bottom: 20px;
  max-width: 100px;
}
.p-datatable-responsive-demo .p-datatable-tbody > tr > td .p-column-title {
  display: none;
}

@media screen and (max-width: 40em) {
  ::v-deep(.p-datatable) {
    &.p-datatable-responsive-demo {
      .p-datatable-thead > tr > th,
      .p-datatable-tfoot > tr > td {
        display: none !important;
      }

      .p-datatable-tbody > tr > td {
        text-align: left;
        display: block;
        width: 100%;
        float: left;
        clear: left;
        border: 0 none;

        .p-column-title {
          padding: 0.4rem;
          min-width: 30%;
          display: inline-block;
          margin: -0.4em 1em -0.4em -0.4rem;
          font-weight: bold;
        }

        &:last-child {
          border-bottom: 1px solid var(--surface-d);
        }
      }
    }
  }
}
</style>
