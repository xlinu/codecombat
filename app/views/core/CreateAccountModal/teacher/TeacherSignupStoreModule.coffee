api = require 'core/api'
DISTRICT_NCES_KEYS = ['district', 'district_id', 'district_schools', 'district_students', 'phone']
SCHOOL_NCES_KEYS = DISTRICT_NCES_KEYS.concat(['id', 'name', 'students'])
ncesData = _.zipObject(['nces_'+key, ''] for key in SCHOOL_NCES_KEYS)

module.exports = TeacherSignupStoreModule = {
  namespaced: true
  state: {
    trialRequestProperties: _.assign(ncesData, {
      organization: ''
      district: ''
      city: ''
      state: ''
      country: ''
      phoneNumber: ''
      role: ''
      purchaserRole: ''
      numStudents: ''
      numStudentsTotal: ''
      notes: ''
      referrer: ''
      educationLevel: []
      otherEducationLevel: false
      otherEducationLevelExplanation: ''
      siteOrigin: 'create teacher'
    })
    signupForm: {
      name: ''
      email: ''
      password: ''
    }
    ssoAttrs: {
      email: '',
      gplusID: '',
      facebookID: ''
    }
    ssoUsed: '' # 'gplus', or 'facebook'
  }
  mutations: {
    updateTrialRequestProperties: (state, updates) ->
      _.assign(state.trialRequestProperties, updates)
    updateSignupForm: (state, updates) ->
      _.assign(state.signupForm, updates)
    updateSso: (state, { ssoUsed, ssoAttrs }) ->
      _.assign(state.ssoAttrs, ssoAttrs)
      state.ssoUsed = ssoUsed
  }
  actions: {
    createAccount: ({state, commit, dispatch, rootState}) ->
      
      return Promise.resolve()
      .then =>
        return dispatch('me/save', {
          role: state.trialRequestProperties.role.toLowerCase()
        }, {
          root: true
        })

      .then =>
        # add "other education level" explanation to the list of education levels
        properties = _.cloneDeep(state.trialRequestProperties)
        if properties.otherEducationLevel
          properties.educationLevel.push(properties.otherEducationLevelExplanation)
        delete properties.otherEducationLevel
        delete properties.otherEducationLevelExplanation
        properties.email = state.signupForm.email
        
        return api.trialRequests.post({
          type: 'course'
          properties
        })
      
      .then =>
        attrs = _.assign({}, state.signupForm, state.ssoAttrs, { userId: rootState.me._id })
        if state.ssoUsed is 'gplus'
          return api.users.signupWithGPlus(attrs)
        else if state.ssoUsed is 'facebook'
          return api.users.signupWithFacebook(attrs)
        else
          return api.users.signupWithPassword(attrs)
  }
}

module.exports = TeacherSignupStoreModule
