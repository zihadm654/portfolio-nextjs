if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>a(e,t),d={module:{uri:t},exports:c,require:r};s[t]=Promise.all(n.map((e=>d[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-b0a6e652"],(function(e){"use strict";importScripts("/fallback-8e5b7798448a30a7.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/data/G7Ce9-gnj1ma1BVdAtsgX/fallback.json",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/G7Ce9-gnj1ma1BVdAtsgX/_buildManifest.js",revision:"334f309b863f230880a81244028ab99b"},{url:"/_next/static/G7Ce9-gnj1ma1BVdAtsgX/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/186-783e1803ffd165dc.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/chunks/232-2c0d4e8b98205e3e.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/chunks/35-39907d1bbeadbc21.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/chunks/3c2f60d0-dea8d1577c590929.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/chunks/4-dfc17e54c723972e.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/chunks/488-8a491bf00fec2132.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/chunks/498-607aa6b1cbf1e5f3.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/chunks/579-f2775a60814efb26.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/chunks/616-16890cb5fd6ee997.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/chunks/65defed1-205b75f37a0d348b.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/chunks/66c9a120-87483012c9c57f7b.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/chunks/689-5d742c0f73d5274e.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/chunks/695-f46d6341f10eaaff.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/chunks/776-224ad2ad178ba7e9.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/chunks/782-f518597cc3128cae.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/chunks/8100ded3-118f4ac4180906fd.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/chunks/8256674c-a78edac859fbbfad.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/chunks/878-9de54cc90fbf7352.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/chunks/927-ddee01b9555c29ab.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/chunks/app/about/page-d09b91b31abcdcb8.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/chunks/app/blogs/%5Bslug%5D/page-a58980be011592ab.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/chunks/app/blogs/page-f9b019618b205fc9.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/chunks/app/book/page-0d8fb89cde1595f8.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/chunks/app/contact/page-fcfd550f7f0e85bf.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/chunks/app/dashboard/page-4450ac80387897a0.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/chunks/app/global-error-41eed666b9d5578e.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/chunks/app/layout-734eec67d7141906.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/chunks/app/new/page-1a0a361bcaa2475c.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/chunks/app/not-found-8f3a7390b0b491a2.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/chunks/app/page-0f17e22478042b9f.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/chunks/app/projects/%5Bslug%5D/page-751588e429be1b94.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/chunks/app/projects/page-3431d2d1cfb3d33d.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/chunks/app/template-d9c84293e3c0aba9.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/chunks/ba5914e4-1480d8209850f25f.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/chunks/framework-c25027af42eb8c45.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/chunks/main-a13a2b61d2ba9ab0.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/chunks/main-app-6d165eeff8b5f1c2.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/chunks/pages/_app-7ccb61134fde831d.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/chunks/pages/_error-15594038d45b28dc.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-8ccb2eec3bab0fd6.js",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/_next/static/css/c8c82ef31fbe578a.css",revision:"c8c82ef31fbe578a"},{url:"/_next/static/media/30cd8f99d32fa6e8-s.woff2",revision:"e5c1b944d9e3380a062bf911e26728a3"},{url:"/_next/static/media/46c21389e888bf13-s.woff2",revision:"272930c09ba14c81bb294be1fe18b049"},{url:"/_next/static/media/8888a3826f4a3af4-s.p.woff2",revision:"792477d09826b11d1e5a611162c9797a"},{url:"/_next/static/media/IMG_20220929_091011_664.a95687fd.jpg",revision:"7f7453cc0b8460a1111f591dc030e90b"},{url:"/_next/static/media/b957ea75a84b6ea7-s.p.woff2",revision:"0bd523f6049956faaf43c254a719d06a"},{url:"/_next/static/media/d14523e549eb010c-s.woff2",revision:"85964479247c3a9915ddd4d7e797cf70"},{url:"/_next/static/media/e9b60341794c6df7-s.p.woff2",revision:"b2529f613a5fd75a4e38f090cfa1ecbc"},{url:"/_next/static/media/e9c77e354c009cc8-s.woff2",revision:"16bb99df46face2f2538ed0220478ac6"},{url:"/_next/static/media/eafabf029ad39a43-s.p.woff2",revision:"43751174b6b810eb169101a20d8c26f8"},{url:"/_next/static/media/f5767adec246cdc1-s.woff2",revision:"7a1c6501aa2b3327c1cf556362a851cb"},{url:"/assets/Abdul Malek.pdf",revision:"bddd8a425538303bc0d0f568670aae03"},{url:"/assets/Facebook cover - 2.jpg",revision:"3e062850f145d177a532c80db3c11bd0"},{url:"/assets/IMG_20220101_115612.jpg",revision:"26a74e2c3bef688aa5afea0dea1993ee"},{url:"/assets/IMG_20220929_091011_664.jpg",revision:"7f7453cc0b8460a1111f591dc030e90b"},{url:"/assets/MacBook - 2copy.jpg",revision:"2a848021d69f2c08e23de54387d25d69"},{url:"/assets/Slice1.jpg",revision:"23f00e24ef0fc59f1fde578d65ae936e"},{url:"/assets/Slice5.jpg",revision:"a45e36e192f13bfb69b3c582271897a6"},{url:"/assets/Slice7.jpg",revision:"7c713f5d49bd330de6d3a7aee6bb66b1"},{url:"/assets/UI.svg",revision:"41e39fd44ccf2c85f8fc837da976661b"},{url:"/assets/animation.svg",revision:"e2bd751f0d519f8df4fb808d70799eef"},{url:"/assets/available.svg",revision:"77a541268507d6d518034ba143062e16"},{url:"/assets/celebration.svg",revision:"fc117a22192a611b7b82bd7696971a4c"},{url:"/assets/design.jpg",revision:"585e4dd31ac05980dfd1f1895931021b"},{url:"/assets/design2.jpg",revision:"55aa4d9e218ac9fff6ca82939c0c1846"},{url:"/assets/design3.jpg",revision:"15071d0ed6ae0e8ab4ccacb82968c6a9"},{url:"/assets/desk-setup.jpg",revision:"d3b59e8773c1394d9fd8d892a20e2a39"},{url:"/assets/development.svg",revision:"c5138aa72547266716c0cfd8deb95124"},{url:"/assets/logo.png",revision:"0d5b8b1526db46530482ba1992c7d601"},{url:"/assets/single-page.jpg",revision:"d3902a66368aea6582a9514e95b9206f"},{url:"/assets/undraw_contact_us_re_4qqt.svg",revision:"723ad9eb49cd50ec3bc82c5b20e58086"},{url:"/assets/undraw_creation_re_d1mi.svg",revision:"efde3002fb438b6a1f9a1ceaa2a9db90"},{url:"/assets/undraw_dev_productivity_re_fylf.svg",revision:"e9f714cbb550f2632b1b784f2e3076d0"},{url:"/assets/undraw_interior_design_re_7mvn.svg",revision:"1beb36b58c53d179bb06720b2fffd43f"},{url:"/assets/undraw_services_re_hu5n.svg",revision:"05fd58df1405e35eb283391c83191182"},{url:"/assets/user.svg",revision:"31505c960e4c41cf9d0b8365641de208"},{url:"/fallback-8e5b7798448a30a7.js",revision:"2dc520c51f86ac1de775337f2a1df6c2"},{url:"/fallback-font.woff2",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/fallback.webp",revision:"G7Ce9-gnj1ma1BVdAtsgX"},{url:"/icon-192x192.png",revision:"89bc08661cdaddf4e7937375424ed966"},{url:"/icon-256x256.png",revision:"f7d7504eb23c3ddae634a7b6893d8cdf"},{url:"/icon-384x384.png",revision:"5564705a7a639e08d747737472aa4fde"},{url:"/icon-512x512.png",revision:"c17732670404137690595af8013364dd"},{url:"/logo.png",revision:"0d5b8b1526db46530482ba1992c7d601"},{url:"/manifest.json",revision:"a5cfd709318fb85a572b2b746c713ec2"},{url:"/og-bg.jpg",revision:"3e062850f145d177a532c80db3c11bd0"},{url:"/swe-worker-4da67dda9bc18c53.js",revision:"5a47d90db13bb1309b25bdf7b363570e"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"},{url:"/~offline",revision:"G7Ce9-gnj1ma1BVdAtsgX"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e},{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
