import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EventInquiry from './EventInquiry';
import { submitEventInquiry } from './submitEventInquiry';

jest.mock('./submitEventInquiry');

const INQUIRY = {
    name: 'Jericho',
    email: 'jericho@example.com',
    phone: '0123456789',
    eventType: 'Tournament',
    message: 'A weekend tournament.'
};

const CONTROL_LABELS = {
    name: 'Your Name',
    email: 'Email Address',
    phone: 'Phone Number',
    eventType: 'Event Type',
    message: 'Additional Details'
};

const setControlValue = (control, value) => {
    const prototype = control instanceof HTMLTextAreaElement
        ? HTMLTextAreaElement.prototype
        : HTMLInputElement.prototype;
    const valueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
        valueSetter.call(control, value);
        control.dispatchEvent(new Event('input', { bubbles: true }));
    });
};

const submit = (form) => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true })));
};

const fillInquiry = () => {
    Object.entries(INQUIRY).forEach(([name, value]) => {
        setControlValue(screen.getByRole('textbox', { name: CONTROL_LABELS[name] }), value);
    });
};

describe('EventInquiry', () => {
    let container;
    let root;

    const renderEventInquiry = () => {
        container = document.createElement('div');
        document.body.appendChild(container);
        root = createRoot(container);
        // React 18.3 exposes act directly; the installed Testing Library still uses the deprecated wrapper.
        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(() => root.render(<EventInquiry />));
    };

    afterEach(() => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(() => root.unmount());
        container.remove();
        jest.resetAllMocks();
    });

    it('associates every label with its form control', () => {
        renderEventInquiry();

        expect(screen.getByRole('textbox', { name: 'Your Name' })).toBeInTheDocument();
        expect(screen.getByRole('textbox', { name: 'Email Address' })).toBeInTheDocument();
        expect(screen.getByRole('textbox', { name: 'Phone Number' })).toBeInTheDocument();
        expect(screen.getByRole('textbox', { name: 'Event Type' })).toBeInTheDocument();
        expect(screen.getByRole('textbox', { name: 'Additional Details' })).toBeInTheDocument();
        expect(screen.queryByRole('checkbox')).not.toBeInTheDocument();
    });

    it('prevents duplicate submissions while a request is pending', () => {
        submitEventInquiry.mockReturnValue(new Promise(() => {}));
        renderEventInquiry();
        fillInquiry();
        const form = screen.getByRole('form', { name: 'Event inquiry form' });

        submit(form);
        submit(form);

        expect(submitEventInquiry).toHaveBeenCalledTimes(1);
        expect(submitEventInquiry).toHaveBeenCalledWith(INQUIRY);
        expect(screen.getByRole('button', { name: 'SENDING...' })).toBeDisabled();
    });

    it('resets entered values after a successful submission', async () => {
        submitEventInquiry.mockResolvedValue();
        renderEventInquiry();
        fillInquiry();

        submit(screen.getByRole('form', { name: 'Event inquiry form' }));
        await act(async () => {
            await Promise.resolve();
        });

        expect(screen.getByText("✓ Message sent! We'll get back to you soon.")).toBeInTheDocument();
        Object.keys(INQUIRY).forEach((name) => {
            expect(screen.getByRole('textbox', { name: CONTROL_LABELS[name] })).toHaveValue('');
        });
    });

    it('retains values after failure and clears the status after an edit', async () => {
        submitEventInquiry.mockRejectedValue(new Error('Submission failed'));
        renderEventInquiry();
        fillInquiry();

        submit(screen.getByRole('form', { name: 'Event inquiry form' }));
        await act(async () => {
            await Promise.resolve();
        });

        expect(screen.getByText('✗ Something went wrong. Please try again.')).toBeInTheDocument();
        Object.entries(INQUIRY).forEach(([name, value]) => {
            expect(screen.getByRole('textbox', { name: CONTROL_LABELS[name] })).toHaveValue(value);
        });

        setControlValue(screen.getByRole('textbox', { name: 'Your Name' }), 'Updated name');
        expect(screen.queryByText('✗ Something went wrong. Please try again.')).not.toBeInTheDocument();
    });
});
