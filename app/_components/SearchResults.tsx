import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Section } from './Section';
import { Tracklist } from './Tracklist';

export const SearchResults = () => {
	return (
    <div className='flex-[3] w-full'>
		<Card className='p-4 flex flex-col gap-2 h-full '>
			<h2 className=' text-xl font-bold mb-3'>Résultats</h2>

			
				<Tracklist />
				
			
		</Card>
    </div>
	);
};
