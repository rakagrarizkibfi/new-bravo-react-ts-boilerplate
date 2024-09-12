// ** Redux Imports
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { cityDropdown, kecamatanDropdown } from "../services/legacy/address";
import { kelurahanDropdown } from "../services/legacy/address";

interface HeaderState {
	loading: boolean;
	error: string | null;

	selectedCityId: string | null;
	selectedKecamatanId: string | null;
	selectedKelurahanId: string | null;

	city: any[];
	kecamatan: any[];
	kelurahan: any[];
	zipcode: any[];
}

export const getCity = createAsyncThunk("header/getCity", async () => {
	return cityDropdown();
});

export const getKecamatan = createAsyncThunk("header/getKecamatan", async (id: string) => {
	return kecamatanDropdown(id);
});

export const getKelurahan = createAsyncThunk(
	"header/getKelurahan",
	async (data: [string, string]) => {
		const [selectedCityId, selectedKecamatanId] = data;
		return kelurahanDropdown(selectedCityId, selectedKecamatanId);
	},
);

export const headerSlice = createSlice({
	name: "header",
	initialState: {
		loading: false,
		error: null,

		selectedCityId: null,
		selectedKecamatanId: null,
		selectedKelurahanId: null,

		city: [],
		kecamatan: [],
		kelurahan: [],
		zipcode: [],
	} as HeaderState,
	reducers: {
		setSelectedCityId: (state, action: PayloadAction<string>) => {
			state.selectedCityId = action.payload;
		},
		setSelectedKecamatanId: (state, action: PayloadAction<string>) => {
			state.selectedKecamatanId = action.payload;
		},
		setSelectedKelurahanId: (state, action: PayloadAction<string>) => {
			state.selectedKelurahanId = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getCity.fulfilled, (state, action) => {
				state.city = action.payload;
				state.selectedCityId = action.payload[0]?.value;
			})
			.addCase(getKecamatan.fulfilled, (state, action) => {
				state.kecamatan = action.payload;
				state.selectedKecamatanId = action.payload[0]?.value;
			})
			.addCase(getKelurahan.fulfilled, (state, action) => {
				state.kelurahan = action.payload;
				state.selectedKelurahanId = action.payload[0]?.value;
			});
	},
});

export const { setSelectedCityId, setSelectedKecamatanId, setSelectedKelurahanId } =
	headerSlice.actions;

export default headerSlice.reducer;
