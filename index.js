// All Current Converters Present
import {
	Converters,
	ConverterData,
	convertLength,
	converterMain,
} from "./data.js";

const list = document.getElementById("conv_list");

// Generate the List of Converters
Converters.map((c) => {
	list.innerHTML += `<li class="converter_item ${
		c === "Length" && "active"
	}">${c}</li>`;
});

const [inputEl, outputEl] = document.querySelectorAll(".input_box");
const [box1, box2] = document.getElementsByClassName("dropdown");
const [selectedOption1, selectedOption2] =
	document.getElementsByClassName("selected");
const converterItems = document.querySelectorAll(".converter_item");
const unitBoxes = document.getElementsByClassName("unit_select");
const [currentConverter] = document.getElementsByClassName("current_conv");
let curr = "Length";

const handleChangeConverter = (e) => {
	Array.from(converterItems).forEach((item) => {
		item.classList.remove("active");
	});

	e.target.classList.add("active");
	curr = e.target.innerText;
	currentConverter.innerText = e.target.innerText + " Converter";
	selectListGenerate(e.target.innerText);
};

for (let i = 0; i < converterItems.length; i++) {
	converterItems[i].addEventListener("click", handleChangeConverter);
}

Array.from(unitBoxes).forEach((box) => {
	box.addEventListener("click", () => {
		box1.classList.add("dnone");
		box2.classList.add("dnone");
		box.childNodes[3].classList.toggle("dnone");
	});
});

const handleChangeUnit = (e) => {
	e.stopPropagation();
	if (e.target.parentElement.classList.contains("input")) {
		selectedOption1.innerHTML = `${e.target.innerText}`;
		selectedOption1.title = e.target.title;
	} else {
		selectedOption2.innerHTML = `${e.target.innerText}`;
		selectedOption2.title = e.target.title;
	}
	box1.classList.add("dnone");
	box2.classList.add("dnone");
	outputEl.value = converterMain(
		curr,
		selectedOption1.title,
		selectedOption2.title,
		inputEl.value
	);
};

function handleChange(e) {
	const unit1 = selectedOption1.title;
	const unit2 = selectedOption2.title;

	const val2 = converterMain(curr, unit1, unit2, e.target.value);
	outputEl.value = val2;
}

document.getElementById("inp").addEventListener("input", handleChange);

const selectListGenerate = (currentConv) => {
	box1.innerHTML = "";
	box2.innerHTML = "";
	const [filteredData] = ConverterData.filter((c) => c.id === currentConv);

	selectedOption1.innerHTML = filteredData.defaultU1;

	filteredData.selectOptions.map((op) => {
		if (op.sign === filteredData.defaultU1) {
			selectedOption1.innerHTML = `${op.title} (${op.sign})`;
			selectedOption1.title = op.sign;
		}
		if (op.sign === filteredData.defaultU2) {
			selectedOption2.innerHTML = `${op.title} (${op.sign})`;
			selectedOption2.title = op.sign;
		}
		const listItem = document.createElement("li");
		listItem.classList.add("dropdown_list");
		listItem.innerHTML = `${op.title} (${op.sign})`;
		listItem.title = `${op.sign}`;
		box1.innerHTML += listItem.outerHTML;
		box2.innerHTML += listItem.outerHTML;
	});

	const items = document.getElementsByClassName("dropdown_list");

	Array.from(items).forEach((item) => {
		item.addEventListener("click", handleChangeUnit);
	});

	outputEl.value = converterMain(
		currentConv,
		selectedOption1.title,
		selectedOption2.title,
		inputEl.value
	);
};

selectListGenerate("Length");
