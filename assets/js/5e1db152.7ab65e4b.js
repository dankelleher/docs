"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[253],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6822:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return s}});var r=n(83117),a=(n(67294),n(3905));const o={},l="Deploy",i={unversionedId:"deprecated/storefront/deploy",id:"deprecated/storefront/deploy",title:"Deploy",description:"GitHub Pages",source:"@site/docs/06-deprecated/03-storefront/05-deploy.md",sourceDirName:"06-deprecated/03-storefront",slug:"/deprecated/storefront/deploy",permalink:"/deprecated/storefront/deploy",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/06-deprecated/03-storefront/05-deploy.md",tags:[],version:"current",lastUpdatedAt:1663195570,formattedLastUpdatedAt:"Sep 14, 2022",sidebarPosition:5,frontMatter:{},sidebar:"sidebar",previous:{title:"Auction Sale",permalink:"/deprecated/storefront/auction"},next:{title:"Customize",permalink:"/deprecated/storefront/customize"}},p={},s=[{value:"GitHub Pages",id:"github-pages",level:2},{value:"GitHub Pages with a custom domain",id:"github-pages-with-a-custom-domain",level:3},{value:"Vercel",id:"vercel",level:2}],u={toc:s};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploy"},"Deploy"),(0,a.kt)("h2",{id:"github-pages"},"GitHub Pages"),(0,a.kt)("p",null,"Primarily you need to specify your repo in ",(0,a.kt)("inlineCode",{parentName:"p"},"js/packages/web/package.json")," file"),(0,a.kt)("p",null,"Pay attention to these two lines:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"deploy:gh": "yarn export && gh-pages -d ../../build/web --repo https://github.com/metaplex-foundation/metaplex -t true",\n"deploy": "ASSET_PREFIX=/metaplex/ yarn build && yarn deploy:gh",\n')),(0,a.kt)("p",null,"There are 2 things to change:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"specify your repo URL instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"https://github.com/metaplex-foundation/metaplex")," (for example, ",(0,a.kt)("inlineCode",{parentName:"li"},"https://github.com/my-name/my-metaplex"),")"),(0,a.kt)("li",{parentName:"ul"},"set ",(0,a.kt)("inlineCode",{parentName:"li"},"ASSET_PREFIX")," to repo name (for example, ",(0,a.kt)("inlineCode",{parentName:"li"},"ASSET_PREFIX=/my-metaplex/"),")")),(0,a.kt)("p",null,"After that, the lines will look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"deploy:gh": "yarn export && gh-pages -d ../../build/web --repo https://github.com/my-name/my-metaplex -t true",\n"deploy": "ASSET_PREFIX=/my-metaplex/ yarn build && yarn deploy:gh",\n')),(0,a.kt)("p",null,"Add the file _config.yml to the root directory\nadd to this file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"lsi: false\nsafe: true\nsource: js/packages/web\nincremental: false\nhighlighter: rouge\ngist:\n  noscript: false\nkramdown:\n  math_engine: mathjax\n  syntax_highlighter: rouge\n")),(0,a.kt)("p",null,"Please check that you select gh-pages branch in source on the GitHub Pages tab (current repository)"),(0,a.kt)("p",null,"And after that, you can publish the Metaplex app to GitHub Pages by the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd js/packages/web\nyarn deploy\n")),(0,a.kt)("h3",{id:"github-pages-with-a-custom-domain"},"GitHub Pages with a custom domain"),(0,a.kt)("p",null,"If you have a custom domain linked to the GitHub Pages in your repo, then the instructions are the same as above, but your need to remove  ",(0,a.kt)("inlineCode",{parentName:"p"},"ASSET_PREFIX")," from the deploy script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"deploy:gh": "yarn export && gh-pages -d ../../build/web --repo https://github.com/my-name/my-metaplex -t true"\n"deploy": "yarn build && yarn deploy:gh",\n')),(0,a.kt)("p",null,"Prepare GitHub pages for deploying - select branch in repository then continue:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Init store",src:n(19881).Z+"#radius#shadow",width:"1154",height:"216"})),(0,a.kt)("p",null,"The publishing commands are the same:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd js/packages/web\nyarn deploy\n")),(0,a.kt)("h2",{id:"vercel"},"Vercel"),(0,a.kt)("p",null,"To publish the Metaplex app to Vercel, you first need to visit ",(0,a.kt)("a",{parentName:"p",href:"https://vercel.com/"},"https://vercel.com/")," and create a new project linked to your GitHub repo."),(0,a.kt)("p",null,"After that, configure this project with the following settings:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Framework: ",(0,a.kt)("inlineCode",{parentName:"li"},"Next.js")),(0,a.kt)("li",{parentName:"ul"},"Root directory: ",(0,a.kt)("inlineCode",{parentName:"li"},"js")),(0,a.kt)("li",{parentName:"ul"},"Output directory: ",(0,a.kt)("inlineCode",{parentName:"li"},"packages/web/.next"))),(0,a.kt)("p",null,"One last thing: specify ",(0,a.kt)("inlineCode",{parentName:"p"},"REACT_APP_STORE_OWNER_ADDRESS_ADDRESS")," in the Environment Variables section"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Init store",src:n(36138).Z+"#radius#shadow",width:"900",height:"1060"})))}c.isMDXComponent=!0},19881:function(e,t,n){t.Z=n.p+"assets/images/github-pages-selecting-9146b152accb178af1f6980c3e7bae14.png"},36138:function(e,t,n){t.Z=n.p+"assets/images/vercel-configuration-62168cb66c5c5f4493e956af0116a637.png"}}]);