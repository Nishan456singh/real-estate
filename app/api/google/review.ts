import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const { data } = await axios.get(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJW6c_TQPchVQR4JjVq5hIi9I&fields=review&key=AIzaSyB9Uim_Tz_rDsJGI-ia54ozxcs0vkTrjYY`
        );

        res.status(200).json(data.result.reviews);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}