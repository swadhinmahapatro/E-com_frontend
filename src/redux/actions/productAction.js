import CustomToast from "../../components/toast/toast";
import axios from "../../interceptor/interceptor";
import { ProdcutFetchError, ProductFetchStart, ProductFetchSuccess, resetProductState } from "../reducers/productReducer";

export const getProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(ProductFetchStart());
      const res = await axios.get("/getproducts");
      if (res.status === 200) {
        dispatch(ProductFetchSuccess(res.data.products));
        console.log(res.data.products);
      }else{
        dispatch(ProdcutFetchError(res.data.message));
        CustomToast({ type: "error", message: res.data.message });
      }
    } catch (error) {
        dispatch(ProdcutFetchError(error.message));
    }
  };
};
export const resetProductFetch = ()=>(dispatch)=> {
    dispatch(resetProductState());
}
  