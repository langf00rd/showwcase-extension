(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(5921)}])},5921:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return v}});var t=s(5893),n=s(7294),a=s(3854),i=s(7106),l=s(3750),o=s(6893),c=s(8193);function d(e){return new Date(e).toLocaleDateString("en-US",{month:"short",day:"numeric"})}function x(e){return e>=1e6?(e/1e6).toFixed(1)+"M":e>=1e3?(e/1e3).toFixed(1)+"K":e}var u=s(1664);function m(e){var r=e.title,s=e.dateTime,i=e.readTime,m=e.image,p=e.summary,f=e.views,g=e.link,j=(0,n.useState)(!1),w=j[0],b=j[1],v=(0,n.useState)(!1),y=v[0],N=v[1],k=function(){return y?(0,t.jsxs)("div",{className:"bg-[#101827e8] w-screen h-screen overflow-y-scroll fixed left-0 top-0 z-10 flex flex-col items-center justify-center",children:[(0,t.jsx)(o.q5L,{onClick:function(){return N(!1)},className:"cursor-pointer hover:text-brand transition-all my-10",size:50}),(0,t.jsxs)("div",{className:"post-info-modal p-10 rounded-xl rounded-b-none h-full overflow-scroll w-full max-w-3xl border border-gray-700 bg-gray-800",children:[(0,t.jsx)("h1",{className:"text-3xl font-bold mb-2",children:r}),(0,t.jsxs)("div",{className:"text-gray-400 flex items-center gap-1",children:[(0,t.jsxs)("p",{children:[d(s)," \u2022 "]}),(0,t.jsxs)("p",{children:[i," \u2022 "]}),(0,t.jsxs)("div",{className:"flex items-center gap-1",children:[(0,t.jsx)(c.w8I,{})," ",x(f)," views"]})]}),m?(0,t.jsx)("img",{loading:"lazy",src:m,className:"w-full my-5 rounded-xl bg-gray-800",alt:"blog post image of "+r}):(0,t.jsx)("div",{className:"w-full h-[170px] object-cover rounded-xl bg-gray-800"}),(0,t.jsxs)("div",{className:"my-5 gap-5 flex items-center justify-end",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 text-gray-400 cursor-pointer hover:text-brand transition-all",children:[(0,t.jsx)(l.M3k,{}),(0,t.jsx)("p",{children:"Add to bookmark"})]}),(0,t.jsx)(u.default,{passHref:!0,href:g,children:(0,t.jsx)("a",{href:g,target:"_blank",rel:"noreferrer",children:(0,t.jsxs)("button",{className:h.button,children:[(0,t.jsx)("p",{children:"Read on Showwcase"}),(0,t.jsx)(a.Hi9,{})]})})})]}),(0,t.jsx)("p",{children:p})]})]}):(0,t.jsx)(t.Fragment,{})};return(0,t.jsxs)("li",{className:"relative",children:[(0,t.jsx)(k,{}),w&&(0,t.jsx)("div",{className:"border border-gray-800 p-5 rounded-xl absolute bg-gray-900 right-5 z-10 top-[50px]",children:(0,t.jsx)("ul",{className:"text-gray-400 flex flex-col gap-3",children:(0,t.jsxs)("li",{className:h.iconLink,children:[(0,t.jsx)(l.M3k,{}),(0,t.jsx)("p",{children:"Add to bookmarks"})]})})}),(0,t.jsxs)("div",{className:"bg-gray-900 p-5 select-none rounded-xl relative border border-gray-800 hover:border-gray-600 cursor-pointer transition-all flex flex-col justify-between",children:[(0,t.jsxs)("div",{className:"mb-3 flex flex-col gap-3",children:[(0,t.jsx)("h3",{className:"font-medium w-[200px] text-[20px] max-lines-2",children:r}),(0,t.jsxs)("div",{className:"text-sm text-gray-400 flex items-center gap-1",children:[(0,t.jsxs)("p",{children:[d(s)," \u2022 "]}),(0,t.jsxs)("p",{children:[i," \u2022 "]}),(0,t.jsxs)("div",{className:"flex items-center gap-1",children:[(0,t.jsx)(c.w8I,{})," ",x(f)," views"]})]}),w?(0,t.jsx)(o.q5L,{onClick:function(){return b(!w)},className:"hover:bg-gray-800 py-1 rounded-md absolute right-3 transition-all cursor-pointer",size:25}):(0,t.jsx)(o.$Pu,{onClick:function(){return b(!w)},className:"hover:bg-gray-800 py-1 rounded-md absolute right-3 transition-all cursor-pointer",size:25})]}),m?(0,t.jsx)("img",{onClick:function(){return N(!0)},loading:"lazy",src:m,className:"w-full h-[170px] object-cover rounded-xl bg-gray-800",alt:"blog post image of "+r}):(0,t.jsx)("div",{onClick:function(){return N(!0)},className:"w-full h-[170px] object-cover rounded-xl bg-gray-800"})]})]})}var h={iconLink:"flex items-center whitespace-nowrap gap-1 transition-all hover:text-brand cursor-pointer",button:"w-max py-2 px-3 rounded-xl cursor-pointer flex items-center gap-2 bg-white transition-all hover:opacity-80 select-none text-gray-800"};function p(e){var r=e.shows;return(0,t.jsx)("ul",{className:"grid grid-cols-3 gap-5",children:r.map((function(e,r){return(0,t.jsx)(m,{title:e.title,views:e.views,link:"https://www.showwcase.com/show/".concat(e.id,"/").concat(e.slug),summary:e.projectSummary,dateTime:e.publishedDate||e.createdAt,readTime:e.readingStats.text,image:e.coverImage},r)}))})}function f(e){var r=e.shows;return(0,t.jsx)("ul",{className:"grid grid-cols-3 gap-5",children:r.map((function(e,r){return(0,t.jsx)(m,{title:e.title,views:e.views,link:"https://www.showwcase.com/show/".concat(e.id,"/").concat(e.slug),summary:e.projectSummary,dateTime:e.publishedDate||e.createdAt,readTime:e.readingStats.text,image:e.coverImage},r)}))})}var g=s(9254),j=["Trending shows","Recommended shows","New shows"],w="w-max py-2 px-3 rounded-xl cursor-pointer transition-all hover:opacity-80 select-none",b={tab:"".concat(w," bg-gray-900 text-gray-500"),activeTab:"".concat(w," bg-brand"),label:"text-gray-500 font-bold",iconLink:"flex items-center whitespace-nowrap gap-1 transition-all hover:text-brand cursor-pointer"},v=function(){var e=(0,n.useState)(j[0]),r=e[0],s=e[1],o=(0,n.useState)([]),c=o[0],d=o[1],x=(0,n.useState)([]),u=x[0],m=x[1];return(0,n.useEffect)((function(){r===j[0]?g.Z.request({method:"GET",url:"https://cache.showwcase.com/projects/trending",params:{limit:"1000"}}).then((function(e){var r=e.data.filter((function(e){var r;return""!==e.title&&(null===(r=e.readingStats)||void 0===r?void 0:r.words)>100}));d(r)})).catch((function(e){console.error(e)})):r===j[1]&&g.Z.request({method:"GET",url:"https://cache.showwcase.com/projects/recommended",params:{limit:"1000"}}).then((function(e){var r=e.data.filter((function(e){var r;return""!==e.title&&(null===(r=e.readingStats)||void 0===r?void 0:r.words)>100}));m(r)})).catch((function(e){console.error(e)}))}),[r]),(0,t.jsxs)("main",{className:"text-[16px] h-screen w-screen overflow-hidden",children:[(0,t.jsxs)("header",{className:"border-b border-b-borderColor p-5 flex items-center justify-between",children:[(0,t.jsx)("b",{children:"Showwcase extension"}),(0,t.jsx)("button",{children:"Sign in"})]}),(0,t.jsxs)("div",{className:"w-screen h-screen flex",children:[(0,t.jsxs)("div",{className:"flex-[1] p-5 border-r border-r-borderColor",children:[(0,t.jsx)("label",{className:b.label,children:"Create"}),(0,t.jsxs)("ul",{className:"text-gray-500 flex flex-col gap-3 mt-5",children:[(0,t.jsxs)("li",{className:b.iconLink,children:[(0,t.jsx)(a.LsQ,{}),(0,t.jsx)("p",{children:"Write a show"})]}),(0,t.jsxs)("li",{className:b.iconLink,children:[(0,t.jsx)(i.UQ4,{}),(0,t.jsx)("p",{children:"Create a thread"})]}),(0,t.jsxs)("li",{className:b.iconLink,children:[(0,t.jsx)(l.M3k,{}),(0,t.jsx)("p",{children:"My bookmarks"})]})]})]}),(0,t.jsxs)("div",{className:"flex-[5] p-5 lg:px-32 md:px-20 overflow-y-scroll pb-32",children:[(0,t.jsx)("ul",{className:"flex gap-4 items-center my-8",children:j.map((function(e,n){return(0,t.jsx)("li",{onClick:function(){return s(e)},className:r===e?b.activeTab:b.tab,children:(0,t.jsx)("p",{children:e})},n)}))}),r===j[0]&&(0,t.jsx)(p,{shows:c}),r===j[1]&&(0,t.jsx)(f,{shows:u})]})]})]})}}},function(e){e.O(0,[907,556,13,617,508,774,888,179],(function(){return r=8581,e(e.s=r);var r}));var r=e.O();_N_E=r}]);