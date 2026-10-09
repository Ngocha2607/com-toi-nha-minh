// Ảnh món ăn từ Pexels (tải bằng fetch-photos.js)
const PHOTOS = {
 "m1": {
  "by": "Vietnam  Hidden Light",
  "byUrl": "https://www.pexels.com/@vietnamhiddenlight",
  "url": "https://www.pexels.com/photo/deliciously-braised-pork-belly-in-rich-sauce-34474143/",
  "alt": "Savor the taste of tender braised pork belly in a rich, flavorful sauce."
 },
 "m2": {
  "by": "Polina Tankilevitch",
  "byUrl": "https://www.pexels.com/@polina-tankilevitch",
  "url": "https://www.pexels.com/photo/sweet-and-sour-pork-with-wooden-chopsticks-on-white-ceramic-bowl-5848495/",
  "alt": "A tasty plate of sweet and sour pork with veggies on a white background."
 },
 "m3": {
  "by": "Hồng Quang Official",
  "byUrl": "https://www.pexels.com/@h-ng-quang-official-647624701",
  "url": "https://www.pexels.com/photo/traditional-vietnamese-clay-pot-fish-dish-36090534/",
  "alt": "Authentic Vietnamese clay pot fish with spices, showcasing Đông Dương culinary traditions."
 },
 "m4": {
  "by": "Vladimir Srajber",
  "byUrl": "https://www.pexels.com/@vladimirsrajber",
  "url": "https://www.pexels.com/photo/cooked-meat-in-black-pan-14146060/",
  "alt": "A mouth-watering close-up of braised chicken and pork with potatoes in a hot pan."
 },
 "m5": {
  "by": "Lan Yao",
  "byUrl": "https://www.pexels.com/@lan-yao-324969",
  "url": "https://www.pexels.com/photo/close-up-photo-of-cooked-prawns-on-plate-6426095/",
  "alt": "A close-up of a plate with cooked prawns, showcasing a delicious Vietnamese dish."
 },
 "m6": {
  "by": "Lucas Andrade",
  "byUrl": "https://www.pexels.com/@lucasandrade",
  "url": "https://www.pexels.com/photo/macro-shot-of-fried-food-7949240/",
  "alt": "Delicious crispy fried tofu served in a skillet with a tasty dipping sauce. Perfect appetizer."
 },
 "m7": {
  "by": "Change C.C",
  "byUrl": "https://www.pexels.com/@change-c-c-974768353",
  "url": "https://www.pexels.com/photo/close-up-of-a-plate-with-a-gourmet-dish-27039847/",
  "alt": "Delicious beef stir fry with vegetables on a stylish plate, perfect for gourmet dining visuals."
 },
 "m8": {
  "by": "Horizon Content",
  "byUrl": "https://www.pexels.com/@horizon-content-2100060",
  "url": "https://www.pexels.com/photo/fried-food-in-white-ceramic-bowl-3727183/",
  "alt": "Close-up of crispy fried pork belly cubes served in a white bowl."
 },
 "m9": {
  "by": "Александр",
  "byUrl": "https://www.pexels.com/@1386738",
  "url": "https://www.pexels.com/photo/delicious-fried-fish-dish-with-fresh-tomatoes-and-greens-32154819/",
  "alt": "Mouth-watering fried fish served with tomatoes, onions, and green leaves on a glass plate."
 },
 "m10": {
  "by": "Marvin  Sacdalan",
  "byUrl": "https://www.pexels.com/@marvin-sacdalan-276316567",
  "url": "https://www.pexels.com/photo/close-up-shot-of-a-dish-on-a-plate-13065209/",
  "alt": "Close-up of a delicious chicken stir-fry with vegetables served on a white plate."
 },
 "m11": {
  "by": "Serdar Göksu",
  "byUrl": "https://www.pexels.com/@serdargoksu",
  "url": "https://www.pexels.com/photo/omelette-with-vegetable-salad-26161037/",
  "alt": "Delicious omelette accompanied by a fresh salad on a white plate, perfect for a healthy meal."
 },
 "m12": {
  "by": "Kei Scampa",
  "byUrl": "https://www.pexels.com/@kei-scampa-1201427",
  "url": "https://www.pexels.com/photo/tasty-fresh-dish-in-disposable-container-4702638/",
  "alt": "From above of delicious meal with squids and vegetables under herbs on table"
 },
 "m13": {
  "by": "FOX ^.ᆽ.^= ∫",
  "byUrl": "https://www.pexels.com/@fox-58267",
  "url": "https://www.pexels.com/photo/sliced-pork-with-dipping-sauce-and-rice-close-up-37146772/",
  "alt": "Close-up of sliced pork, dipping sauce, and rice on a dining table, showcasing Asian cuisine."
 },
 "m14": {
  "by": "Laura oliveira",
  "byUrl": "https://www.pexels.com/@laura-oliveira-2156849568",
  "url": "https://www.pexels.com/photo/sizzling-beef-stir-fry-with-vegetables-in-pan-34429557/",
  "alt": "Delicious stir-fry with beef, bell peppers, and carrots in a frying pan for a vibrant meal."
 },
 "m15": {
  "by": "Jana Ohajdova",
  "byUrl": "https://www.pexels.com/@jankao",
  "url": "https://www.pexels.com/photo/fish-with-herbs-and-rice-11830203/",
  "alt": "A flavorful steamed fish dish garnished with herbs, served with rice."
 },
 "m16": {
  "by": "Yuen Tou  Zan",
  "byUrl": "https://www.pexels.com/@tochtliyeung1996",
  "url": "https://www.pexels.com/photo/steamed-chicken-dish-with-dipping-sauce-and-garnish-39351515/",
  "alt": "Plate of steamed chicken with dipping sauce, garnished with parsley and edible flower."
 },
 "m17": {
  "by": "Tony  Wu",
  "byUrl": "https://www.pexels.com/@tonywuphotography",
  "url": "https://www.pexels.com/photo/shrimps-on-metal-tray-16561736/",
  "alt": "Close-up of freshly steamed shrimp stacked on a metal tray, ready to serve."
 },
 "m18": {
  "by": "Thông Nguyễn",
  "byUrl": "https://www.pexels.com/@thong-nguy-n-185552899",
  "url": "https://www.pexels.com/photo/traditional-vietnamese-grilled-betel-leaf-dish-36890178/",
  "alt": "A close-up of traditional Vietnamese grilled betel leaf dish cooked over charcoal in An Hoi, Vinh Long."
 },
 "m19": {
  "by": "SimplyArt4794",
  "byUrl": "https://www.pexels.com/@simplyart4794-53798833",
  "url": "https://www.pexels.com/photo/dough-with-meat-served-on-tray-10682119/",
  "alt": "Savor delicious dim sum tofu garnished with green onions, captured in an elegant setting."
 },
 "m20": {
  "by": "Lenon Mwamtobe",
  "byUrl": "https://www.pexels.com/@lenon-mwamtobe-230382064",
  "url": "https://www.pexels.com/photo/chicken-wings-and-fries-14661492/",
  "alt": "Delicious fried chicken wings paired with crispy fries and garnished with herbs on a wooden platter."
 },
 "m21": {
  "by": "ERIVELTO Martins",
  "byUrl": "https://www.pexels.com/@erivas",
  "url": "https://www.pexels.com/photo/delicious-meatballs-in-rich-tomato-sauce-34314421/",
  "alt": "Tasty meatballs garnished with parsley in a vibrant tomato sauce, perfect for any meal."
 },
 "m22": {
  "by": "Gu Ko",
  "byUrl": "https://www.pexels.com/@gu-ko-2150570603",
  "url": "https://www.pexels.com/photo/japanese-chawanmushi-dish-on-wooden-table-36964133/",
  "alt": "Chawanmushi: a savory Japanese steamed egg custard garnished with fresh greens."
 },
 "m23": {
  "by": "FOX ^.ᆽ.^= ∫",
  "byUrl": "https://www.pexels.com/@fox-58267",
  "url": "https://www.pexels.com/photo/delicious-vietnamese-braised-fish-meal-30613288/",
  "alt": "A mouthwatering Vietnamese braised fish dish with eggplant and rice."
 },
 "m24": {
  "by": "Marvin  Sacdalan",
  "byUrl": "https://www.pexels.com/@marvin-sacdalan-276316567",
  "url": "https://www.pexels.com/photo/squid-dish-in-white-ceramic-plate-13065211/",
  "alt": "A deliciously plated squid dish with vegetables on a white plate, perfect for gourmet dining."
 },
 "m25": {
  "by": "Anthony Rahayel",
  "byUrl": "https://www.pexels.com/@anthony-rahayel-125801377",
  "url": "https://www.pexels.com/photo/crispy-spring-rolls-on-floral-dish-38947729/",
  "alt": "A plate of golden crispy spring rolls served on a decorative floral dish."
 },
 "m26": {
  "by": "Nadin Sh",
  "byUrl": "https://www.pexels.com/@nadin-sh-78971847",
  "url": "https://www.pexels.com/photo/a-bowl-of-chicken-and-rice-24738520/",
  "alt": "Delicious Asian style chicken stir-fry with rice in a ceramic bowl."
 },
 "m27": {
  "by": "Mohamed  Olwy",
  "byUrl": "https://www.pexels.com/@mohamed9380",
  "url": "https://www.pexels.com/photo/grilled-beef-skewers-on-charcoal-grill-37080266/",
  "alt": "Juicy beef skewers sizzling on an open charcoal grill, perfect for summer BBQ."
 },
 "m28": {
  "by": "pedro furtado",
  "byUrl": "https://www.pexels.com/@pedrofurtadoo",
  "url": "https://www.pexels.com/photo/crispy-shrimp-sizzling-in-pan-for-culinary-delight-31094804/",
  "alt": "Close-up of perfectly seared shrimp in a frying pan highlighting culinary skills."
 },
 "m29": {
  "by": "Leongsan Tung",
  "byUrl": "https://www.pexels.com/@leongsan",
  "url": "https://www.pexels.com/photo/grilled-tofu-dish-with-scallions-in-kyoto-35132137/",
  "alt": "Delicious grilled tofu topped with fresh scallions on a ceramic plate in a Kyoto restaurant."
 },
 "m30": {
  "by": "Kevin Zamorano",
  "byUrl": "https://www.pexels.com/@kevin-zamorano-61080508",
  "url": "https://www.pexels.com/photo/beef-steak-cooking-on-a-frying-pan-8243229/",
  "alt": "Sizzling grilled salmon steaks with herbs in a non-stick frying pan for a savory meal."
 },
 "m31": {
  "by": "FOX ^.ᆽ.^= ∫",
  "byUrl": "https://www.pexels.com/@fox-58267",
  "url": "https://www.pexels.com/photo/chicken-thighs-frying-in-pan-24902945/",
  "alt": "Close-up of crispy fried chicken thighs sizzling in a hot pan, perfect for meal inspiration."
 },
 "v1": {
  "by": "Likeboss lertpongsaporn",
  "byUrl": "https://www.pexels.com/@likeboss-lertpongsaporn-32563063",
  "url": "https://www.pexels.com/photo/cooked-vegetables-in-a-plate-7361029/",
  "alt": "Delicious stir-fried water spinach with chili peppers, served on a rustic wooden table."
 },
 "v2": {
  "by": "Sóc Năng Động",
  "byUrl": "https://www.pexels.com/@soc-nang-d-ng-2150345854",
  "url": "https://www.pexels.com/photo/stir-fried-bok-choy-with-shiitake-mushrooms-36676215/",
  "alt": "Delicious stir-fried bok choy with shiitake mushrooms served elegantly in a blue-rimmed dish."
 },
 "v3": {
  "by": "Markus Winkler",
  "byUrl": "https://www.pexels.com/@markus-winkler-1430818",
  "url": "https://www.pexels.com/photo/close-up-of-cut-vegetables-20008778/",
  "alt": "A vibrant mix of vegetables stir-fried in a wok, featuring carrots and bean sprouts."
 },
 "v4": {
  "by": "Gu Ko",
  "byUrl": "https://www.pexels.com/@gu-ko-2150570603",
  "url": "https://www.pexels.com/photo/grilled-cabbage-wedges-cooking-in-a-skillet-37332207/",
  "alt": "Close-up of grilled cabbage wedges in a skillet on a kitchen stove."
 },
 "v5": {
  "by": "Esase",
  "byUrl": "https://www.pexels.com/@esase-2151653112",
  "url": "https://www.pexels.com/photo/delicious-indonesian-vegetable-stir-fry-dish-37073152/",
  "alt": "Colorful Indonesian vegetable stir fry with carrots and green beans on a plate."
 },
 "v6": {
  "by": "Ravi Sharma",
  "byUrl": "https://www.pexels.com/@ravinepz",
  "url": "https://www.pexels.com/photo/a-broccoli-and-carrots-on-the-frying-pan-7515373/",
  "alt": "A vibrant mix of broccoli, carrots, and peppers cooking in a pan."
 },
 "v7": {
  "by": "makafood",
  "byUrl": "https://www.pexels.com/@makafood-82669418",
  "url": "https://www.pexels.com/photo/korean-appetizers-served-in-a-restaurant-8954508/",
  "alt": "A close-up of a Korean mung bean sprout side dish served in a bowl, featuring vibrant colors and textures."
 },
 "v8": {
  "by": "Tamba Budiarsana",
  "byUrl": "https://www.pexels.com/@tamba09",
  "url": "https://www.pexels.com/photo/delicious-plecing-kangkung-dish-from-bali-indonesia-37107006/",
  "alt": "A flavorful and spicy Plecing Kangkung dish, a traditional Balinese delicacy served on a white plate."
 },
 "v9": {
  "by": "khezez  | خزاز",
  "byUrl": "https://www.pexels.com/@khezez",
  "url": "https://www.pexels.com/photo/delicious-sauteed-mushrooms-in-oval-dish-29935504/",
  "alt": "Top-down view of sautéed mushrooms in a white dish on a wooden table."
 },
 "v10": {
  "by": "RDNE Stock project",
  "byUrl": "https://www.pexels.com/@rdne",
  "url": "https://www.pexels.com/photo/close-up-shot-of-cooked-food-on-the-plate-6646080/",
  "alt": "Colorful Asian salad with fresh vegetables on a plate, perfect for healthy meals."
 },
 "v11": {
  "by": "Asya Vlasova",
  "byUrl": "https://www.pexels.com/@asya-vlasova-228168",
  "url": "https://www.pexels.com/photo/red-tomato-on-green-leaf-vegetable-4887994/",
  "alt": "Top view of a fresh vegetable salad with tomatoes, lettuce, and herbs in a bowl."
 },
 "v12": {
  "by": "Alesia  Kozik",
  "byUrl": "https://www.pexels.com/@alesiakozik",
  "url": "https://www.pexels.com/photo/roasted-vegetables-in-a-glass-tray-6129281/",
  "alt": "Delicious roasted pumpkin and mixed vegetables perfect for healthy vegan meals."
 },
 "v13": {
  "by": "FOX ^.ᆽ.^= ∫",
  "byUrl": "https://www.pexels.com/@fox-58267",
  "url": "https://www.pexels.com/photo/fresh-okra-with-thai-dipping-sauce-on-tray-37146769/",
  "alt": "Close-up of okra pieces served with Thai inspired shrimp paste sauce on a decorative tray."
 },
 "v14": {
  "by": "Czapp Árpád",
  "byUrl": "https://www.pexels.com/@czapp-arpad-3647289",
  "url": "https://www.pexels.com/photo/the-grilled-eggplants-11601079/",
  "alt": "Close-up of charred eggplants being grilled, showcasing rustic outdoor cooking."
 },
 "v15": {
  "by": "furkanfdemir",
  "byUrl": "https://www.pexels.com/@furkanfdemir",
  "url": "https://www.pexels.com/photo/person-holding-black-plate-with-cherry-tomatoes-and-asparagus-7239428/",
  "alt": "Plate with grilled asparagus, tomatoes, and potatoes held by a person indoors."
 },
 "v16": {
  "by": "Kai-Chieh Chan",
  "byUrl": "https://www.pexels.com/@qjpioneer",
  "url": "https://www.pexels.com/photo/close-up-shot-of-broccoli-on-a-plate-5266096/",
  "alt": "A close-up of fresh steamed broccoli served with sauce on a white plate, highlighting healthy cuisine."
 },
 "v17": {
  "by": "FOX ^.ᆽ.^= ∫",
  "byUrl": "https://www.pexels.com/@fox-58267",
  "url": "https://www.pexels.com/photo/fresh-green-vegetables-on-white-plate-32909275/",
  "alt": "A plate of fresh green vegetables served with sides for a healthy meal."
 },
 "v18": {
  "by": "Sóc Năng Động",
  "byUrl": "https://www.pexels.com/@soc-nang-d-ng-2150345854",
  "url": "https://www.pexels.com/photo/stir-fried-bok-choy-and-mushrooms-on-red-background-36676222/",
  "alt": "A vibrant dish of stir-fried bok choy and mushrooms served on a blue plate against a red background."
 },
 "v19": {
  "by": "Eaksit Sangdee",
  "byUrl": "https://www.pexels.com/@eaksit-sangdee-1672578",
  "url": "https://www.pexels.com/photo/stir-fried-zucchini-with-eggs-in-a-white-dish-on-a-white-isolated-background-thai-food-top-view-15797949/",
  "alt": "Freshly prepared Asian stir-fry with green vegetables and eggs, perfect for a healthy meal."
 },
 "v20": {
  "by": "Ellie Burgin",
  "byUrl": "https://www.pexels.com/@ellie-burgin-1661546",
  "url": "https://www.pexels.com/photo/mushrooms-and-spinach-19653600/",
  "alt": "Close-up of mushrooms and spinach being sautéed in a frying pan."
 },
 "c1": {
  "by": "Xuân Thống Trần",
  "byUrl": "https://www.pexels.com/@thongtran95",
  "url": "https://www.pexels.com/photo/delicious-fish-soup-17130431/",
  "alt": "A colorful bowl of Asian fish soup garnished with fresh vegetables and herbs."
 },
 "c2": {
  "by": "Loren Castillo",
  "byUrl": "https://www.pexels.com/@lorencastillo",
  "url": "https://www.pexels.com/photo/a-bowl-of-soup-and-spoon-surrounded-by-pumpkins-and-leaves-9124024/",
  "alt": "Bowl of pumpkin soup surrounded by autumn leaves and decorative pumpkins."
 },
 "c3": {
  "by": "FOX ^.ᆽ.^= ∫",
  "byUrl": "https://www.pexels.com/@fox-58267",
  "url": "https://www.pexels.com/photo/authentic-asian-vegetable-and-noodle-soup-30086569/",
  "alt": "Delicious bowl of Asian vegetable soup with fresh greens and dumplings, ideal for a healthy meal."
 },
 "c4": {
  "by": "Shameel mukkath",
  "byUrl": "https://www.pexels.com/@shameel-mukkath-3421394",
  "url": "https://www.pexels.com/photo/green-soup-in-ceramic-bowl-5175517/",
  "alt": "A flavorful green soup garnished with fresh kale and herbs, perfect for a healthy meal."
 },
 "c5": {
  "by": "Shameel mukkath",
  "byUrl": "https://www.pexels.com/@shameel-mukkath-3421394",
  "url": "https://www.pexels.com/photo/a-bowl-of-soup-with-crab-and-vegetables-17598225/",
  "alt": "Delicious seafood soup with crab and vegetables in a rustic bowl on a wooden table."
 },
 "c6": {
  "by": "makafood",
  "byUrl": "https://www.pexels.com/@makafood-82669418",
  "url": "https://www.pexels.com/photo/vegetable-soup-with-shrimps-in-a-ceramic-bowl-8982337/",
  "alt": "Delicious shrimp soup with vegetables in a ceramic bowl, perfect for food photography."
 },
 "c7": {
  "by": "Jahra Tasfia Reza",
  "byUrl": "https://www.pexels.com/@jahratreza",
  "url": "https://www.pexels.com/photo/top-view-of-three-bowls-of-egg-drop-soup-39851689/",
  "alt": "An overhead shot of three bowls of egg drop soup accompanied by decorative spoons."
 },
 "c8": {
  "by": "Nguyen Truong Khang",
  "byUrl": "https://www.pexels.com/@mazic",
  "url": "https://www.pexels.com/photo/traditional-vietnamese-tet-meal-preparation-36126354/",
  "alt": "A sumptuous Vietnamese meal set for Tet with traditional dishes, showcasing vibrant culture."
 },
 "c9": {
  "by": "makafood",
  "byUrl": "https://www.pexels.com/@makafood-82669418",
  "url": "https://www.pexels.com/photo/cooked-food-in-a-clay-pot-8896094/",
  "alt": "Delicious Korean stew with pork rib and fresh vegetables in a clay pot, showcasing vibrant traditional flavors."
 },
 "c10": {
  "by": "makafood",
  "byUrl": "https://www.pexels.com/@makafood-82669418",
  "url": "https://www.pexels.com/photo/close-up-photo-of-soup-in-black-bowl-8954509/",
  "alt": "A delicious spicy Korean tofu soup served hot in a black stone bowl with side dishes."
 },
 "c11": {
  "by": "makafood",
  "byUrl": "https://www.pexels.com/@makafood-82669418",
  "url": "https://www.pexels.com/photo/close-up-of-a-bowl-of-soup-8982381/",
  "alt": "Close-up of appetizing miso soup with fresh ingredients in a white bowl."
 },
 "c12": {
  "by": "FOX ^.ᆽ.^= ∫",
  "byUrl": "https://www.pexels.com/@fox-58267",
  "url": "https://www.pexels.com/photo/spicy-asian-clam-soup-with-lemongrass-and-peppers-37402011/",
  "alt": "A flavorful Asian clam soup garnished with lemongrass and sliced red peppers, served in an elegant bowl."
 },
 "c13": {
  "by": "Gu Ko",
  "byUrl": "https://www.pexels.com/@gu-ko-2150570603",
  "url": "https://www.pexels.com/photo/delicious-asian-winter-melon-and-shrimp-soup-37332344/",
  "alt": "A bowl of Asian winter melon soup with shrimp garnished with fresh cilantro."
 },
 "c14": {
  "by": "ivi nnnnnn",
  "byUrl": "https://www.pexels.com/@ivi-nnnnnn-129330",
  "url": "https://www.pexels.com/photo/hearty-homemade-asian-soup-with-herbs-38931656/",
  "alt": "Close-up of a bowl of Asian soup with herbs, served on a wooden table, evoking a cozy culinary experience."
 },
 "c15": {
  "by": "Gu Ko",
  "byUrl": "https://www.pexels.com/@gu-ko-2150570603",
  "url": "https://www.pexels.com/photo/asian-cuisine-soup-preparation-with-fresh-ingredients-37332316/",
  "alt": "Preparing a flavorful Asian soup with fresh mushrooms and vegetables in a kitchen setting."
 },
 "c16": {
  "by": "DΛVΞ GΛRCIΛ",
  "byUrl": "https://www.pexels.com/@davegarcia",
  "url": "https://www.pexels.com/photo/traditional-ecuadorian-chicken-soup-in-white-bowl-32655226/",
  "alt": "Warm and hearty Ecuadorian soup with chicken leg, vegetables, and herbs served in a white bowl."
 },
 "c17": {
  "by": "Annushka  Ahuja",
  "byUrl": "https://www.pexels.com/@annushka-ahuja",
  "url": "https://www.pexels.com/photo/soup-dish-in-ceramic-bowl-8054756/",
  "alt": "Close-up of a bowl of pork soup with green onions held indoors, highlighting warmth and comfort."
 },
 "c18": {
  "by": "FOX ^.ᆽ.^= ∫",
  "byUrl": "https://www.pexels.com/@fox-58267",
  "url": "https://www.pexels.com/photo/delicious-fish-soup-in-ceramic-bowl-37456033/",
  "alt": "A steaming bowl of fish soup garnished with herbs served in a traditional ceramic bowl on a bamboo tray."
 },
 "c19": {
  "by": "Novkov Visuals",
  "byUrl": "https://www.pexels.com/@novkov-visuals",
  "url": "https://www.pexels.com/photo/delicious-tomato-and-meat-soup-in-white-bowl-34618920/",
  "alt": "Close-up of a delicious tomato and meat soup served in a white bowl on a dark table."
 },
 "c20": {
  "by": "makafood",
  "byUrl": "https://www.pexels.com/@makafood-82669418",
  "url": "https://www.pexels.com/photo/a-soup-in-a-pot-8934866/",
  "alt": "A flavorful Korean soup served hot with kimchi and vegetables, perfect for a hearty meal."
 },
 "c21": {
  "by": "Rahul Sonawane",
  "byUrl": "https://www.pexels.com/@chefrbs",
  "url": "https://www.pexels.com/photo/green-cream-soup-in-a-bowl-20004982/",
  "alt": "Delicious spinach soup garnished with sesame seeds and greens, served in a rustic wooden bowl."
 },
 "d1": {
  "by": "Rodion Kutsaiev",
  "byUrl": "https://www.pexels.com/@frostroomhead",
  "url": "https://www.pexels.com/photo/top-view-photo-of-sliced-watermelons-3429784/",
  "alt": "A flat lay image of juicy watermelon slices on a white background, perfect for summer themes."
 },
 "d2": {
  "by": "SHVETS production",
  "byUrl": "https://www.pexels.com/@shvets-production",
  "url": "https://www.pexels.com/photo/background-of-ripe-bananas-with-blots-on-peel-7194965/",
  "alt": "Overhead view of delicious fresh bananas with pleasant scent and spots on smooth yellow peel"
 },
 "d3": {
  "by": "Tamanna Rumee",
  "byUrl": "https://www.pexels.com/@tamanna-rumee-52377920",
  "url": "https://www.pexels.com/photo/orange-slices-on-yellow-background-9108274/",
  "alt": "Juicy orange slices on a vivid yellow and orange gradient background."
 },
 "d4": {
  "by": "Gustavo Denuncio",
  "byUrl": "https://www.pexels.com/@gustavodenuncio",
  "url": "https://www.pexels.com/photo/close-up-of-fresh-dragon-fruits-in-market-display-31558794/",
  "alt": "An overhead view of vibrant pink dragon fruits neatly arranged in a market tray."
 },
 "d5": {
  "by": "alleksana",
  "byUrl": "https://www.pexels.com/@alleksana",
  "url": "https://www.pexels.com/photo/photo-of-sliced-fruits-4113827/",
  "alt": "Top view of vibrant papaya, lime, and orange slices showcasing freshness"
 },
 "d6": {
  "by": "Foodie Factor",
  "byUrl": "https://www.pexels.com/@foodie-factor-162291",
  "url": "https://www.pexels.com/photo/acai-bowl-with-mixed-berries-566564/",
  "alt": "Close-up of fresh blueberries and strawberries on yogurt with granola."
 },
 "d7": {
  "by": "Nguyễn Thị Thảo Hà (Ha Nguyen)",
  "byUrl": "https://www.pexels.com/@nguy-n-th-th-o-ha-ha-nguyen-2152741047",
  "url": "https://www.pexels.com/photo/traditional-vietnamese-dessert-bowls-in-h-i-an-33212602/",
  "alt": "Colorful Vietnamese dessert bowls with chè in Hội An, Vietnam's vibrant culinary street scene."
 },
 "d8": {
  "by": "Riki Risnandar",
  "byUrl": "https://www.pexels.com/@riki-risnandar-2265311",
  "url": "https://www.pexels.com/photo/yellow-sliced-fruit-on-white-plate-4023132/",
  "alt": "Close-up of ripe peeled mango slices on a white plate showcasing vibrant tropical fruit."
 },
 "d9": {
  "by": "R Langstang",
  "byUrl": "https://www.pexels.com/@r-langstang-1953857",
  "url": "https://www.pexels.com/photo/close-up-shot-of-fresh-guavas-14617820/",
  "alt": "A collection of fresh green guavas displayed in a traditional bamboo basket under natural sunlight."
 },
 "d10": {
  "by": "MART  PRODUCTION",
  "byUrl": "https://www.pexels.com/@mart-production",
  "url": "https://www.pexels.com/photo/a-grapes-on-a-bowl-7890031/",
  "alt": "A close-up of fresh red grapes in a white bowl, perfect for healthy eating themes."
 }
};
