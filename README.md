# Azure Guitar Shop

Azure Guitar Shop is a modern, responsive web application designed to showcase a collection of electric guitars. The project dynamically loads product data from an Excel file and displays it in a visually appealing layout.

---

## Features

- **Dynamic Product Loading**: Products are loaded from an Excel file (`Azure_Guitar.xlsx`) and rendered dynamically on the page.
- **Responsive Design**: The layout adapts seamlessly to different screen sizes using CSS Grid and Flexbox.
- **Smooth Scrolling**: Navigation links provide smooth scrolling transitions to different sections of the page.
- **Video Background**: The hero section features a full-screen video background for a modern and engaging design.
- **Hover Effects**: Product cards include hover animations for an interactive user experience.

---

## Project Structure

```
Azure_Guitar.xlsx
public/
	index.html
src/
	assets/
	scripts/
		app.js
	styles/
		styles.css
```

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/azure-guitar-shop.git
   ```

2. Navigate to the project directory:
   ```bash
   cd azure-guitar-shop
   ```

3. Open the index.html file in your browser.

---

## Usage

1. **Hero Section**:
   - The hero section features a full-screen video background (`clip.mp4`) with a headline and subheading.

2. **Product List**:
   - Products are dynamically loaded from the Azure_Guitar.xlsx file and displayed in a grid layout.

3. **Navigation**:
   - Use the navigation links to scroll smoothly to different sections of the page.

---

## Technologies Used

- **HTML5**: Structure of the web application.
- **CSS3**: Styling and responsive design.
- **JavaScript**: Dynamic product loading and interactivity.
- **XLSX.js**: Parsing the Excel file to extract product data.

---

## File Descriptions

- **`public/index.html`**:
  - The main HTML file containing the structure of the web application.

- **`src/styles/styles.css`**:
  - Contains all the styles for the project, including responsive design and hover effects.

- **`src/scripts/app.js`**:
  - Handles dynamic product loading from the Excel file and rendering on the page.

- **`Azure_Guitar.xlsx`**:
  - The Excel file containing product data (e.g., name, price).

- **assets**:
  - Contains images, videos, and other assets used in the project.

---

## How It Works

1. **Loading Products**:
   - The app.js script fetches the Azure_Guitar.xlsx file and parses it using the `XLSX.js` library.
   - Product data (name, price, and image) is extracted and rendered dynamically in the product list.

2. **Responsive Design**:
   - The layout uses CSS Grid for the product list and Flexbox for the header and hero section.
   - The design adapts to different screen sizes for a seamless user experience.

3. **Smooth Scrolling**:
   - Smooth scrolling is implemented using the `scroll-behavior: smooth;` property in CSS and JavaScript for enhanced navigation.

---

## Screenshots

### Hero Section
- A full-screen video background with a headline and subheading.

### Product List
- A responsive grid layout displaying dynamically loaded products.

---

## Future Enhancements

- Add a shopping cart feature for users to save selected products.
- Implement a search bar to filter products by name or category.
- Add animations for page transitions using libraries like Framer Motion.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Acknowledgments

- **XLSX.js**: For enabling Excel file parsing.
- **Unsplash**: For placeholder images used in the project.
