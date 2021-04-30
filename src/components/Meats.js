const meatInstructionBasic =
  "Salt at least 40 min before and up to 48 hours before cooking.";
const meatInstructionRoast =
  "Salt at least 24 hours before and up to 48 hours before cooking. If you are roasting the bird, put it on a wire rack and leave it uncovered in the fridge to dry the exterior. Once you take it out of the fridge, spray or rub olive oil all over the bird and then apply any other spices/herbs you like. This will help you develop a nice crust!";
const meatInstruction =
  "Salt at least 40 min before and up to 48 hours before cooking. If you're going to pan sear or grill, put it on a wire rack and leave it in the fridge uncovered to dry the exterior. This will help you develop a nice crust!";
const meatInstructionGround =
  "The recommended salinity above would work if you're making burgers. If you're adding this ground meat to a recipe with other salty components, consider adjusting the salinity down. When it comes to ground meat, you aren't really 'dry brining'. Leaving the salt in for too long can make the texture rubbery (see 'Salting Ground Beef' below). Mix in the salt no more than 10 minutes before cooking.";
const fishInstruction =
  "You don't need to brine fish for very long, the salt can break down the proteins too much over time. Salt the fish 15 minutes before cooking.";

export const Meats = {
  Poultry: {
    Breast: {
      type: "Boneless Poultry",
      defaultSaltByWeight: 1,
      img: "https://www.flaticon.com/svg/static/icons/svg/1728/1728818.svg",
      instruction: meatInstructionBasic,
      resources: {
        "The Food Lab's Complete Guide to Sous Vide Chicken Breast":
          "https://www.seriouseats.com/2015/07/the-food-lab-complete-guide-to-sous-vide-chicken-breast.html",
        "28 Chicken Breast Recipes to Make You Like White Meat":
          "https://www.seriouseats.com/roundups/chicken-breast-recipes",
      },
    },
    "Thighs/Drumsticks": {
      type: "Bone-in Poultry",
      defaultSaltByWeight: 1.1,
      img: "https://www.flaticon.com/svg/static/icons/svg/1702/1702761.svg",
      instruction:
        "You might think this would need a lower salt % than boneless chicken, but you should actually use slightly more because the % of chicken bone mass is fairly low, but dark meat is almost 2x fattier than breast meat. The higher the fat content, the more salt you should use. Salt at least 40 min before or up to 48 hours before cooking.",
      resources: {},
    },
    "Whole Bird": {
      type: "Whole Bird",
      defaultSaltByWeight: 1.1,
      img: "https://www.flaticon.com/svg/static/icons/svg/1046/1046853.svg",
      instruction: meatInstructionRoast,
      resources: {
        "How to spatchcock a chicken - BBC Good Food":
          "https://www.youtube.com/watch?v=pod4x5NJoYI&ab_channel=BBCGoodFood",
        "Expertly Spiced and Glazed Roast Turkey (replace their salt amount with calculator output for your bird)":
          "https://www.bonappetit.com/recipe/expertly-spiced-and-glazed-roast-turkey",
        "The Food Lab: How (Not) to Roast a Chicken":
          "https://www.seriouseats.com/2010/05/how-to-roast-a-chicken-butterflied-tips.html",
      },
    },
    "Ground Poultry": {
      type: "Ground Poultry",
      defaultSaltByWeight: 0.75,
      img: "https://www.flaticon.com/svg/static/icons/svg/2851/2851143.svg",
      instruction: meatInstructionGround,
      resources: {
        "The Burger Lab: Salting Ground Beef (I know you aren't cooking beef, but this still applies!)":
          "https://aht.seriouseats.com/2009/12/the-burger-lab-salting-ground-beef.html",
      },
    },
  },

  Beef: {
    "Boneless Steak": {
      type: "Boneless Steak",
      defaultSaltByWeight: 1.1,
      img: "https://www.flaticon.com/svg/static/icons/svg/2177/2177533.svg",
      instruction: meatInstruction,
      resources: {
        "The Food Lab's Complete Guide to Pan-Seared Steaks":
          "https://www.seriouseats.com/2012/12/the-food-lab-complete-guide-to-pan-seared-steaks.html#salt",
        "The Food Lab's Complete Guide to Sous Vide Steak":
          "https://www.seriouseats.com/2015/06/food-lab-complete-guide-to-sous-vide-steak.html",
      },
    },
    "Bonein Steak": {
      type: "Bonein Steak",
      defaultSaltByWeight: 1,
      img: "https://www.flaticon.com/svg/static/icons/svg/933/933310.svg",
      instruction: meatInstruction,
      resources: {
        "The Food Lab's Complete Guide to Pan-Seared Steaks":
          "https://www.seriouseats.com/2012/12/the-food-lab-complete-guide-to-pan-seared-steaks.html#salt",
        "The Food Lab's Complete Guide to Sous Vide Steak":
          "https://www.seriouseats.com/2015/06/food-lab-complete-guide-to-sous-vide-steak.html",
      },
    },
    "Beef Ribs": {
      type: "Beef Ribs",
      defaultSaltByWeight: 0.9,
      img: "https://www.flaticon.com/svg/static/icons/svg/604/604810.svg",
      instruction: meatInstructionBasic,
    },
    "80/20 Ground Beef": {
      type: "Ground Beef",
      defaultSaltByWeight: 1.15,
      img: "https://www.flaticon.com/svg/static/icons/svg/2851/2851143.svg",
      instruction: meatInstructionGround,
      resources: {
        "The Burger Lab: Salting Ground Beef":
          "https://aht.seriouseats.com/2009/12/the-burger-lab-salting-ground-beef.html",
        "Science: Does Fattier Meat Need More Salt? We Taste Steak, Burgers, Turkey, Pork to Find Out":
          "https://www.youtube.com/watch?v=csF1G11PsyU&feature=emb_title&ab_channel=America%27sTestKitchen",
      },
    },
    "90/10 Ground Beef": {
      type: "Ground Beef",
      defaultSaltByWeight: 0.9,
      img: "https://www.flaticon.com/svg/static/icons/svg/2851/2851143.svg",
      instruction: meatInstructionGround,
      resources: {
        "The Burger Lab: Salting Ground Beef":
          "https://aht.seriouseats.com/2009/12/the-burger-lab-salting-ground-beef.html",
        "Science: Does Fattier Meat Need More Salt? We Taste Steak, Burgers, Turkey, Pork to Find Out":
          "https://www.youtube.com/watch?v=csF1G11PsyU&feature=emb_title&ab_channel=America%27sTestKitchen",
      },
    },
  },

  Pork: {
    "Boneless Pork": {
      type: "Boneless Pork",
      defaultSaltByWeight: 1,
      img: "https://www.flaticon.com/svg/static/icons/svg/2177/2177533.svg",
      instruction: meatInstructionBasic,
    },
    "Pork Ribs": {
      type: "Pork Ribs",
      defaultSaltByWeight: 1.1,
      img: "https://www.flaticon.com/svg/static/icons/svg/815/815986.svg",
      instruction: meatInstructionBasic,
    },
    "Ground Pork": {
      type: "Ground Pork",
      defaultSaltByWeight: 1.25,
      img: "https://www.flaticon.com/svg/static/icons/svg/2851/2851143.svg",
      instruction: meatInstructionGround,
      resources: {
        "The Burger Lab: Salting Ground Beef (I know you aren't cooking beef, but this still applies!)":
          "https://aht.seriouseats.com/2009/12/the-burger-lab-salting-ground-beef.html",
      },
    },
    "Pork Belly": {
      type: "Pork Belly",
      defaultSaltByWeight: 1.3,
      img: "https://www.flaticon.com/svg/static/icons/svg/1582/1582267.svg",
      instruction: meatInstructionBasic,
    },
  },

  Lamb: {
    "Boneless Lamb": {
      type: "Boneless Lamb",
      defaultSaltByWeight: 1,
      img: "https://www.flaticon.com/svg/static/icons/svg/2177/2177533.svg",
      instruction: meatInstructionBasic,
    },
    "Bone-in Lamb": {
      type: "Bone-in Lamb",
      defaultSaltByWeight: 0.9,
      img: "https://www.flaticon.com/svg/static/icons/svg/1702/1702779.svg",
      instruction: meatInstructionBasic,
    },
  },

  Seafood: {
    Scallops: {
      type: "Scallops",
      defaultSaltByWeight: 0.9,
      img: "https://www.flaticon.com/svg/static/icons/svg/1113/1113359.svg",
      instruction:
        "If you're only adding salt & pepper, aim for 0.9% salt by weight. Consider adjusting down if you are adding a sauce or wrapping in bacon. If you're pan searing your scallops, start by patting them dry. Then salt and let sit on paper towels for 15 minutes. Sear for 2 minutes on one side, and then 1 min on the other.",
      resources: {
        "The Food Lab: How to Sear Scallops":
          "https://www.seriouseats.com/2015/08/the-food-lab-how-to-sear-scallops.html",
      },
    },
    Shrimp: {
      type: "Shrimp",
      defaultSaltByWeight: 0.65,
      img: "https://www.flaticon.com/svg/static/icons/svg/3885/3885575.svg",
      instruction:
        "Note: 0.65% salt by weight is for peeled shrimp. Toss in salt then leave in the fridge for at least 15 min and up to an hour.",
      resources: {
        "Easy Techniques to Improve Any Shrimp Recipe":
          "https://www.seriouseats.com/2015/10/how-to-cook-shrimp-grill-poach-stir-fry-saute.html",
      },
    },
    Fish: {
      type: "Fish",
      defaultSaltByWeight: 0.75,
      img: "https://www.flaticon.com/svg/static/icons/svg/2255/2255609.svg",
      instruction: fishInstruction,
    },
    // Add support for different kinds of fish later
    // 'Red Fish': {
    //   type: 'Red Fish',
    //   defaultSaltByWeight: 0.75,
    //   img: 'https://www.flaticon.com/svg/static/icons/svg/84/84877.svg',
    //   instruction: fishInstruction,
    // },
  },
};
