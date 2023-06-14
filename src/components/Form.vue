<script>
export default {
  data() {
    return {
      truckPlate: "",
      trailerPlate: "",
      departureDate: "",
      loadingPlace: "",
      unloadingPlace: "",
      freight: "",
      paymentDate: "",
      received: "",
      remaining: "",
      returnDate: "",
      returnLoadingPlace: "",
      returnUnloadingPlace: "",
      returnFreight: "",
      returnPaymentDate: "",
      returnReceived: "",
      returnRemaining: ""
    }
  }
}
</script>

<template>
<form class="form" @submit.prevent="onSubmit">
  <h1>Sefer Bilgileri</h1>

  <!-- Beginning of left column of the form -->
  <div class="form__left-column">
    <div class="form__left-column__element">
      <label for="truck-plate">Çekici plaka</label>
      <input type="text" id="truck-plate" v-model="cekiciPlaka">
    </div>
    <div class="form__left-column__element">
      <label for="trailer_plate">Dorse plaka</label>
      <input type="text" id="trailer_plate" v-model="trailerPlate">
    </div>
    <div class="form__left-column__element">
      <label for="departure-date">Çıkış tarihi</label>
      <input type="text" id="departure-date" v-model="departureDate">
    </div>
    <div class="form__left-column__element">
      <label for="loading-place">Yükleme yeri</label>
      <input type="text" id="loading-place" v-model="loadingPlace">
    </div>
    <div class="form__left-column__element">
      <label for="unloading-place">Boşaltma yeri</label>
      <input type="text" id="unloading-place" v-model="unloadingPlace">
    </div>
    <div class="form__left-column__element">
      <label for="freight">Navlun</label>
      <input type="text" id="freight" v-model="freight">
    </div>
    <div class="form__left-column__element">
      <label for="payment-date">Ödeme tarihi</label>
      <input type="text" id="payment-date" v-model="paymentDate">
    </div>
    <div class="form__left-column__element">
      <label for="received">Alınan</label>
      <input type="text" id="received" v-model="received">
    </div>
    <div class="form__left-column__element">
      <label for="remaining">Kalan</label>
      <input type="text" id="remaining" v-model="remaining">
    </div>
  </div>
  <!-- Ending of left column of the form -->

  <!-- Beginning of right column of the form -->
  <div class="form__right-column">    
    <div class="form__right-column__element">
      <label for="return-date">Dönüş tarihi</label>
      <input type="text" id="return-date" v-model="returnDate">
    </div>
    <div class="form__right-column__element">
      <label for="return-loading-place">Yükleme yeri</label>
      <input type="text" id="return-loading-place" v-model="returnLoadingPlace">
    </div>
    <div class="form__right-column__element">
      <label for="return-unloading-place">Boşaltma yeri</label>
      <input type="text" id="return-unloading-place" v-model="returnUnloadingPlace">
    </div>
    <div class="form__right-column__element">
      <label for="return-freight">Navlun</label>
      <input type="text" id="return-freight" v-model="returnFreight">
    </div>
    <div class="form__right-column__element">
      <label for="return-payment-date">Ödeme tarihi</label>
      <input type="text" id="return-payment-date" v-model="returnPaymentDate">
    </div>
    <div class="form__right-column__element">
      <label for="return-received">Alınan</label>
      <input type="text" id="return-received" v-model="returnReceived">
    </div>
    <div class="form__right-column__element">
      <label for="return-remaining">Kalan</label>
      <input type="text" id="return-remaining" v-model="returnRemaining">
    </div>
  </div>
  <!-- Ending of right column of the form -->
</form>

</template>

<style scoped>


</style>