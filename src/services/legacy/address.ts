import axios from "axios";

import {
	LEGACY_DROPDOWN_CITY,
	LEGACY_DROPDOWN_KECAMATAN,
	LEGACY_DROPDOWN_KELURAHAN,
	LEGACY_DROPDOWN_ZIPCODE,
} from "@src/constants/urlApiConstant";

export const cityDropdown = async () => {
	const response = await axios.get(LEGACY_DROPDOWN_CITY);
	let converted: any[] = [];
	response.data.data.map((data: any) => {
		converted = [
			...converted,
			{
				value: data.city,
				label: data.city,
			},
		];
	});
	return converted;
};

export const kecamatanDropdown = async (city: string) => {
	const response = await axios.get(LEGACY_DROPDOWN_KECAMATAN, {
		params: {
			city,
		},
	});
	let converted = [] as any;
	response.data.data.map((data: any) => {
		converted = [
			...converted,
			{
				value: data.kecamatan,
				label: data.kecamatan,
			},
		];
	});
	return converted;
};

export const kelurahanDropdown = async (city: string, kecamatan: string) => {
	const response = await axios.get(LEGACY_DROPDOWN_KELURAHAN, {
		params: {
			city,
			kecamatan,
		},
	});
	let converted = [] as any;

	response.data.data.map((data: any) => {
		converted = [
			...converted,
			{
				value: data.kelurahan,
				label: data.kelurahan,
			},
		];
	});
	return converted;
};

export const zipCodeDropdown = async (city: string, kecamatan: string, kelurahan: string) => {
	const response = await axios.get(LEGACY_DROPDOWN_ZIPCODE, {
		params: {
			city,
			kecamatan,
			kelurahan,
		},
	});
	return response.data.data;
};
