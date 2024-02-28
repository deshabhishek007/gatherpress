(()=>{"use strict";var e,t={5527:(e,t,s)=>{const n=window.wp.blocks,r=window.React,a=window.wp.blockEditor,i=window.wp.components,l=window.wp.element,o=window.wp.i18n,p=(e,t="")=>{for(const[s,n]of Object.entries(e)){let e=s;t&&(e+="_"+String(t)),addEventListener(e,(e=>{n(e.detail)}),!1)}},c=window.wp.data;function v(e){if("object"==typeof GatherPress)return e.split(".").reduce(((e,t)=>e&&e[t]),GatherPress)}const m=({item:e,activeItem:t=!1,count:s,onTitleClick:n,defaultLimit:a})=>{const{title:i,value:o}=e,p=!(0===s&&"attending"!==o),c=t?"span":"a",m=v("eventDetails.postId"),u=s>a;return(0,l.useEffect)((()=>{t&&((e,t="")=>{for(const[s,n]of Object.entries(e)){let e=s;t&&(e+="_"+String(t));const r=new CustomEvent(e,{detail:n});dispatchEvent(r)}})({setRsvpSeeAllLink:u},m)})),p?(0,r.createElement)("div",{className:"gp-rsvp-response__navigation-item"},(0,r.createElement)(c,{className:"gp-rsvp-response__anchor","data-item":o,"data-toggle":"tab",href:"#",role:"tab","aria-controls":`#gp-rsvp-${o}`,onClick:e=>n(e,o)},i),(0,r.createElement)("span",{className:"gp-rsvp-response__count"},"(",s,")")):""},u=({items:e,activeValue:t,onTitleClick:n,defaultLimit:a})=>{const i={all:0,attending:0,not_attending:0,waiting_list:0};for(const[e,t]of Object.entries(v("eventDetails.responses")))i[e]=t.count;const[o,c]=(0,l.useState)(i),[u,d]=(0,l.useState)(!1),[g,_]=(0,l.useState)(!0),h=g?"span":"a";p({setRsvpCount:c},v("eventDetails.postId"));let f=0;const E=e.map(((e,s)=>{const i=e.value===t;return i&&(f=s),(0,r.createElement)(m,{key:s,item:e,count:o[e.value],activeItem:i,onTitleClick:n,defaultLimit:a})}));return(0,l.useEffect)((()=>{s.g.document.addEventListener("click",(({target:e})=>{e.closest(".gp-rsvp-response__navigation-active")||d(!1)})),s.g.document.addEventListener("keydown",(({key:e})=>{"Escape"===e&&d(!1)}))})),(0,l.useEffect)((()=>{0===o.not_attending&&0===o.waiting_list?_(!0):_(!1)}),[o]),(0,r.createElement)("div",{className:"gp-rsvp-response__navigation-wrapper"},(0,r.createElement)("div",null,(0,r.createElement)(h,{href:"#",className:"gp-rsvp-response__navigation-active",onClick:e=>(e=>{e.preventDefault(),d(!u)})(e)},e[f].title)," ",(0,r.createElement)("span",null,"(",o[t],")")),!g&&u&&(0,r.createElement)("nav",{className:"gp-rsvp-response__navigation"},E))},d=({items:e,activeValue:t,onTitleClick:s,rsvpLimit:n,setRsvpLimit:a,defaultLimit:i})=>{let c;c=!1===n?(0,o.__)("See fewer","gatherpress"):(0,o.__)("See all","gatherpress");let m=!1;v("eventDetails.responses")[t]&&(m=v("eventDetails.responses")[t].count>i);const[d,g]=(0,l.useState)(m);return p({setRsvpSeeAllLink:g},v("eventDetails.postId")),(0,r.createElement)("div",{className:"gp-rsvp-response__header"},(0,r.createElement)("div",{className:"dashicons dashicons-groups"}),(0,r.createElement)(u,{items:e,activeValue:t,onTitleClick:s,defaultLimit:i}),d&&(0,r.createElement)("div",{className:"gp-rsvp-response__see-all"},(0,r.createElement)("a",{href:"#",onClick:e=>(e=>{e.preventDefault(),a(!1===n&&i)})(e)},c)))},g=({value:e,limit:t,responses:s=[]})=>{let n="";return"object"==typeof s&&void 0!==s[e]&&(s=[...s[e].responses],t&&(s=s.splice(0,t)),n=s.map(((e,t)=>{const{profile:s,name:n,photo:a,role:i}=e;let{guests:l}=e;return l=l?" +"+l+" guest(s)":"",(0,r.createElement)("div",{key:t,className:"gp-rsvp-response__item"},(0,r.createElement)("figure",{className:"gp-rsvp-response__member-avatar"},""!==s?(0,r.createElement)("a",{href:s},(0,r.createElement)("img",{alt:n,title:n,src:a})):(0,r.createElement)("img",{alt:n,title:n,src:a})),(0,r.createElement)("div",{className:"gp-rsvp-response__member-info"},(0,r.createElement)("div",{className:"gp-rsvp-response__member-name"},""!==s?(0,r.createElement)("a",{href:s,title:n},n):(0,r.createElement)("span",null,n)),(0,r.createElement)("div",{className:"gp-rsvp-response__member-role"},i),(0,r.createElement)("small",{className:"gp-rsvp-response__guests"},l)))}))),(0,r.createElement)(r.Fragment,null,"attending"===e&&0===n.length&&(0,r.createElement)("div",{className:"gp-rsvp-response__no-responses"},!1===v("eventDetails.hasEventPast")?(0,o.__)("No one is attending this event yet.","gatherpress"):(0,o.__)("No one went to this event.","gatherpress")),n)},_=({items:e,activeValue:t,limit:s=!1})=>{const n=v("eventDetails.postId"),[a,i]=(0,l.useState)(v("eventDetails.responses"));p({setRsvpResponse:i},n);const o=e.map(((e,n)=>{const{value:i}=e;return i===t?(0,r.createElement)("div",{key:n,className:"gp-rsvp-response__items",id:`gp-rsvp-${i}`,role:"tabpanel","aria-labelledby":`gp-rsvp-${i}-tab`},(0,r.createElement)(g,{value:i,limit:s,responses:a})):""}));return(0,r.createElement)("div",{className:"gp-rsvp-response__content"},o)},h=()=>{const e="attending",t=v("eventDetails.hasEventPast"),s=[{title:!1===t?(0,o.__)("Attending","gatherpress"):(0,o.__)("Went","gatherpress"),value:"attending"},{title:!1===t?(0,o.__)("Waiting List","gatherpress"):(0,o.__)("Wait Listed","gatherpress"),value:"waiting_list"},{title:!1===t?(0,o._x)("Not Attending","responded not attending","gatherpress"):(0,o.__)("Didn't Go","gatherpress"),value:"not_attending"}],[n,a]=(0,l.useState)(e),[i,c]=(0,l.useState)(8);return p({setRsvpStatus:a},v("eventDetails.postId")),s.some((e=>e.value===n))||a(e),(0,r.createElement)("div",{className:"gp-rsvp-response"},(0,r.createElement)(d,{items:s,activeValue:n,onTitleClick:(e,t)=>{e.preventDefault(),a(t)},rsvpLimit:i,setRsvpLimit:c,defaultLimit:8}),(0,r.createElement)(_,{items:s,activeValue:n,limit:i}))},f=window.wp.apiFetch;var E=s.n(f);const w=window.wp.coreData,b=()=>{var e;const t=v("eventDetails.responses"),s=v("eventDetails.postId"),[n,a]=(0,l.useState)(t),p=n.attending.responses,{userList:m}=(0,c.useSelect)((e=>{const{getEntityRecords:t}=e(w.store);return{userList:t("root","user",{per_page:-1})}}),[]),u=null!==(e=m?.reduce(((e,t)=>({...e,[t.username]:t})),{}))&&void 0!==e?e:{},d=(e,t="attending")=>{E()({path:v("urls.eventRestApi")+"/rsvp",method:"POST",data:{post_id:s,status:t,user_id:e,_wpnonce:v("misc.nonce")}}).then((e=>{a(e.responses),function(e,t){if("object"!=typeof GatherPress)return;const s="eventDetails.responses".split("."),n=s.pop();s.reduce(((e,t)=>{var s;return null!==(s=e[t])&&void 0!==s?s:e[t]={}}),GatherPress)[n]=t}(0,e.responses)}))};return(0,r.createElement)("div",{className:"gp-rsvp-response"},(0,r.createElement)(i.FormTokenField,{key:"query-controls-topics-select",label:(0,o.__)("Attendees","gatherpress"),value:p&&p.map((e=>({id:e.id,value:e.name}))),tokenizeOnSpace:!0,onChange:async e=>{e.length>p.length?e.forEach((e=>{u[e]&&d(u[e].id,"attending")})):p.forEach((t=>{!1===e.some((e=>e.id===t.id))&&d(t.id,"no_status")}))},suggestions:Object.keys(u),maxSuggestions:20}))},k=e=>{const{isSelected:t}=e,s=t?"none":"block";return(0,r.createElement)("div",{style:{position:"relative"}},e.children,(0,r.createElement)("div",{style:{position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:s}}))},y=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gatherpress/rsvp-response","version":"1.0.0","title":"RSVP Response","category":"gatherpress","icon":"groups","example":{},"description":"Displays a list of members who have confirmed their attendance for an event.","attributes":{"blockId":{"type":"string"},"content":{"type":"string"},"color":{"type":"string"}},"supports":{"html":false},"textdomain":"gatherpress","editorScript":"file:./index.js","style":"file:./style-index.css","viewScript":"file:./rsvp-response.js","render":"file:./render.php"}');(0,n.registerBlockType)(y,{edit:()=>{const e=wp.data.select("core").canUser("create","posts"),t=(0,a.useBlockProps)(),[s,n]=(0,l.useState)(!1);return(0,r.createElement)("div",{...t},s&&(0,r.createElement)(b,null),!s&&(0,r.createElement)(k,null,(0,r.createElement)(h,null)),e&&(0,r.createElement)(a.BlockControls,null,(0,r.createElement)(i.ToolbarGroup,null,(0,r.createElement)(i.ToolbarButton,{label:(0,o.__)("Edit","gatherpress"),text:s?(0,o.__)("Preview","gatherpress"):(0,o.__)("Edit","gatherpress"),onClick:e=>{e.preventDefault(),n(!s)}}))))},save:()=>null})}},s={};function n(e){var r=s[e];if(void 0!==r)return r.exports;var a=s[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,s,r,a)=>{if(!s){var i=1/0;for(c=0;c<e.length;c++){for(var[s,r,a]=e[c],l=!0,o=0;o<s.length;o++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](s[o])))?s.splice(o--,1):(l=!1,a<i&&(i=a));if(l){e.splice(c--,1);var p=r();void 0!==p&&(t=p)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[s,r,a]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={788:0,556:0};n.O.j=t=>0===e[t];var t=(t,s)=>{var r,a,[i,l,o]=s,p=0;if(i.some((t=>0!==e[t]))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(o)var c=o(n)}for(t&&t(s);p<i.length;p++)a=i[p],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},s=globalThis.webpackChunkgatherpress=globalThis.webpackChunkgatherpress||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var r=n.O(void 0,[556],(()=>n(5527)));r=n.O(r)})();