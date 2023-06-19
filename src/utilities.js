export default async function fetchData(url) {
  try {
    const response = await fetch(url);
    const jsonData = await response.json();
    if (response.ok) {
      return jsonData;
    }
  } catch (error) {
    return null;
  }
}

