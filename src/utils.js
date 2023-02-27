export function toggleOverflow() {
    const html = document.querySelector('html');

    const { overflow: currentOverflow } = html.style;

    html.style.overflow = currentOverflow === 'hidden' ? 'auto' : 'hidden';
}