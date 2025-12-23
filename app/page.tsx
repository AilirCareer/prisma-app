// app/page.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          مرحبًا بك
        </h1>

        <p className="mt-3 text-muted-foreground">
          واجهة بسيطة ونظيفة وحديثة
        </p>

        <div className="mt-6">
          <Button asChild>
            <Link href="/product">عرض المنتجات</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
