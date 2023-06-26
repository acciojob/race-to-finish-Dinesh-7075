window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
let a = new Promise(resolve => {
	setTimeout(() => {
		resolve("a");
	}, 2000)
});

let b = new Promise(resolve => {
	setTimeout(() => {
		resolve("b");
	}, 4000)
});

let c = new Promise(resolve => {
	setTimeout(() => {
		resolve("c");
	}, 3000)
});

let d = new Promise(resolve => {
	setTimeout(() => {
		resolve("d");
	}, 5000)
});

let e = new Promise(resolve => {
	setTimeout(() => {
		resolve("e");
	}, 1000)
});

let y = Promise.any([a,b,c,d,e]);
window.promises = [a,b,c,d,e];
y.then(data => {
	let element = document.getElementById("output");
	element.innerText = data;
})

