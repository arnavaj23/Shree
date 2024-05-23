import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CartButton() {
  return (
    <Button className="bg-blue-500 hover:bg-blue-800" asChild>
      <Link href="/UserProfile/TrackHistory">ADD TO CART</Link>
    </Button>
  );
}
