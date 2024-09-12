import { render, screen } from "@testing-library/react";
import BfiDataTable from "../index";

type RowProps = {
	title: string;
	director: string;
	year: string;
};

const columns = [
	{
		name: "Title",
		selector: (row: RowProps) => row.title,
		sortable: true,
	},
	{
		name: "Director",
		selector: (row: RowProps) => row.director,
		sortable: true,
	},
	{
		name: "Year",
		selector: (row: RowProps) => row.year,
		sortable: true,
	},
];

const data = [
	{
		title: "Title1",
		director: "Kim Son",
		year: "2020",
	},
	{
		title: "Title2",
		director: "Usagi",
		year: "2021",
	},
	{
		title: "Title3",
		director: "Peter",
		year: "2022",
	},
];

describe("<BfiDataTable/>", () => {
	it("should render Empty Data Table, when there is no data provided", () => {
		render(
			<BfiDataTable
				data={[]}
				columns={[]}
			/>,
		);
		const noDataInfo = screen.getByText("No data Record to display");
		expect(noDataInfo).toBeInTheDocument();
	});

	describe("when there is data provided", () => {
		it("should render columns title properly", () => {
			render(
				<BfiDataTable
					data={data}
					columns={columns}
					progressPending={false}
					progressComponent={undefined}
					theme={"solarized"}
					sortServer={false}
					pagination={false}
					paginationTotalRows={0}
					onChangeRowsPerPage={undefined}
					onChangePage={undefined}
					subHeader={undefined}
					subHeaderComponent={undefined}
					noDataComponent={undefined}
				/>,
			);

			columns.forEach((column) => {
				const columnTitle = screen.getByText(`${column.name}`);
				expect(columnTitle).toBeInTheDocument();
			});
		});

		it("should render data `title` properly", () => {
			render(
				<BfiDataTable
					data={data}
					columns={columns}
					progressPending={false}
					progressComponent={undefined}
					theme={"solarized"}
					sortServer={false}
					pagination={false}
					paginationTotalRows={0}
					onChangeRowsPerPage={undefined}
					onChangePage={undefined}
					subHeader={undefined}
					subHeaderComponent={undefined}
					noDataComponent={undefined}
				/>,
			);

			data.forEach((dataTable) => {
				const title = screen.getByText(`${dataTable.title}`);
				expect(title).toBeInTheDocument();
			});
		});

		it("should render data `director` properly", () => {
			render(
				<BfiDataTable
					data={data}
					columns={columns}
					progressPending={false}
					progressComponent={undefined}
					theme={"solarized"}
					sortServer={false}
					pagination={false}
					paginationTotalRows={0}
					onChangeRowsPerPage={undefined}
					onChangePage={undefined}
					subHeader={undefined}
					subHeaderComponent={undefined}
					noDataComponent={undefined}
				/>,
			);

			data.forEach((dataTable) => {
				const director = screen.getByText(`${dataTable.director}`);
				expect(director).toBeInTheDocument();
			});
		});

		it("should render data `year` properly", () => {
			render(
				<BfiDataTable
					data={data}
					columns={columns}
					progressPending={false}
					progressComponent={undefined}
					theme={"solarized"}
					sortServer={false}
					pagination={false}
					paginationTotalRows={0}
					onChangeRowsPerPage={undefined}
					onChangePage={undefined}
					subHeader={undefined}
					subHeaderComponent={undefined}
					noDataComponent={undefined}
				/>,
			);

			data.forEach((dataTable) => {
				const year = screen.getByText(`${dataTable.year}`);
				expect(year).toBeInTheDocument();
			});
		});
	});
});
