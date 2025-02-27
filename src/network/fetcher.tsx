export const fetcher = async (url: string) => {
  try {
    const headers = {
      Accept: "application/json, text/plain, */*",
    };

    const response = await fetch(`${import.meta.env.VITE_API_URL}${url}`, {
      headers,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
