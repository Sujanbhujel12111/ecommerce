    // Mobile Menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const overlay = document.getElementById('overlay');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    mobileMenuClose.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    overlay.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Countdown Timer
    function updateCountdown() {
        const now = new Date();
        const hours = 23 - now.getHours();
        const minutes = 59 - now.getMinutes();
        const seconds = 59 - now.getSeconds();

        const countdownItems = document.querySelectorAll('.countdown-item');
        countdownItems[0].textContent = hours.toString().padStart(2, '0');
        countdownItems[2].textContent = minutes.toString().padStart(2, '0');
        countdownItems[4].textContent = seconds.toString().padStart(2, '0');
    }

    // Update countdown every second
    setInterval(updateCountdown, 1000);
    updateCountdown();

    // Product Cards Hover Effect
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('click', () => {
            // Simulate going to product page
            console.log('Product clicked');
        });
    });

    // Banner Slideshow
    const banners = document.querySelectorAll('.banner');
    let currentBanner = 0;

    function showBanner(index) {
        banners.forEach((banner, i) => {
            if (i === index) {
                banner.style.display = 'block';
            } else {
                banner.style.display = 'none';
            }
        });
    }

    function nextBanner() {
        currentBanner = (currentBanner + 1) % banners.length;
        showBanner(currentBanner);
    }

    // Change banner every 5 seconds
    if (banners.length > 1) {
        setInterval(nextBanner, 5000);
        showBanner(0);
    }

    // Simulate Add to Cart functionality
    function addToCart(productId, productName, price) {
        console.log(`Added to cart: ${productName} for $${price}`);
        // Here you would typically:
        // 1. Update cart count
        // 2. Show notification
        // 3. Update localStorage or send to backend
        
        // Simple notification
        alert(`${productName} added to your cart!`);
    }

    // Add event listeners for category navigation
    const categoryLinks = document.querySelectorAll('.nav-category');
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Remove active class from all links
            categoryLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            link.classList.add('active');
            
            // Here you would typically:
            // 1. Load products for the selected category
            // 2. Update URL
            console.log(`Category selected: ${link.textContent}`);
        });
    });

    // Simulate Search functionality
    const searchBar = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');

    searchButton.addEventListener('click', () => {
        const searchTerm = searchBar.value.trim();
        if (searchTerm) {
            console.log(`Searching for: ${searchTerm}`);
            // Here you would typically:
            // 1. Navigate to search results page
            // 2. Or filter products in current page
            alert(`Search results for: ${searchTerm}`);
        }
    });

    // Allow search on Enter key
    searchBar.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });

    // Handle window resize for responsive adjustments
    window.addEventListener('resize', () => {
        // Reset mobile menu when resizing to desktop
        if (window.innerWidth > 768) {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Simulate lazy loading for images
    document.addEventListener('DOMContentLoaded', () => {
        const lazyImages = document.querySelectorAll('.product-img');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const image = entry.target;
                        // In a real implementation, you would set the src here
                        // image.src = image.dataset.src;
                        observer.unobserve(image);
                    }
                });
            });
            
            lazyImages.forEach(img => imageObserver.observe(img));
        }
    });
