<template>
  <div class="Stocks">
    <div>
      <Toolbar class="p-mb-4">
        <template #left>
          <Button
            label="New"
            icon="pi pi-plus"
            class="p-button-success"
            @click="openNew"
          />
          <Button
            label="Delete"
            icon="pi pi-trash"
            class="p-button-danger"
            :disabled="!selectedProducts || !selectedProducts.length"
          />
        </template>
      </Toolbar>
    </div>
    <div class="table">
      <DataTable
        ref="dt"
        :value="parts"
        dataKey="id"
        :paginator="true"
        :rows="10"
        :filters="filters"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 25]"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
      >
        <Column
          selectionMode="multiple"
          headerStyle="width: 3rem"
          :exportable="false"
        ></Column>
        <Column field="code" header="Code" :sortable="true"></Column>
        <Column field="name" header="Name" :sortable="true"></Column>
        <Column field="price" header="Price" :sortable="true"></Column>

        <Column :exportable="false">
          <template #body="slotProps">
            <Button
              icon="pi pi-pencil"
              class="p-button-rounded p-button-success p-mr-2"
              @click="editProduct(slotProps.data)"
            />
            <Button
              icon="pi pi-trash"
              class="p-button-rounded p-button-warning"
              @click="confirmDeleteProduct(slotProps.data)"
            />
          </template>
        </Column>
      </DataTable>
    </div>

    <Dialog
      v-model:visible="partDialog"
      :style="{ width: '450px' }"
      header="Product Details"
      :modal="true"
      class="p-fluid"
    >
      <div class="p-field">
        <InputText
          id="code"
          v-model.trim="part.code"
          required="true"
          placeholder="Code"
          autofocus
          :class="{ 'p-invalid': submitted && !part.code }"
        />
        <small class="p-invalid" v-if="submitted && !part.code"
          >Code is required.</small
        >
      </div>
      <div class="p-field">
        <InputText
          id="name"
          v-model.trim="part.name"
          required="true"
          placeholder="Name"
          autofocus
          :class="{ 'p-invalid': submitted && !part.name }"
        />
        <small class="p-invalid" v-if="submitted && !part.name"
          >Name is required.</small
        >
      </div>

      <div class="p-field">
        <InputNumber
          id="price"
          v-model="part.price"
          mode="currency"
          placeholder="Price"
          currency="USD"
          locale="en-US"
        />
      </div>
      <div class="p-field p-col">
        <InputNumber
          id="quantity"
          v-model="part.quantity"
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
          @click="saveProduct"
        />
      </template>
    </Dialog>
  </div>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import Dialog from "primevue/dialog";
import InputNumber from "primevue/inputnumber";
import CarService from "../service/CarService";
import InputText from "primevue/inputtext";
export default {
  data() {
    return {
      parts: null,
      auth: false,
      submitted: false,
      partDialog: false,
      part: {}
    };
  },
  carService: null,
  created() {
    this.carService = new CarService();
  },
  mounted() {
    this.carService.getCars().then(data => (this.parts = data));
    console.log(this.parts);
    if (localStorage.getItem("token")) {
      this.auth = true;
    }
  },
  methods: {
    openNew() {
      this.product = {};
      this.submitted = false;
      this.partDialog = true;
    },
    hideDialog() {
      this.partDialog = false;
      this.submitted = false;
    },
    saveProduct() {},
    editProduct(part) {
      console.log(part);
    }
  },
  components: {
    DataTable,
    Column,
    Button,
    Toolbar,
    Dialog,
    InputNumber,
    InputText
  }
};
</script>

<style scoped>
.Stocks {
  padding: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}
.table {
  margin-top: 20px;
}
.p-field {
  margin-bottom: 10px;
}
.p-button-success {
  margin-right: 10px;
}
.table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.p-dialog .product-image {
  width: 150px;
  margin: 0 auto 2rem auto;
  display: block;
}
.confirmation-content {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
