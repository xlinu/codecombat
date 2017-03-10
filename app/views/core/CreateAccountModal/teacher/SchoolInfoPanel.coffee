algolia = require 'core/services/algolia'
DISTRICT_NCES_KEYS = ['district', 'district_id', 'district_schools', 'district_students']
SCHOOL_NCES_KEYS = DISTRICT_NCES_KEYS.concat(['id', 'name', 'students', 'phone'])
# NOTE: Phone number in algolia search results is for a school, not a district

SchoolInfoPanel = Vue.extend
  name: 'school-info-panel'
  template: require('templates/core/create-account-modal/school-info-panel')()
  
  data: ->
    # TODO: Store ncesData in just the store?
    ncesData = _.zipObject(['nces_'+key, ''] for key in SCHOOL_NCES_KEYS)
    formData = _.pick(@$store.state.modal.trialRequestProperties, [
      'organization'
      'district'
      'city'
      'state'
      'country'
    ])
    
    return _.assign(ncesData, formData, {
      suggestions: []
      suggestionIndex: 0
      filledSuggestion: ''
      showRequired: false
      suggestingFor: 'school'
    })
    
  methods:
    searchNcesSchools: (e) ->
      term = $(e.currentTarget).val()
      @suggestions = []
      @suggestingFor = 'school'
      @filledSchoolSuggestion = ''
      algolia.schoolsIndex.search(term, { hitsPerPage: 5, aroundLatLngViaIP: false })
      .then ({hits}) =>
        return unless @organization is term
        @suggestions = hits
        @suggestionIndex = 0
    searchNcesDistricts: (e) ->
      term = $(e.currentTarget).val()
      @suggestions = []
      @suggestingFor = 'district'
      @filledDistrictSuggestion = ''
      algolia.schoolsIndex.search(term, { hitsPerPage: 5, aroundLatLngViaIP: false })
      .then ({hits}) =>
        return unless @district is term
        @suggestions = hits
        @suggestionIndex = 0
    navSearchUp: -> @suggestionIndex = Math.max(0, @suggestionIndex - 1)
    navSearchDown: -> @suggestionIndex = Math.min(@suggestions.length, @suggestionIndex + 1)
    navSearchChoose: ->
      suggestion = @suggestions[@suggestionIndex]
      return unless suggestion
      _.assign(@, _.pick(suggestion, 'district', 'city', 'state'))
      if @suggestingFor is 'school'
        @organization = suggestion.name
      else
        @district = suggestion.district
      @filledSuggestion = true
      @country = 'USA'
      NCES_KEYS = if @suggestingFor is 'school' then SCHOOL_NCES_KEYS else DISTRICT_NCES_KEYS
      for key in _.difference(SCHOOL_NCES_KEYS, NCES_KEYS)
        @['nces_'+key] = undefined
      for key in NCES_KEYS
        @['nces_'+key] = suggestion[key]
      @suggestions = []

    navSearchClear: -> @suggestions = []
    suggestionHover: (index) -> @suggestionIndex = index
    clickContinue: ->
      attrs = _.pick(@, 'organization', 'district', 'city', 'state', 'country')
      unless _.all(attrs)
        @showRequired = true
        return
      if @filledSuggestion
        for key in SCHOOL_NCES_KEYS
          ncesKey = 'nces_'+key
          attrs[ncesKey] = @[ncesKey] if @[ncesKey]
      @$store.commit('modal/updateTrialRequestProperties', attrs)
      @$emit('continue')
    clickBack: -> @$emit('back')

    setSearchBySchool: ->
      @suggestingFor = 'school'
      
    setSearchByDistrict: ->
      @suggestingFor = 'district'
      
  mounted: ->
    @$refs.focus.focus()

module.exports = SchoolInfoPanel
