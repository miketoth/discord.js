webpackJsonp([2,0],[function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}var r=o(153),a=s(r),n=o(152),p=s(n),i=o(44),c=s(i),u=o(43),d=s(u),l=o(21),f=s(l),v=o(109),x=s(v);o(101),a["default"].use(p["default"]),a["default"].component("app-navbar",d["default"].AppNavbar),a["default"].component("app-footer",d["default"].AppFooter),a["default"].component("container",d["default"].Container),a["default"].component("slide",d["default"].Slide),a["default"].component("github-star",d["default"].GitHubButton),a["default"].component("lib-stats",d["default"].Stats),a["default"].component("docs-bar",d["default"].DocsNavbar);var m=a["default"].extend({data:function(){return{sharedStore:f["default"]}}});a["default"].filter("marked",x["default"]);var h=new p["default"];h.map({"/":{component:c["default"].Index},"/docs":{component:function(t,e){f["default"].fetchBranches().then(function(){t(c["default"].Docs)})["catch"](e)},subRoutes:{"/tag/:tag":{component:d["default"].DocsViewer,name:"docview",subRoutes:{"/file/:category/:file":{component:d["default"].FileViewer,name:"fileview"},"/class/:class":{component:d["default"].ClassViewer,name:"classview"}}}}}}),h.start(m,"#vue-root")},,,,,,,,,,,,,,,,,,,,function(t,e,o){var s,r;s=o(62),r=o(125),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}var r=o(67),a=s(r),n=o(38),p={branches:null,docs:{}},i={data:p,fetchBranches:function(){return new a["default"](function(t,e){p.branches?t(p.branches):n.get("https://api.github.com/repos/hydrabolt/discord.js/branches").end(function(o,s){o?e(o):(p.branches=s.body,t(p.branches))})})},fetchDocs:function(t){return new a["default"](function(e,o){p.docs[t]?e(p.docs[t]):n.get("https://raw.githubusercontent.com/hydrabolt/discord.js/"+t+"/docs/docs.json").end(function(s,r){s?o(s):(p.docs[t]=r.body||JSON.parse(r.text),e(r.body))})})}};t.exports=i},,,,,,,,,,,,,,,,,,,function(t,e,o){var s,r;s=o(52),r=o(119),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,o){var s,r;o(102),s=o(56),r=o(123),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,o){var s,r;o(104),s=o(63),r=o(126),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}var r=o(135),a=s(r),n=o(136),p=s(n),i=o(138),c=s(i),u=o(137),d=s(u),l=o(139),f=s(l),v=o(134),x=s(v),m=o(140),h=s(m),_=o(141),b=s(_),y=o(40),g=s(y),w=o(149),M=s(w),j=o(142),k=s(j);t.exports={AppNavbar:a["default"],Container:p["default"],Slide:c["default"],GitHubButton:d["default"],Stats:f["default"],AppFooter:x["default"],DocsNavbar:h["default"],DocsViewer:b["default"],DocsSidebar:g["default"],FileViewer:M["default"],ClassViewer:k["default"]}},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}var r=o(151),a=s(r),n=o(150),p=s(n);t.exports={Index:a["default"],Docs:p["default"]}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={}},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}function r(){p.get("https://api.npmjs.org/downloads/range/2013-08-21:2100-08-21/discord.js").end(function(t,e){if(!t){i.downloads=0;var o=!0,s=!1,r=void 0;try{for(var a,p=(0,n["default"])(e.body.downloads);!(o=(a=p.next()).done);o=!0){var c=a.value;i.downloads+=c.downloads}}catch(t){s=!0,r=t}finally{try{!o&&p["return"]&&p["return"]()}finally{if(s)throw r}}i.downloads=i.downloads.toLocaleString()}}),p.get("https://api.github.com/repos/hydrabolt/discord.js").end(function(t,e){t||(i.stars=(""+e.body.stargazers_count).toLocaleString())}),p.get("https://api.github.com/repos/hydrabolt/discord.js/contributors").end(function(t,e){t||(i.contributors=(""+e.body.length).toLocaleString())})}Object.defineProperty(e,"__esModule",{value:!0});var a=o(22),n=s(a),p=o(38),i={downloads:"50,000+ ",stars:"200+ ",contributors:"25+ "};e["default"]={data:function(){return r(),i}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return this.$route.params.tag||this.$router.go({path:"/docs/tag/indev-rewrite"}),{choice:this.$route.params.tag?null:"branch",chosenTag:this.$route.params.tag?this.$route.params.tag:"indev-rewrite"}},methods:{select:function(t){this.choice=t}},watch:{chosenTag:function(t){t&&(this.$router.go({path:"/docs/"}),this.$router.go({path:"/docs/tag/"+t}))}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:["docs"],data:function(){return{docLink:this.$route.path}}}},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=o(21),a=s(r),n=o(40),p=s(n);e["default"]={components:{Sidebar:p["default"]},data:function(){return{docs:a["default"].data.docs[this.$route.params.tag]}},route:{canActivate:function(t){a["default"].fetchDocs(t.to.params.tag).then(function(){t.next()})["catch"](function(e){t.abort(),alert("Couldn't load docs for "+t.to.params.tag+" - "+e),console.log(e)})},canReuse:function(){}}}},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}function r(t){t=t.split("+").join(" ");for(var e={},o=void 0,s=/[?&]?([^=]+)=([^&]*)/g;o=s.exec(t);)e[decodeURIComponent(o[1])]=decodeURIComponent(o[2]);return e}Object.defineProperty(e,"__esModule",{value:!0});var a=o(22),n=s(a),p=o(145),i=s(p),c=o(148),u=s(c),d=o(144),l=s(d);e["default"]={components:{overview:i["default"],propRenderer:u["default"],methodRenderer:l["default"]},data:function(){var t=this.$route.params;return{info:this.$parent.$parent.docs.json.classes[t["class"]]}},methods:{scroll:function(t){var e=window.location.href.split("?")[0];window.location.href=e+"?scrollto="+encodeURIComponent(t)}},ready:function(){var t=!0,e=!1,o=void 0;try{for(var s,a=(0,n["default"])(this.$el.querySelectorAll("pre code"));!(t=(s=a.next()).done);t=!0){var p=s.value;window.hljs.highlightBlock(p)}}catch(i){e=!0,o=i}finally{try{!t&&a["return"]&&a["return"]()}finally{if(e)throw o}}var c=window.location.href.split("?")[1];c&&(c=r(c),c.scrollto&&document.getElementById("doc_for_"+c.scrollto).scrollIntoView(!0))}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:["example"]}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:["item"]}},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=o(20),a=s(r),n=o(146),p=s(n),i=o(147),c=s(i),u=o(143),d=s(u),l=o(42),f=s(l),v=o(41),x=s(v);e["default"]={props:["method"],components:{PropType:a["default"],Param:p["default"],ParamTable:c["default"],Example:d["default"],SourceButton:f["default"],LinkButton:x["default"]},data:function(){return{}}}},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=o(20),a=s(r);e["default"]={components:{PropType:a["default"]},props:["info"]}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:["param"]}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:["params"]}},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=o(20),a=s(r),n=o(42),p=s(n),i=o(41),c=s(i);e["default"]={props:["prop"],components:{PropType:a["default"],SourceButton:p["default"],LinkButton:c["default"]},data:function(){return{}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:["types"]}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:["meta"]}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){var t=this.$route.params;return{file:this.$parent.$parent.docs.custom[t.category][t.file]}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={};e["default"]={data:function(){return{branchData:o}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,function(t,e){t.exports=" <footer> <container> <a href=https://github.com/hydrabolt/discord.js><b>discord.js</b></a> </container> </footer> "},function(t,e){t.exports=" <div class=navbar> <container> <a v-link=\"{ path: '/' }\"><div class=title>discord.js</div></a> <div class=links> <a v-link=\"{ path: '/docs' }\"><div class=link>Docs</div></a> </div> </container> </div> "},function(t,e){t.exports=" <div class=container> <slot></slot> </div> "},function(t,e){t.exports=' <div class=github-button> <a class=github-button href=https://github.com/hydrabolt/discord.js data-icon=octicon-star data-style=mega data-count-href=/hydrabolt/discord.js/stargazers data-count-api=/repos/hydrabolt/discord.js#stargazers_count data-count-aria-label="# stargazers on GitHub" aria-label="Star hydrabolt/discord.js on GitHub">Star</a> </div> '},function(t,e){t.exports=" <div class=slide> <container> <slot></slot> </container> </div> "},function(t,e){t.exports=" <slide> <h2>Stats</h2> <div class=stat><b>{{ downloads }}</b> downloads</div> <div class=stat><b>{{ stars }}</b> stars</div> <div class=stat><b>{{ contributors }}</b> contributors</div> </slide> "},function(t,e){t.exports=' <div class=docs-navbar> <container> <span class=title>Documentation <span v-if=$route.params.tag>for {{ $route.params.tag }}</span></span> <div class=choices> Select docs from <span class=choice @click=\'select("branch")\'>Branch</span> or <span class=choice @click=\'select("commit")\'>Commit</span> or <span class=choice @click=\'select("release")\'>Release</span> </div> <div class=branchSelect v-if="choice==\'branch\'"> <select v-model=chosenTag> <option selected=selected value>Select a Branch</option> <option v-for="branch in $root.sharedStore.data.branches" v-bind:value=branch.name :selected="branch.name==\'indev-rewrite\'">{{ branch.name }}</option> </select> </div> </container> </div> '},function(t,e){t.exports=' <div class=docs-sidebar> <ul v-for="(category, items) in docs.custom"> <li>{{ category }}</li> <li v-for="(name, data) in items" v-link=\'{ name: "fileview", params: { category:category, file:name } }\'>{{ name }}</li> </ul> <ul> <li>Classes</li> <li v-for="(className, data) in docs.json.classes" v-link=\'{ name: "classview", params: { category:category, class:className } }\'>{{ className }}</li> </ul> </div> '},function(t,e){t.exports=" <div class=docs-viewer> <container> <sidebar :docs=docs></sidebar> <router-view></router-view> </container> </div> "},function(t,e){t.exports=' <div class=doc-part-view> <container> <h1>Class: {{ info.meta.name }}</h1> <p>{{{ info.meta.description | marked }}}</p> <hr> <overview :info=info></overview> <hr> <h2>Properties:</h2> <prop-renderer v-for="prop in info.properties" :prop=prop></prop-renderer> <hr> <h2>Methods:</h2> <method-renderer v-for="method in info.functions" :method=method></method-renderer> </container> </div> '},function(t,e){t.exports=" {{{ '```js\\n' + example + '```' | marked }}} "},function(t,e){t.exports=' <i class="fa fa-link" v-link=\'{ name:"classview", query:{scrollto:item.name} }\'></i> '},function(t,e){t.exports=' <div class=docs-class-overview> <div class=docs-class-overview-segment> <h4>Properties</h4> <ul> <li v-for="prop in info.properties" v-link=\'{ name:"classview", query:{scrollto:prop.name} }\'><span class=propName>.{{ prop.name }}</span> => <span class=type><prop-type :types=prop.type></prop-type></span></li> </ul> </div> <div class=docs-class-overview-segment> <h4>Methods</h4> <ul> <li v-for="prop in info.functions" v-link=\'{ name:"classview", query:{scrollto:prop.name} }\'>{{ prop.name }}</li> </ul> </div> </div>'},function(t,e){t.exports=" {{ types.names }} "},function(t,e){t.exports=' <a href="https://github.com/hydrabolt/discord.js/blob/{{ $route.params.tag }}/{{ meta.path }}/{{ meta.filename }}#L{{ meta.lineno }}"> <i class="fa fa-file-text-o"></i></a> '},function(t,e){t.exports=" <div class=doc-part-view> <container> {{{ file | marked }}} </container> </div> "},function(t,e){t.exports=" <docs-bar></docs-bar> <router-view></router-view> "},function(t,e){t.exports=" <div class=indexView> <slide> <h1>discord.js</h1> <div class=code>npm install --save discord.js</div> <github-star></github-star> </slide> <slide> <h2>About</h2> <p> discord.js is a JavaScript library that wraps around the <a href=https://discordapp.com/developers/docs/intro>Discord API</a> so you can make your own Bots and Applications for Discord. It handles all the communication and provides an easy-to-use interface so you can focus on doing actual work. </p> </slide> <lib-stats></lib-stats> </div> "},function(t,e){t.exports=' <container _v-20a33112=""> <h3 id="doc_for_{{ method.name }}" _v-20a33112="">.{{ method.name }}(<span _v-20a33112=""><param v-for="param in method.params" :param=param _v-20a33112=""></span>)<source-button :meta=method.meta _v-20a33112=""></source-button> <link-button :item=method _v-20a33112=""></link-button> </h3> <div class=desc _v-20a33112=""> <param-table :params=method.params v-if="method.params.length>0" _v-20a33112=""></param-table> <p _v-20a33112="">{{{ method.description | marked }}}</p> <p _v-20a33112=""><b _v-20a33112="">Returns:</b> {{ method.returns[0].type.names[0] }}</p> <p v-if=method.examples _v-20a33112=""><b _v-20a33112="">Examples:</b><example v-for="example in method.examples" :example=example _v-20a33112=""></example></p> </div> </container> '},function(t,e){t.exports=' <container _v-293073d8=""> <h3 id="doc_for_{{ prop.name }}" _v-293073d8="">.{{ prop.name }} <source-button :meta=prop.meta _v-293073d8=""></source-button> <link-button :item=prop _v-293073d8=""></link-button></h3> <div class=desc _v-293073d8=""> <p _v-293073d8="">{{{ prop.description | marked }}}</p> <p _v-293073d8=""><b _v-293073d8="">Type:</b> <prop-type :types=prop.type _v-293073d8=""></prop-type></p> </div> </container> '},function(t,e){t.exports=' <table _v-674c740f=""> <tbody _v-674c740f=""> <tr _v-674c740f=""> <th _v-674c740f="">Parameter</th> <th _v-674c740f="">Type</th> <th _v-674c740f="">Optional</th> <th _v-674c740f="">Description</th> </tr> <tr v-for="param in params" _v-674c740f=""> <td class="{{ param.optional ? \'optional\' : \'\' }}" _v-674c740f="">{{ param.name }}</td> <td _v-674c740f="">{{{ param.type.names[0] }}}</td> <td _v-674c740f="">{{ param.optional ? \'yes\' : \'\'}}</td> <td _v-674c740f="">{{{ param.description | marked }}}</td> </tr> </tbody> </table> '},function(t,e){t.exports=" <span class=\"param {{ param.optional ? 'optional' : '' }}\" _v-6febc7a2=\"\">{{ param.name }}</span> "},function(t,e,o){var s,r;s=o(45),r=o(112),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,o){var s,r;s=o(46),r=o(113),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,o){var s,r;s=o(47),r=o(114),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,o){var s,r;s=o(48),r=o(115),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,o){var s,r;s=o(49),r=o(116),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,o){var s,r;s=o(50),r=o(117),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,o){var s,r;s=o(51),r=o(118),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,o){var s,r;s=o(53),r=o(120),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,o){var s,r;s=o(54),r=o(121),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,o){var s,r;s=o(55),r=o(122),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,o){var s,r;o(105),s=o(57),r=o(130),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,o){var s,r;o(103),s=o(58),r=o(124),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,o){var s,r;o(108),s=o(59),r=o(133),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,o){var s,r;o(107),s=o(60),r=o(132),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,o){var s,r;o(106),s=o(61),r=o(131),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,o){var s,r;s=o(64),r=o(127),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,o){var s,r;s=o(65),r=o(128),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,o){var s,r;s=o(66),r=o(129),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)}]);
//# sourceMappingURL=app.124452d771fdefdb0fe3.js.map