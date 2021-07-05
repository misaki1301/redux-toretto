import {createSlice} from '@reduxjs/toolkit'

export const carSlice = createSlice({
    name: 'cars',
    initialState: [
        {id:1, title: 'Ford Mustang GT', image: 'https://barrettjacksoncdn.azureedge.net/staging/carlist/items/Fullsize/Cars/226379/226379_Front_3-4_Web.jpg', isAvailable: false},
        {id:2, title: 'Nissan Skyline GTR R34',image: 'https://www.diariomotor.com/imagenes/2017/12/nissan-gt-r-v-spec-ii-nur-subasta-1217-002.jpg', isAvailable: false},
        {id:3, title: 'Porsche Camaro GT',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCMs_jC4lCf5PObyoeSSfroZYFHD8GVrP6xWADml0Zjp8boMymfNq33E5j5Pa5JqTFU5E&usqp=CAU', isAvailable: false},
    ],
    reducers: {
        addCar: (state, action) => {
            const car = {
                id: new Date(),
                title: action.payload.title,
                image: action.payload.image,
                isAvailable: false,
            };
            state.push(car)
        }
    }
})

export const {addCar} = carSlice.actions;
export default carSlice.reducer;
