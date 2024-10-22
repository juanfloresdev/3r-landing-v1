import{P as m}from"./PageBaner-B08VtLZO.js";import{_ as b,c as i,b as v,a as t,F as y,r as g,w as l,v as d,d as h,o as a,n as f,t as c}from"./index-CiGEpp4S.js";const C={props:{modelValue:{type:String,default:""}},data(){return{breadcrumbData:[{label:"Inicio",link:"/"},{label:"Productos",link:"/productos"}],concretes:[{days:"5",description:"Este es un producto increíble para la construcción."},{days:"7",description:"Ideal para todo tipo de proyectos de concreto."},{days:"15",description:"Alta resistencia y durabilidad en cada aplicación."},{days:"28",description:"Fácil de aplicar, diseñado para resultados rápidos."}],selectedConcrete:"",number:null,phone:""}},methods:{selectConcrete(o){this.selectedConcrete=o,this.$emit("update:modelValue",o)},validateNumber(o){this.number.toString().length>o&&(this.number=Number(this.number.toString().slice(0,o)))},validatePhone(o){this.phone.toString().length>o&&(this.phone=Number(this.phone.toString().slice(0,o)))}},components:{PageBaner:m}},S={class:"concrete-container"},_={class:"concrete-content"},k={class:"concrete-list"},q=["onClick"],I={class:"concrete-days"},P={class:"concrete-info"},B={class:"number-input-container"},N={class:"number-input-container"},V={class:"quote-button-container"};function z(o,e,D,E,s,r){const u=h("PageBaner");return a(),i("div",null,[v(u,{title:" Solicita tu cotización de concreto",breadcrumb:s.breadcrumbData},null,8,["breadcrumb"]),t("div",S,[t("div",_,[e[6]||(e[6]=t("p",null," Estamos aquí para ayudarte a hacer realidad tu proyecto. Si necesitas concreto de alta calidad, ¡no dudes en contactarnos! Completa el formulario de cotización a continuación y recibirás una respuesta personalizada en breve. ",-1)),e[7]||(e[7]=t("h2",null," Seleccione el tiempo de secado ",-1)),t("div",k,[(a(!0),i(y,null,g(s.concretes,(n,p)=>(a(),i("div",{key:p,class:f(["concrete-card",{selected:s.selectedConcrete===n.days}]),onClick:F=>r.selectConcrete(n.days)},[t("div",I,c(n.days),1),t("div",P,[e[5]||(e[5]=t("h3",null,"Días",-1)),t("p",null,c(n.description),1)])],10,q))),128))]),e[8]||(e[8]=t("h2",null," Capture los metros cúbicos ",-1)),t("div",B,[l(t("input",{type:"number","onUpdate:modelValue":e[0]||(e[0]=n=>s.number=n),onInput:e[1]||(e[1]=n=>r.validateNumber(4)),class:"large-input",placeholder:"Ingrese un número de 4 dígitos",required:""},null,544),[[d,s.number]])]),e[9]||(e[9]=t("h2",null," Capture tu número de teléfono ",-1)),t("div",N,[l(t("input",{type:"phone","onUpdate:modelValue":e[2]||(e[2]=n=>s.phone=n),class:"large-input",onInput:e[3]||(e[3]=n=>r.validatePhone(10)),placeholder:"Ingrese un número a 10 dígitos",required:""},null,544),[[d,s.phone]])]),t("div",V,[t("button",{class:"quote-button",onClick:e[4]||(e[4]=(...n)=>o.requestQuote&&o.requestQuote(...n))}," Solicitar cotización ")])])])])}const L=b(C,[["render",z],["__scopeId","data-v-966606f6"]]);export{L as default};