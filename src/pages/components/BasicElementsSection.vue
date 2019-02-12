<template>
  <div class="section section-basic" id="basic-elements">
    <div class="container">
      <h3 class="title">Basic Elements</h3>
      <h4>Buttons</h4>
      <p class="category">Pick your style</p>
      <div class="row">
        <div class="col-md-10">
          <n-button type="primary">Default</n-button>
          <n-button type="primary" round>Round</n-button>
          <n-button type="primary" round>
            <i class="now-ui-icons ui-2_favourite-28"></i> With Icon
          </n-button>
          <n-button type="primary" round icon>
            <i class="now-ui-icons ui-2_favourite-28"></i>
          </n-button>
          <n-button type="primary" round simple>Simple</n-button>
        </div>
      </div>
      <p class="category">Pick your size</p>
      <div class="row">
        <div class="col-md-10">
          <n-button type="primary" size="sm">Small</n-button>
          <n-button type="primary">Regular</n-button>
          <n-button type="primary" size="lg">Large</n-button>
        </div>
      </div>
      <p class="category">Pick your color</p>
      <div class="row">
        <div class="col-md-10">
          <n-button type="default">Default</n-button>
          <n-button type="primary">Primary</n-button>
          <n-button type="info">Info</n-button>
          <n-button type="success">Success</n-button>
          <n-button type="warning">Warning</n-button>
          <n-button type="danger">Danger</n-button>
          <n-button type="neutral">Neutral</n-button>
        </div>
      </div>
      <h4>Links</h4>
      <div class="row">
        <div class="col-md-8">
          <n-button type="default" link>Default</n-button>
          <n-button type="primary" link>Primary</n-button>
          <n-button type="info" link>Info</n-button>
          <n-button type="success" link>Success</n-button>
          <n-button type="warning" link>Warning</n-button>
          <n-button type="danger" link>Danger</n-button>
          <n-button type="neutral" link>Neutral</n-button>
        </div>
      </div>
      <div class="space-70"></div>
      <div id="inputs">
        <h4>Inputs</h4>
        <p class="category">Form Controls</p>
        <div class="row">
          <div class="col-sm-6 col-lg-3">
            <fg-input placeholder="Regular"></fg-input>
          </div>
          <div class="col-sm-6 col-lg-3">
            <fg-input value="Success" class="has-success"></fg-input>
          </div>
          <div class="col-sm-6 col-lg-3">
            <fg-input value="Error Input" class="has-danger"></fg-input>
          </div>
          <div class="col-sm-6 col-lg-3">
            <fg-input
              addon-left-icon="now-ui-icons users_single-02"
              placeholder="Left Nucleo Icon"
            >
            </fg-input>
          </div>
          <div class="col-sm-6 col-lg-3">
            <fg-input
              addon-right-icon="now-ui-icons users_single-02"
              placeholder="Right Nucleo Icon"
            >
            </fg-input>
          </div>
          <div class="col-sm-6 col-lg-3">
            <fg-input
              addon-left-icon="now-ui-icons users_single-02"
              class="no-border"
              placeholder="No border left icon"
            >
            </fg-input>
          </div>
          <div class="col-sm-6 col-lg-3">
            <fg-input
              addon-right-icon="now-ui-icons users_single-02"
              class="no-border"
              placeholder="No border right icon"
            >
            </fg-input>
          </div>
        </div>
      </div>
      <div class="space-70"></div>
      <div class="row" id="checkRadios">
        <div class="col-sm-6 col-lg-3">
          <p class="category">Checkboxes</p>
          <n-checkbox v-model="checkboxes.unchecked">Unchecked</n-checkbox>
          <n-checkbox v-model="checkboxes.checked">Checked</n-checkbox>
          <n-checkbox v-model="checkboxes.disabledUnchecked" disabled
            >Disabled Unchecked</n-checkbox
          >
          <n-checkbox v-model="checkboxes.disabledChecked" disabled
            >Disabled Checked</n-checkbox
          >
        </div>
        <div class="col-sm-6 col-lg-3">
          <p class="category">Radios</p>
          <n-radio v-model="radios.radioOn" label="1">Radio is On</n-radio>
          <n-radio v-model="radios.radioOn" label="2">Radio is Off</n-radio>

          <n-radio v-model="radios.radioOff" label="1" disabled
            >Disabled radio is on</n-radio
          >
          <n-radio v-model="radios.radioOff" label="2" disabled
            >Disabled radio is off</n-radio
          >
        </div>
        <div class="col-sm-6 col-lg-3">
          <p class="category">Toggle buttons</p>
          <n-switch v-model="switches.defaultOn"></n-switch>
          <br />
          <n-switch
            v-model="switches.defaultOff"
            on-text="ON"
            off-text="OFF"
          ></n-switch>
        </div>
        <div class="col-sm-6 col-lg-3">
          <p class="category">Sliders</p>
          <slider v-model="sliders.simple"> </slider>
          <br />
          <slider v-model="sliders.rangeSlider" type="primary" :connect="true">
          </slider>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  Button,
  Checkbox,
  Radio,
  FormGroupInput,
  Slider,
  Switch
} from '@/components';

export default {
  components: {
    [Button.name]: Button,
    [Checkbox.name]: Checkbox,
    [Radio.name]: Radio,
    [FormGroupInput.name]: FormGroupInput,
    [Switch.name]: Switch,
    [Option.name]: Option,
    Slider
  },
  data() {
    return {
      radios: {
        radioOn: '2',
        radioOff: '2'
      },
      checkboxes: {
        unchecked: false,
        checked: true,
        disabledUnchecked: false,
        disabledChecked: true
      },
      switches: {
        defaultOn: true,
        defaultOff: false
      },
      sliders: {
        simple: 30,
        rangeSlider: [20, 60]
      }
    };
  }
};
</script>
<style></style>
