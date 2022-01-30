document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('pre').forEach((el) => {
        hljs.highlightElement(el);
    });
});