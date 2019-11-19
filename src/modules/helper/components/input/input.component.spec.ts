import { OjekInputComponent } from './input.component';
const loadingMessage = 'fas fa-eye-slash';

describe('OjekInputComponent', () => {
    it('should change the icon if clicked', () => {
        const input = new OjekInputComponent();
        input.eye = 'fas fa-eye';

        expect(input.eye).toEqual('fas fa-eye');

        input.changeType();
        expect(input.eye).toEqual(loadingMessage);
    });

    it('should emit click event if user click the button', () => {
        const input = new OjekInputComponent();
        input.eye = 'fas fa-eye-slash';
        expect(input.eye).toEqual('fas fa-eye-slash');

        input.clickEvent.subscribe(
            (status: boolean) => expect(status).toBeTruthy()
        );

        input.changeType();
    });
});
