/**
 * skylark-jstree - A version of jstree that ported to running on skylarkjs ui.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylarkui/skylark-jstree/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-utils-dom/browser","skylark-utils-dom/eventer","skylark-utils-dom/noder","skylark-utils-dom/geom","skylark-utils-dom/query","../tree"],function(t,e,s,r,n,a,i){"use strict";if(!a.jstree.plugins.state){var o=!1;return a.jstree.defaults.state={key:"jstree",events:"changed.jstree open_node.jstree close_node.jstree check_node.jstree uncheck_node.jstree",ttl:!1,filter:!1,preserve_loaded:!1},a.jstree.plugins.state=function(t,e){this.bind=function(){e.bind.call(this);var t=a.proxy(function(){this.element.on(this.settings.state.events,a.proxy(function(){o&&clearTimeout(o),o=setTimeout(a.proxy(function(){this.save_state()},this),100)},this)),this.trigger("state_ready")},this);this.element.on("ready.jstree",a.proxy(function(e,s){this.element.one("restore_state.jstree",t),this.restore_state()||t()},this))},this.save_state=function(){var t=this.get_state();this.settings.state.preserve_loaded||delete t.core.loaded;var e={state:t,ttl:this.settings.state.ttl,sec:+new Date};a.vakata.storage.set(this.settings.state.key,JSON.stringify(e))},this.restore_state=function(){var t=a.vakata.storage.get(this.settings.state.key);if(t)try{t=JSON.parse(t)}catch(e){return!1}return!(t&&t.ttl&&t.sec&&+new Date-t.sec>t.ttl)&&(t&&t.state&&(t=t.state),t&&a.isFunction(this.settings.state.filter)&&(t=this.settings.state.filter.call(this,t)),!!t&&(this.settings.state.preserve_loaded||delete t.core.loaded,this.element.one("set_state.jstree",function(e,s){s.instance.trigger("restore_state",{state:a.extend(!0,{},t)})}),this.set_state(t),!0))},this.clear_state=function(){return a.vakata.storage.del(this.settings.state.key)}},function(t,e){t.vakata.storage={set:function(t,e){return window.localStorage.setItem(t,e)},get:function(t){return window.localStorage.getItem(t)},del:function(t){return window.localStorage.removeItem(t)}}}(a),a}});
//# sourceMappingURL=../sourcemaps/plugin/state.js.map
