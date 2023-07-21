<script>
import countryDataJSON from 'country-region-data/data.json'
import axios from 'axios'
export default {
  data() {
    return {
      truckPlate: '',
      trailerPlate: '',
      departureDate: '',
      loadingPlace: '',
      unloadingPlace: '',
      freightPrice: '',
      paymentDate: '',
      received: '',
      remaining: '',
      returnDate: '',
      returnLoadingPlace: '',
      returnUnloadingPlace: '',
      returnFreight: '',
      returnPaymentDate: '',
      returnReceived: '',
      returnRemaining: '',
      countryRegionList: [],
      regions: []
    }
  },
  methods: {
    sendForm() {
      const form = document.forms['submit-to-google-sheet']
      fetch(import.meta.env.VITE_MACRO_URL, {
        method: 'POST',
        body: new FormData(form)
      })
        .then((res) => {
          console.log('success', res)
        })
        .catch((err) => {
          console.log('error', err)
        })
    },
    loadCities(event) {
      axios
        .post('http://localhost:3000/city', {
          countryCode: event.target.value
        })
        .then((response) => {
          this.regions = response.data
        })
    }
  },
  mounted() {
    this.countryRegionList = countryDataJSON
    console.log(countryDataJSON)
    console.log('Break!')
    console.log(this.countryRegionList)
  }
}
</script>
<template>
  <h1 class="title">Sefer Bilgileri</h1>
  <form name="submit-to-google-sheet" class="form" @submit.prevent="sendForm">
    <div class="form__column-left">
      <div class="form__column-left__element">
        <label class="form__column-left__element__label" for="truck-plate">Çekici plaka</label>
        <input
          class="form__column-left__element__input"
          type="text"
          name="truckPlate"
          id="truck-plate"
          v-model="truckPlate"
        />
      </div>
      <div class="form__column-left__element">
        <label class="form__column-left__element__label" for="trailer_plate">Dorse plaka</label>
        <input
          class="form__column-left__element__input"
          type="text"
          name="trailerPlate"
          id="trailer_plate"
          v-model="trailerPlate"
        />
      </div>
      <div class="form__column-left__element">
        <label class="form__column-left__element__label" for="departure-date">Çıkış tarihi</label>
        <input
          class="form__column-left__element__input"
          type="text"
          name="departureDate"
          id="departure-date"
          v-model="departureDate"
        />
      </div>
      <div class="form__column-left__element">
        <label class="form__column-left__element__label" for="country-code">Yukleme yeri</label>

        <select name="country-code" id="country-code" @change="loadCities">
          <option value="">Select country code</option>
          <option
            v-for="country in countryRegionList"
            :key="country.countryShortCode"
            :value="country.countryShortCode"
          >
            {{ country.countryShortCode }}
          </option>
        </select>

        <select name="city" id="city">
          <option v-for="region in regions" :key="region.name" :value="region.name">
            {{ region.name }}
          </option>
        </select>
      </div>
      <div class="form__column-left__element">
        <label class="form__column-left__element__label" for="unloading-place">Boşaltma yeri</label>
        <input
          class="form__column-left__element__input"
          type="text"
          name="unloadingPlace"
          id="unloading-place"
          v-model="unloadingPlace"
        />
      </div>
      <div class="form__column-left__element">
        <label class="form__column-left__element__label" for="freight">Navlun</label>
        <input
          class="form__column-left__element__input"
          type="text"
          name="freightPrice"
          id="freight"
          v-model="freightPrice"
        />
      </div>
      <div class="form__column-left__element">
        <label class="form__column-left__element__label" for="payment-date">Ödeme tarihi</label>
        <input
          class="form__column-left__element__input"
          type="date"
          name="paymentDate"
          id="payment-date"
          v-model="paymentDate"
        />
      </div>
      <div class="form__column-left__element">
        <label class="form__column-left__element__label" for="received">Alınan</label>
        <input
          class="form__column-left__element__input"
          type="text"
          name="received"
          id="received"
          v-model="received"
        />
      </div>
      <div class="form__column-left__element">
        <label class="form__column-left__element__label" for="remaining">Kalan</label>
        <input
          class="form__column-left__element__input"
          type="text"
          name="remaining"
          id="remaining"
          v-model="remaining"
        />
      </div>
    </div>
    <!-- Ending of left column of the form -->

    <!-- Beginning of right column of the form -->
    <div class="form__column-right">
      <div class="form__column-right__element">
        <label class="form__column-right__element__label" for="return-date">Dönüş tarihi</label>
        <input
          class="form__column-right__element__input"
          type="text"
          name="returnDate"
          id="return-date"
          v-model="returnDate"
        />
      </div>
      <div class="form__column-right__element">
        <label class="form__column-right__element__label" for="return-loading-place"
          >Yükleme yeri</label
        >
        <input
          class="form__column-right__element__input"
          type="text"
          name="returnLoadingPlace"
          id="return-loading-place"
          v-model="returnLoadingPlace"
        />
      </div>
      <div class="form__column-right__element">
        <label class="form__column-right__element__label" for="return-unloading-place"
          >Boşaltma yeri</label
        >
        <input
          class="form__column-right__element__input"
          type="text"
          name="returnUnloadingPlace"
          id="return-unloading-place"
          v-model="returnUnloadingPlace"
        />
      </div>
      <div class="form__column-right__element">
        <label class="form__column-right__element__label" for="return-freight">Navlun</label>
        <input
          class="form__column-right__element__input"
          type="text"
          name="returnFreight"
          id="return-freight"
          v-model="returnFreight"
        />
      </div>
      <div class="form__column-right__element">
        <label class="form__column-right__element__label" for="return-payment-date"
          >Ödeme tarihi</label
        >
        <input
          class="form__column-right__element__input"
          type="text"
          name="returnPaymentDate"
          id="return-payment-date"
          v-model="returnPaymentDate"
        />
      </div>
      <div class="form__column-right__element">
        <label class="form__column-right__element__label" for="return-received">Alınan</label>
        <input
          class="form__column-right__element__input"
          type="text"
          name="returnReceived"
          id="return-received"
          v-model="returnReceived"
        />
      </div>
      <div class="form__column-right__element">
        <label class="form__column-right__element__label" for="return-remaining">Kalan</label>
        <input
          class="form__column-right__element__input"
          type="text"
          name="returnRemaining"
          id="return-remaining"
          v-model="returnRemaining"
        />
      </div>
      <div class="form__column-right__element">
        <button class="form__column-right__element__button" type="submit" value="Submit">
          GONDER
        </button>
      </div>
    </div>
  </form>
</template>

<style scoped>
.title {
  text-align: center;
  font-weight: 300;
  font-size: 32px;
  padding: 20px 0;
}
.form {
  display: flex;
  justify-content: center;
  align-items: center;
}

.form__column-left__element,
.form__column-right__element {
  display: flex;
  flex-direction: column;
}

.form__column-left__element {
  margin-right: 1em;
}

.form__column-right__element {
  margin-left: 1em;
}

.form__column-left__element:not(:last-child) {
  margin-bottom: 1em;
}

.form__column-right__element:not(:last-child) {
  margin-bottom: 1em;
}

.form__column-left__element__label,
.form__column-right__element__label {
  margin-bottom: 8px;
  font-size: 20px;
}

.form__column-left__element__input,
.form__column-right__element__input {
  width: 168px;
  height: 28px;
  background-color: rgba(213, 213, 213, 0.4);
  border-radius: 2px;
}

.form__column-right__element__button {
  width: 80px;
  height: 32px;
  border-radius: 4px;
  background-color: rgba(183, 183, 183, 0.6);
  color: rgba(0, 0, 0, 0.7);
  margin: 0 auto;
}

.form__column-right__element__button:hover {
  background-color: rgba(59, 131, 100, 0.8);
}
</style>
