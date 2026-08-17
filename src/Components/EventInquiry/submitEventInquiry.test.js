import { submitEventInquiry } from './submitEventInquiry';

const INQUIRY = {
    name: 'Jericho',
    email: 'jericho@example.com',
    phone: '0123456789',
    eventType: 'Tournament',
    message: 'A weekend tournament.'
};

describe('submitEventInquiry', () => {
    const originalAccessKey = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;
    const originalFetch = global.fetch;

    beforeEach(() => {
        process.env.REACT_APP_WEB3FORMS_ACCESS_KEY = 'test-access-key';
        global.fetch = jest.fn();
    });

    afterEach(() => {
        if (originalAccessKey === undefined) {
            delete process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;
        } else {
            process.env.REACT_APP_WEB3FORMS_ACCESS_KEY = originalAccessKey;
        }
        global.fetch = originalFetch;
    });

    it('constructs the Web3Forms payload internally', async () => {
        global.fetch.mockResolvedValue({ ok: true });

        await expect(submitEventInquiry(INQUIRY)).resolves.toBeUndefined();
        expect(global.fetch).toHaveBeenCalledWith('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                access_key: 'test-access-key',
                ...INQUIRY
            })
        });
    });

    it('throws before making a request when configuration is missing', async () => {
        delete process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;

        await expect(submitEventInquiry(INQUIRY))
            .rejects.toThrow('Event inquiry submission is not configured.');
        expect(global.fetch).not.toHaveBeenCalled();
    });

    it('throws for a non-success response', async () => {
        global.fetch.mockResolvedValue({ ok: false });

        await expect(submitEventInquiry(INQUIRY))
            .rejects.toThrow('Event inquiry submission failed.');
    });

    it('propagates network failures', async () => {
        const networkError = new Error('Network unavailable');
        global.fetch.mockRejectedValue(networkError);

        await expect(submitEventInquiry(INQUIRY)).rejects.toBe(networkError);
    });
});
