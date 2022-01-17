<template>
  <CRow class="bg-body border rounded p-3 mb-3">
    <CCol :md="12" class="">
      <div class="d-flex align-items-center justify-content-between">
        <div sm="auto">
          <h2 class="fw-bold">Lenders</h2>
        </div>
        <div sm="auto">
          <CButton
            class="ms-auto text-white px-4 btn-info"
            @click="
              () => {
                visibleVerticallyCenteredDemo = true
              }
            "
          >
            ADD
          </CButton>
          <!-- MOdal Window for adding new lender Record -->
          <!-- ------------------------------------------- -->
          <!-- -----------------MODAL----------------------- -->
          <CModal
            size="lg"
            alignment="center"
            :visible="visibleVerticallyCenteredDemo"
            @close="
              () => {
                visibleVerticallyCenteredDemo = false
              }
            "
          >
            <CModalHeader>
              <CModalTitle> Add Lender Information</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <CForm>
                <div class="row px-2">
                  <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 py-1">
                    <div class="d-flex justify-content-lg-between">
                      <CFormLabel
                        for="colFormLabelSm"
                        class="col-2 col-sm-3 col-md-2 col-lg-2 col-form-label col-form-label-sm"
                        >ID</CFormLabel
                      >
                      <CCol class="col-10 col-sm-9 col-md-10 col-lg-10">
                        <CFormInput
                          type="text"
                          class="bg-fields form-control form-control-sm"
                          id="colFormLabelSm"
                          placeholder=""
                          readonly
                        />
                      </CCol>
                    </div>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 py-1">
                    <div class="d-flex justify-content-lg-between">
                      <CFormLabel
                        for="colFormLabelSm"
                        class="col-2 col-sm-3 col-md-2 col-lg-2 col-form-label col-form-label-sm"
                        >Code</CFormLabel
                      >
                      <CCol class="col-10 col-sm-9 col-md-10 col-lg-10">
                        <CFormInput
                          type="text"
                          class="bg-fields form-control form-control-sm"
                          id="colFormLabelSm"
                          placeholder=""
                          v-model="this.dataToSend.code"
                        />
                      </CCol>
                    </div>
                  </div>
                </div>
                <CRow class="justify-content-center">
                  <CCol sm="" class="">
                    <CTable responsive="sm" borderless table-sm>
                      <CTableBody>
                        <CTableRow scope="row" align="middle">
                          <CTableHeaderCell scope="col">
                            Languages
                          </CTableHeaderCell>
                          <CTableHeaderCell
                            scope="col"
                            style="white-space: nowrap"
                          >
                            Lenders Name
                          </CTableHeaderCell>
                          <CTableHeaderCell scope="col">
                            Description
                          </CTableHeaderCell>
                          <CTableHeaderCell scope="col">
                            <CButton
                              class="btn-info ms-lg-5"
                              shape="rounded-circle"
                              @click="
                                () => {
                                  this.count_add++
                                }
                              "
                            >
                              <CIcon name="cilPlus" class="text-white" />
                            </CButton>
                          </CTableHeaderCell>
                        </CTableRow>
                        <CTableRow v-for="n in parseInt(count_add)" :key="n">
                          <CTableDataCell scope="row">
                            <CInputGroup class="">
                              <CDropdown alignment="end" variant="input-group">
                                <CDropdownToggle
                                  color="secondary"
                                  size="sm"
                                  variant="outline"
                                  class="d-flex align-items-center justify-content-between bg-fields"
                                  style="width: 120px; overflow-x: visible"
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
                                          value="singleLocale.code"
                                          @click="setFlag(singleLocale.code)"
                                        />
                                        <label
                                          class="form-check-label"
                                          for="flexRadioDefault1"
                                        >
                                          {{ singleLocale.name }} ({{
                                            singleLocale.code
                                          }})
                                        </label>
                                        <CIcon
                                          v-if="singleLocale.code === 'en-ca'"
                                          name="cifUs"
                                          class=""
                                          size="xl"
                                        />
                                        <CIcon
                                          v-if="singleLocale.code === 'Ur-pa'"
                                          name="cifPk"
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
                                          v-else-if="
                                            singleLocale.code === 'fr-ca'
                                          "
                                          name="cifFr"
                                          class=""
                                          size="xl"
                                        />
                                        <CIcon
                                          v-else-if="
                                            singleLocale.code === 'sp-es'
                                          "
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
                            </CInputGroup>
                          </CTableDataCell>
                          <CTableDataCell>
                            <CFormInput
                              type="text"
                              class="bg-fields"
                              id="exampleFormControlInput1"
                              placeholder=""
                              v-model="
                                this.dataToSend.resources[0].resourceName
                              "
                            />
                          </CTableDataCell>
                          <CTableDataCell colspan="2">
                            <CFormInput
                              type="text"
                              class="bg-fields"
                              id="exampleFormControlInput1"
                              v-model="
                                this.dataToSend.resources[0].resourceDesc
                              "
                              placeholder=""
                            />
                          </CTableDataCell>
                        </CTableRow>
                      </CTableBody>
                    </CTable>
                  </CCol>
                </CRow>
              </CForm>
            </CModalBody>
            <CModalFooter class="mt-5 border-0">
              <!-- <CButton
                color="dark"
                shape="rounded-0"
                @click="
                  () => {
                    visibleVerticallyCenteredDemo = false
                  }
                "
              >
                Reset
              </CButton> -->
              <CButton
                class="text-white px-4 btn-dark"
                @click="
                  () => {
                    visibleVerticallyCenteredDemo = false
                  }
                "
              >
                Reset
              </CButton>
              <CButton class="text-white px-4 btn-info" @click="addNewLender()">
                Save
              </CButton>
              <!-- <CButton class="btn-info text-white" shape="rounded-0"
                >Save</CButton
              > -->
            </CModalFooter>
          </CModal>
          <!-- END MODAL WINDOW -->
        </div>
      </div>
      <!-- --------------------------------->
      <!-- lANGUAGE AND SEARCH FILTERS -->
      <!-- --------------------------------- -->
      <hr class="mt-3 mb-0" />
      <div class="d-flex justify-content-between align-items-center flex-wrap">
        <div>
          <div class="d-flex align-items-center py-2">
            <div class="pe-2">
              <strong>Language 1 </strong>
            </div>
            <CForm class="ps-2">
              <CDropdown alignment="end" variant="input-group">
                <CDropdownToggle
                  color="secondary"
                  size="sm"
                  variant="outline"
                  class="d-flex align-items-center justify-content-between"
                  style="width: 120px"
                  id="flexRadioDefault1"
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
                        <CFormCheck type="radio" id="flexRadioDefault1">
                          <label for="flexRadioDefault1">
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
                        </CFormCheck>
                      </div>
                    </CDropdownItem>
                    <CDropdownDivider />
                  </div>
                </CDropdownMenu>
              </CDropdown>
            </CForm>
          </div>
        </div>
        <div>
          <div class="d-flex align-items-center py-2">
            <div class="pe-2">
              <strong>Language 2 </strong>
            </div>
            <div class="ps-2">
              <CForm class="d-flex">
                <CDropdown alignment="end" variant="input-group">
                  <CDropdownToggle
                    color="secondary"
                    size="sm"
                    variant="outline"
                    class="d-flex align-items-center justify-content-between"
                    style="width: 120px"
                  >
                    <label
                      class="d-flex align-items-center form-check-label"
                      for="flexRadioDefault1"
                    >
                      French
                    </label>
                    <CIcon name="cifFr" class="mx-2" size="xl" />
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
              </CForm>
            </div>
          </div>
        </div>
        <div>
          <div class="d-flex py-2">
            <div class="d-flex align-items-center">
              <strong class="pe-1">Filter </strong>
              <CIcon name="cilFilter" />
            </div>
            <div class="ms-2">
              <CForm class="d-flex">
                <CFormInput
                  type="search"
                  class=""
                  size="sm"
                  placeholder="Search Globally"
                />
              </CForm>
            </div>
          </div>
        </div>
      </div>
      <hr class="mb-3" />
      <!-- ---------------TABLE----------------- -->
      <CTable align="middle" bordered responsive class="text-center">
        <CTableHead>
          <CTableRow class="t-head">
            <CTableHeaderCell scope="col" class="text-white"
              >Actions
            </CTableHeaderCell>
            <CTableHeaderCell scope="col" class="text-white"
              >ID
            </CTableHeaderCell>
            <CTableHeaderCell scope="col" class="text-white">
              <div class="d-inline-flex align-items-center">
                Code
                <CIcon name="cilSwapVertical" class="ms-2" />
              </div>
            </CTableHeaderCell>
            <CTableHeaderCell scope="col" class="text-white">
              <div class="d-inline-flex align-items-center">
                Name
                <CIcon name="cilSwapVertical" class="ms-2" />
                <CButton
                  class="d-inline-flex align-items-center text-white bg-btn m-0 p-0 ms-3 px-1"
                  size="sm"
                >
                  <div class="d-none d-lg-block pe-2">ENG</div>
                  <CIcon name="cifUs" size="lg" class="pt-1" />
                </CButton>
              </div>
            </CTableHeaderCell>
            <CTableHeaderCell scope="col" class="w-30 text-white">
              <div class="d-inline-flex">
                Name
                <CButton
                  class="d-inline-flex align-items-center text-white bg-btn m-0 p-0 ms-3 px-1"
                  size="sm"
                >
                  <div class="d-none d-lg-block pe-2">FRN</div>
                  <CIcon name="cifFr" size="lg" class="pt-1" />
                </CButton>
              </div>
            </CTableHeaderCell>
            <CTableHeaderCell scope="col" class="w-30 text-white">
              <div class="d-inline-flex">
                Description
                <CButton
                  class="d-inline-flex align-items-center text-white bg-btn m-0 p-0 ms-3 px-1"
                  size="sm"
                >
                  <div class="d-none d-lg-block pe-2">ENG</div>
                  <CIcon name="cifUs" size="lg" class="pt-1" />
                </CButton>
              </div>
            </CTableHeaderCell>
            <CTableHeaderCell scope="col" class="w-30 text-white">
              <div class="d-inline-flex">
                Description
                <CButton
                  class="d-inline-flex align-items-center text-white bg-btn m-0 p-0 ms-3 px-1"
                  size="sm"
                >
                  <div class="d-none d-lg-block pe-2">FRN</div>
                  <CIcon name="cifFr" size="lg" class="pt-1" />
                </CButton>
              </div>
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow
            v-for="singleLender in this.lendersData"
            :key="singleLender.id"
          >
            <CTableDataCell>
              <div class="d-inline-flex justify-content-center">
                <a @click="getLenderbyID(singleLender.id)">
                  <div class="rounded bg-body shadow-sm mx-1 cursor-change">
                    <font-awesome-icon
                      :icon="['fas', 'pen']"
                      class="mx-2 mt-2 mb-1"
                    />
                  </div>
                </a>
                <!-- <router-link to="/conditions"> -->
                <a @click="GoToLenderConditions(singleLender.id)">
                  <div class="rounded bg-body shadow-sm mx-1 text-dark">
                    <font-awesome-icon
                      :icon="['fas', 'cog']"
                      class="mx-2 mt-2 mb-1"
                    />
                  </div>
                  <!-- </router-link> -->
                </a>
                <router-link to="/effectiveconditions">
                  <div class="rounded bg-body shadow-sm mx-1 text-dark">
                    <font-awesome-icon
                      :icon="['fas', 'check']"
                      class="mx-2 mt-2 mb-1"
                    />
                  </div>
                </router-link>
                <a @click="deleteLender(singleLender.id)">
                  <div
                    class="rounded bg-body shadow-sm mx-1 text-dark cursor-change"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'trash']"
                      class="mx-2 mt-2 mb-1"
                    />
                  </div>
                </a>
              </div>
            </CTableDataCell>
            <CTableDataCell> {{ singleLender.id }} </CTableDataCell>
            <CTableDataCell> {{ singleLender.code }} </CTableDataCell>
            <CTableDataCell
              v-for="singleResource in singleLender.resources"
              :key="singleResource.id"
            >
              {{ singleResource.resourceName }}
            </CTableDataCell>
            <!-- <CTableDataCell> Otto </CTableDataCell> -->
            <CTableDataCell
              v-for="singleResource in singleLender.resources"
              :key="singleResource.id"
            >
              {{ singleResource.resourceDesc }}
            </CTableDataCell>
            <!--<CTableDataCell> Vivamus neque lorem </CTableDataCell> -->
          </CTableRow>
        </CTableBody>
      </CTable>
      <!-- TABLE ENDS HERE -->
    </CCol>
  </CRow>
  <!-- Modal Edit Icon for editing existing data-->
  <CModal
    size="lg"
    alignment="center"
    :visible="visibleVerticallyCenteredDemo1"
    @close="
      () => {
        visibleVerticallyCenteredDemo1 = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle> Edit Lender Information</CModalTitle>
    </CModalHeader>
    <CForm>
      <CModalBody>
        <div class="row px-2">
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 py-1">
            <div class="d-flex justify-content-lg-between">
              <CFormLabel
                for="colFormLabelSm"
                class="col-2 col-sm-3 col-md-2 col-lg-2 col-form-label col-form-label-sm"
                >ID</CFormLabel
              >
              <CCol class="col-10 col-sm-9 col-md-10 col-lg-10">
                <CFormInput
                  type="text"
                  class="bg-fields form-control form-control-sm"
                  id="colFormLabelSm"
                  v-model="this.lenderByID.id"
                  readonly
                />
              </CCol>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 py-1">
            <div class="d-flex justify-content-lg-between">
              <CFormLabel
                for="colFormLabelSm"
                class="col-2 col-sm-3 col-md-2 col-lg-2 col-form-label col-form-label-sm"
                >Code</CFormLabel
              >
              <CCol class="col-10 col-sm-9 col-md-10 col-lg-10">
                <CFormInput
                  type="text"
                  class="bg-fields form-control form-control-sm"
                  id="colFormLabelSm"
                  v-model="this.lenderByID.code"
                  readonly
                />
              </CCol>
            </div>
          </div>
        </div>
        <CRow class="justify-content-center">
          <CCol sm="" class="">
            <CTable responsive="sm" align="middle" borderless table-sm>
              <CTableBody>
                <CTableRow scope="row" align="middle">
                  <CTableHeaderCell scope="col"> Languages </CTableHeaderCell>
                  <CTableHeaderCell scope="col" style="white-space: nowrap">
                    Lenders Name
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Description </CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    <CButton
                      class="ms-lg-auto btn-info ms-2"
                      shape="rounded-circle"
                      @click="
                        () => {
                          this.count++
                        }
                      "
                    >
                      <CIcon name="cilPlus" class="text-white" />
                    </CButton>
                  </CTableHeaderCell>
                </CTableRow>
                <CTableRow
                  v-for="singleResource in this.lenderByID.resources"
                  :key="singleResource.id"
                >
                  <CTableDataCell scope="row">
                    <CInputGroup class="">
                      <CDropdown alignment="end" variant="input-group">
                        <CDropdownToggle
                          color="secondary"
                          size="sm"
                          variant="outline"
                          class="d-flex align-items-center justify-content-between bg-fields"
                          style="width: 120px"
                        >
                          <label
                            class="d-flex align-items-center form-check-label"
                            for="flexRadioDefault1"
                          >
                            {{ singleResource.localeCode }}
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
                                  {{ singleLocale.name }} ({{
                                    singleLocale.code
                                  }})
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
                    </CInputGroup>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CFormInput
                      type="text"
                      class="bg-fields"
                      id="exampleFormControlInput1"
                      v-model="singleResource.resourceName"
                    />
                  </CTableDataCell>
                  <CTableDataCell colspan="2">
                    <CFormInput
                      type="text"
                      class="bg-fields"
                      id="exampleFormControlInput1"
                      v-model="singleResource.resourceDesc"
                    />
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCol>
        </CRow>
      </CModalBody>
      <CModalFooter class="mt-5 border-0">
        <CButton
          class="text-white px-4 btn-dark"
          @click="
            () => {
              visibleVerticallyCenteredDemo1 = false
            }
          "
        >
          Reset
        </CButton>
        <CButton
          class="text-white px-4 btn-info"
          @click="updateLenderByID(lenderByID.id)"
          >Save me
        </CButton>
      </CModalFooter>
    </CForm>
  </CModal>
</template>

<script>
import editIcon from '@/assets/images/icons/edit.png'
import settingIcon from '@/assets/images/icons/gear.png'
import checkIcon from '@/assets/images/icons/check.png'
import deleteIcon from '@/assets/images/icons/delete.png'

export default {
  name: 'Login',
  data() {
    return {
      token: localStorage.getItem('token'),
      count: 1,
      count_add: 1,
      visibleVerticallyCenteredDemo: false,
      visibleVerticallyCenteredDemo1: false,
      editIcon,
      settingIcon,
      checkIcon,
      deleteIcon,
      lendersData: {},
      localesData: {},
      lenderByID: {},
      singleLendertempData: {},
      dataToSend: {
        code: '',
        resources: [
          {
            resourceName: '',
            resourceDesc: '',
            localeCode: '',
          },
        ],
      },
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
  created: function () {
    this.getLenders(), this.getLocales()
  },
  methods: {
    //delete API
    deleteLender(lenderID) {
      let api = 'https://rsoapi.squarera.online/api/lenders/' + lenderID
      this.axios
        .delete(api, {
          headers: {
            Authorization: this.token,
          },
        })
        .then((response) => {
          if (response.status == '200') {
            this.getLenders()
          } else {
            alert('Record not loaded')
          }
        })
    },
    //end delete Api
    setFlag(code) {
      this.dataToSend.resources[0].localeCode = code
    },
    // post APIS FUNCTIONS
    addNewLender() {
      let api = 'https://rsoapi.squarera.online/api/lenders'
      this.axios
        .post(api, this.dataToSend, {
          headers: {
            Authorization: this.token,
          },
        })
        .then((response) => {
          if (response.status == '200') {
            this.dataToSend = {}
            this.visibleVerticallyCenteredDemo = false
            this.getLenders()
          } else {
            alert('Record not loaded')
          }
        })
    },
    getLenders() {
      let token = this.token
      let api = 'https://rsoapi.squarera.online/api/lenders'
      this.axios
        .get(api, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          if (response.status == '200') {
            this.lendersData = response.data
          } else {
            alert('Record not loaded')
          }
          console.log(response.data)
        })
    },
    getLocales() {
      let token = this.token
      let api = 'https://rsoapi.squarera.online/api/locales'
      this.axios
        .get(api, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          if (response.status == '200') {
            this.localesData = response.data
          } else {
            alert('Record not loaded')
          }
          console.log(response.data)
        })
    },
    GoToLenderConditions(id) {
      this.$store.state.id = id
      this.$router.push('/conditions')
    },
    getLenderbyID(id) {
      let myId = parseInt(id)
      let token = this.token
      let api = 'https://rsoapi.squarera.online/api/lenders/' + myId
      this.axios
        .get(api, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          if (response.status == '200') {
            this.lenderByID = response.data
            this.singleLendertempData = response.data
            this.visibleVerticallyCenteredDemo1 = true
            // Object.freeze(this.singleLendertempData)
          } else {
            alert('Record not loaded')
          }
        })

      //this data object will be used later for comparison of arrays.
    },
    // GET APIS FUNCTIONS ENDS HERE
    // PUT APIS FUNCTIONS STARTS HERE
    updateLenderByID(id) {
      alert(id)
      let tempData
      tempData = this.lenderByID.resources
      let myId = parseInt(id)
      let token = this.token
      let updatedData = []
      for (var key in tempData) {
        updatedData.push({
          // id: tempData[key].lender.toString(),
          id: tempData[key].id,
          resourceName: tempData[key].resourceName,
          resourceDesc: tempData[key].resourceDesc,
          localeCode: tempData[key].localeCode,
        })
      }
      let api = 'https://rsoapi.squarera.online/api/lenders/resources/' + myId
      this.axios
        .put(api, updatedData, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          if (response.status == '200') {
            console.log(response.status)
            this.visibleVerticallyCenteredDemo1 = false
            this.getLenders()
          } else {
            console.log('data not found')
          }
        })
    },
  },
}
</script>
