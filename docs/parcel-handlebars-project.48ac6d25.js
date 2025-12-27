let e=window.Handlebars,t=`
<ul>
  {{#each this}}
    <li data-id="{{id}}">
      <strong>{{name}}</strong> \u{2014} {{price}}$<br>
      {{description}}
      <button class="delete-btn">Delete</button>
    </li>
  {{/each}}
</ul>
`,i=e.compile(t),n=document.querySelector("#app"),a=[{id:1,name:"Laptop",price:1500,description:"A high-performance laptop for all your needs."},{id:2,name:"Smartphone",price:700,description:"A modern smartphone with an excellent camera."},{id:3,name:"Headphones",price:200,description:"Noise-cancelling headphones for better focus."}];function r(){n.innerHTML=i(a)}n.addEventListener("click",e=>{if(e.target.classList.contains("delete-btn")){let t=Number(e.target.closest("li").dataset.id);a=a.filter(e=>e.id!==t),r()}}),r();
//# sourceMappingURL=parcel-handlebars-project.48ac6d25.js.map
