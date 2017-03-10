algolia = require 'core/services/algolia'
DISTRICT_NCES_KEYS = ['district', 'district_id', 'district_schools', 'district_students', 'phone']
SCHOOL_NCES_KEYS = DISTRICT_NCES_KEYS.concat(['id', 'name', 'students'])

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
    })
    
  methods:
    searchNces: (term) ->
      @suggestions = []
      @filledSuggestion = ''
      algolia.schoolsIndex.search(term, { hitsPerPage: 5, aroundLatLngViaIP: false })
      .then ({hits}) =>
        return unless @organization is term
        @suggestions = hits
        @suggestionIndex = 0
    navSearchUp: -> @suggestionIndex = Math.max(0, @suggestionIndex - 1)
    navSearchDown: -> @suggestionIndex = Math.min(@suggestions.length, @suggestionIndex + 1)
    navSearchChoose: ->
      suggestion = @suggestions[@suggestionIndex]
      return unless suggestion
      _.assign(@, _.pick(suggestion, 'district', 'city', 'state', 'organization'))
      @filledSuggestion = @organization = suggestion.name
      @country = 'USA'
      for key in SCHOOL_NCES_KEYS
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
          attrs[ncesKey] = @[ncesKey]
      @$store.commit('modal/updateTrialRequestProperties', attrs)
      @$emit('continue')
    clickBack: -> @$emit('back')
      
  watch:
    organization: (newOrganization) ->
      return if @filledSuggestion is newOrganization
      @searchNces(newOrganization)
      
  mounted: ->
    @$refs.focus.focus()

module.exports = SchoolInfoPanel
