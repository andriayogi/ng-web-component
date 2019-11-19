import { OjekButtonComponent } from './button.component';
const loadingMessage = 'Loading...';

describe('OjekButtonComponent', () => {
    it('should change the label if clicked', () => {
        const button = new OjekButtonComponent();
        button.label = 'Login';

        expect(button.label).toEqual('Login');

        button.changeLabel();
        expect(button.label).toEqual(loadingMessage);
    });

    it('should emit click event if user click the button', () => {
        const button = new OjekButtonComponent();
        button.label = 'Sign Up';
        expect(button.label).toEqual('Sign Up');

        button.clickEvent.subscribe(
            (status: boolean) => expect(status).toBeTruthy()
        );

        button.changeLabel();
    });
});
