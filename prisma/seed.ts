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

    const products : Product[] = [
      {
        name: 'Product 1',
        description: 'This is the description for Product 1.',
        price: 19.99,           
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        categoryId: electronics.id
      },
        {
        name: 'Product 2',
        description: 'This is the description for Product 2.', 
        price: 29.99,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        categoryId: clothing.id
        },
        {
        name: 'Product 3',
        description: 'This is the description for Product 3.',
        price: 39.99,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        categoryId: clothing.id
        },
        {
        name: 'Product 4',
        description: 'This is the description for Product 4.',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        categoryId: home.id
        },
        {
        name: 'Product 5',
        description: 'This is the description for Product 5.',
        price: 59.99,
        image: 'https://images.unsplash.com/photo-1549049950-48d5887197a0?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        , categoryId: books.id
        }
        
    ];

    for (const productData of products) {
        await prisma.product.create({
            data: productData,
        });
    }

}

main().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});



