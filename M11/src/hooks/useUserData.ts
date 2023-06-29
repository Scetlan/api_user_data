import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { IUserData, meRequestAsync } from "../shared/store/me/actions";


export function useUserData() {
    const data = useSelector<RootState, IUserData>(state => state.me.data);
    const loading = useSelector<RootState, boolean>(state => state.me.loading);
    
    const token = useSelector<RootState, string>((state: RootState) => state.token);
    // const [data, setData] = useState<IUserData>({});
    const dispatch = useDispatch();

    useEffect(() => {
        if (!token) return;
        dispatch(meRequestAsync());
    }, [token]);

    return [data];
}