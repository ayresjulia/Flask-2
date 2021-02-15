const BASE_NUM_API = 'http://numbersapi.com/';

async function processForm(evt) {
	evt.preventDefault();
	let name = $('#name').val(); //get name input value

	let email = $('#email').val(); //get email input value

	let year = $('#year').val(); //get year input value

	let color = $('#color').val(); //get color input value

	//use form values to make POST request to get-lucky-num route

	let form = {
		name,
		email,
		year,
		color
	};

	// post on localhost values from the form in JSON format
	const response = await axios.post('/api/get-lucky-num', form);

	console.log(response.data.user);
	handleResponse(response.data.user);
}

/** handleResponse: deal with response from our lucky-num API. */

async function handleResponse(response) {
	const $luckyResults = $('#lucky-results');

	let random_number = Math.floor(Math.random() * 100) + 1;
	const num_fact = await axios.get(`http://numbersapi.com/${random_number}/trivia`);
	const year_fact = await axios.get(`http://numbersapi.com/${response.year}/year`);
	// console.log(num_fact.data);
	// console.log(year_fact.data);

	let $item = $(
		`<p>Your lucky number is ${random_number}. ${num_fact.data}.</p>
        <p>Your birth year ${response.year} fact is : ${year_fact.data}</p>`
	);

	$luckyResults.append($item);
}

$('#lucky-form').on('submit', processForm);
