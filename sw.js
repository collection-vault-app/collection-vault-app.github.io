// Collection Vault offline shell: public, pinned files only. No inventory or tokens.
const CACHE='collection-vault-public-shell-0.9.9.8.9';
const FILES={
  "encrypted.html": "d318f69082e98579d62f0b34502481fd3b6716207c016f3b28846175791325f9",
  "manifest.webmanifest": "64673252d749169d5c2a63701205bce07c7085e0648a0d680f8731e5d39b5288",
  "icon-192.png": "f33bf3d14085ead0ef1a8e6b3c6b4599fb69b02cebd72c109ec0dcc193341901",
  "icon-512.png": "c42b56d0f59eb84b7012bd0d133494db5ea3e93bd0f20e596d12a17132f624d3",
  "index.html": "a39008a6a731df71d9dd0a707236b2e59a9d703acf458b13496bdd5e80c7b990",
  "game-reference.json": "595d84750af02ad5004ffb730005b57a5593d933af746d95c5098020bbeed14c",
  "barcode-reference.json": "0bc61f5eb5d258a9b3f13d7a80ee9a38318f99f49006cc492d5b4051d7815ffb",
  "ocr-worker-6.0.1.js": "5eb44db1ba30a922f095eeb77565ab991c571214bf537bf923ea76acddfbbb47",
  "ocr-eng.traineddata.gz": "45b4cb346724ac1774f1c36f42f182b887bcdb28ebe63e6fff90ac41f3fcff91"
};
const scope=new URL(self.registration.scope);
const URLS=new Map(Object.entries(FILES).map(([name,hash])=>[new URL(name,scope).href,hash]));
const hex=b=>Array.from(new Uint8Array(b),x=>x.toString(16).padStart(2,'0')).join('');
self.addEventListener('install',event=>event.waitUntil((async()=>{
 const cache=await caches.open(CACHE);try{for(const [url,hash] of URLS){let r=await fetch(url,{cache:'reload',credentials:'omit',redirect:'error'});if(!r.ok||hex(await crypto.subtle.digest('SHA-256',await r.clone().arrayBuffer()))!==hash)throw Error('Public shell integrity failure');if(new URL(url).pathname.endsWith("/ocr-worker-6.0.1.js")){let headers=new Headers(r.headers);headers.delete("Content-Encoding");headers.delete("Content-Length");headers.set("Content-Security-Policy","default-src 'none'; script-src 'wasm-unsafe-eval'; connect-src data:; worker-src 'none'");r=new Response(await r.arrayBuffer(),{status:200,headers})}await cache.put(url,r)}}catch(e){await caches.delete(CACHE);throw e}
 // No skipWaiting: never take over an unlocked old page.
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{for(const n of await caches.keys())if(n.startsWith('collection-vault-public-shell-')&&n!==CACHE)await caches.delete(n)})()));
self.addEventListener('fetch',event=>{const r=event.request;if(r.method!=='GET'||!URLS.has(r.url))return;event.respondWith((async()=>{const c=await caches.open(CACHE);return await c.match(r.url)||new Response('Offline application files unavailable. Reconnect and repair installation.',{status:503,headers:{'Content-Type':'text/plain'}})})())});
