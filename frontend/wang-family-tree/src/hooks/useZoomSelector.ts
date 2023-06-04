import { useAppSelector, useAppDispatch } from "./reduxHooks";
import { setZoom } from "../store/zoomSlice";

export const useZoomSelector = () => {
  const zoom = useAppSelector((state) => state.zoom.transform);
  const dispatch = useAppDispatch();

  const setNewZoom = (newZoom: Array<number>) => {
    dispatch(setZoom(newZoom));
  };

  return { zoom, setNewZoom };
};
