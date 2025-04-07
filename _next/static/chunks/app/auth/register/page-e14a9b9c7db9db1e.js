(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[983],{2181:(e,a,s)=>{"use strict";s.d(a,{p:()=>l});var r=s(5155),t=s(2596),o=s(8740),n=s.n(o);let l=e=>{let{label:a,className:s,error:o,icon:l,...i}=e;return(0,r.jsxs)("label",{className:n().inputWrapper,children:[(0,r.jsx)("div",{className:n().label,children:a}),(0,r.jsxs)("div",{className:n().wrapper,children:[(0,r.jsx)("input",{className:(0,t.A)(n().input,s),...i}),(0,r.jsx)("div",{className:n().icon,children:l})]}),o&&(0,r.jsx)("div",{className:n().error,children:(0,r.jsx)("span",{children:o})})]})}},3294:(e,a,s)=>{"use strict";s.d(a,{n:()=>o});var r=s(5453),t=s(6786);let o=(0,r.v)((0,t.Zr)(e=>({token:null,error:null,loading:!1,restoreStep:1,setRestoreStep:a=>{e({restoreStep:a})},login:async a=>{let{email:s,password:r}=a;e({loading:!0});try{let a=await new Promise((e,a)=>{setTimeout(()=>{"user@example.com"===s&&"password123"===r?e({token:"fake-jwt-token"}):a("Invalid email or password")},1e3)});e({token:a.token,loading:!1})}catch(e){console.error(e)}},registration:async a=>{let{email:s,password:r}=a;e({loading:!0});try{let a=await new Promise((e,a)=>{setTimeout(()=>{"user@example.com"===s&&"password123"===r?e({token:"fake-jwt-token"}):a("Invalid email or password")},1e3)});e({token:a.token,loading:!1})}catch(e){console.error(e)}},restore:async(e,a)=>{try{let s=await new Promise((a,s)=>{setTimeout(()=>{e?a({data:"Password reset confirmation code was sent",status:200}):s({data:"Email is not registered",status:500})},1e3)});200===s.status&&(null==a||a())}catch(e){console.error(e)}},confirmRestore:async(e,a)=>{try{let s=await new Promise((a,s)=>{setTimeout(()=>{console.log(e,"code"),"111111"===e?a({data:"Success",status:200}):s({data:"Incorrect code",status:500})},1e3)});200===s.status&&(null==a||a())}catch(e){console.error(e)}},changePassword:async(e,a)=>{try{let s=await new Promise((a,s)=>{setTimeout(()=>{e?a({data:"password changed",status:200}):s({data:"error while change password",status:500})},1e3)});200===s.status&&(null==a||a())}catch(e){console.error(e)}},logout:async()=>{console.log("Logout"),e({token:null})}}),{name:"auth"}))},4257:(e,a,s)=>{Promise.resolve().then(s.bind(s,4283))},4283:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>w});var r=s(5155),t=s(6874),o=s.n(t),n=s(2181),l=s(4170),i=s(5442),c=s(3294),d=s(9694),u=s(7129);let p=u.Ik({email:u.Yj().email("Must be a valid email address").required("This field is required"),password:u.Yj().min(8,"Must be at least 8 characters long").required("This field is required"),repeatPassword:u.Yj().oneOf([u.KR("password")],"Passwords must match").min(8,"Must be at least 8 characters long").required("This field is required")}),_=()=>{let{registration:e}=(0,c.n)(),{handleSubmit:a,handleChange:s,errors:r}=(0,d.Wx)({initialValues:{email:"",password:"",repeatPassword:""},onSubmit:async a=>{e(a)},validationSchema:p});return{errors:r,handleSubmit:a,handleChange:s}};var h=s(5910),m=s.n(h);let w=()=>{let{handleChange:e,handleSubmit:a,errors:s}=_();return(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:m().header,children:"Sign up"}),(0,r.jsxs)("form",{className:m().form,onSubmit:a,children:[(0,r.jsx)(n.p,{error:s.email,type:"email",label:"Email",icon:(0,r.jsx)(l.A,{}),placeholder:"Type your username",name:"email",onChange:e}),(0,r.jsx)(n.p,{error:s.password,type:"password",label:"Password",icon:(0,r.jsx)(i.A,{}),placeholder:"Type your password",name:"password",onChange:e}),(0,r.jsx)(n.p,{error:s.repeatPassword,type:"password",label:"Repeat password",icon:(0,r.jsx)(i.A,{}),placeholder:"Type your password",name:"repeatPassword",onChange:e}),(0,r.jsx)("div",{className:m().btnWrapper,children:(0,r.jsx)("button",{type:"submit",className:m().btn,children:"Sign up"})}),(0,r.jsxs)("div",{className:m().nav,children:[(0,r.jsx)("div",{children:"Already have an account?"}),(0,r.jsx)(o(),{href:"/auth/login",className:m().link,children:"Login"})]})]})]})}},5910:e=>{e.exports={layout:"auth_layout__0g7RT",absolute:"auth_absolute__g9GYX",firstBlock:"auth_firstBlock__CBDBx",secondBlock:"auth_secondBlock__CIfAb",thirdBlock:"auth_thirdBlock__DMgH8",card:"auth_card__3UHkg",forgot:"auth_forgot__22uT5",link:"auth_link__cZ_Ll",btnWrapper:"auth_btnWrapper__VQdna",btn:"auth_btn__P4v3q",nav:"auth_nav__9sQo5",header:"auth_header__FcAqJ",form:"auth_form__FcSZa",glowing:"auth_glowing__kfr8I"}},8740:e=>{e.exports={inputWrapper:"Input_inputWrapper__yzRlT",label:"Input_label__uSO6_",wrapper:"Input_wrapper__E_djO",input:"Input_input__ckjpx",icon:"Input_icon__lLLNV",error:"Input_error__tUeEu"}}},e=>{var a=a=>e(e.s=a);e.O(0,[171,63,441,684,358],()=>a(4257)),_N_E=e.O()}]);