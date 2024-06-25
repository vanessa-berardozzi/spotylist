import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tracklist } from './Tracklist';

export const Playlist = () => {
	return (
		<div className='flex-[3] w-full'>
			<Card className= 'p-4 flex flex-col gap-2 h-full'>
          <input
            placeholder='Nom de la playlist'
            className='w-full bg-transparent text-current text-lg p-2  focus:outline-none border-b-zinc-50 border-b-2'
          />
<div > 
  <Tracklist />
				<div className=' flex  justify-center   ' >
					<Button
          className='mt-3'
						variant='gradient'
					>
						Enregistrer sur Spotify
					</Button></div>
				
				</div>
			</Card>
			</div>
	);
};
