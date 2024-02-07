const rootElement = document.querySelector("#root")

rootElement.insertAdjacentHTML("beforeend", `
<div class"nyt">
<h1>New York Times Bestsellers</h1>

`)

books.forEach((book, index) => rootElement.insertAdjacentHTML("beforeend", `
	<div class="book">
        <div class="sub">${book.sub.toUpperCase()}</div>
		<div class="title">${book.title} </div>
		<div class="text">${book.text}</div>
		<div class="number">${index + 1} </div>
        <button class="button">read more</button>
	</div>
`))