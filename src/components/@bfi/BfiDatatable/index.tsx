import React from "react";
import DataTable from "react-data-table-component";
import EmptyDataTable from "./EmptyDataTable";
import LoadingDatatable from "../BfiLoader";
import { BfiDataTablesProps } from "./types";

const BfiDataTable: React.FC<BfiDataTablesProps> = (props) => {
	return (
		<DataTable
			{...props}
			className="bfi-custom-table"
			noHeader={props.noHeader}
			progressPending={props.progressPending}
			progressComponent={<LoadingDatatable />}
			columns={props.columns}
			data={props.data}
			theme="solarized"
			onSort={props.handleSort}
			sortServer
			pagination
			//paginationServer
			paginationTotalRows={props.paginationTotalRows}
			onChangeRowsPerPage={props.onChangeRowsPerPage}
			onChangePage={props.onChangePage}
			subHeader={props.subHeader}
			subHeaderComponent={props.subHeaderComponent}
			noDataComponent={<EmptyDataTable />}
		/>
	);
};

export default BfiDataTable;
