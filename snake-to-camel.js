function snakeToCamel(str) {
	return str.replace(/([_][a-zA-Z])/g, letter => letter.toUpperCase().replace('_', ''));
}
