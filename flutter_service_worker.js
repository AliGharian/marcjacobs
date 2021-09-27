'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "fe9402103f6ac846ceb5fe6ca16fdcaf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "45d62bfed199976f6fc6744ae4c13e99",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "04e7c43407d287fc997cad27f562ba60",
".git/logs/refs/heads/main": "8abd6fc86665b7fd71656ffc8ac3f71b",
".git/logs/refs/remotes/origin/master": "4c2164625b3bae6f41e9704908650df3",
".git/objects/05/39acd34bff2d6b10ed4e7687cf2c9d4808ab0f": "df2716908edd04045e37136b823a0104",
".git/objects/07/18572456dda650a0f974b38d907691b1e5e367": "bf4b4bc3002c7494dac952baa4a97285",
".git/objects/09/0e80eadcc8131d68c805d5d4018cefbb29b887": "50a5fcad37f8146f435dfa2a1191a259",
".git/objects/0b/988008862fc5d0a9f0383409100af60ce05149": "6a9d3e92d0b56af6f510a9e6de4dad20",
".git/objects/0d/5b9dd388e95629743bb5d4334a82a8f868f411": "e988d2f48f9f036b6732638d2734ea29",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/11/eee871934c260ff558f2ae2fea814e111f1064": "3bc1897fa97b3996d2c894ad7f5560d3",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/15/45bd235714421983abda30595e545c28308007": "933b303a867e76c7d2c495bcf5debcd7",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1c/c92b3e36956a31ac23bd4f38ac0ae93593e001": "b505a31b2fab16066edf897bd5d7b681",
".git/objects/1c/e214d8fa8846a873b4cd583a223354515ac4b3": "1431a264ed99500264e1996da9148a91",
".git/objects/1f/1afbece0527ae96f816eeadb33df5957c2be46": "c6702002e65935b6c65c5bd36f35d269",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/8faac0e40a8fdbb900cbc60987e129153f5335": "765df04366cff5032d55eac1f6a7c2e2",
".git/objects/23/93dfa4ce1c9f5db5dab784f09319f864f8e351": "dad845f78fcaac7801b198d07d625017",
".git/objects/2a/5d04c3930ceacdc317580411f22d257332359f": "416d46f1f82550984127a6d619d8e8e1",
".git/objects/2b/334042ce9686f4f06f106fadca8ca11a507ec6": "86495204abe0c5a7143c32f31d966162",
".git/objects/2b/61525359642ce1debe0ea2db290b01c2546381": "c5b1b4c95b9ad21451016c736f7df321",
".git/objects/3c/b983c3294fa3afb1e040211fe4928330386b49": "abf25d2a4ac752da23a697d0a0417ab1",
".git/objects/40/09d2fbc1d6fa83e6fdfd624c03fae704706e23": "6766db9963ccadad6306c7c902f911f5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/e4978ccb2ce13971c80685cfa72fc0cdc74417": "7f6d6333d09019766fc628dad7314e45",
".git/objects/4a/d221b35172f3648c3497dcd9c2a0cb8fb62ab9": "bd813bad105efb413f245a8aef1a0f5a",
".git/objects/4c/07daaa918297704db1c713abc5a366acdb607d": "51d5ac83ba7841dc54df4f336d20a7df",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/56/c0d0b62cd3ea020da4994adf86f026c46785a5": "d4855872f0bdcbab2ca2dbe9a2540b3a",
".git/objects/59/4393fab5b2f320a83d9c0148d4bcea8cb1a6a8": "38c4f0edb1576f0dd45ba1aca7bede28",
".git/objects/5f/d7e05bb2e531844d89720e0987cbc0a8d70cb5": "498c6609b6ca876499c06ddb9e884114",
".git/objects/62/02d9e6bbb79679b66c0aab6aa7e4eae7a03544": "ebbd1fb8b77fe47d4401d36063bdcb4d",
".git/objects/62/8482bccb2aaed0c05e7ea2fe94cddd8f7c114d": "d10742b0dffffc82ac02929e937e59a2",
".git/objects/68/ae9275b60177e1bb217bb2ccef4e29dceb587a": "0d8dc53fc68cd0777c88ead77c10bf28",
".git/objects/69/daf4f5967c7c1fffba8899765d72d4aab8a246": "8035daa5d7d6e5d81c62425828eba123",
".git/objects/6b/ab6cdc3b5266cdfcfc9429e8723b1c175e2edd": "72e28ce7fd5c35dffcffeab2a0695863",
".git/objects/7a/eddf5692d9f34fa8e17eee1fc937b56f22301e": "4f0ca374b2b9d4cbae489f5c2051a0ba",
".git/objects/7c/5f966d47c98094ccb596e50fcea57ceeaec2a9": "148e9a669273b1ba123fbdff81aea2e4",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/84/195004caadf64541dbba3c47902130d049d6dd": "c00c1a89e0af60552f4c0b3a48500ff6",
".git/objects/85/1ce2288e1fcea66eb175c5f5c2bf991c2893e9": "0f7972fe25a74bb31a7f32fd30083111",
".git/objects/85/ba79f630f03b9877eff12ca77c8d86078cc914": "2981f3d5d1b15e98c51d5b413fe3ceb0",
".git/objects/86/5074582b728789219d76b93a2ec376b174d988": "b69c0a4db346eb7c6b024a1d5a9080cf",
".git/objects/87/ee3e07cada2c5c4dcf22147c04a493122c37f2": "df64dc2148e9ae1b10c6de4d5f14f9f1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/e4d0c10b85229d9dfaacb41a0fb52fff4f779e": "c3271ca4b1266e009effdf453e7140c3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/f62252fccd1c936e4faf83205706eb04c4b033": "5661ed1c377ee31e5bd7d28c094c973a",
".git/objects/8d/42550434f6edcab25d50789e8983f75ebfe665": "08aff86d03137ba4ef3025b187eb42d2",
".git/objects/91/69b1b178c7b62b675a59e74628a53ae741f9b4": "0f60c416980bb6ef15aa71d37f61a9c7",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/97/b9e0621b2bc9d81dbcd84e8029dfb69d193ff7": "695f223f6d1fe942a8e5e8fc87c6ea4e",
".git/objects/9c/37700659afcfa9ebec36f7d5caea19f107384f": "2ce2f9c9bf837f201674e226e43ee8b2",
".git/objects/9d/068344c4668156febf0e125cd9093a1b831765": "a9931546d9013325e23722f3c5fa6c9e",
".git/objects/9d/f487207ddf83cd3d3cbf0474c4d4169e716ba9": "7b2c1911c49b1ed38f87791fd004c4c9",
".git/objects/a4/6c4e0dcd1c4ea8a5745ef3207f1b020c2e42cb": "1f0969319341905dc0e8a6a66af624d1",
".git/objects/a8/017ddd1a5dd7859bf1345caa2238cc1ec8548c": "34589a35e1353352a1b8b6e5af497493",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/f0d4c8837132c8d892d7b6b64c7d7bfc806c6e": "35406fa57b933707e90758386ca1a109",
".git/objects/ac/f306c3af2a361fc99e6b74ad6473e3c344a461": "9102e364e482a3a9e4838d6dd0f0e049",
".git/objects/b6/8555e1b98cafc36b8be50df001175467278d2c": "d141f0d687e19436c8f8a370fa60f26b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c0/4896d843fbe028f0c494e04ed74b8eebe7aa93": "6c9432fbd60791742d14057a910d1367",
".git/objects/c0/82c83335931128f972c3f05dc6efb4e28482f7": "8d12323e5841a4e0bccef158f20dc87a",
".git/objects/cd/20afbd3e8cac1f9a29a6f8c7eb19722d4ba4b1": "7baa58fab8868ec9dd4bfa347ea221b3",
".git/objects/d6/26537d8e9710c751c0a14d992dcd99c4d237bb": "c7d447c928a1efdfbacc065dffbacf27",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/e1/06869b50be546bed96f81c0e064e01e935177e": "96d7d1bf905afeb3ddb303bbf34b73b6",
".git/objects/ea/ac2ecd706ec26525bde7e209560c3c9a897890": "4d66f0da6c07bbc4b53d7a897fa90fdf",
".git/objects/ee/9aa6684cda5c7a59dc5478a87c0e14135fd9ba": "0677da0fea595fca1bf70ff774c386fb",
".git/objects/f1/2668a45f554fd8fbe57f7c6043cd99f343f660": "f423414c87094cc719f072e3fd9274a3",
".git/objects/f1/eb424ba4d028dedc2059b96fe3952cb51d8116": "5b4e352bbfe637bf4cd5495f8e5d72b3",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/fb/5a4329111fe73a034eeca7bb01db86805b98f7": "06b3e6bb924ebac24eee3317aaf8b497",
".git/objects/fb/ebf574a011373acb3a16a4ebb9781349f658b3": "b8fa0b2a7faaef9f373bea141b3abe86",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/refs/heads/main": "a697c3dc10005dc54b5c0cf22c68a0d8",
".git/refs/remotes/origin/master": "d490f006375d6849975eca48551aa687",
"assets/AssetManifest.json": "7d0dd3fd27b19b64cc5e439e117baee9",
"assets/assets/images/look1.png": "ee095b074a4a1b66b8e74f0dd9677231",
"assets/assets/images/look11.png": "fcd3a0714a08eb68ff44ea3afc95e52d",
"assets/assets/images/look12.png": "ffa62833f0d577f81c786f2f4ecc9a7e",
"assets/assets/images/look2.png": "d6dd04facdc05a80be0dddcc28780adc",
"assets/assets/images/look21.png": "27699454df4450e014b4120383f6c6d5",
"assets/assets/images/look22.png": "b1f36709321614e2203e97c39b75b7d3",
"assets/assets/images/look3.png": "0f64f86e68810e9b707e81b929224d39",
"assets/assets/images/look31.png": "09d4071ac866d5287bba8afeeb2ac4c1",
"assets/assets/images/look32.png": "63b4296a4f9df544b81324964abd5d63",
"assets/assets/images/look4.png": "eb91b2ca886f9761f18060c50ce00f02",
"assets/assets/images/look41.png": "c893519feed640d040040d6b8db46e6d",
"assets/assets/images/look42.png": "4bca6f830c3ca428246d065bce12fe18",
"assets/assets/images/look5.png": "1318babb08e55eced781270a1b275fb0",
"assets/assets/images/look51.png": "6e0596cc5e9986e17e8c64572c5f5eee",
"assets/assets/images/look52.png": "aea189fc49ff7594f626759110146411",
"assets/assets/images/look6.png": "78af806e650134968341060192e1a441",
"assets/assets/images/look61.png": "ec845da2bb5995598e20a19116e91c79",
"assets/assets/images/look62.png": "1a491b3f2cafe80539d8e4bbc09dfeb1",
"assets/assets/images/look7.png": "6fcf3281e77d7426d1e9cba4d217f5ab",
"assets/assets/images/look71.png": "5dcd736ecd5444e4066b0ef740bd28c5",
"assets/assets/images/look72.png": "a666525c7291be49399e3f6b8af57d12",
"assets/assets/images/look8.png": "52fe18f8732bffb44d05374841b994f7",
"assets/assets/images/look81.png": "f5f32a7fb87bc3b77197641ccca86b8f",
"assets/assets/images/look82.png": "1aec5927c9c9e83ded5deeb6636bb11f",
"assets/FontManifest.json": "7aaf3996738086bbd796613e14ef9e45",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "72f197cdd80dcab5e6e0cfe6cbb74f04",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4f4300c43a9fc57f0354b250f60110a7",
"/": "4f4300c43a9fc57f0354b250f60110a7",
"main.dart.js": "b32ce51e8a0befe047a58e1ad9a9f9bd",
"manifest.json": "83a2680d35946643f9514b5b46dbcb5a",
"version.json": "75cb0f5f32cf0566f8f2c747323b7d10",
"web.rar": "ce5f66d69082f161677778dacc61d1f1",
"web.zip": "9a4f8e1ac7ff8898a1904ec267bcb7d8",
"web2.zip": "6a52eb8c5bb025a7b074376f87dade39"
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
