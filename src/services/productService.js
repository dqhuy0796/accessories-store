import * as request from "@/utils/baseRequest";

/** PRODUCT */

export const getCategoriesService = async () => {
    const path = "category/get";

    const payload = {};

    try {
        const result = await request.getApi(path, payload);
        return result;
    } catch (error) {
        console.log(error);
    }
};

export const getMaterialsService = async () => {
    const path = "material/get";

    const payload = {};

    try {
        const result = await request.getApi(path, payload);
        return result;
    } catch (error) {
        console.log(error);
    }
};

export const getProductsCountService = async () => {
    const path = "product/count";

    const payload = {};

    try {
        const result = await request.getApi(path, payload);
        return result;
    } catch (error) {
        console.log(error);
    }
};

export const getProductsService = async (categories, page) => {
    const path = "product/get";

    const payload = {
        categories,
        page,
    };

    try {
        const result = await request.getApi(path, payload);
        return result;
    } catch (error) {
        console.log(error);
    }
};

export const getProductByIdService = async (product_id) => {
    const path = "product/get";

    const payload = {
        product_id,
    };

    try {
        const result = await request.getApi(path, payload);
        return result;
    } catch (error) {
        console.log(error);
    }
};
