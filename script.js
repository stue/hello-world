function smoothScrollTo(target) {
  document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const href = link.getAttribute('href');
  if (href && href.length > 1) {
    e.preventDefault();
    smoothScrollTo(href);
  }
});

function handleInquiry(event){
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const subject = encodeURIComponent('Svefneyjar Inquiry');
  const lines = [
    `Name: ${data.get('name')}`,
    `Email: ${data.get('email')}`,
    `Company: ${data.get('company') || ''}`,
    `Dates: ${data.get('dates') || ''}`,
    `Program: ${data.get('program')}`,
    `Mode: ${data.get('mode')}`,
    '',
    `Notes:`,
    `${data.get('notes') || ''}`
  ];
  const body = encodeURIComponent(lines.join('\n'));
  window.location.href = `mailto:hello@svefneyjar.is?subject=${subject}&body=${body}`;
  form.reset();
  alert('Thanks — we\'ll be in touch shortly.');
  return false;
}

function handleNewsletter(event){
  event.preventDefault();
  const email = new FormData(event.target).get('email');
  const subject = encodeURIComponent('Newsletter Signup');
  const body = encodeURIComponent(`Please add ${email} to the Svefneyjar newsletter.`);
  window.location.href = `mailto:hello@svefneyjar.is?subject=${subject}&body=${body}`;
  event.target.reset();
  alert('Subscribed — check your inbox.');
  return false;
}
