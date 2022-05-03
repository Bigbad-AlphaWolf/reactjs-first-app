import axios from 'axios';
import {useState, useEffect } from 'react';

export function useAxiosGet(url) {
    const [requests, setRequests] = useState({
        loading: false,
        data: null,
        error: false
    });
    useEffect(() => {
        setRequests({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url).then(
            (res) => {
                setRequests({
                    loading: false,
                    data: res.data,
                    error: false})
            }
        ).catch((err) => {
            setRequests({
                loading: false,
                data: null,
                error: true})
        })
    }, [url])
    return requests
}

