import axios from 'axios';

// import React, { useState } from 'react';

// const API_BASE_URL = 'http://localhost:5000/api'; 
// const API_BASE_URL = 'https://rlt-edzaro-1.onrender.com/api'; // Replace with your backend URL

const API_BASE_URL = 'https://api.rltedzaro.com/api'; 

export const submitHiringPartner = async (data) => {
    try {
        console.log('sending data to backend:', data);
        const response = await axios.post(`${API_BASE_URL}/hire`, data);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || "Error submitting form.");
    }
};

export const submitReference = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/refer`, data);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || "Error submitting form.");
    }   
};


export const SubmitEnquiryForm = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/enquire`, data);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error || "Error submitting form.");
    }
};

export const CallbackRequest = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/callback`, data);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error || "Error submitting form.");
    }
};

export const submitContactForm = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/contact`, data);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error || "Error submitting form.");
    }
};


export const submitApplicationForm = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/registration`, data);
        return response.data;
    } catch (error) {
        // Make it safe: check if error.response exists
        const errMsg =
            error.response && error.response.data && error.response.data.message
                ? error.response.data.message
                : "Error submitting form.";
        throw new Error(errMsg);
    }   
};

export const EnquiryForm = async(data) =>{

try{
    const response = await axios.post(`${API_BASE_URL}/enquiry`, data);
    return response.data
}catch (error){
 const errMsg =
            error.response && error.response.data && error.response.data.message
                ? error.response.data.message
                : "Error submitting Enquiry";
        throw new Error(errMsg);
}

}