(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[647],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return g}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),g=o,m=c["".concat(l,".").concat(g)]||c[g]||h[g]||i;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2978:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var a=n(2122),o=n(9756),i=(n(7294),n(3905)),r=["components"],s={description:"This page described to take part in the global snapshot.",image:"/img/logo/Chrysalis_logo_dark.png",keywords:["golang","github","bootstrapping","snapshot","verify","validate","hornet","tools"]},l="Chrysalis Snapshot Validation/Boostrapping",p={unversionedId:"guides/snapshot_validation_bootstrapping",id:"guides/snapshot_validation_bootstrapping",isDocsHomePage:!1,title:"Chrysalis Snapshot Validation/Boostrapping",description:"This page described to take part in the global snapshot.",source:"@site/docs/guides/snapshot_validation_bootstrapping.md",sourceDirName:"guides",slug:"/guides/snapshot_validation_bootstrapping",permalink:"/guides/snapshot_validation_bootstrapping",editUrl:"https://github.com/iotaledger/chrysalis-docs/tree/main/docs/guides/snapshot_validation_bootstrapping.md",version:"current",frontMatter:{description:"This page described to take part in the global snapshot.",image:"/img/logo/Chrysalis_logo_dark.png",keywords:["golang","github","bootstrapping","snapshot","verify","validate","hornet","tools"]},sidebar:"mySidebar",previous:{title:"Backup and Security",permalink:"/guides/backup_security"},next:{title:"Mainnet",permalink:"/mainnet"}},d=[{value:"Requirements",id:"requirements",children:[]},{value:"Steps",id:"steps",children:[]},{value:"Bootstrapping the Legacy Hornet Node From The Global Snapshot",id:"bootstrapping-the-legacy-hornet-node-from-the-global-snapshot",children:[]}],h={toc:d};function c(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"chrysalis-snapshot-validationboostrapping"},"Chrysalis Snapshot Validation/Boostrapping"),(0,i.kt)("p",null,"This guide outlined how to take part in the global snapshot, respectively genesis snapshot creation for the\nlegacy, and the Chrysalis Phase 2 IOTA network. The goal was to generate a global snapshot for the legacy network which acted\nas a cut-off point for when only migration bundles/transactions were allowed. Then a genesis snapshot for the new network\nwhich contained the already burned/migrated funds from the 7-day-migration window would be created."),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A GitHub account and git."),(0,i.kt)("li",{parentName:"ul"},"A synchronized legacy Hornet node (running version < 0.x.x).",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"getLedgerState")," API command must be permitted. Add an entry to ",(0,i.kt)("inlineCode",{parentName:"li"},"httpAPI.permitRemoteAccess")," in case this API\ncommand is not added yet (restart your node afterwards)."),(0,i.kt)("li",{parentName:"ul"},"The API port must be accessible."))),(0,i.kt)("li",{parentName:"ul"},"Golang version 1.16.x (",(0,i.kt)("a",{parentName:"li",href:"https://golang.org/"},"https://golang.org/"),").")),(0,i.kt)("h2",{id:"steps"},"Steps"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Make sure you have Go installed by issuing ",(0,i.kt)("inlineCode",{parentName:"p"},"go version")," on your command line."))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/iotaledger/chrysalis-tools.git"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"cd chrysalis-tools/snapshot/verify"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"go build")," (this should generate a ",(0,i.kt)("inlineCode",{parentName:"li"},"verify"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"verify.exe")," binary respectively)."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},'./verify -node="https://your-node-uri" -genesis-snapshot-file-network-id="chrysalis-mainnet" -genesis-snapshot-file-network-id-alt="as-network"'),"."),(0,i.kt)("li",{parentName:"ol"},"The program would fetch the then current ledger state of your defined legacy Hornet node, compute its Blake2b-256 hash\nand generate the global snapshot for the legacy and genesis snapshot for the new network. Example output:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"2021/04/28 12:05:22 querying legacy node for info...\n2021/04/28 12:05:22 legacy node state: lsmi/lsm 3705194/3705194\n2021/04/28 12:05:22 fetching ledger state at 3705194, this might take a while...go grab a coffee...\n2021/04/28 12:05:27 total ledger entries: 340692\n2021/04/28 12:05:29 legacy ledger state integrity hash: 8900ac80edffe4eed9f6f55dfe32d775c18d789351c7dddfa4a4c815a0fa7116\n2021/04/28 12:05:29 migration: addrs count 7949, tokens total 661557732260355\n2021/04/28 12:05:29 migration (alternative): addrs count 7950, tokens total 724118708261378\n2021/04/28 12:05:29 generating genesis snapshot files...\n2021/04/28 12:05:29 treasury allocation with genesis_snapshot.bin: 2117972551017406 tokens\n2021/04/28 12:05:29 treasury allocation with genesis_snapshot_alt.bin: 2055411575016383 tokens\n2021/04/28 12:05:29 misc info:\n2021/04/28 12:05:29 eligible for migration: addrs 225329, tokens total 2055405216227457\n")),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Generate the sha256 hashes of the generated snapshot.\nfiles: ",(0,i.kt)("inlineCode",{parentName:"li"},"sha256sum genesis_snapshot.bin genesis_snapshot_alt.bin global_snapshot.csv "),"; Example output:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ sha256sum genesis_snapshot.bin genesis_snapshot_alt.bin global_snapshot.csv \n65be1a80a6895d17a492db3dd55babf1d57557dbaa40da6e1d0ed5937ceb6662  genesis_snapshot.bin\n39bd5308a1e9fb57503f6d15b90206ae434f581807ef0e29cf2e66de64165c5b  genesis_snapshot_alt.bin\n8f48388423cc706bf5f7707735fd99a5d89efbb966a8e2a0b82ff3529cf33f7f  global_snapshot.csv\n")),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},"Copy the entire program output, and the sha256 hashes to the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/hornet/issues/16"},"corresponding issue")," on\nthe ",(0,i.kt)("inlineCode",{parentName:"li"},"iotaledger")," Hornet fork repository.")),(0,i.kt)("h2",{id:"bootstrapping-the-legacy-hornet-node-from-the-global-snapshot"},"Bootstrapping the Legacy Hornet Node From The Global Snapshot"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Loading the global snapshot ensured that your legacy Hornet node added the genesis transaction (999...) as a solid entry point: this was important as the Coordinator would issue the next milestone after the global snapshot index on top of it. Your node would ",(0,i.kt)("strong",{parentName:"p"},"not")," lose the data it already had."))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Await for confirmation that the global snapshot was taken successfully by looking into the validation issue on\nthe ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/gohornet/hornet"},"Hornet repository")," or Discord."),(0,i.kt)("li",{parentName:"ol"},'Stop your legacy Hornet node and download the binary or docker image of the Hornet build which only supports\nmigration-bundles. With this "migration-bundles-only" version, your Hornet node will also no longer peer to nodes\nwhich do not run the same version.'),(0,i.kt)("li",{parentName:"ol"},"Let ",(0,i.kt)("inlineCode",{parentName:"li"},"snapshots.global.path")," point to the global snapshot file (i.e ",(0,i.kt)("inlineCode",{parentName:"li"},"global_snapshot.csv"),")."),(0,i.kt)("li",{parentName:"ol"},"Under ",(0,i.kt)("inlineCode",{parentName:"li"},"snapshots.global.index")," define the index of the milestone at which the global snapshot was taken. (This should\ncorrespond to what ",(0,i.kt)("inlineCode",{parentName:"li"},"legacy node state")," was from the program output, i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"3705194")," from the example output above)."),(0,i.kt)("li",{parentName:"ol"},"Change ",(0,i.kt)("inlineCode",{parentName:"li"},"snapshots.loadType")," to ",(0,i.kt)("inlineCode",{parentName:"li"},'"global"')," (note the quotes as the value is a string)."),(0,i.kt)("li",{parentName:"ol"},"Restart your legacy Hornet ",(0,i.kt)("strong",{parentName:"li"},"with the additional ",(0,i.kt)("inlineCode",{parentName:"strong"},"--forceGlobalSnapshot")," flag")," (this will instruct your Hornet node\nto load the global snapshot despite the fact that it already has a database).")))}c.isMDXComponent=!0}}]);