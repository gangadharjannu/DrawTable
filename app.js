function initializeTable(dataNo, id) {
	var data1 = [{
		"company_name": "Medline Industries, Inc.",
		"product": "Benzalkonium Chloride",
		"price": "481.63"
	}, {
		"company_name": "PD-Rx Pharmaceuticals, Inc.",
		"product": "Alprazolam",
		"price": "167.62",
		"fda_date_approved": "02/12/2015"
	}, {
		"company_name": "West-ward Pharmaceutical Corp.",
		"product": "Flumazenil",
		"fda_date_approved": "23/04/2015"
	}, {
		"company_name": "HyVee Inc",
		"product": "Aspirin",
		"price": "218.32",
		"fda_date_approved": "26/07/2015"
	}, {
		"company_name": "Aurobindo Pharma Limited",
		"product": "carisoprodol",
		"price": "375.58",
		"fda_date_approved": "28/11/2014"
	}, {
		"company_name": "Apotex Corp",
		"product": "Risperidone",
		"price": "213.49",
		"fda_date_approved": "06/11/2015"
	}, {
		"company_name": "Unit Dose Services",
		"product": "Lovastatin",
		"price": "169.14",
		"fda_date_approved": "14/09/2015"
	}, {
		"company_name": "Jubilant HollisterStier LLC",
		"product": "Dog Hair Canis spp.",
		"fda_date_approved": "31/12/2014"
	}, {
		"company_name": "AAA Pharmaceutical, Inc.",
		"product": "ACETAMINOPHEN, CHLORPHENIRAMINE MALEATE, DEXTROMETHORPHAN HYDROBROMIDE, and PHENYLEPHRINE HYDROCHLORIDE",
		"price": "183.33",
		"fda_date_approved": "13/12/2015"
	}, {
		"company_name": "AKG Innovations LLC",
		"product": "AVOBENZONE, OCTINOXATE, OCTISALATE",
		"fda_date_approved": "22/01/2015"
	}, {
		"company_name": "hikma Farmaceutica",
		"product": "Oxytocin"
	}, {
		"company_name": "prime Packaging, Inc.",
		"product": "Avobenzone, Homosalate, Octisalate, Octocrylene, Oxybenzone",
		"price": "208.17"
	}, {
		"company_name": "Davion, Inc",
		"product": "Triclosan",
		"price": "80.30",
		"fda_date_approved": "13/12/2014"
	}, {
		"company_name": "CARDINAL HEALTH",
		"product": "CARBOXYMETHYLCELLULOSE SODIUM, GLYCERIN",
		"price": "330.22",
		"fda_date_approved": "11/08/2015"
	}, {
		"company_name": "Amgen Inc",
		"product": "darbepoetin alfa",
		"price": "332.28",
		"fda_date_approved": "01/07/2015"
	}, {
		"company_name": "Autumn Harp, Inc.",
		"product": "Salicylic Acid",
		"price": "34.43",
		"fda_date_approved": "25/03/2015"
	}, {
		"company_name": "American Regent, Inc.",
		"product": "sodium phosphate, monobasic, monohydrate and sodium phosphate, dibasic anhydrous",
		"price": "11.60"
	}, {
		"company_name": "J. A. Cosmetics U.S. INC",
		"product": "TITANIUM DIOXIDE",
		"price": "130.90",
		"fda_date_approved": "01/12/2015"
	}, {
		"company_name": "NATURE REPUBLIC CO., LTD.",
		"product": "Titanium Dioxide, OCTINOXATE, Zinc Oxide",
		"price": "124.48"
	}, {
		"company_name": "L. Perrigo Company",
		"product": "Dextromethorphan Hydrobromide, Guaifenesin",
		"price": "73.09",
		"fda_date_approved": "03/02/2016"
	}];
	var data2 = [{
		"first_name": "Billy",
		"last_name": "Campbell",
		"phone": "62-(500)527-5325"
	}, {
		"first_name": "Jonathan",
		"last_name": "Black",
		"country": "Russia",
		"phone": "7-(729)811-4597"
	}, {
		"first_name": "cheryl",
		"last_name": "Harvey",
		"country": "Indonesia",
		"phone": "62-(825)454-3810"
	}, {
		"first_name": "Cynthia",
		"last_name": "Cooper"
	}, {
		"first_name": "Thomas",
		"last_name": "Stevens",
		"phone": "86-(527)535-8464"
	}, {
		"first_name": "Jane",
		"last_name": "Chavez",
		"country": "Netherlands"
	}, {
		"first_name": "bobby",
		"last_name": "Price",
		"country": "China",
		"phone": "86-(898)723-6749"
	}, {
		"first_name": "Steve",
		"last_name": "Hansen",
		"phone": "93-(362)494-5552"
	}, {
		"first_name": "Alan",
		"last_name": "Cruz",
		"country": "Philippines",
		"phone": "63-(617)248-8832"
	}, {
		"first_name": "Dennis",
		"last_name": "Baker",
		"country": "Iran",
		"phone": "98-(436)329-3723"
	}, {
		"first_name": "Ernest",
		"last_name": "Bishop",
		"phone": "86-(566)429-1138"
	}, {
		"first_name": "Russell",
		"last_name": "Meyer",
		"phone": "62-(687)827-4302"
	}, {
		"first_name": "Ryan",
		"last_name": "Mendoza",
		"country": "Poland",
		"phone": "48-(537)109-0373"
	}, {
		"first_name": "Maria",
		"last_name": "Greene",
		"phone": "92-(831)367-8049"
	}, {
		"first_name": "Elizabeth",
		"last_name": "Moore",
		"country": "Philippines",
		"phone": "63-(694)844-9255"
	}, {
		"first_name": "Ronald",
		"last_name": "kim",
		"phone": "46-(339)931-9221"
	}, {
		"first_name": "Samuel",
		"last_name": "Jacobs",
		"country": "Russia",
		"phone": "7-(936)156-5229"
	}, {
		"first_name": "Fred",
		"last_name": "Ross",
		"phone": "55-(594)481-7354"
	}, {
		"first_name": "Andrew",
		"last_name": "Burns",
		"country": "Portugal",
		"phone": "351-(174)443-8706"
	}, {
		"first_name": "Robert",
		"last_name": "Frazier",
		"country": "Somalia"
	}];
	var data;
	if (dataNo === 'data1') {
		data = data1;
	} else {
		data = data2;
	}
	DrawTable(data, id);
}

function DrawTable(rawData, id) {
	if (document.getElementById(id)) {
		throw new Error('A Table with the given "ID" is already initalized. Please give unique ID to genereate a new Table.');
	}
	if (rawData == null || id == null) {
		throw new Error('DrawTable must be initalized with "data" and "ID"');
	}
	var data = rawData;
	var dataColumnTypes = getColumnsWithTypes(data);
	var headerKeys = Object.keys(dataColumnTypes);

	var tableFragment = document.createDocumentFragment();

	var thead = document.createElement('thead');
	var tableRowHead = document.createElement('tr');
	var tableRowHeadFragment = generateHeaders(headerKeys);
	tableRowHead.appendChild(tableRowHeadFragment);
	thead.appendChild(tableRowHead);

	// var theadFragment = document.createDocumentFragment();
	// thead.appendChild(theadFragment);
	thead.addEventListener('click', function(event) {
		thClickHandler(event.target, id, data, dataColumnTypes, headerKeys);
	});

	var tbody = document.createElement('tbody');
	var tbodyFragment = generateTable(data, headerKeys);
	tbody.appendChild(tbodyFragment);

	var table = document.createElement('table');

	table.appendChild(thead);
	table.appendChild(tbody);

	table.id = id;

	table.appendChild(tableFragment);

	document.body.appendChild(table);
}

function generateHeaders(headerKeys) {
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
		typeValue = null;

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
				} else {
					typeValue = 'string';
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
	data.forEach(function(row) {
		var tr = document.createElement('tr');
		headerKeys.forEach(function(col) {
			var td = document.createElement('td');
			td.style.border = '1px solid black';
			td.style.borderCollapse = 'collapse';
			if (row[col]) {
				var text = document.createTextNode(row[col]);
				td.appendChild(text);
			}
			tr.appendChild(td);
		});
		tbody.appendChild(tr);
	});
	// for (var rIndex = 0, rIndexLen = data.length; rIndex < rIndexLen; rIndex++) {
	// 	var tr = document.createElement('tr');
	// 	var columns = headerKeys;
	// 	for (var cIndex = 0, cIndexLen = columns.length; cIndex < cIndexLen; cIndex++) {
	// 		var cellValue = data[rIndex][columns[cIndex]];
	// 		var td = document.createElement('td');
	// 		td.style.border = '1px solid black';
	// 		td.style.borderCollapse = 'collapse';
	// 		if (cellValue) {
	// 			var text = document.createTextNode(cellValue);
	// 			td.appendChild(text);
	// 		}
	// 		tr.appendChild(td);
	// 	}
	// 	tbody.appendChild(tr);
	// }
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

function search(event) {
	var filterValue = event.target.value.trim().toUpperCase();
	var tableRows = document.getElementById('tbl1').tBodies[0].children;
	var i, j, rowContent;
	for (var i = 0, j = tableRows.length; i < j; i++) {
		rowContent = tableRows[i].innerText.toUpperCase() || ' ';
		if (rowContent.indexOf(filterValue)>-1) {
			tableRows[i].style.display = '';
		} else {
			tableRows[i].style.display = 'none';
		}
	}
}