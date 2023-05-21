import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Voltas 1.4 Ton 3 Star Inverter Split AC",
    categoryName: "Home Appliances",
    category: "AC",
    isBestSeller: true,
    rating: 4,
    mrp: 60000,
    price: 31000,
    imageUrl: "https://m.media-amazon.com/images/I/41LlSc9YsnL._SL1500_.jpg",
    details: [
      "Split AC with inverter compressor",
      "Capacity: 1.4 Ton Suitable for medium sized rooms",
      "Energy Rating: 3 Star. Annual Energy Consumption: 4600 units.",
      "Warranty : 1 Year Comprehensive Warranty on the Product and 10 Years on Compressor",
      "Key Features: Stabilizer free operation within 110 - 285 voltage range; Digital Temperature Display ; Noise Level: IDU - 47 (db) ",
    ],
  },

  {
    _id: uuid(),
    name: "LG 185 L 5 Star Inverter Direct-Cool Single Door Refrigerator",
    categoryName: "Home Appliances",
    category: "Refrigerator",
    isBestSeller: true,
    rating: 4.2,
    mrp: 22199,
    price: 17590,
    imageUrl: "https://m.media-amazon.com/images/I/61T4yGA9-oL._SL1500_.jpg",
    details: [
      "Direct Cool Refrigerator: Economical and stylish ",
      "Capacity 185 liters: Suitable for families with 2 to 3 members/ Couples / Bachelors",
      "Energy Rating: 5 Star- Best in class efficiency",
      "Manufacturer warranty: 1 year on product, 10 years on compressor T&C",
      "Included in the box: 1 Refrigerator Unit, User Manual, Warranty Card / Keys, Ice tray, Egg tray",
    ],
  },
  {
    _id: uuid(),
    name: "Zebronics Zeb-Blitz HeadPhone",
    categoryName: "Computer & Accessories",
    category: "Headphone",
    isBestSeller: false,
    rating: 4.2,
    mrp: 5999,
    price: 2399,
    imageUrl: "https://m.media-amazon.com/images/I/61Wyl9B6XxL._SL1500_.jpg",
    details: [
      "Experience DOLBY ATMOS with ZEB-BLITZ USB gaming headphones",
      "Advanced Windows software, to give you the simulated 7.1 surround sound",
      "5 RGB LED modes, Mic ON/OFF, Volume are controllable through the multifunctional in-line pod.",
      "Flexible - high sensitivity mic to capture your voice without disturbance, in a comfortable position. ",
    ],
  },
  {
    _id: uuid(),
    name: "Samsung 845 L Inverter Frost Free Side-by-Side Refrigerator",
    categoryName: "Home Appliances",
    category: "Refrigerator",
    isBestSeller: false,
    rating: 4.1,
    mrp: 139990,
    price: 111700,
    imageUrl: "https://m.media-amazon.com/images/I/81N7RszyBcL._SL1500_.jpg",
    details: [
      "Refrigerators: Premium refrigerators with auto-defrost function to prevent ice build-up ",
      "Capacity 845 L: Suitable for families with 5 or more members ",
      "Warranty period on the Digital Invertor Compressor shall be revised from 10 years to 20 years.",
    ],
  },

  {
    _id: uuid(),
    name: "Samsung 32 L Convection Microwave Oven",
    categoryName: "Home Appliances",
    category: "Microwave",
    isBestSeller: true,
    rating: 3.5,
    mrp: 32900,
    price: 22250,
    imageUrl: "https://m.media-amazon.com/images/I/41h48n+z37L._SL1100_.jpg",
    details: [
      "32L Capacity: Suitable for large families ",
      "Convection: Can be used for baking along with grilling, preheating, defrosting and cooking",
      "1 year standard warranty on Product, 10 years warranty on ceramic enamel cavity",
      "Brand does NOT provide starter kit with this product ",
    ],
  },
  {
    _id: uuid(),
    name: "LG 7 Kg 5 Star Semi-Automatic Top Loading Washing Machine",
    categoryName: "Home Appliances",
    category: "Washing Machine",
    isBestSeller: true,
    rating: 4.5,
    mrp: 16050,
    price: 11910,
    imageUrl: "https://m.media-amazon.com/images/I/61xtcXJfYaL._SL1500_.jpg",
    details: [
      "Semi-automatic washing Machine: Economical, Low water and energy consumption",
      "Capacity 7.0 kg (wash): Suitable for families with 3 to 4 members",
      "5 Star: Best in class efficiency",
      "Manufacturer Warranty: 2 Years Comprehensive & 5 years on Motor T&C",
    ],
  },
  {
    _id: uuid(),
    name: "Philips Air Purifier with HEPA Filter Type - AC121720",
    categoryName: "Home Appliances",
    category: "Air Purifier",
    isBestSeller: true,
    rating: 4.3,
    mrp: 13995,
    price: 13190,
    imageUrl: "https://m.media-amazon.com/images/I/71bbq8-YBVL._SL1500_.jpg",
    details: [
      "Product Dimensions: 38.8D x 62.2W x 27.2H Centimeters",
      "Item Weight: 7 Kilograms",
      "Filter Type: HEPA",
      "Floor Area: ‎818 Square Feet",
      "Noise Level: 33 dB",
      "Warranty Information: 1 year warranty",
    ],
  },
  {
    _id: uuid(),
    name: "Bosch 7 kg 5 Star Inverter Touch Control Fully Automatic",
    categoryName: "Home Appliances",
    category: "Washing Machine",
    isBestSeller: true,
    rating: 4.4,
    mrp: 48590,
    price: 31990,
    imageUrl: "https://m.media-amazon.com/images/I/71A2wRV96mL._SL1500_.jpg",
    details: [
      " Front Loading Washing Machine with In - built Heater",
      "7 KG Capacity - Ideal For Families",
      "Hygenic Wash With 99.99% Bacteria Reduction.",
      "Manufacturer Warranty:2 Years on Product, 12 Years on Motor",
      "Wash Programs :15",
    ],
  },

  {
    _id: uuid(),
    name: "Sony Bravia 164 cm (65 inches) 4K Ultra HD",
    categoryName: "Home Appliances",
    category: "LED/TV",
    isBestSeller: true,
    rating: 4.7,
    mrp: 139900,
    price: 92990,
    imageUrl: "https://m.media-amazon.com/images/I/81MRU+3RJLL._SL1500_.jpg",
    details: [
      "Resolution: 4K Ultra HD (3840 x 2160)",
      "Refresh Rate: 60 Hertz",
      "Connectivity: 3 HDMI ports",
      "Sound : 20 Watts Output | Dolby Audio",
      "Display: X1 4K Processor | 4K HDR",
      "Warranty Information: 1 year comprehensive warranty",
    ],
  },

  {
    _id: uuid(),
    name: "Honeywell Air Touch P2 Indoor Air Purifier",
    categoryName: "Home Appliances",
    category: "Air Purifier",
    isBestSeller: true,
    rating: 4.0,
    mrp: 23299,
    price: 17499,
    imageUrl: "https://m.media-amazon.com/images/I/51qQMA5x4AL._SL1000_.jpg",
    details: [
      "Product Dimensions: 26D x 26.3W x 52.4H Centimeters",
      "Item Weight: 5.5 Kilograms",
      "Filter Type: Activated Carbon",
      "Floor Area: ‎853 Square Feet",
      "Noise Level: 54 dB",
      "Warranty Information: 1 year warranty",
    ],
  },
  {
    _id: uuid(),
    name: "Samsung Galaxy S20 FE 5G",
    categoryName: "Smart Phone & Smart Watches",
    category: "Mobile",
    isBestSeller: true,
    rating: 4.2,
    mrp: 34999,
    price: 74999,
    imageUrl: "https://m.media-amazon.com/images/I/812yohjGZ2L._SL1500_.jpg",
    details: [
      "Processor: Qualcomm Snapdragon 865 Octa-Core processor",
      "Display: Super AMOLED Display with 1080 x 2400 (FHD+) Resolution",
      "Screen Size: 6.5 Inches",
      "Storage: 8GB RAM, 128GB internal memory expandable up to 1TB",
      "Camera: Triple Rear Camera (12MP+8MP+12MP) | 32MP Front Camera",
      "Battery Power: 4500 mAH",
      "Operating Sysytem: Android 11.0",
      "Warranty Information: 1 year manufacturer warranty for device",
    ],
  },
  {
    _id: uuid(),
    name: "ASUS TUF Gaming A15 Laptop",
    categoryName: "Computer & Accessories",
    category: "Laptop",
    isBestSeller: true,
    rating: 4.3,
    mrp: 71990,
    price: 59990,
    imageUrl: "https://m.media-amazon.com/images/I/91zVSkGGZbS._SL1500_.jpg",
    details: [
      "Processor: AMD Ryzen 5 4600H Mobile Processor",
      "Memory: 8GB SO-DIMM DDR4-3200MHz",
      "Storage: 512GB PCIe 3.0 NVMe",
      "Graphics: NVIDIA GeForce GTX 1650 GDDR6 4GB",
      "Operating System: Pre-installed Windows 11 Home",
      "Item Weight: 2.3 Kilograms",
      "Warranty Information: 1 year warranty",
    ],
  },
  {
    _id: uuid(),
    name: "Redmi Note 12 5G Frosted Green",
    categoryName: "Smart Phone & Smart Watches",
    category: "Mobile",
    isBestSeller: true,
    rating: 3.8,
    mrp: 17999,
    price: 19999,
    imageUrl: "https://m.media-amazon.com/images/I/81sTK4zipDL._SL1500_.jpg",
    details: [
      "Processor: Snapdragon 4 Gen1 6nm Octa-core 5G processor",
      "Display: Super AMOLED (1080x2400) Display with 120Hz Refresh rate",
      "Screen Size: 6.67 Inches",
      "Storage: 4GB RAM, 128 GB UFS 2.2 storage expandable up to 1TB",
      "Camera: Triple Rear Camera (48MP AI+8MP+2MP), 13MP Front camera",
      "Battery Power: 5000 mAH",
      "Operating Sysytem: Android 11.0",
      "Warranty Information: 1 year manufacturer warranty for device",
    ],
  },
  {
    _id: uuid(),
    name: "Garmin Venu Sq GPS Smart watch",
    categoryName: "Smart Phone & Smart Watches",
    category: "Smart Watch",
    isBestSeller: true,
    rating: 4.4,
    mrp: 20990,
    price: 17190,
    imageUrl: "https://m.media-amazon.com/images/I/71ILpOf86pS._SL1500_.jpg",
    details: [
      "Screen Size: 1.3 Inches",
      "Battery: upto 6 Days",
      "Features: 24/7 HR, Advanced Sleep Monitoring, Stress tracking",
      "Preloaded Workouts: 20 apps including yoga, strength, cardio and Pilates",
      "Warranty Information: 1 year warranty",
    ],
  },
  {
    _id: uuid(),
    name: "Samsung Galaxy Watch5 Bluetooth",
    categoryName: "Smart Phone & Smart Watches",
    category: "Smart Watch",
    isBestSeller: true,
    rating: 4.2,
    mrp: 33999,
    price: 30999,
    imageUrl: "https://m.media-amazon.com/images/I/61O5Xjb9uEL._SL1500_.jpg",
    details: [
      "Screen Size: 1.73 Inches",
      "Battery: upto 2 Days",
      "Features: Sleep Monitor, Activity Tracker, Stress Tracking, Heart Rate Monitor",
      "Preloaded Workouts: Supports over 90 exercises",
      "Warranty Information: 1 year warranty",
    ],
  },

  {
    _id: uuid(),
    name: "HP Victus Gaming Latest AMD Laptop",
    categoryName: "Computer & Accessories",
    category: "Laptop",
    isBestSeller: true,
    rating: 4.3,
    mrp: 71343,
    price: 55990,
    imageUrl: "https://m.media-amazon.com/images/I/81wJJj6jLfL._SL1500_.jpg",
    details: [
      "Processor: 6-core AMD Ryzen 5 5600H mobile processor",
      "Memory: 8GB SO-DIMM DDR4-3200MHz",
      "Storage: 512GB PCIe M.2 NVMe",
      "Graphics: AMD Radeon RX 5500M GDDR6 4GB",
      "Operating System: Pre-installed Windows 10 Home",
      "Item Weight: 2.48 Kilograms",
      "Warranty Information: 1 year warranty",
    ],
  },
  {
    _id: uuid(),
    name: "Sony INZONE H9",
    categoryName: "Computer & Accessories",
    category: "Headphone",
    isBestSeller: false,
    rating: 4.3,
    mrp: 27990,
    price: 19690,
    imageUrl: "https://m.media-amazon.com/images/I/61m35lRdcxL._SL1500_.jpg",
    details: [
      "Dual Sensor Noise Canceling Technology keeps out surrounding noise",
      "Game freely with wireless connectivity and low delay",
    ],
  },

  {
    _id: uuid(),
    name: "Lloyd 2.0 Ton 5 Star Inverter Split AC",
    categoryName: "Home Appliances",
    category: "AC",
    isBestSeller: true,
    rating: 3.9,
    mrp: 85000,
    price: 53500,
    imageUrl:
      "https://m.media-amazon.com/images/I/31IXlxIPsOL._AC_UY327_QL65_.jpg",
    details: [
      "Lloyd Split AC with Inverter Compressor",
      "Capacity: 2.0 ton suitable for medium / large size rooms",
      "Energy Rating: 5 Star, Annual Energy Consumption: 970.29, ISEER Value: 5.06",
      "Warranty: 1 Year on the product and 10 Years on the Compressor",
      "Key Features: Cools even at Ambient temperature of 52°C with 4 Way Air Swing, Stabilizer Free Operation within 100 - 300 voltage range; Hidden LED Display; Noise Level: IDU - 43 (DB) ",
    ],
  },
  {
    _id: uuid(),
    name: "IFB 30 L Convection Microwave Oven",
    categoryName: "Home Appliances",
    category: "Microwave",
    isBestSeller: false,
    rating: 4.3,
    mrp: 19390,
    price: 14420,
    imageUrl: "https://m.media-amazon.com/images/I/71IWpC2j2kL._SL1500_.jpg",
    details: [
      "30L Capacity: Suitable for large families",
      "IFB offer a super warranty 1 year on Microwave Oven & 3 years on magnetron & cavity ",
      "No. of Programs: Weight Defrost, Rotisserie, Grill Mode, Auto Reheat, Delay Start, Keep Warm, Express Cooking ,Steam Clean, Disinfect, Deodorize",
      "Control: Touch key pad (membrane) is sensitive to touch and easy to clean",
    ],
  },
  {
    _id: uuid(),
    name: "MI 80 cm (32 inches) 5A Series HD",
    categoryName: "Home Appliances",
    category: "LED/TV",
    isBestSeller: true,
    rating: 4.4,
    mrp: 48590,
    price: 31990,
    imageUrl: "https://m.media-amazon.com/images/I/81tD7OZ0RXL._SL1500_.jpg",
    details: [
      "Resolution : HD Ready (1366 x 768)",
      "Sound: 20 Watts Output | Dolby Audio, DTS",
      "Refresh Rate : 60 Hertz",
      "Connectivity: Dual Band Wi-Fi",
      "Warranty Information: 1 year comprehensive warranty on product",
    ],
  },
];
