

        //code for search bar
        const product = [
            { id: 1, name: "Product 1" },
            { id: 2, name: "Product 2" },
            { id: 3, name: "Product 3" },
            { id: 4, name: "Product 4" },
            { id: 5, name: "Product 5" },
            { id: 6, name: "Product 6" },
            { id: 7, name: "Product 7" },
            { id: 8, name: "Product 8" },
            { id: 9, name: "Product 9" },
            //more products as needed
        ];

        function search() {
            const searchTerm = document.getElementById("searchInput").value.toLowerCase();
            const searchResults = product.filter(product => product.name.toLowerCase().includes(searchTerm));
            displaySearchResults(searchResults);
        }

        function displaySearchResults(results) {
            const searchResultsContainer = document.getElementById("searchResults");
            searchResultsContainer.innerHTML = "";
            if (results.length === 0) {
                searchResultsContainer.textContent = "No results found.";
            } else {
                results.forEach(result => {
                    const resultElement = document.createElement("div");
                    resultElement.textContent = result.name;
                    searchResultsContainer.appendChild(resultElement);
                });
            }
        }

    









        
        function toggleUserData() {
            var userDataCard = document.getElementById("userDataCard");
            userDataCard.classList.toggle("hidden");
        }

        function toggleSignUp() {
            var signUpCard = document.getElementById("signUpCard");
            signUpCard.classList.toggle("hidden");
        }

        function validateForm() {
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;

            if (email.trim() === "" || password.trim() === "") {
                alert("Please fill in all fields.");
                return false;
            }

            return true;
        }

        function validateSignUp() {
            var firstName = document.getElementById("signupFirstName").value;
            var lastName = document.getElementById("signupLastName").value;
            var email = document.getElementById("signupEmail").value;
            var password = document.getElementById("signupPassword").value;

            if (firstName.trim() === "" || lastName.trim() === "" || email.trim() === "" || password.trim() === "") {
                alert("Please fill in all fields.");
                return false;
            }

            return true;
        }
    











    
        function showPurchaseForm() {
            var purchaseForm = document.getElementById("purchaseForm");
            purchaseForm.classList.remove("hidden");
        }

        function hidePurchaseForm() {
            var purchaseForm = document.getElementById("purchaseForm");
            purchaseForm.classList.add("hidden");
            // Clear form inputs
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("address").value = "";
            document.getElementById("payment").selectedIndex = 0;
        }

        function submitPurchase() {
            // Add functionality to submit purchase form
            alert("Purchase submitted!");
        }
    












        // Function to show notification when "Add to Cart" button is clicked
       function addToCartBtn() {
            // Create notification element
            var notification = document.createElement("div");
            notification.classList.add("fixed", "top-4", "right-4", "bg-blue-500", "text-white", "p-4", "rounded-md", "shadow-md");
            notification.textContent = "New product added to cart";

            // Append notification to the document
            document.body.appendChild(notification);

            // Remove notification after 5 seconds
            setTimeout(function () {
                notification.remove();
            }, 2000);
        };
    














    
        // Toggle cart navigation bar visibility when cart icon is clicked
        function cartIconContainer(){
            var cartNav = document.getElementById("cartNav");
            cartNav.style.display = cartNav.style.display === "none" ? "block" : "none";
        };

        // Close cart navigation bar when close button is clicked
        function closeCartNav(){
            var cartNav = document.getElementById("cartNav");
            cartNav.style.display = "none";
        };
    




