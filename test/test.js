const maxChar = (str) => {
	const charArray = str.split('')
	const tracker = charArray.reduce((obj, key) => {
		obj[key] = obj[key] + 1 || 1
		return obj
	}, {} )
	const maxKey = Object.keys(tracker).reduce((max, val) => tracker[max] > tracker[val] ? max : val, '')
	return `${maxKey}:${tracker[maxKey]}`
}

console.log(maxChar('hello world'))