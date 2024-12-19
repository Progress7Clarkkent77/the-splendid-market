'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"404.html": "f1ede82307a53e715e8703f515577bc6",
"assets/AssetManifest.bin": "a225a0995d446688e453aabed2ce2197",
"assets/AssetManifest.bin.json": "adf08c6426942092b28a47e4d655ec0f",
"assets/AssetManifest.json": "6f7ee49d02f638319acf80e4b2374fdb",
"assets/assets/images/boy.png": "24f22516ec47facdc2dc114f8c3de7db",
"assets/assets/images/cowriex.png": "5c3e769cfd991e88de3b57f2ec07ad0e",
"assets/assets/images/discord.jpg": "b5d4ce10a744861ffd3314d20d116976",
"assets/assets/images/facebook.png": "f44420e456c7e3289b32781579b0df54",
"assets/assets/images/Instagram.jpeg": "b8852623ca00a6839c76c38de251960f",
"assets/assets/images/instagram.png": "868d5d7356b75693c5975172de9bf9bc",
"assets/assets/images/marketing.png": "d6cc058afdb60ffbb247a4252ff425de",
"assets/assets/images/news.png": "e1cbdef82ca7aee7c3ad24db30f0e70e",
"assets/assets/images/news1.jpg": "5d327a3e58e5b32f192781425ae9a15a",
"assets/assets/images/productmarket.jpg": "dcdb21fea3977b87fab85269bcb41f1a",
"assets/assets/images/realestate.jpg": "da7cc5fc30e4e246ad29c8f2c07d46a3",
"assets/assets/images/realestate1.jpg": "1311621558e8f74a681c75f12f25e36d",
"assets/assets/images/realestate2.jpg": "f0d929191a97490202b3a1205d297847",
"assets/assets/images/realestate3.jpg": "7aeecf9ca83a271841d7b07adf15258f",
"assets/assets/images/realestate4.png": "dde0a56b887471641e03c6e3f82e864b",
"assets/assets/images/s1.jpg": "80f48535cb4f916a9f6e22666e030135",
"assets/assets/images/s1.png": "9be44d693d3791301aba97d91e8a46d0",
"assets/assets/images/s10.png": "57f8814cc062a33e291d770f93b6521e",
"assets/assets/images/s11.png": "d1c56ec99c35749dd834382c98ed3865",
"assets/assets/images/s12.jpeg": "bb177452ef8073ac898d24873b6b0951",
"assets/assets/images/s13.jpg": "0e63b8b9c32acc774036f3bbfc0f2be7",
"assets/assets/images/s14.png": "64be95c1312c20b75502d43f62fecfc3",
"assets/assets/images/s15.jpeg": "042471e8db596c64beb34fc46e15bc9e",
"assets/assets/images/s16.jpeg": "86d3f57cda5d9cdd064a59143598eb3a",
"assets/assets/images/s18.png": "fc3349bdb349c9e85e943424e590a2f7",
"assets/assets/images/s19.jpg": "20f865f474af2ddde1a8e501137e79d6",
"assets/assets/images/s2.jpg": "0c4214835342799fac862dc39059aed3",
"assets/assets/images/s20.jpeg": "dbd337a85e7ea146ab82e1c3b0d38758",
"assets/assets/images/s21.png": "a9a517a709fa4f6843121461003acaf2",
"assets/assets/images/s22.jpg": "fdcff574f4b2260f5557ea76a03cc0c1",
"assets/assets/images/s3.jpg": "3a36badcf4057a9f5390de154fb1f8ff",
"assets/assets/images/s4.jpeg": "9413d77fdf78645962cb39d14cbf42e6",
"assets/assets/images/s5.jpg": "11a3d79683cc8333fcb4cad8a04a3ded",
"assets/assets/images/s6.png": "6b692ba7096ec89b9468cf80e6a65d6b",
"assets/assets/images/s8.jpg": "e2bdf8d137c03d8173cea3bbf3af99fe",
"assets/assets/images/s9.jpg": "ecc2863274410fb429f4600f67b5dabd",
"assets/assets/images/servicemarket.jpg": "34e7daa71e63c10219ff47ce0875abea",
"assets/assets/images/ServiceMarket2.jpg": "cc3ca4b3b56d95f5721a18512c5cfce9",
"assets/assets/images/shop.png": "d9782aa77c9af2efca4a385ed2a73a8d",
"assets/assets/images/shop1.jpeg": "59689a94f08cb7902937e1f8aacb49d2",
"assets/assets/images/shop10.jpg": "95afb35c63eab88108ba29825589a596",
"assets/assets/images/shop11.jpg": "5afc37dcdea931d554a2e73b4bf24a69",
"assets/assets/images/shop12.png": "d270acea7d017282394771fbe0300fdf",
"assets/assets/images/shop13.jpg": "a3f8dcdc5474a3325c35b19ef431cbb6",
"assets/assets/images/shop14.jpg": "12253d343da10bf407cffe27f7e3687d",
"assets/assets/images/shop15.jpg": "11085dd276748e964d463dcd95b70d0f",
"assets/assets/images/shop2.jpeg": "1314cea55a593b0feefe1c277e279bae",
"assets/assets/images/shop3.jpeg": "ce239882817bce37b92b4c9a3a3b28da",
"assets/assets/images/shop4.png": "68124cd7c350939439cd791fd0ee420e",
"assets/assets/images/shop5.jpg": "3d516812fb3f0b05bcead76599e2eba7",
"assets/assets/images/shop6.png": "76b9043b14205823ce3db3caeb63c172",
"assets/assets/images/shop8.png": "df8d60c49027845126a6547fa8abe2fb",
"assets/assets/images/shop9.jpeg": "20d2f07c5b48168a478744b88976a7c8",
"assets/assets/images/success.png": "41d23e9b321a39530461716b511d2149",
"assets/assets/images/telegram.jpeg": "4cedea93ac4049ecb0e0845c12a2ae66",
"assets/assets/images/Telegram.png": "a9c8d9725f1842340c682d890524db8e",
"assets/assets/images/The%2520Splendid.png": "9fac12bac75a58381d92dcbb9c657eca",
"assets/assets/images/twitter.jpeg": "415e0a1f274950535043f863557133cf",
"assets/assets/images/whatsapp.png": "1810e5627bc72016036e4aaa47c16192",
"assets/assets/svg/marketing.svg": "f9eb2ab33e53c1b0660d62dd0fb21f21",
"assets/FontManifest.json": "ce54901791f5b88da68202615eab3eb0",
"assets/fonts/MaterialIcons-Regular.otf": "39a2714e125f6a1a37887e810213fbaf",
"assets/NOTICES": "b810f589a2402c1c76d5f08860018b6a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttericon/lib/fonts/Brandico.ttf": "791921e9b25210e2551b6eda3f86c733",
"assets/packages/fluttericon/lib/fonts/Elusive.ttf": "23f24df0388819e94db2b3c19841841c",
"assets/packages/fluttericon/lib/fonts/Entypo.ttf": "58edfaf27b1032ea4778b69297c02b5a",
"assets/packages/fluttericon/lib/fonts/FontAwesome.ttf": "799bb4e5c577847874f20bd0e9b38a9d",
"assets/packages/fluttericon/lib/fonts/FontAwesome5.ttf": "221b27a41202ddd33990e299939e4504",
"assets/packages/fluttericon/lib/fonts/Fontelico.ttf": "3a1e1cecf0a3eae6be5cba3677379ba2",
"assets/packages/fluttericon/lib/fonts/Iconic.ttf": "34e12214307f5f7cf7bc62086fbf55a3",
"assets/packages/fluttericon/lib/fonts/LineariconsFree.ttf": "276b1d61e45eb9b2dde9482545d9e3ac",
"assets/packages/fluttericon/lib/fonts/Linecons.ttf": "2d0ac407ed11860bf470cb01745fb144",
"assets/packages/fluttericon/lib/fonts/Maki.ttf": "9ecdcd7d24a2461a55d532b86b2740bd",
"assets/packages/fluttericon/lib/fonts/Meteocons.ttf": "8b9c7982496155bb39c67eaf2a243731",
"assets/packages/fluttericon/lib/fonts/MfgLabs.ttf": "09daa533ea11600a98e3148b7531afe3",
"assets/packages/fluttericon/lib/fonts/ModernPictograms.ttf": "5046c536516be5b91c15eb7795e0352d",
"assets/packages/fluttericon/lib/fonts/Octicons.ttf": "7242d2fe9e36eb4193d2bc7e521779bf",
"assets/packages/fluttericon/lib/fonts/RpgAwesome.ttf": "99232001effca5cf2b5aa92cc3f3e892",
"assets/packages/fluttericon/lib/fonts/Typicons.ttf": "3386cae1128e52caf268508d477fb660",
"assets/packages/fluttericon/lib/fonts/WebSymbols.ttf": "4fd66aa74cdc6e5eaff0ec916ac269c6",
"assets/packages/fluttericon/lib/fonts/Zocial.ttf": "c29d6e34d8f703a745c6f18d94ce316d",
"assets/packages/flutter_icons_plus/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons_plus/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons_plus/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons_plus/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons_plus/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons_plus/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons_plus/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons_plus/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons_plus/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons_plus/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons_plus/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons_plus/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons_plus/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons_plus/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons_plus/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons_plus/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/icons_flutter/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/icons_flutter/fonts/Brandico.ttf": "791921e9b25210e2551b6eda3f86c733",
"assets/packages/icons_flutter/fonts/Elusive.ttf": "23f24df0388819e94db2b3c19841841c",
"assets/packages/icons_flutter/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/icons_flutter/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/icons_flutter/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/icons_flutter/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/icons_flutter/fonts/FontAwesome5.ttf": "221b27a41202ddd33990e299939e4504",
"assets/packages/icons_flutter/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/icons_flutter/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/icons_flutter/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/icons_flutter/fonts/Fontelico.ttf": "3a1e1cecf0a3eae6be5cba3677379ba2",
"assets/packages/icons_flutter/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/icons_flutter/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/icons_flutter/fonts/LineariconsFree.ttf": "276b1d61e45eb9b2dde9482545d9e3ac",
"assets/packages/icons_flutter/fonts/Linecons.ttf": "2d0ac407ed11860bf470cb01745fb144",
"assets/packages/icons_flutter/fonts/Maki.ttf": "9ecdcd7d24a2461a55d532b86b2740bd",
"assets/packages/icons_flutter/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/icons_flutter/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/icons_flutter/fonts/Meteocons.ttf": "8b9c7982496155bb39c67eaf2a243731",
"assets/packages/icons_flutter/fonts/MfgLabs.ttf": "09daa533ea11600a98e3148b7531afe3",
"assets/packages/icons_flutter/fonts/ModernPictograms.ttf": "5046c536516be5b91c15eb7795e0352d",
"assets/packages/icons_flutter/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/icons_flutter/fonts/RpgAwesome.ttf": "99232001effca5cf2b5aa92cc3f3e892",
"assets/packages/icons_flutter/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/icons_flutter/fonts/Typicons.ttf": "3386cae1128e52caf268508d477fb660",
"assets/packages/icons_flutter/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/icons_flutter/fonts/WebSymbols.ttf": "4fd66aa74cdc6e5eaff0ec916ac269c6",
"assets/packages/icons_flutter/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "965f69ffab600b820de386b2ab401547",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "967f04c3041d490cf1d3233a8449362f",
"icons/Icon-192.png": "80861dcc36d902c5ba27e094ad44ee07",
"icons/Icon-512.png": "925cb3ab0181b4b7ff245a85c2970d63",
"icons/Icon-maskable-192.png": "80861dcc36d902c5ba27e094ad44ee07",
"icons/Icon-maskable-512.png": "925cb3ab0181b4b7ff245a85c2970d63",
"index.html": "405732695146b1b30ba7eb3476a1a0d6",
"/": "405732695146b1b30ba7eb3476a1a0d6",
"main.dart.js": "fba2c46879b3e9fbd852feebb4c8359f",
"manifest.json": "5154b5904e99778ec68f362dfb13f624",
"paystack_interop.js": "7cbb4e5d9502b8c2a48b1b206f0e563c",
"tawk_chat.html": "6f49570505b973c7a0af1be95a5d1d11",
"version.json": "a338a7a23d323e3f359cdcf37915db81"};
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
