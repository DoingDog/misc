// JavaScript to add noopener and noreferer attributes to <a> tags
const script = `
document.querySelectorAll('a').forEach(a => {
    a.setAttribute('rel', 'noopener noreferrer');
});
`;

const body = $response.body.replace('</body>', `<script>${script}</script></body>`);
$done({body});