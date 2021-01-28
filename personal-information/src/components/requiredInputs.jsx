const RequiredInputs = (check, el) => {
	if (!check) return true;

	const checkKey = Object.keys(check);
	let visible = false;

	checkKey.forEach((key) => {
		const input = el.find((item) => item.id === key);
		const { value } = input;

		if (value) {
			typeof check[key] === "function"
				? (visible = check[key](JSON.parse(value)))
				: (visible = !!value);
		} else {
			visible = false;
		}
	});

	return visible;
};

export default RequiredInputs;
