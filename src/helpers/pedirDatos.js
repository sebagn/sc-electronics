export const pedirDatos = () => {
    const urlAPI = 'https://619a568d9022ea0017a7b119.mockapi.io/apitest/v1/stock';
    return(
    fetch(urlAPI)
        .then((res) => res.json())
    )
};