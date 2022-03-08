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
              <CCol
                class="col-8 col-sm-7 col-md-9 col-lg-9 border border-secondary rounded"
              >
                <!-- <CFormInput
                  type="text"
                  class="form-control form-control-sm"
                  id="colFormLabelSm"
                  value="BMO"
                /> -->
                <Multiselect
                  v-model="my_final_lenders.value"
                  v-bind="my_final_lenders"
                  :options="this.lender_lenders"
                ></Multiselect>
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
                <CFormSelect
                  class=""
                  v-model="search_lender_conditions.country"
                  aria-label="select example"
                  size="sm"
                >
                  <option disabled selected value="">Choose Country</option>
                  <option
                    v-for="(country, n) in countryList"
                    :value="country"
                    :key="n"
                  >
                    {{ country }}
                  </option>
                </CFormSelect>
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
                  v-model="search_lender_conditions.effectiveDate"
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
                <CFormSelect
                  class=""
                  aria-label="select example"
                  v-model="search_lender_conditions.region"
                  size="sm"
                >
                  <option disabled selected value="">Choose Region</option>
                  <option
                    v-for="(singleregion, n) in getall_regions"
                    :value="singleRegion"
                    :key="n"
                  >
                    {{ singleregion.region }}
                  </option>
                </CFormSelect>
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
                      v-if="this.selected_lang"
                    >
                      {{ this.selected_lang }}
                      <div class="lang">
                        <CIcon
                          v-if="this.selected_lang_code === 'en-ca'"
                          name="cifUs"
                          class=""
                          size="xl"
                        />
                        <CIcon
                          v-else-if="this.selected_lang_code === 'fr-ca'"
                          name="cifFr"
                          class=""
                          size="xl"
                        />
                        <CIcon
                          v-else-if="this.selected_lang_code === 'sp-es'"
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
                    <!-- <CIcon name="cifUs" class="mx-2" size="xl" /> -->
                  </CDropdownToggle>
                  <CDropdownMenu class="my-effective-lender-dropdown">
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
                          class="d-flex align-items-center justify-content-between form-check"
                        >
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            @click="
                              setFlag(singleLocale.code, singleLocale.name)
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
                class="col-8 col-sm-7 col-md-9 col-lg-9 border border-secondary rounded"
              >
                <Multiselect
                  v-model="my_final_tags.value"
                  v-bind="my_final_tags"
                  :options="this.lender_tags"
                ></Multiselect>
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
              <div class="custom-control custom-checkbox checkbox-xl">
                <input
                  type="checkbox"
                  class="mycheckbox"
                  @click="getCheckBox($event)"
                />
              </div>
            </div>
          </div>
        </div>
        <hr class="mt-3 mb-0" />
        <div class="d-flex justify-content-center">
          <div class="d-grid gap-2 d-md-flex justify-content-md-end my-3">
            <CButton
              @click.prevent="searchData()"
              class="btn-success text-white me-md-2 px-5 fw-bold"
              shape="rounded-pill"
              >Preview</CButton
            >
            <CButton
              @click.prevent="downloadData()"
              class="btn-info text-white px-5 fw-bold"
              shape="rounded-pill"
              >Download</CButton
            >
            <!-- <downloadCsv
              class="btn btn-default"
              :data="json_data"
              name="filename.csv"
            >
              Download CSV (This is a slot)
            </downloadCsv> -->
          </div>
        </div>
        <hr class="mt-3 mb-0" />
        <div class="row t-head mx-0 my-0 pt-2 pb-1">
          <div class="col col-lg-4">
            <h6 class="text-left pt-1">Settings</h6>
          </div>
          <div class="col-4">
            <!-- {{ this.searchedFirstName }} -->
            <h6 class="text-center pt-1">{{ this.searchedFirstName }}</h6>
          </div>
          <div class="col-4">
            <h6 class="text-center pt-1">Lender 2</h6>
          </div>
          <!-- <div class="col">
            <h6 class="text-center pt-1">All Stars</h6>
          </div> -->
        </div>

        <CCollapse v-show="visible">
          <div
            class="row text-center py-4 row mx-0 my-0 pt-2 pb-1"
            v-for="single_filter_condition in my_filtered_conditions"
            :key="single_filter_condition.id"
          >
            <div class="col-4 width-auto border text-left py-4">
              <h5>{{ single_filter_condition.name }}</h5>
            </div>
            <div class="col-4 border py-4">
              <div class="d-flex justify-content-center">
                <CCol sm="3" class="pe-2">
                  <CFormInput
                    type="text"
                    id="lenderCodeField"
                    :value="single_filter_condition.value"
                  />
                </CCol>
                <CCol sm="9">
                  <CFormInput
                    type="text"
                    id="lenderCodeField"
                    :value="single_filter_condition.notes[0].note"
                  />
                </CCol>
              </div>
            </div>

            <div class="col-4 border py-4">
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
        </CCollapse>
        <!--  <CCollapse v-show="visible">
          <div
            class="row mx-0"
            v-for="singleSearchData in this.all_searched_data"
            :key="singleSearchData.id"
          >
             <div class="col col-lg-2 border text-center py-4"> 
             <div class="col width-auto border text-left py-4">
              <h5>{{ singleSearchData.desc }}</h5>
            </div>
            <div class="col border py-4">
              <div class="d-flex justify-content-center">
                <CCol sm="2" class="pe-2">
                  <CFormInput
                    type="text"
                    id="lenderCodeField"
                    :value="singleSearchData.value"
                  />
                </CCol>
                <CCol sm="7">
                  <CFormInput
                    type="text"
                    id="lenderCodeField"
                    :value="singleSearchData.Lender.code"
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
        </CCollapse>  -->
      </CForm>
    </CCol>
  </CRow>
</template>
<script>
import Multiselect from '@vueform/multiselect'
import checkIcon from '@/assets/images/icons/check.png'
export default {
  components: {
    Multiselect,
  },
  name: 'Login',
  data() {
    return {
      json_data: [
        {
          name: 'Tony Peña',
          city: 'New York',
          country: 'United States',
          birthdate: '1978-03-15',
          phone: {
            mobile: '1-541-754-3010',
            landline: '(541) 754-3010',
          },
        },
        {
          name: 'Thessaloniki',
          city: 'Athens',
          country: 'Greece',
          birthdate: '1987-11-23',
          phone: {
            mobile: '+1 855 275 5071',
            landline: '(2741) 2621-244',
          },
        },
      ],
      number: ['1', '2', '3'],
      token: localStorage.getItem('token'),
      selected_lang: '',
      value: '',
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
      // Get tags result and push and create array
      lender_tags: [],
      lender_lenders: [],
      getall_tags: [],
      // Get regions
      getall_regions: [],
      my_final_tags: {
        mode: 'tags',
        value: ['Hockey'],
        closeOnSelect: false,
        searchable: true,
        createOption: true,
      },
      my_final_lenders: {
        mode: 'tags',
        value: ['Lender'],
        closeOnSelect: false,
        searchable: true,
        createOption: true,
      },
      lendersData: {},
      checkIcon,
      visibleVerticallyCenteredDemo: false,
      visible: false,
      localesData: {},
      search_lender_conditions: {
        lenderCode: [],
        effectiveDate: '',
        country: '',
        region: '',
        isPublished: '',
        tags: [],
        language: '',
      },
      tempIsPublished: false,
      data_to_send: {
        lenderCode: [],
        effectiveDate: '',
        country: '',
        region: '',
        isPublished: '',
        tags: [],
        language: '',
      },
      all_searched_data: {},
      searchedFirstName: '',
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
    this.getLocales()
    this.get_tags()
    this.getLenders()
    this.get_regions()
  },

  computed: {
    my_filtered_conditions: function () {
      return Object.values(this.all_searched_data).filter((item) => {
        return item.Lender.code == this.searchedFirstName
      })
    },
  },

  methods: {
    getCheckBox(event) {
      if (event.target.checked) {
        this.tempIsPublished = true
      } else {
        this.tempIsPublished = false
      }
    },
    searchData() {
      this.data_to_send.lenderCode = this.my_final_lenders.value
      this.data_to_send.effectiveDate =
        this.search_lender_conditions.effectiveDate
      this.data_to_send.country = this.search_lender_conditions.country
      this.data_to_send.region = this.search_lender_conditions.region
      this.data_to_send.isPublished = this.tempIsPublished
      this.data_to_send.tags = this.my_final_tags.value
      this.data_to_send.language = this.search_lender_conditions.language

      this.searchedFirstName = this.data_to_send.lenderCode[0]

      console.log(this.data_to_send)
      let api = 'https://rsoapi.squarera.online/api/lenderConditions/search'
      this.axios
        .post(api, this.data_to_send, {
          headers: {
            Authorization: this.token,
          },
        })
        .then((response) => {
          if (response.status == '200') {
            // alert(response.status)
            this.all_searched_data = response.data
            this.visible = true
            //this.$router.push('/dashboard')
          } else {
            alert('Record not loaded')
          }
        })

      //let search_effective_lenders = []
    },

    // Download CSV
    downloadData() {
      console.log('Entering Download Data')

      this.data_to_send.lenderCode = this.my_final_lenders.value
      this.data_to_send.effectiveDate =
        this.search_lender_conditions.effectiveDate
      this.data_to_send.country = this.search_lender_conditions.country
      this.data_to_send.region = this.search_lender_conditions.region
      this.data_to_send.isPublished = this.tempIsPublished
      this.data_to_send.tags = this.my_final_tags.value
      this.data_to_send.language = this.search_lender_conditions.language
      //{ responseType: 'arraybuffer' }
      console.log('Export:', this.data_to_send)
      let api = 'https://rsoapi.squarera.online/api/lenderConditions/export'
      this.axios
        .post(api, this.data_to_send, {
          headers: {
            Authorization: this.token,
          },
          'Content-Type': 'blob',
          responseType: 'arraybuffer',
        })
        .then((response) => {
          if (response.status == '200') {
            // alert(response.status)
            this.all_searched_data = response.data

            // console.log('Export Response', this.all_searched_data)
            const url = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', 'Export_Conditions.csv')
            document.body.appendChild(link)
            link.click()
          } else {
            alert('Record not loaded')
          }
        })
      //window.URL.createObjectURL(new Blob(this.all_searched_data))
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
    getLenders() {
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
            this.lendersData.forEach((lender) => {
              this.lender_lenders.push(lender.code)
            })
          } else {
            alert('Record not loaded')
          }
          //console.log(response.data)
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
            // console.log(
            //   'Effective Lender conditions: Locales' +
            //     JSON.stringify(this.localesData),
            // )
          } else {
            alert('Record not loaded')
          }
        })
    },

    setFlag(code, lang_name) {
      this.search_lender_conditions.language = code
      this.selected_lang = lang_name
      this.selected_lang_code = code
      console.log(this.selected_lang_code)
    },
  },
}
</script>
<style>
@import '~@syncfusion/ej2-base/styles/material.css';
/* @import '~@syncfusion/ej2-inputs/styles/material.css'; */
@import '~@syncfusion/ej2-vue-dropdowns/styles/material.css';
/* @import '~@syncfusion/ej2-buttons/styles/material.css'; */
</style>
<style src="@vueform/multiselect/themes/default.css"></style>
