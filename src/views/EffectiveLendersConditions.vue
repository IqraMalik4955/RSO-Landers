<template>
  <CRow class="bg-body border rounded p-3 mb-3">
    <CCol :md="12" class="">
      <CRow class="d-flex align-items-center justify-content-between">
        <CCol sm="auto">
          <h2 class="fw-bold">Effective Lenders Conditions</h2>
        </CCol>
        <CCol sm="auto">
          <!-- <CButton
              class="ms-auto text-white px-4 btn-info"
              @click="
                () => {
                  visibleVerticallyCenteredDemo = true
                }
              "
            >
              Save
            </CButton> -->
        </CCol>
      </CRow>
      <hr class="mt-3 mb-3" />
      <!-- Add New Lenders Conditions Heading -->
      <!-- Body -->
      <CForm class="">
        <div class="row">
          <div class="col-12 col-lg-6 mb-3">
            <div class="d-flex">
              <CFormLabel
                for="colFormLabelSm"
                class="col-4 col-sm-5 col-md-3 col-lg-3 col-form-label col-form-label-sm"
                >LENDER CODE</CFormLabel
              >
              <CCol class="col-8 col-sm-7 col-md-9 col-lg-9">
                <CFormInput
                  type="text"
                  class="form-control form-control-sm"
                  id="colFormLabelSm"
                  value="BMO"
                />
              </CCol>
            </div>
          </div>
          <div class="col-12 col-lg-6 mb-3">
            <div class="d-flex">
              <CFormLabel
                for="lenderCodeField"
                class="col-4 col-sm-5 col-md-3 col-lg-3 col-form-label col-form-label-sm"
                >COUNTRY<sup class="text-danger fs-6"> * </sup></CFormLabel
              >
              <CCol class="col-8 col-sm-7 col-md-9 col-lg-9">
                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>Canada</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </CCol>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-lg-6 mb-3">
            <div class="d-flex">
              <CFormLabel
                for="colFormLabelSm"
                class="col-4 col-sm-5 col-md-3 col-lg-3 col-form-label col-form-label-sm"
                >Effective Date</CFormLabel
              >
              <CCol class="col-8 col-sm-7 col-md-9 col-lg-9">
                <CFormInput
                  type="date"
                  class="form-control form-control-sm"
                  id="colFormLabelSm"
                  value=""
                />
              </CCol>
            </div>
          </div>
          <div class="col-12 col-lg-6 mb-3">
            <div class="d-flex">
              <CFormLabel
                for="lenderCodeField"
                class="col-4 col-sm-5 col-md-3 col-lg-3 col-form-label col-form-label-sm"
                >REGION</CFormLabel
              >
              <CCol class="col-8 col-sm-7 col-md-9 col-lg-9">
                <CFormInput
                  type="text"
                  class="form-control form-control-sm"
                  id="colFormLabelSm"
                  value=""
                />
              </CCol>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-lg-6 mb-3">
            <div class="d-flex">
              <CFormLabel
                for="lenderCodeField"
                class="col-4 col-sm-5 col-md-3 col-lg-3 col-form-label col-form-label-sm"
                >LANGUAGE</CFormLabel
              >
              <CCol class="col-8 col-sm-7 col-md-9 col-lg-9">
                <CDropdown alignment="end" variant="input-group">
                  <CDropdownToggle
                    color="secondary"
                    size="sm"
                    variant="outline"
                    class="d-flex align-items-center justify-content-between"
                    style="width: 100%"
                  >
                    <label
                      class="d-flex align-items-center form-check-label"
                      for="flexRadioDefault1"
                    >
                      English
                    </label>
                    <CIcon name="cifUs" class="mx-2" size="xl" />
                  </CDropdownToggle>
                  <CDropdownMenu style="width: 200px">
                    <CDropdownHeader
                      component="h6"
                      class="bg-light fw-semibold py-2"
                    >
                      Select Country
                    </CDropdownHeader>
                    <CDropdownDivider />
                    <div
                      v-for="singleLocale in this.localesData"
                      :key="singleLocale.id"
                    >
                      <CDropdownItem>
                        <div
                          class="d-flex align-items-center justify-content-between form-check"
                        >
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          >
                            {{ singleLocale.name }} ({{ singleLocale.code }})
                          </label>
                          <CIcon
                            v-if="singleLocale.code === 'en-ca'"
                            name="cifUs"
                            class=""
                            size="xl"
                          />
                          <CIcon
                            v-if="singleLocale.code === 'ar_iq'"
                            name="cifIq"
                            class=""
                            size="xl"
                          />
                          <CIcon
                            v-else-if="singleLocale.code === 'fr-ca'"
                            name="cifFr"
                            class=""
                            size="xl"
                          />
                          <CIcon
                            v-else-if="singleLocale.code === 'sp-es'"
                            name="cifEs"
                            class=""
                            size="xl"
                          />
                        </div>
                      </CDropdownItem>
                      <CDropdownDivider />
                    </div>
                  </CDropdownMenu>
                </CDropdown>
              </CCol>
            </div>
          </div>
          <div class="col-12 col-lg-6 mb-3">
            <div class="d-flex">
              <CFormLabel
                for="lenderCodeField"
                class="col-4 col-sm-5 col-md-3 col-lg-3 col-form-label col-form-label-sm"
                >TAGS</CFormLabel
              >
              <CCol
                class="col-8 col-sm-7 col-md-9 col-lg-9 border border-secondary rounded ps-2"
              >
                <ejs-multiselect
                  id=""
                  :dataSource="sportsData"
                ></ejs-multiselect>
              </CCol>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-lg-6 mb-3">
            <div class="d-flex">
              <CFormLabel
                for="lenderCodeField"
                class="col-4 col-sm-5 col-md-3 col-lg-3 col-form-label col-form-label-sm"
                >IS PUBLISHED</CFormLabel
              >
              <div class="rounded bg-body shadow-sm mx-1 text-success">
                <font-awesome-icon
                  :icon="['fas', 'check']"
                  size="lg"
                  class="mx-2 mt-2 mb-1"
                />
              </div>
              <CCol class="col-8 col-sm-7 col-md-9 col-lg-9"> </CCol>
            </div>
          </div>
        </div>
        <hr class="mt-3 mb-0" />
        <div class="d-flex justify-content-center">
          <div class="d-grid gap-2 d-md-flex justify-content-md-end my-3">
            <CButton
              @click="visible = !visible"
              class="btn-success text-white me-md-2 px-5 fw-bold"
              shape="rounded-pill"
              >Preview</CButton
            >
            <CButton
              class="btn-info text-white px-5 fw-bold"
              shape="rounded-pill"
              >Download</CButton
            >
          </div>
        </div>
        <hr class="mt-3 mb-0" />
        <div class="row t-head mx-0 my-0 pt-2 pb-1">
          <div class="col col-lg-2">
            <h6 class="text-center pt-1">Settings</h6>
          </div>
          <div class="col">
            <h6 class="text-center pt-1">BMO</h6>
          </div>
          <div class="col">
            <h6 class="text-center pt-1">All Stars</h6>

            <!-- <CAccordionHeader></CAccordionHeader> -->
          </div>
        </div>
        <CCollapse :visible="visible">
          <div class="row mx-0">
            <div class="col col-lg-2 border text-center py-4">
              <h5>MINAGE</h5>
            </div>
            <div class="col border py-4">
              <div class="d-flex justify-content-center">
                <CCol sm="2" class="pe-2">
                  <CFormInput type="text" id="lenderCodeField" value="18" />
                </CCol>
                <CCol sm="7">
                  <CFormInput
                    type="text"
                    id="lenderCodeField"
                    value="These are notes"
                  />
                </CCol>
              </div>
            </div>
            <div class="col border py-4">
              <div class="d-flex justify-content-center">
                <CCol sm="2" class="pe-2">
                  <CFormInput type="text" id="lenderCodeField" value="18" />
                </CCol>
                <CCol sm="7">
                  <CFormInput
                    type="text"
                    id="lenderCodeField"
                    value="Lorem Ipsum"
                  />
                </CCol>
              </div>
            </div>
          </div>
          <div class="row mx-0">
            <div class="col col-lg-2 border text-center py-4">
              <h5>MAXAGE</h5>
            </div>
            <div class="col border py-4">
              <div class="d-flex justify-content-center">
                <CCol sm="2" class="pe-2">
                  <CFormInput type="text" id="lenderCodeField" value="75" />
                </CCol>
                <CCol sm="7">
                  <CFormInput
                    type="text"
                    id="lenderCodeField"
                    value="These are notes"
                  />
                </CCol>
              </div>
            </div>
            <div class="col border py-4">
              <div class="d-flex justify-content-center">
                <CCol sm="2" class="pe-2">
                  <CFormInput type="text" id="lenderCodeField" value="55" />
                </CCol>
                <CCol sm="7">
                  <CFormInput
                    type="text"
                    id="lenderCodeField"
                    value="Lorem Ipsum"
                  />
                </CCol>
              </div>
            </div>
          </div>
        </CCollapse>
      </CForm>
    </CCol>
  </CRow>
</template>
<script>
import { MultiSelectComponent } from '@syncfusion/ej2-vue-dropdowns'
import checkIcon from '@/assets/images/icons/check.png'
export default {
  components: {
    'ejs-multiselect': MultiSelectComponent,
  },
  name: 'Login',
  data() {
    return {
      value: '',
      options: [
        'Select option',
        'options',
        'selected',
        'mulitple',
        'label',
        'searchable',
        'clearOnSelect',
        'hideSelected',
        'maxHeight',
        'allowEmpty',
        'showLabels',
        'onChange',
        'touched',
      ],
      sportsData: [
        'Badminton',
        'Basketball',
        'Cricket',
        'Football',
        'Golf',
        'Gymnastics',
        'Hockey',
        'Rugby',
        'Snooker',
        'Tennis',
      ],
      checkIcon,
      visibleVerticallyCenteredDemo: false,
      visible: false,
    }
  },
  beforeCreate: function () {
    if (localStorage.getItem('token') === null) {
      console.log('you can not access')
      this.$router.push('/')
    } else {
      console.log('auth successful')
    }
  },
}
</script>
<style>
@import '~@syncfusion/ej2-base/styles/material.css';
/* @import '~@syncfusion/ej2-inputs/styles/material.css'; */
@import '~@syncfusion/ej2-vue-dropdowns/styles/material.css';
/* @import '~@syncfusion/ej2-buttons/styles/material.css'; */
</style>
