const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menu?.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');

    document.body.classList.toggle('menu-open', isOpen);
    menu.setAttribute('aria-expanded', isOpen);
});
document.querySelectorAll('.filter-btn').forEach(b => b.addEventListener('click', () => { const s = b.closest('section'), f = b.dataset.filter; s.querySelectorAll('.filter-btn').forEach(x => x.classList.remove('active')); b.classList.add('active'); s.querySelectorAll('[data-category]').forEach(x => x.style.display = f === 'all' || x.dataset.category === f ? '' : 'none') }));
document.querySelectorAll('.gallery-item').forEach(x => x.addEventListener('click', () => { const l = document.querySelector('.lightbox'); l.classList.add('open'); l.querySelector('img').src = x.dataset.full })); document.querySelector('.lightbox-close')?.addEventListener('click', () => document.querySelector('.lightbox').classList.remove('open'));
document.querySelectorAll('form[action="/api/enquiry"]').forEach(f => f.addEventListener('submit', async e => { e.preventDefault(); const b = f.querySelector('button'); try { await fetch(f.action, { method: 'POST', body: new FormData(f) }); f.reset(); b.textContent = 'Sent ✓' } catch { b.textContent = 'Try again' } }));
