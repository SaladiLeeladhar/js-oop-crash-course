//const s1 = 'Hello';
//console.log(typeof s1);

//const s2 = new String('Hello');
//console.log(typeof s2);

//console.log(window);
//alert(1);
//console.log(navigator.appVersion);


const book1={
	title: 'book one',
	author: 'john doe',
	year:'1999',
	getSummary: function() {
		return  `${this.title} was written by ${this.author} in ${this.year}`;
	}
};
console.log(book1.getSummary());