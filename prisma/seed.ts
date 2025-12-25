import { Product } from '@/app/lib/mocks';
import {PrismaClient, Prisma} from '../app/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL || '',
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {

    await prisma.product.deleteMany();
    await prisma.category.deleteMany();
    console.log('Cleared existing data.');

    const electronics = await prisma.category.create({
        data: { 
            name: 'Electronics',
            slug: 'electronics',
        },
    });
    const clothing = await prisma.category.create({
        data: { 
            name: 'Clothing',
            slug: 'clothing',
        },
    });
    const books = await prisma.category.create({
        data: { 
            name: 'Books',
            slug: 'books',
        },
    });
    const home = await prisma.category.create({
        data: { 
            name: 'Home & Kitchen',
            slug: 'home-kitchen',
        },
    });

    console.log('Created categories.');


    const products = [
  // ================= ELECTRONICS =================
  {
    name: "Wireless Noise-Cancelling Headphones",
    slug: "wireless-noise-cancelling-headphones",
    description:
      "Premium wireless headphones with active noise cancellation and crystal-clear sound.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    categoryId: electronics.id,
  },
  {
    name: "Smart Fitness Watch",
    slug: "smart-fitness-watch",
    description:
      "Track your workouts, heart rate, sleep, and daily activity with this smart fitness watch.",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    categoryId: electronics.id,
  },
  {
    name: "Bluetooth Portable Speaker",
    slug: "bluetooth-portable-speaker",
    description:
      "Compact Bluetooth speaker with powerful bass and long-lasting battery.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1585386959984-a41552231693",
    categoryId: electronics.id,
  },
  {
    name: "Wireless Charging Pad",
    slug: "wireless-charging-pad",
    description:
      "Fast wireless charging pad compatible with most smartphones.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1587033411391-5d9e51cce126",
    categoryId: electronics.id,
  },
  {
    name: "Noise-Isolating Earbuds",
    slug: "noise-isolating-earbuds",
    description:
      "In-ear earbuds designed for immersive sound and daily commuting.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
    categoryId: electronics.id,
  },

  // ================= CLOTHING =================
  {
    name: "Men’s Casual Cotton T-Shirt",
    slug: "mens-casual-cotton-t-shirt",
    description:
      "Soft cotton T-shirt perfect for everyday casual wear.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    categoryId: clothing.id,
  },
  {
    name: "Women’s Lightweight Summer Jacket",
    slug: "womens-lightweight-summer-jacket",
    description:
      "Stylish lightweight jacket for cool evenings and outdoor wear.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
    categoryId: clothing.id,
  },
  {
    name: "Classic Denim Jeans",
    slug: "classic-denim-jeans",
    description:
      "Comfortable slim-fit denim jeans suitable for everyday use.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    categoryId: clothing.id,
  },
  {
    name: "Unisex Hoodie Sweatshirt",
    slug: "unisex-hoodie-sweatshirt",
    description:
      "Warm and comfortable hoodie made from premium fabric.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
    categoryId: clothing.id,
  },
  {
    name: "Running Sports Shoes",
    slug: "running-sports-shoes",
    description:
      "Lightweight running shoes designed for comfort and performance.",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    categoryId: clothing.id,
  },

  // ================= HOME =================
  {
    name: "Modern Wooden Coffee Table",
    slug: "modern-wooden-coffee-table",
    description:
      "Minimalist wooden coffee table for modern living spaces.",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1549049950-48d5887197a0",
    categoryId: home.id,
  },
  {
    name: "Ceramic Dinner Plate Set (6 Pieces)",
    slug: "ceramic-dinner-plate-set-6-pieces",
    description:
      "Elegant ceramic dinner plates, dishwasher-safe.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1616627984043-9b7d38b6f75e",
    categoryId: home.id,
  },
  {
    name: "Decorative Table Lamp",
    slug: "decorative-table-lamp",
    description:
      "Modern table lamp with soft lighting for bedrooms and living rooms.",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    categoryId: home.id,
  },
  {
    name: "Soft Cotton Bed Sheets",
    slug: "soft-cotton-bed-sheets",
    description:
      "Breathable cotton bed sheets for a comfortable sleep.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1582582494700-ec23b6f35d3d",
    categoryId: home.id,
  },
  {
    name: "Minimalist Wall Clock",
    slug: "minimalist-wall-clock",
    description:
      "Simple and elegant wall clock for modern interiors.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92",
    categoryId: home.id,
  },

  // ================= BOOKS =================
  {
    name: "Atomic Habits",
    slug: "atomic-habits",
    description:
      "Bestselling book about building good habits and breaking bad ones.",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    categoryId: books.id,
  },
  {
    name: "The Complete Guide to Web Development",
    slug: "complete-guide-to-web-development",
    description:
      "Learn modern web development from frontend to backend.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    categoryId: books.id,
  },
  {
    name: "Clean Code",
    slug: "clean-code",
    description:
      "A handbook of agile software craftsmanship by Robert C. Martin.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765",
    categoryId: books.id,
  },
  {
    name: "Deep Work",
    slug: "deep-work",
    description:
      "Rules for focused success in a distracted world.",
    price: 21.99,
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
    categoryId: books.id,
  },
  {
    name: "You Don’t Know JS Yet",
    slug: "you-dont-know-js-yet",
    description:
      "Deep dive into JavaScript fundamentals and advanced concepts.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    categoryId: books.id,
  },

  // ================= EXTRA (to reach 30) =================
  {
    name: "Stainless Steel Water Bottle",
    slug: "stainless-steel-water-bottle",
    description:
      "Insulated water bottle keeps drinks cold or hot for hours.",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b7a1",
    categoryId: home.id,
  },
  {
    name: "Leather Office Backpack",
    slug: "leather-office-backpack",
    description:
      "Stylish leather backpack suitable for work and travel.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    categoryId: clothing.id,
  },
  {
    name: "Laptop Stand Aluminum",
    slug: "laptop-stand-aluminum",
    description:
      "Ergonomic aluminum laptop stand for better posture.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
    categoryId: electronics.id,
  },
  {
    name: "Mechanical Keyboard",
    slug: "mechanical-keyboard",
    description:
      "RGB mechanical keyboard with tactile switches.",
    price: 109.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    categoryId: electronics.id,
  },
  {
    name: "Wireless Gaming Mouse",
    slug: "wireless-gaming-mouse",
    description:
      "High-precision wireless mouse designed for gaming.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
    categoryId: electronics.id,
  },
];


    await prisma.product.createMany({
        data: products,
    });

    console.log('Seed data created successfully.');

}

main().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});



