import axios from 'axios';

const URL = "https://cryptic-peak-71800.herokuapp.com";

// -------------------- Create User Post Request --------------------
export const createUser = async (formData) => {
    try {
        await axios.post(`${URL}/user/new`, formData,
        {headers: {'Accept': 'application/json'}})
        .then( 
        window.alert('Redirecting to login'),
        window.location = '/login')
    } catch (err) {
        console.log(err)
    }
}


// -------------------- Login Post Request ---------------------------
export const loginUser = (formData) => {
    return async (dispatch) => {    
        try {
            await axios.post(`${URL}/user/login`, formData,
            {headers: {'Accept': 'application/json'}})
            .then(res => {
                sessionStorage.setItem('Bearer', res.data.Bearer);
                sessionStorage.setItem('activeUser', res.data.user.username);
                window.location = "/"
            })
        } catch(err) {
            console.log(err)
            window.alert('The username or password does not match');
        };
    }  
};


