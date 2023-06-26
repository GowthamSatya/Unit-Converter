export const Converters = [
	"Length",
	"Area",
	"Volume",
	"Weight",
	"Temperature",
	"Time",
];

export const ConverterData = [
	{
		id: "Length",
		name: "Length Converter",
		defaultU1: "cm",
		defaultU2: "m",
		selectOptions: [
			{ title: "Meter", sign: "m" },
			{ title: "Kilometer", sign: "km" },
			{ title: "Centimeter", sign: "cm" },
			{ title: "Millimeter", sign: "mm" },
			{ title: "Nanometer", sign: "nm" },
			{ title: "Micrometer", sign: "mum" },
			{ title: "Mile", sign: "mil" },
			{ title: "Yard", sign: "yd" },
			{ title: "Foot", sign: "ft" },
			{ title: "Light Year", sign: "ly" },
			{ title: "Inch", sign: "in" },
		],
	},
	{
		id: "Area",
		name: "Area Converter",
		defaultU1: "sqm",
		defaultU2: "sqkm",
		selectOptions: [
			{ title: "Square Meter", sign: "sqm" },
			{ title: "Square Kilometer", sign: "sqkm" },
			{ title: "Square Centimeter", sign: "sqcm" },
			{ title: "Square Millimeter", sign: "sqmm" },
			{ title: "Square Micrometer", sign: "sqmum" },
			{ title: "Hectare", sign: "hect" },
			{ title: "Acre", sign: "acre" },
			{ title: "Square Mile", sign: "sqmil" },
			{ title: "Square Yard", sign: "sqyd" },
			{ title: "Square Foot", sign: "sqft" },
			{ title: "Square Inch", sign: "sqin" },
		],
	},
	{
		id: "Time",
		name: "Time Converter",
		defaultU1: "s",
		defaultU2: "ms",
		selectOptions: [
			{ title: "Second", sign: "s" },
			{ title: "Millisecond", sign: "ms" },
			{ title: "Microsecond", sign: "mus" },
			{ title: "Nanosecond", sign: "ns" },
			{ title: "Minute", sign: "min" },
			{ title: "Hour", sign: "hr" },
			{ title: "Day", sign: "day" },
			{ title: "Week", sign: "wk" },
			{ title: "Month", sign: "mnt" },
			{ title: "Year", sign: "yr" },
		],
	},
	{
		id: "Temperature",
		name: "Temperature Converter",
		defaultU1: "C",
		defaultU2: "F",
		selectOptions: [
			{ title: "Celcius", sign: "C" },
			{ title: "Farenheit", sign: "F" },
			{ title: "Kelvin", sign: "K" },
		],
	},
	{
		id: "Volume",
		name: "Volume Converter",
		defaultU1: "m3",
		defaultU2: "km3",
		selectOptions: [
			{ title: "Cubic Meter", sign: "m3" },
			{ title: "Cubic Kilometer", sign: "km3" },
			{ title: "Cubic Centimeter", sign: "cm3" },
			{ title: "Cubic Millimeter", sign: "mm3" },
			{ title: "Liter", sign: "lit" },
			{ title: "Milliliter", sign: "ml" },
			{ title: "Cubic Mile", sign: "mil3" },
			{ title: "Cubic Yard", sign: "yd3" },
			{ title: "Cubic Foot", sign: "ft3" },
			{ title: "Cubic Inch", sign: "in3" },
		],
	},
	{
		id: "Weight",
		name: "Weight Converter",
		defaultU1: "kg",
		defaultU2: "g",
		selectOptions: [
			{ title: "gram", sign: "g" },
			{ title: "Kilogram", sign: "kg" },
			{ title: "Milligram", sign: "mg" },
			{ title: "Metric Ton", sign: "ton" },
			{ title: "Pound", sign: "pnd" },
			{ title: "Ounce", sign: "ou" },
			{ title: "Carrat", sign: "crt" },
			{ title: "Atomic Mass Unit", sign: "amu" },
		],
	},
];

export const convertLength = (unit1, unit2, val1) => {
	if (unit1 === unit2) return val1;

	val1 = parseInt(val1);

	switch (unit1) {
		case "m":
			switch (unit2) {
				case "cm":
					return val1 * 100;
				case "km":
					return val1 / 1000;
				case "mm":
					return val1 * 1000;
				case "nm":
					return val1 * 1e9;
				case "mum":
					return val1 * 1e6;
				case "mil":
					return val1 / 1609;
				case "yd":
					return val1 * 1.094;
				case "ft":
					return val1 * 3.281;
				case "ly":
					return val1 * 1.057008707e-16;
				case "in":
					return val1 * 39.37007874;
			}
		case "cm":
			switch (unit2) {
				case "m":
					return val1 / 100;
				case "km":
					return val1 * 0.00001;
				case "mm":
					return val1 * 10;
				case "nm":
					return val1 * 1e7;
				case "mum":
					return val1 * 10000;
				case "mil":
					return val1 * 0.0000062137;
				case "yd":
					return val1 * 0.010936133;
				case "ft":
					return val1 * 0.032808399;
				case "ly":
					return val1 * 1.057008707e-18;
				case "in":
					return val1 * 0.3937007874;
			}
		case "mm":
			switch (unit2) {
				case "cm":
					return val1 * 0.1;
				case "km":
					return val1 * 0.000001;
				case "m":
					return val1 * 0.001;
				case "nm":
					return val1 * 1e6;
				case "mum":
					return val1 * 1000;
				case "mil":
					return val1 * 6.213688756e-7;
				case "yd":
					return val1 * 0.0010936133;
				case "ft":
					return val1 * 0.0032808399;
				case "ly":
					return val1 * 1.057008707e-19;
				case "in":
					return val1 * 0.0393700787;
			}
		case "nm":
			switch (unit2) {
				case "cm":
					return val1 * 1e-7;
				case "km":
					return val1 * 1e-12;
				case "mm":
					return val1 * 0.000001;
				case "m":
					return val1 * 1e-9;
				case "mum":
					return val1 * 0.001;
				case "mil":
					return val1 * 6.213688756e-13;
				case "yd":
					return val1 * 1.093613298e-9;
				case "ft":
					return val1 * 3.280839895e-9;
				case "ly":
					return val1 * 1.057008707e-25;
				case "in":
					return val1 * 3.937007874e-8;
			}
		case "km":
			switch (unit2) {
				case "cm":
					return val1 * 10000;
				case "m":
					return val1 * 1000;
				case "mm":
					return val1 * 1000000;
				case "nm":
					return val1 * 1e12;
				case "mum":
					return val1 * 1e9;
				case "mil":
					return val1 * 0.6213688756;
				case "yd":
					return val1 * 1093.6132983;
				case "ft":
					return val1 * 3280.839895;
				case "ly":
					return val1 * 1.057008707e-13;
				case "in":
					return val1 * 39370.07874;
			}
		case "in":
			switch (unit2) {
				case "cm":
					return val1 * 2.54;
				case "km":
					return val1 * 0.0000254;
				case "mm":
					return val1 * 25.4;
				case "nm":
					return val1 * 25400000;
				case "mum":
					return val1 * 25400;
				case "mil":
					return val1 * 0.0000157828;
				case "yd":
					return val1 * 0.0277777778;
				case "ft":
					return val1 * 0.0833333333;
				case "ly":
					return val1 * 2.684802117e-18;
				case "m":
					return val1 * 0.0254;
			}
		case "mum":
			switch (unit2) {
				case "cm":
					return val1 * 0.0001;
				case "km":
					return val1 * 9.999999999e-10;
				case "mm":
					return val1 * 0.001;
				case "nm":
					return val1 * 1000;
				case "m":
					return val1 * 0.000001;
				case "mil":
					return val1 * 6.213688756e-10;
				case "yd":
					return val1 * 0.0000010936;
				case "ft":
					return val1 * 0.0000032808;
				case "ly":
					return val1 * 1.057008707e-22;
				case "in":
					return val1 * 0.0000393701;
			}
		case "ft":
			switch (unit2) {
				case "cm":
					return val1 * 30.48;
				case "km":
					return val1 * 0.0003048;
				case "mm":
					return val1 * 304.8;
				case "nm":
					return val1 * 304800000;
				case "mum":
					return val1 * 304800;
				case "mil":
					return val1 * 0.0001893932;
				case "yd":
					return val1 * 0.3333333333;
				case "m":
					return val1 * 0.3048;
				case "ly":
					return val1 * 3.22176254e-17;
				case "in":
					return val1 * 12;
			}
		case "mil":
			switch (unit2) {
				case "cm":
					return val1 * 160935;
				case "km":
					return val1 * 1.60935;
				case "mm":
					return val1 * 1609350;
				case "nm":
					return val1 * 1609350000000;
				case "mum":
					return val1 * 1609350000;
				case "m":
					return val1 * 1609.35;
				case "yd":
					return val1 * 1760.0065617;
				case "ft":
					return val1 * 5280.019685;
				case "ly":
					return val1 * 1.701096963e-13;
				case "in":
					return val1 * 63360.23622;
			}
		case "yd":
			switch (unit2) {
				case "cm":
					return val1 * 91.44;
				case "km":
					return val1 * 0.0009144;
				case "mm":
					return val1 * 914.4;
				case "nm":
					return val1 * 914400000;
				case "mum":
					return val1 * 914400;
				case "mil":
					return val1 * 0.0005681797;
				case "m":
					return val1 * 0.9144;
				case "ft":
					return val1 * 3;
				case "ly":
					return val1 * 9.665287622e-17;
				case "in":
					return val1 * 36;
			}
		case "ly":
			switch (unit2) {
				case "cm":
					return val1 * 946066000000000000n;
				case "km":
					return val1 * 9460660000000;
				case "mm":
					return val1 * 9460660000000000000n;
				case "nm":
					return val1 * 9.460659999e24;
				case "mum":
					return val1 * 9.46066e21;
				case "mil":
					return val1 * 5878559666946;
				case "yd":
					return val1 * 10346303587051618n;
				case "ft":
					return val1 * 31038910761154856n;
				case "m":
					return val1 * 9460660000000000n;
				case "in":
					return val1 * 372466929133858300n;
			}
	}
};

export const convertVolume = (unit1, unit2, val1) => {
	if (unit1 === unit2) return val1;
	val1 = parseInt(val1);

	switch (unit1) {
		case "m3":
			switch (unit2) {
				case "cm3":
					return val1 * 1e6;
				case "km3":
					return val1 * 1e-9;
				case "mm3":
					return val1 * 1e9;
				case "lit":
					return val1 * 1000;
				case "ml":
					return val1 * 1e6;
				case "mil3":
					return val1 * 2.399128636e-10;
				case "yd3":
					return val1 * 1.3079506193;
				case "ft3":
					return val1 * 35.314666721;
				case "in3":
					return val1 * 61023.744095;
			}
		case "km3":
			switch (unit2) {
				case "cm3":
					return val1 * 1e15;
				case "m3":
					return val1 * 1e9;
				case "mm3":
					return val1 * 1e18;
				case "lit":
					return val1 * 1e12;
				case "ml":
					return val1 * 1e15;
				case "mil3":
					return val1 * 0.2399128636;
				case "yd3":
					return val1 * 1307950619.3;
				case "ft3":
					return val1 * 35314666721;
				case "in3":
					return val1 * 61023744094732;
			}
		case "cm3":
		case "ml":
			switch (unit2) {
				case "km3":
					return val1 * 9.999999999e-16;
				case "m3":
					return val1 * 0.000001;
				case "mm3":
					return val1 * 1000;
				case "lit":
					return val1 * 0.001;
				case "ml":
					return val1 * 1;
				case "mil3":
					return val1 * 2.399128636e-16;
				case "yd3":
					return val1 * 0.000001308;
				case "ft3":
					return val1 * 0.0000353147;
				case "in3":
					return val1 * 0.0610237441;
			}
		case "mm3":
			switch (unit2) {
				case "km3":
					return val1 * 1e-18;
				case "m3":
					return val1 * 1e-9;
				case "cm3":
					return val1 * 0.001;
				case "lit":
					return val1 * 0.000001;
				case "ml":
					return val1 * 0.001;
				case "mil3":
					return val1 * 2.399128636e-19;
				case "yd3":
					return val1 * 1.307950619e-9;
				case "ft3":
					return val1 * 3.531466672e-8;
				case "in3":
					return val1 * 0.0000610237;
			}
		case "lit":
			switch (unit2) {
				case "km3":
					return val1 * 1e-12;
				case "m3":
					return val1 * 0.001;
				case "cm3":
					return val1 * 1000;
				case "mm3":
					return val1 * 1000000;
				case "ml":
					return val1 * 1000;
				case "mil3":
					return val1 * 2.399128636e-13;
				case "yd3":
					return val1 * 0.0013079506;
				case "ft3":
					return val1 * 0.0353146667;
				case "in3":
					return val1 * 61.023744095;
			}
		case "mil3":
			switch (unit2) {
				case "km3":
					return val1 * 4.16818;
				case "m3":
					return val1 * 4168180000;
				case "cm3":
					return val1 * 4168180000000000;
				case "mm3":
					return val1 * 4168179999999999500n;
				case "ml":
					return val1 * 4168180000000000;
				case "lit":
					return val1 * 4168180000000;
				case "yd3":
					return val1 * 5451773612.4;
				case "ft3":
					return val1 * 147197887535;
				case "in3":
					return val1 * 254357949660781;
			}
		case "yd3":
			switch (unit2) {
				case "km3":
					return val1 * 7.645548579e-10;
				case "m3":
					return val1 * 0.764554858;
				case "cm3":
					return val1 * 764554.85798;
				case "mm3":
					return val1 * 764554857.98;
				case "ml":
					return val1 * 764554.85798;
				case "lit":
					return val1 * 764.55485798;
				case "mil3":
					return val1 * 1.834265453e-10;
				case "ft3":
					return val1 * 27;
				case "in3":
					return val1 * 46656;
			}
		case "ft3":
			switch (unit2) {
				case "km3":
					return val1 * 2.831684659e-11;
				case "m3":
					return val1 * 0.0283168466;
				case "cm3":
					return val1 * 28316.846592;
				case "mm3":
					return val1 * 28316846.592;
				case "ml":
					return val1 * 28316.846592;
				case "lit":
					return val1 * 28.316846592;
				case "mil3":
					return val1 * 6.793575755e-12;
				case "yd3":
					return val1 * 0.037037037;
				case "in3":
					return val1 * 1728;
			}
		case "in3":
			switch (unit2) {
				case "km3":
					return val1 * 1.6387064e-14;
				case "m3":
					return val1 * 0.0000163871;
				case "cm3":
					return val1 * 16.387064;
				case "mm3":
					return val1 * 16387.064;
				case "ml":
					return val1 * 16.387064;
				case "lit":
					return val1 * 0.016387064;
				case "mil3":
					return val1 * 3.931467451e-15;
				case "yd3":
					return val1 * 0.0000214335;
				case "ft3":
					return val1 * 0.0005787037;
			}
	}
};

export const convertArea = (unit1, unit2, val1) => {
	if (unit1 === unit2) return val1;
	val1 = parseInt(val1);

	switch (unit1) {
		case "sqm":
			switch (unit2) {
				case "sqkm":
					return val1 * 0.000001;
				case "sqcm":
					return val1 * 10000;
				case "sqmm":
					return val1 * 1000000;
				case "sqmum":
					return val1 * 1000000000000;
				case "hect":
					return val1 * 0.0001;
				case "acre":
					return val1 * 0.0002471054;
				case "sqmil":
					return val1 * 3.861018768e-7;
				case "sqyd":
					return val1 * 1.1959900463;
				case "sqft":
					return val1 * 10.763910417;
				case "sqin":
					return val1 * 1550.0031;
			}
		case "sqcm":
			switch (unit2) {
				case "sqkm":
					return val1 * 1e-10;
				case "sqm":
					return val1 * 0.0001;
				case "sqmm":
					return val1 * 100;
				case "sqmum":
					return val1 * 100000000;
				case "hect":
					return val1 * 1e-8;
				case "acre":
					return val1 * 2.471053814e-8;
				case "sqmil":
					return val1 * 3.861018768e-11;
				case "sqyd":
					return val1 * 0.000119599;
				case "sqft":
					return val1 * 0.001076391;
				case "sqin":
					return val1 * 0.15500031;
			}
		case "sqkm":
			switch (unit2) {
				case "sqm":
					return val1 * 1000000;
				case "sqcm":
					return val1 * 10000000000;
				case "sqmm":
					return val1 * 1000000000000;
				case "sqmum":
					return val1 * 1e18;
				case "hect":
					return val1 * 100;
				case "acre":
					return val1 * 247.10538147;
				case "sqmil":
					return val1 * 0.3861018768;
				case "sqyd":
					return val1 * 1195990.0463;
				case "sqft":
					return val1 * 110763910.417;
				case "sqin":
					return val1 * 10763910.417;
			}
		case "sqmm":
			switch (unit2) {
				case "sqkm":
					return val1 * 1e-12;
				case "sqcm":
					return val1 * 0.01;
				case "sqm":
					return val1 * 0.000001;
				case "sqmum":
					return val1 * 1000000;
				case "hect":
					return val1 * 9.999999999e-11;
				case "acre":
					return val1 * 2.471053814e-10;
				case "sqmil":
					return val1 * 3.861018768e-13;
				case "sqyd":
					return val1 * 0.000001196;
				case "sqft":
					return val1 * 0.0000107639;
				case "sqin":
					return val1 * 0.0015500031;
			}
		case "sqmum":
			switch (unit2) {
				case "sqkm":
					return val1 * 1e-18;
				case "sqcm":
					return val1 * 9.999999999e-9;
				case "sqmm":
					return val1 * 0.000001;
				case "sqm":
					return val1 * 1e-12;
				case "hect":
					return val1 * 1e-16;
				case "acre":
					return val1 * 2.471053814e-16;
				case "sqmil":
					return val1 * 3.861018768e-19;
				case "sqyd":
					return val1 * 1.195990046e-12;
				case "sqft":
					return val1 * 1.076391041e-11;
				case "sqin":
					return val1 * 1.5500031e-9;
			}
		case "hect":
			switch (unit2) {
				case "sqkm":
					return val1 * 0.01;
				case "sqcm":
					return val1 * 100000000;
				case "sqmm":
					return val1 * 10000000000;
				case "sqmum":
					return val1 * 1e16;
				case "sqm":
					return val1 * 10000;
				case "acre":
					return val1 * 2.4710538147;
				case "sqmil":
					return val1 * 0.0038610188;
				case "sqyd":
					return val1 * 11959.900463;
				case "sqft":
					return val1 * 107639.10417;
				case "sqin":
					return val1 * 15500031;
			}
		case "acre":
			switch (unit2) {
				case "sqkm":
					return val1 * 0.0040468564;
				case "sqcm":
					return val1 * 0.0040468564;
				case "sqmm":
					return val1 * 4046856422.4;
				case "sqmum":
					return val1 * 4046856422400000;
				case "hect":
					return val1 * 0.4046856422;
				case "sqm":
					return val1 * 4046.8564224;
				case "sqmil":
					return val1 * 0.0015624989;
				case "sqyd":
					return val1 * 4840;
				case "sqft":
					return val1 * 43560;
				case "sqin":
					return val1 * 6272640;
			}
		case "sqmil":
			switch (unit2) {
				case "sqkm":
					return val1 * 2.58999;
				case "sqcm":
					return val1 * 25899900000;
				case "sqmm":
					return val1 * 2589990000000;
				case "sqmum":
					return val1 * 258999 * 1e13;
				case "hect":
					return val1 * 258.999;
				case "acre":
					return val1 * 640.00046695;
				case "sqm":
					return val1 * 2589990;
				case "sqyd":
					return val1 * 3097602.26;
				case "sqft":
					return val1 * 27878420.34;
				case "sqin":
					return val1 * 4014492529;
			}
		case "sqyd":
			switch (unit2) {
				case "sqkm":
					return val1 * 8.3612736e-7;
				case "sqcm":
					return val1 * 8361.2736;
				case "sqmm":
					return val1 * 836127.36;
				case "sqmum":
					return val1 * 836127360000;
				case "hect":
					return val1 * 0.0000836127;
				case "acre":
					return val1 * 0.0002066116;
				case "sqmil":
					return val1 * 3.228303429e-7;
				case "sqm":
					return val1 * 0.83612736;
				case "sqft":
					return val1 * 9;
				case "sqin":
					return val1 * 1296;
			}
		case "sqft":
			switch (unit2) {
				case "sqkm":
					return val1 * 9.290304e-8;
				case "sqcm":
					return val1 * 929.0304;
				case "sqmm":
					return val1 * 92903.04;
				case "sqmum":
					return val1 * 92903040000;
				case "hect":
					return val1 * 0.0000092903;
				case "acre":
					return val1 * 0.0000229568;
				case "sqmil":
					return val1 * 3.58700381e-8;
				case "sqyd":
					return val1 * 0.1111111111;
				case "sqm":
					return val1 * 0.09290304;
				case "sqin":
					return val1 * 144;
			}
		case "sqin":
			switch (unit2) {
				case "sqkm":
					return val1 * 6.4516e-10;
				case "sqcm":
					return val1 * 6.4516;
				case "sqmm":
					return val1 * 645.16;
				case "sqmum":
					return val1 * 645160000;
				case "hect":
					return val1 * 6.4516e-8;
				case "acre":
					return val1 * 1.594225079e-7;
				case "sqmil":
					return val1 * 2.490974868e-10;
				case "sqyd":
					return val1 * 0.0007716049;
				case "sqft":
					return val1 * 0.0007716049;
				case "sqm":
					return val1 * 0.00064516;
			}
	}
};

export const convertTime = (unit1, unit2, val1) => {
	if (unit1 === unit2) return val1;

	val1 = parseInt(val1);

	switch (unit1) {
		case "s":
			switch (unit2) {
				case "ms":
					return val1 * 1000;
				case "mus":
					return val1 * 1e6;
				case "ns":
					return val1 * 1e9;
				case "min":
					return val1 * 0.0166666667;
				case "hr":
					return val1 * 0.0002777778;
				case "day":
					return val1 * 0.0000115741;
				case "wk":
					return val1 * 0.0000016534;
				case "mnt":
					return val1 * 3.802570537e-7;
				case "yr":
					return val1 * 3.168808781e-8;
			}
		case "ms":
			switch (unit2) {
				case "s":
					return val1 * 0.001;
				case "mus":
					return val1 * 1000;
				case "ns":
					return val1 * 1e6;
				case "min":
					return val1 * 0.0000166667;
				case "hr":
					return val1 * 2.777777777e-7;
				case "day":
					return val1 * 1.157407407e-8;
				case "wk":
					return val1 * 1.653439153e-9;
				case "mnt":
					return val1 * 3.802570537e-10;
				case "yr":
					return val1 * 3.168808781e-11;
			}
		case "mus":
			switch (unit2) {
				case "ms":
					return val1 * 0.001;
				case "s":
					return val1 * 0.000001;
				case "ns":
					return val1 * 1000;
				case "min":
					return val1 * 1.666666666e-8;
				case "hr":
					return val1 * 2.777777777e-10;
				case "day":
					return val1 * 1.157407407e-11;
				case "wk":
					return val1 * 1.653439153e-12;
				case "mnt":
					return val1 * 3.802570537e-13;
				case "yr":
					return val1 * 3.168808781e-14;
			}
		case "ns":
			switch (unit2) {
				case "ms":
					return val1 * 0.000001;
				case "mus":
					return val1 * 0.001;
				case "s":
					return val1 * 1e-9;
				case "min":
					return val1 * 1.666666666e-11;
				case "hr":
					return val1 * 2.777777777e-13;
				case "day":
					return val1 * 1.157407407e-14;
				case "wk":
					return val1 * 1.653439153e-15;
				case "mnt":
					return val1 * 3.802570537e-16;
				case "yr":
					return val1 * 3.168808781e-17;
			}
		case "min":
			switch (unit2) {
				case "ms":
					return val1 * 60000;
				case "mus":
					return val1 * 60000000;
				case "ns":
					return val1 * 60000000000;
				case "s":
					return val1 * 60;
				case "hr":
					return val1 * 0.0166666667;
				case "day":
					return val1 * 0.0006944444;
				case "wk":
					return val1 * 0.0000992063;
				case "mnt":
					return val1 * 0.0000228154;
				case "yr":
					return val1 * 0.0000019013;
			}
		case "hr":
			switch (unit2) {
				case "ms":
					return val1 * 3600000;
				case "mus":
					return val1 * 3600000000;
				case "ns":
					return val1 * 3600000000000;
				case "min":
					return val1 * 60;
				case "s":
					return val1 * 3600;
				case "day":
					return val1 * 0.0416666667;
				case "wk":
					return val1 * 0.005952381;
				case "mnt":
					return val1 * 0.0013689254;
				case "yr":
					return val1 * 0.0001140771;
			}
		case "day":
			switch (unit2) {
				case "ms":
					return val1 * 86400000;
				case "mus":
					return val1 * 86400000000;
				case "ns":
					return val1 * 86400000000000;
				case "min":
					return val1 * 1440;
				case "hr":
					return val1 * 24;
				case "s":
					return val1 * 86400;
				case "wk":
					return val1 * 0.1428571429;
				case "mnt":
					return val1 * 0.0328542094;
				case "yr":
					return val1 * 0.0027378508;
			}
		case "wk":
			switch (unit2) {
				case "ms":
					return val1 * 604800000;
				case "mus":
					return val1 * 604800000000;
				case "ns":
					return val1 * 604800000000000;
				case "min":
					return val1 * 10080;
				case "hr":
					return val1 * 168;
				case "day":
					return val1 * 7;
				case "s":
					return val1 * 604800;
				case "mnt":
					return val1 * 0.2299794661;
				case "yr":
					return val1 * 0.0191649555;
			}
		case "mnt":
			switch (unit2) {
				case "ms":
					return val1 * 2629800000;
				case "mus":
					return val1 * 2629800000000;
				case "ns":
					return val1 * 2629800000000000;
				case "min":
					return val1 * 43830;
				case "hr":
					return val1 * 730.5;
				case "day":
					return val1 * 30.4375;
				case "wk":
					return val1 * 4.3482142857;
				case "s":
					return val1 * 2629800;
				case "yr":
					return val1 * 0.0833333333;
			}
		case "yr":
			switch (unit2) {
				case "ms":
					return val1 * 31557600000;
				case "mus":
					return val1 * 31557600000000;
				case "ns":
					return val1 * 31557600000000000n;
				case "min":
					return val1 * 525960;
				case "hr":
					return val1 * 8766;
				case "day":
					return val1 * 365.25;
				case "wk":
					return val1 * 52.178571429;
				case "mnt":
					return val1 * 12;
				case "s":
					return val1 * 31557600;
			}
	}
};

export const convertWeight = (unit1, unit2, val1) => {
	if (unit1 === unit2) return val1;

	val1 = parseInt(val1);

	switch (unit1) {
		case "g":
			switch (unit2) {
				case "kg":
					return val1 * 0.001;
				case "mg":
					return val1 * 1000;
				case "ton":
					return val1 * 0.000001;
				case "pnd":
					return val1 * 0.0022046244;
				case "ou":
					return val1 * 0.0352739907;
				case "crt":
					return val1 * 5;
				case "amu":
					return val1 * 6.022136652e23;
			}
		case "kg":
			switch (unit2) {
				case "g":
					return val1 * 1000;
				case "mg":
					return val1 * 1000000;
				case "ton":
					return val1 * 0.001;
				case "pnd":
					return val1 * 2.2046244202;
				case "ou":
					return val1 * 35.273990723;
				case "crt":
					return val1 * 5000;
				case "amu":
					return val1 * 6.022136652e26;
			}
		case "mg":
			switch (unit2) {
				case "kg":
					return val1 * 0.000001;
				case "g":
					return val1 * 0.001;
				case "ton":
					return val1 * 9.999999999e-10;
				case "pnd":
					return val1 * 0.0000022046;
				case "ou":
					return val1 * 0.000035274;
				case "crt":
					return val1 * 0.005;
				case "amu":
					return val1 * 602213665200000000000n;
			}
		case "ton":
			switch (unit2) {
				case "kg":
					return val1 * 1000;
				case "mg":
					return val1 * 1000000000;
				case "g":
					return val1 * 1000000;
				case "pnd":
					return val1 * 2204.6244202;
				case "ou":
					return val1 * 35273.990723;
				case "crt":
					return val1 * 5000000;
				case "amu":
					return val1 * 6.022136652e29;
			}
		case "pnd":
			switch (unit2) {
				case "kg":
					return val1 * 0.453592;
				case "mg":
					return val1 * 453592;
				case "ton":
					return val1 * 0.000453592;
				case "g":
					return val1 * 453.592;
				case "ou":
					return val1 * 16;
				case "crt":
					return val1 * 2267.96;
				case "amu":
					return val1 * 2.731593008e26;
			}
		case "ou":
			switch (unit2) {
				case "kg":
					return val1 * 0.0283495;
				case "mg":
					return val1 * 28349.5;
				case "ton":
					return val1 * 0.0000283495;
				case "pnd":
					return val1 * 0.0625;
				case "g":
					return val1 * 28.3495;
				case "crt":
					return val1 * 141.7475;
				case "amu":
					return val1 * 1.70724563e25;
			}
		case "crt":
			switch (unit2) {
				case "kg":
					return val1 * 0.0002;
				case "mg":
					return val1 * 200;
				case "ton":
					return val1 * 2e-7;
				case "pnd":
					return val1 * 0.0004409249;
				case "ou":
					return val1 * 0.0070547981;
				case "g":
					return val1 * 0.2;
				case "amu":
					return val1 * 1.20442733e23;
			}
		case "amu":
			switch (unit2) {
				case "kg":
					return val1 * 1.660540199e-27;
				case "mg":
					return val1 * 1.660540199e-21;
				case "ton":
					return val1 * 1.660540199e-30;
				case "pnd":
					return val1 * 3.660867475e-27;
				case "ou":
					return val1 * 5.85738796e-26;
				case "crt":
					return val1 * 8.302700999e-24;
				case "g":
					return val1 * 1.660540199e-24;
			}
	}
};

export const convertTemp = (unit1, unit2, val1) => {
	if (unit1 === unit2) return val1;

	val1 = parseInt(val1);

	switch (unit1) {
		case "C":
			switch (unit2) {
				case "F":
					return val1 * 33.8;
				case "K":
					return val1 * 274.15;
			}
		case "F":
			switch (unit2) {
				case "C":
					return val1 * -17.222222222;
				case "K":
					return val1 * 255.92777778;
			}
		case "K":
			switch (unit2) {
				case "F":
					return val1 * -457.87;
				case "C":
					return val1 * -272.15;
			}
	}
};

export const converterMain = (conv, u1, u2, val) => {
	let temp;
	switch (conv) {
		case "Length":
			temp = convertLength(u1, u2, val);
			break;
		case "Area":
			temp = convertArea(u1, u2, val);
			break;
		case "Volume":
			temp = convertVolume(u1, u2, val);
			break;
		case "Time":
			temp = convertTime(u1, u2, val);
			break;
		case "Weight":
			temp = convertWeight(u1, u2, val);
			break;
		case "Temperature":
			temp = convertTemp(u1, u2, val);
			break;
	}

	return temp;
};
