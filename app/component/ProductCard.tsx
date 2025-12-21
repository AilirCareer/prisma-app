import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "../generated/prisma/client";
import { Import } from "lucide-react";
import Image from "next/image";

export function ProductCard({ products }: { products: Product}) {
    return (
        
        // <Card>
        //     <CardHeader>
        //         <CardTitle>{products.name}</CardTitle>
        //         <img src={products.image} alt={products.name} />
        //     </CardHeader>
        //     <CardContent>
        //         <CardDescription>{products.description}</CardDescription>
        //         <p>Price: ${products.price.toFixed(2)}</p>
        //     </CardContent>
        //     <CardFooter>
        //         <button className="btn btn-primary">Add to Cart</button>
        //     </CardFooter>
        // </Card>
        <Card className="pt-0 overflow-hidden">
            <div className="relative aspect-video hover:scale-101 transition-transform duration-300">
                <Image
                    src={products.image}
                    alt={products.name}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />                
            </div>
        <CardHeader>
            <CardTitle>{products.name}</CardTitle>
            <CardDescription>{products.description}</CardDescription>
        </CardHeader>
        <CardFooter>
            <p className="font-bold mr-auto">Price: ${products.price.toFixed(2)}</p>
        </CardFooter>


        </Card>
    );
}