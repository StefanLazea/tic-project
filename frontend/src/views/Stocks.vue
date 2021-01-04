<template>
  <div class="PartsLayout">
    <Toolbar class="p-mb-4">
      <template #left>
        <Button label="New" icon="pi pi-plus" class="p-button-success p-mr-2" />
        <Button
          label="Delete"
          icon="pi pi-trash"
          class="p-button-danger"
          :disabled="!selectedProducts || !selectedProducts.length"
        />
      </template>
    </Toolbar>
  </div>
</template>

<script>
// import DataTable from "primevue/datatable";
// import Column from "primevue/column";
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";

import CarService from "../service/CarService";
export default {
  data() {
    return {
      parts: null,
      auth: false
    };
  },
  carService: null,
  created() {
    this.carService = new CarService();
  },
  mounted() {
    this.carService.getCars().then(data => (this.parts = data));
    if (localStorage.getItem("token")) {
      this.auth = true;
    }
  },
  components: {
    // DataTable,
    // Column,
    Button,
    Toolbar
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
