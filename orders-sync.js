/* =====================================================================
   orders-sync.js  -  sends each new storefront order to your Supabase
   backend so it appears in the Seller Center instantly.

   1. Paste your two Supabase values below.
   2. Add this line in index.html, just BEFORE <script src="script.js">:
        <script src="orders-sync.js"></script>
   3. In script.js, inside handleCheckoutSubmit, replace the whole
      "if (SHOP_CONFIG.ORDER_API_URL) { ... }" block with:
        sendOrderToBackend(order);
   ===================================================================== */
const BACKEND = {
    SUPABASE_URL: 'https://isjcywsbryqntlrnuquv.supabase.co',
    SUPABASE_ANON: 'sb_publishable_IvWvD8IZi0yuc4Vs5oa89g_CadyM5Sq'
};

function sendOrderToBackend(order) {
    if (!BACKEND.SUPABASE_URL.startsWith('https://') || BACKEND.SUPABASE_ANON.startsWith('PASTE')) return;

    const row = {
        ref: order.ref,
        name: order.name,
        phone: order.phone,
        address: order.address,
        city: order.city,
        email: order.email || null,
        payment_method: order.paymentMethod,
        subtotal: Math.round(order.subtotal),
        discount: Math.round(order.discount),
        shipping: Math.round(order.shipping),
        amount: Math.round(order.amount),
        items: order.items.map(i => ({
            title: i.title,
            quantity: i.quantity,
            price: i.price,
            details: i.details || null
        })),
        status: 'to_process'
    };

    const headers = {
        'Content-Type': 'application/json',
        apikey: BACKEND.SUPABASE_ANON,
        Prefer: 'return=minimal'
    };
    // Old-style keys (start with "eyJ") also go in Authorization; new "sb_publishable_" keys must not.
    if (BACKEND.SUPABASE_ANON.startsWith('eyJ')) headers.Authorization = 'Bearer ' + BACKEND.SUPABASE_ANON;

    fetch(BACKEND.SUPABASE_URL + '/rest/v1/orders', {
        method: 'POST',
        headers,
        body: JSON.stringify(row)
    }).catch(() => { /* the WhatsApp message is still the fallback */ });
}
