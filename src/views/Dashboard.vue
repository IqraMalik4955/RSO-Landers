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
                this.selected_lang = []
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
                        >Code</CFormLabel
                      >

                      <CCol class="col-10 col-sm-9 col-md-10 col-lg-10">
                        <CFormInput
                          type="text"
                          class="bg-fields form-control form-control-sm"
                          id="colFormLabelSm"
                          placeholder=""
                          v-model="this.dataToSend.code"
                          required
                        />
                      </CCol>
                    </div>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 py-1">
                    <div class="d-flex justify-content-lg-between">
                      <CFormLabel
                        for="colFormLabelSm"
                        class="col-2 col-sm-3 col-md-2 col-lg-5 col-form-label col-form-label-sm"
                        >Clone condition from</CFormLabel
                      >
                      <CCol class="col-10 col-sm-9 col-md-10 col-lg-7">
                        <select
                          name="Lenders Code"
                          id="cars"
                          class="bg-fields form-control form-control-sm"
                          v-model="this.dataToSend.clone"
                        >
                          <option value="" selected disabled>
                            Choose Lenders
                          </option>
                          <option
                            v-for="singleLender in this.lendersData"
                            :key="singleLender.id"
                            :value="singleLender.id"
                          >
                            {{ singleLender.code }}
                          </option>
                        </select>
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
                              @click.prevent="add_resources()"
                            >
                              <CIcon name="cilPlus" class="text-white" />
                            </CButton>
                          </CTableHeaderCell>
                        </CTableRow>

                        <CTableRow
                          v-for="(singleresource, n) in this.dataToSend
                            .resources"
                          :key="n"
                        >
                          <CTableDataCell scope="row">
                            <CInputGroup class="">
                              <CDropdown alignment="end" variant="input-group">
                                <CDropdownToggle
                                  color="secondary"
                                  size="sm"
                                  variant="outline"
                                  class="d-flex align-items-center justify-content-between bg-fields locale"
                                  style="width: 120px; overflow-x: visible"
                                >
                                  <label
                                    class="d-flex align-items-center form-check-label"
                                    for="flexRadioDefault1"
                                    v-if="this.selected_lang[n]"
                                  >
                                    {{ this.selected_lang[n] }}

                                    <div class="lang">
                                      <CIcon
                                        v-if="
                                          this.dataToSend.resources[n]
                                            .localeCode === 'en-ca'
                                        "
                                        name="cifUs"
                                        class=""
                                        size="xl"
                                      />
                                      <CIcon
                                        v-else-if="
                                          this.dataToSend.resources[n]
                                            .localeCode === 'fr-ca'
                                        "
                                        name="cifFr"
                                        class=""
                                        size="xl"
                                      />
                                      <CIcon
                                        v-else-if="
                                          this.dataToSend.resources[n]
                                            .localeCode === 'sp-es'
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
                                    v-for="singleLocale in localesData"
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
                                          v-model="
                                            this.dataToSend.resources[n]
                                              .localeCode
                                          "
                                          @change="
                                            setLanguage_add_lender(
                                              singleLocale.code,
                                              n,
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
                                this.dataToSend.resources[n].resourceName
                              "
                            />
                          </CTableDataCell>
                          <CTableDataCell colspan="2">
                            <CFormInput
                              type="text"
                              class="bg-fields"
                              id="exampleFormControlInput1"
                              v-model="
                                this.dataToSend.resources[n].resourceDesc
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
                    //visibleVerticallyCenteredDemo = false
                    this.count_add = 1
                    ;(this.dataToSend.resources = [
                      {
                        resourceName: '',
                        resourceDesc: '',
                        localeCode: '',
                      },
                    ]),
                      getLocales()
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
            <div class="ps-2">
              <CForm class="d-flex">
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
                      <!-- {{ this.lang_name_first }} -->
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
                              setLanguageone(
                                singleLocale.name,
                                singleLocale.code,
                              ),
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
                              setLanguagetwo(
                                singleLocale.name,
                                singleLocale.code,
                              ),
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
                  v-model="filter"
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
                <CIcon
                  name="cilSwapVertical"
                  class="ms-2 mycode_sorting"
                  @click="sort_lenders_code('code')"
                  v-bind:class="[sortBy === '' ? sortDirection : '']"
                />
              </div>
            </CTableHeaderCell>
            <CTableHeaderCell scope="col" class="text-white">
              <div class="d-inline-flex align-items-center">
                Name
                <CIcon
                  name="cilSwapVertical"
                  class="ms-2 mycode_sorting"
                  @click="sort_lenders_name('name')"
                  v-bind:class="[sortBy === '' ? sortDirection : '']"
                />
                <CButton
                  class="d-inline-flex align-items-center text-white bg-btn m-0 p-0 ms-3 px-1"
                  size="sm"
                >
                  <!-- <div class="d-none d-lg-block pe-2">ENG</div> -->
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
            <CTableHeaderCell scope="col" class="w-30 text-white">
              <div class="d-inline-flex">
                Name
                <CButton
                  class="d-inline-flex align-items-center text-white bg-btn m-0 p-0 ms-3 px-1"
                  size="sm"
                >
                  <!-- <div class="d-none d-lg-block pe-2">FRN</div> -->
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
            <CTableHeaderCell scope="col" class="w-30 text-white">
              <div class="d-inline-flex">
                Description
                <CButton
                  class="d-inline-flex align-items-center text-white bg-btn m-0 p-0 ms-3 px-1"
                  size="sm"
                >
                  <!-- <div class="d-none d-lg-block pe-2">ENG</div> -->
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
            <CTableHeaderCell scope="col" class="w-30 text-white">
              <div class="d-inline-flex">
                Description
                <CButton
                  class="d-inline-flex align-items-center text-white bg-btn m-0 p-0 ms-3 px-1"
                  size="sm"
                >
                  <!-- <div class="d-none d-lg-block pe-2">FRN</div> -->
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
            v-for="singleLender in filteredlenders"
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
                <a
                  class="cursor"
                  @click="
                    GoToLenderConditions(singleLender.id, singleLender.code)
                  "
                >
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
            <CTableDataCell>
              {{ singleLender.Name }}
            </CTableDataCell>
            <CTableDataCell>
              {{ singleLender.Namee }}
            </CTableDataCell>

            <!-- <CTableDataCell v-show="singleLender.resources.length == 1"
              >--
            </CTableDataCell> -->

            <!-- <CTableDataCell> Otto </CTableDataCell> -->
            <CTableDataCell>
              {{ singleLender.Description }}
            </CTableDataCell>
            <CTableDataCell>
              {{ singleLender.Descriptions }}
            </CTableDataCell>
            <!-- <CTableDataCell v-show="singleLender.resources.length == 1"
              >--
            </CTableDataCell> -->

            <!--<CTableDataCell> Vivamus neque lorem </CTableDataCell> -->
          </CTableRow>
        </CTableBody>
      </CTable>
      <!-- TABLE ENDS HERE -->
    </CCol>
  </CRow>
  <!-- Modal Edit Icon for editing existing lender resources data-->
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
                      @click.prevent="update_resources()"
                    >
                      <CIcon name="cilPlus" class="text-white" />
                    </CButton>
                  </CTableHeaderCell>
                </CTableRow>
                <CTableRow
                  v-for="(singleResource, res_index) in this.CurrentlenderByID"
                  :key="singleResource.id"
                >
                  <CTableDataCell scope="row">
                    <CInputGroup class="">
                      <CDropdown alignment="end" variant="input-group">
                        <CDropdownToggle
                          color="secondary"
                          size="sm"
                          variant="outline"
                          class="d-flex align-items-center justify-content-between bg-fields locale"
                          style="width: 120px"
                        >
                          <label
                            class="d-flex align-items-center form-check-label"
                            for="flexRadioDefault1"
                            v-if="this.update_lang[res_index]"
                          >
                            {{ this.update_lang[res_index] }}

                            <div class="lang">
                              <CIcon
                                v-if="
                                  this.CurrentlenderByID[res_index]
                                    .localeCode === 'en-ca'
                                "
                                name="cifUs"
                                class=""
                                size="xl"
                              />
                              <CIcon
                                v-else-if="
                                  this.CurrentlenderByID[res_index]
                                    .localeCode === 'fr-ca'
                                "
                                name="cifFr"
                                class=""
                                size="xl"
                              />
                              <CIcon
                                v-else-if="
                                  this.CurrentlenderByID[res_index]
                                    .localeCode === 'sp-es'
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
                            {{ singleResource.localeCode }}

                            <div class="lang">
                              <CIcon
                                v-if="
                                  this.CurrentlenderByID[res_index]
                                    .localeCode === 'en-ca'
                                "
                                name="cifUs"
                                class=""
                                size="xl"
                              />
                              <CIcon
                                v-else-if="
                                  this.CurrentlenderByID[res_index]
                                    .localeCode === 'fr-ca'
                                "
                                name="cifFr"
                                class=""
                                size="xl"
                              />
                              <CIcon
                                v-else-if="
                                  this.CurrentlenderByID[res_index]
                                    .localeCode === 'sp-es'
                                "
                                name="cifEs"
                                class=""
                                size="xl"
                              />
                            </div>
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
                            <CDropdownItem
                              v-if="
                                this.CurrentlenderByID[res_index].localeCode !==
                                singleLocale.code
                              "
                            >
                              <div class="d-flex align-items-center form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault1"
                                  @change="
                                    update_set_lang(
                                      res_index,
                                      singleLocale.name,
                                      singleLocale.code,
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
              this.update_lang = []
            }
          "
        >
          Reset
        </CButton>
        <CButton
          class="text-white px-4 btn-info"
          @click.prevent="updateLenderByID()"
          >Save
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
import { useCookies } from 'vue3-cookies'

export default {
  name: 'Dashboard',
  setup() {
    const { cookies } = useCookies()
    return { cookies }
  },
  data() {
    return {
      // Get User Id through params
      user_id: localStorage.getItem('user_id'),
      sort_by: 'code',
      sort_by_name: 'name',
      sort_direction: 'asc',
      sort_direction_name: 'asc',
      filter: '',
      lang_name_first: '',
      lang_code_first: '',
      lang_name_second: '',
      lang_code_second: '',
      selected_lang: [],
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
      CurrentlenderByID: [],
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
        clone: '',
      },

      updated_lender_data: [],
      update_lang: [],

      // Get User locale 1 & 2
      user_detail: [],
      get_user_locale1: '',
      get_user_locale2: '',

      //Update user locales object
      update_locales: {
        locale1: '',
        locale2: '',
      },

      // Final Lender grid data
      arrayObjects: [],

      languages_codes: [],
    }
  },

  mounted() {
    let my_cookie_value = this.cookies.get('rso-cookie')
    console.log(my_cookie_value)

    if (this.cookies.isKey('rso-cookie')) {
      console.log('Has Cookie')
    } else {
      console.log('Has not Cookie')
      localStorage.removeItem('token')
      localStorage.removeItem('user_id')
      this.$router.push('/')
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
    // this.getLenders(),
    this.getLocales(), this.getuserdetail(), this.getLenders_by_user()
  },

  computed: {
    filteredlenders: function () {
      console.log('i m in computed of filter' + this.lendersData, this.filter)

      //Extras
      // Filter by locales code
      // if (this.lang_code_first !== '')
      //   return item.resources.some(
      //     ({ localeCode }) => localeCode === this.lang_code_first,
      //   )

      return (
        Object.values(this.arrayObjects)

          // Filter Global Search Bar and Language Search

          .filter((item) => {
            return (
              item.code.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0 ||
              item.Name.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0 ||
              item.Namee.toLowerCase().indexOf(this.filter.toLowerCase()) >=
                0 ||
              item.Description.toLowerCase().indexOf(
                this.filter.toLowerCase(),
              ) >= 0 ||
              item.Descriptions.toLowerCase().indexOf(
                this.filter.toLowerCase(),
              ) >= 0
              // item.resources.some(
              //   ({ resourceName }) =>
              //     resourceName
              //       .toLowerCase()
              //       .indexOf(this.filter.toLowerCase()) >= 0 ||
              //     item.resources.some(
              //       ({ resourceDesc }) =>
              //         resourceDesc
              //           .toLowerCase()
              //           .indexOf(this.filter.toLowerCase()) >= 0,
              //     ),
              // )
            )
          })

          // item.resources.some(
          // ({ resourceName }) => resourceName === this.filter,
          //  )
          // Sort By Code Attribute

          .sort((len1, len2) => {
            console.log(this.sort_direction, this.sort_direction_name)
            if (this.sort_direction === 'desc')
              return len1.code.localeCompare(len2.code)
            if (this.sort_direction_name === 'desc')
              return len1.Name.localeCompare(
                len2.Name,

                // return len1.resources[0].resourceName.localeCompare(
                //   len2.resources[0].resourceName,
              )

            // This is for asc & desc sorting

            // let modifier = 1
            // if (this.sort_direction === 'desc') modifier = -1
            // if (len1[this.sort_by] < len2[this.sort_by]) return -1 * modifier
            // if (len1[this.sort_by] > len2[this.sort_by]) return 1 * modifier
            // if (len1[this.sort_by_name] < len2[this.sort_by_name])
            //   return -1 * modifier
            // if (len1[this.sort_by_name] > len2[this.sort_by_name])
            //   return 1 * modifier

            // return 0
          })
      )
    },
  },

  methods: {
    sort_lenders_code(name) {
      console.log(name)
      this.sort_direction_name = 'asc'
      if (name === this.sort_by) {
        this.sort_direction = this.sort_direction === 'asc' ? 'desc' : 'asc'
      }
      this.sort_by = name
    },

    sort_lenders_name(name) {
      console.log(name)
      this.sort_direction = 'asc'
      if (name === this.sort_by_name) {
        this.sort_direction_name =
          this.sort_direction_name === 'asc' ? 'desc' : 'asc'
      }
      this.sort_by_name = name
    },

    // Dashboard Select Languages

    setLanguageone(lan1, code) {
      this.lang_name_first = lan1
      this.lang_code_first = code
    },

    setLanguagetwo(lan2, code) {
      this.lang_name_second = lan2
      this.lang_code_second = code
    },

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
            this.$router.go()
            this.getLenders_by_user()
          } else {
            alert('Record not loaded')
          }
        })
    },
    //end delete Api
    setLanguage_add_lender(code, n, lang_name) {
      this.dataToSend.resources[n].localeCode = code
      console.log(n + lang_name + this.dataToSend.resources[n].localeCode)
      this.selected_lang[n] = lang_name

      this.localesData = this.localesData.filter(
        (item) => item.code !== this.dataToSend.resources[n].localeCode,
      )
    },

    // post APIS FUNCTIONS
    addNewLender() {
      console.log('testinng' + JSON.stringify(this.dataToSend))
      if (this.dataToSend.clone == '') {
        delete this.dataToSend.clone
        //alert(JSON.stringify(this.dataToSend))
      }
      let api = 'https://rsoapi.squarera.online/api/lenders'
      this.axios
        .post(api, this.dataToSend, {
          headers: {
            Authorization: this.token,
          },
        })
        .then((response) => {
          if (response.status == '200') {
            // console.log(
            //   'Add new lender response' + JSON.stringify(response.data.id),
            // )
            let lender_id = [
              {
                lender: response.data.id,
              },
            ]

            console.log('Add new lender response with lender id' + lender_id)
            this.Lender_link_user(lender_id)
            this.dataToSend.resources = [
              {
                code: '',
                resourceName: '',
                resourceDesc: '',
                localeCode: '',
                clone: '',
              },
            ]
            this.selected_lang = []
            this.visibleVerticallyCenteredDemo = false
            //this.getLenders()
            this.getLenders_by_user()
            this.$router.go()
            this.$router.push('/dashboard')
          } else {
            alert('Record not loaded')
          }
        })
    },

    add_resources() {
      if (this.dataToSend.resources.length <= 2) {
        this.dataToSend.resources.push({
          resourceName: '',
          resourceDesc: '',
          localeCode: '',
        })
      }
    },

    // Lender Link to user
    Lender_link_user(lender_id) {
      let api = 'https://rsoapi.squarera.online/api/lenders/user'
      this.axios
        .post(api, lender_id, {
          headers: {
            Authorization: this.token,
          },
        })
        .then((response) => {
          if (response.status == '200') {
            console.log('Lender_link_user success')
            this.getLenders_by_user()
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
            // this.lendersData = response.data
          } else {
            alert('Record not loaded')
          }
          //console.log(response.data)
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
          console.log('We are in dashboard locales' + response.data)
          if (response.status == '200') {
            this.localesData = response.data
          } else {
            alert('Record not loaded')
          }
        })
    },
    GoToLenderConditions(id, code) {
      this.$store.state.id = id
      this.$router.push('/conditions/' + id + '/' + code)
    },
    getLenderbyID(id) {
      this.update_lang = []
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
            this.CurrentlenderByID = response.data.resources
            console.log(
              'This is my single lender by id:' +
                JSON.stringify(this.lenderByID),
            )

            this.visibleVerticallyCenteredDemo1 = true
          } else {
            alert('Record not loaded')
          }
        })

      //this data object will be used later for comparison of arrays.
    },
    // GET APIS FUNCTIONS ENDS HERE
    // PUT APIS FUNCTIONS STARTS HERE
    updateLenderByID() {
      let token = this.token

      for (let index = 0; index < this.CurrentlenderByID.length; index++) {
        const element = this.CurrentlenderByID[index]
        console.log(
          'This is our for loop data' + index + JSON.stringify(element),
        )

        this.updated_lender_data.push({
          id: element.id,
          lender: this.lenderByID.id,
          localeCode: element.localeCode,
          resourceDesc: element.resourceDesc,
          resourceName: element.resourceName,
        })
      }

      let api = 'https://rsoapi.squarera.online/api/lenders/resources'
      this.axios
        .put(api, this.updated_lender_data, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          if (response.status == '200') {
            console.log(response.status)
            this.visibleVerticallyCenteredDemo1 = false
            this.getLenders_by_user()
          } else {
            console.log('data not found')
          }
        })
    },

    update_set_lang(index, name, code) {
      console.log('Updated set locales' + index + name + code)

      this.CurrentlenderByID[index].localeCode = code
      this.update_lang[index] = name
    },

    update_resources() {
      console.log('M entering')
      this.lenderByID.resources.push({
        resourceName: '',
        resourceDesc: '',
        localeCode: 'Select',
        lender: '',
      })
    },

    //Get user details by id on dashboard

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

    // Get Lenders by user

    getLenders_by_user() {
      let token = this.token
      let api = 'https://rsoapi.squarera.online/api/lenders/user'
      this.axios
        .get(api, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          if (response.status == '200') {
            this.lendersData = response.data

            var i
            var obj = {}
            var resourceName1 = ''
            var resourceName2 = ''
            var resourceDesc1 = ''
            var resourceDesc2 = ''
            for (i = 0; i < this.lendersData.length; i++) {
              if (this.lendersData[i].resources == null) {
                resourceName1 = '--'
                resourceName2 = '--'
              } else {
                if (
                  this.lendersData[i].resources[0] != null &&
                  this.lendersData[i].resources[0].localeCode ===
                    this.get_user_locale1
                ) {
                  resourceName1 = this.lendersData[i].resources[0].resourceName
                  resourceDesc1 = this.lendersData[i].resources[0].resourceDesc
                } else if (
                  this.lendersData[i].resources[1] != null &&
                  this.lendersData[i].resources[1].localeCode ===
                    this.get_user_locale1
                ) {
                  resourceName1 = this.lendersData[i].resources[1].resourceName
                  resourceDesc1 = this.lendersData[i].resources[1].resourceDesc
                } else {
                  resourceName1 = '--'
                  resourceDesc1 = '--'
                }
                if (
                  this.lendersData[i].resources[1] != null &&
                  this.lendersData[i].resources[1].localeCode ===
                    this.get_user_locale2
                ) {
                  resourceName2 = this.lendersData[i].resources[1].resourceName
                  resourceDesc2 = this.lendersData[i].resources[1].resourceDesc
                } else if (
                  this.lendersData[i].resources[0] != null &&
                  this.lendersData[i].resources[0].localeCode ===
                    this.get_user_locale2
                ) {
                  resourceName2 = this.lendersData[i].resources[0].resourceName
                  resourceDesc2 = this.lendersData[i].resources[0].resourceDesc
                } else {
                  resourceName2 = '--'
                  resourceDesc2 = '--'
                }
              }

              obj = {
                id: this.lendersData[i].id,
                code: this.lendersData[i].code,
                Name: resourceName1,
                Namee: resourceName2,
                Description: resourceDesc1,
                Descriptions: resourceDesc2,
                isActive: 1,
                resources: 'test',
              }
              this.arrayObjects.push(obj)
            }

            console.log('This is my new grid data', this.arrayObjects)
          } else {
            alert('Record not loaded')
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
