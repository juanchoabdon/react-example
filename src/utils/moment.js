import React  from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import 'moment/locale/es';
import moment from 'moment'

Moment.globalLocale = 'es';

const timezone = moment.tz.guess();

const momentUtil = {

    getDate(unix) {
        return (
                <Moment unix tz={timezone} locale="es" fromNow>
                    { unix }
                </Moment>
            )
    },

    getNowTime() {
        return moment().tz(timezone).unix();
    }

}

export default momentUtil;
