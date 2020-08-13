import React from 'react';
import {create} from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";

describe('Profile status component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status='it-kamasura.org' />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('it-kamasura.org');
    });

    test('after creation span should be displayed with correct status', () => {
        const component = create(<ProfileStatus status='it-kamasura.org' />);
        const root = component.root;
        const span = root.findByType("span");
        expect(span.length).not.toBeNull();
    });

    test('after creation input shouldnt be displayed with correct status', () => {
        const component = create(<ProfileStatus status='it-kamasura.org' />);
        const root = component.root;

        expect(() => {
            const input = root.findByType("input");
        }).toThrow();
    });

    test('after creation span should be contains correct status', () => {
        const component = create(<ProfileStatus status='it-kamasura.org' />);
        const root = component.root;
        const span = root.findByType("span");
        expect(span.children[0]).toBe('it-kamasura.org');
    });

    test('input should be displayed in editmode instead of span', () => {
        const component = create(<ProfileStatus status='it-kamasura.org' />);
        const root = component.root;
        const span = root.findByType("span");
        span.props.onDoubleClick();
        const input = root.findByType('input');

        expect(input.props.value).toBe('it-kamasura.org');
    });

    test('callback should be called', () => {
        const mockCallback = jest.fn(x => 42 + x);
        const component = create(<ProfileStatus status='it-kamasura.org' updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deActivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});