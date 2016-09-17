/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************!*\
  !*** ./app/app.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	// require.context('./core', true, /^.*$/)
	__webpack_require__(/*! ./core/Router.coffee */ 1)


/***/ },
/* 1 */
/*!********************************!*\
  !*** ./app/core/Router.coffee ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	var CocoRouter, go, redirect, utils,
	  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty,
	  slice = [].slice;
	
	go = function(path, options) {
	  return function() {
	    return this.routeDirectly(path, arguments, options);
	  };
	};
	
	redirect = function(path) {
	  return function() {
	    return this.navigate(path + document.location.search, {
	      trigger: true,
	      replace: true
	    });
	  };
	};
	
	utils = __webpack_require__(/*! ./utils */ 2);
	
	module.exports = CocoRouter = (function(superClass) {
	  extend(CocoRouter, superClass);
	
	  function CocoRouter() {
	    this.renderSocialButtons = bind(this.renderSocialButtons, this);
	    return CocoRouter.__super__.constructor.apply(this, arguments);
	  }
	
	  CocoRouter.prototype.initialize = function() {
	    this.bind('route', this._trackPageView);
	    Backbone.Mediator.subscribe('router:navigate', this.onNavigate, this);
	    return this.initializeSocialMediaServices = _.once(this.initializeSocialMediaServices);
	  };
	
	  CocoRouter.prototype.routes = {
	    '': function() {
	      if (window.serverConfig.picoCTF) {
	        return this.routeDirectly('play/CampaignView', ['picoctf'], {});
	      }
	      if (utils.getQueryVariable('hour_of_code')) {
	        return this.navigate("/play", {
	          trigger: true,
	          replace: true
	        });
	      }
	      return this.routeDirectly('HomeView', []);
	    },
	    'about': go('AboutView'),
	    'account': go('account/MainAccountView'),
	    'account/settings': go('account/AccountSettingsRootView'),
	    'account/unsubscribe': go('account/UnsubscribeView'),
	    'account/payments': go('account/PaymentsView'),
	    'account/subscription': go('account/SubscriptionView'),
	    'account/invoices': go('account/InvoicesView'),
	    'account/prepaid': go('account/PrepaidView'),
	    'admin': go('admin/MainAdminView'),
	    'admin/clas': go('admin/CLAsView'),
	    'admin/classroom-levels': go('admin/AdminClassroomLevelsView'),
	    'admin/design-elements': go('admin/DesignElementsView'),
	    'admin/files': go('admin/FilesView'),
	    'admin/analytics': go('admin/AnalyticsView'),
	    'admin/analytics/subscriptions': go('admin/AnalyticsSubscriptionsView'),
	    'admin/level-sessions': go('admin/LevelSessionsView'),
	    'admin/school-counts': go('admin/SchoolCountsView'),
	    'admin/school-licenses': go('admin/SchoolLicensesView'),
	    'admin/users': go('admin/UsersView'),
	    'admin/base': go('admin/BaseView'),
	    'admin/demo-requests': go('admin/DemoRequestsView'),
	    'admin/trial-requests': go('admin/TrialRequestsView'),
	    'admin/user-code-problems': go('admin/UserCodeProblemsView'),
	    'admin/pending-patches': go('admin/PendingPatchesView'),
	    'admin/codelogs': go('admin/CodeLogsView'),
	    'artisans': go('artisans/ArtisansView'),
	    'artisans/level-tasks': go('artisans/LevelTasksView'),
	    'artisans/solution-problems': go('artisans/SolutionProblemsView'),
	    'artisans/thang-tasks': go('artisans/ThangTasksView'),
	    'artisans/level-concepts': go('artisans/LevelConceptMap'),
	    'artisans/level-guides': go('artisans/LevelGuidesView'),
	    'careers': function() {
	      return window.location.href = 'https://jobs.lever.co/codecombat';
	    },
	    'Careers': function() {
	      return window.location.href = 'https://jobs.lever.co/codecombat';
	    },
	    'cla': go('CLAView'),
	    'clans': go('clans/ClansView'),
	    'clans/:clanID': go('clans/ClanDetailsView'),
	    'community': go('CommunityView'),
	    'contribute': go('contribute/MainContributeView'),
	    'contribute/adventurer': go('contribute/AdventurerView'),
	    'contribute/ambassador': go('contribute/AmbassadorView'),
	    'contribute/archmage': go('contribute/ArchmageView'),
	    'contribute/artisan': go('contribute/ArtisanView'),
	    'contribute/diplomat': go('contribute/DiplomatView'),
	    'contribute/scribe': go('contribute/ScribeView'),
	    'courses': redirect('/students'),
	    'Courses': redirect('/students'),
	    'courses/students': redirect('/students'),
	    'courses/teachers': redirect('/teachers/classes'),
	    'courses/purchase': redirect('/teachers/licenses'),
	    'courses/enroll(/:courseID)': redirect('/teachers/licenses'),
	    'courses/update-account': redirect('students/update-account'),
	    'courses/:classroomID': function() {
	      return this.navigate("/students/" + arguments[0], {
	        trigger: true,
	        replace: true
	      });
	    },
	    'courses/:courseID/:courseInstanceID': function() {
	      return this.navigate("/students/" + arguments[0] + "/" + arguments[1], {
	        trigger: true,
	        replace: true
	      });
	    },
	    'db/*path': 'routeToServer',
	    'demo(/*subpath)': go('DemoView'),
	    'docs/components': go('docs/ComponentsDocumentationView'),
	    'docs/systems': go('docs/SystemsDocumentationView'),
	    'editor': go('CommunityView'),
	    'editor/achievement': go('editor/achievement/AchievementSearchView'),
	    'editor/achievement/:articleID': go('editor/achievement/AchievementEditView'),
	    'editor/article': go('editor/article/ArticleSearchView'),
	    'editor/article/preview': go('editor/article/ArticlePreviewView'),
	    'editor/article/:articleID': go('editor/article/ArticleEditView'),
	    'editor/level': go('editor/level/LevelSearchView'),
	    'editor/level/:levelID': go('editor/level/LevelEditView'),
	    'editor/thang': go('editor/thang/ThangTypeSearchView'),
	    'editor/thang/:thangID': go('editor/thang/ThangTypeEditView'),
	    'editor/campaign/:campaignID': go('editor/campaign/CampaignEditorView'),
	    'editor/poll': go('editor/poll/PollSearchView'),
	    'editor/poll/:articleID': go('editor/poll/PollEditView'),
	    'editor/thang-tasks': go('editor/ThangTasksView'),
	    'editor/verifier': go('editor/verifier/VerifierView'),
	    'editor/verifier/:levelID': go('editor/verifier/VerifierView'),
	    'editor/course': go('editor/course/CourseSearchView'),
	    'editor/course/:courseID': go('editor/course/CourseEditView'),
	    'file/*path': 'routeToServer',
	    'github/*path': 'routeToServer',
	    'hoc': function() {
	      return this.navigate("/play", {
	        trigger: true,
	        replace: true
	      });
	    },
	    'home': go('HomeView'),
	    'i18n': go('i18n/I18NHomeView'),
	    'i18n/thang/:handle': go('i18n/I18NEditThangTypeView'),
	    'i18n/component/:handle': go('i18n/I18NEditComponentView'),
	    'i18n/level/:handle': go('i18n/I18NEditLevelView'),
	    'i18n/achievement/:handle': go('i18n/I18NEditAchievementView'),
	    'i18n/campaign/:handle': go('i18n/I18NEditCampaignView'),
	    'i18n/poll/:handle': go('i18n/I18NEditPollView'),
	    'i18n/course/:handle': go('i18n/I18NEditCourseView'),
	    'identify': go('user/IdentifyView'),
	    'legal': go('LegalView'),
	    'play(/)': go('play/CampaignView'),
	    'play/ladder/:levelID/:leagueType/:leagueID': go('ladder/LadderView'),
	    'play/ladder/:levelID': go('ladder/LadderView'),
	    'play/ladder': go('ladder/MainLadderView'),
	    'play/level/:levelID': go('play/level/PlayLevelView'),
	    'play/game-dev-level/:levelID/:sessionID': go('play/level/PlayGameDevLevelView'),
	    'play/web-dev-level/:levelID/:sessionID': go('play/level/PlayWebDevLevelView'),
	    'play/spectate/:levelID': go('play/SpectateView'),
	    'play/:map': go('play/CampaignView'),
	    'preview': go('HomeView'),
	    'privacy': go('PrivacyView'),
	    'schools': go('HomeView'),
	    'seen': go('HomeView'),
	    'SEEN': go('HomeView'),
	    'students': go('courses/CoursesView', {
	      redirectTeachers: true
	    }),
	    'students/update-account': go('courses/CoursesUpdateAccountView', {
	      redirectTeachers: true
	    }),
	    'students/:classroomID': go('courses/ClassroomView', {
	      redirectTeachers: true,
	      studentsOnly: true
	    }),
	    'students/:courseID/:courseInstanceID': go('courses/CourseDetailsView', {
	      redirectTeachers: true,
	      studentsOnly: true
	    }),
	    'teachers': redirect('/teachers/classes'),
	    'teachers/classes': go('courses/TeacherClassesView', {
	      redirectStudents: true,
	      teachersOnly: true
	    }),
	    'teachers/classes/:classroomID': go('courses/TeacherClassView', {
	      redirectStudents: true,
	      teachersOnly: true
	    }),
	    'teachers/courses': go('courses/TeacherCoursesView', {
	      redirectStudents: true
	    }),
	    'teachers/course-solution/:courseID/:language': go('teachers/TeacherCourseSolutionView', {
	      redirectStudents: true
	    }),
	    'teachers/demo': go('teachers/RequestQuoteView', {
	      redirectStudents: true
	    }),
	    'teachers/enrollments': redirect('/teachers/licenses'),
	    'teachers/licenses': go('courses/EnrollmentsView', {
	      redirectStudents: true,
	      teachersOnly: true
	    }),
	    'teachers/freetrial': go('teachers/RequestQuoteView', {
	      redirectStudents: true
	    }),
	    'teachers/quote': redirect('/teachers/demo'),
	    'teachers/resources': go('teachers/ResourceHubView', {
	      redirectStudents: true
	    }),
	    'teachers/resources/:name': go('teachers/MarkdownResourceView', {
	      redirectStudents: true
	    }),
	    'teachers/signup': function() {
	      if (me.isAnonymous()) {
	        return this.routeDirectly('teachers/CreateTeacherAccountView', []);
	      }
	      if (me.isStudent() && !me.isAdmin()) {
	        return this.navigate('/students', {
	          trigger: true,
	          replace: true
	        });
	      }
	      return this.navigate('/teachers/update-account', {
	        trigger: true,
	        replace: true
	      });
	    },
	    'teachers/update-account': function() {
	      if (me.isAnonymous()) {
	        return this.navigate('/teachers/signup', {
	          trigger: true,
	          replace: true
	        });
	      }
	      if (me.isStudent() && !me.isAdmin()) {
	        return this.navigate('/students', {
	          trigger: true,
	          replace: true
	        });
	      }
	      return this.routeDirectly('teachers/ConvertToTeacherAccountView', []);
	    },
	    'test(/*subpath)': go('TestView'),
	    'user/:slugOrID': go('user/MainUserView'),
	    'user/:userID/verify/:verificationCode': go('user/EmailVerifiedView'),
	    '*name/': 'removeTrailingSlash',
	    '*name': go('NotFoundView')
	  };
	
	  CocoRouter.prototype.routeToServer = function(e) {
	    return window.location.href = window.location.href;
	  };
	
	  CocoRouter.prototype.removeTrailingSlash = function(e) {
	    return this.navigate(e, {
	      trigger: true
	    });
	  };
	
	  CocoRouter.prototype.routeDirectly = function(path, args, options) {
	    var ViewClass, leavingMessage, view;
	    if (args == null) {
	      args = [];
	    }
	    if (options == null) {
	      options = {};
	    }
	    if (options.redirectStudents && me.isStudent() && !me.isAdmin()) {
	      return this.navigate('/students', {
	        trigger: true,
	        replace: true
	      });
	    }
	    if (options.redirectTeachers && me.isTeacher() && !me.isAdmin()) {
	      return this.navigate('/teachers', {
	        trigger: true,
	        replace: true
	      });
	    }
	    if (options.teachersOnly && !(me.isTeacher() || me.isAdmin())) {
	      return this.routeDirectly('teachers/RestrictedToTeachersView');
	    }
	    if (options.studentsOnly && !(me.isStudent() || me.isAdmin())) {
	      return this.routeDirectly('courses/RestrictedToStudentsView');
	    }
	    leavingMessage = _.result(window.currentView, 'onLeaveMessage');
	    if (leavingMessage) {
	      if (!confirm(leavingMessage)) {
	        return this.navigate(this.path, {
	          replace: true
	        });
	      } else {
	        window.currentView.onLeaveMessage = _.noop;
	      }
	    }
	    if (window.serverConfig.picoCTF && !/^(views)?\/?play/.test(path)) {
	      path = 'play/CampaignView';
	    }
	    if (!_.string.startsWith(path, 'views/')) {
	      path = "views/" + path;
	    }
	    ViewClass = this.tryToLoadModule(path);
	    if (!ViewClass && application.moduleLoader.load(path)) {
	      this.listenToOnce(application.moduleLoader, 'load-complete', function() {
	        return this.routeDirectly(path, args, options);
	      });
	      return;
	    }
	    if (!ViewClass) {
	      return go('NotFoundView');
	    }
	    view = (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(ViewClass, [options].concat(slice.call(args)), function(){});
	    view.render();
	    return this.openView(view);
	  };
	
	  CocoRouter.prototype.tryToLoadModule = function(path) {
	    var error;
	    try {
	      return !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());
	    } catch (_error) {
	      error = _error;
	      if (error.toString().search('Cannot find module "' + path + '" from') === -1) {
	        throw error;
	      }
	    }
	  };
	
	  CocoRouter.prototype.openView = function(view) {
	    this.closeCurrentView();
	    $('#page-container').empty().append(view.el);
	    window.currentView = view;
	    this.activateTab();
	    view.afterInsert();
	    view.didReappear();
	    return this.path = document.location.pathname + document.location.search;
	  };
	
	  CocoRouter.prototype.closeCurrentView = function() {
	    var ref, ref1;
	    if ((ref = window.currentView) != null ? ref.reloadOnClose : void 0) {
	      return document.location.reload();
	    }
	    if ((ref1 = window.currentModal) != null) {
	      if (typeof ref1.hide === "function") {
	        ref1.hide();
	      }
	    }
	    if (window.currentView == null) {
	      return;
	    }
	    window.currentView.destroy();
	    $('.popover').popover('hide');
	    $('#flying-focus').css({
	      top: 0,
	      left: 0
	    });
	    return _.delay((function() {
	      $('html')[0].scrollTop = 0;
	      return $('body')[0].scrollTop = 0;
	    }), 10);
	  };
	
	  CocoRouter.prototype.initializeSocialMediaServices = function() {
	    if (application.testing || application.demoing) {
	      return;
	    }
	    application.facebookHandler.loadAPI();
	    application.gplusHandler.loadAPI();
	    return __webpack_require__(/*! ./services/twitter */ 4)();
	  };
	
	  CocoRouter.prototype.renderSocialButtons = function() {
	    var ref;
	    this.initializeSocialMediaServices();
	    $('.share-buttons, .partner-badges').addClass('fade-in').delay(10000).removeClass('fade-in', 5000);
	    application.facebookHandler.renderButtons();
	    application.gplusHandler.renderButtons();
	    return typeof twttr !== "undefined" && twttr !== null ? (ref = twttr.widgets) != null ? typeof ref.load === "function" ? ref.load() : void 0 : void 0 : void 0;
	  };
	
	  CocoRouter.prototype.activateTab = function() {
	    var base;
	    base = _.string.words(document.location.pathname.slice(1), '/')[0];
	    return $("ul.nav li." + base).addClass('active');
	  };
	
	  CocoRouter.prototype._trackPageView = function() {
	    var ref;
	    return (ref = window.tracker) != null ? ref.trackPageView() : void 0;
	  };
	
	  CocoRouter.prototype.onNavigate = function(e) {
	    var ViewClass, args, manualView, view;
	    if (_.isString(e.viewClass)) {
	      ViewClass = this.tryToLoadModule(e.viewClass);
	      if (!ViewClass && application.moduleLoader.load(e.viewClass)) {
	        this.listenToOnce(application.moduleLoader, 'load-complete', function() {
	          return this.onNavigate(e);
	        });
	        return;
	      }
	      e.viewClass = ViewClass;
	    }
	    manualView = e.view || e.viewClass;
	    if ((e.route === document.location.pathname) && !manualView) {
	      return document.location.reload();
	    }
	    this.navigate(e.route, {
	      trigger: !manualView
	    });
	    this._trackPageView();
	    if (!manualView) {
	      return;
	    }
	    if (e.viewClass) {
	      args = e.viewArgs || [];
	      view = (function(func, args, ctor) {
	        ctor.prototype = func.prototype;
	        var child = new ctor, result = func.apply(child, args);
	        return Object(result) === result ? result : child;
	      })(e.viewClass, args, function(){});
	      view.render();
	      return this.openView(view);
	    } else {
	      return this.openView(e.view);
	    }
	  };
	
	  CocoRouter.prototype.navigate = function(fragment, options) {
	    CocoRouter.__super__.navigate.call(this, fragment, options);
	    return Backbone.Mediator.publish('router:navigated', {
	      route: fragment
	    });
	  };
	
	  CocoRouter.prototype.reload = function() {
	    return document.location.reload();
	  };
	
	  return CocoRouter;
	
	})(Backbone.Router);


/***/ },
/* 2 */
/*!*******************************!*\
  !*** ./app/core/utils.coffee ***!
  \*******************************/
/***/ function(module, exports) {

	var TEXT, aceEditModes, capitalLanguages, compare, courseIDs, createLinearFunc, createLogFunc, createPowFunc, createQuadraticFunc, cutHex, dummy, getCourseBundlePrice, getCoursePraise, getPrepaidCodeAmount, getQueryVariable, getSponsoredSubsAmount, hexToB, hexToG, hexToR, positify, startsWithVowel, toHex,
	  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
	
	module.exports.clone = function(obj) {
	  var key, temp;
	  if (obj === null || typeof obj !== 'object') {
	    return obj;
	  }
	  temp = obj.constructor();
	  for (key in obj) {
	    temp[key] = module.exports.clone(obj[key]);
	  }
	  return temp;
	};
	
	module.exports.combineAncestralObject = function(obj, propertyName) {
	  var combined, key, ref, value;
	  combined = {};
	  while (obj != null ? obj[propertyName] : void 0) {
	    ref = obj[propertyName];
	    for (key in ref) {
	      value = ref[key];
	      if (combined[key]) {
	        continue;
	      }
	      combined[key] = value;
	    }
	    if (obj.__proto__) {
	      obj = obj.__proto__;
	    } else {
	      obj = Object.getPrototypeOf(obj);
	    }
	  }
	  return combined;
	};
	
	module.exports.courseIDs = courseIDs = {
	  INTRODUCTION_TO_COMPUTER_SCIENCE: '560f1a9f22961295f9427742',
	  COMPUTER_SCIENCE_2: '5632661322961295f9428638',
	  GAME_DEVELOPMENT_1: '5789587aad86a6efb573701e',
	  WEB_DEVELOPMENT_1: '5789587aad86a6efb573701f',
	  COMPUTER_SCIENCE_3: '56462f935afde0c6fd30fc8c',
	  GAME_DEVELOPMENT_2: '57b621e7ad86a6efb5737e64',
	  WEB_DEVELOPMENT_2: '5789587aad86a6efb5737020',
	  COMPUTER_SCIENCE_4: '56462f935afde0c6fd30fc8d',
	  COMPUTER_SCIENCE_5: '569ed916efa72b0ced971447'
	};
	
	module.exports.normalizeFunc = function(func_thing, object) {
	  var func;
	  if (object == null) {
	    object = {};
	  }
	  if (_.isString(func_thing)) {
	    func = object[func_thing];
	    if (!func) {
	      console.error("Could not find method " + func_thing + " in object", object);
	      return (function(_this) {
	        return function() {
	          return null;
	        };
	      })(this);
	    }
	    func_thing = func;
	  }
	  return func_thing;
	};
	
	module.exports.objectIdToDate = function(objectID) {
	  return new Date(parseInt(objectID.toString().slice(0, 8), 16) * 1000);
	};
	
	module.exports.hexToHSL = function(hex) {
	  return rgbToHsl(hexToR(hex), hexToG(hex), hexToB(hex));
	};
	
	hexToR = function(h) {
	  return parseInt((cutHex(h)).substring(0, 2), 16);
	};
	
	hexToG = function(h) {
	  return parseInt((cutHex(h)).substring(2, 4), 16);
	};
	
	hexToB = function(h) {
	  return parseInt((cutHex(h)).substring(4, 6), 16);
	};
	
	cutHex = function(h) {
	  if (h.charAt(0) === '#') {
	    return h.substring(1, 7);
	  } else {
	    return h;
	  }
	};
	
	module.exports.hslToHex = function(hsl) {
	  var n;
	  return '#' + ((function() {
	    var j, len, ref, results;
	    ref = hslToRgb.apply(null, hsl);
	    results = [];
	    for (j = 0, len = ref.length; j < len; j++) {
	      n = ref[j];
	      results.push(toHex(n));
	    }
	    return results;
	  })()).join('');
	};
	
	toHex = function(n) {
	  var h;
	  h = Math.floor(n).toString(16);
	  if (h.length === 1) {
	    h = '0' + h;
	  }
	  return h;
	};
	
	module.exports.pathToUrl = function(path) {
	  var base;
	  base = location.protocol + '//' + location.hostname + (location.port && ":" + location.port);
	  return base + path;
	};
	
	module.exports.i18n = function(say, target, language, fallback) {
	  var fallBackResult, fallForwardResult, fallSidewaysResult, generalName, generalResult, locale, localeName, matches, ref, result;
	  if (language == null) {
	    language = me.get('preferredLanguage', true);
	  }
	  if (fallback == null) {
	    fallback = 'en';
	  }
	  generalResult = null;
	  fallBackResult = null;
	  fallForwardResult = null;
	  fallSidewaysResult = null;
	  matches = /\w+/gi.exec(language);
	  if (matches) {
	    generalName = matches[0];
	  }
	  ref = say.i18n;
	  for (localeName in ref) {
	    locale = ref[localeName];
	    if (localeName === '-') {
	      continue;
	    }
	    if (target in locale) {
	      result = locale[target];
	    } else {
	      continue;
	    }
	    if (localeName === language) {
	      return result;
	    }
	    if (localeName === generalName) {
	      generalResult = result;
	    }
	    if (localeName === fallback) {
	      fallBackResult = result;
	    }
	    if (localeName.indexOf(language) === 0 && (fallForwardResult == null)) {
	      fallForwardResult = result;
	    }
	    if (localeName.indexOf(generalName) === 0 && (fallSidewaysResult == null)) {
	      fallSidewaysResult = result;
	    }
	  }
	  if (generalResult != null) {
	    return generalResult;
	  }
	  if (fallForwardResult != null) {
	    return fallForwardResult;
	  }
	  if (fallSidewaysResult != null) {
	    return fallSidewaysResult;
	  }
	  if (fallBackResult != null) {
	    return fallBackResult;
	  }
	  if (target in say) {
	    return say[target];
	  }
	  return null;
	};
	
	module.exports.getByPath = function(target, path) {
	  var j, len, obj, piece, pieces;
	  if (!target) {
	    throw new Error('Expected an object to match a query against, instead got null');
	  }
	  pieces = path.split('.');
	  obj = target;
	  for (j = 0, len = pieces.length; j < len; j++) {
	    piece = pieces[j];
	    if (!(piece in obj)) {
	      return void 0;
	    }
	    obj = obj[piece];
	  }
	  return obj;
	};
	
	module.exports.isID = function(id) {
	  var ref;
	  return _.isString(id) && id.length === 24 && ((ref = id.match(/[a-f0-9]/gi)) != null ? ref.length : void 0) === 24;
	};
	
	module.exports.round = _.curry(function(digits, n) {
	  return n = +n.toFixed(digits);
	});
	
	positify = function(func) {
	  return function(params) {
	    return function(x) {
	      if (x > 0) {
	        return func(params)(x);
	      } else {
	        return 0;
	      }
	    };
	  };
	};
	
	createLinearFunc = function(params) {
	  return function(x) {
	    return (params.a || 1) * x + (params.b || 0);
	  };
	};
	
	createQuadraticFunc = function(params) {
	  return function(x) {
	    return (params.a || 1) * x * x + (params.b || 1) * x + (params.c || 0);
	  };
	};
	
	createLogFunc = function(params) {
	  return function(x) {
	    if (x > 0) {
	      return (params.a || 1) * Math.log((params.b || 1) * (x + (params.c || 0))) + (params.d || 0);
	    } else {
	      return 0;
	    }
	  };
	};
	
	createPowFunc = function(params) {
	  return function(x) {
	    return (params.a || 1) * Math.pow(x, params.b || 1) + (params.c || 0);
	  };
	};
	
	module.exports.functionCreators = {
	  linear: positify(createLinearFunc),
	  quadratic: positify(createQuadraticFunc),
	  logarithmic: positify(createLogFunc),
	  pow: positify(createPowFunc)
	};
	
	module.exports.keepDoingUntil = function(func, wait, totalWait) {
	  var done, waitSoFar;
	  if (wait == null) {
	    wait = 100;
	  }
	  if (totalWait == null) {
	    totalWait = 5000;
	  }
	  waitSoFar = 0;
	  return (done = function(success) {
	    if ((waitSoFar += wait) <= totalWait && !success) {
	      return _.delay((function() {
	        return func(done);
	      }), wait);
	    }
	  })(false);
	};
	
	module.exports.grayscale = function(imageData) {
	  var b, d, g, i, j, r, ref, v;
	  d = imageData.data;
	  for (i = j = 0, ref = d.length; j <= ref; i = j += 4) {
	    r = d[i];
	    g = d[i + 1];
	    b = d[i + 2];
	    v = 0.2126 * r + 0.7152 * g + 0.0722 * b;
	    d[i] = d[i + 1] = d[i + 2] = v;
	  }
	  return imageData;
	};
	
	module.exports.kindaEqual = compare = function(l, r) {
	  var j, key, len, ref;
	  if (_.isObject(l) && _.isObject(r)) {
	    ref = _.union(Object.keys(l), Object.keys(r));
	    for (j = 0, len = ref.length; j < len; j++) {
	      key = ref[j];
	      if (!compare(l[key], r[key])) {
	        return false;
	      }
	    }
	    return true;
	  } else if (l === r) {
	    return true;
	  } else {
	    return false;
	  }
	};
	
	module.exports.getUTCDay = function(offset) {
	  var day, partDay, partMonth, partYear;
	  if (offset == null) {
	    offset = 0;
	  }
	  day = new Date();
	  day.setDate(day.getUTCDate() + offset);
	  partYear = day.getUTCFullYear();
	  partMonth = day.getUTCMonth() + 1;
	  if (partMonth < 10) {
	    partMonth = "0" + partMonth;
	  }
	  partDay = day.getUTCDate();
	  if (partDay < 10) {
	    partDay = "0" + partDay;
	  }
	  return "" + partYear + partMonth + partDay;
	};
	
	if (typeof document !== "undefined" && document !== null ? document.createElement : void 0) {
	  dummy = document.createElement('div');
	  dummy.innerHTML = 'text';
	  TEXT = dummy.textContent === 'text' ? 'textContent' : 'innerText';
	  module.exports.replaceText = function(elems, text) {
	    var elem, j, len;
	    for (j = 0, len = elems.length; j < len; j++) {
	      elem = elems[j];
	      elem[TEXT] = text;
	    }
	    return null;
	  };
	}
	
	if (typeof document !== "undefined" && document !== null ? document.createElement : void 0) {
	  module.exports.injectCSS = (function(doc) {
	    var temp, wrap;
	    wrap = doc.createElement("div");
	    temp = doc.createElement("div");
	    return function(cssRules) {
	      if (!wrap.id) {
	        wrap.id = "injected-css";
	        wrap.style.display = "none";
	        doc.body.appendChild(wrap);
	      }
	      temp.innerHTML = "<br><style>" + cssRules + "</style>";
	      wrap.appendChild(temp.children[1]);
	    };
	  })(document);
	}
	
	module.exports.userAgent = function() {
	  return window.navigator.userAgent;
	};
	
	module.exports.getQueryVariable = getQueryVariable = function(param, defaultValue) {
	  var j, len, pair, pairs, query, ref;
	  query = document.location.search.substring(1);
	  pairs = (function() {
	    var j, len, ref, results;
	    ref = query.split('&');
	    results = [];
	    for (j = 0, len = ref.length; j < len; j++) {
	      pair = ref[j];
	      results.push(pair.split('='));
	    }
	    return results;
	  })();
	  for (j = 0, len = pairs.length; j < len; j++) {
	    pair = pairs[j];
	    if (pair[0] === param) {
	      return (ref = {
	        'true': true,
	        'false': false
	      }[pair[1]]) != null ? ref : decodeURIComponent(pair[1]);
	    }
	  }
	  return defaultValue;
	};
	
	module.exports.getSponsoredSubsAmount = getSponsoredSubsAmount = function(price, subCount, personalSub) {
	  var offset;
	  if (price == null) {
	    price = 999;
	  }
	  if (subCount == null) {
	    subCount = 0;
	  }
	  if (personalSub == null) {
	    personalSub = false;
	  }
	  if (!(subCount > 0)) {
	    return 0;
	  }
	  offset = personalSub ? 1 : 0;
	  if (subCount <= 1 - offset) {
	    return price;
	  } else if (subCount <= 11 - offset) {
	    return Math.round((1 - offset) * price + (subCount - 1 + offset) * price * 0.8);
	  } else {
	    return Math.round((1 - offset) * price + 10 * price * 0.8 + (subCount - 11 + offset) * price * 0.6);
	  }
	};
	
	module.exports.getCourseBundlePrice = getCourseBundlePrice = function(coursePrices, seats) {
	  var pricePerSeat, totalPricePerSeat;
	  if (seats == null) {
	    seats = 20;
	  }
	  totalPricePerSeat = coursePrices.reduce((function(a, b) {
	    return a + b;
	  }), 0);
	  if (coursePrices.length > 2) {
	    pricePerSeat = Math.round(totalPricePerSeat / 2.0);
	  } else {
	    pricePerSeat = parseInt(totalPricePerSeat);
	  }
	  return seats * pricePerSeat;
	};
	
	module.exports.getCoursePraise = getCoursePraise = function() {
	  var praise;
	  praise = [
	    {
	      quote: "The kids love it.",
	      source: "Leo Joseph Tran, Athlos Leadership Academy"
	    }, {
	      quote: "My students have been using the site for a couple of weeks and they love it.",
	      source: "Scott Hatfield, Computer Applications Teacher, School Technology Coordinator, Eastside Middle School"
	    }, {
	      quote: "Thanks for the captivating site. My eighth graders love it.",
	      source: "Janet Cook, Ansbach Middle/High School"
	    }, {
	      quote: "My students have started working on CodeCombat and love it! I love that they are learning coding and problem solving skills without them even knowing it!!",
	      source: "Kristin Huff, Special Education Teacher, Webb City School District"
	    }, {
	      quote: "I recently introduced Code Combat to a few of my fifth graders and they are loving it!",
	      source: "Shauna Hamman, Fifth Grade Teacher, Four Peaks Elementary School"
	    }, {
	      quote: "Overall I think it's a fantastic service. Variables, arrays, loops, all covered in very fun and imaginative ways. Every kid who has tried it is a fan.",
	      source: "Aibinder Andrew, Technology Teacher"
	    }, {
	      quote: "I love what you have created. The kids are so engaged.",
	      source: "Desmond Smith, 4KS Academy"
	    }, {
	      quote: "My students love the website and I hope on having content structured around it in the near future.",
	      source: "Michael Leonard, Science Teacher, Clearwater Central Catholic High School"
	    }
	  ];
	  return praise[_.random(0, praise.length - 1)];
	};
	
	module.exports.getPrepaidCodeAmount = getPrepaidCodeAmount = function(price, users, months) {
	  var total;
	  if (price == null) {
	    price = 0;
	  }
	  if (users == null) {
	    users = 0;
	  }
	  if (months == null) {
	    months = 0;
	  }
	  if (!(users > 0 && months > 0)) {
	    return 0;
	  }
	  total = price * users * months;
	  return total;
	};
	
	startsWithVowel = function(s) {
	  var ref;
	  return ref = s[0], indexOf.call('aeiouAEIOU', ref) >= 0;
	};
	
	module.exports.filterMarkdownCodeLanguages = function(text, language) {
	  var codeBlockExclusionRegex, commonLanguageReplacements, currentLanguage, excludedLanguages, from, imageExclusionRegex, j, len, ref, ref1, ref2, ref3, to;
	  if (!text) {
	    return '';
	  }
	  currentLanguage = language || ((ref = me.get('aceConfig')) != null ? ref.language : void 0) || 'python';
	  excludedLanguages = _.without(['javascript', 'python', 'coffeescript', 'clojure', 'lua', 'java', 'io', 'html'], currentLanguage);
	  codeBlockExclusionRegex = new RegExp("```(" + (excludedLanguages.join('|')) + ")\n[^`]+```\n?", 'gm');
	  imageExclusionRegex = new RegExp("!\\[(" + (excludedLanguages.join('|')) + ") - .+?\\]\\(.+?\\)\n?", 'gm');
	  text = text.replace(codeBlockExclusionRegex, '').replace(imageExclusionRegex, '');
	  commonLanguageReplacements = {
	    python: [['true', 'True'], ['false', 'False'], ['null', 'None'], ['object', 'dictionary'], ['Object', 'Dictionary'], ['array', 'list'], ['Array', 'List']],
	    lua: [['null', 'nil'], ['object', 'table'], ['Object', 'Table'], ['array', 'table'], ['Array', 'Table']]
	  };
	  ref2 = (ref1 = commonLanguageReplacements[currentLanguage]) != null ? ref1 : [];
	  for (j = 0, len = ref2.length; j < len; j++) {
	    ref3 = ref2[j], from = ref3[0], to = ref3[1];
	    text = text.replace(RegExp("`" + from + "`", "g"), "`" + to + "`");
	    if (startsWithVowel(from) && !startsWithVowel(to)) {
	      text = text.replace(RegExp("( a|A)n( `" + to + "`)", "g"), "$1$2");
	    }
	    if (!startsWithVowel(from) && startsWithVowel(to)) {
	      text = text.replace(RegExp("( a|A)( `" + to + "`)", "g"), "$1n$2");
	    }
	  }
	  return text;
	};
	
	module.exports.aceEditModes = aceEditModes = {
	  javascript: 'ace/mode/javascript',
	  coffeescript: 'ace/mode/coffee',
	  python: 'ace/mode/python',
	  lua: 'ace/mode/lua',
	  java: 'ace/mode/java',
	  html: 'ace/mode/html'
	};
	
	module.exports.initializeACE = function(el, codeLanguage) {
	  var contents, editor, session;
	  contents = $(el).text().trim();
	  editor = ace.edit(el);
	  editor.setOptions({
	    maxLines: Infinity
	  });
	  editor.setReadOnly(true);
	  editor.setTheme('ace/theme/textmate');
	  editor.setShowPrintMargin(false);
	  editor.setShowFoldWidgets(false);
	  editor.setHighlightActiveLine(false);
	  editor.setHighlightActiveLine(false);
	  editor.setBehavioursEnabled(false);
	  editor.renderer.setShowGutter(false);
	  editor.setValue(contents);
	  editor.clearSelection();
	  session = editor.getSession();
	  session.setUseWorker(false);
	  session.setMode(aceEditModes[codeLanguage]);
	  session.setWrapLimitRange(null);
	  session.setUseWrapMode(true);
	  session.setNewLineMode('unix');
	  return editor;
	};
	
	module.exports.capitalLanguages = capitalLanguages = {
	  'javascript': 'JavaScript',
	  'coffeescript': 'CoffeeScript',
	  'python': 'Python',
	  'java': 'Java',
	  'lua': 'Lua',
	  'html': 'HTML'
	};
	
	module.exports.createLevelNumberMap = function(levels) {
	  var i, j, len, level, levelNumber, levelNumberMap, practiceLevelCurrentCount, practiceLevelTotalCount;
	  levelNumberMap = {};
	  practiceLevelTotalCount = 0;
	  practiceLevelCurrentCount = 0;
	  for (i = j = 0, len = levels.length; j < len; i = ++j) {
	    level = levels[i];
	    levelNumber = i - practiceLevelTotalCount + 1;
	    if (level.practice) {
	      levelNumber = i - practiceLevelTotalCount + String.fromCharCode('a'.charCodeAt(0) + practiceLevelCurrentCount);
	      practiceLevelTotalCount++;
	      practiceLevelCurrentCount++;
	    } else {
	      practiceLevelCurrentCount = 0;
	    }
	    levelNumberMap[level.key] = levelNumber;
	  }
	  return levelNumberMap;
	};
	
	module.exports.findNextLevel = function(levels, currentIndex, needsPractice) {
	  var index;
	  index = currentIndex;
	  index++;
	  if (needsPractice) {
	    if (levels[currentIndex].practice || index < levels.length && levels[index].practice) {
	      while (index < levels.length && levels[index].complete) {
	        index++;
	      }
	    } else {
	      index--;
	      while (index >= 0 && !levels[index].practice) {
	        index--;
	      }
	      if (index >= 0) {
	        while (index >= 0 && levels[index].practice) {
	          index--;
	        }
	        if (index >= 0) {
	          index++;
	          while (index < levels.length && levels[index].practice && levels[index].complete) {
	            index++;
	          }
	          if (levels[index].practice && !levels[index].complete) {
	            return index;
	          }
	        }
	      }
	      index = currentIndex + 1;
	      while (index < levels.length && levels[index].complete) {
	        index++;
	      }
	    }
	  } else {
	    while (index < levels.length && (levels[index].practice || levels[index].complete)) {
	      index++;
	    }
	  }
	  return index;
	};
	
	module.exports.needsPractice = function(playtime, threshold) {
	  if (playtime == null) {
	    playtime = 0;
	  }
	  if (threshold == null) {
	    threshold = 2;
	  }
	  return playtime / 60 > threshold;
	};
	
	module.exports.sortCourses = function(courses) {
	  var orderedIDs;
	  orderedIDs = [courseIDs.INTRODUCTION_TO_COMPUTER_SCIENCE, courseIDs.COMPUTER_SCIENCE_2, courseIDs.GAME_DEVELOPMENT_1, courseIDs.WEB_DEVELOPMENT_1, courseIDs.COMPUTER_SCIENCE_3, courseIDs.GAME_DEVELOPMENT_2, courseIDs.WEB_DEVELOPMENT_2, courseIDs.COMPUTER_SCIENCE_4, courseIDs.COMPUTER_SCIENCE_5];
	  return _.sortBy(courses, function(course) {
	    var index, ref;
	    index = orderedIDs.indexOf((ref = course.id) != null ? ref : course._id);
	    if (index === -1) {
	      index = 9001;
	    }
	    return index;
	  });
	};
	
	module.exports.usStateCodes = (function() {
	  var getStateCodeByStateName, getStateNameByStateCode, sanitizeStateCode, sanitizeStateName, stateCodesByName, stateNamesByCode;
	  stateNamesByCode = {
	    'AL': 'Alabama',
	    'AK': 'Alaska',
	    'AZ': 'Arizona',
	    'AR': 'Arkansas',
	    'CA': 'California',
	    'CO': 'Colorado',
	    'CT': 'Connecticut',
	    'DE': 'Delaware',
	    'DC': 'District of Columbia',
	    'FL': 'Florida',
	    'GA': 'Georgia',
	    'HI': 'Hawaii',
	    'ID': 'Idaho',
	    'IL': 'Illinois',
	    'IN': 'Indiana',
	    'IA': 'Iowa',
	    'KS': 'Kansas',
	    'KY': 'Kentucky',
	    'LA': 'Louisiana',
	    'ME': 'Maine',
	    'MD': 'Maryland',
	    'MA': 'Massachusetts',
	    'MI': 'Michigan',
	    'MN': 'Minnesota',
	    'MS': 'Mississippi',
	    'MO': 'Missouri',
	    'MT': 'Montana',
	    'NE': 'Nebraska',
	    'NV': 'Nevada',
	    'NH': 'New Hampshire',
	    'NJ': 'New Jersey',
	    'NM': 'New Mexico',
	    'NY': 'New York',
	    'NC': 'North Carolina',
	    'ND': 'North Dakota',
	    'OH': 'Ohio',
	    'OK': 'Oklahoma',
	    'OR': 'Oregon',
	    'PA': 'Pennsylvania',
	    'RI': 'Rhode Island',
	    'SC': 'South Carolina',
	    'SD': 'South Dakota',
	    'TN': 'Tennessee',
	    'TX': 'Texas',
	    'UT': 'Utah',
	    'VT': 'Vermont',
	    'VA': 'Virginia',
	    'WA': 'Washington',
	    'WV': 'West Virginia',
	    'WI': 'Wisconsin',
	    'WY': 'Wyoming'
	  };
	  stateCodesByName = _.invert(stateNamesByCode);
	  sanitizeStateCode = function(code) {
	    code = _.isString(code) ? code.trim().toUpperCase().replace(/[^A-Z]/g, '') : null;
	    if (stateNamesByCode[code]) {
	      return code;
	    } else {
	      return null;
	    }
	  };
	  getStateNameByStateCode = function(code) {
	    return stateNamesByCode[sanitizeStateCode(code)] || null;
	  };
	  sanitizeStateName = function(name) {
	    var tokens;
	    if (!_.isString(name)) {
	      return null;
	    }
	    name = name.trim().toLowerCase().replace(/[^a-z\s]/g, '').replace(/\s+/g, ' ');
	    tokens = name.split(/\s+/);
	    tokens = _.map(tokens, function(token) {
	      return token.charAt(0).toUpperCase() + token.slice(1);
	    });
	    if (tokens.length > 2) {
	      tokens[1] = tokens[1].toLowerCase();
	    }
	    name = tokens.join(' ');
	    if (stateCodesByName[name]) {
	      return name;
	    } else {
	      return null;
	    }
	  };
	  getStateCodeByStateName = function(name) {
	    return stateCodesByName[sanitizeStateName(name)] || null;
	  };
	  return {
	    sanitizeStateCode: sanitizeStateCode,
	    getStateNameByStateCode: getStateNameByStateCode,
	    sanitizeStateName: sanitizeStateName,
	    getStateCodeByStateName: getStateCodeByStateName
	  };
	})();


/***/ },
/* 3 */
/*!*******************!*\
  !*** ./app/core  ***!
  \*******************/
/***/ function(module, exports) {

	function webpackContext(req) {
		throw new Error("Cannot find module '" + req + "'.");
	}
	webpackContext.keys = function() { return []; };
	webpackContext.resolve = webpackContext;
	module.exports = webpackContext;
	webpackContext.id = 3;


/***/ },
/* 4 */
/*!******************************************!*\
  !*** ./app/core/services/twitter.coffee ***!
  \******************************************/
/***/ function(module, exports) {

	var initializeTwitter;
	
	module.exports = initializeTwitter = function() {
	  return (function(d, s, id) {
	    var fjs, js, p;
	    js = void 0;
	    fjs = d.getElementsByTagName(s)[0];
	    p = (/^http:/.test(d.location) ? 'http' : 'https');
	    if (!d.getElementById(id)) {
	      js = d.createElement(s);
	      js.id = id;
	      js.src = p + '://platform.twitter.com/widgets.js';
	      fjs.parentNode.insertBefore(js, fjs);
	    }
	  })(document, 'script', 'twitter-wjs');
	};


/***/ }
/******/ ]);
//# sourceMappingURL=webpack-bundle.js.map