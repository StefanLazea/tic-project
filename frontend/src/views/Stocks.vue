<template>
  <div class="PartsLayout">
    <Button
      v-if="auth === true"
      label="Add stock"
      class="right"
      @click="openNew"
    />

    <DataTable :value="stocks">
      <Column field="ownerId" header="User Id"></Column>
      <Column field="partId" header="Part Id"></Column>
      <Column field="quantity" header="Quantity"></Column>
    </DataTable>

    <Dialog
      v-model:visible="partDialog"
      :style="{ width: '450px' }"
      :header="dialogTitle"
      :modal="true"
      class="p-fluid"
    >
      <div class="p-field">
        <InputText
          id="code"
          v-model.trim="stock.user"
          required="true"
          placeholder="Code"
          autofocus
          :class="{ 'p-invalid': submitted && !stock.user }"
        />
        <small class="p-invalid" v-if="submitted && !stock.user"
          >Code is required.</small
        >
      </div>
      <Dropdown
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        placeholder="Select a City"
      />

      <div class="p-field p-col">
        <InputNumber
          id="quantity"
          v-model="stock.quantity"
          placeholder="Quantity"
          integeronly
        />
      </div>

      <template #footer>
        <Button
          label="Cancel"
          icon="pi pi-times"
          class="p-button-text"
          @click="hideDialog"
        />
        <Button
          label="Save"
          icon="pi pi-check"
          class="p-button-text"
          @click="savePart"
        />
      </template>
    </Dialog>
  </div>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import InputNumber from "primevue/inputnumber";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import StockService from "../service/StockService";

export default {
  data() {
    return {
      stocks: null,
      auth: false,
      partDialog: false,
      stock: {},
      submitted: false,
      dialogTitle: "Add stock",
      selectedCity: null,
      cities: [
        { name: "New York", code: "NY" },
        { name: "Rome", code: "RM" },
        { name: "London", code: "LDN" },
        { name: "Istanbul", code: "IST" },
        { name: "Paris", code: "PRS" },
      ],
    };
  },
  stockService: null,
  created() {
    this.stockService = new StockService();
  },
  mounted() {
    this.stockService.getStocks().then((data) => (this.stocks = data));
    if (localStorage.getItem("token")) {
      this.auth = true;
    }
  },
  methods: {
    openNew() {
      console.log("aici");
      this.stock = {};
      this.submitted = false;
      this.partDialog = true;
    },
    hideDialog() {},
    savePart() {},
  },
  components: {
    DataTable,
    Column,
    Button,
    Dialog,
    InputNumber,
    InputText,
    Dropdown,
  },
};
</script>
<style scoped>
.PartsLayout {
  padding: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}
.p-field {
  margin-bottom: 10px;
}
.p-dropdown {
  margin-bottom: 10px;
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
