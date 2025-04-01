
    let cart = [];
    const cartCountElement = document.getElementById('cart-count');
    const cartListElement = document.getElementById('cart-list');

    // Function to update the cart in the navbar
    function updateCart() {
      cartCountElement.innerText = cart.length;
      cartListElement.innerHTML = '';

      if (cart.length === 0) {
        cartListElement.innerHTML = '<li><a class="dropdown-item" href="#">Your cart is empty</a></li>';
      } else {
        cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.classList.add('dropdown-item');
          listItem.innerText = `${item.name} - $${item.price}`;
          const removeButton = document.createElement('button');
          removeButton.classList.add('btn', 'btn-danger', 'btn-sm', 'ms-2');
          removeButton.innerText = 'Remove';
          removeButton.onclick = function() {
            removeItemFromCart(item);
          };
          listItem.appendChild(removeButton);
          cartListElement.appendChild(listItem);
        });
      }
    }

    // Function to add item to the cart
    function addItemToCart(productName, productPrice) {
      cart.push({ name: productName, price: productPrice });
      updateCart();
    }

    // Function to remove item from the cart
    function removeItemFromCart(item) {
      const index = cart.indexOf(item);
      if (index > -1) {
        cart.splice(index, 1);
      }
      updateCart();

      // Show the "Add to Cart" button again for the removed item
      const addButton = document.querySelector(`[data-product="${item.name}"]`);
      const removeButton = addButton.nextElementSibling; // The remove button
      addButton.style.display = 'inline-block';
      removeButton.style.display = 'none';
    }

    // Event listeners for Add to Cart and Remove from Cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', function() {
        const productName = this.getAttribute('data-product');
        const productPrice = this.getAttribute('data-price');
        
        addItemToCart(productName, productPrice);
        
        // Hide the Add to Cart button and show Remove from Cart button
        this.style.display = 'none';
        this.nextElementSibling.style.display = 'inline-block'; // Show the remove button
      });
    });

    document.querySelectorAll('.remove-from-cart').forEach(button => {
      button.addEventListener('click', function() {
        const productName = this.getAttribute('data-product');
        const productPrice = this.getAttribute('data-price');
        
        removeItemFromCart({ name: productName, price: productPrice });
        
        // Hide the Remove from Cart button and show Add to Cart button
        this.style.display = 'none';
        this.previousElementSibling.style.display = 'inline-block'; // Show the add button
      });
    });




      // Toggle between Login and Registration pages
      function showRegistration() {
        document.getElementById("loginPage").classList.add("login-page");
        document.getElementById("loginPage").classList.remove("d-block");
        document.getElementById("registrationPage").classList.remove("login-page");
        document.getElementById("registrationPage").classList.add("d-block");
      }
  
      function showLogin() {
        document.getElementById("registrationPage").classList.add("login-page");
        document.getElementById("registrationPage").classList.remove("d-block");
        document.getElementById("loginPage").classList.remove("login-page");
        document.getElementById("loginPage").classList.add("d-block");
      }
  
      // Handle login form submission
      document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
  
        // Basic login validation (You can expand this as per your backend logic)
        if (username === "" || password === "") {
          alert("Both fields are required.");
        } else {
          alert("Login successful!");
          // After successful login, redirect or handle as needed.
        }
      });
  
      // Handle registration form submission
      document.getElementById("registrationForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const regUsername = document.getElementById("regUsername").value;
        const regPassword = document.getElementById("regPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
  
        // Basic registration validation
        if (regUsername === "" || regPassword === "" || confirmPassword === "") {
          alert("All fields are required.");
        } else if (regPassword !== confirmPassword) {
          alert("Passwords do not match.");
        } else {
          alert("Registration successful!");
          // After successful registration, you can redirect to login or handle as needed.
        }
      });

  