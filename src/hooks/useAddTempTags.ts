import {useDispatch} from "react-redux";
import {useCallback} from "react";
import {addTempTags} from "../store/reducer";

export const useAddTempTags = () => {
  const dispatch = useDispatch()

  return useCallback((value: string) => {
    dispatch(
        addTempTags(
            value.split(' ').filter((el) => el.startsWith("#") && el.length > 1)
        )
    )
  }, [])
}