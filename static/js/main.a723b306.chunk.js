(this.webpackJsonpenotebook=this.webpackJsonpenotebook||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(19),r=a.n(c),l=(a(26),a(8)),i=(a(27),a(10)),o=a(2),d=a(0),b=function(){var e=Object(o.g)(),t=Object(o.f)();return Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(i.b,{className:"navbar-brand",to:"/",children:"eNotebook"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(i.b,{className:"nav-link ".concat("/"===e.pathname?"active":""),"aria-current":"page",to:"/",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(i.b,{className:"nav-link ".concat("/about"===e.pathname?"active":""),to:"/about",children:"About"})})]}),localStorage.getItem("token")?Object(d.jsx)("button",{onClick:function(){localStorage.removeItem("token"),t.push("/login")},className:"btn btn-primary",children:"Logout"}):Object(d.jsxs)("form",{className:"d-flex",children:[Object(d.jsx)(i.b,{className:"btn btn-primary mx-1",to:"/login",role:"button",children:"Login"}),Object(d.jsx)(i.b,{className:"btn btn-primary mx-1",to:"/signup",role:"button",children:"Signup"})]})]})]})})},j=a(11),m=a(9),u=Object(n.createContext)(),h=function(e){var t=Object(n.useContext)(u).deleteNote,a=e.note,s=e.updateNote;return Object(d.jsx)("div",{className:"col-md-3",children:Object(d.jsx)("div",{className:"card my-3",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsxs)("div",{className:"d-flex align-items-center",children:[Object(d.jsx)("h5",{className:"card-title",children:a.title}),Object(d.jsx)("i",{className:"far fa-trash-alt mx-2",onClick:function(){t(a._id),e.showAlert("Deleted Successfully","success")}}),Object(d.jsx)("i",{className:"far fa-edit mx-2",onClick:function(){s(a)}})]}),Object(d.jsx)("p",{className:"card-text",children:a.description})]})})})},p=function(e){var t=Object(n.useContext)(u).addNote,a=Object(n.useState)({title:"",description:"",tag:""}),s=Object(l.a)(a,2),c=s[0],r=s[1],i=function(e){r(Object(m.a)(Object(m.a)({},c),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(d.jsxs)("div",{className:"container my-3",children:[Object(d.jsx)("h2",{children:"Add a Note"}),Object(d.jsxs)("form",{className:"my-3",children:[Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"title",className:"form-label",children:"Title"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"title",name:"title","aria-describedby":"emailHelp",value:c.title,onChange:i,minLength:5,required:!0})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"description",className:"form-label",children:"Description"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"description",name:"description",value:c.description,onChange:i,minLength:5,required:!0})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"tag",className:"form-label",children:"Tag"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"tag",name:"tag",value:c.tag,onChange:i,minLength:5,required:!0})]}),Object(d.jsx)("button",{disabled:c.title.length<5||c.description.length<5,type:"submit",className:"btn btn-primary",onClick:function(a){a.preventDefault(),t(c.title,c.description,c.tag),r({title:"",description:"",tag:""}),e.showAlert("Added Successfully","success")},children:"Add Note"})]})]})},x=function(e){var t=Object(n.useContext)(u),a=t.notes,s=t.getNotes,c=t.editNote,r=Object(o.f)();Object(n.useEffect)((function(){localStorage.getItem("token")?s():r.push("/login")}),[]);var i=Object(n.useRef)(null),b=Object(n.useRef)(null),x=Object(n.useState)({id:"",etitle:"",edescription:"",etag:""}),O=Object(l.a)(x,2),f=O[0],g=O[1],N=function(e){i.current.click(),g({id:e._id,etitle:e.title,edescription:e.description,etag:e.tag})},v=function(e){g(Object(m.a)(Object(m.a)({},f),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(p,{showAlert:e.showAlert}),Object(d.jsx)("button",{ref:i,type:"button",className:"btn btn-primary d-none","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:"Launch demo modal"}),Object(d.jsx)("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(d.jsx)("div",{className:"modal-dialog",children:Object(d.jsxs)("div",{className:"modal-content",children:[Object(d.jsxs)("div",{className:"modal-header",children:[Object(d.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Edit Note"}),Object(d.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(d.jsx)("div",{className:"modal-body",children:Object(d.jsxs)("form",{className:"my-3",children:[Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"title",className:"form-label",children:"Title"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"etitle",name:"etitle",value:f.etitle,"aria-describedby":"emailHelp",onChange:v,minLength:5,required:!0})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"description",className:"form-label",children:"Description"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"edescription",name:"edescription",value:f.edescription,onChange:v,minLength:5,required:!0})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"tag",className:"form-label",children:"Tag"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"etag",name:"etag",value:f.etag,onChange:v})]})]})}),Object(d.jsxs)("div",{className:"modal-footer",children:[Object(d.jsx)("button",{ref:b,type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(d.jsx)("button",{disabled:f.etitle.length<5||f.edescription.length<5,onClick:function(t){c(f.id,f.etitle,f.edescription,f.etag),b.current.click(),e.showAlert("Updated Successfully","success")},type:"button",className:"btn btn-primary",children:"Update Note"})]})]})})}),Object(d.jsxs)("div",{className:"row my-3",children:[Object(d.jsx)("h2",{children:"You Notes"}),Object(d.jsx)("div",{className:"container mx-2",children:0===a.length&&"No notes to display"}),a.map((function(t){return Object(d.jsx)(h,{updateNote:N,note:t,showAlert:e.showAlert},t._id)}))]})]})},O=function(e){var t=e.showAlert;return Object(d.jsx)("div",{children:Object(d.jsx)(x,{showAlert:t})})},f=function(){return Object(d.jsx)("div",{children:"This is About page"})},g=a(4),N=a.n(g),v=a(12),y=function(e){var t="http://localhost:5000",a=Object(n.useState)([]),s=Object(l.a)(a,2),c=s[0],r=s[1],i=function(){var e=Object(v.a)(N.a.mark((function e(){var a,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/fetchallnotes"),{method:"GET",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")}});case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(v.a)(N.a.mark((function e(a,n,s){var l,i;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/addnote"),{method:"POST",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")},body:JSON.stringify({title:a,description:n,tag:s})});case 2:return l=e.sent,e.next=5,l.json();case 5:i=e.sent,r(c.concat(i));case 7:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),b=function(){var e=Object(v.a)(N.a.mark((function e(a){var n,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/deletenote/").concat(a),{method:"DELETE",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")}});case 2:n=e.sent,n.json(),s=c.filter((function(e){return e._id!==a})),r(s);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(v.a)(N.a.mark((function e(a,n,s,l){var i,o,d;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/updatenote/").concat(a),{method:"PUT",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")},body:JSON.stringify({title:n,description:s,tag:l})});case 2:return i=e.sent,e.next=5,i.json();case 5:e.sent,o=JSON.parse(JSON.stringify(c)),d=0;case 8:if(!(d<o.length)){e.next=18;break}if(o[d]._id!==a){e.next=15;break}return o[d].title=n,o[d].description=s,o[d].tag=l,e.abrupt("break",18);case 15:d++,e.next=8;break;case 18:r(o);case 19:case"end":return e.stop()}}),e)})));return function(t,a,n,s){return e.apply(this,arguments)}}();return Object(d.jsx)(u.Provider,{value:{notes:c,addNote:o,deleteNote:b,editNote:j,getNotes:i},children:e.children})};var w=function(e){return Object(d.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(d.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(d.jsx)("strong",{children:function(e){"danger"===e&&(e="error");var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})})},k=function(e){var t=Object(n.useState)({name:"",email:"",password:"",cpassword:""}),a=Object(l.a)(t,2),s=a[0],c=a[1],r=Object(o.f)(),i=function(){var t=Object(v.a)(N.a.mark((function t(a){var n,c,l,i,o;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=s.name,c=s.email,l=s.password,t.next=4,fetch("http://localhost:5000/api/auth/createUser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,email:c,password:l})});case 4:return i=t.sent,t.next=7,i.json();case 7:(o=t.sent).success?(localStorage.setItem("token",o.authtoken),r.push("/"),e.showAlert("Account Created Successfully","success")):e.showAlert(o.error,"danger");case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(e){c(Object(m.a)(Object(m.a)({},s),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(d.jsxs)("div",{className:"container mt-2",children:[Object(d.jsx)("h2",{className:"my-3",children:"Create an account to use eNotebook"}),Object(d.jsxs)("form",{onSubmit:i,children:[Object(d.jsxs)("div",{className:"my-3",children:[Object(d.jsx)("label",{htmlFor:"name",className:"form-label",children:"Name"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"name","aria-describedby":"emailHelp",onChange:b,name:"name"})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email address"}),Object(d.jsx)("input",{type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp",onChange:b,name:"email"}),Object(d.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),Object(d.jsx)("input",{type:"password",className:"form-control",id:"password",onChange:b,name:"password",required:!0,minLength:5})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"cpassword",className:"form-label",children:"Confirm Password"}),Object(d.jsx)("input",{type:"password",className:"form-control",id:"cpassword",onChange:b,name:"cpassword",required:!0,minLength:5})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})},S=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(l.a)(t,2),s=a[0],c=a[1],r=Object(o.f)(),i=function(){var t=Object(v.a)(N.a.mark((function t(a){var n,c;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,fetch("http://localhost:5000/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s.email,password:s.password})});case 3:return n=t.sent,t.next=6,n.json();case 6:(c=t.sent).success?(localStorage.setItem("token",c.authtoken),r.push("/"),e.showAlert("Logged in Successfully","success")):e.showAlert(c.error,"danger");case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(e){c(Object(m.a)(Object(m.a)({},s),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(d.jsxs)("div",{className:"mt-3",children:[Object(d.jsx)("h2",{children:"Login to continue to eNotebook"}),Object(d.jsxs)("form",{onSubmit:i,children:[Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email address"}),Object(d.jsx)("input",{type:"email",className:"form-control",value:s.email,onChange:b,id:"email",name:"email","aria-describedby":"emailHelp"}),Object(d.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),Object(d.jsx)("input",{type:"password",className:"form-control",value:s.password,onChange:b,name:"password",id:"password"})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})};var C=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],s=t[1],c=function(e,t){s({msg:e,type:t}),setTimeout((function(){s(null)}),1500)};return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(y,{children:Object(d.jsxs)(i.a,{children:[Object(d.jsx)(b,{}),Object(d.jsx)(w,{alert:a}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",children:Object(d.jsx)(O,{showAlert:c})}),Object(d.jsx)(o.a,{exact:!0,path:"/about",children:Object(d.jsx)(f,{})}),Object(d.jsx)(o.a,{exact:!0,path:"/login",children:Object(d.jsx)(S,{showAlert:c})}),Object(d.jsx)(o.a,{exact:!0,path:"/signup",children:Object(d.jsx)(k,{showAlert:c})})]})})]})})})};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.a723b306.chunk.js.map