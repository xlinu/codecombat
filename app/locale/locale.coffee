# List of the BCP-47 language codes
# https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
# Sort according to language popularity on Internet
# http://en.wikipedia.org/wiki/Languages_used_on_the_Internet

module.exports =
  update: ->
    # localesLoaded = (s for s in window.require.list() when _.string.startsWith(s, 'locale/'))
    # for path in localesLoaded
    #   continue if path is 'locale/locale'
    #   code = path.replace('locale/', '')
    #   @[code] = require(path)
    
  'en': require('locale/en')
  'en-US': require('locale/en-US')
  'en-GB': require('locale/en-GB')
  'zh-HANS': require('locale/zh-HANS')
  'zh-HANT': require('locale/zh-HANT')
  'ru': require('locale/ru')
  'es-ES': require('locale/es-ES')
  'es-419': require('locale/es-419')
  'fr': require('locale/fr')
  'ar': require('locale/ar')
  'bg': require('locale/bg')
  'ca': require('locale/ca')
  'cs': require('locale/cs')
  'da': require('locale/da')
  'de-DE': require('locale/de-DE')
  'de-AT': require('locale/de-AT')
  'de-CH': require('locale/de-CH')
  'et': require('locale/et')
  'el': require('locale/el')
  'eo': require('locale/eo')
  'fa': require('locale/fa')
  'gl': require('locale/gl')
  'ko': require('locale/ko')
  'haw': require('locale/haw')
  'he': require('locale/he')
  'hr': require('locale/hr')
  'hu': require('locale/hu')
  'id': require('locale/id')
  'it': require('locale/it')
  'lt': require('locale/lt')
  'mi': require('locale/mi')
  'mk-MK': require('locale/mk-MK')
  'hi': require('locale/hi')
  'ms': require('locale/ms')
  'my': require('locale/my')
  'nl-BE': require('locale/nl-BE')
  'nl-NL': require('locale/nl-NL')
  'ja': require('locale/ja')
  'nb': require('locale/nb')
  'nn': require('locale/nn')
  'uz': require('locale/uz')
  'pl': require('locale/pl')
  'pt-PT': require('locale/pt-PT')
  'pt-BR': require('locale/pt-BR')
  'ro': require('locale/ro')
  'sr': require('locale/sr')
  'sk': require('locale/sk')
  'sl': require('locale/sl')
  'fi': require('locale/fi')
  'sv': require('locale/sv')
  'th': require('locale/th')
  'tr': require('locale/tr')
  'uk': require('locale/uk')
  'ur': require('locale/ur')
  'vi': require('locale/vi')
  'zh-WUU-HANS': require('locale/zh-WUU-HANS')
  'zh-WUU-HANT': require('locale/zh-WUU-HANT')


  # 'en': { nativeDescription: 'English', englishDescription: 'English' }
  # 'en-US': { nativeDescription: 'English (US)', englishDescription: 'English (US)' }
  # 'en-GB': { nativeDescription: 'English (UK)', englishDescription: 'English (UK)' }
  # 'zh-HANS': { nativeDescription: '简体中文', englishDescription: 'Chinese (Simplified)' }
  # 'zh-HANT': { nativeDescription: '繁體中文', englishDescription: 'Chinese (Traditional)' }
  # 'ru': { nativeDescription: 'русский', englishDescription: 'Russian' }
  # 'es-ES': { nativeDescription: 'español (ES)', englishDescription: 'Spanish (Spain)' }
  # 'es-419': { nativeDescription: 'español (América Latina)', englishDescription: 'Spanish (Latin America)' }
  # 'fr': { nativeDescription: 'français', englishDescription: 'French' }
  # # Begin alphabetized list: https://github.com/codecombat/codecombat/issues/2329#issuecomment-74630546
  # 'ar': { nativeDescription: 'العربية', englishDescription: 'Arabic' }
  # 'bg': { nativeDescription: 'български език', englishDescription: 'Bulgarian' }
  # 'ca': { nativeDescription: 'Català', englishDescription: 'Catalan' }
  # 'cs': { nativeDescription: 'čeština', englishDescription: 'Czech' }
  # 'da': { nativeDescription: 'dansk', englishDescription: 'Danish' }
  # 'de-DE': { nativeDescription: 'Deutsch (Deutschland)', englishDescription: 'German (Germany)' }
  # 'de-AT': { nativeDescription: 'Deutsch (Österreich)', englishDescription: 'German (Austria)' }
  # 'de-CH': { nativeDescription: 'Deutsch (Schweiz)', englishDescription: 'German (Switzerland)' }
  # 'et': { nativeDescription: 'Eesti', englishDescription: 'Estonian' }
  # 'el': { nativeDescription: 'Ελληνικά', englishDescription: 'Greek' }
  # 'eo': { nativeDescription: 'Esperanto', englishDescription: 'Esperanto' }
  # 'fa': { nativeDescription: 'فارسی', englishDescription: 'Persian' }
  # 'gl': { nativeDescription: 'Galego', englishDescription: 'Galician' }
  # 'ko': { nativeDescription: '한국어', englishDescription: 'Korean' }
  # 'haw': { nativeDescription: 'ʻŌlelo Hawaiʻi', englishDescription: 'Hawaiian' }
  # 'he': { nativeDescription: 'עברית', englishDescription: 'Hebrew' }
  # 'hr': { nativeDescription: 'hrvatski jezik', englishDescription: 'Croatian' }
  # 'hu': { nativeDescription: 'magyar', englishDescription: 'Hungarian' }
  # 'id': { nativeDescription: 'Bahasa Indonesia', englishDescription: 'Indonesian' }
  # 'it': { nativeDescription: 'Italiano', englishDescription: 'Italian' }
  # 'lt': { nativeDescription: 'lietuvių kalba', englishDescription: 'Lithuanian' }
  # 'mi': { nativeDescription: 'te reo Māori', englishDescription: 'Māori' }
  # 'mk-MK': { nativeDescription: 'Македонски', englishDescription: 'Macedonian' }
  # 'hi': { nativeDescription: 'मानक हिन्दी', englishDescription: 'Hindi' }
  # 'ms': { nativeDescription: 'Bahasa Melayu', englishDescription: 'Bahasa Malaysia' }
  # 'my': { nativeDescription: 'မြန်မာစကား', englishDescription: 'Myanmar language' }
  # 'nl-BE': { nativeDescription: 'Nederlands (België)', englishDescription: 'Dutch (Belgium)' }
  # 'nl-NL': { nativeDescription: 'Nederlands (Nederland)', englishDescription: 'Dutch (Netherlands)' }
  # 'ja': { nativeDescription: '日本語', englishDescription: 'Japanese' }
  # 'nb': { nativeDescription: 'Norsk Bokmål', englishDescription: 'Norwegian (Bokmål)' }
  # 'nn': { nativeDescription: 'Norsk Nynorsk', englishDescription: 'Norwegian (Nynorsk)' }
  # 'uz': { nativeDescription: "O'zbekcha", englishDescription: 'Uzbek' }
  # 'pl': { nativeDescription: 'język polski', englishDescription: 'Polish' }
  # 'pt-PT': { nativeDescription: 'Português (Portugal)', englishDescription: 'Portuguese (Portugal)' }
  # 'pt-BR': { nativeDescription: 'Português (Brasil)', englishDescription: 'Portuguese (Brazil)' }
  # 'ro': { nativeDescription: 'limba română', englishDescription: 'Romanian' }
  # 'sr': { nativeDescription: 'српски', englishDescription: 'Serbian' }
  # 'sk': { nativeDescription: 'slovenčina', englishDescription: 'Slovak' }
  # 'sl': { nativeDescription: 'slovenščina', englishDescription: 'Slovene' }
  # 'fi': { nativeDescription: 'suomi', englishDescription: 'Finnish' }
  # 'sv': { nativeDescription: 'Svenska', englishDescription: 'Swedish' }
  # 'th': { nativeDescription: 'ไทย', englishDescription: 'Thai' }
  # 'tr': { nativeDescription: 'Türkçe', englishDescription: 'Turkish' }
  # 'uk': { nativeDescription: 'українська мова', englishDescription: 'Ukrainian' }
  # 'ur': { nativeDescription: 'اُردُو', englishDescription: 'Urdu' }
  # 'vi': { nativeDescription: 'Tiếng Việt', englishDescription: 'Vietnamese' }
  # 'zh-WUU-HANS': { nativeDescription: '吴语', englishDescription: 'Wuu (Simplified)' }
  # 'zh-WUU-HANT': { nativeDescription: '吳語', englishDescription: 'Wuu (Traditional)' }
