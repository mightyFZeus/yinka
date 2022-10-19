import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import PrimaryInput from "./Input";
import { useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";
const Home = () => {
	const [tableValues, setTableValues] = useState({
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
		setTableValues({
			...tableValues,
			[evt.target.name]: value,
		});
		if (evt.target.value === "") {
			evt.target.style.borderColor ='#ff0000'
		}
	}
	const navigate = useNavigate()
	return (
		<div className="lg:max-w-3xl  m-auto lg:py-20 px-6 py-10">
			<div className="md:text-4xl font-bold text-xl text-center">
				<p className="italic font-normal text-sm mt-5">
					please fill out the form below correctly
				</p>
			</div>
			<Formik
				initialValues={{
					contractorName: "",
					site: "",
					typeOfCement: "",
					mixProportion: "",
					resultNo: "",
					modeOfMixing:"",
					coarseAggregate: "",
					wcRatio: "",
					samplesMadeBy: "",
					methodOfCuring: "",
					sampleCollectedBroughtBy: "",
					structuralElement: "",
					collectedName: "",
					collectedDate: "",
					givenName: "",
					givenDate: "",
					TestCollectedBy: "",
					SlumpTest1: "",
					SlumpTest2: "",
					dateOfCasting: "",
					dateOfTesting: "",
					age: "",
					strength:""
				}}
				validationSchema={Yup.object({
					contractorName: Yup.string().required(
						" contractor's name is required"
					),
					age: Yup.string().required(" Age  is required"),
					site: Yup.string().required(" Site's name is required"),
					typeOfCement: Yup.string().required(
						" Type of cement is required"
					),
					mixProportion: Yup.string().required(
						" Mix Proportion is required"
					),
					resultNo: Yup.string().required(" Result No is required"),
					coarseAggregate: Yup.string().required(
						" Coarse Aggregate is required"
					),
					wcRatio: Yup.string().required(" W/C ratio is required"),
					samplesMadeBy: Yup.string().required(
						" This  field is required"
					),
					methodOfCuring: Yup.string().required(
						" Method of curring  is required"
					),
					sampleCollectedBroughtBy: Yup.string().required(
						" This  field  is required"
					),
					structuralElement: Yup.string().required(
						" Structural Element   is required"
					),
					collectedName: Yup.string().required(
						"  This  field  is required"
					),
					collectedDate: Yup.string().required(
						"  This  field  is required"
					),
					givenName: Yup.string().required(
						"  This  field  is required"
					),
					givenDate: Yup.string().required(
						"  This  field  is required"
					),
					TestCollectedBy: Yup.string().required(
						"  This  field  is required"
					),
					SlumpTest1: Yup.string().required(
						"  This  field  is required"
					),
					SlumpTest2: Yup.string().required(
						"  This  field  is required"
					),
					modeOfMixing: Yup.string().required(
						"  This  field  is required"
					),
					dateOfCasting: Yup.string().required(
						"  This  field  is required"
					),
					dateOfTesting: Yup.string().required(
						"  This  field  is required"
					),
					strength: Yup.string().required(
						"  This  field  is required"
					),
				})}
				onSubmit={(values, { setSubmitting }) => {
					localStorage.setItem("input", JSON.stringify(values));
					localStorage.setItem(
						"tableInput",
						JSON.stringify(tableValues)
					);

					
					navigate('/print')
				}}
			>
				{(formik) => (
					<form onSubmit={formik.handleSubmit}>
						<PrimaryInput
							type="text"
							label="Contractor's Name"
							placeholder="Opara Linus Ahmed"
							formikTouched={formik.touched.contractorName}
							formikErrors={formik.errors.contractorName}
							getFieldProps={{
								...formik.getFieldProps("contractorName"),
							}}
						/>
						<PrimaryInput
							type="text"
							label="Site's Name"
							placeholder="Ikoyi, Lagos"
							formikTouched={formik.touched.site}
							formikErrors={formik.errors.site}
							getFieldProps={{
								...formik.getFieldProps("site"),
							}}
						/>
						<PrimaryInput
							type="text"
							label="Type of Cement"
							placeholder="Dangote's Cement"
							formikTouched={formik.touched.typeOfCement}
							formikErrors={formik.errors.typeOfCement}
							getFieldProps={{
								...formik.getFieldProps("typeOfCement"),
							}}
						/>
						<PrimaryInput
							type="text"
							label="Coarse Aggregate"
							placeholder="2/4 UP"
							formikTouched={formik.touched.coarseAggregate}
							formikErrors={formik.errors.coarseAggregate}
							getFieldProps={{
								...formik.getFieldProps("coarseAggregate"),
							}}
						/>
						<PrimaryInput
							type="text"
							label="Mode of Mixing"
							placeholder="Mechanical /Manual"
							formikTouched={formik.touched.modeOfMixing}
							formikErrors={formik.errors.modeOfMixing}
							getFieldProps={{
								...formik.getFieldProps("modeOfMixing"),
							}}
						/>
						<PrimaryInput
							type="text"
							label="W/C Ratio"
							placeholder="N/A"
							formikTouched={formik.touched.wcRatio}
							formikErrors={formik.errors.wcRatio}
							getFieldProps={{
								...formik.getFieldProps("wcRatio"),
							}}
						/>
						<PrimaryInput
							type="text"
							label="Result No"
							placeholder="DGD/DDHD/27303773"
							formikTouched={formik.touched.resultNo}
							formikErrors={formik.errors.resultNo}
							getFieldProps={{
								...formik.getFieldProps("resultNo"),
							}}
						/>
						<PrimaryInput
							type="text"
							label="Mix Proportion"
							placeholder="Grade 40"
							formikTouched={formik.touched.mixProportion}
							formikErrors={formik.errors.mixProportion}
							getFieldProps={{
								...formik.getFieldProps("mixProportion"),
							}}
						/>
						<PrimaryInput
							type="text"
							label="Samples Made By"
							placeholder="client"
							formikTouched={formik.touched.samplesMadeBy}
							formikErrors={formik.errors.samplesMadeBy}
							getFieldProps={{
								...formik.getFieldProps("samplesMadeBy"),
							}}
						/>
						<PrimaryInput
							type="text"
							label="Method of Curing"
							placeholder="Immersion in water"
							formikTouched={formik.touched.methodOfCuring}
							formikErrors={formik.errors.methodOfCuring}
							getFieldProps={{
								...formik.getFieldProps("methodOfCuring"),
							}}
						/>
						<PrimaryInput
							type="text"
							label="Test Collected By"
							placeholder="Ahmed"
							formikTouched={formik.touched.TestCollectedBy}
							formikErrors={formik.errors.TestCollectedBy}
							getFieldProps={{
								...formik.getFieldProps("TestCollectedBy"),
							}}
						/>
						<PrimaryInput
							type="text"
							label="Samples Collected or Brought by"
							placeholder="Client"
							formikTouched={
								formik.touched.sampleCollectedBroughtBy
							}
							formikErrors={
								formik.errors.sampleCollectedBroughtBy
							}
							getFieldProps={{
								...formik.getFieldProps(
									"sampleCollectedBroughtBy"
								),
							}}
						/>
						<PrimaryInput
							type="text"
							label="Structural Element"
							placeholder="Trial Mix"
							formikTouched={formik.touched.structuralElement}
							formikErrors={formik.errors.structuralElement}
							getFieldProps={{
								...formik.getFieldProps("structuralElement"),
							}}
						/>

						{/* date collected by */}
						<div className="md:flex  gap-4 justify-between">
							<div className="w-full">
								<p className="mb-6">Data Collected By:</p>
								<PrimaryInput
									type="text"
									label="Name:"
									placeholder="Ahmed Isa"
									formikTouched={formik.touched.collectedName}
									formikErrors={formik.errors.collectedName}
									getFieldProps={{
										...formik.getFieldProps(
											"collectedName"
										),
									}}
								/>
								<PrimaryInput
									type="date"
									label="Date:"
									placeholder="Ahmed Isa"
									formikTouched={formik.touched.collectedDate}
									formikErrors={formik.errors.collectedDate}
									getFieldProps={{
										...formik.getFieldProps(
											"collectedDate"
										),
									}}
								/>
							</div>

							<div className="w-full">
								<p className="mb-6">Data Given By:</p>
								<PrimaryInput
									type="text"
									label="Name:"
									placeholder="Ahmed Isa"
									formikTouched={formik.touched.givenName}
									formikErrors={formik.errors.givenName}
									getFieldProps={{
										...formik.getFieldProps("givenName"),
									}}
								/>
								<PrimaryInput
									type="date"
									label="Date:"
									placeholder="Ahmed Isa"
									formikTouched={formik.touched.givenDate}
									formikErrors={formik.errors.givenDate}
									getFieldProps={{
										...formik.getFieldProps("givenDate"),
									}}
								/>
							</div>
						</div>

						{/* slump test */}

						<p className="my-4"> Slump Test (mm)</p>

						<div className="md:flex justify-between gap-4">
							<div className="w-full">
								<PrimaryInput
									type="number"
									label="SlumpTest 1"
									placeholder="Trial Mix"
									formikTouched={formik.touched.SlumpTest1}
									formikErrors={formik.errors.SlumpTest1}
									getFieldProps={{
										...formik.getFieldProps("SlumpTest1"),
									}}
								/>
							</div>
							<div className="w-full">
								<PrimaryInput
									type="number"
									label="SlumpTest 2"
									placeholder="Trial Mix"
									formikTouched={formik.touched.SlumpTest2}
									formikErrors={formik.errors.SlumpTest2}
									getFieldProps={{
										...formik.getFieldProps("SlumpTest2"),
									}}
								/>
							</div>
						</div>
						{/* date */}
						<div className="flex justify-between gap-4">
							<div className="w-full">
								<PrimaryInput
									type="date"
									label="Date of Testing"
									placeholder="20/10/22"
									formikTouched={formik.touched.dateOfTesting}
									formikErrors={formik.errors.dateOfTesting}
									getFieldProps={{
										...formik.getFieldProps(
											"dateOfTesting"
										),
									}}
								/>
							</div>
							<div className="w-full">
								<PrimaryInput
									type="date"
									label="Date of Casting"
									placeholder="20/10/22"
									formikTouched={formik.touched.dateOfCasting}
									formikErrors={formik.errors.dateOfCasting}
									getFieldProps={{
										...formik.getFieldProps(
											"dateOfCasting"
										),
									}}
								/>
							</div>
						</div>
						<PrimaryInput
							type="text"
							label="Age (in days)"
							placeholder="7days"
							formikTouched={formik.touched.age}
							formikErrors={formik.errors.age}
							getFieldProps={{
								...formik.getFieldProps("age"),
							}}
						/>
						<Dropdown
							label="Design strength" options={['Greater or equals 17', "Lesser or equals 17"]}
							formikTouched={formik.touched.strength}
							formikErrors={formik.errors.strength}
							getFieldProps={{
								...formik.getFieldProps("strength"),
							}}
						
						
						/>
						<p className='text-xs italic mb-4 text-orange-400'>Fill all table cells with the appropriate values</p>
						{/* table */}
						<div className="overflow-x-scroll ">
							<table
								id="customers"
								className="table-auto w-full mx-auto"
							>
								<thead className="mr-auto">
									<tr>
										<th className="mr-auto text-left">
											S/NO
										</th>
										<th className="mr-auto text-left">
											PARAMETERS
										</th>
										<th className="mr-auto text-left">1</th>
										<th className="mr-auto text-left">2</th>
										<th className="mr-auto text-left">3</th>
									</tr>
								</thead>
								<tbody>
									<tr className="w-[10%] ">
										<td>1</td>
										<td className="text-xs">
											CROSS SECTIONAL AREA(mm ^ 2)
										</td>
										<td>
											<input
												type="number "
												className=" bg-transparent  outline-none px-2"
												name="cs1"
												value={tableValues.cs1}
												onChange={handleChange}
											/>
										</td>
										<td>
											<input
												type="number "
												className=" bg-transparent  outline-none px-2"
												name="cs2"
												value={tableValues.cs2}
												onChange={handleChange}
											/>
										</td>
										<td>
											<input
												type="number "
												className=" bg-transparent  outline-none px-2"
												name="cs3"
												value={tableValues.cs3}
												onChange={handleChange}
											/>
										</td>
									</tr>
									<tr className="w-[50%] ">
										<td>2</td>
										<td className="text-xs">
											VOLUME OF CUBE (mm^ 3)
										</td>
										<td>
											<input
												type="number  "
												className=" bg-transparent  outline-none px-2"
												name="vc1"
												value={tableValues.vc1}
												onChange={handleChange}
											/>
										</td>
										<td>
											<input
												type="number  "
												className=" bg-transparent  outline-none px-2"
												name="vc2"
												value={tableValues.vc2}
												onChange={handleChange}
											/>
										</td>
										<td>
											<input
												type="number "
												className=" bg-transparent  outline-none px-2"
												name="vc3"
												value={tableValues.vc3}
												onChange={handleChange}
											/>
										</td>
									</tr>
									<tr>
										<td>3</td>
										<td className="text-xs">
											MASS OF CUBE (kg)
										</td>
										<td>
											<input
												type="number  "
												className=" bg-transparent  outline-none px-2"
												name="mc1"
												value={tableValues.mc1}
												onChange={handleChange}
											/>
										</td>
										<td>
											<input
												type="number  "
												className=" bg-transparent  outline-none px-2"
												name="mc2"
												value={tableValues.mc2}
												onChange={handleChange}
											/>
										</td>
										<td>
											<input
												type="number  "
												className=" bg-transparent  outline-none px-2"
												name="mc3"
												value={tableValues.mc3}
												onChange={handleChange}
											/>
										</td>
									</tr>
									<tr>
										<td>4</td>
										<td className="text-xs">
											DENSITY OF CUBE (kg/m3)
										</td>
										<td>
											<input
												type="number  "
												className=" bg-transparent  outline-none px-2"
												name="dc1"
												value={tableValues.dc1}
												onChange={handleChange}
											/>
										</td>
										<td>
											<input
												type="number  "
												className=" bg-transparent  outline-none px-2"
												name="dc2"
												value={tableValues.dc2}
												onChange={handleChange}
											/>
										</td>
										<td>
											<input
												type="number  "
												className=" bg-transparent  outline-none px-2"
												name="dc3"
												value={tableValues.dc3}
												onChange={handleChange}
											/>
										</td>
									</tr>
									<tr>
										<td>5</td>
										<td className="text-xs">
											MAXIMUM CRUSHING LOAD (JN)
										</td>
										<td>
											<input
												type="number  "
												className=" bg-transparent  outline-none px-2"
												name="mcl1"
												value={tableValues.mcl1}
												onChange={handleChange}
											/>
										</td>
										<td>
											<input
												type="number  "
												className=" bg-transparent  outline-none px-2"
												name="mcl2"
												value={tableValues.mcl2}
												onChange={handleChange}
											/>
										</td>
										<td>
											<input
												type="number  "
												className=" bg-transparent  outline-none px-2"
												name="mcl3"
												value={tableValues.mcl3}
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
												type="number  "
												className=" bg-transparent  outline-none px-2"
												name="cst1"
												value={tableValues.cst1}
												onChange={handleChange}
											/>
										</td>
										<td>
											<input
												type="number  "
												className=" bg-transparent  outline-none px-2"
												name="cst2"
												value={tableValues.cst2}
												onChange={handleChange}
											/>
										</td>
										<td>
											<input
												type="number  "
												className=" bg-transparent  outline-none px-2"
												name="cst3"
												value={tableValues.cst3}
												onChange={handleChange}
											/>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<button
							type="submit"
							onClick={formik.submitForm}
							className="w-full my-10 text-center p-3 bg-black rounded-lg text-xl text-white"
						>
							Submit
						</button>
					</form>
				)}
			</Formik>
		</div>
	);
};

export default Home;
