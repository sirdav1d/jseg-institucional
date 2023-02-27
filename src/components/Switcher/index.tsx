import { Box, Switch, useColorMode } from '@chakra-ui/react';

export default function Switcher() {
	const { toggleColorMode } = useColorMode();

	return (
		<div>
			<Box>
				<Switch
					style={{ transform: 'auto', transition: 'all .4s ease' }}
					onChange={toggleColorMode}
					colorScheme={'whatsapp'}
				/>
			</Box>
		</div>
	);
}
