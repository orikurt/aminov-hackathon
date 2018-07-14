import * as actions from './index';

export const postOffer = (offer) => (dispatch, _getState, api) => {
    dispatch(actions.postOffer(offer));
    api.postOffer(offer)
        .then(response=>dispatch(actions.postOfferSuccess(response)), 
            error=>dispatch(actions.postOfferError(error.message))
    );
};