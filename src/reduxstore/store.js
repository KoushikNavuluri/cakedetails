import { configureStore } from "@reduxjs/toolkit"
import {laxmi} from "./reducers"

var store  = configureStore({
    reducer : laxmi
})

export default store 