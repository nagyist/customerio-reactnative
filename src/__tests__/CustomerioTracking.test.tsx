import { CustomerIO, Region } from "./../CustomerioTracking";

test('not null', () => {
    expect(CustomerIO.clearIdentify).not.toBeNull();
    expect(CustomerIO.clearIdentify).toBeDefined();
})