'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "db5aa3c05afd5a268865839e95561ecc",
"favicon%20copy.png": "c7c3d5c97140a98e5cacbe6ca00356df",
"index.html": "94adcfa61b560123dfe731a5a5f2a2d3",
"/": "94adcfa61b560123dfe731a5a5f2a2d3",
"main.dart.js": "bf3072d3e2dac0ee79ec905abf273611",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main-icon.png": "c1e436b1c29204d242c34a8417f01c11",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "02fdf75df4269ae9f909e2a9a63ecacb",
".git/ORIG_HEAD": "27905cf36fe11f5a87ec547a6adc04e1",
".git/config": "9b6997ab0b1f79ef00b3ce983ce592e1",
".git/objects/95/b635a9cdf7b329dd5ec846a3f5e6b401e78906": "b06e0b7fb3d7d7ebbff0a0aa88c9e6bc",
".git/objects/92/011974b5b49c3b8f6c78259223e7a4278fb080": "3c87ef133949ac82e287af22199b3814",
".git/objects/50/7905310b05afe2341e3be912270f37f03d0da5": "e9b76551b22c8631a47c3a2ff569abcd",
".git/objects/68/815175f5f3b4377041155e4b43dc1e5bd8fad7": "cf8be8370284cd650aaefe66ba1d653c",
".git/objects/35/438a0d69632d1643416e860f19f2641646cb58": "67455e29ed39141ab69f30757a442e25",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/232f40970c82be0478840676fe824946640d41": "ea722a0d31e75069861d869c58f840e3",
".git/objects/93/2824e02aa84ee54c7d965b41075afcedae9110": "5b9953f52b0b8d0818613ff21107fb0e",
".git/objects/0e/478b614f71b76a97b606fb19c5f97b3fdf028c": "d0010fb0b25d4476a62c2dc771361617",
".git/objects/60/2882076b84bd0ad33a0f23d12d6c78c57df764": "6fec98efd9597cf22c26789ee8da9267",
".git/objects/34/b197e2ca92141c06493d3b5b1f0974e31abed9": "4987cca356904dd6c5753e876defed7f",
".git/objects/33/97852143098c745e87fcfa61ac1eb580770417": "eaa520a7be9a1fcef58bb448c1cbe8b3",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/d9/33a668919623bbacd8c4d03327368ca750328b": "20fafd892c0f31cca75a7ef68b6ff721",
".git/objects/d9/a3c4df8249ee55c68e9fdc658493785a8f8592": "7fef43a9372058b9387d2a8f9f3d5f34",
".git/objects/d9/0ccc7dd8d22e2eb406074c3184efa10cb6757f": "ed3c6a923bd482d9cce15832c7ff5535",
".git/objects/ac/96fd1960984e3caa714cfe5fbc3137e2beb636": "a02992a90aa8e22d35520f94acf610ed",
".git/objects/ac/e2931b61b6173cf150239a60dab2e05b5716b8": "727dce760bc1ccacf4d34744b43d7b9a",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/be/17d74268262d809316dee45f3af2fcf3b372a0": "0c7e144cc86f4f0cd4aa2c7153ecadf4",
".git/objects/b3/20fcf80ea79a6819960df59a7847b81456f661": "7ec3ed06d19bc4ddff296b501215048f",
".git/objects/df/89b35fbefce75498f5e8a00ecb821a8dddb62d": "d87d82e734890bf6ccd67738b1531a6f",
".git/objects/da/2ad558016352b42100451eb3f596a1281d9cd6": "46d6feb3c0a72ef7bf0214f4acb45d9a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/974fd5bbaac0b1d642b2b021f15d2083e173fd": "d1d606fe7d5a11198d805ad31f5f94c5",
".git/objects/e5/dd5811e2f73258ddbdf66598d61bd7a5f70151": "9929912df96f35adca0e2f791be5890e",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e2/d0e3a72d67803c15aee6fcb1fcd9ebf59c0d3e": "b64767f0a1063bf1ff1ba27fa2e6c0d7",
".git/objects/e2/9ea6afb7def6c9ead5ac10017afe79d6086f5d": "b4cee81948fbda357087d9537cb2c548",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/896d78082dde0f0654a88ac6a620c5d7507d1e": "994f403c605dd54ab97c4dd53bf0ffce",
".git/objects/eb/5afbdac55f19a026c8a9db1535a6c6e684396f": "4f65ed998f2741366f5a5db04456d0e5",
".git/objects/fc/82923ac46f6b2a01131b67a0952752674ac1ab": "f199d083ce04731a38a9db8f742b84a4",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/f5/8a902cf0883ff599ebcfc1e3a1b9137a77d7d8": "320820e5d5cdf9faefce109d2ac82d04",
".git/objects/ca/56ab837316642729b8ab2944cb95e327d15acf": "021341f00febc276e78e944ccfe4c3b4",
".git/objects/ca/fc2312363b44a1bc22da5e4997701dd6ee9510": "d2b86ba9e89284197ba1915f78420531",
".git/objects/fe/1b950e81ab844166873c917c1a99a3152dda9f": "ac15900ea91ed64ab98d7b223f2bc30e",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/7d/bc9b1a35859ee9696c06236c99003deb204fbf": "f292209f11f32ebc5e7c3fef02fcc570",
".git/objects/80/e99dfc280a854af129439770fec34ed8daa0b8": "d1514cc97e09f51d34b063a8d1b45936",
".git/objects/7b/e76b4ddf2a08b66358c16be523b364138349c2": "7eb1f985f627302a31f6014cf2c86d8f",
".git/objects/7b/e25da0093ed203bde4b7d19e7f56b7eb0bf51f": "c919a7307c5701df434663bd28f56bc1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/bebd972568ced9c5305e0a5ed2a48c8a2f0d34": "01ec424648ab563a0971341eeb743215",
".git/objects/86/39ef309dc1b69fcf60895a880b0670890ce3c4": "2ae7a554342ff675031cfad19c439c3b",
".git/objects/2f/f1e6a2550fb4ab765f3b533c7f24a742a0d5c0": "2092aabcedbd66d06e139b268a063db3",
".git/objects/43/2388a9dff42406eddc9828fe8a953f7c4f311d": "21663731d3cd696dd8735121761aafa8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/75ed7d35e206d9bef75f46a880e969985ad615": "0a9222d2fe75a6e5212b6fec4328c2c4",
".git/objects/38/0e755ba112b3f0679fa720ac268da661e77b88": "a35ca6b376cfad1c544bbacb25cfbabb",
".git/objects/6e/122c70b835a14e283600621aeaceb57c5e547e": "bf8945b2c649a5d56295ac396c21090b",
".git/objects/9a/740c17876127d0f4b3f2ba7d57450aca74a553": "3240af13307019d6d3789054aeab1f37",
".git/objects/36/ecc74a64a22a5d52530154f362411c758196bb": "7edceb2cdbe27fbe1c6e19bef017edef",
".git/objects/5c/a4ee34f22ae05ac92a2365287f2d03d6d71a3b": "23d116cd998db498cfaa434ac097d4dd",
".git/objects/5d/ccf064259f87eae382655b1e1f1e7dbcb965ca": "4f172fac40b75e755de5e52a71e9803f",
".git/objects/31/7e8d8afbabac937eeec72c6ce2d1b523086669": "64f453cf182941641c0dd38e334d74db",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/99/a2c4f5a55761304b308c947aa8a5d6f4634422": "b26578cb2b5604872669e65cb1694e51",
".git/objects/0f/3d263bb1569caba94eb4adddbc0fac5eabaf06": "bee891338163e0338f3fe6d1cc145af7",
".git/objects/64/27363e0f1ee128d30a4788fb6163e63ca1b7a1": "c3cc989e106665bb76b30b738b224f55",
".git/objects/90/9651a498890cd6d5ec73bedb8c37edf71115cb": "febe39040a567fe71fd968ad98be0ffd",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/b1/ca76a65d1916e79689ea110baf6496df09efed": "f26028776043e4ed29cc84c42f295467",
".git/objects/a9/d68f87548db620d66e07b4ae246975cee2533f": "18e49ccbe567a7219552f03b5707d79e",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/aa/db1856e14eb057b8bbb7d8be16788bf1f65408": "59ba7b2e33e1b07744495c2fe17d3c7f",
".git/objects/aa/e4fbc04a07cd05859a2514d29ce0b5519e50b9": "58c88e523a21a36d21c94711a06250e8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a6/b3ae0673e43ecb6ae6c3be8f222213a56d28a8": "76ccb6e13494b73ea33001724dfd8129",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/111f4e9cdd2ffa46fa9116698ecbab8dea1da9": "ee3df708c3597cd61bd125fc8f239458",
".git/objects/c3/79cbd0e2e02387d6db55bb780ba3684104fcb2": "71b0e610b3e7f3c66a9a174f6513e110",
".git/objects/c4/1a74707ac32594bdd834cf7a6363bf6745feb6": "dcd545feed6ad3d853815c127597ce2a",
".git/objects/ea/842cd360581e91f84e01152bd08a55627a7ae0": "7ab6ccbc1f23f417680d59026ffb017e",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cc/32425ec92b4c4b1bfc20c1c563cf9bd6df851a": "c7c538883f47aa04bdbf8e8a0c6850e1",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f7/d71d0e81a50d9b93f52c20f7e2001dc5f2adb5": "9c1fbc1d88af753ee954ade5a3796692",
".git/objects/f7/dd4ee228d3012a1f089936139d50ff20e37616": "a8813cb9bb23981cc7668abfc099dedb",
".git/objects/e8/5b92b4dd558b87aa112f88c8d118d56539734f": "ba85910b520d37b506d28e9f91ed4d2c",
".git/objects/fa/f06f6fd46ace3d42167042ce6226e106368a67": "99d8ea326f88501b294220da56133dbc",
".git/objects/fa/aa004b3092d8e658980cd3252e6fd52caf3436": "5d3aed44c17be828e2ddf9219c72854a",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/f6/c7717548551e22f9a5290b6b706394c8d22baf": "0a14a4f4cd9e13f3551d2fc0aaa30a42",
".git/objects/f6/da0f2b8737278141360a700986f68f95605144": "bb7b7a35fb01251ce19e9a3cbd7132ce",
".git/objects/cb/1c0900b9870fa318585098e56eba86a3807264": "170a02179a1d8a36fb50926b52bc1e1b",
".git/objects/f8/d97bb7127603ca94abe7ba37b8dc11352f9269": "d0343b9fc19cd927b8fe4b61f30d8eaf",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e0/be6ba296a4d8a9e48bd7262873d48fcf3b03c4": "3a0b52aba4985867e2525082c9c7f2ea",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/5586893e1862c05ade893489177cb5aa09ab6a": "4dfb367d28f8219d7c4fa25aec9e811b",
".git/objects/79/8ac5e38224407db1888f89e4857b058a82cdad": "0413673e68c33bf5f9bc6b5b70ea59e2",
".git/objects/2d/e031f77fe526a66d3678b2b84daea6596a481c": "c7ddef336f8c9903f9edf6a334f06228",
".git/objects/41/5831290a7b64def597ed94b87069881eb1b3a8": "7c27f9f5921cab11e60336e8086e4cab",
".git/objects/48/64e62b6f11a5ef1be827fc937de87b8c4e82d6": "e0672b8b9ea0a36e070e5d6cf04b2125",
".git/objects/1e/a87bf079bf0bdf58b8d144d10daf9c887c0497": "4a3c916312c98b8f644105ff76acd07d",
".git/objects/71/b029423a534e79965866d196b590b7efe77a79": "74b8a808426cd39b52d03e49a956344c",
".git/objects/71/c317df40918b3b581e1cb2de23a067397850e3": "289dafbea9815a05aafd482b27e69cf4",
".git/objects/2b/7e250bbdd4e70c7752f6b9927efa49af007768": "4a5f535776e4dde3a1921c431faee983",
".git/objects/2b/c36ee9f77554899210a8a3d7153225f1e24271": "8e6a46823aabce35e3890907e4a108bb",
".git/objects/14/81d3438c76b34d55db661b7d4347c3d86a0214": "c94c7590a5d222f555bfe82f250ced59",
".git/HEAD": "7c3929b67255835d49e1fc119908ec7e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "25561ef50dbb42c453fcea430e15ece6",
".git/logs/refs/heads/test_chcking_load": "ba7d9c439050bd11f921dd5587719f3b",
".git/logs/refs/heads/main": "324a6c04fa40bfd6e4ced36a8c0454c1",
".git/logs/refs/remotes/origin/test_chcking_load": "5639912465d264e67021740fd28dc22e",
".git/logs/refs/remotes/origin/main": "f45a5b8fdc56b9cbe504b9350d73459f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/test_chcking_load": "de6c1330db632e05c4bb976ddbbb783c",
".git/refs/heads/main": "27905cf36fe11f5a87ec547a6adc04e1",
".git/refs/remotes/origin/test_chcking_load": "de6c1330db632e05c4bb976ddbbb783c",
".git/refs/remotes/origin/main": "27905cf36fe11f5a87ec547a6adc04e1",
".git/index": "11f657991c925fa3c15454f5ab34f027",
".git/COMMIT_EDITMSG": "51bdbcad330e0bb49b2c66764272633b",
".git/FETCH_HEAD": "2819b961f97094304b30b70b8f61d15e",
"assets/AssetManifest.json": "3d575046f205286f1522b00c9d1919d9",
"assets/NOTICES": "76ade1c0ebc8c28894817ca8e3ed1d0b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "6e3e304c68839b9c1c5182226aedceee",
"assets/fonts/MaterialIcons-Regular.otf": "a22a6fb5440d59e922f81413aedd9402",
"assets/assets/images/Img_1.png": "8737b19ca2018ab533c0ea38926d307d",
"assets/assets/images/Img_0.png": "afbe6d2666c4766da1192ed32c81e379",
"assets/assets/images/Logo%2520Outlook.png": "b30d7f8d436a715920f5766a8f4f590c",
"assets/assets/images/Img_2.png": "50bf76bfe52288249408bfe76af6c02d",
"assets/assets/images/mega_logo.png": "8ff2a7756f7a0e3f4b19a318a567c82d",
"assets/assets/images/background_image.png": "775d477b0d5fd782000a14d1fe217963",
"assets/assets/images/user_2.png": "7eccb0a70693054530486c9faf4a27dd",
"assets/assets/images/user_3.png": "4175bf553052bdd6e1f3e93b71aab1b5",
"assets/assets/images/user_1.png": "b27e4014918be9067acf17512520f699",
"assets/assets/images/user_4.png": "bc10492e902061e17e16fd406be2c328",
"assets/assets/images/user_5.png": "8e98aa502e33de2e867686b60507a8c7",
"assets/assets/images/mega_text_logo.png": "f6dd02867910828c8303e5755f89b0c1",
"assets/assets/images/profile.png": "057d526daa4cfcbadc8e574c2dfbaa28",
"assets/assets/images/mega_logo_.png": "ff8e8c658691e7e1f9c134e1cf6c544e",
"assets/assets/images/logo_blur.png": "75dd05f76a67b5c8e852776973d11e6c",
"assets/assets/icons/Transfer.svg": "afc6001cc5d53124ffac78b68ad0ecbe",
"assets/assets/icons/Search.svg": "c7155466276712980bdf822025286c58",
"assets/assets/icons/Reply.svg": "378c21add4d4219e7969f647a2ea15be",
"assets/assets/icons/Markup%2520filled.svg": "40d059b79ceb381a4fff5cf4f94d7717",
"assets/assets/icons/Reply%2520all.svg": "cbeaee2532b1f864de2a7fb44c3da9dd",
"assets/assets/icons/Inbox.svg": "a4777c9e21a6fbd3802c164237a59b0e",
"assets/assets/icons/File.svg": "6ebd5cba586daf5f6a8cd2ae69974d01",
"assets/assets/icons/Markup.svg": "2a0f37b8f81e85e200239f26c8295718",
"assets/assets/icons/drawer_svg.svg": "38fcd21853f8532eadcb0a21811d4aa4",
"assets/assets/icons/Download.svg": "0605a445a2241a5f4d8039cbe62deb65",
"assets/assets/icons/Plus.svg": "db9e94598d5272bad2ed4d0095d3feb5",
"assets/assets/icons/Paperclip.svg": "d7e7dec5e3b15d70d1cc543902e3e3b8",
"assets/assets/icons/Angle%2520down.svg": "a0e3ff9e10cbd5a20fd4b3af570bb403",
"assets/assets/icons/Send.svg": "f29a3dd14ca59dec3c9cd1fe18cb8b4b",
"assets/assets/icons/Printer.svg": "4984ba164d6a117030f2066d5aa59e1f",
"assets/assets/icons/Trash.svg": "4a2cbcd29c9e345be576fc644b154810",
"assets/assets/icons/More%2520vertical.svg": "23720f8fc4d7e46f590006947dd30b42",
"assets/assets/icons/Edit.svg": "b4342990aa20448ca5c23e421217b76a",
"assets/assets/icons/Angle%2520right.svg": "aae36377adfd82ebde3949fdcfd7d383",
"assets/assets/icons/Sort.svg": "d3cfa59524245d5533c0ab4a5fc9d443",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
