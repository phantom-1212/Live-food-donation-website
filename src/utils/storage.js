const STORAGE_KEY = 'food_donation_data';

export const saveDonation = (donation) => {
    try {
        const existingData = getDonations();
        const newData = [...existingData, {
            ...donation,
            id: Date.now(),
            timestamp: new Date().toISOString()
        }];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
        console.log('Donation saved successfully:', donation);
        return true;
    } catch (error) {
        console.error('Error saving donation:', error);
        return false;
    }
};

export const getDonations = () => {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error('Error retrieving donations:', error);
        return [];
    }
};

export const clearDonations = () => {
    localStorage.removeItem(STORAGE_KEY);
};
