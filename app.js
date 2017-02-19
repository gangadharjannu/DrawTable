function DrawTable(rawData, id) {
	if (rawData == null || id == null) {
		throw new Error('DrawTable must be initalized with "data" and "ID"');
	}
	var data = rawData;
	var dataColumnTypes = getColumnsWithTypes(data);
	var headerKeys = Object.keys(dataColumnTypes);

	var tableFragment = document.createDocumentFragment();

	var thead = document.createElement('thead');
	var tableRowHead = document.createElement('tr');
	var tableRowHeadFragment = generateHeaders(dataColumnTypes, headerKeys);
	tableRowHead.appendChild(tableRowHeadFragment);
	thead.appendChild(tableRowHead);

	var theadFragment = document.createDocumentFragment();
	thead.appendChild(theadFragment);
	thead.addEventListener('click', function(event) {
		thClickHandler(event.target, id, data, dataColumnTypes, headerKeys);
	});

	var tbody = document.createElement('tbody');
	var tbodyFragment = generateTable(data, headerKeys);
	tbody.appendChild(tbodyFragment);

	var table = document.createElement('table');

	table.appendChild(thead);
	table.appendChild(tbody);

	table.style.border = '1px solid black';
	table.style.borderCollapse = 'collapse';
	table.id = id;

	table.appendChild(tableFragment);

	document.body.appendChild(table);
}

function generateHeaders(dataColumnTypes, headerKeys) {
	var tableRowHead = document.createDocumentFragment();
	headerKeys.forEach(function(colName) {
		var th = document.createElement('th');
		th.style.border = '1px solid black';
		th.style.borderCollapse = 'collapse';
		th.setAttribute('data-sort', colName);

		var text = document.createTextNode(colName);
		th.appendChild(text);
		tableRowHead.appendChild(th);
	});
	return tableRowHead;
}

function getColumnsWithTypes(data) {
	var dataColumnTypes = {},
		typeValue = 'string';
	data.forEach(function(row) {
		Object.keys(row).forEach(function(col) {
			// if not column type
			if (!dataColumnTypes[col]) {
				if (!isNaN(row[col])) {
					typeValue = 'number';
				} else if (Date.parse(toDate(row[col])) !== 'Invalid Date' && !isNaN(new Date(toDate(row[col])))) {
					typeValue = 'date';

				} else if (/^[0-9+\(\)#\.\s\-]+$/.test(row[col])) {
					// /^[0-9+\(\)#\.\s\-]+$/
					// /^([0-9\(\)\/\+ \-]*)$/
					// } else if (/^\+(?:[0-9] ?){6,14}[0-9]$/.exec(row[col])) {
					typeValue = 'phonenumber';
				}
				dataColumnTypes[col] = typeValue;
			}
		});
	});
	return dataColumnTypes;
}

function thClickHandler(target, id, data, dataColumnTypes, headerKeys) {
	var sortBy = target.getAttribute('data-sort');
	var sortOrder = target.getAttribute('data-sort-order');

	if (sortOrder === null) {
		sortOrder = 'asc';
		target.setAttribute('data-sort-order', 'asc');
	} else if (sortOrder === 'asc') {
		target.setAttribute('data-sort-order', 'desc');
		sortOrder = 'desc';
	} else if (sortOrder === 'desc') {
		target.setAttribute('data-sort-order', 'asc');
		sortOrder = 'asc';
	}
	var el = target.parentNode.firstChild;
	do {
		if (el !== target) {
			el.removeAttribute('data-sort-order');
		}
	} while (el = el.nextSibling);

	var sortedData = customSort(sortBy, sortOrder, data, dataColumnTypes);
	reGenerateTable(sortedData, id, headerKeys);
}

function reGenerateTable(data, id, headerKeys) {
	var oldTBody = document.getElementById(id).tBodies[0];
	oldTBody.innerHTML = '';
	oldTBody.appendChild(generateTable(data, headerKeys));
}

function generateTable(data, headerKeys) {
	var tbody = document.createDocumentFragment();
	for (var rIndex = 0, rIndexLen = data.length; rIndex < rIndexLen; rIndex++) {
		tr = document.createElement('tr');
		var columns = headerKeys;
		for (var cIndex = 0, cIndexLen = columns.length; cIndex < cIndexLen; cIndex++) {
			var cellValue = data[rIndex][columns[cIndex]];
			var td = document.createElement('td');
			td.style.border = '1px solid black';
			td.style.borderCollapse = 'collapse';
			if (cellValue) {
				var text = document.createTextNode(cellValue);
				td.appendChild(text);
			}
			tr.appendChild(td);
		}
		tbody.appendChild(tr);
	}
	return tbody;
}

function customSort(key, order, data, columnTypes) {
	var comparatorFunction = null;
	switch (columnTypes[key]) {
		case 'string':
			if (order === 'asc') {
				comparatorFunction = function(a, b) {
					if (!a[key]) {
						return 1;
					} else if (!b[key]) {
						return -1;
					} else if (a[key] === b[key]) {
						return 0;
					}
					return a[key].toLowerCase().localeCompare(b[key].toLowerCase());
				};
			} else {
				comparatorFunction = function(a, b) {
					if (!a[key]) {
						return 1;
					} else if (!b[key]) {
						return -1;
					} else if (a[key] === b[key]) {
						return 0;
					}
					return b[key].toLowerCase().localeCompare(a[key].toLowerCase());
				};
			}
			break;
		case 'number':
			if (order === 'asc') {
				comparatorFunction = function(a, b) {
					if (!a[key]) {
						return 1;
					} else if (!b[key]) {
						return -1;
					} else if (a[key] === b[key]) {
						return 0;
					}
					return a[key] - b[key];
				};
			} else {
				comparatorFunction = function(a, b) {
					if (!a[key]) {
						return 1;
					} else if (!b[key]) {
						return -1;
					} else if (a[key] === b[key]) {
						return 0;
					}
					return b[key] - a[key];
				};
			}

			break;
		case 'date':
			if (order === 'asc') {
				comparatorFunction = function(a, b) {
					if (!a[key]) {
						return 1;
					} else if (!b[key]) {
						return -1;
					} else if (a[key] === b[key]) {
						return 0;
					}
					var left = a[key].split('/');
					var right = b[key].split('/');
					return new Date(left[2], left[1] - 1, left[0]) - new Date(right[2], right[1] - 1, right[0]);
				};
			} else {
				comparatorFunction = function(a, b) {
					if (!a[key]) {
						return 1;
					} else if (!b[key]) {
						return -1;
					} else if (a[key] === b[key]) {
						return 0;
					}
					var left = a[key].split('/');
					var right = b[key].split('/');
					return new Date(right[2], right[1] - 1, right[0]) - new Date(left[2], left[1] - 1, left[0]);
				};
			}
			break;

		case 'phonenumber':
			if (order === 'asc') {
				comparatorFunction = function(a, b) {
					if (!a[key]) {
						return 1;
					} else if (!b[key]) {
						return -1;
					} else if (a[key] === b[key]) {
						return 0;
					}
					var left = parseInt(a[key].replace(/\D/g, ''));
					var right = parseInt(b[key].replace(/\D/g, ''));
					return left - right;
				};
			} else {
				comparatorFunction = function(a, b) {
					if (!a[key]) {
						return 1;
					} else if (!b[key]) {
						return -1;
					} else if (a[key] === b[key]) {
						return 0;
					}
					var left = parseInt(a[key].replace(/\D/g, ''));
					var right = parseInt(b[key].replace(/\D/g, ''));
					return right - left;
				};
			}
			break;
		default:

	}
	return data.sort(comparatorFunction);
}

function toDate(dateStr) {
	var parts = dateStr.split('/');
	return new Date(parts[2], parts[1] - 1, parts[0]);
}