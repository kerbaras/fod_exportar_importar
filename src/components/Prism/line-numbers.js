import Prism from 'prismjs'

const config = {
	validatorClass: 'line-numbers',
	linesClass: 'lines'
}

const valid = (node) => (node) && (node.nodeName === "PRE") & (node.classList.contains(config.validatorClass))

const length = (arr) => arr ? arr.length : 0

const lineCount = (string) => length(string.match(/\n/gi)) + 1

const plugin = (env) => {

    if (!env.code) {
        return
	}

	const pre = env.element.parentNode;

	if (!valid(pre)){
        return
    }


	if (pre.querySelector(`.${config.linesClass}`)) {
		return
	}

	let lineNumbersWrapper = document.createElement('ul')
	pre.appendChild(lineNumbersWrapper)
	lineNumbersWrapper.className = config.linesClass

	env.element.classList.remove(config.validatorClass)

	let count = lineCount(env.code)

	let lines = new Array(count + 1);
	lines = lines.join('<li></li>');

	lineNumbersWrapper.innerHTML = lines

	if (pre.hasAttribute('start')) {
		pre.style.counterReset = 'linenumber ' + (parseInt(pre.getAttribute('start'), 10) - 1)
	}

}

Prism.hooks.add('complete', plugin)