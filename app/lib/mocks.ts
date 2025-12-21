export type Product = {
  name: string; 
    description: string;
    price: number;
    imageUrl: string;
    category: string;
}
export const mockProducts: Product[] = [
  {
    name: 'Product 1',
    description: 'This is the description for Product 1.',
    price: 19.99,           
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Electronics'
  ,}
    ,
    {
    name: 'Product 2',
    description: 'This is the description for Product 2.', 
    price: 29.99,
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Accessories'
    },
    {
    name: 'Product 3',
    description: 'This is the description for Product 3.',
    price: 39.99,
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Footwear'
    },
    {
    name: 'Product 4',
    description: 'This is the description for Product 4.',
    price: 49.99,
    imageUrl: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Apparel'
    },
    {
    name: 'Product 5',
    description: 'This is the description for Product 5.',
    price: 59.99,
    imageUrl: 'https://images.unsplash.com/photo-1549049950-48d5887197a0?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    , category: 'Gadgets'
    }
    
]