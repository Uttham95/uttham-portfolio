const command = document.getElementById('typed-command');
const output = document.getElementById('whoami-output');
const commandText = 'whoami';
const identities = [
  'Uttham Kalemeghan',
  'Cybersecurity Test Engineer',
  'VAPT Engineer',
  'Product Security Engineer',
  'Security Researcher',
  'Red Team Practitioner'
];

let commandIndex = 0;
function typeCommand() {
  if (!command) return;
  if (commandIndex <= commandText.length) {
    command.textContent = commandText.slice(0, commandIndex++);
    window.setTimeout(typeCommand, 95);
  } else {
    startIdentityCycle();
  }
}

let identityIndex = 0;
function startIdentityCycle() {
  if (!output || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  window.setInterval(() => {
    output.classList.add('changing');
    window.setTimeout(() => {
      identityIndex = (identityIndex + 1) % identities.length;
      output.textContent = identities[identityIndex];
      output.classList.remove('changing');
    }, 200);
  }, 2400);
}

window.setTimeout(typeCommand, 450);

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
toggle?.addEventListener('click', () => nav?.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => nav?.classList.remove('open'));
});
