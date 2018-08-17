import {
  FETCH_REQUEST, fetchRequest, 
  FETCH_SUCCESS, fetchSuccess,
  FETCH_ERROR, fetchError} from './getevents'

   describe('fetchRequest', () => {
    it('Should return the action', () => {
      const action = fetchRequest();
      expect(action.type).toEqual(FETCH_REQUEST);
    })
  })

  describe('fetchSuccess', () => {
    it('Should return the action', () => {
      const data = 'my data';
      const action = fetchSuccess(data);
      expect(action.type).toEqual(FETCH_SUCCESS);
      expect(action.data).toEqual(data);
    })
  })

  describe('fetchError', () => {
    it('Should return the action', () => {
      const err = 'ERROR';
      const action = fetchError(err);
      expect(action.type).toEqual(FETCH_ERROR);
      expect(action.err).toEqual(err);
    })
  })