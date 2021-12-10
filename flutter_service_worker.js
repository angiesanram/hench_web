'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "eb0c4a8aeccd1155295d72e7d4b40464",
".git/config": "a071f09ddf0301718eb9369aca1fe66b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "dee07b54a7685b0584f733bd0ba22a4c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cbd118f9b0dcb32c9d367afce4ce05e7",
".git/logs/refs/heads/master": "cbd118f9b0dcb32c9d367afce4ce05e7",
".git/logs/refs/remotes/origin/master": "07a72ba5b2be0d615582566db0741cd4",
".git/objects/00/b27922894a46a99e2a3ba696185f38a8b4f758": "56e8e899485ba7ee37e115ec1be0824d",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/a68fffcb4b678aace1788af6e722301d7fef3b": "1b3df6c5d7ab027c80a3b3ad048d4154",
".git/objects/04/b364e8255513ff0730318a8a4a8e7ec5d74101": "c043e7637040905d55b9eeb9061715bc",
".git/objects/05/5369f3d088273083759eb26bd4af61ef4ff938": "1ddcf3e6a2f0c93002eef74da21bc0fa",
".git/objects/0f/cb4fd3e791e5150109344a909d41047062f3c6": "f77b3d69ebadb627a84075fdfaf4331e",
".git/objects/19/0ffe2a78b68534bdb9c55ec0b388dace46e3ee": "b6a2e456af87bcd5d1b43dde3d528194",
".git/objects/21/e7998e9680853c860baa8e88b372d08e95f8b5": "b220ed69bdad70d24fbcf60623f5ca72",
".git/objects/22/4738909d9220040ce0bcb01daeb85743b941e1": "2ee0289a1aeb5b500d45bf2fa8f8d5f0",
".git/objects/2c/969fa17083682f768df4de5d5349c42685636a": "f5483f188ec0a3c00fd161e388fe481a",
".git/objects/2e/0dc53faa82a11299ea0b14054f3107dda6ef3c": "0d32a77a6c7037298380607d0f1866a8",
".git/objects/2e/d5e0f894f3a322e9537d8c030245a4f155aae8": "da6fc38b4c67f6588fa1d880f0d2e815",
".git/objects/30/6d76cbfa46b7f53590d53edfc74fec3128e359": "4820f82422d72ed4d093229b559e0892",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/764dc1352cf5807c2eab70982cabb10303e4f9": "d6101bc9b9483d7a2fb9b4f57cea03c6",
".git/objects/3c/b9f5c0fd4afdee8bcdf6365502d99310de896e": "846cc7386d411aa948d8bcbb9257c8c7",
".git/objects/42/cad0515dfd122c62456b0d126c5b9d97f55abd": "363d53e763cfb1c87cea9ef4ca46fae6",
".git/objects/43/7b1157cb4c32560095c6d40accde2956070c1c": "9e7e2f17a3467d973000e4231368942e",
".git/objects/44/8440454a239cb1c5e20801a59e4fe9cd6af1db": "3fe2f3c3afaaca8adb954b20833281d4",
".git/objects/44/ed3797e05238df7f9ab1b49544224bdbdf730b": "ac926472e4fe38f141069db6e176a309",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/72bf05ba9177eaddc860f996ddb9c886c98457": "51c6b1489cb8615d2a442277c5848a9f",
".git/objects/4a/303c1f8d6cf4098c040a54684787372c830c7b": "cb2e94ad9c167e0e340f0bcf9290954f",
".git/objects/4c/75592151d6940bb400abb7369a61161b64f264": "cc82ab3cc34fb2eb315e29a8a2b2986a",
".git/objects/4d/21ae5bb4f13897ab030d504d5c85bed40ca24e": "e8eb40186ea55bb7a4850a46570afafa",
".git/objects/53/e04c9b178b07a1c48f308fee581191bc10a26e": "ec10b748af72901a06e1498242239f28",
".git/objects/56/9642ed0d5cbb7835b6d68762528eb76a494795": "874018ec6a50086d7d46d2d2251b656e",
".git/objects/59/8af5ad5f36f36209ce5bad5f5e8771a73c589d": "f4ddcfbffab925b44d5c4fed0145959a",
".git/objects/5f/0570c11c1625173c004ada9107182f0c3ca6e6": "1feb28bdf93b87126465f34522b973d2",
".git/objects/62/5f1121e8c3ba64ac4e24a126872628cd347bcc": "ac2bb6abc428c42477ad4026252baf2b",
".git/objects/63/9ee8998156647d13541ee5737e0cfe8353544b": "e2b51191419e28d55c729bc9d9b2e5f8",
".git/objects/6d/c9d5a2a618e9b606781d6c242b1f069bcfd65b": "ffb64f13fa260879439ea641aa555450",
".git/objects/6e/079f6984098cc53f68a24390936a73a6dcd944": "9860083b26475cb02af305975737a70b",
".git/objects/70/fe58edda4496587f596648ab5c3ad09ce53708": "42764d796a17138531d567c4f99c61d5",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/80/6860a7d1f4d12d8f20a70dbeb98a88b9219bd4": "bd9d7d3ec520f0c8175f4ee74043bda4",
".git/objects/81/16eebae579adb9ea09a95210e4efc017b27694": "fd9d7a3080270994edbeb5c50fd2529c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/f4bfbf5d1a1bd9db7941f25c0747a61d9f36ea": "404aec67c48379ccc7c1c6ebfd7a77e1",
".git/objects/8c/604453a792a73568e37ca3f7ecfd60cd02d712": "cf27c2f78fa3ed088c7ac7ddebd66c42",
".git/objects/8d/c60aef020c6a1ce221b4b02de878c292aa5eae": "6480181424f0430e17092f502ba4531c",
".git/objects/92/716b5d95653f9d9ee4c69aad9a9dcbfc7f3d3b": "dd587e1dbe68240eb1b4912f690b73b1",
".git/objects/99/0857de8e03f4db6c2e1112045dfa37ed2d675d": "c6c0a2e381bb5650bc0bc39a55a42b2d",
".git/objects/9a/afe630c9e1ba7fe0b69eb9ed0fdca77ed6c301": "5fab8ba2186fd845bf6b430e7739142c",
".git/objects/9c/4a5965eb4b535f59101e7902ad538eb3de040a": "c5fa38bcc3b4153b902914e2e63cc9c1",
".git/objects/a0/74e367c25651f497d25c238cc505b8f361a889": "89841c80f28e92c75da09a78bca1e333",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/c2ad5847c6ad35ff2ee63e060bcd544ba13257": "63a9c4d60f25a233d2826dc45960f12c",
".git/objects/a8/1b3e73582178fc2d3b24dc6a96e3205b5f8d55": "7202db763d8da018dbd629a8034d3b37",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/af/83a52594742c6fba7ac8498341f53751329492": "dc3eab8df8b54f6fca2620dddaa46c60",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/58c4e518cb155eead0fc6705341a27a37d40eb": "bb95561a14716fe1a0cf0cc702e419d0",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/1baae96df2a6c42450ab59ec66a879a0bbc795": "580d39c229f1ebfbad4df0728284c104",
".git/objects/be/7958ff4756c2b0d79e139d7b4ac358a1b6484b": "26898be3d0e943b04ba548d3358bf91d",
".git/objects/c6/6a99f0a2b511492276b93530cb46c2bccd8cdb": "4ffcef572ee1833ada5dc81a23de5a08",
".git/objects/c6/e9a6d5fbdc65c0ef1a64a9e184822c66b7696a": "65fc9f5eaf3aed7c0af852962f311b70",
".git/objects/c8/793baba7b60347def562a7631062dc7d2ac433": "6473066a33095b1046e1dc1acb84e9e5",
".git/objects/c9/9089a05284d11794d68e1ef5deb1f7da13e610": "8280c3f226a9b82817fc907ac87c671d",
".git/objects/c9/f281dc998bf4eb8d8615f92f9499c2e9fb8b97": "439553be733cabc365c779a8cd5c8f03",
".git/objects/cc/54b2b01dfe3b31118c96faf670fd9f564e9658": "6a4f5b347022324d20b7c076ec7a2c7b",
".git/objects/ce/e857570466197499e8e7a205523951f6902a30": "b5eab62fe9ea86827c976347096ea75c",
".git/objects/d5/1b724e1acef2eb4d1b5779dac3af52ae5976fc": "d81c9b35494d3295f57ed6b498bcb0a5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/5e5f09aa3665572f9547d839f2f30ecb23314f": "cd54b4c90a496ae2af3e0979a0508a73",
".git/objects/d9/af4664cb9ce327a297a592b4acd1aecb4302eb": "b3263d9cf994519f8e30f6b5006f4bdb",
".git/objects/db/dee996e0aa5a748dacd8f5e8714c655b783211": "63942761320a10e0d5234a6f6f6f47bb",
".git/objects/dd/b3f23617be1ac51b49597debe795a3d61068a3": "adf082dea11a78ecec9e2526bd33784a",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/7e7a874401a648666928dde5eac666a5f5cf1e": "5a5fe079cd650123108975fecf7f5ae5",
".git/objects/e8/0f4dba17d04379c9615fe0ea40098b3517a87c": "7c758793bf6f35f9f22a90843216c419",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/ff123beb603bc129caaf78d0c694fef2e8f9a2": "345d2a8f4c3e454fe8a697215ca276e4",
".git/objects/ec/be5fe10e87e696f09d19cfc416d86192ae9ea7": "2caee50d9d99d2d096d2431999d8bef5",
".git/objects/ee/821984069234cf09042db5cd47dd59ecb7ed23": "2ef6f7c2bc4003cadcccffc82307909f",
".git/objects/f6/9842f8977936b22abb345409d748cfc63ec195": "970d0daef89121a3abd7ef90584d140e",
".git/objects/f9/a4d84ce07620b86ea9dd49e755a5a838419bc6": "b5fe87031d2683bddf40375d1e09684f",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/master": "3d3172fe59dfa3833391e858c3667bee",
".git/refs/remotes/origin/master": "3d3172fe59dfa3833391e858c3667bee",
"assets/AssetManifest.json": "e74a548757a63cb64e74777de43777d0",
"assets/assets/fonts/Montserrat-Black.ttf": "27e3649bab7c62fa21b8837c4842e40e",
"assets/assets/fonts/Montserrat-Light.ttf": "409c7f79a42e56c785f50ed37535f0be",
"assets/assets/fonts/Montserrat-Medium.ttf": "c8b6e083af3f94009801989c3739425e",
"assets/assets/images/create_workout.png": "f5de4dc74e360e4bad03fcb065ed7604",
"assets/assets/images/googleplay.png": "e4fa2c68d06fd39a8e26c62b3701ba8d",
"assets/assets/images/hench_icon.png": "35e7fadc1cf7dd97f7723e12e36581de",
"assets/assets/images/hero_image.jpg": "677c3b5e75fdb4dee923a2afbf38efda",
"assets/assets/images/icon.png": "358b23b27bb1e4274ff0957b97687dd5",
"assets/assets/videos/hero_recording.mp4": "200de0f8b8b510e7ef0549514a2d4e67",
"assets/FontManifest.json": "a954fc574b3effd41a272a0aefd1e0dc",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "0e0fb33aea25cfba4acbadfc577c16bb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "55cf32c84db1b6bc0b7e4fb17c216273",
"/": "55cf32c84db1b6bc0b7e4fb17c216273",
"main.dart.js": "0e8fced4207a3eaff4638ada5a597f1d",
"manifest.json": "7781ad2666998ca2c2dea7d44c58304d",
"version.json": "bcc969a587ce71a0fc955d46d73da0c3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
