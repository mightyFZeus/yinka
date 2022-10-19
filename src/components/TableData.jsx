import React, { useState } from "react";

const TableData = () => {
	const [values, setValues] = useState({
		cs1: "",
		cs2: "",
		cs3: "",
		vc1: "",
		vc2: "",
		vc3: "",
		mc1: "",
		mc2: "",
		mc3: "",
		dc1: "",
		dc2: "",
		dc3: "",
		mcl1: "",
		mcl2: "",
		mcl3: "",
		cst1: "",
		cst2: "",
		cst3: "",
	});

	function handleChange(evt) {
		const value = evt.target.value;
		setValues({
			...values,
			[evt.target.name]: value,
		});
    }
    

   

	return (
		<div className="">
                <table id="customers" className="table-auto w-full mx-auto">
				<thead className="mr-auto">
					<th className="mr-auto text-left">S/NO</th>
					<th className="mr-auto text-left">PARAMETERS</th>
					<th className="mr-auto text-left">1</th>
					<th className="mr-auto text-left">2</th>
					<th className="mr-auto text-left">3</th>
				</thead>
				<tbody>
					<tr className="w-[10%] ">
						<td>1</td>
						<td className="text-xs">
							CROSS SECTIONAL AREA(mm ^ 2)
						</td>
						<td>
							<input
								type="text "
								className=" bg-transparent  outline-none px-2"
								name="cs1"
								value={values.cs1}
								onChange={handleChange}
							/>
						</td>
						<td>
							<input
								type="text "
                                className=" bg-transparent  outline-none px-2"
                                name="cs2"
								value={values.cs2}
								onChange={handleChange}
							/>
						</td>
						<td>
							<input
								type="text "
                                className=" bg-transparent  outline-none px-2"
                                name="cs3"
								value={values.cs3}
								onChange={handleChange}
							/>
						</td>
					</tr>
					<tr className="w-[50%] ">
						<td>2</td>
						<td className="text-xs">VOLUME OF CUBE (mm^ 3)</td>
						<td>
							<input
								type="text  "
                                className=" bg-transparent  outline-none px-2"
                                name="vc1"
								value={values.vc1}
								onChange={handleChange}
							/>
						</td>
						<td>
							<input
								type="text  "
                                className=" bg-transparent  outline-none px-2"
                                 name="vc2"
								value={values.vc2}
								onChange={handleChange}
                                
							/>
						</td>
						<td>
							<input
								type="text "
                                className=" bg-transparent  outline-none px-2"
                                 name="vc3"
								value={values.vc3}
								onChange={handleChange}
							/>
						</td>
					</tr>
					<tr>
						<td>3</td>
						<td className="text-xs">MASS OF CUBE (kg)</td>
						<td>
							<input
								type="text  "
                                className=" bg-transparent  outline-none px-2"
                                 name="mc1"
								value={values.mc1}
								onChange={handleChange}
							/>
						</td>
						<td>
							<input
								type="text  "
                                className=" bg-transparent  outline-none px-2"
                                 name="mc2"
								value={values.mc2}
								onChange={handleChange}
							/>
						</td>
						<td>
							<input
								type="text  "
                                className=" bg-transparent  outline-none px-2"
                                 name="mc3"
								value={values.mc3}
								onChange={handleChange}
							/>
						</td>
					</tr>
					<tr>
						<td>4</td>
						<td className="text-xs">DENSITY OF CUBE (kg/m3)</td>
						<td>
							<input
								type="text  "
                                className=" bg-transparent  outline-none px-2"
                                 name="dc1"
								value={values.dc1}
								onChange={handleChange}
							/>
						</td>
						<td>
							<input
								type="text  "
                                className=" bg-transparent  outline-none px-2"
                                 name="dc2"
								value={values.dc2}
								onChange={handleChange}
							/>
						</td>
						<td>
							<input
								type="text  "
                                className=" bg-transparent  outline-none px-2"
                                 name="dc3"
								value={values.dc3}
								onChange={handleChange}
							/>
						</td>
					</tr>
					<tr>
						<td>5</td>
						<td className="text-xs">MAXIMUM CRUSHING LOAD (JN)</td>
						<td>
							<input
								type="text  "
                                className=" bg-transparent  outline-none px-2"
                                 name="mcl1"
								value={values.mcl1}
								onChange={handleChange}
							/>
						</td>
						<td>
							<input
								type="text  "
                                className=" bg-transparent  outline-none px-2"
                                name="mcl2"
								value={values.mcl2}
								onChange={handleChange}
							/>
						</td>
						<td>
							<input
								type="text  "
                                className=" bg-transparent  outline-none px-2"
                                name="mcl3"
								value={values.mcl3}
								onChange={handleChange}
							/>
						</td>
					</tr>
					<tr>
						<td>6</td>
						<td className="text-xs">
							COMPREHENSIVE STRENGTH(N/mm2)
						</td>
						<td>
							<input
								type="text  "
                                className=" bg-transparent  outline-none px-2"
                                name="cst1"
								value={values.cst1}
								onChange={handleChange}
							/>
						</td>
						<td>
							<input
								type="text  "
                                className=" bg-transparent  outline-none px-2"
                                 name="cst2"
								value={values.cst2}
								onChange={handleChange}
                                
							/>
						</td>
						<td>
							<input
								type="text  "
                                className=" bg-transparent  outline-none px-2"
                                 name="cst3"
								value={values.cst3}
								onChange={handleChange}
							/>
						</td>
					</tr>
				</tbody>
                </table>
               
		</div>
	);
};

export default TableData;
