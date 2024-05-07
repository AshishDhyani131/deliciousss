import{u as m,r,j as e,b as n}from"./index-ErJWI3BP.js";const x=()=>{const{recipeId:a}=m(),[t,l]=r.useState({}),[i,c]=r.useState("instructions");r.useEffect(()=>{d().then(s=>l(s))},[a]);const d=async()=>await(await fetch(`https://api.spoonacular.com/recipes/${a}/information?apiKey=7a2394fa164140a4a5ecb02d39cb07c4`)).json();return e.jsxs(p,{children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-3xl font-bold",children:t.title}),e.jsx("img",{src:t.image,alt:t.title})]}),e.jsxs(u,{children:[e.jsx(o,{className:i==="instructions"?"active":"",onClick:()=>c("instructions"),children:"Instructions"}),e.jsx(o,{className:i==="ingredients"?"active":"",onClick:()=>c("ingredients"),children:"Ingredients"}),i==="instructions"&&e.jsxs("div",{children:[e.jsx("p",{dangerouslySetInnerHTML:{__html:t.summary}}),e.jsx("p",{dangerouslySetInnerHTML:{__html:t.instructions}})]}),i==="ingredients"&&e.jsx("ul",{children:t.extendedIngredients.map(s=>e.jsx("li",{children:s.original},s.id))})]})]})},p=n.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1rem;
  }
  ul {
    margin-top: 2rem;
  }
  p {
    margin: 2rem 0rem;
  }
`,o=n.span`
  padding: 1rem 1.5rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
`,u=n.div``;export{x as default};
