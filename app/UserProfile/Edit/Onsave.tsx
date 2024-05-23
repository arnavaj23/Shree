import Link from "next/link";

import { Button } from "@/components/ui/button";

export function OnSave() {
  return (
    <Button className="bg-blue-500 hover:bg-blue-800 py-4" asChild>
      <Link href="/UserProfile">SAVE</Link>
    </Button>
  );
}
