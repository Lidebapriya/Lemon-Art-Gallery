// LOAD ARTWORKS fetch('http://localhost:3000/artworks') .then(res => res.json()) .then(artworks => { const gallery = document.getElementById('gallery'); artworks.forEach(art => { const div = document.createElement('div'); div.className = 'card'; div.innerHTML =  <img src="${art.image}" /> <div class="info"> <h3>${art.title}</h3> <p>${art.artist}</p> <p>₹${art.price}</p> <button>Add to Cart</button> </div>; gallery.appendChild(div); }); });

// ❄️ SNOW EFFECT const canvas = document.getElementById('snow'); const ctx = canvas.getContext('2d'); let w = canvas.width = window.innerWidth; let h = canvas.height = window.innerHeight;

let flakes = Array.from({ length: 120 }, () => ({ x: Math.random() * w, y: Math.random() * h, r: Math.random() * 3 + 1, d: Math.random() + 1 }));

function snow() { ctx.clearRect(0,0,w,h); ctx.fillStyle = 'rgba(255,255,255,0.8)'; ctx.beginPath(); flakes.forEach(f => { ctx.moveTo(f.x, f.y); ctx.arc(f.x, f.y, f.r, 0, Math.PI*2); }); ctx.fill();

flakes.forEach(f => { f.y += Math.pow(f.d,2); if (f.y > h) f.y = 0; }); requestAnimationFrame(snow); }

snow();
