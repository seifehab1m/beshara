import i18next from "i18next";

export const fetcher = async (url: string) => {
  try {
    const lang = i18next.language;

    const headers = {
      Accept: "application/json, text/plain, */*",
      "Accept-Language": `${lang}-eg`,
    };

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}${url}?lang=${lang}`,
      { headers }
    );

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
