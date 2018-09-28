const expect = require('expect')

describe('SPIES TEST', () => {
  it('Should called Spy', () => {
    var spy = expect.createSpy();
    spy();

    expect(spy).toHaveBeenCalled()
  })
})