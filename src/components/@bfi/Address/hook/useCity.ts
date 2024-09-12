import {
	cityDropdown,
	kecamatanDropdown,
	kelurahanDropdown,
	zipCodeDropdown,
} from "@src/services/legacy/address";
import { useQuery } from "@tanstack/react-query";

export const useCity = () => {
	return useQuery(["dropdownCity"], cityDropdown);
};

export const useKecamatan = (city: string) => {
	return useQuery({
		queryKey: ["kecamatanDropdown", city],
		queryFn: () => kecamatanDropdown(city),
		enabled: city ? true : false,
	});
};

export const useKelurahan = (city: string, kecamatan: string) => {
	return useQuery({
		queryKey: ["kelurahanDropdown", city, kecamatan],
		queryFn: () => kelurahanDropdown(city, kecamatan),
		enabled: kecamatan ? true : false,
	});
};

export const useZipcode = (city: string, kecamatan: string, kelurahan: string) => {
	return useQuery({
		queryKey: ["zipCodeDropdown", city, kecamatan, kelurahan],
		queryFn: () => zipCodeDropdown(city, kecamatan, kelurahan),
		enabled: kelurahan ? true : false,
	});
};
