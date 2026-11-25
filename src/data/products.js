
const hoodieVariants = [
  { name: "Lavender", color: "#B69AD9", image: "/images/products/hoodie/lavender.jpg" },
  { name: "Black", color: "#171717", image: "/images/products/hoodie/black.jpg" },
  { name: "Beige", color: "#D8C1A2", image: "/images/products/hoodie/beige.jpg" },
  { name: "White", color: "#FFFFFF", image: "/images/products/hoodie/white.jpg" },
];

const catalog = [
  ["Classic Lavender Hoodie", "Fashion", 1299, 4.8, "photo-1556821840-3a63f95609a7"],
  ["Minimal Classic Watch", "Accessories", 2499, 4.7, "photo-1523275335684-37898b6baf30"],
  ["Everyday Sneakers", "Shoes", 1899, 4.6, "photo-1542291026-7eec264c27ff"],
  ["Elegant Handbag", "Bags", 2199, 4.9, "photo-1584917865442-de89df76afd3"],
  ["Casual White T-Shirt", "Fashion", 799, 4.5, "photo-1521572163474-6864f9cf17ab"],
  ["Stylish Sunglasses", "Accessories", 999, 4.7, "photo-1511499767150-a48a237f0083"],
  ["Premium Backpack", "Bags", 1599, 4.6, "photo-1553062407-98eeb64c6a62"],
  ["Classic Running Shoes", "Shoes", 1999, 4.8, "photo-1552346154-21d32810aba3"],
  ["Oversized Beige Shirt", "Fashion", 1199, 4.6, "photo-1598033129183-c4f50c736f10"],
  ["Leather Wallet", "Accessories", 899, 4.5, "photo-1627123424574-724758594e93"],
  ["Floral Summer Dress", "Fashion", 1599, 4.8, "photo-1612336307429-8a898d10e223"],
  ["Denim Jacket", "Fashion", 1899, 4.7, "photo-1543076447-215ad9ba6923"],
  ["Women's Casual Top", "Fashion", 899, 4.5, "photo-1564257577-3f7e4e7d9a7d"],
  ["Men's Casual Shirt", "Fashion", 1299, 4.6, "photo-1603252110481-7ba873bf42ab"],
  ["Wide Leg Trousers", "Fashion", 1499, 4.7, "photo-1506629905607-d9a4d7f3b7d2"],
  ["Chunky White Sneakers", "Shoes", 2299, 4.8, "photo-1460353581641-37baddab0fa2"],
  ["Classic Leather Boots", "Shoes", 2799, 4.7, "photo-1608256246200-53e635b5b65f"],
  ["Comfortable Sports Shoes", "Shoes", 1799, 4.6, "photo-1460353581641-37baddab0fa2"],
  ["Elegant High Heels", "Shoes", 1999, 4.5, "photo-1543163521-1bf539c55dd2"],
  ["Casual Flat Sandals", "Shoes", 799, 4.4, "photo-1562273138-f46be4ebdf33"],
  ["Mini Shoulder Bag", "Bags", 1399, 4.7, "photo-1590874103328-eac38a683ce7"],
  ["Everyday Tote Bag", "Bags", 1199, 4.6, "photo-1544816155-12df9643f363"],
  ["Travel Duffel Bag", "Bags", 1899, 4.8, "photo-1553062407-98eeb64c6a62"],
  ["Elegant Crossbody Bag", "Bags", 1699, 4.7, "photo-1584917865442-de89df76afd3"],
  ["Classic Leather Purse", "Bags", 1499, 4.5, "photo-1584917865442-de89df76afd3"],
  ["Rose Gold Bracelet", "Accessories", 699, 4.6, "photo-1611591437281-460bfbe1220a"],
  ["Minimal Pendant Necklace", "Accessories", 899, 4.8, "photo-1599643478518-a784e5dc4c8f"],
  ["Premium Analog Watch", "Accessories", 2999, 4.9, "photo-1524592094714-0f0654e20314"],
  ["Fashion Hoop Earrings", "Accessories", 499, 4.5, "photo-1535632066927-ab7c9ab60908"],
  ["Classic Baseball Cap", "Accessories", 599, 4.4, "photo-1588850561407-ed78c282e89b"],
  ["Hydrating Face Cream", "Beauty", 599, 4.6, "photo-1608248543803-ba4f8c70ae0b"],
  ["Daily Skincare Serum", "Beauty", 799, 4.8, "photo-1601049541289-9b1b7bbbfe19"],
  ["Beauty Makeup Kit", "Beauty", 1299, 4.7, "photo-1596462502278-27bfdc403348"],
  ["Premium Perfume", "Beauty", 1599, 4.8, "photo-1541643600914-78b084683601"],
  ["Makeup Brush Set", "Beauty", 699, 4.5, "photo-1522335789203-aabd1fc54bc9"],
  ["Ceramic Coffee Mug", "Home & Lifestyle", 399, 4.6, "photo-1514228742587-6b1558fcca3d"],
  ["Decorative Table Lamp", "Home & Lifestyle", 1499, 4.8, "photo-1507473885765-e6ed057f782c"],
  ["Soft Cushion Set", "Home & Lifestyle", 899, 4.5, "photo-1584100936595-c0654b55a2e2"],
  ["Modern Wall Clock", "Home & Lifestyle", 799, 4.4, "photo-1563861826100-9cb868fdbe1c"],
  ["Aesthetic Flower Vase", "Home & Lifestyle", 699, 4.7, "photo-1578500494198-246f612d3b3d"],
  ["Premium Water Bottle", "Home & Lifestyle", 499, 4.6, "photo-1602143407151-7111542de6e8"],
  ["Soft Bedsheet Set", "Home & Lifestyle", 1799, 4.8, "photo-1631049307264-da0ec9d70304"],
  ["Minimal Desk Organizer", "Home & Lifestyle", 599, 4.5, "photo-1498050108023-c5249f4df085"],
  ["Decorative Plant Pot", "Home & Lifestyle", 449, 4.6, "photo-1485955900006-10f4d324d411"],
  ["Cozy Throw Blanket", "Home & Lifestyle", 1299, 4.7, "photo-1600369671236-e74521d4b6ad"],
  ["Pastel Hoodie", "Fashion", 1399, 4.8, "photo-1556821840-3a63f95609a7"],
  ["Printed Casual T-Shirt", "Fashion", 699, 4.5, "photo-1503341504253-dff4815485f1"],
  ["Women's Denim Jeans", "Fashion", 1499, 4.7, "photo-1541099649105-f69ad21f3246"],
  ["Casual Summer Skirt", "Fashion", 999, 4.6, "photo-1583496661160-fb5886a0aaaa"],
  ["Elegant Party Dress", "Fashion", 2199, 4.9, "photo-1566174053879-31528523f8ae"],
  ["Classic Loafers", "Shoes", 1699, 4.6, "photo-1533867617858-e7b97e060509"],
  ["Daily Walking Shoes", "Shoes", 1499, 4.5, "photo-1495555961986-6d4c1ecb7be3"],
  ["Women's White Heels", "Shoes", 1899, 4.8, "photo-1515347619252-60a4bf4fff4f"],
  ["Sporty Running Sneakers", "Shoes", 2099, 4.7, "photo-1542291026-7eec264c27ff"],
  ["Comfort Slides", "Shoes", 599, 4.4, "photo-1603487742131-4160ec999306"],
  ["Quilted Shoulder Bag", "Bags", 2499, 4.8, "photo-1566150905458-1bf1fc113f0d"],
  ["Casual Sling Bag", "Bags", 999, 4.6, "photo-1590874103328-eac38a683ce7"],
  ["Travel Backpack", "Bags", 1999, 4.8, "photo-1622560480654-d96214fdc887"],
  ["Elegant Mini Handbag", "Bags", 1799, 4.7, "photo-1584917865442-de89df76afd3"],
  ["Everyday Laptop Bag", "Bags", 1599, 4.6, "photo-1553062407-98eeb64c6a62"],
  ["Minimal Silver Ring", "Accessories", 499, 4.5, "photo-1605100804763-247f67b3557e"],
];

const colorOptions = [
  { name: "Black", color: "#222222" },
  { name: "Beige", color: "#D8C1A2" },
  { name: "White", color: "#FFFFFF" },
];

const products = catalog.map((item, index) => {
  const [name, category, price, rating, photoId] = item;
  const image =
    index === 0
      ? "/images/products/hoodie/lavender.jpg"
      : `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=700&q=85`;

  const variants =
    index === 0
      ? hoodieVariants
      : colorOptions.map((variant) => ({
          ...variant,
          image,
        }));

  return {
    id: index + 1,
    name,
    category,
    price,
    rating,
    image,
    variants,
  };
});

export default products;
