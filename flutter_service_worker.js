'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"404.html": "f1ede82307a53e715e8703f515577bc6",
"assets/AssetManifest.bin": "9740592c343020f4c2ae99ca7c799a68",
"assets/AssetManifest.bin.json": "fd4783c0f19ff435de65ad58e51cc8ce",
"assets/AssetManifest.json": "e263c6f817ab57aeaca9e52f8d5d4a11",
"assets/assets/images/anticipate.png": "0e0b869fb274ef007d9f6777f98d5000",
"assets/assets/images/blockchain%2520logo.png": "a7e5a258608d415df1ae545ccf61a609",
"assets/assets/images/blockchain.jpg": "ce552caa0bd5bf924330974313674a8f",
"assets/assets/images/blockchain_Logo2.png": "0b11e8eafbcbea8e912a82e8e8ed4a7e",
"assets/assets/images/botpic.jpg": "a8872360fc2191e7475ae3e68979402e",
"assets/assets/images/botpic1.jpg": "9b18559dbb82e517d59afb67d86642f6",
"assets/assets/images/boy.png": "24f22516ec47facdc2dc114f8c3de7db",
"assets/assets/images/c1.jpg": "b56a6009a86f1cac8d1ea441d4ed92f6",
"assets/assets/images/c2.jpg": "d72c2741daca50efe15f5039f8969653",
"assets/assets/images/c3.jpg": "d68305fe8869b8ab7717530533fe6ac7",
"assets/assets/images/c4.png": "60b168974a6535725b0e351da39b0026",
"assets/assets/images/c5.jpeg": "f894e5c5f6d838e1741c3f738ada1779",
"assets/assets/images/c6.jpg": "d1b4d8a5604b23d0edfd2d58f46b9d34",
"assets/assets/images/contest.png": "6f490e060bd73d7b4ffae449b29a40f0",
"assets/assets/images/cowriex.png": "5c3e769cfd991e88de3b57f2ec07ad0e",
"assets/assets/images/cross-mark.png": "8a8cdb1e739b085b96dbd9f02370b4a7",
"assets/assets/images/d1.jpg": "5c1816886a4e2edbe29cb5944f1addb7",
"assets/assets/images/dar11.jpg": "a87f4f98ce9513c37f4edca772ca17b6",
"assets/assets/images/dark1.jpg": "f5da1438223b4e6e0bd63d542cfa3d47",
"assets/assets/images/dark11.jpg": "d9ec473f631d8064defe14391128e945",
"assets/assets/images/dark12.png": "24b1424f8517272674d3f4b5d38e2554",
"assets/assets/images/dark13.png": "a427d9faa0b3149c779c94aceba4184d",
"assets/assets/images/dark2.png": "0fc5679fc83478cd25a219f5b9322ce5",
"assets/assets/images/dark3.jpg": "c037b45fc5151da5be869c19e03e9845",
"assets/assets/images/dark4.jpg": "832ab49d3e54a750c3b51ae9142715c2",
"assets/assets/images/dark5.png": "6da2240439f1bb76b4afef7582309724",
"assets/assets/images/dark6.jpg": "eac10a798ffe52afcbb57a9501383ce5",
"assets/assets/images/dark8.jpg": "07ad3d2337e1c4056a54d452d0202319",
"assets/assets/images/dark9.png": "150bb2d58dac538435c59f5c4fd4b97e",
"assets/assets/images/discord.jpg": "b5d4ce10a744861ffd3314d20d116976",
"assets/assets/images/dollar.png": "1ef66d540f93eeebec765929361ea456",
"assets/assets/images/earn1.png": "fedf669bd2f2e65403a804b97147533d",
"assets/assets/images/earn2.jpg": "02e4ea9defee301dd6eef1165c9f82e5",
"assets/assets/images/earn3.png": "a7d5294a3604100996e84d3136e1eb9c",
"assets/assets/images/earn4.png": "f0c021c936954103aaacd081d855382e",
"assets/assets/images/facebook.png": "f44420e456c7e3289b32781579b0df54",
"assets/assets/images/facebook1.jpeg": "55ee12d07dcdb35c7d69ed5ad9c7322b",
"assets/assets/images/facebook2.png": "8feddc7a711d2f30d4509428c67e84ce",
"assets/assets/images/facebook3.jpg": "ad31ef3c4031e7c7b008c2d5978b0c22",
"assets/assets/images/impression.png": "f29c3d90675fa1a5d0f69e14277440e8",
"assets/assets/images/Instagram.jpeg": "b8852623ca00a6839c76c38de251960f",
"assets/assets/images/instagram.png": "868d5d7356b75693c5975172de9bf9bc",
"assets/assets/images/instagram1.jpeg": "2ce863431d747dd190f4d1b2978c117a",
"assets/assets/images/instagram2.jpeg": "16b1557f4c94bc28e2b5b6d1524a5aae",
"assets/assets/images/instagram3.png": "30579bba16e003feecfff00e8f51a662",
"assets/assets/images/light1.png": "7ae68f1ba46bac9ef961a61500f2116b",
"assets/assets/images/light2.png": "d6d14196de601624618384dde50eebd0",
"assets/assets/images/light3.png": "5d6d01bee57d7b439274b7c3619d6a74",
"assets/assets/images/light4.png": "ee9a64892acaa585d78db46aaa1a617a",
"assets/assets/images/light5.png": "210c7a14a75b9ce805eebb8b2534d3ff",
"assets/assets/images/light6.png": "a069669e130354a5815ce19993aa1b3e",
"assets/assets/images/light8.png": "a452d56b80d3d8dc183727eb655f6963",
"assets/assets/images/light9.png": "899c4eefc05418441709ee0d6020ca43",
"assets/assets/images/logo7.png": "3813af6ca300debe7c01e8519d8670e3",
"assets/assets/images/marketing.png": "d6cc058afdb60ffbb247a4252ff425de",
"assets/assets/images/naira.jpg": "dcc18d4c116ce5dc9354c936f15be14e",
"assets/assets/images/naira.png": "7fbfac2572826541603b055c78d0207a",
"assets/assets/images/news.png": "e1cbdef82ca7aee7c3ad24db30f0e70e",
"assets/assets/images/news1.jpg": "5d327a3e58e5b32f192781425ae9a15a",
"assets/assets/images/productmarket.jpg": "dcdb21fea3977b87fab85269bcb41f1a",
"assets/assets/images/productmarket1.png": "a8ff04bed9d76b105dcc4da48880afba",
"assets/assets/images/realestate.jpg": "da7cc5fc30e4e246ad29c8f2c07d46a3",
"assets/assets/images/realestate1.jpg": "1311621558e8f74a681c75f12f25e36d",
"assets/assets/images/realestate2.jpg": "f0d929191a97490202b3a1205d297847",
"assets/assets/images/realestate3.jpg": "7aeecf9ca83a271841d7b07adf15258f",
"assets/assets/images/realestate4.png": "dde0a56b887471641e03c6e3f82e864b",
"assets/assets/images/realestate5.png": "6763a9f139ee7311d150c04e0926f2c2",
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
"assets/assets/images/tiktok1.jpeg": "e2df74bd1777b1537b1dee9c8017f5bd",
"assets/assets/images/tiktok2.png": "6a8f1dcbccd7231a24d5cdccc432c7ea",
"assets/assets/images/tiktok3.jpg": "a9ec2bcbd82a57a79e1ea4ff991aab88",
"assets/assets/images/tiktok4.jpg": "45533b306e4252dfd4532948c85cde84",
"assets/assets/images/tiktok5.png": "bf16cb20ddd783eb5cedd421453af63a",
"assets/assets/images/twitter.jpeg": "415e0a1f274950535043f863557133cf",
"assets/assets/images/voting.jpg": "b82aedba853688c0bf09a4ef8de4843d",
"assets/assets/images/whatsapp.png": "1810e5627bc72016036e4aaa47c16192",
"assets/assets/images/white1.jpg": "212f894d4bbfa40decac75de0cd8b349",
"assets/assets/images/white2.jpg": "bd1f82fcb8d1ed29b3edfe487777b284",
"assets/assets/images/white3.jpg": "2e93efce604c491a470f19985f9b4105",
"assets/assets/images/white4.jpg": "bad9953b44fa248b9614ca0ac6f6c3b4",
"assets/assets/images/white5.jpg": "3a53cb1acb5621a1d1e5e46f32e6b27f",
"assets/assets/images/white6.jpg": "9fe7eada4fd69e5145379a393ed6ed9e",
"assets/assets/images/white8.jpg": "a1270c419f516e42730d85526bdb87c9",
"assets/assets/images/whiteb1.jpg": "e555841564f03e0cd80a5f63ae2af5e2",
"assets/assets/images/whiteb2.jpg": "abef5d82b8e8f48cfd41e550b5271bf4",
"assets/assets/images/whiteb3.png": "cdfa776ba989f022a4ef548ddc4920ad",
"assets/assets/images/whiteb4.jpeg": "528b3093aa78f9cab88b6d36c81eeefe",
"assets/assets/images/whiteb5.jpg": "2d33c642bcda179a4e149f37eef1eb53",
"assets/assets/images/whiteb6.jpg": "7851cd062ed4d42240d190ceef4924f3",
"assets/assets/images/whiteb8.png": "0b703c724dea63f9333f66a53ff08698",
"assets/assets/images/wip.jpg": "4775fff03e10e557597d7e7e3ccae426",
"assets/assets/images/wip.png": "c458d0191ca2ffe26a1084d2c702ba6b",
"assets/assets/images/youtube1.jpg": "e9b5046237c7bd591f9c2c401a22bfa5",
"assets/assets/images/youtube2.png": "723f61a779b0d32e85423c4609477c07",
"assets/assets/images/youtube3.png": "6887de2ac3315fbe17c7de22716761e8",
"assets/assets/svg/marketing.svg": "f9eb2ab33e53c1b0660d62dd0fb21f21",
"assets/FontManifest.json": "ce54901791f5b88da68202615eab3eb0",
"assets/fonts/MaterialIcons-Regular.otf": "2145eff2430c1545a2daee52b3223b64",
"assets/NOTICES": "9a06365cfa429d1bae4733bb43f5b943",
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
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "965f69ffab600b820de386b2ab401547",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "33d81444d7cec4d9d6f439450124673e",
"icons/Icon-192.png": "80861dcc36d902c5ba27e094ad44ee07",
"icons/Icon-512.png": "925cb3ab0181b4b7ff245a85c2970d63",
"icons/Icon-maskable-192.png": "80861dcc36d902c5ba27e094ad44ee07",
"icons/Icon-maskable-512.png": "925cb3ab0181b4b7ff245a85c2970d63",
"index.html": "8508c7df9ba98fcc39d015b531d4abe3",
"/": "8508c7df9ba98fcc39d015b531d4abe3",
"main.dart.js": "b923587b494abe0d4ca0d7fc792a4c22",
"manifest.json": "fa2db79a2acd13504dfe69ee6a8f37b7",
"paystack_interop.js": "7cbb4e5d9502b8c2a48b1b206f0e563c",
"tawk_chat.html": "6f49570505b973c7a0af1be95a5d1d11",
"version.json": "004488d1f4f069f9aea32e0c878c5ad7"};
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
