const recipes = [
  // ===========================
  // Bengali Recipes
  // ===========================
  {
    id: "fish-curry",
    name: "Bengali Fish Curry",
    image: "images/fish-curry.jpg",
    description: "A traditional spicy fish curry made with mustard paste & fresh spices.",
    video:"https://www.youtube.com/embed/RB1ZOlRIw0o?si=wxHrjv36sRv8AWoz" ,
    ingredients: [
      "Fish (Rohu or Hilsa)",
      "Mustard seeds",
      "Green chilies",
      "Turmeric",
      "Salt",
      "Mustard oil"
    ],
    steps: [
      "Marinate fish with turmeric and salt.",
      "Shallow fry fish pieces.",
      "Make mustard paste with chilies.",
      "Cook the paste in mustard oil.",
      "Add water and fish, simmer until cooked."
    ]
  },
  {
    id: "mishti-doi",
    name: "Mishti Doi",
    image: "images/mishti-doi.jpg",
    description: "Famous Bengali sweet yogurt, rich and creamy in taste.",
    video:"https://www.youtube.com/embed/yXiFXIwbbHI?si=MOeP7SIar6MMsfsl",
    ingredients: [
      "Full cream milk",
      "Sugar",
      "Jaggery (optional)",
      "Yogurt culture"
    ],
    steps: [
      "Boil the milk and reduce it.",
      "Caramelize the sugar and mix with milk.",
      "Let it cool slightly, add yogurt.",
      "Pour into containers and set overnight."
    ]
  },
  {
    id: "mutton-curry",
    name: "Mutton Curry",
    image: "images/mutton-curry.jpg",
    description: "Rich and spicy Bengali mutton curry cooked with potatoes.",
    video:"https://www.youtube.com/embed/GSn9cZFl33Q?si=27Ciu6YkXGqP7XDt" ,
    ingredients: [
      "Mutton pieces",
      "Potatoes",
      "Onion",
      "Tomato",
      "Yogurt",
      "Ginger-garlic paste",
      "Mustard oil",
      "Spices (turmeric, cumin, chili, garam masala)"
    ],
    steps: [
      "Marinate mutton with yogurt and spices.",
      "Fry potatoes golden brown and set aside.",
      "Cook onion, tomato, and ginger-garlic paste in mustard oil.",
      "Add mutton, fry well until oil separates.",
      "Add potatoes and water, cook until mutton is tender.",
      "Serve with hot rice."
    ]
  },
  {
    id: "dim-curry",
    name: "Dim Curry",
    image: "images/dim-curry.jpg",
    description: "Spicy Bengali egg curry cooked with potatoes.",
    video:"https://www.youtube.com/embed/6MCL_y3WxnM?si=FoI1LRrzEheqi1Mf",
    ingredients: [
      "Boiled eggs",
      "Potatoes",
      "Onion",
      "Tomato",
      "Green chilies",
      "Mustard oil",
      "Spices (turmeric, cumin, chili, garam masala)"
    ],
    steps: [
      "Boil eggs, peel, and fry lightly in oil.",
      "Fry potatoes until golden.",
      "Make curry base with onion, tomato, and spices.",
      "Add eggs and potatoes, cook with water until gravy is thick.",
      "Serve hot with steamed rice."
    ]
  },
  {
    id: "khichuri",
    name: "Khichuri",
    image: "images/khichuri.jpg",
    description: "Traditional Bengali comfort food made with rice, lentils, and spices. Perfect for rainy days with fried eggplant or hilsa fry.",
    video:"https://www.youtube.com/embed/RqzHLhyYIvQ?si=0UvYfjCY5FNiK9a3" ,
    ingredients: [
      "Rice",
      "Moong dal (yellow lentils)",
      "Potatoes",
      "Cauliflower",
      "Green peas",
      "Ginger paste",
      "Turmeric powder",
      "Bay leaf, cumin seeds",
      "Salt",
      "Mustard oil or ghee"
    ],
    steps: [
      "Wash rice and dal, then dry roast dal lightly.",
      "Heat mustard oil or ghee, add bay leaf and cumin seeds.",
      "Fry potatoes and cauliflower lightly.",
      "Add turmeric, ginger paste, salt, and fry well.",
      "Add rice and dal, mix with spices.",
      "Pour hot water and cook till rice and dal are soft.",
      "Add green peas at the end and simmer.",
      "Serve hot with fried eggplant or hilsa fry."
    ]
  },
  {
    id: "luchi-alurdom",
    name: "Luchi & Alur Dom",
    image: "images/luchi-alurdom.jpg",
    description: "Classic Bengali breakfast made of fried bread & spicy potato curry.",
    video:"https://www.youtube.com/embed/AGaAXtKKmxc?si=hcEuXehQ4a-_j_gp" ,
    ingredients: [
      "Maida (refined flour)",
      "Boiled potatoes",
      "Tomato",
      "Ginger paste",
      "Cumin, garam masala, salt"
    ],
    steps: [
      "Make dough with maida and water.",
      "Roll and fry luchis.",
      "Cook boiled potatoes with spices for curry."
    ]
  },

  // ===========================
  // Indian Recipes
  // ===========================
  {
    id: "butter-chicken",
    name: "Butter Chicken",
    image: "images/butter-chicken.jpg",
    description: "Creamy tomato-based chicken curry loved worldwide.",
    video:"https://www.youtube.com/embed/GM-PXacBSGI?si=HiV_TJdwVox1bRbm",
    ingredients: [
      "500g chicken (boneless, diced)",
      "2 onions (finely chopped)",
      "2 tomatoes (pureed)",
      "1/2 cup cream",
      "2 tbsp butter",
      "2 tbsp yogurt",
      "1 tsp ginger-garlic paste",
      "1 tsp turmeric powder",
      "1 tsp red chili powder",
      "1 tsp garam masala",
      "Salt to taste"
    ],
    steps: [
      "Marinate chicken with yogurt, chili powder, turmeric, and salt. Rest for 30 minutes.",
      "Heat butter in a pan, sauté onions until golden.",
      "Add ginger-garlic paste, then tomato puree and cook until oil separates.",
      "Add chicken and cook until tender.",
      "Mix cream and garam masala, simmer for 5 minutes.",
      "Serve hot with naan or rice."
    ]
  },
  {
    id: "paneer-tikka",
    name: "Paneer Tikka",
    image: "images/paneer-tikka.jpg",
    description: "Spiced cottage cheese cubes grilled to perfection.",
   video: "https://www.youtube.com/embed/c-oVDb-O2Q8?si=nP7thxCZPCKFza-S",
    ingredients: [
      "250g paneer (cut into cubes)",
      "1/2 cup thick yogurt",
      "1 tsp ginger-garlic paste",
      "1 tsp chili powder",
      "1 tsp turmeric powder",
      "1 tsp cumin powder",
      "1 tsp garam masala",
      "1 tbsp lemon juice",
      "1 capsicum (cut into cubes)",
      "1 onion (cut into cubes)",
      "Salt to taste"
    ],
    steps: [
      "Mix yogurt with spices, lemon juice, and ginger-garlic paste.",
      "Marinate paneer, onion, and capsicum in the mixture for 1 hour.",
      "Thread paneer and vegetables onto skewers.",
      "Grill or bake until golden with slight char marks.",
      "Serve with mint chutney."
    ]
  },
  {
    id: "biryani",
    name: "Hyderabadi Biryani",
    image: "images/biryani.jpg",
    description: "Aromatic rice cooked with spices, saffron, and chicken/mutton.",
    video:"https://www.youtube.com/embed/qFk20hWp878?si=Idt53iEtyBCRCru1",
    ingredients: [
      "500g chicken or mutton",
      "2 cups basmati rice",
      "2 onions (fried till golden)",
      "1/2 cup yogurt",
      "2 tomatoes (chopped)",
      "1 tbsp ginger-garlic paste",
      "Whole spices (cardamom, cinnamon, cloves, bay leaf)",
      "1 tsp red chili powder",
      "1 tsp turmeric",
      "1 tsp garam masala",
      "Saffron soaked in warm milk",
      "Ghee/oil",
      "Salt to taste"
    ],
    steps: [
      "Wash and soak rice for 30 minutes.",
      "Cook chicken/mutton with spices, onions, and yogurt until tender.",
      "Parboil rice with whole spices.",
      "Layer rice and meat in a pot, drizzle saffron milk and ghee.",
      "Cover tightly and cook on low flame (dum) for 20 minutes.",
      "Serve with raita."
    ]
  },
  {
    id: "masala-dosa",
    name: "Masala Dosa",
    image: "images/masala-dosa.jpg",
    description: "Crispy rice crepe stuffed with spiced potato filling.",
    video:"https://www.youtube.com/embed/rJSICjc5s84?si=eJGw0RL5sC67xNf7" ,
    ingredients: [
      "2 cups dosa batter",
      "3 potatoes (boiled and mashed)",
      "1 onion (sliced)",
      "2 green chilies (chopped)",
      "1/2 tsp mustard seeds",
      "1/2 tsp turmeric powder",
      "Few curry leaves",
      "Oil for cooking",
      "Salt to taste"
    ],
    steps: [
      "Heat oil in a pan, add mustard seeds, curry leaves, and green chilies.",
      "Add onions and sauté until soft.",
      "Mix turmeric and mashed potatoes, cook for 5 minutes.",
      "Spread dosa batter on hot tawa, drizzle oil around edges.",
      "Place potato filling in the center, fold dosa.",
      "Serve hot with coconut chutney and sambar."
    ]
  },
  {
    id: "gulab-jamun",
    name: "Gulab Jamun",
    image: "images/gulab-jamun.jpg",
    description: "Sweet fried dough balls soaked in rose-flavored sugar syrup.",
    video:"https://www.youtube.com/embed/VVhs1wj9DhU?si=gMUI3OUzV9AX3sZ0" ,
    ingredients: [
      "1 cup milk powder",
      "1/4 cup all-purpose flour",
      "1/4 tsp baking soda",
      "2 tbsp ghee",
      "1/4 cup milk (as needed)",
      "2 cups sugar",
      "2 cups water",
      "2-3 cardamoms",
      "1 tsp rose water",
      "Oil/ghee for frying"
    ],
    steps: [
      "Make dough with milk powder, flour, baking soda, ghee, and milk.",
      "Shape into small balls.",
      "Prepare sugar syrup with water, sugar, cardamom, and rose water.",
      "Deep fry balls on low flame until golden.",
      "Soak fried balls in warm syrup for at least 1 hour.",
      "Serve warm or chilled."
    ]
  },

  // ===========================
  // Italian Recipes
  // ===========================
  {
    id: "pizza",
    name: "Pizza Margherita",
    image: "images/pizza.jpg",
    description: "Classic Italian pizza with tomato, mozzarella, and basil.",
    video:"https://www.youtube.com/embed/Od5BCWRasNs?si=Z2nlvqe9unE9c5Uq" ,
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Fresh mozzarella",
      "Fresh basil leaves",
      "Olive oil",
      "Salt"
    ],
    steps: [
      "Spread tomato sauce over pizza dough.",
      "Top with mozzarella and basil leaves.",
      "Drizzle olive oil and bake in hot oven until crust is golden.",
      "Serve hot."
    ]
  },
  {
    id: "pasta-carbonara",
    name: "Pasta Carbonara",
    image: "images/pasta.jpg",
    description: "Creamy pasta with pancetta, eggs, and parmesan cheese.",
    video:"https://www.youtube.com/embed/W6Uvz2KmQGg?si=gwXgqCdsHeKwTaTJ",
    ingredients: [
      "Spaghetti pasta",
      "Pancetta or bacon",
      "2 eggs",
      "1/2 cup grated parmesan",
      "Black pepper",
      "Salt"
    ],
    steps: [
      "Cook pasta al dente.",
      "Fry pancetta until crisp.",
      "Mix eggs, parmesan, and black pepper.",
      "Combine hot pasta with pancetta, remove from heat.",
      "Quickly mix in egg mixture to create creamy sauce.",
      "Serve immediately."
    ]
  },
  {
    id: "lasagna",
    name: "Lasagna",
    image: "images/lasagna.jpg",
    description: "Layered pasta with meat sauce, béchamel, and cheese.",
    video:"https://www.youtube.com/embed/LLWqK4cgki8?si=J7RUOOrVOSQ4g5zK" ,
    ingredients: [
      "Lasagna sheets",
      "Minced beef or pork",
      "Tomato sauce",
      "Onion & garlic",
      "Béchamel sauce",
      "Mozzarella & parmesan",
      "Olive oil",
      "Salt & pepper"
    ],
    steps: [
      "Cook meat with onion, garlic, and tomato sauce.",
      "Layer lasagna sheets with meat sauce, béchamel, and cheese.",
      "Repeat layers and top with mozzarella.",
      "Bake until golden and bubbly.",
      "Serve hot."
    ]
  },
  {
    id: "risotto",
    name: "Risotto",
    image: "images/risotto.jpg",
    description: "Creamy rice dish cooked slowly with broth and parmesan.",
    video:"https://www.youtube.com/embed/NKtR3KpS83w?si=JbmA3D_o4JyUTKAT",
    ingredients: [
      "Arborio rice",
      "Onion",
      "Olive oil",
      "Vegetable or chicken broth",
      "Parmesan cheese",
      "Butter",
      "White wine (optional)",
      "Salt & pepper"
    ],
    steps: [
      "Sauté onion in olive oil.",
      "Add rice and toast lightly.",
      "Add broth gradually, stirring continuously.",
      "Cook until creamy but grains are al dente.",
      "Mix in butter and parmesan before serving."
    ]
  },
  {
    id: "tiramisu",
    name: "Tiramisu",
    image: "images/tiramisu.jpg",
    description: "Coffee-flavored dessert with mascarpone and cocoa.",
    video:"https://www.youtube.com/embed/7VTtenyKRg4?si=WNvBd2xrW-rYlKlh",
    ingredients: [
      "Ladyfinger biscuits",
      "Espresso coffee",
      "Mascarpone cheese",
      "Egg yolks",
      "Sugar",
      "Cocoa powder"
    ],
    steps: [
      "Dip biscuits in coffee and layer in dish.",
      "Whisk egg yolks with sugar, fold in mascarpone.",
      "Spread cream mixture over biscuits.",
      "Repeat layers and dust with cocoa.",
      "Chill for a few hours before serving."
    ]
  },
  {
    id: "bruschetta",
    name: "Bruschetta",
    image: "images/bruschetta.jpg",
    description: "Toasted bread topped with tomatoes, garlic, and olive oil.",
    video:"https://www.youtube.com/embed/Lvjb79dY3nQ?si=l2uUbuah2Zk08M6G" ,
    ingredients: [
      "Baguette slices",
      "Tomatoes",
      "Garlic",
      "Olive oil",
      "Fresh basil",
      "Salt & pepper"
    ],
    steps: [
      "Toast baguette slices until crisp.",
      "Rub with garlic clove.",
      "Top with chopped tomatoes, basil, olive oil, salt, and pepper.",
      "Serve fresh."
    ]
  },


    // ===========================
  // Chinese Recipes
  // ===========================
  {
    id: "chow-mein",
    name: "Chow Mein",
    image: "images/chow-mein.jpg",
    description: "Stir-fried noodles with vegetables, soy sauce, and chicken.",
    video:"https://www.youtube.com/embed/VXiUA--QqIY?si=jW3xcxAMUKM0Caat",
    ingredients: [
      "Noodles",
      "Chicken or beef strips",
      "Cabbage",
      "Carrot",
      "Capsicum",
      "Soy sauce",
      "Garlic & ginger",
      "Oil",
      "Salt & pepper"
    ],
    steps: [
      "Boil noodles and keep aside.",
      "Heat oil, sauté garlic and ginger.",
      "Add chicken and cook until tender.",
      "Add vegetables and stir fry on high heat.",
      "Mix in soy sauce and noodles, toss well.",
      "Serve hot."
    ]
  },
  {
    id: "sweet-sour-chicken",
    name: "Sweet & Sour Chicken",
    image: "images/sweet-sour-chicken.jpg",
    description: "Crispy chicken chunks tossed in tangy sweet & sour sauce.",
    video:"https://www.youtube.com/embed/cblsP5S9PhU?si=7YmSi5RHsZvKYnqi" ,
    ingredients: [
      "Boneless chicken pieces",
      "Cornflour",
      "Capsicum",
      "Pineapple chunks",
      "Onion",
      "Soy sauce",
      "Tomato ketchup",
      "Vinegar",
      "Sugar",
      "Oil for frying"
    ],
    steps: [
      "Coat chicken with cornflour and deep fry until crispy.",
      "Heat oil, stir fry onion, capsicum, and pineapple.",
      "Add ketchup, vinegar, soy sauce, and sugar.",
      "Mix fried chicken with sauce and toss well.",
      "Serve hot with rice."
    ]
  },
  {
    id: "kung-pao-chicken",
    name: "Kung Pao Chicken",
    image: "images/kung-pao.jpg",
    description: "Spicy stir-fried chicken with peanuts and chili peppers.",
    video:"https://www.youtube.com/embed/kIqQktFfB1M?si=Gma-aJL0v9bf9b0N",
    ingredients: [
      "Chicken breast (diced)",
      "Dry red chilies",
      "Peanuts",
      "Garlic",
      "Ginger",
      "Soy sauce",
      "Vinegar",
      "Sugar",
      "Cornstarch",
      "Spring onion"
    ],
    steps: [
      "Marinate chicken with soy sauce and cornstarch.",
      "Stir fry peanuts until golden, remove and keep aside.",
      "Heat oil, stir fry dry chilies, garlic, and ginger.",
      "Add chicken and cook until done.",
      "Mix in sauce, sugar, vinegar, and peanuts.",
      "Garnish with spring onion and serve."
    ]
  },
  {
    id: "spring-rolls",
    name: "Spring Rolls",
    image: "images/spring-rolls.jpg",
    description: "Crispy fried rolls filled with vegetables and meat.",
    video:"https://www.youtube.com/embed/2Kp--pUv7l8?si=eabkaqyMJHkWGOjV",
    ingredients: [
      "Spring roll wrappers",
      "Cabbage (shredded)",
      "Carrot (shredded)",
      "Capsicum",
      "Chicken or prawns (optional)",
      "Soy sauce",
      "Cornflour",
      "Oil for frying"
    ],
    steps: [
      "Stir fry vegetables and meat with soy sauce.",
      "Cool filling and wrap in spring roll sheets.",
      "Seal edges with cornflour paste.",
      "Deep fry until golden and crispy.",
      "Serve with chili sauce."
    ]
  },
  {
    id: "fried-rice",
    name: "Fried Rice",
    image: "images/fried-rice.jpg",
    description: "Classic fried rice with soy sauce, egg, and veggies.",
    video:"https://www.youtube.com/embed/P0ullgo0Lnw?si=TB5MUzmAdIeTe9Q5",
    ingredients: [
      "Cooked rice (cold)",
      "Eggs",
      "Carrot",
      "Beans",
      "Capsicum",
      "Spring onion",
      "Soy sauce",
      "Salt & pepper",
      "Oil"
    ],
    steps: [
      "Heat oil, scramble eggs and set aside.",
      "Stir fry vegetables on high flame.",
      "Add rice, soy sauce, salt, and pepper.",
      "Mix in scrambled eggs and spring onion.",
      "Serve hot."
    ]
  },
  {
    id: "dumplings",
    name: "Chinese Dumplings",
    image: "images/dumplings.jpg",
    description: "Steamed or fried dumplings filled with minced meat and vegetables.",
    video:"https://www.youtube.com/embed/9SMcNKBlJ2k?si=82PfTyfzgxO8I_sz",
    ingredients: [
      "Dumpling wrappers",
      "Minced chicken/pork",
      "Cabbage",
      "Spring onion",
      "Ginger",
      "Garlic",
      "Soy sauce",
      "Sesame oil"
    ],
    steps: [
      "Mix minced meat, cabbage, and seasonings for filling.",
      "Place filling inside wrappers and fold properly.",
      "Steam for 10–12 minutes or pan-fry until golden.",
      "Serve with soy dipping sauce."
    ]
  },


  {
    id: "sushi",
    name: "Sushi",
    country: "Japanese",
    image: "images/sushi.jpg",
    description: "Vinegared rice with fresh fish and vegetables, rolled or pressed.",
    video:"https://www.youtube.com/embed/ZzLPUoetSHw?si=FX1uDF8TTa9pZc6Y",
    ingredients: [
      "2 cups sushi rice",
      "3 tbsp rice vinegar",
      "Fresh salmon or tuna",
      "Nori sheets",
      "Cucumber & avocado"
    ],
    steps: [
      "Cook sushi rice and season with vinegar.",
      "Place nori sheet on mat, spread rice thinly.",
      "Add fish, cucumber, avocado in the center.",
      "Roll tightly and slice into pieces."
    ]
  
  },
  {
    id: "ramen",
    name: "Ramen",
    country: "Japanese",
    image: "images/ramen.jpg",
    description: "Japanese noodles in a savory broth with meat, egg, and vegetables.",
    video:"https://www.youtube.com/embed/CltUZnoUDFM?si=lFq2nLsMMpF-Grdk" ,
    ingredients: [
      "200g ramen noodles",
      "4 cups chicken broth",
      "Soy sauce & miso paste",
      "Soft-boiled egg",
      "Sliced pork & green onion"
    ],
    steps: [
      "Cook noodles and set aside.",
      "Simmer broth with soy sauce and miso paste.",
      "Add noodles into bowl, pour hot broth.",
      "Top with pork slices, boiled egg, green onion."
    ]
 
  },
  {
    id: "tempura",
    name: "Tempura",
    country: "Japanese",
    image: "images/tempura.jpg",
    description: "Lightly battered seafood and vegetables, deep fried until crispy.",
    video:"https://www.youtube.com/embed/3qzhCVxCSoA?si=Qh4R2UBLN8r7321j",
    ingredients: [
      "Shrimps & vegetables (carrot, zucchini, eggplant)",
      "1 cup all-purpose flour",
      "1 egg",
      "Cold water",
      "Oil for deep frying"
    ],
    steps: [
      "Prepare thin batter with flour, egg, and ice-cold water.",
      "Dip shrimp and veggies into batter.",
      "Fry in hot oil until golden and crisp.",
      "Serve with tempura dipping sauce."
    ]

  },

  {
    id: "kimchi",
    name: "Kimchi",
    country: "Korean",
    image: "images/kimchi.jpg",
    description: "Fermented cabbage with chili, garlic, and ginger.",
    video:"https://www.youtube.com/embed/rCtMyn-a_OA?si=tMKNz4A3MK_gUKO7",
    ingredients: [
      "1 medium Napa cabbage",
      "1/4 cup sea salt",
      "4 cloves garlic (minced)",
      "1 tbsp ginger (grated)",
      "2 tbsp fish sauce",
      "2 tbsp Korean chili flakes (Gochugaru)",
      "2 green onions (chopped)",
      "1 medium carrot (julienned)"
    ],
    steps: [
      "Chop cabbage and soak in salted water for 1–2 hours.",
      "Rinse and drain well.",
      "Mix garlic, ginger, fish sauce, chili flakes into a paste.",
      "Combine paste with vegetables.",
      "Pack tightly into a jar and let ferment 2–3 days at room temp.",
      "Refrigerate before serving."
    ]
  },
  {
    id: "bibimbap",
    name: "Bibimbap",
    country: "Korean",
    image: "images/bibimbap.jpg",
    description: "Rice bowl topped with vegetables, meat, and fried egg.",
    video:"https://www.youtube.com/embed/lqUtV6lT1n4?si=xqMG6tvRR6qnqAzG" ,
    ingredients: [
      "2 cups cooked rice",
      "1 cup assorted vegetables (spinach, carrots, bean sprouts, zucchini)",
      "200g beef (sliced and marinated)",
      "1 fried egg",
      "2 tbsp Gochujang (Korean chili paste)",
      "1 tsp sesame oil"
    ],
    steps: [
      "Sauté vegetables separately with little oil and salt.",
      "Grill or stir-fry beef until cooked.",
      "Place rice in a bowl, arrange vegetables on top.",
      "Add beef and fried egg at the center.",
      "Drizzle with sesame oil and serve with Gochujang."
    ]
  },
  {
    id: "bulgogi",
    name: "Bulgogi",
    country: "Korean",
    image: "images/bulgogi.jpg",
    description: "Marinated beef slices grilled with garlic and sesame oil.",
    video:"https://www.youtube.com/embed/1DFUDgtAyE8?si=PD0_PcjewRFvHIXB" ,
    ingredients: [
      "500g beef sirloin (thinly sliced)",
      "3 tbsp soy sauce",
      "2 tbsp sugar",
      "1 tbsp sesame oil",
      "3 cloves garlic (minced)",
      "1 small onion (sliced)",
      "1 tbsp sesame seeds"
    ],
    steps: [
      "Mix soy sauce, sugar, sesame oil, garlic for marinade.",
      "Add beef slices, marinate 1 hour.",
      "Stir-fry beef with onion until cooked.",
      "Sprinkle with sesame seeds and serve hot."
    ]
  },
  {
    id: "tteokbokki",
    name: "Tteokbokki",
    country: "Korean",
    image: "images/tteokbokki.jpg",
    description: "Spicy rice cakes stir-fried with chili sauce.",
    video:"https://www.youtube.com/embed/HQyOZuYrKdY?si=qzBf5d1mkglOO7hN",
    ingredients: [
      "200g Korean rice cakes",
      "2 cups water or anchovy broth",
      "2 tbsp Gochujang (Korean chili paste)",
      "1 tbsp sugar",
      "1 tbsp soy sauce",
      "1 green onion (sliced)",
      "1 boiled egg (optional)"
    ],
    steps: [
      "Boil water/broth in a pan.",
      "Add Gochujang, sugar, soy sauce and stir well.",
      "Add rice cakes and simmer 8–10 minutes until soft.",
      "Top with green onions and boiled egg before serving."
    ]
  },
  {
    id: "korean-bbq",
    name: "Korean BBQ",
    country: "Korean",
    image: "images/korean-bbq.jpg",
    description: "Grilled beef, pork, or chicken served with side dishes.",
    video:"https://www.youtube.com/embed/IHXt_X5vUAM?si=WgNDEDWxV1PPwyV9",
    ingredients: [
      "500g beef/pork/chicken (sliced)",
      "3 tbsp soy sauce",
      "2 tbsp sesame oil",
      "2 tbsp brown sugar",
      "3 cloves garlic (minced)",
      "1 tbsp sesame seeds",
      "Lettuce leaves & kimchi (for serving)"
    ],
    steps: [
      "Mix soy sauce, sesame oil, sugar, garlic for marinade.",
      "Marinate meat for 1–2 hours.",
      "Grill meat on BBQ or pan until cooked.",
      "Serve with lettuce wraps, kimchi, and dipping sauce."
    ]
  },
  {
    id: "japchae",
    name: "Japchae",
    country: "Korean",
    image: "images/japchae.jpg",
    description: "Stir-fried glass noodles with vegetables and soy sauce.",
    video:"https://www.youtube.com/embed/DIXKviwFXBo?si=KohlmWpJD6Yiu0O7" ,
    ingredients: [
      "200g sweet potato glass noodles",
      "1 cup assorted vegetables (carrot, spinach, bell pepper, mushrooms)",
      "150g beef (optional)",
      "3 tbsp soy sauce",
      "1 tbsp sugar",
      "1 tbsp sesame oil",
      "1 tsp sesame seeds"
    ],
    steps: [
      "Boil glass noodles until soft, rinse and set aside.",
      "Sauté vegetables lightly in oil.",
      "Stir-fry beef (if using) with soy sauce.",
      "Mix noodles with soy sauce, sugar, sesame oil.",
      "Add vegetables and beef, toss well, sprinkle sesame seeds."
    ]
  },

  {
  id: "tacos",
  name: "Tacos",
  country: "Mexican",
  image: "images/tacos.jpg",
  description: "Crispy tortilla shells filled with spiced meat, beans, and veggies.",
  video:"https://www.youtube.com/embed/ALeF0GUCSSk?si=TpBRu5jd1bi8uE-y" ,
  ingredients: [
    "8 corn or flour tortillas",
    "250g ground beef or chicken",
    "1 onion, chopped",
    "2 cloves garlic, minced",
    "1 tbsp taco seasoning",
    "1 cup lettuce, shredded",
    "1 tomato, diced",
    "1/2 cup cheddar cheese, grated",
    "Sour cream & salsa (for topping)"
  ],
  steps: [
    "Heat oil in a pan and sauté onion and garlic until fragrant.",
    "Add ground meat and cook until browned.",
    "Mix in taco seasoning and cook for 2 minutes.",
    "Warm tortillas on a pan.",
    "Fill each tortilla with meat, veggies, cheese, and toppings.",
    "Serve immediately."
  ]
},
{
  id: "guacamole",
  name: "Guacamole",
  country: "Mexican",
  image: "images/guacamole.jpg",
  description: "Fresh avocado dip blended with lime, onion, and coriander.",
  video:"https://www.youtube.com/embed/a6yCQdx3Pkg?si=rtutDUz9KlExHmXq" ,
  ingredients: [
    "3 ripe avocados",
    "1 lime, juiced",
    "1/2 onion, finely chopped",
    "1 tomato, chopped",
    "1 tbsp coriander leaves, chopped",
    "Salt & pepper to taste"
  ],
  steps: [
    "Cut avocados, remove seed, and mash in a bowl.",
    "Add lime juice to prevent browning.",
    "Mix in onion, tomato, and coriander.",
    "Season with salt and pepper.",
    "Serve fresh with tortilla chips."
  ]
},
{
  id: "enchiladas",
  name: "Enchiladas",
  country: "Mexican",
  image: "images/enchiladas.jpg",
  description: "Corn tortillas rolled around fillings, topped with chili sauce.",
  video:"https://www.youtube.com/embed/ublnZ9It0uc?si=BXkX67Ki5WHsLRPT" ,
  ingredients: [
    "6 corn tortillas",
    "2 cups shredded chicken or beef",
    "1 onion, chopped",
    "1 cup enchilada sauce",
    "1 cup cheddar cheese, shredded",
    "1/2 cup sour cream",
    "Fresh coriander for garnish"
  ],
  steps: [
    "Preheat oven to 180°C (350°F).",
    "Warm tortillas and fill with chicken/beef.",
    "Roll them and place in a baking dish.",
    "Pour enchilada sauce over them.",
    "Sprinkle with cheese and bake for 20 minutes.",
    "Garnish with sour cream and coriander before serving."
  ]
},
{
  id: "quesadillas",
  name: "Quesadillas",
  country: "Mexican",
  image: "images/quesadillas.jpg",
  description: "Grilled tortillas filled with cheese, beans, and salsa.",
  video:"https://www.youtube.com/embed/wTYD1dt7omk?si=0dZ2Q3MDqXFgR2uc",
  ingredients: [
    "4 flour tortillas",
    "1 cup cheddar or mozzarella cheese, grated",
    "1/2 cup cooked beans",
    "2 tbsp salsa",
    "1 tbsp butter"
  ],
  steps: [
    "Heat a pan with butter.",
    "Place a tortilla and sprinkle cheese, beans, and salsa.",
    "Top with another tortilla and cook until golden.",
    "Flip and cook the other side.",
    "Cut into wedges and serve with sour cream."
  ]
},
{
  id: "churros",
  name: "Churros",
  country: "Mexican",
  image: "images/churros.jpg",
  description: "Fried dough pastries rolled in sugar and cinnamon.",
  video:"https://www.youtube.com/embed/VYqoOiQsV0A?si=TO2uvtE3mlOFiO5U" ,
  ingredients: [
    "1 cup water",
    "2 tbsp sugar",
    "1/2 tsp salt",
    "2 tbsp butter",
    "1 cup flour",
    "2 eggs",
    "Oil for frying",
    "1/2 cup sugar + 1 tsp cinnamon (for coating)"
  ],
  steps: [
    "Boil water, sugar, salt, and butter in a pan.",
    "Add flour and stir until dough forms.",
    "Cool slightly and mix in eggs until smooth.",
    "Pipe dough into hot oil and fry until golden.",
    "Roll churros in cinnamon sugar.",
    "Serve with chocolate sauce."
  ]
},
{
  id: "nachos",
  name: "Nachos",
  country: "Mexican",
  image: "images/nachos.jpg",
  description: "Crispy tortilla chips topped with melted cheese and jalapeños.",
  video:"https://www.youtube.com/embed/Kc_hdbH2CB8?si=sk6xkKKwJuW-XEhh" ,
  ingredients: [
    "1 large bag tortilla chips",
    "1 cup cheddar cheese, shredded",
    "1/2 cup jalapeños, sliced",
    "1/2 cup black beans",
    "Sour cream & salsa for topping"
  ],
  steps: [
    "Preheat oven to 180°C (350°F).",
    "Spread tortilla chips on a baking tray.",
    "Top with cheese, jalapeños, and beans.",
    "Bake for 10 minutes until cheese melts.",
    "Serve hot with sour cream and salsa."
  ]
},


{
  id: "pad-thai",
  name: "Pad Thai",
  country: "Thai",
  image: "images/pad-thai.jpg",
  description: "Stir-fried rice noodles with shrimp, tofu, peanuts, and lime.",
  video:"https://www.youtube.com/embed/BXUBhqMJrLs?si=DxMyYdYzmNzP3zVP" ,
  ingredients: [
    "200g rice noodles",
    "150g shrimp (peeled & deveined)",
    "100g tofu (cubed)",
    "2 eggs (beaten)",
    "3 tbsp fish sauce",
    "1 tbsp tamarind paste",
    "1 tbsp sugar",
    "2 cloves garlic (minced)",
    "1 cup bean sprouts",
    "1/4 cup roasted peanuts (crushed)",
    "2 tbsp oil",
    "Lime wedges"
  ],
  steps: [
    "Soak rice noodles in warm water until soft, drain.",
    "Heat oil in wok, sauté garlic and tofu.",
    "Add shrimp and stir-fry until pink.",
    "Push to side, scramble eggs in pan.",
    "Add noodles, fish sauce, tamarind, sugar and mix.",
    "Stir in bean sprouts, peanuts, and serve with lime wedges."
  ]
},
{
  id: "tom-yum",
  name: "Tom Yum Soup",
  country: "Thai",
  image: "images/tom-yum.jpg",
  description: "Spicy and sour soup with lemongrass, shrimp, and mushrooms.",
  video:"https://www.youtube.com/embed/eJPVWaBCDt0?si=y1zv23NGkoM_OxBn",
  ingredients: [
    "200g shrimp (peeled)",
    "4 cups chicken stock",
    "2 stalks lemongrass (smashed)",
    "3 kaffir lime leaves",
    "2 tbsp fish sauce",
    "2 tbsp lime juice",
    "3-4 Thai chilies (smashed)",
    "1 cup mushrooms (sliced)",
    "2 cloves garlic (crushed)",
    "Fresh cilantro (for garnish)"
  ],
  steps: [
    "Bring chicken stock to boil with lemongrass, lime leaves, and garlic.",
    "Add mushrooms, chilies, and shrimp.",
    "Season with fish sauce and lime juice.",
    "Simmer for 5-7 minutes until shrimp is cooked.",
    "Garnish with cilantro and serve hot."
  ]
},
{
  id: "green-curry",
  name: "Green Curry",
  country: "Thai",
  image: "images/green-curry.jpg",
  description: "Rich coconut milk curry with green chili paste and vegetables.",
  video:"https://www.youtube.com/embed/-cnfV7PwHH4?si=nITtqz2es8bntaen" ,
  ingredients: [
    "400ml coconut milk",
    "2 tbsp green curry paste",
    "200g chicken (sliced)",
    "1 cup eggplant (cubed)",
    "1 red bell pepper (sliced)",
    "2 tbsp fish sauce",
    "1 tbsp sugar",
    "Fresh Thai basil leaves"
  ],
  steps: [
    "Heat half coconut milk, stir in green curry paste.",
    "Add chicken and cook until slightly browned.",
    "Pour remaining coconut milk, add eggplant and bell pepper.",
    "Season with fish sauce and sugar.",
    "Simmer until vegetables are tender.",
    "Garnish with basil and serve hot with rice."
  ]
},
{
  id: "red-curry",
  name: "Red Curry",
  country: "Thai",
  image: "images/red-curry.jpg",
  description: "Spicy Thai red curry with chicken, coconut milk, and bamboo shoots.",
  video:"https://www.youtube.com/embed/dEMPVKQXSYA?si=I2yto7aayqXRI2yX" ,
  ingredients: [
    "400ml coconut milk",
    "2 tbsp red curry paste",
    "200g chicken (sliced)",
    "1 cup bamboo shoots (sliced)",
    "1 zucchini (sliced)",
    "2 tbsp fish sauce",
    "1 tbsp sugar",
    "Fresh Thai basil leaves"
  ],
  steps: [
    "Heat coconut milk in a pan and add red curry paste.",
    "Stir in chicken, cook until half done.",
    "Add bamboo shoots and zucchini.",
    "Season with fish sauce and sugar.",
    "Simmer until chicken is cooked through.",
    "Top with basil and serve hot with steamed rice."
  ]
},
{
  id: "mango-sticky-rice",
  name: "Mango Sticky Rice",
  country: "Thai",
  image: "images/mango-sticky-rice.jpg",
  description: "Sweet sticky rice with coconut milk and ripe mango slices.",
  video:"https://www.youtube.com/embed/NUbM8-0zr8U?si=_cKKtGE7zbPbP3qa" ,
  ingredients: [
    "1 cup glutinous rice",
    "1 cup coconut milk",
    "1/2 cup sugar",
    "1/4 tsp salt",
    "2 ripe mangoes (sliced)",
    "1 tbsp toasted sesame seeds"
  ],
  steps: [
    "Cook sticky rice until tender.",
    "Heat coconut milk, sugar, and salt until dissolved.",
    "Pour mixture over cooked rice, let absorb.",
    "Serve rice with fresh mango slices.",
    "Sprinkle with toasted sesame seeds."
  ]
},
{
  id: "thai-fried-rice",
  name: "Thai Fried Rice",
  country: "Thai",
  image: "images/thai-fried-rice.jpg",
  description: "Flavorful fried rice with fish sauce, egg, and vegetables.",
  video:"https://www.youtube.com/embed/aJG6ciHoxb4?si=-Ka1-r9SzmJ8uNFr" ,
  ingredients: [
    "3 cups cooked jasmine rice",
    "2 eggs (beaten)",
    "1 onion (chopped)",
    "1 carrot (diced)",
    "1/2 cup peas",
    "2 tbsp fish sauce",
    "1 tbsp soy sauce",
    "2 tbsp oil",
    "Spring onions (for garnish)"
  ],
  steps: [
    "Heat oil in wok, sauté onion and carrot.",
    "Push aside, scramble eggs.",
    "Add rice, fish sauce, and soy sauce.",
    "Stir in peas and mix well.",
    "Garnish with spring onions and serve hot."
  ]
},


{
    id: "kebab",
    name: "Kebab",
    country: "Turkish",
    image: "images/kebab.jpg",
    description: "Juicy grilled meat skewers with spices and herbs.",
    video:"https://www.youtube.com/embed/tNIMwUKCeNE?si=84-7EXkb4HO-XqmN" ,
    ingredients: [
      "500g lamb or beef",
      "2 tbsp olive oil",
      "1 onion (grated)",
      "2 garlic cloves (minced)",
      "1 tsp cumin",
      "1 tsp paprika",
      "Salt & pepper"
    ],
    steps: [
      "Mix minced meat with onion, garlic, olive oil, and spices.",
      "Shape into skewers.",
      "Grill until cooked through and juicy.",
      "Serve with flatbread and salad."
    ]
  },
  {
    id: "baklava",
    name: "Baklava",
    country: "Turkish",
    image: "images/baklava.jpg",
    description: "Sweet dessert pastry with layers of filo, honey, and nuts.",
    video:"https://www.youtube.com/embed/8IIjVmMf5Nw?si=GhDMXa_DcQkhonn1",
    ingredients: [
      "300g filo pastry",
      "200g walnuts/pistachios",
      "200g butter",
      "250g sugar",
      "150ml water",
      "3 tbsp honey"
    ],
    steps: [
      "Layer filo pastry with butter and nuts.",
      "Bake until golden brown.",
      "Prepare syrup with sugar, water, and honey.",
      "Pour syrup over baked pastry and let it soak."
    ]
  },
  {
    id: "turkish-delight",
    name: "Turkish Delight",
    country: "Turkish",
    image: "images/turkish-delight.jpg",
    description: "Soft, chewy candy flavored with rosewater and nuts.",
    video:"https://www.youtube.com/embed/mmphz6ZBLeo?si=VfYVrO-fSZEXVqEf" ,
    ingredients: [
      "500g sugar",
      "300ml water",
      "100g cornstarch",
      "1 tsp lemon juice",
      "1 tsp rosewater",
      "Powdered sugar for coating",
      "Chopped pistachios (optional)"
    ],
    steps: [
      "Boil sugar, water, and lemon juice to make syrup.",
      "Mix cornstarch with water and cook until thick.",
      "Combine with syrup and add flavoring.",
      "Pour into tray, cool, cut into cubes, and coat with powdered sugar."
    ]
  },
  {
    id: "lahmacun",
    name: "Lahmacun",
    country: "Turkish",
    image: "images/lahmacun.jpg",
    description: "Thin flatbread topped with minced meat, veggies, and spices.",
    video:"https://www.youtube.com/embed/AXbqa8ROTvI?si=uE6F8UucuTe7jLx8" ,
    ingredients: [
      "300g flour",
      "150ml water",
      "200g minced beef/lamb",
      "1 onion",
      "1 tomato",
      "1 green chili",
      "Parsley",
      "Spices: paprika, cumin, salt, pepper"
    ],
    steps: [
      "Prepare dough and roll into thin rounds.",
      "Mix minced meat with chopped vegetables and spices.",
      "Spread mixture over dough.",
      "Bake in a hot oven until crispy."
    ]
  },
  {
    id: "pide",
    name: "Pide",
    country: "Turkish",
    image: "images/pide.jpg",
    description: "Turkish-style pizza baked with cheese and toppings.",
    video:"https://www.youtube.com/embed/gJL_kRsqCWk?si=gbPemQ979abXQMCX" ,
    ingredients: [
      "300g flour",
      "150ml water",
      "7g yeast",
      "1 tsp sugar",
      "1 tbsp olive oil",
      "Cheese, minced meat, or veggies for topping"
    ],
    steps: [
      "Make a soft dough and let it rise.",
      "Shape into boat-like flatbreads.",
      "Add toppings like cheese or meat.",
      "Bake until golden brown and crispy."
    ]
  },
  {
    id: "doner-kebab",
    name: "Doner Kebab",
    country: "Turkish",
    image: "images/doner.jpg",
    description: "Sliced meat served in pita bread with salad and sauce.",
    video:"https://www.youtube.com/embed/cR3bNuKVo1Q?si=sNwK5sPpIxTANBSx" ,
    ingredients: [
      "500g beef or lamb (thinly sliced)",
      "2 tbsp yogurt",
      "2 garlic cloves",
      "1 tbsp olive oil",
      "1 tsp cumin",
      "1 tsp paprika",
      "Pita bread",
      "Lettuce, tomato, onion",
      "Yogurt or garlic sauce"
    ],
    steps: [
      "Marinate meat with yogurt, garlic, olive oil, and spices.",
      "Grill or pan-fry until tender.",
      "Slice thinly and serve in pita bread.",
      "Add fresh salad and sauce before serving."
    ]
  }
];
