import React  from 'react';
import * as firebase from 'firebase';
import momentUtil  from 'utils/moment';

const firebaseUtil = {

    sendPmAutoMessage(data) {
        const timestamp = momentUtil.getNowTime();
        const message = `Hola! mi nombre es ${data.pm_name} y 
                        estaré a cargo de tu proyecto ${data.project_name}, cuéntame un poco más 
                        de ti y detalles lo que quieres desarollar.`;

        firebase.database().ref(`chat/${data.project_id}`).push({
            message,
            timestamp,
            pmId: data.pm_id,
            name: data.pm_name
        }) 
    }


}

export default firebaseUtil;
