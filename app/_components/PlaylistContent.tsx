import { Playlist } from './Playlist';
import { SearchResults } from './SearchResults';
import { Section } from './Section';

export const PlaylistContent = () => {
	return (
		<Section className='flex max-md:flex-col  gap-16 w-full h-[500px] '>
			<SearchResults />

			<Playlist />
		</Section>
	);
};
