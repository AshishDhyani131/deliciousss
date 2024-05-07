import{b as t,j as i,L as d}from"./index-ErJWI3BP.js";const o=({dataList:e})=>i.jsx(s,{children:e.map(r=>i.jsx(d,{to:`/recipe/${r.id}`,children:i.jsxs(a,{children:[i.jsx("img",{src:r.image,alt:r.title}),i.jsx("h4",{children:r.title})]},r.id)}))}),s=t.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 2rem;
`,a=t.div`
  img {
    width: 100%;

    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;export{o as L};
