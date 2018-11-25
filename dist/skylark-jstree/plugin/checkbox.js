/**
 * skylark-jstree - A version of jstree that ported to running on skylarkjs ui.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylarkui/skylark-jstree/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-utils-dom/browser","skylark-utils-dom/eventer","skylark-utils-dom/noder","skylark-utils-dom/geom","skylark-utils-dom/query","../tree"],function(e,t,s,c,i,d,h){"use strict";if(!d.jstree.plugins.checkbox){var n=document.createElement("I");return n.className="jstree-icon jstree-checkbox",n.setAttribute("role","presentation"),d.jstree.defaults.checkbox={visible:!0,three_state:!0,whole_node:!0,keep_selected_style:!0,cascade:"",tie_selection:!0,cascade_to_disabled:!0,cascade_to_hidden:!0},d.jstree.plugins.checkbox=function(e,t){this.bind=function(){t.bind.call(this),this._data.checkbox.uto=!1,this._data.checkbox.selected=[],this.settings.checkbox.three_state&&(this.settings.checkbox.cascade="up+down+undetermined"),this.element.on("init.jstree",d.proxy(function(){this._data.checkbox.visible=this.settings.checkbox.visible,this.settings.checkbox.keep_selected_style||this.element.addClass("jstree-checkbox-no-clicked"),this.settings.checkbox.tie_selection&&this.element.addClass("jstree-checkbox-selection")},this)).on("loading.jstree",d.proxy(function(){this[this._data.checkbox.visible?"show_checkboxes":"hide_checkboxes"]()},this)),this.settings.checkbox.cascade.indexOf("undetermined")!==-1&&this.element.on("changed.jstree uncheck_node.jstree check_node.jstree uncheck_all.jstree check_all.jstree move_node.jstree copy_node.jstree redraw.jstree open_node.jstree",d.proxy(function(){this._data.checkbox.uto&&clearTimeout(this._data.checkbox.uto),this._data.checkbox.uto=setTimeout(d.proxy(this._undetermined,this),50)},this)),this.settings.checkbox.tie_selection||this.element.on("model.jstree",d.proxy(function(e,t){var s,c,i=this._model.data,d=(i[t.parent],t.nodes);for(s=0,c=d.length;s<c;s++)i[d[s]].state.checked=i[d[s]].state.checked||i[d[s]].original&&i[d[s]].original.state&&i[d[s]].original.state.checked,i[d[s]].state.checked&&this._data.checkbox.selected.push(d[s])},this)),this.settings.checkbox.cascade.indexOf("up")===-1&&this.settings.checkbox.cascade.indexOf("down")===-1||this.element.on("model.jstree",d.proxy(function(e,t){var s,c,i,h,n,r,o=this._model.data,a=o[t.parent],l=t.nodes,_=[],k=this.settings.checkbox.cascade,g=this.settings.checkbox.tie_selection;if(k.indexOf("down")!==-1)if(a.state[g?"selected":"checked"]){for(c=0,i=l.length;c<i;c++)o[l[c]].state[g?"selected":"checked"]=!0;this._data[g?"core":"checkbox"].selected=this._data[g?"core":"checkbox"].selected.concat(l)}else for(c=0,i=l.length;c<i;c++)if(o[l[c]].state[g?"selected":"checked"]){for(h=0,n=o[l[c]].children_d.length;h<n;h++)o[o[l[c]].children_d[h]].state[g?"selected":"checked"]=!0;this._data[g?"core":"checkbox"].selected=this._data[g?"core":"checkbox"].selected.concat(o[l[c]].children_d)}if(k.indexOf("up")!==-1){for(c=0,i=a.children_d.length;c<i;c++)o[a.children_d[c]].children.length||_.push(o[a.children_d[c]].parent);for(_=d.vakata.array_unique(_),h=0,n=_.length;h<n;h++)for(a=o[_[h]];a&&a.id!==d.jstree.root;){for(s=0,c=0,i=a.children.length;c<i;c++)s+=o[a.children[c]].state[g?"selected":"checked"];if(s!==i)break;a.state[g?"selected":"checked"]=!0,this._data[g?"core":"checkbox"].selected.push(a.id),r=this.get_node(a,!0),r&&r.length&&r.attr("aria-selected",!0).children(".jstree-anchor").addClass(g?"jstree-clicked":"jstree-checked"),a=this.get_node(a.parent)}}this._data[g?"core":"checkbox"].selected=d.vakata.array_unique(this._data[g?"core":"checkbox"].selected)},this)).on(this.settings.checkbox.tie_selection?"select_node.jstree":"check_node.jstree",d.proxy(function(e,t){var s,c,i,h,n=t.node,r=this._model.data,o=this.get_node(n.parent),a=this.settings.checkbox.cascade,l=this.settings.checkbox.tie_selection,_={},k=this._data[l?"core":"checkbox"].selected;for(s=0,c=k.length;s<c;s++)_[k[s]]=!0;if(a.indexOf("down")!==-1){var g=this._cascade_new_checked_state(n.id,!0),u=n.children_d.concat(n.id);for(s=0,c=u.length;s<c;s++)g.indexOf(u[s])>-1?_[u[s]]=!0:delete _[u[s]]}if(a.indexOf("up")!==-1)for(;o&&o.id!==d.jstree.root;){for(i=0,s=0,c=o.children.length;s<c;s++)i+=r[o.children[s]].state[l?"selected":"checked"];if(i!==c)break;o.state[l?"selected":"checked"]=!0,_[o.id]=!0,h=this.get_node(o,!0),h&&h.length&&h.attr("aria-selected",!0).children(".jstree-anchor").addClass(l?"jstree-clicked":"jstree-checked"),o=this.get_node(o.parent)}k=[];for(s in _)_.hasOwnProperty(s)&&k.push(s);this._data[l?"core":"checkbox"].selected=k},this)).on(this.settings.checkbox.tie_selection?"deselect_all.jstree":"uncheck_all.jstree",d.proxy(function(e,t){var s,c,i,h=this.get_node(d.jstree.root),n=this._model.data;for(s=0,c=h.children_d.length;s<c;s++)i=n[h.children_d[s]],i&&i.original&&i.original.state&&i.original.state.undetermined&&(i.original.state.undetermined=!1)},this)).on(this.settings.checkbox.tie_selection?"deselect_node.jstree":"uncheck_node.jstree",d.proxy(function(e,t){var s,c,i,d=t.node,h=(this.get_node(d,!0),this.settings.checkbox.cascade),n=this.settings.checkbox.tie_selection,r=this._data[n?"core":"checkbox"].selected,o=d.children_d.concat(d.id);if(h.indexOf("down")!==-1){var a=this._cascade_new_checked_state(d.id,!1);r=r.filter(function(e){return o.indexOf(e)===-1||a.indexOf(e)>-1})}if(h.indexOf("up")!==-1&&r.indexOf(d.id)===-1){for(s=0,c=d.parents.length;s<c;s++)i=this._model.data[d.parents[s]],i.state[n?"selected":"checked"]=!1,i&&i.original&&i.original.state&&i.original.state.undetermined&&(i.original.state.undetermined=!1),i=this.get_node(d.parents[s],!0),i&&i.length&&i.attr("aria-selected",!1).children(".jstree-anchor").removeClass(n?"jstree-clicked":"jstree-checked");r=r.filter(function(e){return d.parents.indexOf(e)===-1})}this._data[n?"core":"checkbox"].selected=r},this)),this.settings.checkbox.cascade.indexOf("up")!==-1&&this.element.on("delete_node.jstree",d.proxy(function(e,t){for(var s,c,i,h,n=this.get_node(t.parent),r=this._model.data,o=this.settings.checkbox.tie_selection;n&&n.id!==d.jstree.root&&!n.state[o?"selected":"checked"];){for(i=0,s=0,c=n.children.length;s<c;s++)i+=r[n.children[s]].state[o?"selected":"checked"];if(!(c>0&&i===c))break;n.state[o?"selected":"checked"]=!0,this._data[o?"core":"checkbox"].selected.push(n.id),h=this.get_node(n,!0),h&&h.length&&h.attr("aria-selected",!0).children(".jstree-anchor").addClass(o?"jstree-clicked":"jstree-checked"),n=this.get_node(n.parent)}},this)).on("move_node.jstree",d.proxy(function(e,t){var s,c,i,h,n,r=t.is_multi,o=t.old_parent,a=this.get_node(t.parent),l=this._model.data,_=this.settings.checkbox.tie_selection;if(!r)for(s=this.get_node(o);s&&s.id!==d.jstree.root&&!s.state[_?"selected":"checked"];){for(c=0,i=0,h=s.children.length;i<h;i++)c+=l[s.children[i]].state[_?"selected":"checked"];if(!(h>0&&c===h))break;s.state[_?"selected":"checked"]=!0,this._data[_?"core":"checkbox"].selected.push(s.id),n=this.get_node(s,!0),n&&n.length&&n.attr("aria-selected",!0).children(".jstree-anchor").addClass(_?"jstree-clicked":"jstree-checked"),s=this.get_node(s.parent)}for(s=a;s&&s.id!==d.jstree.root;){for(c=0,i=0,h=s.children.length;i<h;i++)c+=l[s.children[i]].state[_?"selected":"checked"];if(c===h)s.state[_?"selected":"checked"]||(s.state[_?"selected":"checked"]=!0,this._data[_?"core":"checkbox"].selected.push(s.id),n=this.get_node(s,!0),n&&n.length&&n.attr("aria-selected",!0).children(".jstree-anchor").addClass(_?"jstree-clicked":"jstree-checked"));else{if(!s.state[_?"selected":"checked"])break;s.state[_?"selected":"checked"]=!1,this._data[_?"core":"checkbox"].selected=d.vakata.array_remove_item(this._data[_?"core":"checkbox"].selected,s.id),n=this.get_node(s,!0),n&&n.length&&n.attr("aria-selected",!1).children(".jstree-anchor").removeClass(_?"jstree-clicked":"jstree-checked")}s=this.get_node(s.parent)}},this))},this.get_undetermined=function(e){if(this.settings.checkbox.cascade.indexOf("undetermined")===-1)return[];var t,s,c,i,h={},n=this._model.data,r=this.settings.checkbox.tie_selection,o=this._data[r?"core":"checkbox"].selected,a=[],l=this,_=[];for(t=0,s=o.length;t<s;t++)if(n[o[t]]&&n[o[t]].parents)for(c=0,i=n[o[t]].parents.length;c<i&&void 0===h[n[o[t]].parents[c]];c++)n[o[t]].parents[c]!==d.jstree.root&&(h[n[o[t]].parents[c]]=!0,a.push(n[o[t]].parents[c]));for(this.element.find(".jstree-closed").not(":has(.jstree-children)").each(function(){var e,r=l.get_node(this);if(r)if(r.state.loaded){for(t=0,s=r.children_d.length;t<s;t++)if(e=n[r.children_d[t]],!e.state.loaded&&e.original&&e.original.state&&e.original.state.undetermined&&e.original.state.undetermined===!0)for(void 0===h[e.id]&&e.id!==d.jstree.root&&(h[e.id]=!0,a.push(e.id)),c=0,i=e.parents.length;c<i;c++)void 0===h[e.parents[c]]&&e.parents[c]!==d.jstree.root&&(h[e.parents[c]]=!0,a.push(e.parents[c]))}else if(r.original&&r.original.state&&r.original.state.undetermined&&r.original.state.undetermined===!0)for(void 0===h[r.id]&&r.id!==d.jstree.root&&(h[r.id]=!0,a.push(r.id)),c=0,i=r.parents.length;c<i;c++)void 0===h[r.parents[c]]&&r.parents[c]!==d.jstree.root&&(h[r.parents[c]]=!0,a.push(r.parents[c]))}),t=0,s=a.length;t<s;t++)n[a[t]].state[r?"selected":"checked"]||_.push(e?n[a[t]]:a[t]);return _},this._undetermined=function(){if(null!==this.element){var e,t,s,c=this.get_undetermined(!1);for(this.element.find(".jstree-undetermined").removeClass("jstree-undetermined"),e=0,t=c.length;e<t;e++)s=this.get_node(c[e],!0),s&&s.length&&s.children(".jstree-anchor").children(".jstree-checkbox").addClass("jstree-undetermined")}},this.redraw_node=function(e,s,c,i){if(e=t.redraw_node.apply(this,arguments)){var h,r,o=null,a=null;for(h=0,r=e.childNodes.length;h<r;h++)if(e.childNodes[h]&&e.childNodes[h].className&&e.childNodes[h].className.indexOf("jstree-anchor")!==-1){o=e.childNodes[h];break}o&&(!this.settings.checkbox.tie_selection&&this._model.data[e.id].state.checked&&(o.className+=" jstree-checked"),a=n.cloneNode(!1),this._model.data[e.id].state.checkbox_disabled&&(a.className+=" jstree-checkbox-disabled"),o.insertBefore(a,o.childNodes[0]))}return c||this.settings.checkbox.cascade.indexOf("undetermined")===-1||(this._data.checkbox.uto&&clearTimeout(this._data.checkbox.uto),this._data.checkbox.uto=setTimeout(d.proxy(this._undetermined,this),50)),e},this.show_checkboxes=function(){this._data.core.themes.checkboxes=!0,this.get_container_ul().removeClass("jstree-no-checkboxes")},this.hide_checkboxes=function(){this._data.core.themes.checkboxes=!1,this.get_container_ul().addClass("jstree-no-checkboxes")},this.toggle_checkboxes=function(){this._data.core.themes.checkboxes?this.hide_checkboxes():this.show_checkboxes()},this.is_undetermined=function(e){e=this.get_node(e);var t,s,c=this.settings.checkbox.cascade,i=this.settings.checkbox.tie_selection,h=this._data[i?"core":"checkbox"].selected,n=this._model.data;if(!e||e.state[i?"selected":"checked"]===!0||c.indexOf("undetermined")===-1||c.indexOf("down")===-1&&c.indexOf("up")===-1)return!1;if(!e.state.loaded&&e.original.state.undetermined===!0)return!0;for(t=0,s=e.children_d.length;t<s;t++)if(d.inArray(e.children_d[t],h)!==-1||!n[e.children_d[t]].state.loaded&&n[e.children_d[t]].original.state.undetermined)return!0;return!1},this.disable_checkbox=function(e){var t,s,c;if(d.isArray(e)){for(e=e.slice(),t=0,s=e.length;t<s;t++)this.disable_checkbox(e[t]);return!0}return e=this.get_node(e),!(!e||e.id===d.jstree.root)&&(c=this.get_node(e,!0),void(e.state.checkbox_disabled||(e.state.checkbox_disabled=!0,c&&c.length&&c.children(".jstree-anchor").children(".jstree-checkbox").addClass("jstree-checkbox-disabled"),this.trigger("disable_checkbox",{node:e}))))},this.enable_checkbox=function(e){var t,s,c;if(d.isArray(e)){for(e=e.slice(),t=0,s=e.length;t<s;t++)this.enable_checkbox(e[t]);return!0}return e=this.get_node(e),!(!e||e.id===d.jstree.root)&&(c=this.get_node(e,!0),void(e.state.checkbox_disabled&&(e.state.checkbox_disabled=!1,c&&c.length&&c.children(".jstree-anchor").children(".jstree-checkbox").removeClass("jstree-checkbox-disabled"),this.trigger("enable_checkbox",{node:e}))))},this.activate_node=function(e,s){return!d(s.target).hasClass("jstree-checkbox-disabled")&&(this.settings.checkbox.tie_selection&&(this.settings.checkbox.whole_node||d(s.target).hasClass("jstree-checkbox"))&&(s.ctrlKey=!0),this.settings.checkbox.tie_selection||!this.settings.checkbox.whole_node&&!d(s.target).hasClass("jstree-checkbox")?t.activate_node.call(this,e,s):!this.is_disabled(e)&&(this.is_checked(e)?this.uncheck_node(e,s):this.check_node(e,s),void this.trigger("activate_node",{node:this.get_node(e)})))},this._cascade_new_checked_state=function(e,t){var s,c,i,d=this,h=this.settings.checkbox.tie_selection,n=this._model.data[e],r=[],o=[];if(!this.settings.checkbox.cascade_to_disabled&&n.state.disabled||!this.settings.checkbox.cascade_to_hidden&&n.state.hidden)i=this.get_checked_descendants(e),n.state[h?"selected":"checked"]&&i.push(n.id),r=r.concat(i);else{if(n.children)for(s=0,c=n.children.length;s<c;s++){var a=n.children[s];i=d._cascade_new_checked_state(a,t),r=r.concat(i),i.indexOf(a)>-1&&o.push(a)}var l=d.get_node(n,!0),_=o.length>0&&o.length<n.children.length;n.original&&n.original.state&&n.original.state.undetermined&&(n.original.state.undetermined=_),_?(n.state[h?"selected":"checked"]=!1,l.attr("aria-selected",!1).children(".jstree-anchor").removeClass(h?"jstree-clicked":"jstree-checked")):t&&o.length===n.children.length?(n.state[h?"selected":"checked"]=t,r.push(n.id),l.attr("aria-selected",!0).children(".jstree-anchor").addClass(h?"jstree-clicked":"jstree-checked")):(n.state[h?"selected":"checked"]=!1,l.attr("aria-selected",!1).children(".jstree-anchor").removeClass(h?"jstree-clicked":"jstree-checked"))}return r},this.get_checked_descendants=function(e){var t=this,s=t.settings.checkbox.tie_selection,c=t._model.data[e];return c.children_d.filter(function(e){return t._model.data[e].state[s?"selected":"checked"]})},this.check_node=function(e,t){if(this.settings.checkbox.tie_selection)return this.select_node(e,!1,!0,t);var s,c,i;if(d.isArray(e)){for(e=e.slice(),c=0,i=e.length;c<i;c++)this.check_node(e[c],t);return!0}return e=this.get_node(e),!(!e||e.id===d.jstree.root)&&(s=this.get_node(e,!0),void(e.state.checked||(e.state.checked=!0,this._data.checkbox.selected.push(e.id),s&&s.length&&s.children(".jstree-anchor").addClass("jstree-checked"),this.trigger("check_node",{node:e,selected:this._data.checkbox.selected,event:t}))))},this.uncheck_node=function(e,t){if(this.settings.checkbox.tie_selection)return this.deselect_node(e,!1,t);var s,c,i;if(d.isArray(e)){for(e=e.slice(),s=0,c=e.length;s<c;s++)this.uncheck_node(e[s],t);return!0}return e=this.get_node(e),!(!e||e.id===d.jstree.root)&&(i=this.get_node(e,!0),void(e.state.checked&&(e.state.checked=!1,this._data.checkbox.selected=d.vakata.array_remove_item(this._data.checkbox.selected,e.id),i.length&&i.children(".jstree-anchor").removeClass("jstree-checked"),this.trigger("uncheck_node",{node:e,selected:this._data.checkbox.selected,event:t}))))},this.check_all=function(){if(this.settings.checkbox.tie_selection)return this.select_all();var e,t;this._data.checkbox.selected.concat([]);for(this._data.checkbox.selected=this._model.data[d.jstree.root].children_d.concat(),e=0,t=this._data.checkbox.selected.length;e<t;e++)this._model.data[this._data.checkbox.selected[e]]&&(this._model.data[this._data.checkbox.selected[e]].state.checked=!0);this.redraw(!0),this.trigger("check_all",{selected:this._data.checkbox.selected})},this.uncheck_all=function(){if(this.settings.checkbox.tie_selection)return this.deselect_all();var e,t,s=this._data.checkbox.selected.concat([]);for(e=0,t=this._data.checkbox.selected.length;e<t;e++)this._model.data[this._data.checkbox.selected[e]]&&(this._model.data[this._data.checkbox.selected[e]].state.checked=!1);this._data.checkbox.selected=[],this.element.find(".jstree-checked").removeClass("jstree-checked"),this.trigger("uncheck_all",{selected:this._data.checkbox.selected,node:s})},this.is_checked=function(e){return this.settings.checkbox.tie_selection?this.is_selected(e):(e=this.get_node(e),!(!e||e.id===d.jstree.root)&&e.state.checked)},this.get_checked=function(e){return this.settings.checkbox.tie_selection?this.get_selected(e):e?d.map(this._data.checkbox.selected,d.proxy(function(e){return this.get_node(e)},this)):this._data.checkbox.selected},this.get_top_checked=function(e){if(this.settings.checkbox.tie_selection)return this.get_top_selected(e);var t,s,c,i,h=this.get_checked(!0),n={};for(t=0,s=h.length;t<s;t++)n[h[t].id]=h[t];for(t=0,s=h.length;t<s;t++)for(c=0,i=h[t].children_d.length;c<i;c++)n[h[t].children_d[c]]&&delete n[h[t].children_d[c]];h=[];for(t in n)n.hasOwnProperty(t)&&h.push(t);return e?d.map(h,d.proxy(function(e){return this.get_node(e)},this)):h},this.get_bottom_checked=function(e){if(this.settings.checkbox.tie_selection)return this.get_bottom_selected(e);var t,s,c=this.get_checked(!0),i=[];for(t=0,s=c.length;t<s;t++)c[t].children.length||i.push(c[t].id);return e?d.map(i,d.proxy(function(e){return this.get_node(e)},this)):i},this.load_node=function(e,s){var c,i,h,n;if(!d.isArray(e)&&!this.settings.checkbox.tie_selection&&(n=this.get_node(e),n&&n.state.loaded))for(c=0,i=n.children_d.length;c<i;c++)this._model.data[n.children_d[c]].state.checked&&(h=!0,this._data.checkbox.selected=d.vakata.array_remove_item(this._data.checkbox.selected,n.children_d[c]));return t.load_node.apply(this,arguments)},this.get_state=function(){var e=t.get_state.apply(this,arguments);return this.settings.checkbox.tie_selection?e:(e.checkbox=this._data.checkbox.selected.slice(),e)},this.set_state=function(e,s){var c=t.set_state.apply(this,arguments);if(c&&e.checkbox){if(!this.settings.checkbox.tie_selection){this.uncheck_all();var i=this;d.each(e.checkbox,function(e,t){i.check_node(t)})}return delete e.checkbox,this.set_state(e,s),!1}return c},this.refresh=function(e,s){return this.settings.checkbox.tie_selection||(this._data.checkbox.selected=[]),t.refresh.apply(this,arguments)}},d}});
//# sourceMappingURL=../sourcemaps/plugin/checkbox.js.map
