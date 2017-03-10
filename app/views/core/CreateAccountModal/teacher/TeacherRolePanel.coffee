forms = require 'core/forms'

TeacherRolePanel = Vue.extend
  name: 'teacher-role-panel'
  template: require('templates/core/create-account-modal/teacher-role-panel')()
  data: ->
    formData = _.pick(@$store.state.modal.trialRequestProperties, [
      'phoneNumber'
      'role'
      'purchaserRole'
    ])
    return _.assign(formData, {
      showRequired: false
    })
  computed: {
    validPhoneNumber: ->
      return forms.validatePhoneNumber(@phoneNumber)
  }
  methods:
    clickContinue: ->
      attrs = _.pick(@, 'phoneNumber', 'role', 'purchaserRole')
      unless _.all(attrs)
        @showRequired = true
        return
      @$store.commit('modal/updateTrialRequestProperties', attrs)
      @$emit('continue')
    clickBack: -> @$emit('back')
  mounted: ->
    @$refs.focus.focus()

module.exports = TeacherRolePanel
