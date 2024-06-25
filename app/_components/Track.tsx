import { Button } from "@/components/ui/button"
import { Section } from "./Section"

type TrackProps = {
  title: string
  artist: string
  album: string
}


export const Track = (props: TrackProps ) => {
  return (

   

    <div className="max-md:flex-col items-start  ">

     <div className=' flex flex-col items-start  border-current border-b pb-2 '>
      <h3 className="text-lg  ">{props.title} </h3>
      <div className=" flex items-baseline  ">
      <p className="text-base p-1 "> {props.artist} | {props.album}  </p>
      <Button variant={"ghost"} >+</Button>
      </div>
      
    </div>
    </div>
  
  )
}


export const TRACKS : TrackProps[] = [
    {
 title: "Champagne Shit",
  artist: "Janelle Monae",
  album: "Age of Pleasure"
    },
    {
       title: "Champagne Shit",
  artist: "Janelle Monae",
  album: "Age of Pleasure"
    }
  ]