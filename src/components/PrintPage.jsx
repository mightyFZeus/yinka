import React, { useEffect, useState } from "react";

const PrintPage = () => {
	const [getData, setGetData] = useState();
	const [getTableData, setGetTableData] = useState();
	console.log(getData);

	useEffect(() => {
		const formData = JSON.parse(localStorage.getItem("input"));
		const tableData = JSON.parse(localStorage.getItem("tableInput"));
		if (formData) {
			setGetData(formData);
		}
		if (tableData) {
			setGetTableData(tableData);
		}
	}, []);

	const average =
		(parseInt(getData?.SlumpTest2) + parseInt(getData?.SlumpTest1)) / 2;

	const averageStrength =
		(parseInt(getTableData?.cst1) +
			parseInt(getTableData?.cst2) +
			parseInt(getTableData?.cst3)) /
		3;

	return (
		<div>
			<button className='text-xl font-bold' onClick={() => window.print()}>print</button>
			<div className="lg:max-w-3xl  font-semibold text-lg  m-auto lg:py-20 px-6 py-10">
				<div className="flex justify-between">
					<div className="text-2xl">
						<p className="mb-2">
							Contractor's Name: {getData?.contractorName}{" "}
						</p>
						<p className="mb-2">Site: {getData?.site} </p>
						<p className="mb-2">
							Type of Cement: {getData?.typeOfCement}{" "}
						</p>

						<p className="mb-2">
							Mix Proportion: {getData?.mixProportion}{" "}
						</p>
						<p className="mb-2">
							Mode of Mixing: {getData?.modeOfMixing}{" "}
						</p>
						<p className="mb-2">
							Samples made by: {getData?.samplesMadeBy}{" "}
						</p>
						<p className="mb-2">
							Method of curring: {getData?.methodOfCurring}{" "}
						</p>
						<p className="mb-2">
							Samples collected/Brought By:
							{getData?.sampleCollectedBroughtBy}
						</p>
						<p className="mb-2">
							Samples collected/Brought By:
							{getData?.sampleCollectedBroughtBy}
						</p>
						<p className="mb-2">
							Structural Element: {getData?.structuralElement}{" "}
						</p>
					</div>

					<div className="text-2xl">
						<p>Result No: {getData?.resultNo} </p>
						<p>Coarse Aggregate: {getData?.coarseAggregate} </p>
						<p>W/C Ration: {getData?.wcRatio} </p>
					</div>
				</div>
				{/* data collected and given */}
				<div className="flex justify-between my-10">
					<div>
						<p>Date collected By :</p>
						<p>Name : {getData?.collectedName}</p>
						<p>Date : {getData?.collectedDate}</p>
					</div>
					<div>
						<p>Date given By :</p>
						<p>Name : {getData?.givenName}</p>
						<p>Date : {getData?.givenDate}</p>
					</div>
				</div>
				{/* slump */}
				<div className="flex justify-between">
					<p>Slump Test (mm)</p>
					<p>1st : {getData?.SlumpTest1}</p>
					<p>2nd : {getData?.SlumpTest2}</p>
					<p>Average : {average} </p>
				</div>

				{/* date */}

				<div className="flex justify-between my-10">
					<p>Date of Casting : {getData?.dateOfCasting}</p>
					<p>Date of Testing : {getData?.dateOfTesting}</p>
					<p>Age : {getData?.age} Days </p>
				</div>
				<div className="overflow-x-scroll ">
					<table id="customers" className="table-auto w-full mx-auto">
						<thead className="mr-auto">
							<tr>
								<th className="mr-auto text-left">S/NO</th>
								<th className="mr-auto text-left">
									PARAMETERS
								</th>
								<th className="mr-auto w-[20%] text-left">1</th>
								<th className="mr-auto w-[20%]  text-left">
									2
								</th>
								<th className="mr-auto w-[20%]  text-left">
									3
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className="w-[10%] ">
								<td>1</td>
								<td className="text-xs">
									CROSS SECTIONAL AREA(mm ^ 2)
								</td>
								<td>
									<p className="w-full">
										{getTableData?.cs1}
									</p>
								</td>
								<td>
									<p>{getTableData?.cs2}</p>
								</td>
								<td>
									<p>{getTableData?.cs3}</p>
								</td>
							</tr>
							<tr className="w-[50%] ">
								<td>2</td>
								<td className="text-xs">
									VOLUME OF CUBE (mm^ 3)
								</td>
								<td>
									<p>{getTableData?.vc1}</p>
								</td>
								<td>
									<p>{getTableData?.vc2}</p>
								</td>
								<td>
									<p>{getTableData?.vc3}</p>
								</td>
							</tr>
							<tr>
								<td>3</td>
								<td className="text-xs">MASS OF CUBE (kg)</td>
								<td>
									<p>{getTableData?.mc1}</p>
								</td>
								<td>
									<p>{getTableData?.mc2}</p>
								</td>
								<td>
									<p>{getTableData?.mc3}</p>
								</td>
							</tr>
							<tr>
								<td>4</td>
								<td className="text-xs">
									DENSITY OF CUBE (kg/m3)
								</td>
								<td>
									<p>{getTableData?.dc1}</p>
								</td>
								<td>
									<p>{getTableData?.dc2}</p>
								</td>
								<td>
									<p>{getTableData?.dc3}</p>
								</td>
							</tr>
							<tr>
								<td>5</td>
								<td className="text-xs">
									MAXIMUM CRUSHING LOAD (JN)
								</td>
								<td>
									<p>{getTableData?.mcl1}</p>
								</td>
								<td>
									<p>{getTableData?.mcl2}</p>
								</td>
								<td>
									<p>{getTableData?.mcl3}</p>
								</td>
							</tr>
							<tr>
								<td>6</td>
								<td className="text-xs">
									COMPREHENSIVE STRENGTH(N/mm2)
								</td>
								<td>{getTableData?.cst1}</td>
								<td>{getTableData?.cst2}</td>
								<td>{getTableData?.cst3}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="mt-10">
					<p>Average Strength (N/mm^2) : {averageStrength}</p>
					<p>Design Strength (N/mm^2) : {getData?.strength}</p>
					<p>
						Test Remarks: Good{" "}
						<span className="text-xs">
							(we will no be liable they are picked by LSMTL)
						</span>
					</p>
					<p>Test standard : BS EN 12390-2.2000</p>
				</div>
			</div>
		</div>
	);
};

export default PrintPage;
