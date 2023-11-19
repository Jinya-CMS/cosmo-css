import hljs from 'highlight.js/lib/core';
import css from 'highlight.js/lib/languages/css';
import js from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';

hljs.registerLanguage('javascript', js);
hljs.registerLanguage('css', css);
hljs.registerLanguage('xml', xml);

document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('pre').forEach((el) => {
		hljs.highlightElement(el);
	});
});
