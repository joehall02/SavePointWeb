import type { ComponentProps, ComponentType } from 'react';

import * as Flags from '../components/Flags';

enum RegionCode {
	Australia = 'Australia', 
	China = 'China', 
	Europe = 'Europe', 
	SouthKorea = 'South Korea', 
	UnitedKingdom = 'United Kingdom', 
	NorthAmerica = 'North America', 
	UnitedStates = 'United States', 
	Worldwide = 'Worldwide', 
}

// Dictionary to map region codes to their corresponding svg component
export const FLAG_MAP: Record<string, ComponentType<ComponentProps<'svg'>>> = {
	[RegionCode.Australia]: Flags.Australia,
	[RegionCode.China]: Flags.China,
	[RegionCode.Europe]: Flags.Europe,
	[RegionCode.SouthKorea]: Flags.SouthKorea,
	[RegionCode.UnitedKingdom]: Flags.UnitedKingdom,
	[RegionCode.NorthAmerica]: Flags.UnitedStates,
	[RegionCode.UnitedStates]: Flags.UnitedStates,
	[RegionCode.Worldwide]: Flags.Worldwide,
};