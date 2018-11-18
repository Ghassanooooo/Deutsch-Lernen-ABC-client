(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,a){e.exports=a(75)},47:function(e,t,a){},49:function(e,t,a){},73:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"signup",function(){return k}),a.d(n,"login",function(){return A}),a.d(n,"logout",function(){return _}),a.d(n,"currentUser",function(){return x}),a.d(n,"getLevels",function(){return H}),a.d(n,"addLevel",function(){return L}),a.d(n,"getSubjects",function(){return R}),a.d(n,"addSubject",function(){return F}),a.d(n,"getSubjectsContent",function(){return P}),a.d(n,"addSubjectCountent",function(){return B});var r=a(0),c=a.n(r),s=a(31),o=a.n(s),l=a(78),i=a(7),u=a(18),p=a(34),h=a(9),m={user:null,token:null,loading:!1},b={levels:null,loading:!1},d={subjects:null,loading:!1},E={subjectsCountent:null,loading:!1},f=Object(u.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CURRENT_USER":return Object(h.a)({},e,{user:t.userId,token:t.token});case"LOADING":return Object(h.a)({},e,{loading:!0});case"LOGIN_SUCCEED":case"LOGIN_FAILED":return Object(h.a)({},e,{loading:!1});case"LOGOUT_SUCCEED":return Object(h.a)({},e,{loading:!1,user:null,token:null});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;case"CLEAR_ERRORS":return null;default:return e}},levels:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_LEVELS_SUCCEED":return Object(h.a)({},e,{levels:t.payload,loading:!1});case"LOADING":return Object(h.a)({},e,{loading:!0});case"FETCH_LEVELS_FAILED":return Object(h.a)({},e,{loading:!1});default:return e}},subjects:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_SUBJECT_SUCCEED":return Object(h.a)({},e,{subjects:t.payload,loading:!1});case"LOADING":return Object(h.a)({},e,{loading:!0});case"FETCH_SUBJECT_FAILED":return Object(h.a)({},e,{loading:!1});default:return e}},subjectsCountent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_SUBJECT_CONTENT_SUCCEED":return Object(h.a)({},e,{subjectsCountent:t.payload,loading:!1});case"LOADING":return Object(h.a)({},e,{loading:!0});case"FETCH_SUBJECT_CONTENT_FAILED":return Object(h.a)({},e,{loading:!1});default:return e}}}),g=(a(47),a(2)),v=a(3),j=a(5),O=a(4),y=a(6),C=(a(49),a(8)),S=a.n(C),N=a(16),w=a(12),D=a.n(w),k=function(e,t){return function(){var a=Object(N.a)(S.a.mark(function a(n){return S.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n(T()),a.prev=1,a.next=4,D.a.post("https://deutsch-lernen-abc.herokuapp.com/api/user/signup",e);case 4:a.sent&&(n(I()),t.push("/login")),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(1),n({type:"LOGIN_FAILED"}),n({type:"GET_ERRORS",payload:a.t0.response.data.error||null});case 12:case"end":return a.stop()}},a,this,[[1,8]])}));return function(e){return a.apply(this,arguments)}}()},A=function(e,t){return function(){var a=Object(N.a)(S.a.mark(function a(n){var r;return S.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n(T()),a.prev=1,a.next=4,D.a.post("https://deutsch-lernen-abc.herokuapp.com/api/user/login",e);case 4:(r=a.sent)&&(console.log(r),n(I()),localStorage.setItem("token",r.data.token),localStorage.setItem("expirationDate",r.data.expirationDate),localStorage.setItem("userId",r.data.userId),n({type:"LOGIN_SUCCEED"}),t.push("/")),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(1),n({type:"LOGIN_FAILED"}),n({type:"GET_ERRORS",payload:a.t0.response.data.error});case 12:case"end":return a.stop()}},a,this,[[1,8]])}));return function(e){return a.apply(this,arguments)}}()},_=function(){return function(e){localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("expirationDate"),e({type:"LOGOUT_SUCCEED"})}},x=function(){return{type:"CURRENT_USER",userId:localStorage.getItem("userId"),token:localStorage.getItem("token")}},T=function(){return{type:"LOADING"}},I=function(){return{type:"CLEAR_ERRORS"}},H=function(){return function(){var e=Object(N.a)(S.a.mark(function e(t){var a;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(G()),e.prev=1,e.next=4,D.a.get("https://deutsch-lernen-abc.herokuapp.com/api/level");case 4:(a=e.sent)&&t({type:"FETCH_LEVELS_SUCCEED",payload:a.data}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"FETCH_LEVELS_FAILED"}),t({type:"GET_ERRORS",payload:e.t0.response.data.error||null});case 12:case"end":return e.stop()}},e,this,[[1,8]])}));return function(t){return e.apply(this,arguments)}}()},L=function(e,t){return function(){var a=Object(N.a)(S.a.mark(function a(n){return S.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,D.a.post("https://deutsch-lernen-abc.herokuapp.com/api/level/add",e);case 3:a.sent&&t.push("/"),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),n({type:"GET_ERRORS",payload:a.t0.response.data.error||null});case 10:case"end":return a.stop()}},a,this,[[0,7]])}));return function(e){return a.apply(this,arguments)}}()},G=function(){return{type:"LOADING"}},R=function(e){return function(){var t=Object(N.a)(S.a.mark(function t(a){var n;return S.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a(U()),console.log(e),t.prev=2,t.next=5,D.a.get("https://deutsch-lernen-abc.herokuapp.com/api/subject/"+e);case 5:(n=t.sent)&&(console.log(n.data),a({type:"FETCH_SUBJECT_SUCCEED",payload:n.data})),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(2),a({type:"FETCH_SUBJECT_FAILED"}),a({type:"GET_ERRORS",payload:t.t0.response.data.error||null});case 13:case"end":return t.stop()}},t,this,[[2,9]])}));return function(e){return t.apply(this,arguments)}}()},F=function(e,t,a){return function(){var n=Object(N.a)(S.a.mark(function n(r){var c;return S.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,D.a.post("https://deutsch-lernen-abc.herokuapp.com/api/subject/add/"+t,e);case 3:(c=n.sent)&&a.push("/subject/".concat(c.data._id)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),r({type:"GET_ERRORS",payload:n.t0.response.data.error||null});case 10:case"end":return n.stop()}},n,this,[[0,7]])}));return function(e){return n.apply(this,arguments)}}()},U=function(){return{type:"LOADING"}},P=function(e){return function(){var t=Object(N.a)(S.a.mark(function t(a){var n;return S.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a(J()),t.prev=1,t.next=4,D.a.get("https://deutsch-lernen-abc.herokuapp.com/api/subjectContent/"+e);case 4:(n=t.sent)&&a({type:"FETCH_SUBJECT_CONTENT_SUCCEED",payload:n.data}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:"FETCH_SUBJECT_CONTENT_FAILED"}),a({type:"GET_ERRORS",payload:t.t0.response.data.error||null});case 12:case"end":return t.stop()}},t,this,[[1,8]])}));return function(e){return t.apply(this,arguments)}}()},B=function(e,t,a){return function(){var a=Object(N.a)(S.a.mark(function a(n){return S.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:D.a.post("https://deutsch-lernen-abc.herokuapp.com/api/CountentContent/add/5bf180bae30f0300168d98f3",t).then(function(e){return console.log(e.data)}),console.log(t),console.log(e);case 3:case"end":return a.stop()}},a,this)}));return function(e){return a.apply(this,arguments)}}()},J=function(){return{type:"LOADING"}},V=a(76),Y=function(e){function t(){return Object(g.a)(this,t),Object(j.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.props.getLevels()}},{key:"render",value:function(){this.props.errors;return c.a.createElement(r.Fragment,null,c.a.createElement(V.a,{to:"/level/add-level",className:"btn btn-primary"},"Add New Level"),this.props.levels&&this.props.levels.map(function(e){return c.a.createElement("div",{key:e._id,className:"card text-center",style:{marginBottom:"10px"}},c.a.createElement("div",{className:"card-header"},e.titeldeutsch," | ",e.titelarabisch),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",{className:"card-text"},e.beschreibungdeutsch),c.a.createElement("p",{className:"card-text"},e.beschreibungarabisch),c.a.createElement(V.a,{to:"/subject/"+e._id,className:"btn btn-primary"},"Go to the class")))}))}}]),t}(r.Component),M=Object(i.b)(function(e){return{errors:e.errors,levels:e.levels.levels}},n)(Y),q=a(80),W=function(e){function t(){return Object(g.a)(this,t),Object(j.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.props.match.params.id&&this.props.getSubjects(this.props.match.params.id)}},{key:"render",value:function(){this.props.errors;return c.a.createElement(r.Fragment,null,this.props.match.params.id&&c.a.createElement(V.a,{to:"/add-new-subject/"+this.props.match.params.id,className:"btn btn-primary mr-3 mt-5"},"add"),c.a.createElement("div",{className:"card mt-5"},c.a.createElement("ul",{className:"list-group list-group-flush"},this.props.subjects&&this.props.subjects.map(function(e){return c.a.createElement("li",{key:e._id,className:"list-group-item"},c.a.createElement(V.a,{to:"/subject/subject-content/".concat(e._id)},e.titeldeutsch," || ",e.titelarabisch))}))))}}]),t}(r.Component),X=Object(i.b)(function(e){return{errors:e.errors,subjects:e.subjects.subjects}},n)(Object(q.a)(W)),$=function(e){function t(){return Object(g.a)(this,t),Object(j.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.props.match.params.id&&this.props.getSubjectsContent(this.props.match.params.id)}},{key:"render",value:function(){this.props.errors;return c.a.createElement(r.Fragment,null,c.a.createElement(V.a,{to:"/add-edit-new-subject-Countent/"+this.props.match.params.id,className:"btn btn-primary mr-3 mt-5"},"add & Edit"),this.props.subjectsCountent&&this.props.match.params.id&&c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},this.props.subjectsCountent.beschreibung),c.a.createElement("div",{className:"card-body"},c.a.createElement("blockquote",{className:"blockquote mb-0"},this.props.subjectsCountent.inhalten&&this.props.subjectsCountent.inhalten.map(function(e){return c.a.createElement("p",{key:e._id},e.deutsch," | ",e.arabisch)}),this.props.subjectsCountent.beispielen&&this.props.subjectsCountent.beispielen.map(function(e){return c.a.createElement("footer",{key:e._id,className:"blockquote-footer"},e.deutsch," |",c.a.createElement("cite",{title:"Source Title"},e.arabisch))})))))}}]),t}(r.Component),z=Object(i.b)(function(e){return{errors:e.errors,subjectsCountent:e.subjectsCountent.subjectsCountent}},n)(Object(q.a)($)),K=a(15),Q=function(e){function t(){return Object(g.a)(this,t),Object(j.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this,t=null;return this.props.errors&&(t=this.props.errors.find(function(t){return t.param===e.props.name})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,this.props.label),c.a.createElement("input",{value:this.props.value,name:this.props.name,onChange:this.props.onChange,type:this.props.type||"text",className:t?"is-invalid form-control":"form-control",placeholder:this.props.placeholder}),t&&c.a.createElement("div",{className:"invalid-feedback"},t.msg))}}]),t}(r.Component),Z=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(j.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).state={titeldeutsch:"",titelarabisch:""},a.onSubmitHandler=function(e){e.preventDefault(),a.props.addSubject({titeldeutsch:a.state.titeldeutsch,titelarabisch:a.state.titelarabisch},a.props.match.params.id,a.props.history),console.log(a.props.match.params.id)},a.onChangeHandler=function(e){a.setState(Object(K.a)({},e.target.name,e.target.value))},a}return Object(y.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){this.props.errors;return c.a.createElement(r.Fragment,null,c.a.createElement("h3",null,"Add a new Subject"),this.props.match.params.id&&c.a.createElement("form",{onSubmit:this.onSubmitHandler},c.a.createElement(Q,{name:"titeldeutsch",value:this.state.titeldeutsch,onChange:this.onChangeHandler,label:"German Title",placeholder:"Add Title in German"}),c.a.createElement(Q,{name:"titelarabisch",value:this.state.titelarabisch,onChange:this.onChangeHandler,label:"Arabic Title",placeholder:"Add Title in Arabic"}),c.a.createElement("button",{type:"submit",className:"btn btn-primary"},"ADD Subject")))}}]),t}(r.Component),ee=Object(i.b)(function(e){return{errors:e.errors}},n)(Object(q.a)(Z)),te=function(e){function t(){return Object(g.a)(this,t),Object(j.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return c.a.createElement(r.Fragment,null,c.a.createElement("h3",null,"Edit a exist object"),c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{for:"formGroupExampleInput"},"Object Title"),c.a.createElement("input",{type:"text",className:"form-control",id:"formGroupExampleInput",placeholder:"Edit the title"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{for:"formGroupExampleInput2"},"the object in German"),c.a.createElement("input",{type:"text",className:"form-control",id:"formGroupExampleInput2",placeholder:"Edit the object in german"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{for:"formGroupExampleInput2"},"the object in Arabic"),c.a.createElement("input",{type:"text",className:"form-control",id:"formGroupExampleInput2",placeholder:"Edit the object in Arabic"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{for:"formGroupExampleInput2"},"Description in Arabic"),c.a.createElement("input",{type:"text",className:"form-control",id:"formGroupExampleInput2",placeholder:"Edit Description in Arabic"})),c.a.createElement("button",{type:"submit",className:"btn btn-primary"},"EDIT")))}}]),t}(r.Component),ae=a(79),ne=a(77),re=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(j.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).state={titeldeutsch:"",beschreibungdeutsch:"",titelarabisch:"",beschreibungarabisch:""},a.onSubmitHandler=function(e){e.preventDefault(),a.props.addLevel({titeldeutsch:a.state.titeldeutsch,beschreibungdeutsch:a.state.beschreibungdeutsch,titelarabisch:a.state.titelarabisch,beschreibungarabisch:a.state.beschreibungarabisch},a.props.history)},a.onChangeHandler=function(e){a.setState(Object(K.a)({},e.target.name,e.target.value))},a}return Object(y.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.props.errors;return c.a.createElement(r.Fragment,null,c.a.createElement("h3",null,"Add New Level"),c.a.createElement("form",{onSubmit:this.onSubmitHandler},c.a.createElement(Q,{name:"titeldeutsch",value:this.state.titeldeutsch,onChange:this.onChangeHandler,errors:e,label:"German Title",placeholder:"Add Title in German"}),c.a.createElement(Q,{name:"beschreibungdeutsch",value:this.state.beschreibungdeutsch,onChange:this.onChangeHandler,errors:e,label:"German Discription",placeholder:"Add Discription in German"}),c.a.createElement(Q,{name:"titelarabisch",value:this.state.titelarabisch,onChange:this.onChangeHandler,errors:e,label:"Arabic Title",placeholder:"Add Title in Arabic"}),c.a.createElement(Q,{name:"beschreibungarabisch",value:this.state.beschreibungarabisch,onChange:this.onChangeHandler,errors:e,label:"Arabic Discription",placeholder:"Add Discription in Arabic"}),c.a.createElement("button",{type:"submit",className:"btn btn-primary"},"ADD NEW LEVEL")))}}]),t}(r.Component),ce=Object(i.b)(function(e){return{errors:e.errors}},n)(Object(q.a)(re)),se=(a(73),function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(j.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).logoutHandler=function(){a.props.logout(),a.props.history.push("/")},a}return Object(y.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return c.a.createElement("button",{type:"button",onClick:this.logoutHandler,className:"btn btn-primary"},"Logout")}}]),t}(r.Component)),oe=Object(i.b)(null,n)(Object(q.a)(se)),le=function(e){function t(){return Object(g.a)(this,t),Object(j.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return c.a.createElement("nav",{className:"navbar navbar-expand-lg bg-secondary navbar-light "},c.a.createElement("div",{className:"container"},c.a.createElement(V.a,{className:"navbar-brand",to:"/"},"Navbar"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse NavigationFlexFix",id:"navbarNavDropdown"},c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(V.a,{className:"nav-link",to:"/login"},"login")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(V.a,{className:"nav-link",to:"/signup"},"Sign up")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(oe,null))))))}}]),t}(r.Component),ie=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(j.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.onSubmitHandler=function(e){e.preventDefault(),a.props.login({email:a.state.email,password:a.state.password},a.props.history)},a.onChangeHandler=function(e){a.setState(Object(K.a)({},e.target.name,e.target.value))},a}return Object(y.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.props.errors;return console.log(e),c.a.createElement(r.Fragment,null,c.a.createElement("h3",null,"Login"),c.a.createElement("form",{onSubmit:this.onSubmitHandler},c.a.createElement(Q,{value:this.state.email,name:"email",label:"Email",type:"email",onChange:this.onChangeHandler,errors:e,placeholder:"Your Email"}),c.a.createElement(Q,{value:this.state.password,name:"password",label:"Password",type:"password",placeholder:"Your Password",onChange:this.onChangeHandler,errors:e}),c.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Login")))}}]),t}(r.Component),ue=Object(i.b)(function(e){return{errors:e.errors}},n)(Object(q.a)(ie)),pe=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(j.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",email:"",password:"",confirmPassword:""},a.onSubmitHandler=function(e){e.preventDefault(),a.props.signup({username:a.state.username,email:a.state.email,password:a.state.password,confirmPassword:a.state.confirmPassword},a.props.history)},a.onChangeHandler=function(e){a.setState(Object(K.a)({},e.target.name,e.target.value))},a}return Object(y.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.props.errors;return console.log(e),c.a.createElement(r.Fragment,null,c.a.createElement("h3",null,"Signup"),c.a.createElement("form",{onSubmit:this.onSubmitHandler},c.a.createElement(Q,{name:"username",value:this.state.username,onChange:this.onChangeHandler,label:"User Name",placeholder:"Your user Name",errors:e}),c.a.createElement(Q,{name:"email",value:this.state.email,onChange:this.onChangeHandler,label:"Email",type:"email",placeholder:"Your Email",errors:e}),c.a.createElement(Q,{value:this.state.password,onChange:this.onChangeHandler,label:"Password",name:"password",type:"password",placeholder:"Your Password",errors:e}),c.a.createElement(Q,{value:this.state.confirmPassword,name:"confirmPassword",onChange:this.onChangeHandler,label:"Confirm Password",type:"password",placeholder:"Confirm Password",errors:e}),c.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Signup")))}}]),t}(r.Component),he=Object(i.b)(function(e){return{errors:e.errors}},n)(Object(q.a)(pe)),me=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(j.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).state={beschreibung:"",inhaltenDeutsch:"",inhaltenArabisch:"",beispielenDeutsch:"",beispielenArabisch:""},a.onSubmitHandler=function(e){e.preventDefault();var t={beschreibung:a.state.beschreibung,inhaltenDeutsch:a.state.inhaltenDeutsch,inhaltenArabisch:a.state.inhaltenArabisch,beispielenDeutsch:a.state.beispielenDeutsch,beispielenArabisch:a.state.beispielenArabisch};a.props.addSubjectCountent(a.props.match.params.id,t,a.props.history),console.log(a.props.match.params.id)},a.onChangeHandler=function(e){a.setState(Object(K.a)({},e.target.name,e.target.value))},a}return Object(y.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){this.props.errors;return c.a.createElement(r.Fragment,null,c.a.createElement("h3",null,"Add a new Subject Countent"),this.props.match.params.id&&c.a.createElement("form",{onSubmit:this.onSubmitHandler},c.a.createElement(Q,{name:"beschreibung",value:this.state.beschreibung,onChange:this.onChangeHandler,label:"Description *",placeholder:"Add some Description"}),c.a.createElement(Q,{name:"inhaltenDeutsch",value:this.state.inhaltenDeutsch,onChange:this.onChangeHandler,label:"Subject Countent German * Split the content by ,",placeholder:"Split the content by ,"}),c.a.createElement(Q,{name:"inhaltenArabisch",value:this.state.inhaltenArabisch,onChange:this.onChangeHandler,label:"Subject Countent Arabic * Split the content by ,",placeholder:"Split the content by ,"}),c.a.createElement(Q,{name:"beispielenDeutsch",value:this.state.beispielenDeutsch,onChange:this.onChangeHandler,label:"Examples German * Split the content by ,",placeholder:"Split the content by ,"}),c.a.createElement(Q,{name:"beispielenArabisch",value:this.state.beispielenArabisch,onChange:this.onChangeHandler,label:"Examples Arabic * Split the content by ,",placeholder:"Split the content by ,"}),c.a.createElement("button",{type:"submit",className:"btn btn-primary"},"ADD Subject Countent")))}}]),t}(r.Component),be=Object(i.b)(function(e){return{errors:e.errors}},n)(Object(q.a)(me)),de=function(e){function t(){return Object(g.a)(this,t),Object(j.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(le,null),c.a.createElement(ae.a,null,c.a.createElement("div",{className:"container"},c.a.createElement(ne.a,{path:"/",exact:!0,component:M}),c.a.createElement(ne.a,{path:"/subject/:id",exact:!0,component:X}),c.a.createElement(ne.a,{path:"/subject/subject-content/:id",exact:!0,component:z}),c.a.createElement(ne.a,{path:"/level/add-level",exact:!0,component:ce}),c.a.createElement(ne.a,{path:"/login",exact:!0,component:ue}),c.a.createElement(ne.a,{path:"/signup",exact:!0,component:he}),c.a.createElement(ne.a,{path:"/add-new-subject/:id",exact:!0,component:ee}),c.a.createElement(ne.a,{path:"/add-edit-new-subject-Countent/:id",exact:!0,component:be}),c.a.createElement(ne.a,{path:"/edit-subject",exact:!0,component:te}))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ee=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,fe=Object(u.e)(f,Ee(Object(u.a)(p.a)));o.a.render(c.a.createElement(i.a,{store:fe},c.a.createElement(l.a,null,c.a.createElement(de,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,2,1]]]);
//# sourceMappingURL=main.f4d48b42.chunk.js.map