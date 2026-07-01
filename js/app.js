
const money = value => `USD ${Number(value).toLocaleString("en-US")}`;

function getCart(){
  return JSON.parse(localStorage.getItem("demoCart") || "[]");
}
function setCart(cart){
  localStorage.setItem("demoCart", JSON.stringify(cart));
  updateCartCount();
}
function updateCartCount(){
  const count = getCart().reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll("[data-cart-count]").forEach(el => el.textContent = count);
}
function showToast(message){
  let toast = document.querySelector(".toast");
  if(!toast){
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}
function addToCart(id, qty = 1){
  const product = PRODUCTS.find(p => p.id === id);
  if(!product) return;
  const cart = getCart();
  const existing = cart.find(item => item.id === id);
  if(existing) existing.qty += qty;
  else cart.push({ id, qty });
  setCart(cart);
  showToast(`${product.name} agregado al carrito`);
}
function removeFromCart(id){
  setCart(getCart().filter(item => item.id !== id));
  renderCartPage();
}
function changeQty(id, delta){
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0) {
    setCart(cart.filter(i => i.id !== id));
  } else {
    setCart(cart);
  }
  renderCartPage();
}
function productCard(product){
  return `
    <article class="card">
      <a class="card-img" href="producto.html?id=${product.id}">
        <img src="${product.imageUrl || `images/${product.id}.svg`}" alt="${product.name}">
      </a>
      <div class="card-body">
        <div class="meta"><span>${product.category}</span><span>${product.stock}</span></div>
        <h3><a href="producto.html?id=${product.id}">${product.name}</a></h3>
        <p style="color:var(--muted);line-height:1.45;margin:0">${product.description}</p>
        <div><span class="card-price">${money(product.price)}</span><span class="old">${money(product.oldPrice)}</span></div>
        <div class="card-actions">
          <a class="btn btn-secondary btn-small" href="producto.html?id=${product.id}">Ver detalle</a>
          <button class="btn btn-primary btn-small" onclick="addToCart('${product.id}')">Agregar</button>
        </div>
      </div>
    </article>
  `;
}
function renderProducts(targetId, products = PRODUCTS){
  const target = document.getElementById(targetId);
  if(target) target.innerHTML = products.map(productCard).join("");
}
function setupFilters(){
  const container = document.querySelector("[data-filters]");
  const gridId = container?.dataset.target;
  if(!container || !gridId) return;
  const categories = ["Todos", ...new Set(PRODUCTS.map(p => p.category))];
  container.innerHTML = categories.map((cat, index) => `<button class="filter-btn ${index === 0 ? "active" : ""}" data-category="${cat}">${cat}</button>`).join("");
  container.addEventListener("click", e => {
    const btn = e.target.closest("button");
    if(!btn) return;
    container.querySelectorAll("button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const category = btn.dataset.category;
    renderProducts(gridId, category === "Todos" ? PRODUCTS : PRODUCTS.filter(p => p.category === category));
  });
}
function renderProductPage(){
  const root = document.getElementById("product-detail");
  if(!root) return;
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || PRODUCTS[0].id;
  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
  document.title = `${product.name} | Bike & Fit Store`;
  root.innerHTML = `
    <div class="product-layout">
      <div class="product-image">
        <img src="${product.imageUrl || `images/${product.id}.svg`}" alt="${product.name}">
      </div>
      <div class="product-info">
        <span class="badge">${product.category} · ${product.stock}</span>
        <h1>${product.name}</h1>
        <p style="color:var(--muted);font-size:18px;line-height:1.6">${product.description}</p>
        <div><span class="price">${money(product.price)}</span><span class="old">${money(product.oldPrice)}</span></div>
        <div class="detail-list">
          ${product.details.map(d => `<div>✓ ${d}</div>`).join("")}
        </div>
        <p><strong>SKU:</strong> ${product.sku}</p>
        <div class="qty-row">
          <label for="qty">Cantidad</label>
          <input id="qty" type="number" min="1" value="1">
          <button class="btn btn-primary" onclick="addToCart('${product.id}', Number(document.getElementById('qty').value || 1))">Agregar al carrito</button>
        </div>
        <a class="btn btn-secondary" href="catalogo.html">← Volver al catálogo</a>
      </div>
    </div>
  `;
}
function renderCartPage(){
  const list = document.getElementById("cart-list");
  const summary = document.getElementById("cart-summary");
  if(!list || !summary) return;
  const cart = getCart();
  if(cart.length === 0){
    list.innerHTML = `<p style="color:var(--muted);margin:0">Tu carrito está vacío.</p><p><a class="btn btn-primary" href="catalogo.html">Ver productos</a></p>`;
    summary.innerHTML = summaryHtml(0);
    return;
  }
  let subtotal = 0;
  list.innerHTML = cart.map(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    if(!product) return "";
    subtotal += product.price * item.qty;
    return `
      <div class="cart-item">
        <img src="${product.imageUrl || `images/${product.id}.svg`}" alt="${product.name}">
        <div>
          <h3>${product.name}</h3>
          <div style="color:var(--muted);font-weight:700">${money(product.price)} · ${product.sku}</div>
        </div>
        <div class="cart-controls">
          <button class="icon-btn" onclick="changeQty('${product.id}', -1)">−</button>
          <strong>${item.qty}</strong>
          <button class="icon-btn" onclick="changeQty('${product.id}', 1)">+</button>
          <button class="icon-btn" onclick="removeFromCart('${product.id}')">×</button>
        </div>
      </div>
    `;
  }).join("");
  summary.innerHTML = summaryHtml(subtotal);
}
function summaryHtml(subtotal){
  const shipping = subtotal > 0 ? 8 : 0;
  const total = subtotal + shipping;
  return `
    <div class="summary-row"><span>Subtotal</span><strong>${money(subtotal)}</strong></div>
    <div class="summary-row"><span>Envío estimado</span><strong>${money(shipping)}</strong></div>
    <div class="summary-row total"><span>Total</span><strong>${money(total)}</strong></div>
    <a class="btn btn-primary" style="width:100%;justify-content:center;margin-top:14px" href="checkout.html">Continuar al checkout</a>
  `;
}
function setupCheckout(){
  const form = document.getElementById("checkout-form");
  if(!form) return;
  const totalBox = document.getElementById("checkout-total");
  const cart = getCart();
  const subtotal = cart.reduce((sum, item) => {
    const product = PRODUCTS.find(p => p.id === item.id);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);
  if(totalBox) totalBox.textContent = money(subtotal + (subtotal > 0 ? 8 : 0));
  form.addEventListener("submit", e => {
    e.preventDefault();
    const orderId = "ORD-" + Math.floor(2000 + Math.random() * 7000);
    localStorage.removeItem("demoCart");
    updateCartCount();
    form.innerHTML = `
      <div class="notice">
        Pedido demo generado correctamente: <strong>${orderId}</strong><br>
        Estado: pendiente de confirmación. Este checkout es ficticio y no procesa pagos reales.
      </div>
      <p style="margin-top:18px"><a class="btn btn-primary" href="index.html">Volver al inicio</a></p>
    `;
  });
}
function renderPolicies(){
  const target = document.getElementById("policies");
  if(!target) return;
  target.innerHTML = Object.values(POLICIES).map(p => `
    <div class="info-box">
      <h3>${p.title}</h3>
      <p>${p.text}</p>
    </div>
  `).join("");
}
function setupOrderLookup(){
  const form = document.getElementById("order-lookup");
  const result = document.getElementById("order-result");
  if(!form || !result) return;
  form.addEventListener("submit", e => {
    e.preventDefault();
    const id = document.getElementById("order-id").value.trim().toUpperCase();
    const order = DEMO_ORDERS[id];
    result.innerHTML = order
      ? `<div class="notice"><strong>${id}: ${order.status}</strong><br>${order.detail}</div>`
      : `<div class="notice" style="background:#fff7ed;border-color:#fed7aa;color:#7c2d12">No encontramos ese pedido demo. Probá con ORD-1027, ORD-1041 u ORD-1088.</div>`;
  });
}
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  renderProducts("featured-products", PRODUCTS.slice(0,4));
  renderProducts("product-grid");
  setupFilters();
  renderProductPage();
  renderCartPage();
  setupCheckout();
  renderPolicies();
  setupOrderLookup();
});
