const Input = ({ name, label, error, classes, ...rest }) => {
	return (
		<div className='form-floating mb-3'>
			<input
				{...rest}
				id={name}
				name={name}
				className={classes !== "checkbox" ? "form-control" : "form-check-input"}
			/>
			<label
				className={classes !== "checkbox" ? "" : "form-check-label"}
				htmlFor={name}>
				{label}
			</label>
			{error && <div className='alert alert-danger'>{error}</div>}
		</div>
	);
};

export default Input;
