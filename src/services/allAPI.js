import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

// saveVideoAPI
export const saveVideoAPI = async (videoDetails)=>{
    return await commonAPI("POST",`${SERVERURL}/uploadVideos`,videoDetails)
}

// getAllVideosAPI
export const getAllVideosAPI = async ()=>{
    return await commonAPI("GET",`${SERVERURL}/uploadVideos`,{})
}

// saveHistoryAPI
export const saveHistoryAPI = async (historyDetails)=>{
    return await commonAPI("POST",`${SERVERURL}/history`,historyDetails)
}

// getAllHistoryAPI
export const getAllHistoryAPI = async ()=>{
    return await commonAPI("GET",`${SERVERURL}/history`,{})
}

// deleteHistoryAPI
export const deleteHistoryAPI = async (id)=>{
    return await commonAPI("DELETE",`${SERVERURL}/history/${id}`,{})
}

// removeVideoAPI
export const removeVideoAPI = async (id)=>{
    return await commonAPI("DELETE",`${SERVERURL}/uploadVideos/${id}`,{})
}

// saveCategoryAPI
export const saveCategoryAPI = async (categoryDetails)=>{
    return await commonAPI("POST",`${SERVERURL}/categories`,categoryDetails)
}

// getAllCategoryAPI
export const getAllCategoryAPI  = async ()=>{
    return await commonAPI("GET",`${SERVERURL}/categories`,{})
}

// deleteCategoryAPI
export const deleteCategoryAPI  = async (id)=>{
    return await commonAPI("DELETE",`${SERVERURL}/categories/${id}`,{})
}

// updateCatgoryAPI
export const updateCatgoryAPI = async (categoryDetails)=>{
    return await commonAPI("PUT",`${SERVERURL}/categories/${categoryDetails.id}`,categoryDetails)
}