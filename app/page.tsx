import Image from "next/image";
import { PlaylistContent } from "./_components/PlaylistContent";
import { SearchBar } from "./_components/SearchBar";
import { Spacing } from "./_components/Spacing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">

  <Spacing size="xs" />
  <SearchBar />
  <Spacing size="xs" />
  <PlaylistContent />
   <Spacing size="xs" />
 
  
    </main>
  );
}
