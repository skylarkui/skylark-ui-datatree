/**
 * skylark-jstree - A version of jstree that ported to running on skylarkjs ui.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylarkui/skylark-jstree/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-utils-dom/browser","skylark-utils-dom/eventer","skylark-utils-dom/noder","skylark-utils-dom/geom","skylark-utils-dom/query","../tree"],function(e,t,i,r,s,n,a){"use strict";if(!n.jstree.plugins.unique)return n.jstree.defaults.unique={case_sensitive:!1,trim_whitespace:!1,duplicate:function(e,t){return e+" ("+t+")"}},n.jstree.plugins.unique=function(e,t){this.check=function(e,i,r,s,a){if(t.check.call(this,e,i,r,s,a)===!1)return!1;if(i=i&&i.id?i:this.get_node(i),r=r&&r.id?r:this.get_node(r),!r||!r.children)return!0;var u,o,d,l="rename_node"===e?s:i.text,c=[],h=this.settings.unique.case_sensitive,g=this.settings.unique.trim_whitespace,F=this._model.data;for(u=0,o=r.children.length;u<o;u++)d=F[r.children[u]].text,h||(d=d.toLowerCase()),g&&(d=d.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")),c.push(d);switch(h||(l=l.toLowerCase()),g&&(l=l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")),e){case"delete_node":return!0;case"rename_node":return d=i.text||"",h||(d=d.toLowerCase()),g&&(d=d.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")),u=n.inArray(l,c)===-1||i.text&&d===l,u||(this._data.core.last_error={error:"check",plugin:"unique",id:"unique_01",reason:"Child with name "+l+" already exists. Preventing: "+e,data:JSON.stringify({chk:e,pos:s,obj:!(!i||!i.id)&&i.id,par:!(!r||!r.id)&&r.id})}),u;case"create_node":return u=n.inArray(l,c)===-1,u||(this._data.core.last_error={error:"check",plugin:"unique",id:"unique_04",reason:"Child with name "+l+" already exists. Preventing: "+e,data:JSON.stringify({chk:e,pos:s,obj:!(!i||!i.id)&&i.id,par:!(!r||!r.id)&&r.id})}),u;case"copy_node":return u=n.inArray(l,c)===-1,u||(this._data.core.last_error={error:"check",plugin:"unique",id:"unique_02",reason:"Child with name "+l+" already exists. Preventing: "+e,data:JSON.stringify({chk:e,pos:s,obj:!(!i||!i.id)&&i.id,par:!(!r||!r.id)&&r.id})}),u;case"move_node":return u=i.parent===r.id&&(!a||!a.is_multi)||n.inArray(l,c)===-1,u||(this._data.core.last_error={error:"check",plugin:"unique",id:"unique_03",reason:"Child with name "+l+" already exists. Preventing: "+e,data:JSON.stringify({chk:e,pos:s,obj:!(!i||!i.id)&&i.id,par:!(!r||!r.id)&&r.id})}),u}return!0},this.create_node=function(e,i,r,s,a){if(!i||void 0===i.text){if(null===e&&(e=n.jstree.root),e=this.get_node(e),!e)return t.create_node.call(this,e,i,r,s,a);if(r=void 0===r?"last":r,!r.toString().match(/^(before|after)$/)&&!a&&!this.is_loaded(e))return t.create_node.call(this,e,i,r,s,a);i||(i={});var u,o,d,l,c,h,g=this._model.data,F=this.settings.unique.case_sensitive,_=this.settings.unique.trim_whitespace,p=this.settings.unique.duplicate;for(o=u=this.get_string("New node"),d=[],l=0,c=e.children.length;l<c;l++)h=g[e.children[l]].text,F||(h=h.toLowerCase()),_&&(h=h.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")),d.push(h);for(l=1,h=o,F||(h=h.toLowerCase()),_&&(h=h.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""));n.inArray(h,d)!==-1;)o=p.call(this,u,++l).toString(),h=o,F||(h=h.toLowerCase()),_&&(h=h.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""));i.text=o}return t.create_node.call(this,e,i,r,s,a)}},n});
//# sourceMappingURL=../sourcemaps/plugin/unique.js.map
