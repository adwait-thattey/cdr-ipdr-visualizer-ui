import axios from './axios';


const getFilteredData = async (filters) => {
    const { 
        location_lat, location_long, location_radius, 
        cdr, ipdr, 
        time_start, time_end, 
        duration_min, duration_max, 
        frequency_min, frequency_max,
        phone_number, exclude_these_phone_number,
        user_id, exclude_these_user_id,
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
        if (exclude_these_phone_number) params.not_phone_number = phone_number
        else params.phone_number = phone_number
    }

    if (user_id && user_id.length > 0) {
        if (exclude_these_user_id) params.not_user_id = user_id
        else params.user_id = user_id
    }

    return await axios.get('/filters', {
        params
    })
}

export { getFilteredData }