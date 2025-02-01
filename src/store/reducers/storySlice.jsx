import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    storyData:[
        {
            name: "olivia george",
            profileImage: "https://images.unsplash.com/photo-1737991864069-508dd72239fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
            story: "https://images.unsplash.com/photo-1737991878092-d3be52a76735?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "john dev",
            profileImage: "https://images.unsplash.com/photo-1738162571972-d8337de941e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D",
            story: "https://images.unsplash.com/photo-1735945205189-ead34d91cf69?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjN8fHxlbnwwfHx8fHw%3D"
        },

        {
            name: "mark lucifer",
            profileImage: "https://images.unsplash.com/photo-1738070593158-9e84a49e7e60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D",
            story: "https://images.unsplash.com/photo-1735760672905-954da053c445?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5MHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "bil clinton",
            profileImage: "https://images.unsplash.com/photo-1738058223926-c82cf2128f6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D",
            story: "https://images.unsplash.com/photo-1737994872505-385ecc9a06e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "trump agvero",
            profileImage: "https://plus.unsplash.com/premium_photo-1736880269895-84c3265dbfc3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D",
            story: "https://images.unsplash.com/photo-1737270019710-62b36a249aca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "sui george",
            profileImage: "https://images.unsplash.com/photo-1737994874349-9da316080f17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4MHx8fGVufDB8fHx8fA%3D%3D",
            story: "https://images.unsplash.com/photo-1737994874349-9da316080f17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDh8fHxlbnwwfHx8fHw%3D"
        },

        {
            name: "jennifer george",
            profileImage: "https://images.unsplash.com/photo-1737845079400-1d04c3f2ab5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTB8fHxlbnwwfHx8fHw%3D",
            story: "https://plus.unsplash.com/premium_photo-1737812925231-4221c9b0584f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTN8fHxlbnwwfHx8fHw%3D"
        },
        
    ]
}

const storySlice = createSlice({
    name: "story",
    initialState,
})

export default storySlice.reducer