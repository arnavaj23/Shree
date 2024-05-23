import Link from "next/link";

import { Button } from "@/components/ui/button";

export function ButtonAsChild() {
  return (
    <Button className="bg-blue-500 hover:bg-blue-800" asChild>
      <Link href="https://search.pclub.in/">Search me on STUDENT SEARCH</Link>
    </Button>
  );
}
