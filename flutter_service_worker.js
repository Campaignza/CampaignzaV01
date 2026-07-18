'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c32404806eac02157294ee132d849a2a",
"assets/AssetManifest.bin.json": "ea2621f79fdc122adf80e2351359ee21",
"assets/assets/fonts/Roboto-Bold.ttf": "dd5415b95e675853c6ccdceba7324ce7",
"assets/assets/fonts/Roboto-Regular.ttf": "303c6d9e16168364d3bc5b7f766cfff4",
"assets/assets/images/app_logo.png": "434b76db4789bd21cf49c432f9ec7b5c",
"assets/assets/images/facebook_logo.png": "73be5f74f108ef3c8fa1ddfe2210fe5b",
"assets/assets/images/google_logo.png": "0f118259ce403274f407f5e982e681c3",
"assets/assets/images/instagram_logo.png": "b697ac7b6442bc6cd0ed338b1ec97e11",
"assets/assets/images/primary_logo.png": "1b5e1571541a9f9b7119208b64a15c3c",
"assets/assets/images/qr_code.png": "ff3c6b567e21c34c8290cd252302b8d9",
"assets/assets/images/rasoiaImageUsedOnBill.png": "606ffc1904fa5513f2089fb477575f79",
"assets/FontManifest.json": "c5238a9df6770f15fb4677c696cfca5f",
"assets/fonts/MaterialIcons-Regular.otf": "ef1d9c9eb6353ed3ea14332b7395cc69",
"assets/lib/features/postLogin/agencies/agency_config.json": "6c203bc720a6a699d62e7891c87b317d",
"assets/lib/features/postLogin/agency_brand_links/agency_brand_link_config.json": "d48a4b67637dbee1993e5379ba3fecfc",
"assets/lib/features/postLogin/brands/brand_config.json": "6ab00e92e159bfd72c8838dfdb93cb4d",
"assets/lib/features/postLogin/campaigns/campaign_config.json": "4770dc9fe8c19e4f6aedbb4e5d6a8581",
"assets/lib/features/postLogin/collaborations/collaboration_config.json": "b84f88f32f67eed80e46391d778b9a91",
"assets/lib/features/postLogin/influencers/influencer_config.json": "5529c7c3c813991f1eab7185931727d5",
"assets/lib/features/postLogin/notes/note_config.json": "eb79063a278948db266c2b16a9bae0c7",
"assets/lib/features/postLogin/po_collections/po_collection_config.json": "76546409c94b4262b416151cc9f607f4",
"assets/lib/features/postLogin/rbac_modules/rbac_module_config.json": "59e4628bdc359774b20e4ea8f8b11cfd",
"assets/lib/features/postLogin/rbac_permissions/rbac_permission_config.json": "202281ea202456cf382c0790c6ad906f",
"assets/lib/features/postLogin/referrer_links/referrer_link_config.json": "bdb1183235182db70bbc0d31de32ff92",
"assets/lib/features/postLogin/retailer_brand_links/retailer_brand_link_config.json": "3180517341a386864aced5829238cacb",
"assets/lib/features/postLogin/roles/role_config.json": "9618a9e8b204ef7959f45fb573b76c1d",
"assets/lib/features/postLogin/users/user_config.json": "324d953f5b60ffa8b65f2ae02857ff6b",
"assets/lib/features/postLogin/user_agency_links/user_agency_link_config.json": "435ddf012cdb66249ed0459f1648cf28",
"assets/lib/features/postLogin/user_influencer_links/user_influencer_link_config.json": "0437702f18422fe05cb611eec068362e",
"assets/NOTICES": "c980017b35fe75c295a8d9b69086cbeb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "86d89d28e1670b6e41c51b4bcc7df0f8",
"icons/Icon-192.png": "6734e13e104eb1d3fda07ce78fc82fdc",
"icons/Icon-512.png": "708443414f06dcc0190f447e6fbdda64",
"icons/Icon-maskable-192.png": "6734e13e104eb1d3fda07ce78fc82fdc",
"icons/Icon-maskable-512.png": "708443414f06dcc0190f447e6fbdda64",
"index.html": "0dc3fd82d9f4456611f0cd8e2fa44cb0",
"/": "0dc3fd82d9f4456611f0cd8e2fa44cb0",
"main.dart.js": "9217627d3dc741f8eaf34d12afde0370",
"manifest.json": "b1de62cb1964e6c45baa090026cd85a2",
"version.json": "6279b240ff3d46770d2459f7399c12ce"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
