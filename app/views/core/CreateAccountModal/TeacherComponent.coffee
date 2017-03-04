algolia = require 'core/services/algolia'
DISTRICT_NCES_KEYS = ['district', 'district_id', 'district_schools', 'district_students', 'phone']
SCHOOL_NCES_KEYS = DISTRICT_NCES_KEYS.concat(['id', 'name', 'students'])
forms = require 'core/forms'

SchoolInfoPanel = Vue.extend
  name: 'school-info-panel'
  template: require('templates/core/create-account-modal/school-info-panel')()
  
  data: ->
    ncesData = _.zipObject(['nces_'+key, ''] for key in SCHOOL_NCES_KEYS)
    return _.assign(ncesData, {
      organization: ''
      district: ''
      city: ''
      state: ''
      country: ''
      suggestions: []
      suggestionIndex: 0
      filledSuggestion: ''
      showRequired: false
    })
    
  methods:
    searchNces: (term) ->
      this.suggestions = []
      this.filledSuggestion = ''
      algolia.schoolsIndex.search(term, { hitsPerPage: 5, aroundLatLngViaIP: false })
      .then ({hits}) =>
        return unless this.organization is term
        this.suggestions = hits
        this.suggestionIndex = 0
    navSearchUp: -> this.suggestionIndex = Math.max(0, this.suggestionIndex - 1)
    navSearchDown: -> this.suggestionIndex = Math.min(this.suggestions.length, this.suggestionIndex + 1)
    navSearchChoose: ->
      suggestion = this.suggestions[this.suggestionIndex]
      _.assign(@, _.pick(suggestion, 'district', 'city', 'state', 'organization'))
      @filledSuggestion = @organization = suggestion.name
      @country = 'USA'
      for key in SCHOOL_NCES_KEYS
        @['nces_'+key] = suggestion[key]
      @suggestions = []

    navSearchClear: -> this.suggestions = []
    suggestionHover: (index) -> this.suggestionIndex = index
    clickContinue: ->
      unless _.all(_.pick(@, 'organization', 'district', 'city', 'state', 'country'))
        this.showRequired = true
        return
      @$emit('continue')
      
  watch:
    organization: (newOrganization) ->
      return if @filledSuggestion is newOrganization
      @searchNces(newOrganization)


TeacherRolePanel = Vue.extend
  name: 'teacher-role-panel'
  template: require('templates/core/create-account-modal/teacher-role-panel')()
  data: -> {
    phoneNumber: ''
    role: ''
    purchaserRole: ''
    showRequired: false
  }
  computed: {
    validPhoneNumber: ->
      return forms.validatePhoneNumber(this.phoneNumber)
  }
  methods:
    clickContinue: ->
      unless _.all(_.pick(@, 'phoneNumber', 'role', 'purchaserRole'))
        this.showRequired = true
        return
      @$emit('continue')
      
      
module.exports = Vue.extend
  name: 'teacher-component'
  template: require('templates/core/create-account-modal/teacher-component')()
  
  data: ->
    panel: 'teacher-role-panel'
  
  components:
    'school-info-panel': SchoolInfoPanel
    'teacher-role-panel': TeacherRolePanel

  methods:
    onContinue: ->
      if @panel is 'school-info-panel'
        @panel = 'teacher-role-panel'
