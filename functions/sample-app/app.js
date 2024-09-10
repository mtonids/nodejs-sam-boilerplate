import apiResponse from '../../layers/lib/api/response.js';

const handler = async (event, context) => {
    try {
        return apiResponse({ message: 'pong' }, []);
    } catch (err) {
        throw new Error(err.message);
    }
};

export default handler;
