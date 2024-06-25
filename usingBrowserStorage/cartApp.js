const initializeCart = () => {
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
  }
  
  const addItem = (item) => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  const removeItem = (itemId) => {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  const displayCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
  }
  
  // Event listener for adding items to the cart
  document.getElementById('addItemForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const itemName = document.getElementById('itemName').value;
    const itemPrice = parseFloat(document.getElementById('itemPrice').value);
    const itemId = Date.now();
  
    const item = {
      id: itemId,
      name: itemName,
      price: itemPrice
    };
  
    addItem(item);
    alert('Item added to cart!');
    this.reset();
  });
  
  // Event listener for displaying the cart contents
  document.getElementById('displayCartButton').addEventListener('click', displayCart);
  
  // Initialize the cart on page load
  initializeCart();
  