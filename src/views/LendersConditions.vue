<template>
  <CRow class="bg-body border rounded p-3 mb-4">
    <CCol :md="12" class="">
      <div class="d-flex align-items-center justify-content-between">
        <div sm="auto">
          <h2 class="fw-bold">Lenders Conditions</h2>
        </div>
        <div sm="auto">
          <CButton
            class="ms-auto text-white px-4 btn-info"
            @click="add_to_lender_conditions"
          >
            Save
          </CButton>
          <!-- MOdal Window for adding new lender Record -->
          <!-- ------------------------------------------- -->
          <!-- -----------------MODAL----------------------- -->
          <CModal
            size="lg"
            alignment="center"
            :visible="visibleVerticallyCenteredDemo2"
            @close="
              () => {
                visibleVerticallyCenteredDemo2 = false
              }
            "
          >
            <CModalHeader>
              <CModalTitle class="text-center"
                >Add Lender Conditions Details</CModalTitle
              >
            </CModalHeader>
            <CModalBody>
              <CRow class="justify-content-center">
                <CCol lg="6" class=""> </CCol>
                <CCol lg="6" class=""> </CCol>
                <CCol lg="10" class="">
                  <CTable borderless table-sm>
                    <CTableBody>
                      <CTableRow>
                        <CTableDataCell scope="row">
                          <CFormLabel for="exampleFormControlInput1"
                            >Name</CFormLabel
                          >
                        </CTableDataCell>
                        <CTableDataCell>
                          <CFormSelect
                            class=""
                            aria-label="select example"
                            size="sm"
                            v-model="lookup_condition_name_type"
                          >
                            <option disabled selected value="">
                              Lookup Conditions
                            </option>
                            <option
                              v-for="(
                                single_lookup_condition, n
                              ) in lookup_conditions"
                              :key="n"
                              :value="
                                single_lookup_condition.name +
                                ',' +
                                single_lookup_condition.dataType
                              "
                            >
                              {{ single_lookup_condition.name }}
                            </option>
                          </CFormSelect>
                        </CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableDataCell scope="row">
                          <CFormLabel for="exampleFormControlInput1"
                            >Value
                          </CFormLabel>
                        </CTableDataCell>
                        <CTableDataCell>
                          <CFormInput
                            type="text"
                            class="bg-fields"
                            id="exampleFormControlInput1"
                            placeholder=""
                            v-model="add_lookup_conditions.value"
                            required
                          />
                          <span asp-validation-for="Code" class="text-danger">{{
                            this.validate_msg
                          }}</span>
                        </CTableDataCell>
                      </CTableRow>

                      <CTableRow>
                        <CTableHeaderCell scope="row">
                          <CFormLabel for="exampleFormControlInput1"
                            >Languages</CFormLabel
                          >
                        </CTableHeaderCell>
                        <CTableHeaderCell>
                          <CFormLabel for="exampleFormControlInput1"
                            >Notes</CFormLabel
                          >
                        </CTableHeaderCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableDataCell scope="row">
                          <CForm>
                            <CDropdown alignment="end" variant="input-group">
                              <CDropdownToggle
                                color="secondary"
                                size="sm"
                                variant="outline"
                                class="d-flex align-items-center justify-content-between locale"
                                style="width: 120px"
                              >
                                <label
                                  class="d-flex align-items-center form-check-label"
                                  for="flexRadioDefault1"
                                  v-if="this.lookup_lang_one_name"
                                >
                                  {{ this.lookup_lang_one_name }}

                                  <div class="lang">
                                    <CIcon
                                      v-if="
                                        this.lookup_lang_one_code === 'en-ca'
                                      "
                                      name="cifUs"
                                      class=""
                                      size="xl"
                                    />
                                    <CIcon
                                      v-else-if="
                                        this.lookup_lang_one_code === 'fr-ca'
                                      "
                                      name="cifFr"
                                      class=""
                                      size="xl"
                                    />
                                    <CIcon
                                      v-else-if="
                                        this.lookup_lang_one_code === 'sp-es'
                                      "
                                      name="cifEs"
                                      class=""
                                      size="xl"
                                    />
                                  </div>
                                </label>

                                <label
                                  class="d-flex align-items-center form-check-label"
                                  for="flexRadioDefault1"
                                  v-else
                                >
                                  Select
                                </label>
                              </CDropdownToggle>
                              <CDropdownMenu style="width: 200px">
                                <CDropdownHeader
                                  component="h6"
                                  class="bg-light fw-semibold py-2"
                                >
                                  Select Language
                                </CDropdownHeader>
                                <CDropdownDivider />
                                <div
                                  v-for="singleLocale in this.localesData"
                                  :key="singleLocale.id"
                                >
                                  <CDropdownItem>
                                    <div
                                      class="d-flex align-items-center form-check"
                                    >
                                      <input
                                        class="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault1"
                                        @click="
                                          setflag_lookup_lang_one(
                                            singleLocale.code,
                                            singleLocale.name,
                                          )
                                        "
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
                          </CForm>
                        </CTableDataCell>
                        <CTableDataCell>
                          <CFormInput
                            type="text"
                            class="bg-fields"
                            id="exampleFormControlInput1"
                            v-model="first_note"
                          />
                        </CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableDataCell scope="row">
                          <CForm>
                            <CDropdown alignment="end" variant="input-group">
                              <CDropdownToggle
                                color="secondary"
                                size="sm"
                                variant="outline"
                                class="d-flex align-items-center justify-content-between locale"
                                style="width: 120px"
                              >
                                <label
                                  class="d-flex align-items-center form-check-label"
                                  for="flexRadioDefault1"
                                  v-if="this.lookup_lang_two_name"
                                >
                                  {{ this.lookup_lang_two_name }}

                                  <div class="lang">
                                    <CIcon
                                      v-if="
                                        this.lookup_lang_two_code === 'en-ca'
                                      "
                                      name="cifUs"
                                      class=""
                                      size="xl"
                                    />
                                    <CIcon
                                      v-else-if="
                                        this.lookup_lang_two_code === 'fr-ca'
                                      "
                                      name="cifFr"
                                      class=""
                                      size="xl"
                                    />
                                    <CIcon
                                      v-else-if="
                                        this.lookup_lang_two_code === 'sp-es'
                                      "
                                      name="cifEs"
                                      class=""
                                      size="xl"
                                    />
                                  </div>
                                </label>

                                <label
                                  class="d-flex align-items-center form-check-label"
                                  for="flexRadioDefault1"
                                  v-else
                                >
                                  Select
                                </label>
                              </CDropdownToggle>
                              <CDropdownMenu style="width: 200px">
                                <CDropdownHeader
                                  component="h6"
                                  class="bg-light fw-semibold py-2"
                                >
                                  Select Language
                                </CDropdownHeader>
                                <CDropdownDivider />
                                <div
                                  v-for="singleLocale in this.localesData"
                                  :key="singleLocale.id"
                                >
                                  <CDropdownItem>
                                    <div
                                      class="d-flex align-items-center form-check"
                                    >
                                      <input
                                        class="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault1"
                                        @click="
                                          setflag_lookup_lang_two(
                                            singleLocale.code,
                                            singleLocale.name,
                                          )
                                        "
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
                          </CForm>
                        </CTableDataCell>
                        <CTableDataCell>
                          <CFormInput
                            type="text"
                            class="bg-fields"
                            id="exampleFormControlInput1"
                            v-model="second_note"
                          />
                        </CTableDataCell>
                      </CTableRow>

                      <CTableRow>
                        <CTableDataCell scope="row">
                          <CForm>
                            <CDropdown alignment="end" variant="input-group">
                              <CDropdownToggle
                                color="secondary"
                                size="sm"
                                variant="outline"
                                class="d-flex align-items-center justify-content-between locale"
                                style="width: 120px"
                              >
                                <label
                                  class="d-flex align-items-center form-check-label"
                                  for="flexRadioDefault1"
                                  v-if="this.lookup_lang_three_name"
                                >
                                  {{ this.lookup_lang_three_name }}

                                  <div class="lang">
                                    <CIcon
                                      v-if="
                                        this.lookup_lang_three_code === 'en-ca'
                                      "
                                      name="cifUs"
                                      class=""
                                      size="xl"
                                    />
                                    <CIcon
                                      v-else-if="
                                        this.lookup_lang_three_code === 'fr-ca'
                                      "
                                      name="cifFr"
                                      class=""
                                      size="xl"
                                    />
                                    <CIcon
                                      v-else-if="
                                        this.lookup_lang_three_code === 'sp-es'
                                      "
                                      name="cifEs"
                                      class=""
                                      size="xl"
                                    />
                                  </div>
                                </label>

                                <label
                                  class="d-flex align-items-center form-check-label"
                                  for="flexRadioDefault1"
                                  v-else
                                >
                                  Select
                                </label>
                              </CDropdownToggle>
                              <CDropdownMenu style="width: 200px">
                                <CDropdownHeader
                                  component="h6"
                                  class="bg-light fw-semibold py-2"
                                >
                                  Select Language
                                </CDropdownHeader>
                                <CDropdownDivider />
                                <div
                                  v-for="singleLocale in this.localesData"
                                  :key="singleLocale.id"
                                >
                                  <CDropdownItem>
                                    <div
                                      class="d-flex align-items-center form-check"
                                    >
                                      <input
                                        class="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault1"
                                        @click="
                                          setflag_lookup_lang_three(
                                            singleLocale.code,
                                            singleLocale.name,
                                          )
                                        "
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
                          </CForm>
                        </CTableDataCell>
                        <CTableDataCell>
                          <CFormInput
                            type="text"
                            class="bg-fields"
                            id="exampleFormControlInput1"
                            v-model="third_note"
                          />
                        </CTableDataCell>
                      </CTableRow>
                    </CTableBody>
                  </CTable>
                </CCol>
              </CRow>
            </CModalBody>
            <CModalFooter class="mx-5 mt-5 border-0">
              <CButton
                color="dark"
                @click="
                  () => {
                    visibleVerticallyCenteredDemo2 = false
                  }
                "
              >
                Reset
              </CButton>
              <CButton
                type="submit"
                class="btn-info text-white"
                @click.prevent="post_lookup_conditions()"
              >
                Save
              </CButton>
            </CModalFooter>
          </CModal>
          <!-- END MODAL WINDOW -->
        </div>
      </div>
      <!-- --------------------------------->
      <!-- lANGUAGE AND SEARCH FILTERS -->
      <!-- --------------------------------- -->
      <!-- ----------FILTERS---------------- -->
      <hr class="mt-3 mb-0" />
      <div class="d-flex justify-content-between align-items-center flex-wrap">
        <div>
          <div class="d-flex align-items-center">
            <div class="pe-2">
              <strong>Language 1 </strong>
            </div>
            <div class="p-2">
              <CForm class="ps-2">
                <CDropdown alignment="end" variant="input-group">
                  <CDropdownToggle
                    color="secondary"
                    size="sm"
                    variant="outline"
                    class="d-flex align-items-center justify-content-between locale"
                    style="width: 120px"
                  >
                    <label
                      class="d-flex align-items-center form-check-label"
                      for="flexRadioDefault1"
                      :v-model="this.get_user_locale1"
                    >
                      {{ this.get_user_locale1 }}

                      <div class="lang">
                        <CIcon
                          v-if="this.get_user_locale1 === 'en-ca'"
                          name="cifUs"
                          class=""
                          size="xl"
                        />
                        <CIcon
                          v-else-if="this.get_user_locale1 === 'fr-ca'"
                          name="cifFr"
                          class=""
                          size="xl"
                        />
                        <CIcon
                          v-else-if="this.get_user_locale1 === 'sp-es'"
                          name="cifEs"
                          class=""
                          size="xl"
                        />
                      </div>
                    </label>

                    <!-- <label
                      class="d-flex align-items-center form-check-label"
                      for="flexRadioDefault1"
                      v-else
                    >
                      Select
                    </label> -->
                  </CDropdownToggle>
                  <CDropdownMenu style="width: 200px">
                    <CDropdownHeader
                      component="h6"
                      class="bg-light fw-semibold py-2"
                    >
                      Select Language
                    </CDropdownHeader>
                    <CDropdownDivider />
                    <div
                      v-for="singleLocale in this.localesData"
                      :key="singleLocale.id"
                    >
                      <CDropdownItem
                        v-if="this.get_user_locale1 !== singleLocale.code"
                      >
                        <div class="d-flex align-items-center form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            @click="
                              setFlag(singleLocale.code, singleLocale.name),
                                update_user_locale1(singleLocale.code)
                            "
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
          <div class="d-flex align-items-center">
            <div class="pe-2">
              <strong>Language 2 </strong>
            </div>
            <div class="p-2">
              <CForm class="ps-2">
                <CDropdown alignment="end" variant="input-group">
                  <CDropdownToggle
                    color="secondary"
                    size="sm"
                    variant="outline"
                    class="d-flex align-items-center justify-content-between locale"
                    style="width: 120px"
                  >
                    <label
                      class="d-flex align-items-center form-check-label"
                      for="flexRadioDefault1"
                      :v-model="this.get_user_locale2"
                    >
                      {{ this.get_user_locale2 }}

                      <div class="lang">
                        <CIcon
                          v-if="this.get_user_locale2 === 'en-ca'"
                          name="cifUs"
                          class=""
                          size="xl"
                        />
                        <CIcon
                          v-else-if="this.get_user_locale2 === 'fr-ca'"
                          name="cifFr"
                          class=""
                          size="xl"
                        />
                        <CIcon
                          v-else-if="this.get_user_locale2 === 'sp-es'"
                          name="cifEs"
                          class=""
                          size="xl"
                        />
                      </div>
                    </label>

                    <!-- <label
                      class="d-flex align-items-center form-check-label"
                      for="flexRadioDefault1"
                      v-else
                    >
                      Select
                    </label> -->
                  </CDropdownToggle>
                  <CDropdownMenu style="width: 200px">
                    <CDropdownHeader
                      component="h6"
                      class="bg-light fw-semibold py-2"
                    >
                      Select Language
                    </CDropdownHeader>
                    <CDropdownDivider />
                    <div
                      v-for="singleLocale in this.localesData"
                      :key="singleLocale.id"
                    >
                      <CDropdownItem
                        v-if="this.get_user_locale2 !== singleLocale.code"
                      >
                        <div class="d-flex align-items-center form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            @click="
                              setFlag2(singleLocale.code, singleLocale.name),
                                update_user_locale2(singleLocale.code)
                            "
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
        <div><h1></h1></div>
      </div>
      <hr class="mb-3" />
      <!-- Add New Lenders Conditions Heading -->
      <div class="row t-head mx-0 pt-3">
        <div class="col">
          <h5>Add New Lenders Conditions</h5>
        </div>
      </div>
      <!-- Body -->
      <CForm class="m-3">
        <div class="row">
          <div class="col-12 col-md-7 col-lg-7 col-xl-7 py-1">
            <CRow>
              <CCol class="col-4 col-md-3 col-lg-3">
                <CFormLabel
                  for="colFormLabelSm"
                  class="col-form-label col-form-label-sm"
                  >LENDER CODE</CFormLabel
                >
              </CCol>
              <CCol class="col-8 col-md-6 col-lg-7">
                <CFormInput
                  type="text"
                  class="form-control form-control-sm"
                  id="colFormLabelSm"
                  v-model="this.$route.params.lender_code"
                  readonly
                />
              </CCol>
              <CCol class="col-2 col-md-2 col-lg-2"></CCol>
            </CRow>
          </div>
          <div class="col-12 col-md-5 col-lg-5 col-xl-5 py-1">
            <CRow>
              <CCol class="col-4 col-md-3 col-lg-3">
                <CFormLabel
                  for="colFormLabelSm"
                  class="col-form-label col-form-label-sm"
                  >NAME</CFormLabel
                >
              </CCol>
              <CCol class="col-8 col-md-6 col-lg-9">
                <CFormInput
                  type="text"
                  class="form-control form-control-sm"
                  id="colFormLabelSm"
                  v-model="this.user_name"
                  readonly
                />
              </CCol>
              <CCol class="col-2 col-md-2 col-lg-2"></CCol>
            </CRow>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 py-1">
            <CRow>
              <CCol class="col-4 col-md-3 col-lg-3">
                <CFormLabel
                  for="colFormLabelSm"
                  class="col-form-label col-form-label-sm"
                  >TAGS</CFormLabel
                >
              </CCol>
              <CCol class="col-8 col-md-6 col-lg-7">
                <!-- <div class="output">Data: {{ my_final_tags.value }}</div> -->
                <Multiselect
                  v-model="my_final_tags.value"
                  v-bind="my_final_tags"
                  :options="this.lender_tags"
                ></Multiselect>
                <!-- <ejs-multiselect
                    id="multiselect"
                    :dataSource="this.ddData"
                    :fields="this.fields"
                    :value="ddValue"
                    :@select="tag_change()"
                    placeholder="Select Tags"
                  ></ejs-multiselect> -->
              </CCol>
              <CCol class="col-2 col-sm-12 col-md-2 col-lg-2"> </CCol>
            </CRow>
          </div>
          <div class="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 py-1">
            <CRow>
              <CCol class="col-4 col-md-3 col-lg-3">
                <CFormLabel
                  for="colFormLabelSm"
                  class="col-form-label col-form-label-sm"
                  >COUNTRY<sup class="text-danger fs-6"> * </sup></CFormLabel
                >
              </CCol>
              <CCol class="col-8 col-md-6 col-lg-9">
                <CFormSelect
                  class=""
                  aria-label="select example"
                  size="sm"
                  v-model="add_lender_conditions.country"
                >
                  <option disabled selected value="">Choose Country</option>
                  <option v-for="(country, n) in countryList" :key="n">
                    {{ country }}
                  </option>
                </CFormSelect>
              </CCol>
              <CCol class="col-2 col-md-2 col-lg-2"></CCol>
            </CRow>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 py-1">
            <CRow>
              <CCol class="col-4 col-sm-6 col-md-4 col-lg-3">
                <CFormLabel
                  for="colFormLabelSm"
                  class="col-form-label col-form-label-sm"
                  >PUBLISHED DATE</CFormLabel
                >
              </CCol>
              <CCol class="col-8 col-md-6 col-lg-7">
                <CFormInput
                  type="date"
                  class="form-control form-control-sm"
                  id="colFormLabelSm"
                  v-model="this.add_lender_conditions.publishDate"
                />
              </CCol>
              <CCol class="col-6 col-md-2 col-lg-2 ms-auto my-2 my-lg-0">
                <CButton class="text-white btn-info btn-sm py-0 w-100">
                  PUBLISH
                </CButton>
              </CCol>
            </CRow>
          </div>
          <div class="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 py-1">
            <CRow>
              <CCol class="col-4 col-md-3 col-lg-3">
                <CFormLabel
                  for="colFormLabelSm"
                  class="col-form-label col-form-label-sm"
                  >REGION</CFormLabel
                >
              </CCol>
              <CCol class="col-8 col-md-6 col-lg-9">
                <CFormSelect
                  class=""
                  aria-label="select example"
                  size="sm"
                  v-model="this.add_lender_conditions.region"
                >
                  <option disabled selected value="">Choose Region</option>
                  <option v-for="(singleregion, n) in getall_regions" :key="n">
                    {{ singleregion.region }}
                  </option>
                </CFormSelect>
              </CCol>
              <CCol class="col-2 col-md-2 col-lg-2"></CCol>
            </CRow>
          </div>
        </div>
        <hr class="my-2" />
        <div class="row">
          <div class="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 py-1">
            <CRow>
              <CCol class="col-4 col-md-3 col-lg-3">
                <CFormLabel
                  for="colFormLabelSm"
                  class="col-form-label col-form-label-sm"
                >
                  <CLink
                    v-c-tooltip="'Campaign Start Date'"
                    style="color: #2c384a"
                  >
                    START DATE
                  </CLink>
                </CFormLabel>
              </CCol>
              <CCol class="col-8 col-md-6 col-lg-7">
                <CFormInput
                  type="date"
                  class="form-control form-control-sm"
                  id="colFormLabelSm"
                  v-model="this.add_lender_conditions.campaignStart"
                />
              </CCol>
              <CCol class="col-2 col-sm-12 col-md-2 col-lg-2"> </CCol>
            </CRow>
          </div>
          <div class="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 py-1">
            <CRow>
              <CCol class="col-4 col-md-3 col-lg-3">
                <CFormLabel
                  for="colFormLabelSm"
                  class="col-form-label col-form-label-sm"
                  >END DATE</CFormLabel
                >
              </CCol>
              <CCol class="col-8 col-md-6 col-lg-9">
                <CFormInput
                  type="date"
                  class="form-control form-control-sm"
                  id="colFormLabelSm"
                  v-model="this.add_lender_conditions.campaignEnd"
                />
              </CCol>
              <CCol class="col-2 col-md-2 col-lg-2"></CCol>
            </CRow>
          </div>
        </div>
        <hr class="my-2" />

        <div class="row">
          <div class="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 py-1">
            <CRow>
              <CCol class="col-4 col-sm-6 col-md-4 col-lg-3">
                <CFormLabel
                  for="colFormLabelSm"
                  class="col-form-label col-form-label-sm"
                  >CONDITIONS</CFormLabel
                >
              </CCol>
              <CCol class="col-8 col-sm-6 col-md-6 col-lg-7">
                <CFormInput
                  type="text"
                  class="form-control form-control-sm"
                  id="colFormLabelSm"
                  value="AGE"
                />
              </CCol>
              <CCol class="col-2 col-sm-2 col-md-2 col-lg-2">
                <CButton
                  class="text-white btn-success py-0"
                  @click.prevent="
                    () => {
                      visibleVerticallyCenteredDemo2 = true
                    }
                  "
                >
                  <CIcon name="cilPlus" size="2xl" class="text-white" />
                </CButton>
              </CCol>
            </CRow>
          </div>
          <div class="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 py-1"></div>
        </div>
      </CForm>
      <!-- filter bottom of the form -->
      <div class="d-flex justify-content-end align-items-center flex-wrap mb-3">
        <div>
          <div class="d-flex">
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
                  v-model="filter"
                />
              </CForm>
            </div>
          </div>
        </div>
      </div>
      <!-- Base -->
      <CTable align="middle" responsive bordered class="text-center">
        <CTableHead>
          <CTableRow class="t-head">
            <CTableHeaderCell scope="col" class="w-sm-20 text-white"
              >Name
              <CIcon
                name="cilSwapVertical"
                class="ms-2 my-lender-conditions-sorting"
                @click="sort_lenders_condtion('name')"
                v-bind:class="[sortBy === '' ? sortDirection : '']"
              />
            </CTableHeaderCell>
            <CTableHeaderCell scope="col" class="w-sm-20 text-white"
              >Value</CTableHeaderCell
            >
            <CTableHeaderCell scope="col" class="=w-30 text-white">
              <div class="d-inline-flex">
                Notes
                <CButton
                  class="d-inline-flex align-items-center text-white bg-btn m-0 p-0 ms-3 px-1"
                  size="sm"
                >
                  <CIcon
                    name="cifUs"
                    size="lg"
                    class="pt-1"
                    v-if="get_user_locale1 === 'en-ca'"
                  />
                  <CIcon
                    name="cifFr"
                    size="lg"
                    class="pt-1"
                    v-else-if="get_user_locale1 === 'fr-ca'"
                  />
                  <CIcon
                    name="cifEs"
                    size="lg"
                    class="pt-1"
                    v-else-if="get_user_locale1 === 'sp-es'"
                  />
                </CButton>
              </div>
            </CTableHeaderCell>
            <CTableHeaderCell scope="col" class="=w-30 text-white">
              <div class="d-inline-flex">
                Notes
                <CButton
                  class="d-inline-flex align-items-center text-white bg-btn m-0 p-0 ms-3 px-1"
                  size="sm"
                >
                  <CIcon
                    name="cifUs"
                    size="lg"
                    class="pt-1"
                    v-if="get_user_locale2 === 'en-ca'"
                  />
                  <CIcon
                    name="cifFr"
                    size="lg"
                    class="pt-1"
                    v-else-if="get_user_locale2 === 'fr-ca'"
                  />
                  <CIcon
                    name="cifEs"
                    size="lg"
                    class="pt-1"
                    v-else-if="get_user_locale2 === 'sp-es'"
                  />
                </CButton>
              </div>
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow
            v-for="(single_lookupcondition, n) in filtered_conditions"
            :key="n"
          >
            <CTableDataCell>
              <h5
                class="cursor"
                @click.prevent="
                  edit_lender_lookup_conditions(single_lookupcondition.id)
                "
              >
                {{ single_lookupcondition.name }}
              </h5>
            </CTableDataCell>
            <CTableDataCell>
              <CFormInput
                type="text"
                id="lenderCodeField"
                :value="single_lookupcondition.value"
                readonly
              />
            </CTableDataCell>
            <CTableDataCell
              v-for="(singlenote, index) in single_lookupcondition.notes"
              :key="singlenote.id"
              v-show="index <= 1"
            >
              <CFormInput
                type="text"
                id="lenderCodeField"
                :value="singlenote.note"
                readonly
              />
            </CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </CCol>
  </CRow>

  <CModal
    size="lg"
    alignment="center"
    :visible="visibleVerticallyCenteredDemo3"
    @close="
      () => {
        visibleVerticallyCenteredDemo3 = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle class="text-center"
        >Edit Lender Conditions Details</CModalTitle
      >
    </CModalHeader>
    <CModalBody>
      <CRow class="justify-content-center">
        <CCol lg="6" class=""> </CCol>
        <CCol lg="6" class=""> </CCol>
        <CCol lg="10" class="">
          <CTable borderless table-sm>
            <CTableBody>
              <CTableRow>
                <CTableDataCell scope="row">
                  <CFormLabel for="exampleFormControlInput1">Name</CFormLabel>
                </CTableDataCell>
                <CTableDataCell>
                  <CFormSelect
                    class=""
                    aria-label="select example"
                    size="sm"
                    v-model="lookup_condition_name_type"
                  >
                    <option disabled selected value="">
                      Lookup Conditions
                    </option>

                    <option
                      v-for="(single_lookup_condition, n) in lookup_conditions"
                      :key="n"
                      :value="
                        single_lookup_condition.name +
                        ',' +
                        single_lookup_condition.dataType
                      "
                      :selected="
                        single_lookup_condition.name ==
                        edit_lookup_condition.name
                      "
                    >
                      {{ single_lookup_condition.name }}
                    </option>
                  </CFormSelect>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell scope="row">
                  <CFormLabel for="exampleFormControlInput1">Value </CFormLabel>
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput
                    type="text"
                    class="bg-fields"
                    id="exampleFormControlInput1"
                    placeholder=""
                    v-model="edit_lookup_condition.value"
                    required
                  />
                  <span asp-validation-for="Code" class="text-danger">{{
                    this.validate_msg
                  }}</span>
                </CTableDataCell>
              </CTableRow>

              <CTableRow>
                <CTableHeaderCell scope="row">
                  <CFormLabel for="exampleFormControlInput1"
                    >Languages</CFormLabel
                  >
                </CTableHeaderCell>
                <CTableHeaderCell>
                  <CFormLabel for="exampleFormControlInput1">Notes</CFormLabel>
                </CTableHeaderCell>
              </CTableRow>
              <CTableRow
                scope="row"
                v-for="(singleNote, i) in this.edit_lookup_condition.notes"
                :key="singleNote.id"
              >
                <CTableDataCell>
                  <CForm>
                    <CDropdown alignment="end" variant="input-group">
                      <CDropdownToggle
                        color="secondary"
                        size="sm"
                        variant="outline"
                        class="d-flex align-items-center justify-content-between locale"
                        style="width: 120px"
                      >
                        <label
                          class="d-flex align-items-center form-check-label"
                          for="flexRadioDefault1"
                        >
                          {{ singleNote.locale }}

                          <div class="lang">
                            <CIcon
                              v-if="singleNote.locale === 'en-ca'"
                              name="cifUs"
                              class=""
                              size="xl"
                            />
                            <CIcon
                              v-else-if="singleNote.locale === 'fr-ca'"
                              name="cifFr"
                              class=""
                              size="xl"
                            />
                            <CIcon
                              v-else-if="singleNote.locale === 'sp-es'"
                              name="cifEs"
                              class=""
                              size="xl"
                            />
                          </div>
                        </label>

                        <!-- <label
                          class="d-flex align-items-center form-check-label"
                          for="flexRadioDefault1"
                          v-else
                        >
                          Select
                        </label> -->
                      </CDropdownToggle>
                      <CDropdownMenu style="width: 200px">
                        <CDropdownHeader
                          component="h6"
                          class="bg-light fw-semibold py-2"
                        >
                          Select Language
                        </CDropdownHeader>
                        <CDropdownDivider />
                        <div
                          v-for="singleLocale in this.localesData"
                          :key="singleLocale.id"
                        >
                          <CDropdownItem>
                            <div class="d-flex align-items-center form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                @click="
                                  update_lookup_lang(singleLocale.code, i)
                                "
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
                  </CForm>
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput
                    type="text"
                    class="bg-fields"
                    id="exampleFormControlInput1"
                    v-model="singleNote.note"
                  />
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCol>
      </CRow>
    </CModalBody>
    <CModalFooter class="mx-5 mt-5 border-0">
      <CButton
        color="dark"
        @click="
          () => {
            visibleVerticallyCenteredDemo3 = false
          }
        "
      >
        Reset
      </CButton>
      <CButton
        type="submit"
        class="btn-info text-white"
        @click.prevent="update_lookup_conditions()"
      >
        Update
      </CButton>
    </CModalFooter>
  </CModal>
</template>
<script>
import Multiselect from '@vueform/multiselect'
export default {
  name: 'Lenders Conditions',

  components: {
    Multiselect,
  },

  data() {
    return {
      filter: '',
      token: localStorage.getItem('token'),
      selected_lang: '',
      selected_lang2: '',
      value: '',
      lenderByID: {},
      localesData: {},

      visibleVerticallyCenteredDemo2: false,
      visibleVerticallyCenteredDemo3: false,

      countryList: [
        'Afghanistan',
        'Albania',
        'Algeria',
        'American Samoa',
        'Andorra',
        'Angola',
        'Anguilla',
        'Antarctica',
        'Antigua and Barbuda',
        'Argentina',
        'Armenia',
        'Aruba',
        'Australia',
        'Austria',
        'Azerbaijan',
        'Bahamas (the)',
        'Bahrain',
        'Bangladesh',
        'Barbados',
        'Belarus',
        'Belgium',
        'Belize',
        'Benin',
        'Bermuda',
        'Bhutan',
        'Bolivia (Plurinational State of)',
        'Bonaire, Sint Eustatius and Saba',
        'Bosnia and Herzegovina',
        'Botswana',
        'Bouvet Island',
        'Brazil',
        'British Indian Ocean Territory (the)',
        'Brunei Darussalam',
        'Bulgaria',
        'Burkina Faso',
        'Burundi',
        'Cabo Verde',
        'Cambodia',
        'Cameroon',
        'Canada',
        'Cayman Islands (the)',
        'Central African Republic (the)',
        'Chad',
        'Chile',
        'China',
        'Christmas Island',
        'Cocos (Keeling) Islands (the)',
        'Colombia',
        'Comoros (the)',
        'Congo (the Democratic Republic of the)',
        'Congo (the)',
        'Cook Islands (the)',
        'Costa Rica',
        'Croatia',
        'Cuba',
        'Curaçao',
        'Cyprus',
        'Czechia',
        "Côte d'Ivoire",
        'Denmark',
        'Djibouti',
        'Dominica',
        'Dominican Republic (the)',
        'Ecuador',
        'Egypt',
        'El Salvador',
        'Equatorial Guinea',
        'Eritrea',
        'Estonia',
        'Eswatini',
        'Ethiopia',
        'Falkland Islands (the) [Malvinas]',
        'Faroe Islands (the)',
        'Fiji',
        'Finland',
        'France',
        'French Guiana',
        'French Polynesia',
        'French Southern Territories (the)',
        'Gabon',
        'Gambia (the)',
        'Georgia',
        'Germany',
        'Ghana',
        'Gibraltar',
        'Greece',
        'Greenland',
        'Grenada',
        'Guadeloupe',
        'Guam',
        'Guatemala',
        'Guernsey',
        'Guinea',
        'Guinea-Bissau',
        'Guyana',
        'Haiti',
        'Heard Island and McDonald Islands',
        'Holy See (the)',
        'Honduras',
        'Hong Kong',
        'Hungary',
        'Iceland',
        'India',
        'Indonesia',
        'Iran (Islamic Republic of)',
        'Iraq',
        'Ireland',
        'Isle of Man',
        'Israel',
        'Italy',
        'Jamaica',
        'Japan',
        'Jersey',
        'Jordan',
        'Kazakhstan',
        'Kenya',
        'Kiribati',
        "Korea (the Democratic People's Republic of)",
        'Korea (the Republic of)',
        'Kuwait',
        'Kyrgyzstan',
        "Lao People's Democratic Republic (the)",
        'Latvia',
        'Lebanon',
        'Lesotho',
        'Liberia',
        'Libya',
        'Liechtenstein',
        'Lithuania',
        'Luxembourg',
        'Macao',
        'Madagascar',
        'Malawi',
        'Malaysia',
        'Maldives',
        'Mali',
        'Malta',
        'Marshall Islands (the)',
        'Martinique',
        'Mauritania',
        'Mauritius',
        'Mayotte',
        'Mexico',
        'Micronesia (Federated States of)',
        'Moldova (the Republic of)',
        'Monaco',
        'Mongolia',
        'Montenegro',
        'Montserrat',
        'Morocco',
        'Mozambique',
        'Myanmar',
        'Namibia',
        'Nauru',
        'Nepal',
        'Netherlands (the)',
        'New Caledonia',
        'New Zealand',
        'Nicaragua',
        'Niger (the)',
        'Nigeria',
        'Niue',
        'Norfolk Island',
        'Northern Mariana Islands (the)',
        'Norway',
        'Oman',
        'Pakistan',
        'Palau',
        'Palestine, State of',
        'Panama',
        'Papua New Guinea',
        'Paraguay',
        'Peru',
        'Philippines (the)',
        'Pitcairn',
        'Poland',
        'Portugal',
        'Puerto Rico',
        'Qatar',
        'Republic of North Macedonia',
        'Romania',
        'Russian Federation (the)',
        'Rwanda',
        'Réunion',
        'Saint Barthélemy',
        'Saint Helena, Ascension and Tristan da Cunha',
        'Saint Kitts and Nevis',
        'Saint Lucia',
        'Saint Martin (French part)',
        'Saint Pierre and Miquelon',
        'Saint Vincent and the Grenadines',
        'Samoa',
        'San Marino',
        'Sao Tome and Principe',
        'Saudi Arabia',
        'Senegal',
        'Serbia',
        'Seychelles',
        'Sierra Leone',
        'Singapore',
        'Sint Maarten (Dutch part)',
        'Slovakia',
        'Slovenia',
        'Solomon Islands',
        'Somalia',
        'South Africa',
        'South Georgia and the South Sandwich Islands',
        'South Sudan',
        'Spain',
        'Sri Lanka',
        'Sudan (the)',
        'Suriname',
        'Svalbard and Jan Mayen',
        'Sweden',
        'Switzerland',
        'Syrian Arab Republic',
        'Taiwan',
        'Tajikistan',
        'Tanzania, United Republic of',
        'Thailand',
        'Timor-Leste',
        'Togo',
        'Tokelau',
        'Tonga',
        'Trinidad and Tobago',
        'Tunisia',
        'Turkey',
        'Turkmenistan',
        'Turks and Caicos Islands (the)',
        'Tuvalu',
        'Uganda',
        'Ukraine',
        'United Arab Emirates (the)',
        'United Kingdom of Great Britain and Northern Ireland (the)',
        'United States Minor Outlying Islands (the)',
        'United States of America (the)',
        'Uruguay',
        'Uzbekistan',
        'Vanuatu',
        'Venezuela (Bolivarian Republic of)',
        'Viet Nam',
        'Virgin Islands (British)',
        'Virgin Islands (U.S.)',
        'Wallis and Futuna',
        'Western Sahara',
        'Yemen',
        'Zambia',
        'Zimbabwe',
        'Åland Islands',
      ],

      singleNoteID: '',

      //Sorting Upon Conditions table

      sort_direction_name: 'asc',
      sort_by_name: 'name',

      // Get tags result and push and create array
      lender_tags: [],
      // Set and get tags on view
      my_final_tags: {
        mode: 'tags',
        value: ['Hockey'],
        closeOnSelect: false,
        searchable: true,
        createOption: true,
      },

      // Main Component Lender Conditions
      add_lender_conditions: {
        lender: this.$route.params.lender_id,
        country: '',
        region: '',
        tags: [],
        publishDate: '',
        campaignStart: '',
        campaignEnd: '',
      },

      // Get Lookup Conditon List
      lookup_conditions: [],
      lookup_lang_one_name: '',
      lookup_lang_one_code: '',
      lookup_lang_two_name: '',
      lookup_lang_two_code: '',
      lookup_lang_three_name: '',
      lookup_lang_three_code: '',

      //Post Lookup Conditions
      first_note: '',
      second_note: '',
      third_note: '',

      add_lookup_conditions: {
        lender: this.$route.params.lender_id,
        name: '',
        type: '',
        value: '',
        notes: [],
      },

      validate_msg: '',

      //checking and splitting

      lookup_condition_name_type: '',

      //Get lender Lookup conditions
      currentlender_lookup_conditions: [],

      // Edit lookup condition by id
      edit_lookup_condition: {
        desc: '',
        type: '',
        value: '',
        lender: '',
        notes: [
          {
            id: '',
            locale: '',
            note: '',
          },
        ],
      },
      data_to_send: {
        desc: '',
        type: '',
        value: '',
        lender: '',
        notes: [
          {
            locale: '',
            note: '',
          },
        ],
      },
      mynotes: [],

      // Get User Id through params
      user_id: localStorage.getItem('user_id'),

      // Get User locale 1 & 2
      user_detail: [],
      get_user_locale1: '',
      get_user_locale2: '',
      user_name: '',

      //Update user locales object
      update_locales: {
        locale1: '',
        locale2: '',
      },

      // Get regions
      getall_regions: [],

      // Get tags
      getall_tags: [],
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

  mounted: function () {},

  created: function () {
    this.getLocales(),
      this.get_lookupConditions(),
      this.getuserdetail(),
      this.getLenderbyID(),
      this.get_regions(),
      this.get_tags()
  },

  computed: {
    filtered_conditions: function () {
      console.log(
        'i m in Conditions filter' + this.currentlender_lookup_conditions,
      )

      return (
        Object.values(this.currentlender_lookup_conditions)

          // Filter Global Search Bar and Language Search

          .filter((item) => {
            return (
              item.name.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0
            )
          })

          .sort((len1, len2) => {
            console.log(this.sort_direction, this.sort_direction_name)
            if (this.sort_direction_name === 'desc')
              return len1.name.localeCompare(len2.name)
          })
      )
    },
  },

  methods: {
    sort_lenders_condtion(name) {
      console.log(name)
      this.sort_direction = 'asc'
      if (name === this.sort_by_name) {
        this.sort_direction_name =
          this.sort_direction_name === 'asc' ? 'desc' : 'asc'
      }
      this.sort_by_name = name
    },

    getuserdetail() {
      let token = this.token
      let api = 'https://rsoapi.squarera.online/api/users/' + this.user_id
      this.axios
        .get(api, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          if (response.status == '200') {
            this.user_detail = response.data
            this.get_user_locale1 = response.data.locale1
            this.get_user_locale2 = response.data.locale2
            //this.user_name = response.data.firstName

            console.log(
              'This is my get user locale 1 & 2 :' +
                'Locale 1' +
                this.get_user_locale1 +
                'Locale 2' +
                this.get_user_locale2,
            )
          } else {
            alert('Record not loaded')
          }
        })
    },

    getLenderbyID() {
      let myId = this.$route.params.lender_id
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
            this.user_name = response.data.resources[0].resourceName
            this.currentlender_lookup_conditions = response.data.conditions
            console.log(
              'This is my single lender IN Lender Conditions:' +
                JSON.stringify(this.currentlender_lookup_conditions),
            )

            console.log('This is my single lender:' + this.user_name)

            this.visibleVerticallyCenteredDemo1 = true
          } else {
            alert('Record not loaded')
          }
        })

      //this data object will be used later for comparison of arrays.
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

    setFlag(code, lang_name) {
      this.selected_lang = lang_name
      this.selected_lang_code = code

      console.log(
        'Simple Lender Conditions Language 1:' + '' + this.selected_lang,
        this.selected_lang_code,
      )
    },

    setFlag2(code, lang_name) {
      this.selected_lang2 = lang_name
      this.selected_lang_code2 = code

      console.log(
        'Simple Lender Conditions Language 2:' + '' + this.selected_lang2,
        this.selected_lang_code2,
      )
    },

    add_to_lender_conditions() {
      console.log('After Selection:' + this.my_final_tags.value)

      this.add_lender_conditions.tags = this.my_final_tags.value
      console.log(
        'm working with add_to_lender_conditions' +
          JSON.stringify(this.add_lender_conditions),
      )

      let api = 'https://rsoapi.squarera.online/api/lenderConditions'
      this.axios
        .post(api, this.add_lender_conditions, {
          headers: {
            Authorization: this.token,
          },
        })
        .then((response) => {
          if (response.status == '200') {
            // alert(response.status)
            this.add_lender_conditions = {}
            this.$router.go()
          } else {
            alert('Record not loaded')
          }
        })
    },

    // Get regions
    get_regions() {
      let token = this.token
      let api = 'https://rsoapi.squarera.online/api/lookups/regions'
      this.axios
        .get(api, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          if (response.status == '200') {
            this.getall_regions = response.data
            console.log(
              'Regions are come from:' + JSON.stringify(this.getall_regions),
            )
          } else {
            alert('Record not loaded')
          }
        })
    },

    // Get tags
    get_tags() {
      let token = this.token
      let api = 'https://rsoapi.squarera.online/api/lookups/tags'
      this.axios
        .get(api, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          if (response.status == '200') {
            this.getall_tags = response.data

            this.getall_tags.forEach((tag) => {
              this.lender_tags.push(tag.name)
            })

            console.log('Tags are come from:' + this.lender_tags)
          } else {
            alert('Record not loaded')
          }
        })
    },

    // LookupConditions

    get_lookupConditions() {
      let token = this.token
      let api = 'https://rsoapi.squarera.online/api/lookups/conditions'
      this.axios
        .get(api, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          if (response.status == '200') {
            this.lookup_conditions = response.data
          } else {
            alert('Record not loaded')
          }
          console.log(response.data)
        })
    },

    // Post Lookup Conditons of lender indivitually

    post_lookup_conditions() {
      this.validate_msg = ''

      if (this.first_note !== '') {
        this.add_lookup_conditions.notes.push({
          locale: this.lookup_lang_one_code,
          note: this.first_note,
        })
      }

      if (this.second_note !== '') {
        this.add_lookup_conditions.notes.push({
          locale: this.lookup_lang_two_code,
          note: this.second_note,
        })
      }

      if (this.third_note !== '') {
        this.add_lookup_conditions.notes.push({
          locale: this.lookup_lang_three_code,
          note: this.third_note,
        })
      }

      let arranging_name_type = []
      let lookup_condition_name
      let lookup_condition_type
      //Handle Integer Datatype
      arranging_name_type = this.lookup_condition_name_type.split(',')

      lookup_condition_name = arranging_name_type[0]
      lookup_condition_type = arranging_name_type[1]

      //console.log(lookup_condition_name, lookup_condition_type)

      // Handle Integer Datatype
      if (
        lookup_condition_type == 'Integer' ||
        lookup_condition_type == 'integer'
      ) {
        if (
          this.add_lookup_conditions.value > 0 ||
          this.add_lookup_conditions.value < 0
        ) {
          this.add_lookup_conditions.name = lookup_condition_name
          this.add_lookup_conditions.type = lookup_condition_type
          this.validate_msg = ''

          let api = 'https://rsoapi.squarera.online/api/conditions'
          this.axios
            .post(api, this.add_lookup_conditions, {
              headers: {
                Authorization: this.token,
              },
            })
            .then((response) => {
              if (response.status == '200') {
                //alert(response.status)
                this.visibleVerticallyCenteredDemo2 = false
                this.getLenderbyID()
                this.add_lookup_conditions = {}
                this.first_note = ''
                this.second_note = ''
                this.third_note = ''
                this.lookup_lang_one_code = ''
                this.lookup_lang_two_code = ''
                this.lookup_lang_three_code = ''
              } else {
                alert('Record not loaded')
              }
            })
        } else {
          this.validate_msg = 'Please enter numeric value'
          this.add_lookup_conditions.value = ''
        }
      }

      // Handle Boolean Dtatype

      if (lookup_condition_type == 'boolean') {
        if (
          this.add_lookup_conditions.value == 'true' ||
          this.add_lookup_conditions.value == 'false' ||
          this.add_lookup_conditions.value == 'True' ||
          this.add_lookup_conditions.value == 'False'
        ) {
          this.add_lookup_conditions.name = lookup_condition_name
          this.add_lookup_conditions.type = lookup_condition_type
          this.validate_msg = ''

          let api = 'https://rsoapi.squarera.online/api/conditions'
          this.axios
            .post(api, this.add_lookup_conditions, {
              headers: {
                Authorization: this.token,
              },
            })
            .then((response) => {
              if (response.status == '200') {
                //alert(response.status)
                this.visibleVerticallyCenteredDemo2 = false
                this.getLenderbyID()
                this.add_lookup_conditions = {}
                this.first_note = ''
                this.second_note = ''
                this.third_note = ''
                this.lookup_lang_one_code = ''
                this.lookup_lang_two_code = ''
                this.lookup_lang_three_code = ''
              } else {
                alert('Record not loaded')
              }
            })
        } else {
          this.validate_msg = 'Please enter True or False'
          this.add_lookup_conditions.value = ''
        }
      }

      // Hand String DataType for Gender input

      if (
        lookup_condition_type == 'string' ||
        lookup_condition_type == 'String'
      ) {
        // if (
        //   this.add_lookup_conditions.value == 'Male' ||
        //   this.add_lookup_conditions.value == 'Female' ||
        //   this.add_lookup_conditions.value == 'male' ||
        //   this.add_lookup_conditions.value == 'female'
        // ) {
        this.add_lookup_conditions.name = lookup_condition_name
        this.add_lookup_conditions.type = lookup_condition_type
        this.validate_msg = ''

        let api = 'https://rsoapi.squarera.online/api/conditions'
        this.axios
          .post(api, this.add_lookup_conditions, {
            headers: {
              Authorization: this.token,
            },
          })
          .then((response) => {
            if (response.status == '200') {
              //alert(response.status)
              this.visibleVerticallyCenteredDemo2 = false
              this.getLenderbyID()
              this.add_lookup_conditions = {}
              this.first_note = ''
              this.second_note = ''
              this.third_note = ''
              this.lookup_lang_one_code = ''
              this.lookup_lang_two_code = ''
              this.lookup_lang_three_code = ''
            } else {
              alert('Record not loaded')
            }
          })
        // } else {
        //   this.validate_msg = 'Please enter Male or Female'
        //   this.add_lookup_conditions.value = ''
        // }
      }
    },

    setflag_lookup_lang_one(code, lang_name) {
      this.lookup_lang_one_name = lang_name
      this.lookup_lang_one_code = code

      console.log(
        'Simple Lender Conditions detail flag one:' +
          '' +
          this.lookup_lang_one_name,
        this.lookup_lang_one_code,
      )
    },

    setflag_lookup_lang_two(code, lang_name) {
      this.lookup_lang_two_name = lang_name
      this.lookup_lang_two_code = code

      console.log(
        'Simple Lender Conditions detail flag two:' +
          '' +
          this.lookup_lang_two_name,
        this.lookup_lang_two_code,
      )
    },

    setflag_lookup_lang_three(code, lang_name) {
      this.lookup_lang_three_name = lang_name
      this.lookup_lang_three_code = code

      console.log(
        'Simple Lender Conditions detail flag three:' +
          '' +
          this.lookup_lang_three_name,
        this.lookup_lang_three_code,
      )
    },

    // Update lookup Notes locale

    update_lookup_lang(code, index) {
      this.edit_lookup_condition.notes[index].locale = code

      console.log(
        'Update note localeone:' + '' + index,
        this.edit_lookup_condition.notes[index].locale,
      )
    },

    // Edit Lender Lookup conditions details
    edit_lender_lookup_conditions(lookup_condition_id) {
      this.singleNoteID = lookup_condition_id
      console.log('Edit Lookup condition id:' + lookup_condition_id)

      //
      let token = this.token
      let api =
        'https://rsoapi.squarera.online/api/conditions/' + lookup_condition_id
      this.axios
        .get(api, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          if (response.status == '200') {
            this.visibleVerticallyCenteredDemo3 = true
            this.edit_lookup_condition = response.data
            //this.mynotes = response.data.notes
            //console.log('This is my notes' + JSON.stringify(this.mynotes))
          } else {
            alert('Record not loaded')
          }
        })
    },

    //Update Lookup Condition
    update_lookup_conditions() {
      let token = this.token

      if (this.lookup_condition_name_type !== '') {
        alert('Not Empty')
        let arranging_name_type = []
        let update_lookup_condition_name
        let update_lookup_condition_type

        //Handle Integer Datatype

        arranging_name_type = this.lookup_condition_name_type.split(',')

        update_lookup_condition_name = arranging_name_type[0]
        update_lookup_condition_type = arranging_name_type[1]

        this.data_to_send.desc = update_lookup_condition_name
        this.data_to_send.type = update_lookup_condition_type
      } else {
        this.data_to_send.desc = this.edit_lookup_condition.name
        this.data_to_send.type = this.edit_lookup_condition.type
      }

      this.data_to_send.value = this.edit_lookup_condition.value
      this.data_to_send.lender = this.edit_lookup_condition.lender
      this.data_to_send.notes = this.edit_lookup_condition.notes
      //alert(this.data_to_send.notes.length)
      for (let i = 0; i < this.data_to_send.notes.length; i++) {
        delete this.data_to_send.notes[i].condition
        delete this.data_to_send.notes[i].createdAt
        // delete this.data_to_send.notes[i].id
        delete this.data_to_send.notes[i].updatedAt
      }

      console.log(this.data_to_send)

      let api =
        'https://rsoapi.squarera.online/api/conditions/' +
        this.edit_lookup_condition.id

      this.axios
        .put(api, this.data_to_send, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          if (response.status == '200') {
            this.visibleVerticallyCenteredDemo3 = false
            this.edit_lookup_condition = {}
            this.$router.go()
          } else {
            console.log('data not found')
          }
        })
    },
    // Update locale1 on dropdowns
    update_user_locale1(localecode) {
      this.update_locales = {
        locale1: localecode,
      }

      let token = this.token

      let api = 'https://rsoapi.squarera.online/api/auth/update'
      this.axios
        .put(api, this.update_locales, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          if (response.status == '200') {
            console.log('User locale1 data is updated')
            this.$router.go()
          } else {
            console.log('data not found')
          }
        })
    },

    tag_change() {
      console.log('changing tags')
    },

    selectTags() {
      console.log('Selected Tags:' + this.fields)
    },

    // Update locale2 on dropdowns
    update_user_locale2(localecode) {
      this.update_locales = {
        locale2: localecode,
      }

      let token = this.token

      let api = 'https://rsoapi.squarera.online/api/auth/update'
      this.axios
        .put(api, this.update_locales, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          if (response.status == '200') {
            console.log('User locale2 data is updated')
            this.$router.go()
          } else {
            console.log('data not found')
          }
        })
    },
  },
}
</script>
<style>
@import '~@syncfusion/ej2-base/styles/material.css';
/* @import '~@syncfusion/ej2-inputs/styles/material.css'; */
@import '~@syncfusion/ej2-vue-dropdowns/styles/material.css';
@import '~@syncfusion/ej2-buttons/styles/material.css';
</style>
<style src="@vueform/multiselect/themes/default.css"></style>
