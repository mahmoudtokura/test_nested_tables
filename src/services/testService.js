const axios = require('axios').default;


const fetchUsersData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
}

const fetchSingleUserData = async ({userId}) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return response.data;
}

export {
    fetchUsersData,
    fetchSingleUserData
}