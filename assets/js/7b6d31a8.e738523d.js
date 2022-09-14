"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2242],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42144:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var r=n(83117),a=(n(67294),n(3905));const i={},o="Definitions",s={unversionedId:"resources/definitions",id:"resources/definitions",title:"Definitions",description:"Non-fungible tokens",source:"@site/docs/05-resources/02-definitions.md",sourceDirName:"05-resources",slug:"/resources/definitions",permalink:"/resources/definitions",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/05-resources/02-definitions.md",tags:[],version:"current",lastUpdatedAt:1663195570,formattedLastUpdatedAt:"Sep 14, 2022",sidebarPosition:2,frontMatter:{},sidebar:"sidebar",previous:{title:"Storage Providers",permalink:"/resources/storage-providers"},next:{title:"Stability Index",permalink:"/resources/stability-index"}},l={},c=[{value:"Non-fungible tokens",id:"non-fungible-tokens",level:2},{value:"Master Edition",id:"master-edition",level:3},{value:"Print",id:"print",level:3},{value:"Normal NFT",id:"normal-nft",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"definitions"},"Definitions"),(0,a.kt)("h2",{id:"non-fungible-tokens"},"Non-fungible tokens"),(0,a.kt)("p",null,"NFTs on Solana can be characterized as a unique ",(0,a.kt)("a",{parentName:"p",href:"https://spl.solana.com/token"},"SPL token")," with a fixed supply of 1 with 0 decimals that have added metadata attached using the ",(0,a.kt)("a",{parentName:"p",href:"/programs/token-metadata/"},"Token Metadata Program"),"."),(0,a.kt)("p",null,"Below are the types of NFTs that can be created using Metaplex's Token Metadata program."),(0,a.kt)("h3",{id:"master-edition"},"Master Edition"),(0,a.kt)("p",null,"A master edition token, when minted, represents both a non-fungible token on Solana and metadata that allows creators to control the provenance of prints created from the master edition."),(0,a.kt)("p",null,"Rights to create prints are tokenized itself, and the owner of the master edition can distribute tokens that allow users to create prints from master editions. Additionally, the creator can set the max supply of the master edition just like a regular mint on Solana, with the main difference being that each print is a numbered edition created from it."),(0,a.kt)("p",null,"A notable and desirable effect of master editions is that as prints are sold, the artwork will still remain visible in the artist's wallet as a master edition, while the prints appear in the purchaser's wallets."),(0,a.kt)("h3",{id:"print"},"Print"),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"print")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"edition"),") represents a copy of an NFT, and is created from a Master Edition. Each print has an edition number associated with it."),(0,a.kt)("p",null,"Prints can be created manually or through another program such as during a sale from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/metaplex-program-library/tree/master/fixed-price-sale"},"Fixed Price Sale program"),"."),(0,a.kt)("h3",{id:"normal-nft"},"Normal NFT"),(0,a.kt)("p",null,"A normal NFT when minted represents a non-fungible token on Solana and metadata, but lacks rights to print."),(0,a.kt)("p",null,"An example of a normal NFT would be an artwork that is a one-of-a-kind that, once sold, is no longer within the artist's own wallet, but is in the purchaser's wallet."),(0,a.kt)("p",null,"A normal NFT can be created by making a ",(0,a.kt)("a",{parentName:"p",href:"#master-edition"},"Master Edition")," with a max supply of 0."))}u.isMDXComponent=!0}}]);