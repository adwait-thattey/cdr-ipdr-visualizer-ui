import axios from './axios';


const getClusterInfo = async (filters) => {
    const { 
        location_lat, location_long, location_radius, 
        cdr, ipdr, 
        time_start, time_end, 
        duration_min, duration_max, 
        frequency_min, frequency_max,
        phone_number, exclude_these_phone_number,
        user_id, exclude_these_user_id,
        cell_id, exclude_these_cell_id,
    } = filters;
    
    
    const params = {}

    if (!cdr || !ipdr) {
        if (cdr) params.type = "cdr";
        else if(ipdr) params.type = "ipdr";
    }

    if (location_lat && location_long) {
        params.location_lat = location_lat;
        params.location_long = location_long;
        if (location_radius) params.location_radius = location_radius;
    }

    if (time_start) params.time_start = time_start
    if (time_end) params.time_end = time_end


    if (duration_min) params.duration_min = duration_min
    if (duration_max) params.duration_max = duration_max


    if (frequency_min) params.frequency_min = frequency_min
    if (frequency_max) params.frequency_max = frequency_max


    if (phone_number && phone_number.length > 0) {
        if (exclude_these_phone_number) {
            const query = genQueryString2(phone_number, "not_phone_number")
            params["not_phone_number"] = query;
        }
        else {
            const query = genQueryString2(phone_number, "phone_number")
            params["phone_number"] = query;
        }
    }

    if (user_id && user_id.length > 0) {
        if (exclude_these_user_id) {
            const query = genQueryString2(phone_number, "not_user_id")
            params["not_user_id"] = query;
        }
        else {
            const query = genQueryString2(phone_number, "user_id")
            params["user_id"] = query;
        }
    }

    if (cell_id && cell_id.length > 0) {
        if (exclude_these_user_id) {
            const query = genQueryString2(phone_number, "not_user_id")
            params["not_user_id"] = query;
        }
        else {
            const query = genQueryString2(phone_number, "user_id")
            params["user_id"] = query;
        }
        if (exclude_these_cell_id) params.not_cell_id = cell_id
        else params.cell_id = cell_id
    }

    // COMMUNITY API
    const result = await axios.get('/data', {
        params
    })
    return result.data;
}


const genQueryString2 = (list, key) => {
    let queryString = "";
    // 9095646986

    for (let i = 0; i < list.length; i++) {
        if (i === list.length - 1 && i == 0) queryString += `${list[i]}`;
        else if (i === list.length - 1) queryString += `${key}=${list[i]}`;
        else if (i === 0) queryString += `${list[i]}&`;
        else queryString += `${key}=${list[i]}&`
    }

    return queryString;
}


export { getClusterInfo }