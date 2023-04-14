export const getRequest = async (endPoint) => {
  try {
    let responce = await fetch(endPoint, {
      method: "GET",
    });
    
    let json = await responce.json();

    return json;

  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
};
