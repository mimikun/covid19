<template>
  <div>
    <v-range-slider
      v-model="sliderValue"
      :value="sliderValue"
      :label="'表示期間'"
      :min="min"
      :max="max"
      style="padding-top: 35px;"
      color="rgba(189, 63, 76, 1)"
      track-color="rgba(189, 63, 76, 0.3)"
    >
    </v-range-slider>
    <div class="range-slider-label">
      <output>{{showSliderLabels(value[0])}}から</output>
      <output>{{showSliderLabels(value[1])}}まで</output>
    </div>
  </div>
</template>

<style lang="scss">
  .range-slider-label {
    width: 90%;
    margin: -15px 0 0 auto;
    display: flex;
    justify-content: space-between;
  }
</style>

<script>
import dayjs from 'dayjs'
export default {
  name: 'DateSelectSlider',
  props: {
    chartData: {
      type: Array,
      required: true
    },
    value: {
      type: Array,
      required: true
    },
    min: {
      type: Number,
      required: true,
      default: 0
    },
    max: {
      type: Number,
      required: true,
      default: 1
    },
    labelFormatter: {
      type: Function,
      required: false,
      default: () => (d, _) => d.label
    }
  },
  data() {
    return {
      sliderValue: this.value
    }
  },
  watch: {
    sliderValue(newValue, _oldValue) {
      this.$emit('sliderInput', newValue)
    },
    value(newValue) {
      this.sliderValue = newValue
    }
  },
  methods: {
    showSliderLabels(order) {
      const isFrom =  this.sliderValue[0] === order
      if (order < this.chartData.length) {
        const certainPeriod = this.chartData
        const particularDate = certainPeriod[order]
        if (typeof particularDate === 'string') {
          return dayjs(particularDate).format('YYYY年M月D日')
        } else {
          return  particularDate.map(date => dayjs(date).format('YYYY年M月D日'))[isFrom ? 0 : 1]
        }
      }
      return ''
    }
  }
}
</script>
