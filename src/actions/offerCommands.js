import * as actions from './index';

export const postOffer = (offer) => (dispatch, _getState, api) => {
    api.postOffer(offer)
        .then(response=>dispatch(actions.postOfferSuccess(response)), 
            error=>dispatch(actions.postOfferError(error.message))
    );
};