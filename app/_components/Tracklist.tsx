import { TRACKS, Track } from "./Track"

import { Section } from "./Section"

export const Tracklist = () => {
  return (
 

<div className='flex flex-col gap-4   '>
						{TRACKS.map((track, index) => (
							<Track
								key={index}
								{...track}
							/>
						))}
					</div>




  )
}