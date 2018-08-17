import {
  REGISTER_REQUEST, registerRequest, 
  REGISTER_SUCCESS, registerSuccess,
  REGISTER_ERROR, registerError} from './users'

   describe('registerRequest', () => {
    it('Should return the action', () => {
      const action = registerRequest();
      expect(action.type).toEqual(REGISTER_REQUEST);
    })
  })

  describe('registerSuccess', () => {
    it('Should return the action', () => {
      const data = 'my data';
      const action = registerSuccess(data);
      expect(action.type).toEqual(REGISTER_SUCCESS);
      expect(action.data).toEqual(data);
    })
  })

  describe('registerError', () => {
    it('Should return the action', () => {
      const err = 'ERROR';
      const action = registerError(err);
      expect(action.type).toEqual(REGISTER_ERROR);
      expect(action.err).toEqual(err);
    })
  })