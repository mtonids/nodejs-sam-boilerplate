import apiResponse from '../../layers/lib/api/response.js';

export default async (event, context) => {
    try {
        return apiResponse({ message: 'pong' }, []);
    } catch (err) {
        throw new Error(err.message);
    }
};
