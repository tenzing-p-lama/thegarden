const menuData = [
  {
    category: "Appetizers",
    items: [
      {
        id: 1,
        name: "Edamame",
        description: "Tossed in sea salt",
        price: 7,
      },
      {
        id: 2,
        name: "Karaage",
        description:
          "Japanese fried chicken served with spicy mayo on the side",
        price: 12,
      },
      {
        id: 3,
        name: "Shisito Pepper",
        description: "Flash fried Japanese pepper",
        price: 8,
      },
      {
        id: 4,
        name: "Veg Gyoza",
        description: "Pan fried vegetable dumpling",
        price: 8,
      },
      {
        id: 5,
        name: "Pork Gyoza",
        description: "Japanese pan fried dumpling",
        price: 10,
      },
      {
        id: 6,
        name: "Vegetable Tempura",
        description:
          "Assorted fresh vegetables fried in a light tempura batter",
        price: 12,
      },
      {
        id: 7,
        name: "Shrimp Tempura",
        description: "Shrimp fried in a light tempura batter",
        price: 14,
      },
      {
        id: 8,
        name: "Shrimp Chilli",
        description: "Pan sautéed shrimp with homemade chilli sauce",
        price: 14,
      },
      {
        id: 9,
        name: "Chasu Bun",
        description: "Tender juicy pork sandwich with lettuce and spicy mayo",
        price: 4,
      },
      {
        id: 10,
        name: "Kakuni Bun",
        description: "Braised pork belly sandwich with lettuce and spicy mayo",
        price: 4,
      },
      {
        id: 11,
        name: "Takoyaki",
        description: "Ball shaped snack with diced octopus",
        price: 8,
      },
      {
        id: 12,
        name: "Veg Spring Roll",
        description: "",
        price: 7,
      },
      {
        id: 13,
        name: "Tako Wasabi",
        description: "Raw octopus with wasabi",
        price: 7,
      },
      {
        id: 14,
        name: "Ebi Sumai",
        description: "Shrimp dumpling",
        price: 7,
      },
      {
        id: 15,
        name: "Agedashi Tofu",
        description:
          "Dried shrimp tofu served with homemade dashi broth, topped with bonito flake and scallion",
        price: 10,
      },
    ],
  },
  {
    category: "Rice Dishes",
    items: [
      {
        id: 21,
        name: "Kakuni Don",
        description: "Braised pork belly with kakuni sauce",
        price: 17,
      },
      {
        id: 22,
        name: "Beef Yakinuku",
        description:
          "Thinly sliced beef marinated in yakinuku sauce topped with raw yolk",
        price: 18,
      },
      {
        id: 23,
        name: "Chicken Katsu",
        description:
          "Panko breaded chicken breast flipped on omelette with homemade katsu sauce",
        price: 17,
      },
      {
        id: 24,
        name: "Pork Katsu",
        description:
          "Panko breaded pork flipped on omelette with homemade katsu sauce",
        price: 17,
      },
      {
        id: 25,
        name: "Garlic Chicken",
        description:
          "Grilled chicken marinated in garlic soy served with tonkotsu sauce and salad",
        price: 17,
      },
      {
        id: 26,
        name: "Chicken Fried Rice",
        description:
          "Fried rice served with diced chicken, mixed vegetables and egg",
        price: 15,
      },
      {
        id: 27,
        name: "Shrimp Fried Rice",
        description: "Fried rice served with shrimp, mixed vegetables and egg",
        price: 15,
      },
    ],
  },
  {
    category: "Salads",
    items: [
      {
        id: 31,
        name: "House Salad",
        description:
          "Mixed greens, cherry tomatoes, avacado in house miso dressing",
        price: 10,
      },
      {
        id: 32,
        name: "Garden Salad",
        description: "Mixed greens with tofu and turnip in sesame dressing",
        price: 12,
      },
      {
        id: 33,
        name: "Seaweed Salad",
        description: "",
        price: 8,
      },
      {
        id: 34,
        name: "Kani Salad",
        description:
          "Imitation crab stick with cucumber, scallion and tobiko mixed in spicy mayo topped with avacado",
        price: 14,
      },
      {
        id: 35,
        name: "Tuna Avacado Salad",
        description: "Tuna and avacado mixed with wasabi soy dressing",
        price: 16,
      },
      {
        id: 36,
        name: "Salmon Avacado Salad",
        description: "Salmon and avacado in wasabi soy dressing",
        price: 16,
      },
    ],
  },
  {
    category: "Ramen (Protein Option Chicken)",
    items: [
      {
        id: 41,
        name: "Niwa/Vegan Ramen",
        description:
          "Miso and vegetarian broth loaded with ramen noodles, enoki mushroom, shitake mushroom, wakame, corn, tofu, bamboo shoot and scallion",
        price: 16,
      },
      {
        id: 42,
        name: "Tonkotsu Ramen",
        description:
          "Tonkotsu broth served with ramen noodles, topped with pork belly, bamboo shoot, egg, mushroom, pickled ginger, scallion and garlic oil",
        price: 17,
      },
      {
        id: 43,
        name: "Shio Ramen",
        description:
          "Chicken/Beef broth muted with salty flavor topped with pork belly, egg, fish cake, bamboo shoot, mushroom, pickled ginger and scallion",
        price: 16,
      },
      {
        id: 44,
        name: "Spicy Miso Ramen",
        description:
          "House spicy miso paste mixed with chicken/beef broth served with minced pork, egg, bean sprouts, mushroom, bamboo shoot, pickled ginger, scallion and garlic oil topped with shredded pepper",
        price: 18,
      },
      {
        id: 45,
        name: "Tan Tan Ramen",
        description:
          "House sesame paste with chicken/beef broth served with minced pork, egg, bok choy, mushroom, bamboo shoot, pickled ginger, scallion and garlic oil",
        price: 18,
      },
      {
        id: 46,
        name: "Shoyu Ramen",
        description:
          "Homemade soy broth with noodles topped with chasu, egg, corn, bamboo shoot, fish cake and scallion",
        price: 16,
      },
    ],
  },
  {
    category: "Teriyaki",
    items: [
      {
        id: 51,
        name: "Chicken Teriyaki",
        description: "served with sautéed vegetables and rice",
        price: 17,
      },
      {
        id: 52,
        name: "Beef Teriyaki",
        description:
          "8oz angus rib eye served with sautéed vegetables and rice",
        price: 22,
      },
      {
        id: 53,
        name: "Salmon Teriyaki",
        description: "served with sautéed vegetables and rice",
        price: 22,
      },
    ],
  },
];
