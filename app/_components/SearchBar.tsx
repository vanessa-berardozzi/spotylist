// un input  pour recherche le titre d'une chanson, un artiste ou un alum, et un bouton pour lancer la recherche

import { Button, buttonVariants } from "@/components/ui/button" // Assuming the component that defines 'buttonVariants' is named 'ButtonVariants'

import { Input } from "@/components/ui/input"
import { Section } from "./Section"

export const SearchBar = () => {
  return (
    <Section className="flex items-center justify-center w-2/4">
      <Input
        type="text"
        className="text-input  "
        placeholder="Rechercher un titre, un artiste ou un album"
       
      />
      <Button variant="gradient" size={ "xl" } >
        Rechercher
      </Button>
    </Section>
  );



};