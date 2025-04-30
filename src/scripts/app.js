const products = [];
const productList = document.querySelector('.product-list');
const cart = [];

// Function to load product data from Azure_Guitar.xlsx
async function loadProducts() {
  try {
    // Fetch the Excel file
    const response = await fetch('../Azure_Guitar.xlsx');
    const arrayBuffer = await response.arrayBuffer();

    // Parse the Excel file
    const sheetname = 'Test';
    const workbook = XLSX.read(arrayBuffer, { type: 'array' });
    const sheet = workbook.Sheets[sheetname];
    if (!sheet) {
      console.error('Sheet not found:', sheetname);
      return;
    }

    // Convert sheet data to JSON
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    console.log('Data loaded:', data);
    if (data.length === 0) {
      console.error('No data found in the sheet:', sheetname);
      return;
    }

    // Extract product info (skip the header row)
    data.forEach(row => {
      const [_, name, price] = row; // Column B (name) and Column C (price)
      if (name && price) {
        const imageName = name + '.jpg';
        const imagePath = `../src/assets/${imageName}`;
        console.log(imagePath);

        products.push({ name, price: `${price}₫`, image: imagePath });
      }
    });

    // Render products
    renderProducts();
  } catch (error) {
    console.error('Error loading products:', error);
  }
}

// Function to render products on the page
function renderProducts() {
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <h4>${product.price}</h4>
    `;
    productList.appendChild(productDiv);
  });
}

// Load products when the page loads
loadProducts();