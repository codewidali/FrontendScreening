const Select = ({
	name,
	label,
	error,
	classes,
	placeholder,
	source,
	...rest
}) => {
	return (
		<div className='form-floating mb-3'>
			<select {...rest} id={name} name={name} className='form-select'>
				<option value=''>{placeholder}</option>
				{source.map((option) =>
					typeof option === "object" ? (
						<option key={option.name} value={JSON.stringify(option)}>
							{option.name}
						</option>
					) : (
						<option key={option} value={option}>
							{option}
						</option>
					)
				)}
			</select>
			<label htmlFor={name}>{label}</label>
			{error && <div className='alert alert-danger'>{error}</div>}
		</div>
	);
};

export default Select;
