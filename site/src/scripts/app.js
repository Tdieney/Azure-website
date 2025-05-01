const products = [];
const productLists = {
  "electric-guitar": document.querySelector("#electric-guitar .product-list"),
  "mfx": document.querySelector("#mfx .product-list"),
  "pedal": document.querySelector("#pedal .product-list"),
  "bass": document.querySelector("#bass .product-list"),
};

// Function to load product data from Azure_Guitar.xlsx
async function loadProducts() {
  try {
    const response = await fetch('Azure_Guitar.xlsx');
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const arrayBuffer = await response.arrayBuffer();

    const sheetname = 'Test';
    const workbook = XLSX.read(arrayBuffer, { type: 'array' });
    const sheet = workbook.Sheets[sheetname];
    if (!sheet) {
      console.error('Sheet not found:', sheetname);
      return;
    }

    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    if (data.length === 0) {
      console.error('No data found in the sheet:', sheetname);
      return;
    }

    // Extract product info (skip the header row)
    data.forEach(row => {
      const [_, name, price] = row; // Column A (category), B (name), C (price)
      if (name && price) {
        const imageName = name + '.jpg';
        const imagePath = `src/assets/${imageName}`;
        products.push({ category: "electric-guitar", name, price: `${price}₫`, image: imagePath });
      }
    });

    // Render products
    renderProducts();
  } catch (error) {
    console.error('Error loading products:', error);
  }
}

// Function to render products in their respective sections
function renderProducts() {
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <h4>${product.price}</h4>
    `;

    // Append the product to the correct category section
    const productList = productLists[product.category.toLowerCase()];
    if (productList) {
      productList.appendChild(productDiv);
    }
  });
}

// Load products when the page loads
loadProducts();

// Detect scroll event with debounce
let isScrolling = false;
let scrollTimeout;
let currentValidSectionIndex = 0;

// Define sections in the order they appear on the page
const sections = Array.from(document.querySelectorAll("section, header"));
console.log("Sections found:", sections);

window.addEventListener("scroll", () => {
  // Clear the previous timeout for debounce
  clearTimeout(scrollTimeout);

  // Set a new timeout to debounce the scroll event
  scrollTimeout = setTimeout(() => {
    if (!isScrolling) {
      isScrolling = true;

      // Find the current section the user is standing in
      let currentSectionIndex = sections.findIndex(section => {
        const rect = section.getBoundingClientRect();
        return rect.top >= 0 && rect.top < window.innerHeight / 2;
      });

      console.log("Current section index:", currentValidSectionIndex, sections[currentValidSectionIndex]);

      // Scroll to the next section if it exists
      if (currentSectionIndex !== -1 && currentSectionIndex < sections.length - 1) {
        currentValidSectionIndex = currentSectionIndex;
      }

      if (currentValidSectionIndex < sections.length - 1) {
        // Scroll to the next section
        const nextSection = sections[currentValidSectionIndex + 1];
        // const heroSection = document.querySelector("#hero");
        // console.log("Hero section:", heroSection);
        // console.log("Next section:", nextSection);
        // nextSection.scrollIntoView({
        //   behavior: "smooth",
        //   block: "center"
        // });
      }

      // Reset scrolling flag after the animation
      setTimeout(() => {
        isScrolling = false;
      }, 1000); // Adjust timeout to match the scroll duration

      let oldSectionIndex = currentSectionIndex;
    }
  }, 50); // Debounce delay (200ms)
});