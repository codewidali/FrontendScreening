import React from "react";
import Input from "./input";
import Select from "./select";

const FormLayout = ({ item, onChange }) => {
	const { type, label, id, definition, sourceList, error, value } = item;

	const renderForms = () => {
		let renderInputs = "";
		switch (type) {
			case "checkbox":
				renderInputs = (
					<Input
						type={type}
						label={label}
						name={id}
						placeholder={definition}
						classes={type}
						onChange={onChange}
						value={value || false}
					/>
				);
				break;
			case "select":
				renderInputs = (
					<Select
						type={type}
						label={label}
						name={id}
						placeholder={definition}
						source={sourceList}
						onChange={onChange}
						error={error}
						value={value || ""}
					/>
				);
				break;
			default:
				renderInputs = (
					<Input
						type={type}
						label={label}
						name={id}
						placeholder={definition}
						onChange={onChange}
						error={error}
						value={value || ""}
					/>
				);
				break;
		}
		return renderInputs;
	};

	return <>{renderForms()}</>;
};

export default FormLayout;
