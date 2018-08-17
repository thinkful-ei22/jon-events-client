import {
  POST_REQUEST, postRequest, 
  POST_SUCCESS, postSuccess,
  POST_ERROR, postError} from './postevents'

   describe('postRequest', () => {
    it('Should return the action', () => {
      const action = postRequest();
      expect(action.type).toEqual(POST_REQUEST);
    })
  })

  describe('postSuccess', () => {
    it('Should return the action', () => {
      const data = 'my data';
      const action = postSuccess(data);
      expect(action.type).toEqual(POST_SUCCESS);
      expect(action.data).toEqual(data);
    })
  })

  describe('postError', () => {
    it('Should return the action', () => {
      const err = 'ERROR';
      const action = postError(err);
      expect(action.type).toEqual(POST_ERROR);
      expect(action.err).toEqual(err);
    })
  })