export async function fetchProducts() {
  try {
    const response = await fetch(
      "https://gowala-t3pes.ondigitalocean.app/products/",
    );

    if (!response.ok) {
      throw new Error(`Server Error: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
    throw error;
  }
}

fetchProducts();
