export interface Product {
	id?: number;
	name?: string;
	slug?: string;
	price?: number;
	sale_price?: number;
	review?: number;
	ratings?: number;
	until?: string;
	stock?: number;
	top?: boolean;
	picture: any;
	featured?: boolean;
	new?: boolean;
	short_desc?: boolean;
	available: boolean;
	category?: Array<{
		name?: string;
		slug?: string;
	}>;
	pictures?: Array<{
		width?: number;
		height?: number;
		url: any;
	}>;
	sm_pictures?: Array<{
		width?: number;
		height?: number;
		url?: any;
	}>
	variants?: Array<{
		color?: string;
		color_name?: string;
		price?: number;
		size?: Array<{
			name?: string;
		}>
	}>
}