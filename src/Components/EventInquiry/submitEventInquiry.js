const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export async function submitEventInquiry(inquiry) {
    const accessKey = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
        throw new Error('Event inquiry submission is not configured.');
    }

    const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            access_key: accessKey,
            ...inquiry
        })
    });

    if (!response.ok) {
        throw new Error('Event inquiry submission failed.');
    }
}
