<template>
  <CRow class="bg-body border rounded p-3 mb-4">
    <CCol :md="12" class="">
      <div class="d-flex align-items-center justify-content-between">
        <div sm="auto">
          <h2 class="fw-bold">Lenders Conditions</h2>
        </div>
        <div sm="auto">
          <CButton class="ms-auto text-white px-4 btn-info"> Save </CButton>
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
                >Lender Conditions Details</CModalTitle
              >
            </CModalHeader>
            <CModalBody>
              <CRow class="justify-content-center">
                <CCol lg="6" class=""> </CCol>
                <CCol lg="6" class=""> </CCol>
                <CCol lg="6" class="">
                  <CTable borderless table-sm>
                    <CTableBody>
                      <CTableRow>
                        <CTableDataCell scope="row">
                          <CFormLabel for="exampleFormControlInput1"
                            >Name</CFormLabel
                          >
                        </CTableDataCell>
                        <CTableDataCell>
                          <CFormInput
                            type="text"
                            class="bg-fields"
                            id="exampleFormControlInput1"
                            placeholder=""
                            value="MEDAGE"
                          />
                        </CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableDataCell scope="row">
                          <CFormLabel for="exampleFormControlInput1"
                            >Value</CFormLabel
                          >
                        </CTableDataCell>
                        <CTableDataCell>
                          <CFormInput
                            type="text"
                            class="bg-fields"
                            id="exampleFormControlInput1"
                            placeholder=""
                            value="40"
                          />
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
                          <CInputGroup class="">
                            <CDropdown alignment="end" variant="input-group">
                              <CDropdownToggle
                                color="secondary"
                                class="bg-fields"
                                variant="outline"
                              >
                                <label
                                  class="form-check-label"
                                  for="flexRadioDefault1"
                                >
                                  ENG
                                  <CIcon
                                    name="cifUs"
                                    class="mx-2 pt-2"
                                    size="xl"
                                  />
                                </label>
                              </CDropdownToggle>
                              <CDropdownMenu>
                                <CDropdownHeader
                                  component="h6"
                                  class="bg-light fw-semibold py-2"
                                >
                                  Select Country
                                </CDropdownHeader>
                                <CDropdownDivider />
                                <CDropdownItem>
                                  <div class="form-check">
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
                                      English
                                      <CIcon
                                        name="cifUs"
                                        class="mx-2 pt-2"
                                        size="xl"
                                      />
                                    </label>
                                  </div>
                                </CDropdownItem>
                                <CDropdownDivider />
                                <CDropdownItem>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault2"
                                      checked
                                    />
                                    <label
                                      class="form-check-label"
                                      for="flexRadioDefault2"
                                    >
                                      French
                                      <CIcon
                                        name="cifFr"
                                        class="mx-2 pt-2"
                                        size="xl"
                                      />
                                    </label>
                                  </div>
                                </CDropdownItem>
                                <CDropdownDivider />
                                <CDropdownItem>
                                  <div class="form-check">
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
                                      German
                                      <CIcon
                                        name="cifDe"
                                        class="mx-2 pt-2"
                                        size="xl"
                                      />
                                    </label>
                                  </div>
                                </CDropdownItem>
                                <CDropdownDivider />
                                <CDropdownItem>
                                  <div class="form-check">
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
                                      Spanish
                                      <CIcon
                                        name="cifEs"
                                        class="mx-2 pt-2"
                                        size="xl"
                                      />
                                    </label>
                                  </div>
                                </CDropdownItem>
                                <CDropdownDivider />
                                <CDropdownItem>
                                  <div class="form-check">
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
                                      Russiap
                                      <CIcon
                                        name="cifRu"
                                        class="mx-2 pt-2"
                                        size="xl"
                                      />
                                    </label>
                                  </div>
                                </CDropdownItem>
                              </CDropdownMenu>
                            </CDropdown>
                          </CInputGroup>
                        </CTableDataCell>
                        <CTableDataCell>
                          <CFormInput
                            type="text"
                            class="bg-fields"
                            id="exampleFormControlInput1"
                            value="This is the test Bank"
                          />
                        </CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableDataCell scope="row">
                          <CInputGroup class="">
                            <CDropdown alignment="end" variant="input-group">
                              <CDropdownToggle
                                color="secondary"
                                class="bg-fields"
                                variant="outline"
                              >
                                <label
                                  class="form-check-label"
                                  for="flexRadioDefault1"
                                >
                                  DES
                                  <CIcon
                                    name="cifDe"
                                    class="mx-2 pt-2"
                                    size="xl"
                                  />
                                </label>
                              </CDropdownToggle>
                              <CDropdownMenu>
                                <CDropdownHeader
                                  component="h6"
                                  class="bg-light fw-semibold py-2"
                                >
                                  Select Country
                                </CDropdownHeader>
                                <CDropdownDivider />
                                <CDropdownItem>
                                  <div class="form-check">
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
                                      English
                                      <CIcon
                                        name="cifUs"
                                        class="mx-2 pt-2"
                                        size="xl"
                                      />
                                    </label>
                                  </div>
                                </CDropdownItem>
                                <CDropdownDivider />
                                <CDropdownItem>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault2"
                                      checked
                                    />
                                    <label
                                      class="form-check-label"
                                      for="flexRadioDefault2"
                                    >
                                      French
                                      <CIcon
                                        name="cifFr"
                                        class="mx-2 pt-2"
                                        size="xl"
                                      />
                                    </label>
                                  </div>
                                </CDropdownItem>
                                <CDropdownDivider />
                                <CDropdownItem>
                                  <div class="form-check">
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
                                      German
                                      <CIcon
                                        name="cifDe"
                                        class="mx-2 pt-2"
                                        size="xl"
                                      />
                                    </label>
                                  </div>
                                </CDropdownItem>
                                <CDropdownDivider />
                                <CDropdownItem>
                                  <div class="form-check">
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
                                      Spanish
                                      <CIcon
                                        name="cifEs"
                                        class="mx-2 pt-2"
                                        size="xl"
                                      />
                                    </label>
                                  </div>
                                </CDropdownItem>
                                <CDropdownDivider />
                                <CDropdownItem>
                                  <div class="form-check">
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
                                      Russia
                                      <CIcon
                                        name="cifRu"
                                        class="mx-2 pt-2"
                                        size="xl"
                                      />
                                    </label>
                                  </div>
                                </CDropdownItem>
                              </CDropdownMenu>
                            </CDropdown>
                          </CInputGroup>
                        </CTableDataCell>
                        <CTableDataCell>
                          <CFormInput
                            type="text"
                            class="bg-fields"
                            id="exampleFormControlInput1"
                            value="Das ist die Testbank"
                          />
                        </CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableDataCell scope="row">
                          <CInputGroup class="">
                            <CDropdown alignment="end" variant="input-group">
                              <CDropdownToggle
                                color="secondary"
                                variant="outline"
                                class="bg-fields"
                              >
                                <label
                                  class="form-check-label"
                                  for="flexRadioDefault1"
                                >
                                  FRN
                                  <CIcon
                                    name="cifFr"
                                    class="mx-2 pt-2"
                                    size="xl"
                                  />
                                </label>
                              </CDropdownToggle>
                              <CDropdownMenu>
                                <CDropdownHeader
                                  component="h6"
                                  class="bg-light fw-semibold py-2"
                                >
                                  Select Country
                                </CDropdownHeader>
                                <CDropdownDivider />
                                <CDropdownItem>
                                  <div class="form-check">
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
                                      English
                                      <CIcon
                                        name="cifUs"
                                        class="mx-2 pt-2"
                                        size="xl"
                                      />
                                    </label>
                                  </div>
                                </CDropdownItem>
                                <CDropdownDivider />
                                <CDropdownItem>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault2"
                                      checked
                                    />
                                    <label
                                      class="form-check-label"
                                      for="flexRadioDefault2"
                                    >
                                      French
                                      <CIcon
                                        name="cifFr"
                                        class="mx-2 pt-2"
                                        size="xl"
                                      />
                                    </label>
                                  </div>
                                </CDropdownItem>
                                <CDropdownDivider />
                                <CDropdownItem>
                                  <div class="form-check">
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
                                      German
                                      <CIcon
                                        name="cifDe"
                                        class="mx-2 pt-2"
                                        size="xl"
                                      />
                                    </label>
                                  </div>
                                </CDropdownItem>
                                <CDropdownDivider />
                                <CDropdownItem>
                                  <div class="form-check">
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
                                      Spanish
                                      <CIcon
                                        name="cifEs"
                                        class="mx-2 pt-2"
                                        size="xl"
                                      />
                                    </label>
                                  </div>
                                </CDropdownItem>
                                <CDropdownDivider />
                                <CDropdownItem>
                                  <div class="form-check">
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
                                      Russia
                                      <CIcon
                                        name="cifRu"
                                        class="mx-2 pt-2"
                                        size="xl"
                                      />
                                    </label>
                                  </div>
                                </CDropdownItem>
                              </CDropdownMenu>
                            </CDropdown>
                          </CInputGroup>
                        </CTableDataCell>
                        <CTableDataCell>
                          <CFormInput
                            type="text"
                            class="bg-fields"
                            id="exampleFormControlInput1"
                            value="C'est la banque de test"
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
                class="btn-info text-white"
                @click="
                  () => {
                    visibleVerticallyCenteredDemo2 = false
                  }
                "
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
                    class="d-flex align-items-center justify-content-between"
                    style="width: 120px"
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
                    class="d-flex align-items-center justify-content-between"
                    style="width: 120px"
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
                  v-model="this.lenderByID.code"
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
                  v-model="this.lenderByID.code"
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
                <div
                  class="d-flex flex-wrap border border-secondary rounded ps-2"
                >
                  <ejs-multiselect
                    id="multiselect"
                    :dataSource="sportsData"
                    placeholder=""
                  ></ejs-multiselect>
                </div>
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
                <CFormSelect class="" aria-label="select example" size="sm">
                  <option value="1">
                    <label>
                      <CFormCheck
                        type="radio"
                        name="radioNoLabel"
                        id="radioNoLabel"
                        value=""
                        aria-label="..."
                      />
                      Canada
                    </label>
                  </option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
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
                  value=""
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
                <CFormInput
                  type="text"
                  class="form-control form-control-sm"
                  id="colFormLabelSm"
                  value=""
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
                  value=""
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
                  value=""
                />
              </CCol>
              <CCol class="col-2 col-md-2 col-lg-2"></CCol>
            </CRow>
          </div>
        </div>
        <hr class="my-2" />
        <div class="row mt-2">
          <div class="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 py-1">
            <CRow>
              <CCol class="col-4 col-sm-6 col-md-4 col-lg-3">
                <CFormLabel
                  for="colFormLabelSm"
                  class="col-form-label col-form-label-sm"
                >
                  <CLink
                    v-c-tooltip="'Clone Lender Condition'"
                    style="color: #2c384a"
                  >
                    LENDER CONDITION
                  </CLink>
                </CFormLabel>
              </CCol>
              <CCol class="col-8 col-sm-6 col-md-6 col-lg-7">
                <CFormInput
                  type="text"
                  class="form-control form-control-sm"
                  id="colFormLabelSm"
                  value=""
                />
              </CCol>
              <CCol class="col-6 col-sm-2 col-md-2 col-lg-2 ms-auto">
                <CButton class="text-white btn-info btn-sm py-0 w-100">
                  CLONE
                </CButton>
              </CCol>
            </CRow>
          </div>
          <div class="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 py-1"></div>
        </div>
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
                  @click="
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
              <CIcon name="cilSwapVertical" />
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
                  <div class="d-none d-lg-block pe-2">ENG</div>
                  <CIcon name="cifUs" size="lg" class="pt-1" />
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
                  <div class="d-none d-lg-block pe-2">ENG</div>
                  <CIcon name="cifUs" size="lg" class="pt-1" />
                </CButton>
              </div>
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableDataCell>
              <h5>MINAGE</h5>
            </CTableDataCell>
            <CTableDataCell>
              <CFormInput type="text" id="lenderCodeField" value="18" />
            </CTableDataCell>
            <CTableDataCell>
              <CFormInput
                type="text"
                id="lenderCodeField"
                value="Lorem Ipsum"
              />
            </CTableDataCell>
            <CTableDataCell>
              <CFormInput
                type="text"
                id="lenderCodeField"
                value="Lorem Ipsum"
              />
            </CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableDataCell>
              <h5>MAXAGE</h5>
            </CTableDataCell>
            <CTableDataCell>
              <CFormInput type="text" id="lenderCodeField" value="55" />
            </CTableDataCell>
            <CTableDataCell>
              <CFormInput
                type="text"
                id="lenderCodeField"
                value="Lorem Ipsum"
              />
            </CTableDataCell>
            <CTableDataCell>
              <CFormInput
                type="text"
                id="lenderCodeField"
                value="Lorem Ipsum"
              />
            </CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </CCol>
  </CRow>
</template>
<script>
// import { MultiSelectComponent } from '@syncfusion/ej2-vue-dropdowns'
export default {
  name: 'Lenders Conditions',
  // components: {
  //   'ejs-multiselect': MultiSelectComponent,
  // },
  data() {
    return {
      token: localStorage.getItem('token'),
      value: '',
      lenderByID: {},
      localesData: {},
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
      visibleVerticallyCenteredDemo2: false,
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
    this.getLenderbyID(), this.getLocales()
  },
  methods: {
    getLocales() {
      let token = this.token
      let api = 'http://159.65.63.4/api/locales'
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
    getLenderbyID() {
      let myId = this.$store.state.id
      let token = this.token
      // alert(this.$store.state.id)
      let api = 'http://159.65.63.4/api/lenders/' + myId
      this.axios
        .get(api, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          if (response.status == '200') {
            this.lenderByID = response.data
            console.log(this.lenderByID)
          } else {
            alert('Record not loaded')
          }
        })

      //this data object will be used later for comparison of arrays.
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
