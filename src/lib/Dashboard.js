webpackJsonp([1,4],{

/***/ 50:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(51)

	/* script */
	__vue_exports__ = __webpack_require__(53)

	/* template */
	var __vue_template__ = __webpack_require__(54)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/jarvis/Workspace/laopan/app/src/views/dashboard/dashboard.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-51ee5290", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-51ee5290", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] dashboard.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },

/***/ 51:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(52);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(35)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-51ee5290!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dashboard.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-51ee5290!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dashboard.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 52:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(33)();
	// imports


	// module
	exports.push([module.id, "\n.file-path {\n\tborder-bottom: 1px solid #eee;\n}\n.checkornot {\n\twidth: 30px;\n}\n.dir-i span {\n\tmargin-left: 5px;\n}\n.islock i {\n\tmargin-left: 15px;\n}\n.back {\n\tcursor: pointer;\n}\ntr {\n\tcursor: pointer;\n}\n", ""]);

	// exports


/***/ },

/***/ 53:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _stringify = __webpack_require__(37);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
		mounted: function mounted() {},
		data: function data() {

			return {
				rootFolder: this.$store.state.folder.currFolder.childrenFolder,
				rootFile: this.$store.state.folder.currFolder.file,
				RootFolder: JSON.parse(window.localStorage.getItem('Root') === '' ? '{}' : window.localStorage.getItem('Root')),
				pathName: this.$store.state.folder.pathName,
				fileName: '',
				fileContent: ''
			};
		},

		methods: {
			cd: function cd() {
				if (this.$store.state.folder.path.length == 2) {

					this.$store.commit('ENTER_FOLDER', this.$store.state.folder.Root);
					console.log(this.$store.state.folder.currFolder);
					this.rootFolder = this.$store.state.folder.Root.childrenFolder;
					this.rootFile = this.$store.state.folder.Root.file;
					this.$store.commit('CD_LASTPATH');
				} else {

					var currFolder = this.$store.state.folder.Root.childrenFolder;
					var parentFolder = {};

					for (var i = 1; i < this.$store.state.folder.path.length - 1; i++) {
						console.log(this.$store.state.folder.path[i]);
						console.log(currFolder);

						for (var j = 0; j < currFolder.length; j++) {
							console.log("currFolder is : ");
							console.log(currFolder[j]);

							if (currFolder[j].id == this.$store.state.folder.path[i]) {
								console.log("right!!!!");
								parentFolder = currFolder[j];
								currFolder = currFolder[j].childrenFolder;
								console.log(currFolder);
								// break;
							}
						}
					}

					this.$store.commit('ENTER_FOLDER', parentFolder);
					console.log(this.$store.state.folder.currFolder);
					this.rootFolder = parentFolder.childrenFolder;
					this.rootFile = parentFolder.file;
					this.$store.commit('CD_LASTPATH');
				}
			},
			enterFolder: function enterFolder(index) {
				// alert(index);
				alert(this.rootFolder[index].id);
				this.$store.commit('ENTER_FOLDER', this.rootFolder[index]);
				this.$store.commit('CHANGE_PATH', this.rootFolder[index].id);
				this.$store.commit('CHANGE_PATHNAME', this.rootFolder[index].name);

				console.log(this.rootFolder[index]);
				console.log(this.rootFolder[index].file);
				this.rootFile = this.rootFolder[index].file;
				console.log(this.rootFile);
				this.rootFolder = this.rootFolder[index].childrenFolder;
				console.log(this.rootFolder);
			},
			checkFile: function checkFile(id, name, content) {

				this.fileName = name;
				this.fileContent = content;

				var that = this;

				$('#FileContent').modal({
					relatedTarget: this,
					onConfirm: function onConfirm(options) {

						var file = {
							'id': id,
							'name': that.fileName,
							'content': that.fileContent,
							'owner': that.$store.state.user.account,
							'style': 'file',
							'createTime': new Date(),
							'lock': 0
						};
						console.log(that.fileName);
						console.log(that.fileContent);

						if (that.$store.state.folder.path.length == 1) {

							var Root = that.$store.state.folder.Root;
							for (var i = 0; i < Root.file.length; i++) {

								if (id == Root.file[i].id) {
									Root.file[i].name = name;
									Root.file[i].content = content;
								}
							}

							// Root.file.push(file);
							window.localStorage.setItem('Root', (0, _stringify2.default)(Root));
							that.$store.commit('ADD_FILE', Root);
							// console.log(that.$store.state.folder.Root);
						} else {

							var currFolder = that.$store.state.folder.Root.childrenFolder;
							var parentFolder = {};
							console.log(currFolder);
							for (var i = 1; i < that.$store.state.folder.path.length; i++) {
								console.log(that.$store.state.folder.path[i]);

								for (var j = 0; j < currFolder.length; j++) {
									console.log("currFolder is : ");
									console.log(currFolder[j]);

									if (currFolder[j].id == that.$store.state.folder.path[i]) {
										console.log("right!!!!");
										parentFolder = currFolder[j];
										console.log(parentFolder);
										currFolder = currFolder[j].childrenFolder;
										console.log(currFolder);
									}
								}
							}

							console.log(currFolder);
							for (var i = 0; i < parentFolder.file.length; i++) {

								if (id == parentFolder.file[i].id) {
									parentFolder.file[i].name = that.fileName;
									parentFolder.file[i].content = that.fileContent;
									console.log(parentFolder.file[i]);
								}
							}
							// parentFolder.file.push(file);
						}

						// window.localStorage.setItem('Root',JSON.stringify(Root));
						// that.$store.commit('ADD_FILE', Root);
						// console.log(that.$store.state.folder.Root);
					},
					// closeOnConfirm: false,
					onCancel: function onCancel() {
						// alert('算求，不弄了');
					}
				});
			},
			selectThis: function selectThis(item) {

				console.log(item);
				this.$store.commit('SELECT', item);
			}
		}
	};

/***/ },

/***/ 54:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    attrs: {
	      "id": "content"
	    }
	  }, [_c('ol', {
	    staticClass: "am-breadcrumb am-breadcrumb-slash file-path"
	  }, [(_vm.pathName.length !== 1) ? _c('li', {
	    staticClass: "back"
	  }, [_c('a', {
	    on: {
	      "click": _vm.cd
	    }
	  }, [_vm._v("返回上一级")])]) : _vm._e(), _vm._v(" "), _vm._l((_vm.pathName), function(item) {
	    return _c('li', [_c('a', [_vm._v(_vm._s(item))])])
	  })], 2), _vm._v(" "), _c('div', {
	    staticClass: "content-file"
	  }, [_c('table', {
	    staticClass: "am-table am-table-striped"
	  }, [_vm._m(0), _vm._v(" "), _c('tbody', [_vm._l((_vm.rootFolder), function(item, index) {
	    return _c('tr', {
	      on: {
	        "dblclick": function($event) {
	          _vm.enterFolder(index)
	        }
	      }
	    }, [_c('td', [_c('input', {
	      attrs: {
	        "type": "checkbox",
	        "id": "checkCtl"
	      },
	      on: {
	        "change": function($event) {
	          _vm.selectThis(item)
	        }
	      }
	    })]), _vm._v(" "), _c('td', [_c('i', {
	      staticClass: "am-icon-folder-o dir-i",
	      attrs: {
	        "aria-hidden": "true"
	      }
	    }, [_c('span', [_vm._v(_vm._s(item.name))])])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(item.owner))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(item.style))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(item.createTime))]), _vm._v(" "), _c('td', {
	      staticClass: "islock"
	    }, [(item.lock) ? _c('i', {
	      staticClass: "am-icon-umbrella dir-i",
	      attrs: {
	        "aria-hidden": "true"
	      }
	    }) : _c('i', {
	      staticClass: "am-icon-unlock dir-i",
	      attrs: {
	        "aria-hidden": "true"
	      }
	    })])])
	  }), _vm._v(" "), _vm._l((_vm.rootFile), function(item, index) {
	    return _c('tr', {
	      on: {
	        "dblclick": function($event) {
	          _vm.checkFile(item.id, item.name, item.content)
	        }
	      }
	    }, [_c('td', [_c('input', {
	      attrs: {
	        "type": "checkbox",
	        "id": "checkCtl"
	      },
	      on: {
	        "change": function($event) {
	          _vm.selectThis(item)
	        }
	      }
	    })]), _vm._v(" "), _c('td', [_c('i', {
	      staticClass: "am-icon-file-o dir-i",
	      attrs: {
	        "aria-hidden": "true"
	      }
	    }, [_c('span', [_vm._v(_vm._s(item.name))])])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(item.owner))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(item.style))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(item.createTime))]), _vm._v(" "), _c('td', {
	      staticClass: "islock"
	    }, [(item.lock) ? _c('i', {
	      staticClass: "am-icon-umbrella dir-i",
	      attrs: {
	        "aria-hidden": "true"
	      }
	    }) : _c('i', {
	      staticClass: "am-icon-unlock dir-i",
	      attrs: {
	        "aria-hidden": "true"
	      }
	    })])])
	  })], 2)])]), _vm._v(" "), _c('div', {
	    staticClass: "am-modal am-modal-prompt",
	    attrs: {
	      "tabindex": "-1",
	      "id": "FileContent"
	    }
	  }, [_c('div', {
	    staticClass: "am-modal-dialog"
	  }, [_c('div', {
	    staticClass: "am-modal-hd"
	  }, [_vm._v("修改文件")]), _vm._v(" "), _c('div', {
	    staticClass: "am-modal-bd"
	  }, [_c('form', {
	    staticClass: "am-form"
	  }, [_c('fieldset', [_vm._v("\n\t\t      \t\t\t\t请输入要建立的文件名\n\t\t\t\t        \t"), _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.fileName),
	      expression: "fileName"
	    }],
	    staticClass: "am-modal-prompt-input",
	    attrs: {
	      "type": "text"
	    },
	    domProps: {
	      "value": _vm._s(_vm.fileName)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.fileName = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "am-form-group"
	  }, [_c('label', {
	    attrs: {
	      "for": "doc-ta-1"
	    }
	  }, [_vm._v("文件内容")]), _vm._v(" "), _c('textarea', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.fileContent),
	      expression: "fileContent"
	    }],
	    attrs: {
	      "rows": "5",
	      "id": "doc-ta-1"
	    },
	    domProps: {
	      "value": _vm._s(_vm.fileContent)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.fileContent = $event.target.value
	      }
	    }
	  })])])])]), _vm._v(" "), _vm._m(1)])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('thead', [_c('tr', [_c('th', {
	    staticClass: "checkornot"
	  }, [_c('input', {
	    attrs: {
	      "type": "checkbox",
	      "id": "checkCtl"
	    }
	  })]), _vm._v(" "), _c('th', [_vm._v("文件名称")]), _vm._v(" "), _c('th', [_vm._v("所有者")]), _vm._v(" "), _c('th', [_vm._v("文件类型")]), _vm._v(" "), _c('th', [_vm._v("创建时间")]), _vm._v(" "), _c('th', [_vm._v("保护锁")])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "am-modal-footer"
	  }, [_c('span', {
	    staticClass: "am-modal-btn",
	    attrs: {
	      "data-am-modal-cancel": ""
	    }
	  }, [_vm._v("取消")]), _vm._v(" "), _c('span', {
	    staticClass: "am-modal-btn",
	    attrs: {
	      "data-am-modal-confirm": ""
	    }
	  }, [_vm._v("确定")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-51ee5290", module.exports)
	  }
	}

/***/ }

});