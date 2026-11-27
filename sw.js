// Collection Vault offline shell: public, pinned files only. No inventory or tokens.
const CACHE='collection-vault-public-shell-0.9.9.8.4';
const FILES={
  "encrypted.html": "b1e0af95484626ab71a17344bfa590cb63bbc823f60db78f937a681a27f3ed90",
  "manifest.webmanifest": "64673252d749169d5c2a63701205bce07c7085e0648a0d680f8731e5d39b5288",
  "icon-192.png": "f33bf3d14085ead0ef1a8e6b3c6b4599fb69b02cebd72c109ec0dcc193341901",
  "icon-512.png": "c42b56d0f59eb84b7012bd0d133494db5ea3e93bd0f20e596d12a17132f624d3",
  "index.html": "a39008a6a731df71d9dd0a707236b2e59a9d703acf458b13496bdd5e80c7b990"
};
const scope=new URL(self.registration.scope);
const URLS=new Map(Object.entries(FILES).map(([name,hash])=>[new URL(name,scope).href,hash]));
const hex=b=>Array.from(new Uint8Array(b),x=>x.toString(16).padStart(2,'0')).join('');
self.addEventListener('install',event=>event.waitUntil((async()=>{
 const cache=await caches.open(CACHE);try{for(const [url,hash] of URLS){let r=await fetch(url,{cache:'reload',credentials:'omit',redirect:'error'});if(!r.ok||hex(await crypto.subtle.digest('SHA-256',await r.clone().arrayBuffer()))!==hash)throw Error('Public shell integrity failure');await cache.put(url,r)}}catch(e){await caches.delete(CACHE);throw e}
 // No skipWaiting: never take over an unlocked old page.
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{for(const n of await caches.keys())if(n.startsWith('collection-vault-public-shell-')&&n!==CACHE)await caches.delete(n)})()));
self.addEventListener('fetch',event=>{const r=event.request;if(r.method!=='GET'||!URLS.has(r.url))return;event.respondWith((async()=>{const c=await caches.open(CACHE);return await c.match(r.url)||new Response('Offline application files unavailable. Reconnect and repair installation.',{status:503,headers:{'Content-Type':'text/plain'}})})())});
