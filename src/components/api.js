// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDUQryaX5GLaQYSf0D36dRItLKhK2xwFUU",
//     authDomain: "vanlife-c9107.firebaseapp.com",
//     projectId: "vanlife-c9107",
//     storageBucket: "vanlife-c9107.appspot.com",
//     messagingSenderId: "1008281243728",
//     appId: "1:1008281243728:web:6818fdf68f7943d9e78155"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

export async function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms)
    })
}

// get vans api 
export async function getVans(id) {
    await sleep(1000)
    const url = id ? `/api/vans/${id}` : "/api/vans"
    const res = await fetch(url);
    if (!res.ok) {
        // eslint-disable-next-line no-throw-literal
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json();
    return data.vans;
}



export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
    const res = await fetch(url);

    if (!res.ok) {
        // eslint-disable-next-line no-throw-literal
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json();
    return data.vans;
}



// login user api 
export async function loginUser(creds) {
    await sleep(1000)
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    );
    const data = await res.json();

    if (data.status === 404) {
        throw new Error(data.statusText);
    }
    return data;
}