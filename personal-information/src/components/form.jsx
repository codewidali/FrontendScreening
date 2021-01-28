import React, { useEffect, useState } from "react";
import data from "../data/data";
import FormLayout from "./formLayout";
import RequiredInputs from "./requiredInputs";

const Form = () => {
	const [progressbar, setProgressbar] = useState(0);
	const [values, setValues] = useState(data);
	const inputs = Object.keys(values);

	const getProgress = () => {
		let total = 0;
		let valid = 0;

		inputs.forEach((element) => {
			values[element].forEach((el) => {
				const { type, dependencies } = el;
				if (el.value && !el.error) {
					RequiredInputs(dependencies, values[element]) &&
						type !== "checkbox" &&
						valid++;
				}
				RequiredInputs(dependencies, values[element]) &&
					type !== "checkbox" &&
					total++;
			});
		});

		const progress = (valid / total) * 100;
		setProgressbar(progress);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		alert("Submitted");
	};

	const validate = (val) => {
		if (!val.value) {
			val.error = val.description;
		} else if (val.mask && !val.mask.test(val.value)) {
			val.error = val.label + " is invalid";
		} else {
			val.error = "";
		}
	};

	const handleChange = (e) => {
		const value = { ...values };
		const currentValue = e.target.value;
		const checkedState = e.target.checked;
		const currentId = e.target.id;

		inputs.forEach((element) => {
			value[element].forEach((el) => {
				if (el.id === currentId) {
					el.value = e.target.type !== "checkbox" ? currentValue : checkedState;
					validate(el);
				}
			});
		});

		setValues(value);
	};

	useEffect(() => {
		getProgress();
	}, [values]);

	return (
		<>
			<div
				className='progress p-0'
				style={{ height: "2px", margin: "15px 0 10px" }}>
				<div
					className='progress-bar'
					role='progressbar'
					style={{ width: `${progressbar}%` }}
					aria-valuenow={progressbar}
					aria-valuemin='0'
					aria-valuemax='100'></div>
			</div>
			<form onSubmit={onSubmit} className='row p-4'>
				{inputs.map((label) => (
					<>
						<div className='col-md-4'>
							<h2 className='display-6'>{label}</h2>
						</div>
						<div className='formBlock col-md-8'>
							{values[label].map(
								(item) =>
									RequiredInputs(item.dependencies, values[label]) && (
										<FormLayout
											onChange={handleChange}
											key={item.id}
											item={item}
										/>
									)
							)}
						</div>
					</>
				))}
				<div className='col-md-4'>&nbsp;</div>
				<div className='col-md-8'>
					<button
						type='submit'
						className='btn btn-secondary col-4 mx-auto mt-4'>
						Submit
					</button>
				</div>
			</form>
		</>
	);
};

export default Form;
