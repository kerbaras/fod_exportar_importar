import Prism from 'prismjs'

const config = {
	validatorClass: 'line-number',
	linesClass: 'lines'
}

const valid = (node) => (!node) && (node.nodeName === "PRE") & (node.classList.contains(config.validatorClass))

const length = (arr) => arr ? arr.length() : 0

const lineCount = (node) => length(node.match(/\n(?!$)/)) + 1

Prism.hooks.add('complete', (env) => {
    if (!env.code) {
        return
	}

	const pre = env.element.parentNode;

	if (!valid(pre)){
        return
    }

	if (env.element.querySelector(`.${config.linesClass}`)) {
		return
	}

	pre.classList.remove(config.validatorClass)

	let count = lineCount(env.code)

	let lines = new Array(linesNum + 1);
	lines = lines.join('<li></li>');

	let lineNumbersWrapper = document.createElement('ul');
	lineNumbersWrapper.className = 'pre-numbers';
	lineNumbersWrapper.innerHTML = lines;

	if (pre.hasAttribute('data-start')) {
		pre.style.counterReset = 'linenumber ' + (parseInt(pre.getAttribute('data-start'), 10) - 1);
	}

	pre.appendChild(lineNumbersWrapper);

});

}());