export type BfiDataTablesProps = {
	className?: string;
	noHeader?: boolean;
	progressPending?: boolean;
	progressComponent?: React.ReactNode;
	columns: any;
	data: object[];
	theme?: "solarized";
	handleSort?: any;
	sortServer?: boolean;
	pagination?: boolean;
	//paginationServer
	paginationTotalRows?: number;
	onChangeRowsPerPage?: any;
	onChangePage?: any;
	subHeader?: React.ReactNode;
	subHeaderComponent?: React.ReactNode;
	noDataComponent?: React.ReactNode;
};
